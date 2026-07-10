# -*- coding: utf-8 -*-
"""NL2SQL layer-data-fineract.js 조립.

소스:
- 스냅샷 병합 (__19_+__20_): Render 산출 (description·capability·format·aggregation·codedict·confidence·needs_review)
- sqlite PRAGMA: type·nullable·pk (추출 소유)
- peek_orm: FK (추출 소유)
- signals/grain.json, signals/metrics.json, signals/terms.json

출력 스키마 (Render-정합, role 없음):
LAYER = {
  terms: [{name, domain, definition, synonyms, assets}],
  columns: [{id, table, type, nullable, pk, fk,
             description:{text, confidence, needs_review},
             capability, format, aggregation, codedict}],
  tables: [{name, grain, columns, fk_edges}],
  metrics: [{id, name, grain, expr, base_filters, note}],
  codedict: {"table.col": {value: label}},
}
"""
import json, sqlite3, sys

def infer_domain(tbl):
    if tbl.startswith(("m_client", "m_group", "m_staff", "m_office")): return "CLIENT"
    if tbl.startswith("m_loan") or tbl == "glim_accounts" or tbl == "m_product_loan": return "LOAN"
    if tbl.startswith("m_savings") or tbl == "gsim_accounts": return "SAVINGS"
    if tbl.startswith("m_deposit"): return "DEPOSIT"
    return "COMMON"

SNAP = sys.argv[1] if len(sys.argv) > 1 else "/tmp/render_merged.json"
# 주의: /tmp는 컨테이너 리셋 시 소실. 스냅샷 부재 시 기존 레이어 파일의 columns를
# 보존한 채 terms/metrics/grain만 갱신하려면 scripts 내 인라인 증분 주입 사용.

snap = json.load(open(SNAP))["results"]
conn = sqlite3.connect("data/fineract_3domain.sqlite")
cur = conn.cursor()
orm = json.load(open("signals/peek_orm.json"))
grain = {g["table"]: g["grain"] for g in json.load(open("signals/grain.json"))["grains"]}
metrics = json.load(open("signals/metrics.json"))["metrics"]
terms = json.load(open("signals/terms.json"))["terms"]

# FK: peek_orm join_column 기반
fk_map = {}  # (table, col) -> target table
tbl_by_class = {}
for ent in orm["entities"]:
    if ent.get("table_name"):
        tbl_by_class[ent["class_name"]] = ent["table_name"]
for ent in orm["entities"]:
    tbl = ent.get("table_name")
    if not tbl: continue
    for f in ent["fields"]:
        if f.get("relationship") in ("ManyToOne", "OneToOne"):
            jc = (f.get("join_column") or {}).get("name")
            target = tbl_by_class.get(f.get("java_type"))
            if jc and target:
                fk_map[(tbl, jc)] = target

# sqlite 타입·pk·nullable
col_meta = {}  # (table, col) -> dict
db_tables = []
for r in cur.execute("SELECT name FROM sqlite_master WHERE type='table'").fetchall():
    tbl = r[0]
    if tbl.startswith("sqlite_"): continue
    db_tables.append(tbl)
    for cid_, name, typ, notnull, dflt, pk in cur.execute(f'PRAGMA table_info("{tbl}")').fetchall():
        col_meta[(tbl, name)] = {"type": typ or "TEXT", "nullable": not notnull, "pk": bool(pk)}

# columns 조립 (Render 산출 474 기준)
columns = []
codedict_global = {}
tables_cols = {}
for cid, res in sorted(snap.items()):
    a = res.get("answer") or {}
    tbl, col = cid.split(".", 1)
    meta = col_meta.get((tbl, col), {"type": "TEXT", "nullable": True, "pk": False})
    fk_target = fk_map.get((tbl, col))
    cd = a.get("codedict")
    entry = {
        "id": cid, "table": tbl, "domain": infer_domain(tbl),
        "type": meta["type"], "nullable": meta["nullable"], "pk": meta["pk"],
        "fk": f"{fk_target}.id" if fk_target else None,
        "description": {
            "text": (a.get("description") or "").strip(),
            "confidence": a.get("confidence"),
            "needs_review": bool(a.get("needs_review")),
        },
        "capability": a.get("capability"),
        "format": a.get("format"),
        "aggregation": a.get("aggregation"),
        "codedict_available": bool(cd),
    }
    columns.append(entry)
    tables_cols.setdefault(tbl, []).append(col)
    if cd:
        codedict_global[cid] = {str(x["value"]): x["label"] for x in cd if x.get("value") is not None}

# tables 조립: Render 대상 테이블 + sqlite 전체 (grain은 55 전체)
fk_edges_by_tbl = {}
for (tbl, col), target in fk_map.items():
    fk_edges_by_tbl.setdefault(tbl, []).append({"from": f"{tbl}.{col}", "to": f"{target}.id"})

tables = []
for tbl in sorted(set(list(tables_cols.keys()) + db_tables)):
    all_cols = [r[1] for r in cur.execute(f'PRAGMA table_info("{tbl}")').fetchall()] if tbl in db_tables else tables_cols.get(tbl, [])
    tables.append({
        "name": tbl, "domain": infer_domain(tbl),
        "grain": grain.get(tbl, ""),
        "columns": all_cols,
        "fk_edges": fk_edges_by_tbl.get(tbl, []),
    })

# metrics 조립 (sql_full·verified_value는 레이어에 비노출 - 정의만)
metrics_out = [{"id": m["id"], "name": m["name"], "grain": m["grain"],
                "expr": m["expr"], "base_filters": m["base_filters"], "note": m["note"]}
               for m in metrics]

# 하위호환: Term에 links 필드 부여 (assets을 role 없는 링크로) - explorer 필터가 링크 유무를 봄
terms_out = []
for t in terms:
    tc = dict(t)
    tc["links"] = [{"asset": a, "role": None} for a in t.get("assets", [])]  # role 미노출
    terms_out.append(tc)
layer = {"terms": terms_out, "columns": columns, "tables": tables,
         "metrics": metrics_out, "codedict": codedict_global,
         "meta": {"dataset": "fineract", "source": "Render v3 산출 + 추출 소유 메타 + 저작(terms/metrics/grain)"}}

out = "data/nl2sql-layer-fineract.js"
with open(out, "w", encoding="utf-8") as f:
    f.write("// Fineract 시맨틱 레이어 — Render v3 산출 기반 (role 없는 미니멀 Term 구조).\n")
    f.write("window.LAYER_FINERACT = ")
    json.dump(layer, f, ensure_ascii=False, separators=(",", ":"))
    f.write(";\n")

import os
print(f"[ok] {out} ({os.path.getsize(out)/1024:.1f} KB)")
print(f"  terms={len(terms)}, columns={len(columns)}, tables={len(tables)}, metrics={len(metrics_out)}, codedict={len(codedict_global)}")
