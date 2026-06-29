#!/usr/bin/env python3
"""
JPA Entity 자바 파일들을 정적 파싱해 peek_orm.json (Render의 tier-1 ORM 신호)을 만든다.

추출 대상:
  - @Entity 클래스마다: 클래스명, FQN, @Table name
  - 각 영속 필드: 자바 타입, @Column 메타(name/nullable/length/precision),
                  @Convert 컨버터, @Enumerated, @JoinColumn, 관계 어노테이션,
                  필드 위 Javadoc

PostgreSQL 부팅 없이 정적 분석만으로 ORM 매핑 정보 전체를 확보.
정규식 기반 (javaparser 의존성 없이) — JPA 패턴이 일관적이라 정규식으로 충분.

산출 구조:
{
  "source": "apache/fineract @Entity classes (static parse)",
  "fineract_commit": "...",
  "entity_count": N,
  "field_count": M,
  "entities": [
    {
      "class_name": "Loan",
      "fqn": "org.apache.fineract.portfolio.loanaccount.domain.Loan",
      "table_name": "m_loan",
      "source_file": "corpus/.../Loan.java",
      "fields": [
        {
          "java_field": "loanStatus",
          "java_type": "LoanStatus",
          "column": {"name": "loan_status_id", "nullable": false},
          "converter": "LoanStatusConverter",
          "enumerated": null,
          "join_column": null,
          "relationship": null,
          "javadoc": "...",
          "line": 234
        }, ...
      ]
    }, ...
  ]
}
"""
import argparse, json, re, subprocess
from pathlib import Path

# --- 정규식들 ------------------------------------------------------------

RE_PACKAGE   = re.compile(r"^package\s+([\w.]+);", re.M)
RE_CLASS_DEF = re.compile(r"(?:public\s+)?(?:abstract\s+)?class\s+(\w+)")
RE_TABLE     = re.compile(r'@Table\s*\(\s*name\s*=\s*"([^"]+)"')
# 어노테이션 한 줄 단위 — 가장 간단한 패턴 (Fineract 코드 컨벤션이 일관적)
RE_COLUMN    = re.compile(r'@Column\s*\(([^)]*)\)')
RE_CONVERT   = re.compile(r'@Convert\s*\(\s*converter\s*=\s*([\w.]+)\.class\s*\)')
RE_ENUM      = re.compile(r'@Enumerated\s*\(\s*(?:EnumType\.)?(\w+)\s*\)')
RE_JOIN_COL  = re.compile(r'@JoinColumn\s*\(([^)]*)\)')
RE_REL       = re.compile(r'@(ManyToOne|OneToMany|OneToOne|ManyToMany|ElementCollection)\b')
RE_FIELD_DECL = re.compile(
    r'^\s*(?:private|protected|public)\s+(?:final\s+)?'
    r'([\w<>,\s.?]+?)\s+(\w+)\s*[;=]', re.M)


def parse_column_args(args_str):
    """@Column(name="...", nullable=false, length=...) 인자 파싱"""
    out = {}
    for m in re.finditer(r'(\w+)\s*=\s*"([^"]*)"', args_str):
        out[m.group(1)] = m.group(2)
    for m in re.finditer(r'(\w+)\s*=\s*(true|false)\b', args_str):
        out[m.group(1)] = m.group(2) == "true"
    for m in re.finditer(r'(\w+)\s*=\s*(\d+)\b', args_str):
        out[m.group(1)] = int(m.group(2))
    return out


def extract_javadoc(lines, field_line_idx):
    """필드 선언 위 라인들에서 가장 가까운 Javadoc 블록(/** ... */) 추출."""
    # 위로 거슬러 올라가며 비주석 라인을 만나거나 어노테이션이 아니면 중단
    i = field_line_idx - 1
    while i >= 0:
        stripped = lines[i].strip()
        if not stripped or stripped.startswith("@") or stripped.startswith("//"):
            i -= 1; continue
        if stripped.endswith("*/"):
            # Javadoc 끝 발견, 시작 찾기
            end = i
            while i >= 0 and "/**" not in lines[i]:
                i -= 1
            if i < 0:
                return None
            block = "\n".join(lines[i:end+1])
            # /* */ 제거하고 줄별 * 정리
            text = re.sub(r'/\*\*|\*/', '', block)
            text = re.sub(r'^\s*\*\s?', '', text, flags=re.M)
            return text.strip() or None
        return None
    return None


def parse_entity(java_path: Path, corpus_root: Path):
    """한 자바 파일 안의 모든 @Entity 클래스를 추출."""
    text = java_path.read_text(errors="ignore")
    # 빠른 거르기: @Entity 없으면 skip
    if "@Entity" not in text:
        return []

    pkg_m = RE_PACKAGE.search(text)
    package = pkg_m.group(1) if pkg_m else ""
    lines = text.split("\n")

    entities = []
    # @Entity 위치들 찾기
    for ent_m in re.finditer(r'^@Entity\b', text, re.M):
        # 그 다음 class 정의 찾기
        post = text[ent_m.end():]
        cls_m = RE_CLASS_DEF.search(post)
        if not cls_m:
            continue
        class_name = cls_m.group(1)
        # 같은 위치에서 @Table 찾기 (@Entity와 class 사이)
        tbl_window = text[ent_m.start(): ent_m.end() + cls_m.end() + 200]
        tbl_m = RE_TABLE.search(tbl_window)
        table_name = tbl_m.group(1) if tbl_m else None
        if not table_name:
            # @Table 없이 @Entity만 — JPA default(클래스명 lower)
            table_name = class_name.lower()

        # 클래스 본문 추출 (간단: class 시작부터 끝까지)
        cls_body_start = ent_m.end() + cls_m.end()
        # 매칭 중괄호로 끝 찾기 (간이)
        depth = 0; pos = text.find("{", cls_body_start)
        if pos < 0:
            continue
        start = pos; end = None
        for i in range(pos, len(text)):
            c = text[i]
            if c == "{": depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    end = i; break
        if end is None:
            continue
        body = text[start+1:end]

        # 필드 단위 파싱: 각 필드 선언과 위의 어노테이션 블록을 함께 본다.
        # 휴리스틱: 빈 줄로 나눈 블록 단위에서 마지막 라인이 필드 선언인 것
        blocks = re.split(r'\n\s*\n', body)
        fields = []
        # 라인 번호 추적용
        body_start_line = text[:start].count("\n") + 1
        cursor_line = body_start_line
        for block in blocks:
            block_lines = block.split("\n")
            # 마지막 비주석·비빈 라인이 필드 선언 후보
            field_line = None
            for ln in reversed(block_lines):
                s = ln.strip()
                if not s or s.startswith("//") or s.startswith("*"): continue
                field_line = s; break
            if not field_line:
                cursor_line += len(block_lines) + 1
                continue
            fdecl = RE_FIELD_DECL.search(field_line)
            # 메서드는 제외
            if not fdecl or "(" in field_line[:fdecl.end()] if fdecl else True:
                cursor_line += len(block_lines) + 1
                continue
            # 어노테이션이 블록 안에 있는지 확인 — @Column/@Convert/@JoinColumn/관계 중 하나라도
            has_jpa = bool(re.search(r'@(Column|Convert|JoinColumn|ManyToOne|OneToMany|OneToOne|ManyToMany|Id|EmbeddedId|Embedded|Version)\b', block))
            if not has_jpa:
                cursor_line += len(block_lines) + 1
                continue

            java_type, java_field = fdecl.group(1).strip(), fdecl.group(2)
            field = {
                "java_field": java_field,
                "java_type": java_type,
                "column": None,
                "converter": None,
                "enumerated": None,
                "join_column": None,
                "relationship": None,
                "is_id": "@Id" in block and "@JoinColumn" not in block.split("@Id",1)[-1].split("\n",1)[0],
            }
            col_m = RE_COLUMN.search(block)
            if col_m:
                field["column"] = parse_column_args(col_m.group(1))
            conv_m = RE_CONVERT.search(block)
            if conv_m:
                field["converter"] = conv_m.group(1).split(".")[-1]
            enum_m = RE_ENUM.search(block)
            if enum_m:
                field["enumerated"] = enum_m.group(1)
            jc_m = RE_JOIN_COL.search(block)
            if jc_m:
                field["join_column"] = parse_column_args(jc_m.group(1))
            rel_m = RE_REL.search(block)
            if rel_m:
                field["relationship"] = rel_m.group(1)

            # @Column이나 @JoinColumn 없는 단순 필드(transient나 inferred 컬럼)는 제외하지 않고 보존
            # — 그래도 JPA 어노테이션이 하나라도 있어야 (has_jpa 체크)

            field["line"] = cursor_line + len(block_lines)
            fields.append(field)
            cursor_line += len(block_lines) + 1

        entities.append({
            "class_name": class_name,
            "fqn": f"{package}.{class_name}",
            "table_name": table_name,
            "source_file": str(java_path.relative_to(corpus_root)),
            "field_count": len(fields),
            "fields": fields,
        })
    return entities


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("corpus_root", help="corpus/ root (Fineract code slice)")
    ap.add_argument("output_json")
    args = ap.parse_args()

    corpus = Path(args.corpus_root)
    entities = []
    files_scanned = 0
    for jp in corpus.rglob("*.java"):
        files_scanned += 1
        entities.extend(parse_entity(jp, corpus))

    entities.sort(key=lambda e: e["fqn"])
    field_count = sum(e["field_count"] for e in entities)

    commit = None
    try:
        # 만약 corpus가 git tracked면
        commit = subprocess.check_output(
            ["git", "-C", str(corpus.parent), "rev-parse", "HEAD"],
            stderr=subprocess.DEVNULL, text=True).strip()
    except Exception:
        pass

    out = {
        "source": "apache/fineract @Entity classes (static parse)",
        "fineract_commit": commit,
        "files_scanned": files_scanned,
        "entity_count": len(entities),
        "field_count": field_count,
        "entities": entities,
    }
    Path(args.output_json).write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f"[ok] {len(entities)} entities, {field_count} fields → {args.output_json}")
    print(f"     scanned {files_scanned} .java files")

    # 빠른 검증 샘플
    sample = next((e for e in entities if e["class_name"] in ("Loan","SavingsAccount","Client")), None)
    if sample:
        print(f"\n--- sample: {sample['class_name']} (table={sample['table_name']}, {sample['field_count']} fields) ---")
        for f in sample["fields"][:8]:
            tag = ""
            if f["converter"]: tag = f" [converter={f['converter']}]"
            elif f["enumerated"]: tag = f" [@Enumerated={f['enumerated']}]"
            elif f["relationship"]: tag = f" [{f['relationship']}]"
            col = f["column"] or f["join_column"] or {}
            print(f"  {f['java_field']:30s}  type={f['java_type']:25s}  col={col.get('name','?')}{tag}")


if __name__ == "__main__":
    main()
