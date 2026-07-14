#!/usr/bin/env python3
"""
Mapper 시드 번들 빌더.

코드표 카탈로그(전체)와 store 스코프(테이블·컬럼 목록)를 묶어 Mapper 실행 입력을 만든다.
blind 설계: machine_mappings는 시드에 포함하지 않는다 — 채점기가 밖에서 diff.

입력:
  --catalog signals/code_catalog.json
  --store   render 앱 signal-store js (window.SIGNAL_STORE 전역 할당 파일)
출력:
  --out     signals/mapper_seeds.json
  {
    "store_scope": {"<table>": ["<col>", ...]},   # 시드 공통 — scope 판정 기준선
    "seeds": [{"name", "kind", "definition_file", "nested_in", "entries": [...]}]
  }
"""
import argparse, json, re
from pathlib import Path


def load_store_columns(store_js: Path):
    """signal-store js에서 컬럼 키(table.column) 목록 추출 — node 없이 JSON 부분 파싱."""
    txt = store_js.read_text(encoding="utf-8", errors="replace")
    start = txt.index("{")
    end = txt.rindex("}")
    data = json.loads(txt[start:end + 1])
    scope = {}
    for cid in data["columns"]:
        t, c = cid.split(".", 1)
        scope.setdefault(t, []).append(c)
    for t in scope:
        scope[t].sort()
    return scope


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--catalog", required=True)
    ap.add_argument("--store", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    catalog = json.load(open(args.catalog))["catalog"]
    scope = load_store_columns(Path(args.store))

    seeds = []
    for name, e in sorted(catalog.items()):
        seeds.append({
            "name": e["name"],
            "kind": e["kind"],
            "definition_file": e.get("file"),
            "nested_in": e.get("nested_in"),
            "note": e.get("note"),
            "entries": e["entries"],
        })

    out = {
        "store_scope": scope,
        "scope_stats": {"tables": len(scope), "columns": sum(len(v) for v in scope.values())},
        "seed_count": len(seeds),
        "seeds": seeds,
    }
    Path(args.out).write_text(json.dumps(out, ensure_ascii=False, indent=1))
    print(f"[mapper_seeds] 시드 {len(seeds)} · scope {out['scope_stats']}")


if __name__ == "__main__":
    main()
