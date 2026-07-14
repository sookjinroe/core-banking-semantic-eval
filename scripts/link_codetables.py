#!/usr/bin/env python3
"""
코드표 ↔ 컬럼 기계 매핑 링커.

code_catalog(extract_code_enums)와 peek_orm(extract_orm), 코퍼스 소스를 입력으로,
선언·준선언적 근거 체인으로 따라갈 수 있는 매핑을 전부 수집한다.

근거 체인 (강한 순):
  convert   — 필드에 @Convert(XConverter) 선언, 컨버터의 AttributeConverter<E,?> 타깃 해석
  typed     — 필드 java_type 자체가 카탈로그의 enum
  javadoc   — 필드 직전 javadoc 주석의 {@link E} (필드 노드 기준 정확 파싱 — 근접 오프셋 함정 없음)
  usage     — 같은 엔티티 파일 안의 E.fromInt(this.field | field) 사용
  codevalue — java_type=CodeValue 인 FK (연결 대상은 reftable 그룹 — 그룹 특정은 이 링커 범위 밖, 미정으로 기록)

한 컬럼에 서로 다른 코드표가 걸리면 conflict로 기록한다 (같은 표에 다중 근거는 정상 — bases 병합).

입력: --catalog code_catalog.json --orm peek_orm.json --corpus <루트>
출력: --out machine_mappings.json
{
  "mappings": [{"code_table", "kind", "table", "column", "java_field", "bases": [..], "entity_file"}],
  "codevalue_fk": [{"table", "column", "java_field", "group": null}],
  "conflicts": [{"table", "column", "claims": [{"code_table", "basis"}]}],
  "stats": {...},
  "unmapped_int_code_tables": [...]
}
"""
import argparse, json, sys
from collections import defaultdict
from pathlib import Path
from tree_sitter import Language, Parser
import tree_sitter_java

LANG = Language(tree_sitter_java.language())
PARSER = Parser(LANG)


def text_of(node, src: bytes) -> str:
    return src[node.start_byte:node.end_byte].decode("utf-8", errors="replace")


def walk(node, *types):
    if node.type in types:
        yield node
    for c in node.children:
        yield from walk(c, *types)


def resolve_converters(corpus_root: Path, catalog: dict):
    """AttributeConverter 구현: 클래스명 → 타깃 enum명. autoApply=true인 것은 별도 집합으로."""
    out, auto = {}, {}
    for f in corpus_root.rglob("*Converter.java"):
        src_t = f.read_text(errors="replace")
        src = f.read_bytes()
        tree = PARSER.parse(src)
        for cls in walk(tree.root_node, "class_declaration"):
            cname = None
            for c in cls.children:
                if c.type == "identifier":
                    cname = text_of(c, src)
                    break
            target = None
            for si in walk(cls, "super_interfaces"):
                t = text_of(si, src)
                if "AttributeConverter" in t:
                    inner = t.split("AttributeConverter", 1)[1]
                    inner = inner.strip("<> ").split(",")[0].strip()
                    target = inner
                    break
            if cname and target and target in catalog:
                out[cname] = target
                import re as _re
                if _re.search(r"autoApply\s*=\s*true", src_t):
                    auto[target] = cname  # enum명 → 컨버터명 (전역 적용)
    return out, auto


def field_javadoc_link(field_node, src: bytes, catalog: dict):
    """필드 선언 노드 직전의 주석에서 {@link E} — 필드 자신에게 붙은 것만."""
    prev = field_node.prev_sibling
    # 주석은 필드 바로 앞 형제로 나타난다 (사이에 다른 선언이 있으면 남의 주석)
    while prev is not None and prev.type in ("line_comment", "block_comment"):
        t = text_of(prev, src)
        import re
        m = re.search(r"\{@link\s+(\w+)", t)
        if m and m.group(1) in catalog:
            return m.group(1)
        prev = prev.prev_sibling
    return None


def entity_usage_links(src_text: str, catalog: dict) -> dict:
    """엔티티 소스 전체에서 E.fromInt(this.field) / E.fromInt(field) → {field: enum}."""
    import re
    out = {}
    for m in re.finditer(r"(\w+)\.fromInt\(\s*(?:this\.)?(\w+)\s*\)", src_text):
        enum_name, field = m.group(1), m.group(2)
        if enum_name in catalog:
            out.setdefault(field, set()).add(enum_name)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--catalog", required=True)
    ap.add_argument("--orm", required=True)
    ap.add_argument("--corpus", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    catalog = json.load(open(args.catalog))["catalog"]
    orm = json.load(open(args.orm))
    corpus_root = Path(args.corpus)

    converters, auto_converters = resolve_converters(corpus_root, catalog)
    print(f"[link] 컨버터 해석: {len(converters)} (autoApply: {list(auto_converters)})", file=sys.stderr)

    # (code_table, table, column) → set(bases)
    claims = defaultdict(set)
    meta = {}
    codevalue_fk = []

    for ent in orm["entities"]:
        table = ent.get("table_name")
        if not table:
            continue
        src_path = corpus_root / ent["source_file"]
        src_bytes = src_path.read_bytes() if src_path.exists() else b""
        src_text = src_bytes.decode("utf-8", errors="replace")
        usage = entity_usage_links(src_text, catalog) if src_text else {}

        # javadoc은 필드 노드 기준으로 — 파일 한 번 파싱해 field→link 맵 구축
        jdoc = {}
        if src_bytes:
            tree = PARSER.parse(src_bytes)
            for fnode in walk(tree.root_node, "field_declaration"):
                var = None
                for c in fnode.children:
                    if c.type == "variable_declarator":
                        for cc in c.children:
                            if cc.type == "identifier":
                                var = text_of(cc, src_bytes)
                if not var:
                    continue
                link = field_javadoc_link(fnode, src_bytes, catalog)
                if link:
                    jdoc[var] = link

        for f in ent["fields"]:
            col = f.get("column")
            if isinstance(col, dict):
                col = col.get("name")
            if not col:
                jc = f.get("join_column")
                col = jc.get("name") if isinstance(jc, dict) else jc
            if not col:
                continue
            jf = f["java_field"]
            key_base = (table, col, jf)

            if f.get("java_type") == "CodeValue":
                codevalue_fk.append({"table": table, "column": col, "java_field": jf, "group": None})
                continue

            def claim(code_table, basis, storage):
                claims[(code_table, table, col)].add(basis)
                prev = meta.get((code_table, table, col))
                meta[(code_table, table, col)] = {"java_field": jf, "entity_file": ent["source_file"],
                                                  "kind": catalog[code_table]["kind"],
                                                  "storage": storage or (prev or {}).get("storage")}

            enum_st = str(f.get("enumerated") or "")
            conv = f.get("converter")
            if conv and conv in converters:
                claim(converters[conv], "convert", "converter")
            jt = f.get("java_type")
            if jt in catalog:
                # 저장 방식: 명시 @Enumerated > autoApply 컨버터 > JPA 기본(ORDINAL)
                if enum_st == "STRING":
                    st = "name"
                elif enum_st == "ORDINAL":
                    st = "ordinal"
                elif jt in auto_converters:
                    claim(jt, "convert", "converter")
                    st = "converter"
                else:
                    st = "ordinal_default"  # @Enumerated 미지정 enum 타입의 JPA 기본
                claim(jt, "typed", st)
            if jf in jdoc:
                claim(jdoc[jf], "javadoc", "code")  # Integer 필드 + fromInt 관례 → 코드값 저장
            if jf in usage:
                for e in usage[jf]:
                    claim(e, "usage", "code")

    # 병합·충돌 검출
    mappings = []
    by_col = defaultdict(list)
    for (ct, table, col), bases in sorted(claims.items()):
        m = meta[(ct, table, col)]
        rec = {"code_table": ct, "kind": m["kind"], "table": table, "column": col,
               "java_field": m["java_field"], "bases": sorted(bases), "storage": m.get("storage"),
               "entity_file": m["entity_file"]}
        mappings.append(rec)
        by_col[(table, col)].append(rec)

    conflicts = []
    for (table, col), recs in by_col.items():
        if len({r["code_table"] for r in recs}) > 1:
            conflicts.append({"table": table, "column": col,
                              "claims": [{"code_table": r["code_table"], "bases": r["bases"]} for r in recs]})

    mapped_tables = {m["code_table"] for m in mappings}
    unmapped_int = sorted(n for n, e in catalog.items() if e["kind"] == "int_code" and n not in mapped_tables)

    basis_counts = defaultdict(int)
    for m in mappings:
        for b in m["bases"]:
            basis_counts[b] += 1

    result = {
        "mappings": mappings,
        "codevalue_fk": codevalue_fk,
        "conflicts": conflicts,
        "stats": {"mapping_count": len(mappings), "distinct_code_tables": len(mapped_tables),
                  "distinct_columns": len(by_col), "basis_counts": dict(basis_counts),
                  "codevalue_fk_count": len(codevalue_fk), "conflict_count": len(conflicts),
                  "unmapped_int_code_count": len(unmapped_int)},
        "unmapped_int_code_tables": unmapped_int,
    }
    Path(args.out).write_text(json.dumps(result, ensure_ascii=False, indent=1))
    print(f"[link] {result['stats']}", file=sys.stderr)


if __name__ == "__main__":
    main()
