#!/usr/bin/env python3
"""
peek_orm.json을 휴리스틱으로 archetype 분류하고 슬라이스 후보 풀 + 추천 슬라이스를 만든다.

Archetypes (학습 사이트 CH4-3 기준):
  enum-clean       — @Convert converter 있음 + typed enum (peek_orm만으로 정답)
  collision-crux   — Integer + *_enum / *_id (★연결 검증 필수)
  reftable-link    — @ManyToOne CodeValue (m_code_value 참조)
  trivial          — name+type 자명 (amount/date/name/count, control 케이스)
  lineage          — 산출/누적/이자 계산 (calculated/total/accrued/paid)
  technical        — audit/version/system 컬럼 (floor 후보)
  unclassified     — 위 어디에도 안 잡힘 (수동 분류 필요)

NL2SQL 카테고리도 동시 부여 (질문 작성 시 참고용).

산출:
  slice/columns_candidates.jsonl   — 전체 후보 풀 (7개 테이블 모든 컬럼 + 자동 archetype)
  slice/columns.jsonl              — 추천 슬라이스 (archetype별 균형 배분)
  slice/slice_summary.json         — 분류 통계 (archetype × table 매트릭스)
"""
import json, re
from pathlib import Path
from collections import Counter, defaultdict

TARGET_TABLES = [
    "m_loan", "m_savings_account", "m_client",
    "m_loan_transaction", "m_savings_account_transaction",
    "m_loan_repayment_schedule",
    "acc_gl_journal_entry",
]

# 휴리스틱 규칙들 -----------------------------------------------------------
TYPE_TRIVIAL = {"LocalDate", "LocalDateTime", "OffsetDateTime", "Date", "BigDecimal", "String", "Long", "Boolean"}
TYPE_PRIMITIVE_NUMERIC = {"Integer", "Long", "BigDecimal", "Short"}

TRIVIAL_NAME_HINTS = re.compile(r"(_date$|_at$|_on$|_name$|_amount$|_balance$|_count$|_number$|_no$|principal_amount|description$|email|mobile|phone)", re.I)
LINEAGE_NAME_HINTS = re.compile(r"(accrued|calculated|outstanding|paid|written_off|charged_off|completed|cumulative|total_|interest_(amount|paid)|fee_charges|penalty_charges|adjusted|derived|expected)", re.I)
TECH_NAME_HINTS    = re.compile(r"(^id$|^version$|created_(by|date)|last_modified|lastmodified|deleted|audit|external_id|tenant_id|reserved)", re.I)
STATUS_ENUM_NAME   = re.compile(r"(_enum$|_id$|_type$|_status$|status_|type_)", re.I)


EMBEDDED_TYPES = {
    "LoanProductRelatedDetail", "LoanSummary", "MonetaryCurrency",
    "SavingsAccountSummary", "ExternalId",
}
# Fineract의 typed enum 식별 어휘 (Type/Status/Form/Strategy/Frequency …)
TYPED_ENUM_TOKENS = re.compile(r"(Type|Status|Form|Strategy|Frequency|State|Method|Kind|Mode|Period)$")


def classify(field, table):
    fname = field["java_field"]
    jt = field["java_type"]
    col = field.get("column") or {}
    join = field.get("join_column") or {}
    col_name = col.get("name") or join.get("name") or ""
    rel = field.get("relationship")
    converter = field.get("converter")
    enumerated = field.get("enumerated")
    is_id_pk = field.get("is_id")

    # 평가에서 무의미하거나 분리 처리: PK, embedded composite
    if is_id_pk:
        return "technical", "primary key field"
    if jt in EMBEDDED_TYPES:
        return "exclude", f"@Embedded composite type ({jt})"
    if TECH_NAME_HINTS.search(col_name) or TECH_NAME_HINTS.search(fname):
        return "technical", f"audit/system column ({col_name})"

    # @Convert converter → enum-clean (peek_orm만으로 정답)
    if converter:
        return "enum-clean", f"@Convert({converter}) → typed enum"

    # @Enumerated(STRING) → enum-clean
    if enumerated == "STRING":
        return "enum-clean", "@Enumerated(STRING)"

    # @ManyToOne CodeValue → reftable-link
    if rel == "ManyToOne" and jt == "CodeValue":
        return "reftable-link", "@ManyToOne CodeValue (m_code_value)"

    # 다른 @ManyToOne / @OneToOne (Office, Currency, Group 등) — relational lookup
    if rel in ("ManyToOne", "OneToOne"):
        return "trivial", f"@{rel} {jt} reference"
    if rel in ("OneToMany", "ManyToMany", "ElementCollection"):
        return "lineage", f"@{rel} collection (derived from children)"

    # ─── typed enum without @Convert (Fineract에서 가장 흔한 enum-clean 패턴) ───
    # 예: AccountType, LoanSubStatus, PeriodFrequencyType, LoanTransactionType
    # peek_orm이 java_type을 알므로 tier-2 escalation으로 enum 정의 파일 찾으면 의미 회수.
    # converter는 없지만 본질적으로 enum-clean.
    if jt not in TYPE_TRIVIAL and jt not in TYPE_PRIMITIVE_NUMERIC and TYPED_ENUM_TOKENS.search(jt):
        return "enum-clean", f"typed enum without converter ({jt})"

    # Integer + *_enum/*_id/*_type/*_status — 충돌-크럭스 후보
    if jt == "Integer" and STATUS_ENUM_NAME.search(col_name):
        return "collision-crux", f"Integer + status/type column ({col_name})"

    # lineage: 누적·산출 컬럼
    if LINEAGE_NAME_HINTS.search(col_name):
        return "lineage", f"derived/aggregated column ({col_name})"

    # boolean (대소문자) — flag, 자명
    if jt.lower() == "boolean":
        return "trivial", f"boolean flag ({col_name})"

    # BigDecimal 일반 (금액 류) — 자명
    if jt == "BigDecimal":
        return "trivial", f"BigDecimal amount column"

    # LocalDate/LocalDateTime — 자명
    if jt in ("LocalDate", "LocalDateTime", "OffsetDateTime", "Date"):
        return "trivial", f"{jt} column"

    # 자명한 이름 패턴
    if jt in TYPE_TRIVIAL and TRIVIAL_NAME_HINTS.search(col_name):
        return "trivial", f"self-evident name+type ({col_name})"

    # String — 도메인 식별자/이름 류
    if jt == "String":
        return "trivial", f"String text/identifier ({col_name})"

    # Long/Integer (technical에 안 잡힌 것들) — 도메인 식별자, trivial로
    if jt in ("Long", "Integer"):
        return "trivial", f"{jt} count/identifier ({col_name})"

    return "unclassified", f"type={jt}, col={col_name}"


# NL2SQL 카테고리 매핑 (질문 작성용 힌트) -------------------------------------

def nl_category(field, table, archetype):
    col = (field.get("column") or {}).get("name") or (field.get("join_column") or {}).get("name") or ""
    fname = field["java_field"]
    if archetype == "collision-crux":
        if "transaction_type" in col:
            return "code-collision-tx-type"
        if "status" in col:
            return "status-disambiguation"
        return "code-collision"
    if archetype == "enum-clean":
        return "status-filter"
    if archetype == "reftable-link":
        return "reftable-resolution"
    if archetype == "lineage":
        return "lineage-required"
    if archetype == "trivial":
        if re.search(r"date|on|at", col, re.I):
            return "time-bounded"
        if re.search(r"amount|balance|principal|interest", col, re.I):
            return "aggregation"
        return "general-fact"
    if archetype == "technical":
        return "floor"
    return "general-fact"


def main():
    repo = Path(__file__).resolve().parents[1]
    orm = json.loads((repo / "signals/peek_orm.json").read_text())
    by_table = {e["table_name"]: e for e in orm["entities"]}

    candidates = []
    table_arch = defaultdict(lambda: Counter())

    for t in TARGET_TABLES:
        if t not in by_table:
            print(f"[!] missing in peek_orm: {t}"); continue
        ent = by_table[t]
        for idx, f in enumerate(ent["fields"]):
            arch, reason = classify(f, t)
            col_name = (f.get("column") or {}).get("name") or (f.get("join_column") or {}).get("name") or ""
            # 컬럼명이 빈 필드는 평가 단위가 아님 (컬렉션/PK Long 등) → exclude
            if not col_name:
                arch, reason = "exclude", f"no column mapping (likely collection/PK), type={f['java_type']}"
            cand = {
                "id": f"{t}.{col_name or f['java_field']}",
                "table": t,
                "entity_class": ent["class_name"],
                "column": col_name,
                "java_field": f["java_field"],
                "java_type": f["java_type"],
                "archetype": arch,
                "archetype_reason": reason,
                "nl_category": nl_category(f, t, arch),
                "converter": f.get("converter"),
                "enumerated": f.get("enumerated"),
                "relationship": f.get("relationship"),
                "is_id": f.get("is_id"),
                "selected": False,           # 추천 슬라이스 마킹
                "selection_priority": 99,    # 1이 가장 높음
            }
            candidates.append(cand)
            table_arch[t][arch] += 1

    # 통계
    arch_counter = Counter(c["archetype"] for c in candidates)
    print("=== archetype 분포 (자동 분류) ===")
    for a, n in arch_counter.most_common():
        print(f"  {a:18s}  {n:>3d}")
    print(f"  TOTAL                {len(candidates)}")
    print()
    print("=== table × archetype 매트릭스 ===")
    all_arches = sorted(arch_counter)
    head = f"{'table':32s}" + "".join(f"{a[:14]:>16s}" for a in all_arches) + f"{'sum':>6s}"
    print(head)
    for t in TARGET_TABLES:
        if t not in by_table: continue
        row = f"{t:32s}" + "".join(f"{table_arch[t][a]:>16d}" for a in all_arches) + f"{sum(table_arch[t].values()):>6d}"
        print(row)

    # ---- 추천 슬라이스 선정 (archetype별 목표 수) -----------------------
    # archetype별 목표 (현실적 ≤ 사용가능)
    targets = {
        "collision-crux": 25,    # 우선 핵심
        "enum-clean":     15,    # typed enum without converter까지 잡으면 다수 가능
        "reftable-link": 10,
        "trivial":        30,    # NL2SQL 자연성 위해 충분히
        "lineage":        12,
        "technical":       5,    # floor 확인용 소수
        "unclassified":    8,    # 수동 검토 대상
        "exclude":         0,    # @Embedded 등은 슬라이스 제외
    }
    # 우선순위 1순위 키워드 (★연결 검증의 결정적 케이스)
    PRIO_HINTS = {
        "status_enum", "loan_status_id", "transaction_type_enum",
        "sub_status_enum", "loan_sub_status_id", "loan_type_enum",
        "deposit_type_enum", "account_type_enum",
    }

    grouped = defaultdict(list)
    for c in candidates:
        grouped[c["archetype"]].append(c)

    # 각 그룹에서 우선순위 정렬: PRIO_HINTS 매칭 → 핵심 7개 테이블 → 알파벳
    selected = []
    table_order = {t: i for i, t in enumerate(TARGET_TABLES)}

    # trivial은 *테이블별 quota*로 도메인 균등 배분 (NL2SQL 다양성 위해)
    # 그 외 archetype은 전체 풀에서 우선순위대로
    for arch, items in grouped.items():
        if arch == "exclude": continue
        if arch == "trivial":
            cap = targets.get(arch, 0)
            per_table = max(1, cap // len([t for t in TARGET_TABLES if t in by_table]))
            for t in TARGET_TABLES:
                if t not in by_table: continue
                t_items = [c for c in items if c["table"] == t]
                t_items.sort(key=lambda c: c["column"] or c["java_field"])
                for c in t_items[:per_table]:
                    c["selected"] = True
                    c["selection_priority"] = 3
                    selected.append(c)
        else:
            items.sort(key=lambda c: (
                0 if c["column"] in PRIO_HINTS else 1,
                table_order.get(c["table"], 999),
                c["column"] or c["java_field"],
            ))
            cap = targets.get(arch, 0)
            for c in items[:cap]:
                c["selected"] = True
                c["selection_priority"] = 1 if c["column"] in PRIO_HINTS else 2
                selected.append(c)

    # ---- 산출 ----
    cand_path = repo / "slice/columns_candidates.jsonl"
    sel_path  = repo / "slice/columns.jsonl"
    sum_path  = repo / "slice/slice_summary.json"

    with cand_path.open("w") as f:
        for c in candidates:
            f.write(json.dumps(c, ensure_ascii=False) + "\n")
    with sel_path.open("w") as f:
        for c in selected:
            # 선정된 컬럼만 (slim)
            slim = {k: v for k, v in c.items()
                    if k in ("id", "table", "entity_class", "column", "java_field",
                             "java_type", "archetype", "archetype_reason", "nl_category",
                             "converter", "selection_priority")}
            f.write(json.dumps(slim, ensure_ascii=False) + "\n")

    summary = {
        "candidate_count": len(candidates),
        "selected_count": len(selected),
        "archetype_distribution_all": dict(arch_counter),
        "archetype_distribution_selected": dict(Counter(c["archetype"] for c in selected)),
        "table_archetype_matrix": {t: dict(table_arch[t]) for t in TARGET_TABLES if t in by_table},
        "targets": targets,
        "note": "자동 휴리스틱 분류. unclassified는 수동 검토 필요. selection_priority=1은 ★연결 검증 결정 케이스.",
    }
    sum_path.write_text(json.dumps(summary, ensure_ascii=False, indent=2))

    print()
    print(f"=== 추천 슬라이스 ({len(selected)} 컬럼) ===")
    for arch, n in Counter(c["archetype"] for c in selected).most_common():
        print(f"  {arch:18s}  {n:>3d}")
    print()
    print(f"산출: {cand_path.name}, {sel_path.name}, {sum_path.name}")


if __name__ == "__main__":
    main()
