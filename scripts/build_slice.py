#!/usr/bin/env python3
"""
도메인 패키지 단위 모집단 정의 → archetype 자동 분류 → stratified sampling 슬라이스.

모집단 (TARGET_DOMAINS):
  portfolio.loanaccount  — 30 entity / 326 fields  (대출 원장)
  portfolio.savings      — 18 entity / 189 fields  (예금/적금)
  portfolio.client       —  2 entity /  49 fields  (고객 마스터)
  총 50 entity / 564 fields

Archetypes (학습 사이트 CH4-3 기준):
  enum-clean       — @Convert / typed enum (peek_orm tier-1만으로 정답)
  collision-crux   — Integer + *_enum / *_id (★연결 검증 필수)
  reftable-link    — @ManyToOne CodeValue (m_code_value 매칭)
  lineage          — accrued/charged_off/derived 등 산출 컬럼
  trivial          — name+type 자명 (amount/date/flag 등)
  technical        — audit/system (floor)
  exclude          — @Embedded composite, PK 등 평가 단위 아님

Stratified sampling 전략:
  - collision-crux (★결정 케이스): 전수 포함
  - enum-clean (★결정 케이스):     전수 포함
  - reftable-link (★결정 케이스):  전수 포함
  - lineage / trivial / technical: 모집단 비율 유지하며 sampling
  - 슬라이스 목표 ~100컬럼, 모집단 564의 ~18%
"""
import json, re
from pathlib import Path
from collections import Counter, defaultdict

TARGET_DOMAINS = {
    "portfolio.loanaccount",
    "portfolio.savings",
    "portfolio.client",
}

# 휴리스틱 ----------------------------------------------------------------
TYPE_TRIVIAL = {"LocalDate","LocalDateTime","OffsetDateTime","Date","BigDecimal","String","Long","Boolean","Integer","Short"}
TYPE_PRIMITIVE_NUMERIC = {"Integer","Long","BigDecimal","Short"}
EMBEDDED_TYPES = {"LoanProductRelatedDetail","LoanSummary","MonetaryCurrency",
                  "SavingsAccountSummary","ExternalId"}
TYPED_ENUM_TOKENS = re.compile(r"(Type|Status|Form|Strategy|Frequency|State|Method|Kind|Mode|Period)$")
TRIVIAL_NAME_HINTS = re.compile(r"(_date$|_at$|_on$|_name$|_amount$|_balance$|_count$|_number$|_no$|principal_amount|description$|email|mobile|phone)", re.I)
LINEAGE_NAME_HINTS = re.compile(r"(accrued|calculated|outstanding|paid|written_off|charged_off|completed|cumulative|total_|interest_(amount|paid)|fee_charges|penalty_charges|adjusted|derived|expected)", re.I)
TECH_NAME_HINTS    = re.compile(r"(^id$|^version$|created_(by|date)|last_modified|lastmodified|deleted|audit|external_id|tenant_id|reserved)", re.I)
STATUS_ENUM_NAME   = re.compile(r"(_enum$|_id$|_type$|_status$|status_|type_)", re.I)


def package_domain(fqn: str) -> str:
    parts = fqn.split(".")
    if "portfolio" in parts:
        i = parts.index("portfolio")
        if i+1 < len(parts): return f"portfolio.{parts[i+1]}"
    if "accounting" in parts:
        i = parts.index("accounting")
        if i+1 < len(parts): return f"accounting.{parts[i+1]}"
    return parts[3] if len(parts) > 3 else "other"


def classify(field):
    jt = field["java_type"]
    col = field.get("column") or {}
    join = field.get("join_column") or {}
    col_name = col.get("name") or join.get("name") or ""
    rel = field.get("relationship")
    converter = field.get("converter")
    enumerated = field.get("enumerated")

    if field.get("is_id"): return "technical", "primary key"
    if jt in EMBEDDED_TYPES: return "exclude", f"@Embedded composite ({jt})"
    if not col_name: return "exclude", f"no column mapping (likely collection)"
    if TECH_NAME_HINTS.search(col_name): return "technical", f"audit/system ({col_name})"

    if converter: return "enum-clean", f"@Convert({converter})"
    if enumerated == "STRING": return "enum-clean", "@Enumerated(STRING)"

    if rel == "ManyToOne" and jt == "CodeValue":
        return "reftable-link", "@ManyToOne CodeValue"
    if rel in ("ManyToOne","OneToOne"):
        return "trivial", f"@{rel} {jt} reference"
    if rel in ("OneToMany","ManyToMany","ElementCollection"):
        return "lineage", f"@{rel} collection"

    # typed enum without converter (Fineract default enum-clean 패턴)
    if jt not in TYPE_TRIVIAL and jt not in TYPE_PRIMITIVE_NUMERIC and TYPED_ENUM_TOKENS.search(jt):
        return "enum-clean", f"typed enum ({jt})"

    # Integer + status/type 컬럼 → collision-crux
    if jt == "Integer" and STATUS_ENUM_NAME.search(col_name):
        return "collision-crux", f"Integer + status/type ({col_name})"

    if LINEAGE_NAME_HINTS.search(col_name):
        return "lineage", f"derived/aggregated ({col_name})"
    if jt.lower() == "boolean": return "trivial", f"boolean flag"
    if jt == "BigDecimal": return "trivial", f"BigDecimal amount"
    if jt in ("LocalDate","LocalDateTime","OffsetDateTime","Date"):
        return "trivial", f"{jt} column"
    if jt in TYPE_TRIVIAL and TRIVIAL_NAME_HINTS.search(col_name):
        return "trivial", f"self-evident ({col_name})"
    if jt == "String": return "trivial", f"String text"
    if jt in ("Long","Integer"): return "trivial", f"{jt} count/identifier"
    return "unclassified", f"type={jt}, col={col_name}"


def nl_category(field, arch):
    col = (field.get("column") or {}).get("name") or (field.get("join_column") or {}).get("name") or ""
    if arch == "collision-crux":
        if "transaction_type" in col: return "code-collision-tx-type"
        if "status" in col: return "status-disambiguation"
        return "code-collision"
    if arch == "enum-clean": return "status-filter"
    if arch == "reftable-link": return "reftable-resolution"
    if arch == "lineage": return "lineage-required"
    if arch == "trivial":
        if re.search(r"date|on|at", col, re.I): return "time-bounded"
        if re.search(r"amount|balance|principal|interest", col, re.I): return "aggregation"
        return "general-fact"
    if arch == "technical": return "floor"
    return "general-fact"


def load_db_schema(sqlite_path: Path) -> dict:
    """sqlite에서 실제 존재하는 컬럼 인덱스 로드.
       return: {table_name: set(column_names)}
       DB에 없는 테이블·컬럼은 슬라이스 대상에서 제외 (실제 시맨틱 레이어 소비자
       기준 = DB 컬럼)."""
    import sqlite3
    conn = sqlite3.connect(str(sqlite_path))
    schema = {}
    for (tname,) in conn.execute("SELECT name FROM sqlite_master WHERE type='table'"):
        schema[tname] = {r[1] for r in conn.execute(f'PRAGMA table_info("{tname}")')}
    conn.close()
    return schema


def main():
    repo = Path(__file__).resolve().parents[1]
    orm = json.loads((repo / "signals/peek_orm.json").read_text())

    # DB 스키마 로드 (실제 시맨틱 레이어 대상 필터)
    db_schema = load_db_schema(repo / "data/fineract_3domain.sqlite")
    print(f"[i] DB 스키마: {len(db_schema)} 테이블 로드")

    # ─── 모집단: 3도메인 ─────────────────────────────────────────────
    candidates = []
    drift_count = 0
    for e in orm["entities"]:
        dom = package_domain(e["fqn"])
        if dom not in TARGET_DOMAINS: continue
        for f in e["fields"]:
            arch, reason = classify(f)
            col_name = (f.get("column") or {}).get("name") or (f.get("join_column") or {}).get("name") or ""
            # DB 기준 필터: 실제 DB에 컬럼이 없으면 드리프트로 표시하되 후보에서 제외
            if col_name and (e["table_name"] not in db_schema or col_name not in db_schema.get(e["table_name"], set())):
                drift_count += 1
                continue
            candidates.append({
                "id": f"{e['table_name']}.{col_name or f['java_field']}",
                "table": e["table_name"],
                "entity_class": e["class_name"],
                "domain_package": dom,
                "column": col_name,
                "java_field": f["java_field"],
                "java_type": f["java_type"],
                "archetype": arch,
                "archetype_reason": reason,
                "nl_category": nl_category(f, arch),
                "converter": f.get("converter"),
                "enumerated": f.get("enumerated"),
                "relationship": f.get("relationship"),
                "is_id": f.get("is_id"),
                "source_file": e["source_file"],
                "selected": False,
                "selection_strategy": None,
            })
    print(f"[i] ORM-DB 드리프트로 제외된 필드: {drift_count}")

    # 모집단 통계
    arch_counter = Counter(c["archetype"] for c in candidates)
    dom_arch = defaultdict(Counter)
    for c in candidates: dom_arch[c["domain_package"]][c["archetype"]] += 1

    print("=== 모집단 (3 도메인 패키지) ===")
    pop_total = len(candidates)
    pop_eval = sum(1 for c in candidates if c["archetype"] not in ("exclude",))
    print(f"  총 필드: {pop_total}")
    print(f"  평가 대상 (exclude 제외): {pop_eval}")
    print()

    print("=== 모집단 archetype 분포 ===")
    for a, n in arch_counter.most_common():
        pct = n*100/pop_total
        print(f"  {a:18s} {n:>4d}  ({pct:>5.1f}%)")
    print()

    print("=== 도메인 × archetype 매트릭스 ===")
    all_arches = ["enum-clean","collision-crux","reftable-link","lineage","trivial","technical","exclude","unclassified"]
    head = f"{'도메인':32s}" + "".join(f"{a[:12]:>14s}" for a in all_arches if arch_counter[a]>0) + f"{'sum':>6s}"
    print(head)
    for dom in TARGET_DOMAINS:
        row = f"{dom:32s}" + "".join(f"{dom_arch[dom][a]:>14d}" for a in all_arches if arch_counter[a]>0) + f"{sum(dom_arch[dom].values()):>6d}"
        print(row)
    print()

    # ─── Stratified sampling ─────────────────────────────────────────
    # 결정 케이스 (★)는 전수 또는 우선 포함, 그 외는 모집단 비율로 sampling.
    # 슬라이스 ~100컬럼 목표.

    # 우선순위 키워드 (가장 sharp한 케이스)
    PRIO_HINTS = {"status_enum","loan_status_id","transaction_type_enum",
                  "sub_status_enum","loan_sub_status_id","loan_type_enum",
                  "deposit_type_enum","account_type_enum"}

    grouped = defaultdict(list)
    for c in candidates:
        if c["archetype"] != "exclude":
            grouped[c["archetype"]].append(c)

    selected = []
    strategy_counts = Counter()

    # (a) ★ archetype 전수 포함 (이게 평가의 결정 케이스)
    for arch in ("collision-crux", "enum-clean", "reftable-link"):
        items = grouped[arch]
        items.sort(key=lambda c: (0 if c["column"] in PRIO_HINTS else 1, c["table"], c["column"]))
        for c in items:
            c["selected"] = True
            c["selection_strategy"] = "critical-include"
            selected.append(c)
            strategy_counts["critical-include"] += 1

    # (b) 나머지 archetype: 모집단 비율 유지하며 sampling
    # 슬라이스 ~150 목표 → 비결정 archetype 가용량
    # (v2 파서로 상속 필드 검출 후 결정 archetype 83개 전수 + 비결정 67개 stratified)
    target_total = 150
    decided = len(selected)
    quota_remain = max(0, target_total - decided)

    # 비결정 archetype: lineage, trivial, technical
    nondecisive = [a for a in ("trivial","lineage","technical","unclassified") if grouped[a]]
    nondecisive_pop = sum(len(grouped[a]) for a in nondecisive)
    for arch in nondecisive:
        items = grouped[arch]
        # 모집단 비율 보존: arch / nondecisive_pop * quota_remain
        n_take = max(1, round(len(items) / nondecisive_pop * quota_remain)) if items else 0
        n_take = min(n_take, len(items))
        # 도메인 균형: 각 도메인에서 최소 1개씩 가져오도록 시도
        items.sort(key=lambda c: (c["domain_package"], c["table"], c["column"] or c["java_field"]))
        per_dom = defaultdict(list)
        for c in items: per_dom[c["domain_package"]].append(c)
        picked = []
        # round-robin
        idx = {d: 0 for d in per_dom}
        while len(picked) < n_take:
            progress = False
            for d in TARGET_DOMAINS:
                if d in per_dom and idx[d] < len(per_dom[d]) and len(picked) < n_take:
                    picked.append(per_dom[d][idx[d]])
                    idx[d] += 1
                    progress = True
            if not progress: break
        for c in picked:
            c["selected"] = True
            c["selection_strategy"] = "stratified"
            selected.append(c)
            strategy_counts["stratified"] += 1

    # ─── 산출 ───
    cand_path = repo / "slice/columns_candidates.jsonl"
    sel_path  = repo / "slice/columns.jsonl"
    sum_path  = repo / "slice/slice_summary.json"

    with cand_path.open("w") as f:
        for c in candidates: f.write(json.dumps(c, ensure_ascii=False)+"\n")
    with sel_path.open("w") as f:
        for c in selected:
            slim = {k: v for k, v in c.items()
                    if k in ("id","table","entity_class","domain_package","column","java_field",
                             "java_type","archetype","archetype_reason","nl_category",
                             "converter","selection_strategy")}
            f.write(json.dumps(slim, ensure_ascii=False)+"\n")

    sel_arch = Counter(c["archetype"] for c in selected)
    sel_dom  = Counter(c["domain_package"] for c in selected)

    summary = {
        "target_domains": list(TARGET_DOMAINS),
        "population_total": pop_total,
        "population_evaluable": pop_eval,
        "population_archetype_distribution": dict(arch_counter),
        "population_domain_archetype_matrix": {d: dict(dom_arch[d]) for d in TARGET_DOMAINS},
        "slice_size": len(selected),
        "slice_archetype_distribution": dict(sel_arch),
        "slice_domain_distribution": dict(sel_dom),
        "selection_strategy_counts": dict(strategy_counts),
        "note": "결정 archetype (collision-crux / enum-clean / reftable-link)은 전수 포함. "
                "비결정 (trivial / lineage / technical)은 모집단 비율로 stratified sampling.",
    }
    sum_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2))

    print(f"=== 슬라이스 ({len(selected)} 컬럼) ===")
    for a, n in sel_arch.most_common():
        pop_n = arch_counter[a]
        print(f"  {a:18s} {n:>3d} / {pop_n:>3d}  ({n*100/pop_n:>5.1f}% of pop)")
    print()
    print("=== 도메인 분포 ===")
    for d, n in sel_dom.most_common():
        print(f"  {d:32s} {n:>3d}")
    print()
    print(f"산출: {cand_path.name} ({pop_total} 후보), {sel_path.name} ({len(selected)} 슬라이스), {sum_path.name}")


if __name__ == "__main__":
    main()
