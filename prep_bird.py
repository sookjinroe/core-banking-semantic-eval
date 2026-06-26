#!/usr/bin/env python3
import argparse, json, shutil
from collections import Counter
from pathlib import Path

TARGET = {"financial", "debit_card_specializing"}

def load_q(p):
    t = Path(p).read_text(encoding="utf-8").strip()
    try:
        d = json.loads(t)
        return d if isinstance(d, list) else d.get("data", [d])
    except json.JSONDecodeError:
        return [json.loads(l) for l in t.splitlines() if l.strip()]

def gold(r):
    for k in ("SQL", "query", "gold_sql", "gold"):
        if r.get(k): return r[k]
    return ""

ap = argparse.ArgumentParser()
ap.add_argument("--dev-json", required=True)
ap.add_argument("--db-root", required=True)
ap.add_argument("--out", required=True)
a = ap.parse_args()

rows = [r for r in load_q(a.dev_json) if r.get("db_id") in TARGET]
if not rows:
    raise SystemExit("[!] 매칭 0건 — --dev-json 경로/포맷 확인")

out = Path(a.out); (out / "databases").mkdir(parents=True, exist_ok=True)
copied = []
for db in TARGET:
    src = Path(a.db_root) / db
    if src.is_dir():
        shutil.copytree(src, out / "databases" / db, dirs_exist_ok=True)
        copied.append(db)

qf  = (out / "questions.jsonl").open("w", encoding="utf-8")       # evidence 포함
nqf = (out / "questions_noev.jsonl").open("w", encoding="utf-8")  # evidence 제거 (baseline)
gf  = (out / "gold.jsonl").open("w", encoding="utf-8")            # 정답, 실행경로 노출 금지
for i, r in enumerate(rows):
    qid = r.get("question_id", i)
    base = {"id": qid, "db_id": r["db_id"], "question": r["question"]}
    if r.get("difficulty"): base["difficulty"] = r["difficulty"]
    with_ev = dict(base)
    if r.get("evidence"): with_ev["evidence"] = r["evidence"]
    qf.write(json.dumps(with_ev, ensure_ascii=False) + "\n")
    nqf.write(json.dumps(base, ensure_ascii=False) + "\n")
    gf.write(json.dumps({"id": qid, "db_id": r["db_id"], "gold_sql": gold(r)},
                        ensure_ascii=False) + "\n")
for f in (qf, nqf, gf): f.close()

print("DB 복사:", copied)
print(f"질문 {len(rows)}건")
print("  도메인별:", dict(Counter(r["db_id"] for r in rows)))
print("  난이도별:", dict(Counter(r.get("difficulty", "n/a") for r in rows)))
