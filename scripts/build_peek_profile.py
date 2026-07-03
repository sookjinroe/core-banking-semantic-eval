#!/usr/bin/env python3
"""
data/fineract_3domain.sqlite에서 슬라이스 컬럼의 프로파일 통계를 추출해
signals/peek_profile.json을 만든다. Render의 tier-1 데이터 프로파일 신호.

컬럼별 산출:
  - count_non_null:   NOT NULL 행 수
  - null_rate:        NULL 비율
  - distinct_count:   DISTINCT 값 수
  - distinct_values:  Top-20 distinct 값 (freq 포함, 카디널리티 낮은 경우)
  - min / max:        수치·날짜 타입
  - avg / stddev:     수치 타입
"""
import argparse, json, sqlite3
from pathlib import Path


def profile_column(conn, table, column, max_distinct_sample=20):
    cur = conn.cursor()
    # 컬럼 존재 확인
    cols = [r[1] for r in cur.execute(f'PRAGMA table_info("{table}")')]
    if column not in cols:
        return {"error": f"column not found in table"}

    prof = {}
    # 총 행 수 + NULL
    cur.execute(f'SELECT COUNT(*), SUM(CASE WHEN "{column}" IS NULL THEN 1 ELSE 0 END) FROM "{table}"')
    total, null_c = cur.fetchone()
    prof["row_count"] = total or 0
    prof["null_count"] = null_c or 0
    prof["null_rate"] = round((null_c or 0)/total, 4) if total else None

    if total == 0 or (null_c or 0) == total:
        return prof

    # distinct
    cur.execute(f'SELECT COUNT(DISTINCT "{column}") FROM "{table}" WHERE "{column}" IS NOT NULL')
    prof["distinct_count"] = cur.fetchone()[0]

    # distinct 값이 적으면 (categorical/enum) 전체 나열
    if prof["distinct_count"] <= max_distinct_sample:
        cur.execute(f'''SELECT "{column}", COUNT(*) FROM "{table}"
                        WHERE "{column}" IS NOT NULL
                        GROUP BY "{column}" ORDER BY 2 DESC''')
        prof["distinct_values"] = [
            {"value": r[0], "count": r[1]} for r in cur.fetchall()
        ]
    else:
        # 카디널리티 높으면 min/max/avg 등
        try:
            cur.execute(f'SELECT MIN("{column}"), MAX("{column}") FROM "{table}" WHERE "{column}" IS NOT NULL')
            mn, mx = cur.fetchone()
            prof["min"] = mn; prof["max"] = mx
        except sqlite3.OperationalError:
            pass
        # 수치 avg
        try:
            cur.execute(f'SELECT AVG("{column}") FROM "{table}" WHERE typeof("{column}") IN ("integer","real")')
            avg = cur.fetchone()[0]
            if avg is not None:
                prof["avg"] = round(avg, 4)
        except sqlite3.OperationalError:
            pass
        # Top-5 샘플
        cur.execute(f'''SELECT "{column}", COUNT(*) FROM "{table}"
                        WHERE "{column}" IS NOT NULL
                        GROUP BY "{column}" ORDER BY 2 DESC LIMIT 5''')
        prof["top_values"] = [{"value": r[0], "count": r[1]} for r in cur.fetchall()]

    return prof


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sqlite", default="data/fineract_3domain.sqlite")
    ap.add_argument("--slice", default="slice/columns.jsonl")
    ap.add_argument("--output", default="signals/peek_profile.json")
    args = ap.parse_args()

    conn = sqlite3.connect(args.sqlite)
    slice_cols = [json.loads(l) for l in open(args.slice)]

    profiles = {}
    missing = 0
    for c in slice_cols:
        tbl = c["table"]; col = c["column"]
        if not col: continue
        # 테이블 존재?
        exists = conn.execute("SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name=?", (tbl,)).fetchone()[0]
        if not exists:
            missing += 1
            continue
        key = f"{tbl}.{col}"
        profiles[key] = profile_column(conn, tbl, col)

    out = {
        "source": "static profile from data/fineract_3domain.sqlite (pilot)",
        "slice_columns_profiled": len(profiles),
        "slice_columns_missing_table": missing,
        "profiles": profiles,
    }
    Path(args.output).write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f"[ok] {len(profiles)} profiles → {args.output}")
    print(f"     missing tables: {missing}")

    # 하이라이트: ★ 결정 케이스가 실제로 값이 들어있는지
    print("\n=== ★ 결정 케이스 프로파일 하이라이트 ===")
    for c in slice_cols:
        if c.get("archetype") not in ("collision-crux","enum-clean"): continue
        key = f"{c['table']}.{c['column']}"
        p = profiles.get(key)
        if not p or "distinct_values" not in p: continue
        vals = p["distinct_values"][:5]
        vs = ", ".join(f"{v['value']}({v['count']})" for v in vals)
        print(f"  {key:60s} archetype={c['archetype']:15s} distinct={p['distinct_count']} → {vs}")


if __name__ == "__main__":
    main()
