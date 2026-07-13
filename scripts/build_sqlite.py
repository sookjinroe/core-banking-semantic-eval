#!/usr/bin/env python3
"""
Fineract Liquibase XML을 파싱해 SQLite 데이터베이스를 생성한다.

파이프라인:
  1. Liquibase XML 파싱 → 3 도메인 관련 테이블 스키마 추출
  2. SQLite CREATE TABLE 생성 (PostgreSQL 타입 → SQLite 매핑)
  3. Fineract initial_data 로드 (r_enum_value, offices, codes 등 reference)
  4. 운영 데이터 시드 (Faker + numpy, seed 고정)
  5. 인덱스 생성 (NL 질문 대상 컬럼)

사용:
  python3 scripts/build_sqlite.py --config pilot     # 파일럿 소규모
  python3 scripts/build_sqlite.py --config medium    # 중규모 (파일럿 통과 후)
"""
import argparse, json, random, re, sqlite3, sys
from datetime import date, datetime, timedelta
from decimal import Decimal
from pathlib import Path
from xml.etree import ElementTree as ET

NS = "{http://www.liquibase.org/xml/ns/dbchangelog}"

# 3 도메인 관련 테이블 (직접 슬라이스 대상 + FK 참조 대상)
DOMAIN_TABLES = {
    # portfolio.loanaccount
    "m_loan", "m_loan_transaction", "m_loan_repayment_schedule",
    "m_loan_charge", "m_loan_charge_paid_by", "m_loan_disbursement_detail",
    "m_loan_arrears_aging", "m_loan_collateral_management",
    "m_loan_installment_charge", "m_loan_overdue_installment_charge",
    "m_loan_officer_assignment_history", "m_product_loan",
    "m_loan_transaction_relation", "m_loan_delinquency_action",
    "m_loan_delinquency_tag_history",
    # portfolio.loanaccount — 세부 (v2 슬라이스가 참조)
    "m_loan_recalculation_details", "m_loan_payment_allocation_rule",
    "m_loan_reage_parameter", "m_loan_reschedule_request",
    "m_loan_term_variations", "m_loan_credit_allocation_rule",
    "m_loan_reamortization_parameter", "m_loan_amortization_allocation_mapping",
    "m_loan_status_change_history",
    "glim_accounts", "gsim_accounts",
    # portfolio.savings
    "m_savings_account", "m_savings_account_transaction",
    "m_savings_account_charge", "m_savings_account_charge_paid_by",
    "m_deposit_account_on_hold_transaction", "m_savings_product",
    "m_deposit_product_recurring_detail", "m_deposit_product_term_and_preclosure",
    "m_savings_account_lock",
    # portfolio.savings — 정기예금·적금 (v2 슬라이스가 참조)
    "fixeddepositproduct", "recurringdepositproduct",
    "m_deposit_account_term_and_preclosure",
    "m_deposit_account_interest_incentives",
    # portfolio.client
    "m_client", "m_client_charge", "m_client_transaction",
    "m_client_identifier", "m_client_non_person",
    # 필수 reference (외부 FK 참조)
    "m_office", "m_code", "m_code_value", "r_enum_value",
    "m_currency", "m_appuser", "m_role", "m_fund",
    "m_charge", "m_payment_type",
    "m_organisation_currency", "m_group", "m_group_client",
    "m_staff", "m_calendar", "m_calendar_instance",
    "m_note",
    # portfolio.delinquency (loan 참조)
    "m_delinquency_bucket", "m_delinquency_range",
    "m_delinquency_bucket_mappings",
}

# PostgreSQL / Liquibase 타입 → SQLite 타입 매핑
def sqlite_type(pg_type: str) -> str:
    t = pg_type.strip().upper()
    if any(t.startswith(x) for x in ("BIGINT","INT","SMALLINT","TINYINT")):
        return "INTEGER"
    if t.startswith("BOOLEAN") or t.startswith("BOOL"):
        return "INTEGER"  # 0/1
    if t.startswith("DECIMAL") or t.startswith("NUMERIC"):
        return "NUMERIC"  # SQLite는 정확 decimal 없어서 NUMERIC 사용
    if t.startswith("DATE") and "TIME" not in t:
        return "TEXT"  # ISO YYYY-MM-DD
    if t.startswith("DATETIME") or t.startswith("TIMESTAMP"):
        return "TEXT"  # ISO 8601
    if any(t.startswith(x) for x in ("VARCHAR","CHAR","TEXT","LONGTEXT","MEDIUMTEXT")):
        return "TEXT"
    if t.startswith("BLOB") or t.startswith("BYTEA"):
        return "BLOB"
    return "TEXT"  # fallback


# ─── Liquibase XML → 스키마 파싱 ────────────────────────────────────────

def parse_create_tables(changelog_dir: Path, wanted: set):
    """관심 테이블에 대한 createTable + addColumn을 모두 모아 스키마 dict를 만든다."""
    tables = {}  # table_name -> {"columns": [(name, type, not_null, default, is_pk, autoinc)], "order": file_order}
    file_order = 0
    for xml in sorted(changelog_dir.rglob("*.xml")):
        try:
            tree = ET.parse(xml)
        except ET.ParseError:
            continue
        for cs in tree.iter(f"{NS}changeSet"):
            for ct in cs.findall(f".//{NS}createTable"):
                name = ct.get("tableName")
                if name not in wanted:
                    continue
                if name not in tables:
                    tables[name] = {"columns": [], "col_names": set(), "order": file_order}
                for col in ct.findall(f"{NS}column"):
                    _add_column(tables[name], col)
            for ac in cs.findall(f".//{NS}addColumn"):
                name = ac.get("tableName")
                if name not in wanted or name not in tables:
                    continue
                for col in ac.findall(f"{NS}column"):
                    _add_column(tables[name], col)
        file_order += 1
    return tables


def _add_column(tbl: dict, col):
    name = col.get("name")
    if not name or name in tbl["col_names"]:
        return
    typ = col.get("type") or "TEXT"
    autoinc = col.get("autoIncrement","false") == "true"
    # constraints
    not_null = False
    is_pk = False
    unique = False
    for cst in col.findall(f"{NS}constraints"):
        if cst.get("nullable","true") == "false": not_null = True
        if cst.get("primaryKey","false") == "true": is_pk = True
        if cst.get("unique","false") == "true": unique = True
    # default
    default = None
    for k in ("defaultValue","defaultValueNumeric","defaultValueBoolean","defaultValueDate","defaultValueComputed"):
        v = col.get(k)
        if v is None: continue
        if k == "defaultValueComputed" and v.upper() == "NULL":
            default = None
        elif k == "defaultValueBoolean":
            default = "1" if v.lower()=="true" else "0"
        else:
            default = v
        break
    tbl["columns"].append({
        "name": name, "type": typ, "not_null": not_null, "default": default,
        "is_pk": is_pk, "autoinc": autoinc, "unique": unique,
    })
    tbl["col_names"].add(name)


def build_create_sql(tables: dict) -> list:
    """스키마 dict → CREATE TABLE SQL 리스트."""
    sqls = []
    for name, t in tables.items():
        parts = []
        pk_cols = [c["name"] for c in t["columns"] if c["is_pk"]]
        for c in t["columns"]:
            typ = sqlite_type(c["type"])
            piece = f'  "{c["name"]}" {typ}'
            if c["is_pk"] and c["autoinc"] and len(pk_cols)==1:
                piece += " PRIMARY KEY AUTOINCREMENT"
            elif c["not_null"] and not c["is_pk"]:
                piece += " NOT NULL"
            if c["unique"]:
                piece += " UNIQUE"
            if c["default"] is not None:
                d = c["default"]
                # 문자열 default는 quote
                if not re.match(r'^-?\d+(\.\d+)?$', str(d)):
                    d = f"'{d}'"
                piece += f" DEFAULT {d}"
            parts.append(piece)
        # 복합 PK
        if len(pk_cols) > 1:
            pk_str = ", ".join('"' + c + '"' for c in pk_cols)
            parts.append(f"  PRIMARY KEY ({pk_str})")
        sqls.append(f'CREATE TABLE IF NOT EXISTS "{name}" (\n' + ",\n".join(parts) + "\n);")
    return sqls


# ─── Reference data 로드 (r_enum_value, offices 등) ───────────────────

def load_reference_inserts(changelog_dir: Path, wanted: set):
    """관심 테이블에 대한 <insert> 문을 모두 수집."""
    inserts = []  # (table, {col: value})
    for xml in sorted(changelog_dir.rglob("*.xml")):
        try:
            tree = ET.parse(xml)
        except ET.ParseError:
            continue
        for ins in tree.iter(f"{NS}insert"):
            tbl = ins.get("tableName")
            if tbl not in wanted:
                continue
            row = {}
            for col in ins.findall(f"{NS}column"):
                n = col.get("name")
                # 순서 중요: valueBoolean → valueNumeric → valueDate → valueComputed → value
                for k in ("valueBoolean","valueNumeric","valueDate","valueComputed","value"):
                    v = col.get(k)
                    if v is None:
                        continue
                    if k == "valueBoolean":
                        row[n] = 1 if str(v).lower()=="true" else 0
                    elif k == "valueComputed" and str(v).upper() == "NULL":
                        row[n] = None
                    elif k == "valueNumeric":
                        try:
                            row[n] = float(v) if "." in str(v) else int(v)
                        except (ValueError, TypeError):
                            row[n] = str(v)  # fallback: 문자열
                    else:
                        row[n] = v
                    break
            inserts.append((tbl, row))
    return inserts


# ─── 운영 데이터 시드 (Faker + 분포 규칙) ──────────────────────────────

def _column_defaults(conn, table):
    """table의 컬럼 정보를 조회해 NOT NULL·PK 여부와 default를 캐시.
       return: {col: (not_null, has_default, type, is_pk)}"""
    info = {}
    for row in conn.execute(f'PRAGMA table_info("{table}")'):
        # row: (cid, name, type, notnull, dflt_value, pk)
        cid, name, typ, notnull, dflt, pk = row
        info[name] = (bool(notnull), dflt is not None, typ, bool(pk))
    return info


def _default_for_type(typ: str):
    t = (typ or "").upper()
    if "INT" in t: return 0
    if "NUMERIC" in t or "DECIMAL" in t or "REAL" in t: return 0.0
    if "BLOB" in t: return b""
    if "DATE" in t or "TIME" in t: return str(date.today())
    return ""  # TEXT default


def smart_insert(conn, table, values: dict):
    """table의 NOT NULL 컬럼 중 값 안 준 것에 sensible default 채우고 INSERT."""
    info = _column_defaults(conn, table)
    filled = dict(values)
    for col, (nn, has_def, typ, is_pk) in info.items():
        if col in filled: continue
        if is_pk: continue          # autoincrement 처리
        if not nn: continue         # nullable이면 그냥 NULL
        if has_def: continue        # 스키마 default가 있으면 그것 사용
        filled[col] = _default_for_type(typ)
    cols = ", ".join(f'"{k}"' for k in filled.keys())
    ph = ", ".join("?" for _ in filled)
    cur = conn.cursor()
    cur.execute(f'INSERT INTO "{table}" ({cols}) VALUES ({ph})', list(filled.values()))
    return cur.lastrowid

# 파일럿 config
CONFIGS = {
    "pilot":  {"clients": 100, "loans": 300, "savings": 150, "loan_tx": 1500, "sv_tx": 800},
    "medium": {"clients": 300, "loans": 800, "savings": 500, "loan_tx": 5000, "sv_tx": 2500},
    "large":  {"clients": 1000,"loans": 3000,"savings": 1500,"loan_tx": 20000,"sv_tx": 10000},
}

# LoanStatus enum 값 분포 (★ 케이스 포함)
LOAN_STATUS_DIST = [
    (100, "submitted",  0.05),  # SUBMITTED_AND_PENDING_APPROVAL
    (200, "approved",   0.08),  # APPROVED
    (300, "active",     0.55),  # ACTIVE
    (500, "rejected",   0.05),  # REJECTED
    (600, "closed",     0.15),  # CLOSED_OBLIGATIONS_MET
    (601, "written_off",0.03),  # CLOSED_WRITTEN_OFF
    (700, "overpaid",   0.05),  # ★ OVERPAID (rare but present)
    (800, "overdue",    0.04),  # OVERDUE (여기서 status 800으로 표현)  # 주의: 실제 Fineract에선 800이 SavingsAccount용
]
# 실제로 Loan.status에 800은 안 씀. overdue는 별도 delinquency로 표현.
# 파일럿에선 800 빼고 100/200/300/500/600/601/700만 사용.
LOAN_STATUS_DIST = [d for d in LOAN_STATUS_DIST if d[0] != 800]
# 정규화
total_p = sum(p for _,_,p in LOAN_STATUS_DIST)
LOAN_STATUS_DIST = [(v, n, p/total_p) for v,n,p in LOAN_STATUS_DIST]

# SavingsAccountStatusType enum 값
SAVINGS_STATUS_DIST = [
    (100, "submitted",       0.05),
    (200, "approved",        0.05),
    (300, "active",          0.70),
    (500, "rejected",        0.02),
    (600, "closed",          0.10),
    (700, "prematureclosed", 0.03),  # ★ 700=PRE_MATURE_CLOSURE
    (800, "matured",         0.05),  # ★ 800=MATURED
]

# ClientStatus enum 값
# ClientStatus.java 원본 체계: 0 INVALID / 100 PENDING / 300 ACTIVE / 303·304 TRANSFER /
# 600 CLOSED / 700 REJECTED / 800 WITHDRAWN. 500은 이 체계에 존재하지 않음.
# (구 시드가 대출 상태 체계의 500=REJECTED를 잘못 이식했던 결함 수정, 2026-07-13)
CLIENT_STATUS_DIST = [
    (100, "pending",   0.10),  # PENDING
    (300, "active",    0.75),  # ACTIVE
    (600, "closed",    0.07),  # CLOSED
    (700, "rejected",  0.05),  # REJECTED (구 500의 0.03 + 구 700의 0.02 통합)
    (800, "withdrawn", 0.03),  # WITHDRAWN
]


def seed_operational_data(conn: sqlite3.Connection, config: dict, seed: int = 42):
    """운영 데이터 시드 — Faker + numpy로 clients·loans·savings·transactions 생성.
       smart_insert로 NOT NULL 컬럼은 자동 default 채움.
       다양성: 지점 5개, 대출 상품 4종, 예금 상품 3종, 직원 8명, client 세그먼트 4가지."""
    from faker import Faker
    import numpy as np
    random.seed(seed)
    np.random.seed(seed)
    fake = Faker("ko_KR")
    fake.seed_instance(seed)

    cur = conn.cursor()
    today = date.today()
    date_min = today - timedelta(days=3*365)

    currency_code = "KRW"
    cur.execute("SELECT code FROM m_currency LIMIT 1")
    r = cur.fetchone()
    if r: currency_code = r[0]

    # ─── (1) 지점 5개 ───
    print(f"      Diversity: 지점 5개, 상품 4+3종, 직원 8명, client 세그먼트 4", flush=True)
    office_ids = []
    OFFICES = [
        ("Head Office",".","2020-01-01"),
        ("강남지점",".1.","2020-03-15"),
        ("부산지점",".1.","2020-04-20"),
        ("대구지점",".1.","2021-02-10"),
        ("인천지점",".1.","2021-06-05"),
    ]
    cur.execute("SELECT COUNT(*) FROM m_office")
    if cur.fetchone()[0] == 0:
        for name, hier, opening in OFFICES:
            oid = smart_insert(conn, "m_office", {
                "name": name, "hierarchy": hier, "opening_date": opening,
            })
            office_ids.append(oid)
    else:
        # Head Office는 이미 있음, 나머지만 추가
        cur.execute("SELECT id FROM m_office")
        office_ids = [r[0] for r in cur.fetchall()]
        for name, hier, opening in OFFICES[1:]:
            oid = smart_insert(conn, "m_office", {
                "name": name, "hierarchy": hier, "opening_date": opening,
            })
            office_ids.append(oid)

    # ─── (2) 대출 상품 4종 ───
    LOAN_PRODUCTS = [
        # (이름, short, 원금범위, 이율범위, 기간후보, 가중치, 특징)
        ("일반대출",   "GNL", (1_000_000,  5_000_000),  (8, 12),   [6,12,24],       0.40, "normal"),
        ("주택대출",   "HSG", (50_000_000, 200_000_000), (4, 6),    [60,84,120],     0.15, "long"),
        ("소액대출",   "MCR", (300_000,    2_000_000),  (12, 18),  [3,6,12],        0.30, "short"),
        ("긴급대출",   "EMG", (1_000_000,  10_000_000), (15, 22),  [6,12,24,36],    0.15, "strict"),
    ]
    loan_product_ids = []  # [(id, name, principal_range, rate_range, terms, feature)]
    for name, short, prng, rrng, terms, w, feat in LOAN_PRODUCTS:
        lpid = smart_insert(conn, "m_product_loan", {
            "name": name, "short_name": short,
            "currency_code": currency_code, "currency_digits": 2,
            "principal_amount": (prng[0]+prng[1])//2,
            "min_principal_amount": prng[0], "max_principal_amount": prng[1],
            "nominal_interest_rate_per_period": (rrng[0]+rrng[1])/2/12,
            "interest_period_frequency_enum": 3,
            "annual_nominal_interest_rate": (rrng[0]+rrng[1])/2,
            "interest_method_enum": 1, "interest_calculated_in_period_enum": 1,
            "repay_every": 1, "repayment_period_frequency_enum": 2,
            "number_of_repayments": terms[len(terms)//2],
            "amortization_method_enum": 1, "accounting_type": 1,
            "loan_transaction_strategy_code": "mifos-standard-strategy",
        })
        loan_product_ids.append((lpid, name, prng, rrng, terms, w, feat))
    lp_weights = [x[5] for x in loan_product_ids]

    # ─── (3) 예금 상품 3종 ───
    SAVINGS_PRODUCTS = [
        ("자유입출금", "SAV", 100, 1.5,  0.60, "flex"),   # deposit_type_enum=100
        ("정기예금",   "FXD", 200, 3.5,  0.25, "fixed"),  # 200
        ("정기적금",   "RCR", 300, 3.0,  0.15, "recur"),  # 300
    ]
    savings_product_ids = []
    for name, short, dep_type, rate, w, feat in SAVINGS_PRODUCTS:
        spid = smart_insert(conn, "m_savings_product", {
            "name": name, "short_name": short,
            "currency_code": currency_code, "currency_digits": 2,
            "nominal_annual_interest_rate": rate,
            "interest_compounding_period_enum": 4, "interest_posting_period_enum": 4,
            "interest_calculation_type_enum": 1,
            "interest_calculation_days_in_year_type_enum": 365,
            "accounting_type": 1, "deposit_type_enum": dep_type,
        })
        savings_product_ids.append((spid, name, dep_type, rate, w, feat))
    sp_weights = [x[4] for x in savings_product_ids]

    # ─── (4) Loan Officer 8명 (m_staff) ───
    STAFF_NAMES = [
        "김철수","이영희","박민수","최지영",
        "정성훈","한소영","윤재현","조은지",
    ]
    staff_ids = []
    for i, name in enumerate(STAFF_NAMES):
        first, last = name[1:], name[:1]
        sid = smart_insert(conn, "m_staff", {
            "firstname": first, "lastname": last,
            "display_name": name,
            "office_id": random.choice(office_ids[1:]),  # 지점 소속
            "is_loan_officer": 1,
            "is_active": 1,
        })
        staff_ids.append(sid)

    # ─── (5) Client CodeValue (gender, classification) ───
    # 기존 m_code에 Gender(id=4), ClientClassification(id=17)가 있음
    # code_value를 시드
    gender_map = {}
    for name in ("남성", "여성"):
        cvid = smart_insert(conn, "m_code_value", {
            "code_id": 4, "code_value": name, "code_description": f"{name} gender",
            "order_position": len(gender_map)+1, "is_active": 1, "is_mandatory": 0,
        })
        gender_map[name] = cvid
    classification_map = {}
    for name in ("Salaried", "Self-Employed", "Student", "Retired"):
        cvid = smart_insert(conn, "m_code_value", {
            "code_id": 17, "code_value": name, "code_description": f"{name} classification",
            "order_position": len(classification_map)+1, "is_active": 1, "is_mandatory": 0,
        })
        classification_map[name] = cvid

    # ─── (6) Client 생성 (세그먼트 부여) ───
    print(f"      Client 생성 ({config['clients']})...", flush=True)
    client_ids = []
    for i in range(config["clients"]):
        status_val = random.choices([s[0] for s in CLIENT_STATUS_DIST],
                                    weights=[s[2] for s in CLIENT_STATUS_DIST])[0]
        first = fake.first_name(); last = fake.last_name()
        submit = _random_date(date_min, today)
        activation = None
        if status_val in (300, 600, 700, 800):
            activation = str(_random_date(submit, today))
        # 세그먼트
        classification = random.choices(
            list(classification_map.keys()),
            weights=[0.5, 0.25, 0.10, 0.15])[0]  # 급여자 많음
        gender_name = random.choices(["남성","여성"], weights=[0.52, 0.48])[0]
        # 나이는 20~70. Retired는 60+, Student는 18~30
        if classification == "Retired":
            age = random.randint(60, 80)
        elif classification == "Student":
            age = random.randint(18, 30)
        else:
            age = random.randint(25, 60)
        dob = today - timedelta(days=age*365 + random.randint(-180, 180))
        # 지점 배정 (Head Office 아닌 4개 지점 중)
        office = random.choice(office_ids[1:]) if len(office_ids) > 1 else office_ids[0]
        staff = random.choice(staff_ids)
        cid = smart_insert(conn, "m_client", {
            "account_no": f"C{1000000+i:07d}",
            "office_id": office,
            "staff_id": staff,
            "status_enum": status_val,
            "firstname": first, "lastname": last,
            "display_name": f"{last}{first}",
            "gender_cv_id": gender_map[gender_name],
            "client_classification_cv_id": classification_map[classification],
            "date_of_birth": str(dob),
            "submittedon_date": str(submit),
            "activation_date": activation,
            "is_staff": 0,
        })
        client_ids.append((cid, classification, age))

    active_clients = [c for c in client_ids
                      if conn.execute("SELECT status_enum FROM m_client WHERE id=?",(c[0],)).fetchone()[0]==300]
    print(f"      active clients: {len(active_clients)}", flush=True)

    # ─── (7) Savings 상품별 시나리오 ───
    print(f"      Savings 계좌 생성 ({config['savings']})...", flush=True)
    savings_active = []  # [(id, activation_date)]
    for i in range(config["savings"]):
        if not active_clients: break
        cid, classification, age = random.choice(active_clients)
        # 상품 선택 (세그먼트에 따라 다르게)
        if classification == "Student":
            sp_choice = random.choices(savings_product_ids, weights=[0.85, 0.10, 0.05])[0]
        elif classification == "Retired":
            sp_choice = random.choices(savings_product_ids, weights=[0.35, 0.55, 0.10])[0]
        else:
            sp_choice = random.choices(savings_product_ids, weights=sp_weights)[0]
        spid, sp_name, dep_type, rate, _, feat = sp_choice
        # 상품에 따라 status 분포 조정
        if feat == "flex":
            status_dist = SAVINGS_STATUS_DIST
        elif feat == "fixed":
            # 정기예금은 status=800(MATURED), 700(PRE_MATURE) 비율 높음
            status_dist = [
                (100,"submitted",0.03),(200,"approved",0.03),(300,"active",0.50),
                (500,"rejected",0.01),(600,"closed",0.05),
                (700,"premature",0.15),(800,"matured",0.23),
            ]
        else:  # recur
            status_dist = [
                (100,"submitted",0.05),(200,"approved",0.05),(300,"active",0.60),
                (500,"rejected",0.02),(600,"closed",0.15),
                (700,"premature",0.08),(800,"matured",0.05),
            ]
        # 정규화
        total_p = sum(p for _,_,p in status_dist)
        status_dist_n = [(v,n,p/total_p) for v,n,p in status_dist]
        status_val = random.choices([s[0] for s in status_dist_n],
                                    weights=[s[2] for s in status_dist_n])[0]
        submit = _random_date(date_min, today)
        approve = _random_date(submit, today) if status_val >= 200 else None
        activation = _random_date(approve, today) if (approve and status_val >= 300) else None
        sid = smart_insert(conn, "m_savings_account", {
            "account_no": f"S{2000000+i:07d}",
            "client_id": cid, "product_id": spid,
            "status_enum": status_val, "sub_status_enum": 0,
            "account_type_enum": 1, "deposit_type_enum": dep_type,
            "currency_code": currency_code, "currency_digits": 2,
            "nominal_annual_interest_rate": rate,
            "interest_compounding_period_enum": 4, "interest_posting_period_enum": 4,
            "interest_calculation_type_enum": 1,
            "interest_calculation_days_in_year_type_enum": 365,
            "submittedon_date": str(submit),
            "approvedon_date": str(approve) if approve else None,
            "activatedon_date": str(activation) if activation else None,
            "min_required_opening_balance": 0,
        })
        if status_val in (300,600,700,800) and activation:
            savings_active.append((sid, activation))

    # ─── (8) Loan 상품별 시나리오 ───
    print(f"      Loan 생성 ({config['loans']})...", flush=True)
    loans_disbursed = []
    for i in range(config["loans"]):
        if not active_clients: break
        cid, classification, age = random.choice(active_clients)
        # 상품 선택 (세그먼트별)
        if classification == "Student":
            lp_choice = random.choices(loan_product_ids, weights=[0.1, 0.05, 0.7, 0.15])[0]  # 소액 위주
        elif classification == "Retired":
            lp_choice = random.choices(loan_product_ids, weights=[0.5, 0.3, 0.15, 0.05])[0]  # 주택 조금 있음
        else:
            lp_choice = random.choices(loan_product_ids, weights=lp_weights)[0]
        lpid, lp_name, prng, rrng, terms, _, feat = lp_choice
        # 상품별 status 분포 조정
        if feat == "long":  # 주택
            status_dist = [(100,"s",0.02),(200,"a",0.03),(300,"active",0.75),
                          (500,"r",0.05),(600,"c",0.10),(601,"wo",0.02),(700,"ov",0.03)]
        elif feat == "short":  # 소액
            status_dist = [(100,"s",0.05),(200,"a",0.05),(300,"active",0.40),
                          (500,"r",0.03),(600,"c",0.30),(601,"wo",0.05),(700,"ov",0.12)]
        elif feat == "strict":  # 긴급
            status_dist = [(100,"s",0.05),(200,"a",0.05),(300,"active",0.45),
                          (500,"r",0.20),(600,"c",0.15),(601,"wo",0.05),(700,"ov",0.05)]
        else:  # normal
            status_dist = [(100,"s",0.05),(200,"a",0.08),(300,"active",0.55),
                          (500,"r",0.05),(600,"c",0.15),(601,"wo",0.03),(700,"ov",0.09)]
        total_p = sum(p for _,_,p in status_dist)
        status_dist_n = [(v,n,p/total_p) for v,n,p in status_dist]
        status_val = random.choices([s[0] for s in status_dist_n],
                                    weights=[s[2] for s in status_dist_n])[0]
        submit = _random_date(date_min, today - timedelta(days=30))
        # 거절(500) 대출은 승인·실행일이 없어야 한다 (거절 = 승인 전 종료).
        # 랜덤 스트림 소비는 기존과 동일하게 유지(_random_date 호출 패턴 보존)해
        # 다른 대출들의 시드값이 바뀌지 않게 한다 — 값만 500에서 버림.
        approve_roll = _random_date(submit, today) if status_val >= 200 else None
        approve = approve_roll if status_val != 500 else None
        disburse_roll = _random_date(approve_roll, today) if (approve_roll and status_val >= 300) else None
        disburse = disburse_roll if status_val in (300, 600, 601, 700) else None
        principal = round(random.uniform(*prng), 2)
        rate = round(random.uniform(*rrng), 2)
        term = random.choice(terms)
        closed_on = None
        if status_val in (600, 601) and disburse:
            closed_on = _random_date(disburse, today)
        lid = smart_insert(conn, "m_loan", {
            "account_no": f"L{3000000+i:07d}",
            "client_id": cid, "product_id": lpid,
            "loan_officer_id": random.choice(staff_ids),
            "loan_status_id": status_val, "loan_type_enum": 1,
            "currency_code": currency_code, "currency_digits": 2,
            "principal_amount_proposed": principal,
            "principal_amount": principal,
            "approved_principal": principal,
            "net_disbursal_amount": principal,
            "nominal_interest_rate_per_period": rate/12,
            "annual_nominal_interest_rate": rate,
            "interest_period_frequency_enum": 3,
            "interest_method_enum": 1, "interest_calculated_in_period_enum": 1,
            "term_frequency": term, "term_period_frequency_enum": 3,
            "repay_every": 1, "repayment_period_frequency_enum": 2,
            "number_of_repayments": term,
            "amortization_method_enum": 1,
            "submittedon_date": str(submit),
            "approvedon_date": str(approve) if approve else None,
            "disbursedon_date": str(disburse) if disburse else None,
            "closedon_date": str(closed_on) if closed_on else None,
            "loan_transaction_strategy_code": "mifos-standard-strategy",
            "days_in_month_enum": 30, "days_in_year_enum": 365,
        })
        if disburse and status_val in (300, 600, 601, 700):
            loans_disbursed.append((lid, disburse, principal, term))

    # ─── (9) Loan Transaction ───
    print(f"      Loan tx ({config['loan_tx']})...", flush=True)
    for i in range(config["loan_tx"]):
        if not loans_disbursed: break
        lid, disburse, principal, term = random.choice(loans_disbursed)
        tx_type = random.choices([1,2,3,4,6,8], weights=[0.05,0.60,0.05,0.05,0.20,0.05])[0]
        tx_date = _random_date(disburse, today)
        amount = round(principal / term * random.uniform(0.9, 1.1), 2)
        smart_insert(conn, "m_loan_transaction", {
            "loan_id": lid, "transaction_type_enum": tx_type,
            "transaction_date": str(tx_date), "amount": amount,
            "principal_portion_derived": amount * 0.85,
            "interest_portion_derived": amount * 0.15,
            "fee_charges_portion_derived": 0, "penalty_charges_portion_derived": 0,
            "is_reversed": 0, "submitted_on_date": str(tx_date),
        })

    # ─── (10) Savings Transaction ───
    print(f"      Savings tx ({config['sv_tx']})...", flush=True)
    for i in range(config["sv_tx"]):
        if not savings_active: break
        sid, act = random.choice(savings_active)
        tx_type = random.choices([1,2,3,4], weights=[0.35,0.30,0.30,0.05])[0]
        tx_date = _random_date(act, today) if isinstance(act, date) else _random_date(date_min, today)
        amount = round(random.lognormvariate(11.5, 1.0), 2)
        smart_insert(conn, "m_savings_account_transaction", {
            "savings_account_id": sid, "transaction_type_enum": tx_type,
            "transaction_date": str(tx_date), "amount": amount,
            "is_reversed": 0, "running_balance_derived": 0,
            "cumulative_balance_derived": 0,
            "balance_end_date_derived": str(tx_date),
            "balance_number_of_days_derived": 0,
            "overdraft_amount_derived": 0,
            "is_manual": 1, "submitted_on_date": str(tx_date),
            "is_reversal": 0, "is_lien_transaction": 0,
        })

    conn.commit()


def _random_date(start, end):
    delta = (end - start).days
    if delta <= 0: return start
    return start + timedelta(days=random.randint(0, delta))


def seed_child_tables(conn: sqlite3.Connection, seed: int = 42):
    """3 도메인의 세부 서브 테이블에 stub 시드 — 결정 archetype 컬럼이 값을 갖도록.

    각 테이블별 자연 분포로:
    - m_client_identifier: client당 1개 신분증
    - m_loan_charge: 활성/종료 loan의 30%에 1~2개 수수료
    - m_savings_account_charge: 활성 savings의 20%에 1개
    - m_loan_recalculation_details: 활성/종료 loan의 40%에 재계산 설정
    - m_deposit_account_term_and_preclosure: FXD/RCR savings의 대다수
    - m_loan_term_variations: 활성 loan의 10%
    - m_loan_reschedule_request: 활성 loan의 5%
    - glim_accounts / gsim_accounts: 소수 그룹 대출·예금
    - m_loan_transaction_relation: 일부 tx 쌍
    - m_deposit_account_on_hold_transaction: 소수 savings
    - m_loan_amortization_allocation_mapping: 일부 loan
    """
    random.seed(seed + 1)  # child 시드는 다른 seed offset
    cur = conn.cursor()

    # 활성/종료 loan 목록
    active_loan_ids = [r[0] for r in cur.execute(
        "SELECT id FROM m_loan WHERE loan_status_id IN (300, 600, 601, 700)"
    )]
    # 활성 savings 목록 + product 정보
    savings_rows = list(cur.execute(
        "SELECT s.id, s.status_enum, s.product_id, p.deposit_type_enum "
        "FROM m_savings_account s JOIN m_savings_product p ON s.product_id=p.id "
        "WHERE s.status_enum IN (300, 600, 700, 800)"
    ))
    # 모든 client
    client_ids = [r[0] for r in cur.execute("SELECT id FROM m_client")]

    # ─── (1) m_client_identifier: client당 1개 신분증 ───
    print(f"      client_identifier ({len(client_ids)})...", flush=True)
    for cid in client_ids:
        smart_insert(conn, "m_client_identifier", {
            "client_id": cid,
            "document_type_id": random.choice([1, 2, 3]),  # 1=주민등록증, 2=여권, 3=운전면허
            "document_key": f"ID{random.randint(1000000, 9999999)}",
            "status": 300,  # ACTIVE
            "active": 1,
        })

    # ─── (2) m_loan_charge: 활성/종료 loan의 30% ───
    charged_loans = random.sample(active_loan_ids, k=int(len(active_loan_ids) * 0.3))
    print(f"      loan_charge ({len(charged_loans)} loans)...", flush=True)
    # charge_time_enum: 1=DISBURSEMENT, 2=SPECIFIED_DUE_DATE, 3=INSTALLMENT_FEE, 4=OVERDUE_INSTALLMENT, 7=OVERDUE_MATURITY, 9=TRANCHE_DISBURSEMENT
    # charge_calculation_enum: 1=FLAT_AMOUNT, 2=PERCENT_OF_AMOUNT, 3=PERCENT_OF_AMOUNT_AND_INTEREST, 4=PERCENT_OF_INTEREST
    # charge_payment_mode_enum: 0=REGULAR, 1=ACCOUNT_TRANSFER
    for lid in charged_loans:
        for _ in range(random.randint(1, 2)):
            amount = round(random.uniform(1000, 50000), 2)
            smart_insert(conn, "m_loan_charge", {
                "loan_id": lid, "charge_id": 1,
                "is_penalty": random.choices([0, 1], weights=[0.7, 0.3])[0],
                "charge_time_enum": random.choices([1, 2, 3, 4, 7, 9], weights=[0.25, 0.2, 0.2, 0.15, 0.1, 0.1])[0],
                "charge_calculation_enum": random.choices([1, 2, 3, 4], weights=[0.5, 0.3, 0.1, 0.1])[0],
                "charge_payment_mode_enum": random.choices([0, 1], weights=[0.8, 0.2])[0],
                "amount": amount,
                "amount_outstanding_derived": amount * random.uniform(0, 1),
                "is_active": 1,
            })

    # ─── (3) m_savings_account_charge: 활성 savings의 20% ───
    savings_ids_active = [s[0] for s in savings_rows]
    charged_savings = random.sample(savings_ids_active, k=int(len(savings_ids_active) * 0.2))
    print(f"      savings_account_charge ({len(charged_savings)})...", flush=True)
    for sid in charged_savings:
        amount = round(random.uniform(500, 5000), 2)
        smart_insert(conn, "m_savings_account_charge", {
            "savings_account_id": sid, "charge_id": 1,
            "is_penalty": 0,
            "charge_time_enum": random.choices([1, 5, 6, 12, 13], weights=[0.2, 0.3, 0.2, 0.15, 0.15])[0],
            "charge_calculation_enum": random.choices([1, 2, 5], weights=[0.6, 0.3, 0.1])[0],
            "amount": amount,
            "amount_outstanding_derived": amount * random.uniform(0, 1),
            "is_active": 1,
        })

    # ─── (4) m_loan_recalculation_details: 활성/종료 loan의 40% ───
    recalc_loans = random.sample(active_loan_ids, k=int(len(active_loan_ids) * 0.4))
    print(f"      loan_recalculation_details ({len(recalc_loans)})...", flush=True)
    # compound_type_enum: 0=NONE, 1=INTEREST, 2=FEE, 3=INTEREST_AND_FEE
    # reschedule_strategy_enum: 1=REDUCE_EMI_AMOUNT, 2=REDUCE_NUMBER_OF_INSTALLMENTS, 3=RESCHEDULE_NEXT_REPAYMENTS, 4=ADJUST_LAST_UNPAID_PERIOD
    # rest_frequency_type_enum: 1=DAILY, 2=WEEKLY, 4=MONTHLY
    # compounding_frequency_type_enum: 1,2,3,4
    for lid in recalc_loans:
        smart_insert(conn, "m_loan_recalculation_details", {
            "loan_id": lid,
            "compound_type_enum": random.choices([0, 1, 2, 3], weights=[0.3, 0.5, 0.1, 0.1])[0],
            "reschedule_strategy_enum": random.choices([1, 2, 3, 4], weights=[0.4, 0.3, 0.2, 0.1])[0],
            "rest_frequency_type_enum": random.choice([1, 2, 4]),
            "rest_frequency_interval": random.choice([1, 7, 30]),
            "compounding_frequency_type_enum": random.choice([1, 2, 3, 4]) if random.random() < 0.6 else None,
            "compounding_frequency_interval": random.choice([1, 7, 30]) if random.random() < 0.6 else None,
            "compounding_frequency_nth_day_enum": random.choice([1, 2, 3, 4]) if random.random() < 0.3 else None,
            "compounding_frequency_weekday_enum": random.choice([1, 2, 3, 4, 5, 6, 7]) if random.random() < 0.3 else None,
            "is_compounding_to_be_posted_as_transaction": 0,
            "allow_compounding_on_eod": 0,
            "disallow_interest_calc_on_past_due": random.choices([0, 1], weights=[0.7, 0.3])[0],
        })

    # ─── (5) m_deposit_account_term_and_preclosure: FXD/RCR savings 대다수 ───
    # deposit_type_enum: 200=FIXED_DEPOSIT, 300=RECURRING_DEPOSIT
    term_savings = [s[0] for s in savings_rows if s[3] in (200, 300)]
    print(f"      deposit_term_and_preclosure ({len(term_savings)})...", flush=True)
    for sid in term_savings:
        deposit_amount = round(random.lognormvariate(15, 0.5), 2)
        maturity_period = random.choice([6, 12, 24, 36])
        smart_insert(conn, "m_deposit_account_term_and_preclosure", {
            "savings_account_id": sid,
            "min_deposit_term": 6, "max_deposit_term": 60,
            "deposit_period": maturity_period,
            "deposit_period_frequency_enum": random.choices([1, 2, 3], weights=[0.05, 0.15, 0.8])[0],  # 3=MONTHS
            "deposit_amount": deposit_amount,
            "maturity_amount": deposit_amount * random.uniform(1.02, 1.15),
            "on_account_closure_enum": random.choices([100, 200, 300], weights=[0.5, 0.3, 0.2])[0],  # 100=WITHDRAW, 200=REINVEST, 300=TRANSFER
            "pre_closure_penal_applicable": 1,
            "pre_closure_penal_interest": round(random.uniform(0.5, 2.0), 2),
            "pre_closure_penal_interest_on_enum": 1,
        })

    # ─── (6) m_loan_term_variations: 활성 loan의 10% ───
    varied_loans = random.sample(active_loan_ids, k=int(len(active_loan_ids) * 0.1))
    print(f"      loan_term_variations ({len(varied_loans)})...", flush=True)
    # term_type: 1=EMI_AMOUNT, 2=NUMBER_OF_INSTALLMENTS, 3=INTEREST_RATE, 4=DELETE_INSTALLMENT, 5=DUE_DATE, 6=INSERT_INSTALLMENT, 7=PRINCIPAL_AMOUNT, 8=GRACE_ON_PRINCIPAL, 9=GRACE_ON_INTEREST
    # applied_on_loan_status: 100,200,300 (submit/approve/active 상태에서 변경)
    for lid in varied_loans:
        smart_insert(conn, "m_loan_term_variations", {
            "loan_id": lid,
            "term_type": random.choices([1, 2, 3, 5, 7], weights=[0.3, 0.2, 0.2, 0.2, 0.1])[0],
            "applicable_date": str(_random_date(date.today() - timedelta(days=365), date.today())),
            "decimal_value": round(random.uniform(1000, 100000), 2),
            "is_specific_to_installment": 0,
            "applied_on_loan_status": random.choices([100, 200, 300], weights=[0.1, 0.2, 0.7])[0],
            "is_active": 1,
        })

    # ─── (7) m_loan_reschedule_request: 활성 loan의 5% ───
    resch_loans = random.sample(active_loan_ids, k=int(len(active_loan_ids) * 0.05))
    print(f"      loan_reschedule_request ({len(resch_loans)})...", flush=True)
    # status_enum: 100=SUBMITTED, 200=APPROVED, 300=REJECTED
    for lid in resch_loans:
        smart_insert(conn, "m_loan_reschedule_request", {
            "loan_id": lid,
            "status_enum": random.choices([100, 200, 300], weights=[0.3, 0.5, 0.2])[0],
            "reschedule_from_installment": random.randint(1, 10),
            "reschedule_from_date": str(_random_date(date.today() - timedelta(days=180), date.today())),
            "reschedule_reason_cv_id": None,  # code_value가 없어서 null
            "submitted_on_date": str(_random_date(date.today() - timedelta(days=90), date.today())),
            "submitted_by_user_id": 1,
        })

    # ─── (8) glim_accounts / gsim_accounts: 소수 그룹 대출·예금 ───
    print(f"      glim/gsim_accounts (5+5)...", flush=True)
    # glim: 그룹 대출 개별 모니터링
    for i in range(5):
        smart_insert(conn, "glim_accounts", {
            "group_id": 0,
            "account_number": f"GLIM{i:05d}",
            "principal_amount": round(random.lognormvariate(14, 0.5), 2),
            "child_accounts_count": random.randint(2, 8),
            "accepting_child": random.choices([0, 1], weights=[0.6, 0.4])[0],
            "loan_status_id": random.choices([100, 200, 300, 600, 700], weights=[0.1, 0.1, 0.5, 0.2, 0.1])[0],
        })
    for i in range(5):
        smart_insert(conn, "gsim_accounts", {
            "group_id": 0,
            "account_number": f"GSIM{i:05d}",
            "parent_deposit": round(random.lognormvariate(14, 0.5), 2),
            "child_accounts_count": random.randint(2, 8),
            "accepting_child": random.choices([0, 1], weights=[0.6, 0.4])[0],
            "savings_status_id": random.choices([300, 600, 700, 800], weights=[0.6, 0.15, 0.1, 0.15])[0],
        })

    # ─── (9) m_loan_transaction_relation: 소수 tx 관계 ───
    tx_ids = [r[0] for r in cur.execute("SELECT id FROM m_loan_transaction LIMIT 3000")]
    if len(tx_ids) >= 100:
        n_rel = min(300, len(tx_ids) // 10)
        print(f"      loan_transaction_relation ({n_rel})...", flush=True)
        # relation_type_enum: 1=RELATED, 2=REPLAYED, 3=CHARGEBACK, 4=ADJUSTMENT
        for _ in range(n_rel):
            f, t = random.sample(tx_ids, 2)
            smart_insert(conn, "m_loan_transaction_relation", {
                "from_loan_transaction_id": f,
                "to_loan_transaction_id": t,
                "relation_type_enum": random.choices([1, 2, 3, 4], weights=[0.3, 0.4, 0.2, 0.1])[0],
                "version": 1,
            })

    # ─── (10) m_deposit_account_on_hold_transaction: 소수 savings 동결 ───
    if savings_ids_active:
        held_savings = random.sample(savings_ids_active, k=min(50, len(savings_ids_active) // 20))
        print(f"      deposit_on_hold_transaction ({len(held_savings)})...", flush=True)
        for sid in held_savings:
            smart_insert(conn, "m_deposit_account_on_hold_transaction", {
                "savings_account_id": sid,
                "amount": round(random.uniform(10000, 100000), 2),
                "transaction_type_enum": random.choices([1, 2], weights=[0.7, 0.3])[0],  # 1=HOLD, 2=RELEASE
                "transaction_date": str(_random_date(date.today() - timedelta(days=90), date.today())),
                "is_reversed": 0,
                "created_date": str(date.today()),
            })

    # ─── (11) m_loan_amortization_allocation_mapping: 일부 loan tx 매핑 ───
    if tx_ids and len(tx_ids) >= 20:
        n_map = min(200, len(tx_ids) // 20)
        print(f"      loan_amortization_allocation_mapping ({n_map})...", flush=True)
        # amortization_type: PRINCIPAL / INTEREST / FEE (TEXT!)
        for _ in range(n_map):
            base_tx, amort_tx = random.sample(tx_ids, 2)
            loan_id = cur.execute("SELECT loan_id FROM m_loan_transaction WHERE id=?", (base_tx,)).fetchone()
            if not loan_id: continue
            smart_insert(conn, "m_loan_amortization_allocation_mapping", {
                "loan_id": loan_id[0],
                "base_loan_transaction_id": base_tx,
                "amortization_loan_transaction_id": amort_tx,
                "date": str(_random_date(date.today() - timedelta(days=180), date.today())),
                "amortization_type": random.choices(["PRINCIPAL", "INTEREST", "FEE"], weights=[0.6, 0.3, 0.1])[0],
                "amount": round(random.uniform(1000, 50000), 2),
            })

    # ─── (12) m_loan_reage_parameter: 소수 loan_tx의 재적용 파라미터 ───
    if tx_ids and len(tx_ids) >= 50:
        n_reage = min(80, len(tx_ids) // 50)
        print(f"      loan_reage_parameter ({n_reage})...", flush=True)
        # frequency: "MONTHS" / "WEEKS" / "DAYS"
        for _ in range(n_reage):
            tx_id = random.choice(tx_ids)
            smart_insert(conn, "m_loan_reage_parameter", {
                "frequency": random.choices(["MONTHS", "WEEKS", "DAYS"], weights=[0.7, 0.2, 0.1])[0],
                "number_of_installments": random.randint(3, 12),
                "start_date": str(_random_date(date.today() - timedelta(days=180), date.today())),
                "created_by": 1, "last_modified_by": 1,
                "created_on_utc": str(datetime.now()),
                "last_modified_on_utc": str(datetime.now()),
                "loan_transaction_id": tx_id,
                "frequency_number": random.choice([1, 2, 3]),
            })

    # ─── (13) audit 필드 백필 — Fineract는 SecurityContext로 자동 채우지만
    # 우리 시드는 명시적으로 채워야. 이미 데이터 있는 테이블의 audit 4 컬럼 후처리 UPDATE.
    print(f"      audit backfill...", flush=True)
    now = str(datetime.now())
    audit_tables = ["m_client", "m_client_identifier", "m_loan", "m_loan_charge",
                    "m_loan_transaction", "m_loan_reschedule_request",
                    "m_savings_account", "m_savings_account_charge",
                    "m_deposit_account_on_hold_transaction",
                    "m_loan_amortization_allocation_mapping"]
    for tbl in audit_tables:
        for col, val in [("created_by", 1), ("last_modified_by", 1),
                          ("created_on_utc", now), ("last_modified_on_utc", now)]:
            try:
                cols = [r[1] for r in cur.execute(f'PRAGMA table_info("{tbl}")')]
                if col in cols:
                    cur.execute(f'UPDATE "{tbl}" SET "{col}" = ? WHERE "{col}" IS NULL', (val,))
            except Exception:
                pass

    # ─── (14) m_client 미시드 컬럼 확장 ───
    # savings_product / savings 목록을 sqlite에서 재조회 (다양성 함수와 별개 스코프)
    _sp_ids = [r[0] for r in cur.execute("SELECT id FROM m_savings_product")]

    # cv_id 계열은 새 CodeValue 시드 필요.
    # 주의: Fineract 초기 데이터가 code_id 15, 20~22 등을 이미 다른 이름으로 점유하고
    # 있으므로, 우리는 반드시 m_code에 새 항목을 INSERT해서 새 code_id를 받아야 한다.
    print(f"      m_client 미시드 컬럼 확장...", flush=True)
    def _ensure_code(name: str) -> int:
        """m_code에 name 있으면 id 반환, 없으면 INSERT 후 id 반환."""
        r = cur.execute("SELECT id FROM m_code WHERE code_name = ?", (name,)).fetchone()
        if r: return r[0]
        return smart_insert(conn, "m_code", {"code_name": name, "is_system_defined": 0})

    closure_code_id = _ensure_code("ClientClosureReason")
    reject_code_id  = _ensure_code("ClientRejectReason")
    withdraw_code_id = _ensure_code("ClientWithdrawReason")
    client_type_code_id = _ensure_code("ClientTypeCategory")
    loan_purpose_code_id = _ensure_code("LoanPurpose")
    charge_off_code_id = _ensure_code("LoanChargeOffReason")
    writeoff_code_id = _ensure_code("LoanWriteOffReason")
    reschedule_code_id = _ensure_code("LoanRescheduleReason")
    tx_class_code_id = _ensure_code("LoanTransactionClassification")

    closure_reasons = {}
    for n in ("Deceased", "Migration", "Other"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": closure_code_id, "code_value": n, "code_description": n,
            "order_position": len(closure_reasons)+1, "is_active": 1,
        })
        closure_reasons[n] = rid
    reject_reasons = {}
    for n in ("KYC failed", "Duplicate applicant", "Blacklist"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": reject_code_id, "code_value": n, "code_description": n,
            "order_position": len(reject_reasons)+1, "is_active": 1,
        })
        reject_reasons[n] = rid
    withdraw_reasons = {}
    for n in ("Applicant request", "Documentation lost"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": withdraw_code_id, "code_value": n, "code_description": n,
            "order_position": len(withdraw_reasons)+1, "is_active": 1,
        })
        withdraw_reasons[n] = rid
    client_types = {}
    for n in ("Regular", "VIP", "Corporate"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": client_type_code_id, "code_value": n, "code_description": n,
            "order_position": len(client_types)+1, "is_active": 1,
        })
        client_types[n] = rid

    # m_client의 각 상태별 컬럼 후처리 (활성 없이도 값 있어야 profile 잡힘)
    # status 300 (ACTIVE): activatedon_userid, sub_status, legal_form_enum, client_type_cv_id, fullname
    # status 500 (REJECTED): reject_reason_cv_id
    # status 600 (CLOSED): closedon_date, closedon_userid, closure_reason_cv_id
    # status 800 (WITHDRAWN): withdraw_reason_cv_id
    cur.execute("SELECT id, status_enum FROM m_client")
    for cid, status in cur.fetchall():
        updates = {}
        # 모든 client (sub_status는 ClientSubStatusEnum 정의 부족으로 0=NONE만 유지)
        updates["sub_status"] = 0
        updates["legal_form_enum"] = random.choices([1, 2], weights=[0.85, 0.15])[0]  # 1=PERSON, 2=ENTITY
        updates["client_type_cv_id"] = random.choices(list(client_types.values()), weights=[0.7, 0.2, 0.1])[0]
        if updates["legal_form_enum"] == 2:
            updates["fullname"] = f"주식회사 {['한강','대한','동방','서울','새마을'][random.randint(0,4)]}"
        # image_id: 30%만
        if random.random() < 0.3:
            updates["image_id"] = random.randint(1, 999)
        if status == 300:
            updates["activatedon_userid"] = random.randint(1, 3)
        elif status == 500:
            updates["reject_reason_cv_id"] = random.choice(list(reject_reasons.values()))
        elif status == 600:
            updates["closedon_date"] = str(_random_date(date.today() - timedelta(days=365), date.today()))
            updates["closedon_userid"] = random.randint(1, 3)
            updates["closure_reason_cv_id"] = random.choice(list(closure_reasons.values()))
        elif status == 800:
            updates["withdraw_reason_cv_id"] = random.choice(list(withdraw_reasons.values()))
        # default_savings_* (30%의 client에 배정, 실제 savings_account 참조)
        if random.random() < 0.3 and savings_ids_active:
            updates["default_savings_account"] = random.choice(savings_ids_active)
            updates["default_savings_product"] = random.choice(_sp_ids)
        # UPDATE 실행
        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_client SET "{col}" = ? WHERE id = ?', (val, cid))
            except Exception:
                pass

    # ─── (15) m_loan 미시드 컬럼 확장 ───
    print(f"      m_loan 미시드 컬럼 확장...", flush=True)
    loan_purposes = {}
    for n in ("Business expansion", "Home renovation", "Education", "Medical", "Debt consolidation"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": loan_purpose_code_id, "code_value": n, "code_description": n,
            "order_position": len(loan_purposes)+1, "is_active": 1,
        })
        loan_purposes[n] = rid
    charge_off_reasons = {}
    for n in ("Bankruptcy", "Default > 180 days", "Fraud"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": charge_off_code_id, "code_value": n, "code_description": n,
            "order_position": len(charge_off_reasons)+1, "is_active": 1,
        })
        charge_off_reasons[n] = rid
    writeoff_reasons = {}
    for n in ("Uncollectible", "Legal writeoff"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": writeoff_code_id, "code_value": n, "code_description": n,
            "order_position": len(writeoff_reasons)+1, "is_active": 1,
        })
        writeoff_reasons[n] = rid

    # m_loan 상태별 후처리
    cur.execute("SELECT id, loan_status_id, disbursedon_date FROM m_loan")
    for lid, status, disburse in cur.fetchall():
        updates = {}
        # 모든 loan: loanpurpose_cv_id (60%에), repayment_start_date_type_enum, loan_sub_status_id
        if random.random() < 0.6:
            updates["loanpurpose_cv_id"] = random.choice(list(loan_purposes.values()))
        updates["repayment_start_date_type_enum"] = random.choices([1, 2], weights=[0.75, 0.25])[0]
        updates["loan_sub_status_id"] = random.choices([0, 100, 200], weights=[0.85, 0.10, 0.05])[0]
        # 승인·활성 loan: approvedon_userid
        if status >= 200:
            updates["approvedon_userid"] = random.randint(1, 3)
        # 활성 대출: expected_disbursedon_date, expected_firstrepaymenton_date
        if status == 300 and disburse:
            try:
                d = date.fromisoformat(disburse)
                updates["expected_disbursedon_date"] = disburse
                updates["expected_firstrepaymenton_date"] = str(d + timedelta(days=30))
                # accrued_till: 활성 loan의 절반
                if random.random() < 0.5:
                    updates["accrued_till"] = str(date.today())
            except Exception:
                pass
        # WRITE_OFF (601): writeoff_reason_cv_id
        if status == 601:
            updates["writeoff_reason_cv_id"] = random.choice(list(writeoff_reasons.values()))
        # OVERPAID/CLOSED loan 중 일부: charge_off (5%)
        if status in (600, 700) and random.random() < 0.05:
            updates["charge_off_reason_cv_id"] = random.choice(list(charge_off_reasons.values()))
            updates["charged_off_by_userid"] = random.randint(1, 3)
            updates["charged_off_on_date"] = str(_random_date(date.today() - timedelta(days=180), date.today()))
        # 종료 loan의 closedon_userid
        if status in (600, 601):
            updates["closedon_userid"] = random.randint(1, 3)
        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_loan SET "{col}" = ? WHERE id = ?', (val, lid))
            except Exception:
                pass

    # ─── (16) m_savings_account 미시드 컬럼 확장 ───
    print(f"      m_savings_account 미시드 컬럼 확장...", flush=True)
    _sv_rows = list(cur.execute("SELECT id, status_enum FROM m_savings_account"))
    for sid, status in _sv_rows:
        updates = {}
        updates["lockin_period_frequency_enum"] = random.choices([1, 2, 3], weights=[0.2, 0.6, 0.2])[0]
        # 활성 계좌: lockedin_until_date_derived, on_hold_funds_derived
        if status in (300, 700, 800) and random.random() < 0.4:
            updates["lockedin_until_date_derived"] = str(date.today() + timedelta(days=random.randint(30, 730)))
        if status == 300 and random.random() < 0.15:
            updates["on_hold_funds_derived"] = round(random.uniform(1000, 50000), 2)
        # accrued_till_date: 활성 계좌의 절반
        if status in (300, 700) and random.random() < 0.5:
            updates["accrued_till_date"] = str(date.today())
        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_savings_account SET "{col}" = ? WHERE id = ?', (val, sid))
            except Exception:
                pass

    # ─── (17) m_savings_product의 lockin_period_frequency_enum ───
    cur.execute('UPDATE m_savings_product SET lockin_period_frequency_enum = ? WHERE lockin_period_frequency_enum IS NULL', (2,))

    # ─── (18) m_deposit_account_term_and_preclosure.expected_firstdepositon_date ───
    cur.execute('UPDATE m_deposit_account_term_and_preclosure SET expected_firstdepositon_date = date(?, "+" || (abs(random()) % 30) || " days")', (str(date.today()),))

    # ─── (19) m_loan_reschedule_request.reschedule_reason_cv_id ───
    resch_reasons = {}
    for n in ("Customer request", "Financial hardship"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": reschedule_code_id, "code_value": n, "code_description": n,
            "order_position": len(resch_reasons)+1, "is_active": 1,
        })
        resch_reasons[n] = rid
    resch_reason_ids = list(resch_reasons.values())
    cur.execute("SELECT id FROM m_loan_reschedule_request")
    for (rid,) in cur.fetchall():
        cur.execute("UPDATE m_loan_reschedule_request SET reschedule_reason_cv_id = ? WHERE id = ?",
                    (random.choice(resch_reason_ids), rid))

    # ─── (20) m_loan_recalculation_details의 nth_day/weekday_enum 비율 증가 ───
    cur.execute("SELECT id FROM m_loan_recalculation_details")
    for (rid,) in cur.fetchall():
        if random.random() < 0.5:
            cur.execute("UPDATE m_loan_recalculation_details SET rest_frequency_nth_day_enum = ? WHERE id = ?",
                        (random.choice([1, 2, 3, 4]), rid))
        if random.random() < 0.5:
            cur.execute("UPDATE m_loan_recalculation_details SET rest_frequency_weekday_enum = ? WHERE id = ?",
                        (random.choice([1, 2, 3, 4, 5, 6, 7]), rid))

    # ─── (21) m_loan_transaction.classification_cv_id (있으면) ───
    tx_class = {}
    for n in ("Regular", "Adjustment", "Correction"):
        rid = smart_insert(conn, "m_code_value", {
            "code_id": tx_class_code_id, "code_value": n, "code_description": n,
            "order_position": len(tx_class)+1, "is_active": 1,
        })
        tx_class[n] = rid
    # classification_cv_id 컬럼이 실제 있는지 확인 후 update
    tx_cols = [r[1] for r in cur.execute("PRAGMA table_info(m_loan_transaction)")]
    if "classification_cv_id" in tx_cols:
        for tid in tx_ids[:5000]:
            cur.execute("UPDATE m_loan_transaction SET classification_cv_id = ? WHERE id = ?",
                        (random.choice(list(tx_class.values())), tid))

    conn.commit()

INDEXES = [
    # 상태·타입 필터에 자주 걸리는 것
    ("m_loan", ["loan_status_id"]),
    ("m_loan", ["client_id"]),
    ("m_loan", ["disbursedon_date"]),
    ("m_loan_transaction", ["loan_id"]),
    ("m_loan_transaction", ["transaction_type_enum"]),
    ("m_loan_transaction", ["transaction_date"]),
    ("m_savings_account", ["status_enum"]),
    ("m_savings_account", ["client_id"]),
    ("m_savings_account_transaction", ["savings_account_id"]),
    ("m_savings_account_transaction", ["transaction_type_enum"]),
    ("m_client", ["status_enum"]),
    ("m_client", ["office_id"]),
]


def create_indexes(conn):
    cur = conn.cursor()
    # 실제 존재하는 테이블·컬럼만 인덱스 생성 (스키마 슬라이스에 따라 다를 수 있음)
    for tbl, cols in INDEXES:
        try:
            cur.execute(f"SELECT 1 FROM {tbl} LIMIT 1")
        except sqlite3.OperationalError:
            continue
        name = f"idx_{tbl}_{'_'.join(cols)}"
        try:
            cur.execute(f'CREATE INDEX IF NOT EXISTS "{name}" ON "{tbl}" ({", ".join(cols)})')
        except sqlite3.OperationalError as e:
            print(f"  [skip] {name}: {e}")
    conn.commit()


# ─── 메인 ───────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--changelog", default="corpus/fineract-provider/src/main/resources/db/changelog")
    ap.add_argument("--output", default="data/fineract_3domain.sqlite")
    ap.add_argument("--config", default="pilot", choices=list(CONFIGS))
    ap.add_argument("--seed", type=int, default=42)
    args = ap.parse_args()

    changelog = Path(args.changelog)
    if not changelog.is_dir():
        sys.exit(f"[!] changelog not found: {changelog}")

    print(f"config: {args.config}  →  {CONFIGS[args.config]}")

    # 1. 스키마 파싱
    print("[1/5] Liquibase XML 파싱...")
    tables = parse_create_tables(changelog, DOMAIN_TABLES)
    print(f"      추출된 테이블: {len(tables)} / 요청 {len(DOMAIN_TABLES)}")
    missing = DOMAIN_TABLES - set(tables.keys())
    if missing:
        print(f"      누락 (Liquibase에 정의 없음): {sorted(missing)[:10]}...")

    # 2. sqlite 생성
    print("[2/5] SQLite 생성...")
    out = Path(args.output)
    if out.exists(): out.unlink()
    out.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(out)
    conn.execute("PRAGMA page_size = 4096;")
    conn.execute("PRAGMA foreign_keys = OFF;")  # seed 순서 유연성
    conn.execute("PRAGMA journal_mode = DELETE;")

    sqls = build_create_sql(tables)
    for sql in sqls:
        try:
            conn.execute(sql)
        except sqlite3.OperationalError as e:
            print(f"  [!] CREATE 실패: {e}\n     SQL: {sql[:200]}")
    conn.commit()

    # 3. Reference data 로드
    print("[3/5] Reference data 로드...")
    inserts = load_reference_inserts(changelog, DOMAIN_TABLES)
    loaded = 0; skipped = 0
    for tbl, row in inserts:
        if tbl not in tables: continue
        # 스키마에 존재하는 컬럼만
        valid_cols = {c["name"] for c in tables[tbl]["columns"]}
        filtered = {k:v for k,v in row.items() if k in valid_cols}
        if not filtered: continue
        cols = ", ".join(f'"{k}"' for k in filtered.keys())
        placeholders = ", ".join("?" for _ in filtered)
        try:
            conn.execute(f'INSERT OR IGNORE INTO "{tbl}" ({cols}) VALUES ({placeholders})', list(filtered.values()))
            loaded += 1
        except (sqlite3.OperationalError, sqlite3.IntegrityError):
            skipped += 1
    conn.commit()
    print(f"      로드된 행: {loaded}  스킵: {skipped}")

    # 4. 운영 데이터 시드
    print("[4/5] 운영 데이터 시드...")
    try:
        seed_operational_data(conn, CONFIGS[args.config], seed=args.seed)
        print("      세부 서브 테이블 stub 시드...")
        seed_child_tables(conn, seed=args.seed)
        print("      자연 발생 필드 확장 시드...")
        from scripts.seed_enrichment import seed_enrichment, seed_enrichment_v2, seed_enrichment_v3
        seed_enrichment(conn, seed=args.seed)
        seed_enrichment_v2(conn, seed=args.seed)
        seed_enrichment_v3(conn, seed=args.seed)
    except Exception as e:
        import traceback
        print(f"  [!] 시드 오류: {e}")
        traceback.print_exc()
        conn.close()
        sys.exit(1)

    # 5. 인덱스
    print("[5/5] 인덱스 생성...")
    create_indexes(conn)

    # sanity check
    print("\n=== Sanity check ===")
    cur = conn.cursor()
    for tbl in ("m_client","m_loan","m_savings_account","m_loan_transaction","m_savings_account_transaction","r_enum_value"):
        try:
            cur.execute(f"SELECT COUNT(*) FROM {tbl}")
            n = cur.fetchone()[0]
            print(f"  {tbl:36s}  rows={n}")
        except sqlite3.OperationalError:
            print(f"  {tbl:36s}  (테이블 없음)")

    print("\n=== ★ 케이스 확인 (loan_status_id 분포) ===")
    for row in cur.execute("SELECT loan_status_id, COUNT(*) FROM m_loan GROUP BY loan_status_id ORDER BY loan_status_id"):
        print(f"  status_id={row[0]}  count={row[1]}")

    print("\n=== ★ savings status_enum 분포 ===")
    for row in cur.execute("SELECT status_enum, COUNT(*) FROM m_savings_account GROUP BY status_enum ORDER BY status_enum"):
        print(f"  status_enum={row[0]}  count={row[1]}")

    print("\n=== ★ client status_enum 분포 ===")
    for row in cur.execute("SELECT status_enum, COUNT(*) FROM m_client GROUP BY status_enum ORDER BY status_enum"):
        print(f"  status_enum={row[0]}  count={row[1]}")

    size = out.stat().st_size
    print(f"\n[ok] {out} 생성 완료 ({size/1024/1024:.1f} MB)")

    conn.close()


if __name__ == "__main__":
    main()
