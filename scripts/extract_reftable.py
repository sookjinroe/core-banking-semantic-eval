#!/usr/bin/env python3
"""
Liquibase changelog (XML)에서 r_enum_value의 모든 insert를 정적 추출하여
peek_reftable 신호 store의 1차 산출물(JSON)을 만든다.

PostgreSQL을 띄우지 않고도 reference data 전체를 확보 가능.

입력: $1 — Fineract 원본 changelog 디렉터리
출력: $2 — JSON 파일 경로 (Render의 peek_reftable이 읽을 형식)

산출 구조:
{
  "source": "apache/fineract Liquibase changelog (static parse)",
  "commit": "<git rev>",
  "groups": {
    "<enum_name>": [
      {"enum_id": <int>, "enum_message_property": "...", "enum_value": "...",
       "enum_type": <bool|null>, "source_file": "..."},
      ...
    ]
  },
  "group_count": <int>,
  "row_count": <int>
}

연결(이 그룹이 어느 컬럼과 묶이는지)은 *선언되어 있지 않다* — Render가 dig로 풀어야 한다.
"""
import argparse, json, re, subprocess, sys
from pathlib import Path
from xml.etree import ElementTree as ET

NS = "{http://www.liquibase.org/xml/ns/dbchangelog}"


def to_bool(v):
    if v is None:
        return None
    s = str(v).strip().lower()
    if s in ("true", "1", "yes"):
        return True
    if s in ("false", "0", "no"):
        return False
    return None


def parse_insert(insert_elem, source_file: str):
    """<insert tableName="r_enum_value"> 한 개를 dict 한 행으로."""
    row = {}
    for col in insert_elem.findall(f"{NS}column"):
        name = col.get("name")
        if name == "enum_id":
            v = col.get("valueNumeric") or col.get("value")
            row["enum_id"] = int(v) if v is not None else None
        elif name == "enum_type":
            row["enum_type"] = to_bool(col.get("valueBoolean") or col.get("value"))
        elif name in ("enum_name", "enum_message_property", "enum_value"):
            row[name] = col.get("value")
        # 그 외 컬럼은 무시 (스키마에 없을 수 있음)
    row["source_file"] = source_file
    return row


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("changelog_dir", help="Fineract changelog dir (e.g. fineract-source/fineract-provider/src/main/resources/db/changelog)")
    ap.add_argument("output_json", help="output JSON path")
    args = ap.parse_args()

    root_dir = Path(args.changelog_dir)
    if not root_dir.is_dir():
        sys.exit(f"[!] changelog dir not found: {root_dir}")

    groups = {}
    row_count = 0
    files_with_rows = 0

    for xml_path in sorted(root_dir.rglob("*.xml")):
        try:
            tree = ET.parse(xml_path)
        except ET.ParseError as e:
            print(f"[!] parse error: {xml_path}: {e}", file=sys.stderr)
            continue
        # 모든 <insert tableName="r_enum_value"> 찾기 (네임스페이스 고려)
        inserts = [el for el in tree.iter(f"{NS}insert") if el.get("tableName") == "r_enum_value"]
        if not inserts:
            continue
        files_with_rows += 1
        rel = xml_path.relative_to(root_dir).as_posix()
        for ins in inserts:
            row = parse_insert(ins, rel)
            grp = row.get("enum_name")
            if not grp:
                continue
            groups.setdefault(grp, []).append({k: v for k, v in row.items() if k != "enum_name"})
            row_count += 1

    # 각 그룹 내부는 enum_id로 정렬 (재현성)
    for g, rows in groups.items():
        rows.sort(key=lambda r: (r.get("enum_id") if r.get("enum_id") is not None else 1 << 30))

    # Fineract source commit 시도
    commit = None
    try:
        commit = subprocess.check_output(
            ["git", "-C", str(root_dir.parents[4]), "rev-parse", "HEAD"],
            stderr=subprocess.DEVNULL, text=True).strip()
    except Exception:
        pass

    out = {
        "source": "apache/fineract Liquibase changelog (static parse)",
        "fineract_commit": commit,
        "extraction_note": "그룹과 컬럼의 연결은 미선언. Render가 dig로 풀어야 한다.",
        "group_count": len(groups),
        "row_count": row_count,
        "files_with_rows": files_with_rows,
        "groups": groups,
    }
    Path(args.output_json).write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f"[ok] {row_count} rows in {len(groups)} groups → {args.output_json}")
    print(f"     groups: {sorted(groups.keys())}")


if __name__ == "__main__":
    main()
