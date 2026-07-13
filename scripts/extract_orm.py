#!/usr/bin/env python3
"""
tree-sitter-java 기반 JPA Entity 파서 (v2).

정규식 파서(v1) 대비 개선:
  - 자바 AST 순회로 필드 경계·어노테이션 정확 인식
  - 부모 클래스 상속 필드 재귀 병합 (AbstractPersistableCustom, AbstractAuditable... 등)
  - @MappedSuperclass 처리
  - @Transient 필드 제외
  - typed enum 접미사(Enum)까지 정확한 타입 인식
"""
import argparse, json, re, subprocess, sys
from collections import defaultdict
from pathlib import Path
from tree_sitter import Language, Parser
import tree_sitter_java

LANG = Language(tree_sitter_java.language())
PARSER = Parser(LANG)


def text_of(node, src: bytes) -> str:
    return src[node.start_byte:node.end_byte].decode("utf-8", errors="replace")


def find_child(node, type_name: str):
    for c in node.children:
        if c.type == type_name: return c
    return None


def parse_annotation(ann_node, src: bytes) -> dict:
    name_node = find_child(ann_node, "identifier") or find_child(ann_node, "scoped_identifier")
    if not name_node: return {}
    name = text_of(name_node, src)
    result = {"name": name, "args": {}}
    args_node = find_child(ann_node, "annotation_argument_list")
    if not args_node: return result

    for child in args_node.children:
        if child.type == "element_value_pair":
            key_node = find_child(child, "identifier")
            named = [c for c in child.children if c.is_named]
            if len(named) >= 2 and key_node:
                key = text_of(key_node, src)
                val = text_of(named[-1], src).strip().strip('"')
                if val == "true": val = True
                elif val == "false": val = False
                elif val.replace(".","").replace("-","").isdigit():
                    try: val = int(val) if "." not in val else float(val)
                    except: pass
                result["args"][key] = val
        elif child.type in ("field_access","string_literal","decimal_integer_literal","identifier"):
            v = text_of(child, src).strip().strip('"')
            result["args"].setdefault("_positional", []).append(v)
    return result


def get_field_annotations(field_node, src: bytes) -> list:
    anns = []
    mods = find_child(field_node, "modifiers")
    if mods:
        for c in mods.children:
            if c.type in ("marker_annotation","annotation"):
                anns.append(parse_annotation(c, src))
    return anns


def extract_field(field_node, src: bytes) -> dict:
    type_node = None
    for t in ("integral_type","floating_point_type","boolean_type","void_type",
              "type_identifier","generic_type","array_type","scoped_type_identifier"):
        type_node = find_child(field_node, t)
        if type_node: break
    if not type_node: return None
    java_type = text_of(type_node, src)

    var_decl = find_child(field_node, "variable_declarator")
    if not var_decl: return None
    name_node = find_child(var_decl, "identifier")
    if not name_node: return None
    java_field = text_of(name_node, src)

    modifiers = find_child(field_node, "modifiers")
    is_transient = False; is_static = False
    if modifiers:
        for c in modifiers.children:
            if c.type == "transient": is_transient = True
            if c.type == "static": is_static = True
    anns = get_field_annotations(field_node, src)
    ann_by_name = {a["name"]: a for a in anns}
    if is_transient or is_static or "Transient" in ann_by_name:
        return None

    field = {
        "java_field": java_field, "java_type": java_type,
        "column": None, "converter": None, "enumerated": None,
        "join_column": None, "relationship": None,
        "is_id": "Id" in ann_by_name or "EmbeddedId" in ann_by_name,
        "embedded": "Embedded" in ann_by_name,
    }
    col = ann_by_name.get("Column")
    if col: field["column"] = col["args"]
    conv = ann_by_name.get("Convert")
    if conv:
        c_class = conv["args"].get("converter")
        if not c_class and conv["args"].get("_positional"):
            c_class = conv["args"]["_positional"][0]
        if c_class:
            field["converter"] = c_class.replace(".class","").split(".")[-1]
    enum_ = ann_by_name.get("Enumerated")
    if enum_:
        v = enum_["args"].get("value") or (enum_["args"].get("_positional") or [None])[0]
        if v: field["enumerated"] = str(v).split(".")[-1]
    jc = ann_by_name.get("JoinColumn")
    if jc: field["join_column"] = jc["args"]
    for rel in ("ManyToOne","OneToMany","OneToOne","ManyToMany","ElementCollection"):
        if rel in ann_by_name:
            field["relationship"] = rel; break
    return field


class ClassIndex:
    def __init__(self, corpus_root: Path):
        self.by_name = {}
        for jp in corpus_root.rglob("*.java"):
            try:
                src = jp.read_bytes()
                tree = PARSER.parse(src)
            except Exception:
                continue
            for cls in self._find_classes(tree.root_node):
                name_node = find_child(cls, "identifier")
                if name_node:
                    self.by_name[text_of(name_node, src)] = (jp, cls, src)
    def _find_classes(self, node):
        result = []; stack = [node]
        while stack:
            n = stack.pop()
            if n.type == "class_declaration": result.append(n)
            stack.extend(n.children)
        return result
    def get(self, cls_name): return self.by_name.get(cls_name)


def parse_class_fields(cls_node, src: bytes) -> list:
    body = find_child(cls_node, "class_body")
    if not body: return []
    fields = []
    for c in body.children:
        if c.type == "field_declaration":
            f = extract_field(c, src)
            if f: fields.append(f)
    return fields


def get_superclass_name(cls_node, src: bytes) -> str:
    sc = find_child(cls_node, "superclass")
    if not sc: return None
    tid = find_child(sc, "type_identifier") or find_child(sc, "generic_type")
    if not tid: return None
    if tid.type == "generic_type":
        tid = find_child(tid, "type_identifier") or tid
    return text_of(tid, src)


def get_class_annotations(cls_node, src: bytes) -> dict:
    anns = {}
    mods = find_child(cls_node, "modifiers")
    if mods:
        for c in mods.children:
            if c.type in ("marker_annotation","annotation"):
                a = parse_annotation(c, src)
                anns[a["name"]] = a
    return anns


def collect_all_fields(cls_name: str, index: ClassIndex, visited=None):
    if visited is None: visited = set()
    if cls_name in visited: return []
    visited.add(cls_name)
    got = index.get(cls_name)
    if not got: return []
    _, cls_node, src = got
    my_fields = parse_class_fields(cls_node, src)
    parent_name = get_superclass_name(cls_node, src)
    if parent_name:
        parent_got = index.get(parent_name)
        if parent_got:
            _, p_node, p_src = parent_got
            p_anns = get_class_annotations(p_node, p_src)
            if any(a in p_anns for a in ("Entity","MappedSuperclass")):
                inherited = collect_all_fields(parent_name, index, visited)
                seen = {f["java_field"] for f in my_fields}
                for f in inherited:
                    if f["java_field"] not in seen:
                        my_fields.append(f); seen.add(f["java_field"])
    # @Embedded 전개: 임베디드 객체(예: Loan의 LoanProductRelatedDetail·LoanSummary)의
    # 필드는 소유 엔터티 테이블의 컬럼이다. 미전개 시 principal_amount·
    # annual_nominal_interest_rate 등 도메인 핵심 컬럼이 후보에서 통째로 누락
    # (2026-07-13 실측: DB에 있고 ORM 시야 밖인 컬럼 140개의 주 원인).
    # Fineract 코퍼스에 @AttributeOverrides 사용 없음을 확인 - @Column name 그대로 유효.
    expanded = []
    for f in my_fields:
        if f.get("embedded"):
            emb = collect_all_fields(f["java_type"], index, visited=set(visited))
            for ef in emb:
                if ef.get("embedded"):  # 중첩 임베디드는 재귀에서 이미 전개됨
                    continue
                if ef.get("column") or ef.get("join_column") or ef.get("converter") or ef.get("enumerated"):
                    ef2 = dict(ef)
                    ef2["embedded_from"] = f["java_type"]
                    expanded.append(ef2)
        else:
            expanded.append(f)
    return expanded


def get_table_name(cls_node, src: bytes, index=None) -> str:
    """@Table이 있으면 그 name. 없고 @DiscriminatorValue 있으면 부모의 table (SINGLE_TABLE inheritance).
       둘 다 없으면 클래스명 lower로 fallback."""
    anns = get_class_annotations(cls_node, src)
    tbl = anns.get("Table")
    if tbl and tbl["args"].get("name"):
        return tbl["args"]["name"]
    # SINGLE_TABLE inheritance — 자식은 @Table 없고 @DiscriminatorValue 있음
    if "DiscriminatorValue" in anns and index is not None:
        parent_name = get_superclass_name(cls_node, src)
        while parent_name:
            parent_got = index.get(parent_name)
            if not parent_got: break
            _, p_node, p_src = parent_got
            p_anns = get_class_annotations(p_node, p_src)
            p_tbl = p_anns.get("Table")
            if p_tbl and p_tbl["args"].get("name"):
                return p_tbl["args"]["name"]
            parent_name = get_superclass_name(p_node, p_src)
    name_node = find_child(cls_node, "identifier")
    return text_of(name_node, src).lower() if name_node else "?"


# ── String 상수 해석 ────────────────────────────────────────────────
# Fineract는 `@Column(name = CREATED_BY_DB_FIELD)` 이렇게 상수 참조를 사용.
# 실제 상수 정의: `public static final String CREATED_BY_DB_FIELD = "created_by";`
# tree-sitter는 identifier를 그대로 저장하므로, corpus의 모든 String 상수를
# pre-scan해서 lookup dict를 만들고, 필드 처리 후 name이 상수면 값으로 대체.

_CONST_RE = re.compile(r'public\s+static\s+final\s+String\s+(\w+)\s*=\s*"([^"]+)"')


def collect_string_constants(corpus: Path) -> dict:
    """corpus의 모든 java 파일에서 public static final String 상수 수집.
       return: {constant_name: string_value}
       이름 충돌 시 first-win (Fineract 특성상 우리 audit 상수는 unique)."""
    constants = {}
    for f in corpus.rglob("*.java"):
        try:
            text = f.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        for m in _CONST_RE.finditer(text):
            name, value = m.group(1), m.group(2)
            if name not in constants:
                constants[name] = value
    return constants


def resolve_constants_in_entities(entities: list, constants: dict) -> int:
    """entity의 fields에서 column.name / join_column.name이 상수 참조면 실제 값으로 대체.
       return: 대체된 필드 수."""
    replaced = 0
    for ent in entities:
        for f in ent["fields"]:
            for slot in ("column", "join_column"):
                col = f.get(slot)
                if col and col.get("name") in constants:
                    col["name"] = constants[col["name"]]
                    replaced += 1
    return replaced


def get_package(root_node, src: bytes) -> str:
    for c in root_node.children:
        if c.type == "package_declaration":
            for id_node in c.children:
                if id_node.type in ("scoped_identifier","identifier"):
                    return text_of(id_node, src)
    return ""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("corpus_root", nargs="?", default="corpus")
    ap.add_argument("output_json", nargs="?", default="signals/peek_orm.json")
    args = ap.parse_args()
    corpus = Path(args.corpus_root)
    print(f"[i] 색인 중: {corpus}", file=sys.stderr, flush=True)
    index = ClassIndex(corpus)
    print(f"[i] 색인된 클래스: {len(index.by_name)}", file=sys.stderr, flush=True)

    entities = []
    for cls_name, (jp, cls_node, src) in sorted(index.by_name.items()):
        anns = get_class_annotations(cls_node, src)
        if "Entity" not in anns: continue
        rel = str(jp.relative_to(corpus))
        pkg = get_package(PARSER.parse(src).root_node, src)
        fqn = f"{pkg}.{cls_name}" if pkg else cls_name
        table = get_table_name(cls_node, src, index)
        fields = collect_all_fields(cls_name, index)
        entities.append({
            "class_name": cls_name, "fqn": fqn,
            "table_name": table, "source_file": rel,
            "field_count": len(fields), "fields": fields,
        })
    entities.sort(key=lambda e: e["fqn"])

    # 상수 참조 해석 (Fineract audit 필드 등)
    constants = collect_string_constants(corpus)
    print(f"[i] String 상수 수집: {len(constants)}", file=sys.stderr, flush=True)
    replaced = resolve_constants_in_entities(entities, constants)
    print(f"[i] 상수 참조 해석: {replaced} 필드", file=sys.stderr, flush=True)

    field_count = sum(e["field_count"] for e in entities)

    commit = None
    try:
        commit = subprocess.check_output(
            ["git","-C",str(corpus.parent),"rev-parse","HEAD"],
            stderr=subprocess.DEVNULL, text=True).strip()
    except Exception: pass

    out = {
        "source": "apache/fineract @Entity classes (tree-sitter-java parse, v2)",
        "fineract_commit": commit,
        "parser_version": "v2 (tree-sitter-java)",
        "entity_count": len(entities),
        "field_count": field_count,
        "entities": entities,
    }
    Path(args.output_json).write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f"[ok] {len(entities)} entities, {field_count} fields → {args.output_json}")

    print("\n=== 핵심 entity 필드 수 (v2) ===")
    ents = {e["class_name"]: e for e in entities}
    for cname in ("Loan","SavingsAccount","Client","LoanTransaction","JournalEntry"):
        e = ents.get(cname)
        if not e: continue
        has_id = any(f["is_id"] or f["java_field"]=="id" for f in e["fields"])
        has_audit = any(f["java_field"] in ("createdBy","createdDate","createdOn","lastModifiedBy","lastModifiedDate","createdByUser") for f in e["fields"])
        print(f"  {cname:20s} fields={e['field_count']:>3d}  id={'✓' if has_id else '✗'}  audit={'✓' if has_audit else '✗'}")


if __name__ == "__main__":
    main()
