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
CLIENT_STATUS_DIST = [
    (100, "pending",       0.10),  # PENDING
    (300, "active",        0.75),  # ACTIVE
    (500, "rejected",      0.03),  # ★ 500 not 700 for client — REJECTED
    (600, "closed",        0.07),
    (700, "rejected_v2",   0.02),  # ★ 700=REJECTED for Client (collision with Loan.OVERPAID)
    (800, "withdrawn",     0.03),  # ★ 800=WITHDRAWN for Client
]


def seed_operational_data(conn: sqlite3.Connection, config: dict, seed: int = 42):
    """운영 데이터 시드 — Faker + numpy로 clients·loans·savings·transactions 생성.
       smart_insert로 NOT NULL 컬럼은 자동 default 채움."""
    from faker import Faker
    import numpy as np
    random.seed(seed)
    np.random.seed(seed)
    fake = Faker("ko_KR")
    fake.seed_instance(seed)

    cur = conn.cursor()
    today = date.today()
    date_min = today - timedelta(days=3*365)

    # office_id 확보
    cur.execute("SELECT id FROM m_office ORDER BY id LIMIT 1")
    r = cur.fetchone()
    if not r:
        smart_insert(conn, "m_office", {"name":"Head Office","opening_date":str(date_min),"hierarchy":"."})
        cur.execute("SELECT id FROM m_office ORDER BY id LIMIT 1")
        r = cur.fetchone()
    office_id = r[0]

    # currency 확보
    cur.execute("SELECT code FROM m_currency LIMIT 1")
    r = cur.fetchone()
    currency_code = r[0] if r else "KRW"

    # savings product
    cur.execute("SELECT id FROM m_savings_product LIMIT 1")
    r = cur.fetchone()
    if not r:
        savings_product_id = smart_insert(conn, "m_savings_product", {
            "name":"파일럿 예금","short_name":"PILOT",
            "currency_code": currency_code, "currency_digits": 2,
            "nominal_annual_interest_rate": 3.5,
            "interest_compounding_period_enum": 4, "interest_posting_period_enum": 4,
            "interest_calculation_type_enum": 1,
            "interest_calculation_days_in_year_type_enum": 365,
            "accounting_type": 1, "deposit_type_enum": 100,
        })
    else:
        savings_product_id = r[0]

    # loan product
    cur.execute("SELECT id FROM m_product_loan LIMIT 1")
    r = cur.fetchone()
    if not r:
        loan_product_id = smart_insert(conn, "m_product_loan", {
            "name":"파일럿 대출","short_name":"PILOT-L",
            "currency_code": currency_code, "currency_digits": 2,
            "principal_amount": 1000000, "nominal_interest_rate_per_period": 1.0,
            "interest_period_frequency_enum": 3, "annual_nominal_interest_rate": 12.0,
            "interest_method_enum": 1, "interest_calculated_in_period_enum": 1,
            "repay_every": 1, "repayment_period_frequency_enum": 2,
            "number_of_repayments": 12, "amortization_method_enum": 1,
            "accounting_type": 1,
            "loan_transaction_strategy_code": "mifos-standard-strategy",
        })
    else:
        loan_product_id = r[0]

    # ─── Client ───
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
        cid = smart_insert(conn, "m_client", {
            "account_no": f"C{1000000+i:07d}",
            "office_id": office_id,
            "status_enum": status_val,
            "firstname": first, "lastname": last,
            "display_name": f"{last}{first}",
            "submittedon_date": str(submit),
            "activation_date": activation,
            "is_staff": 0,
        })
        client_ids.append(cid)

    active_clients = [c for c in client_ids
                      if conn.execute("SELECT status_enum FROM m_client WHERE id=?",(c,)).fetchone()[0]==300]
    print(f"      active clients: {len(active_clients)}", flush=True)

    # ─── Savings ───
    print(f"      Savings 계좌 생성 ({config['savings']})...", flush=True)
    savings_active = []
    for i in range(config["savings"]):
        if not active_clients: break
        cid = random.choice(active_clients)
        status_val = random.choices([s[0] for s in SAVINGS_STATUS_DIST],
                                    weights=[s[2] for s in SAVINGS_STATUS_DIST])[0]
        submit = _random_date(date_min, today)
        approve = _random_date(submit, today) if status_val >= 200 else None
        activation = _random_date(approve, today) if (approve and status_val >= 300) else None
        sid = smart_insert(conn, "m_savings_account", {
            "account_no": f"S{2000000+i:07d}",
            "client_id": cid, "product_id": savings_product_id,
            "status_enum": status_val, "sub_status_enum": 0,
            "account_type_enum": 1, "deposit_type_enum": 100,
            "currency_code": currency_code, "currency_digits": 2,
            "nominal_annual_interest_rate": 3.5,
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

    # ─── Loan ───
    print(f"      Loan 생성 ({config['loans']})...", flush=True)
    loans_disbursed = []
    for i in range(config["loans"]):
        if not active_clients: break
        cid = random.choice(active_clients)
        status_val = random.choices([s[0] for s in LOAN_STATUS_DIST],
                                    weights=[s[2] for s in LOAN_STATUS_DIST])[0]
        submit = _random_date(date_min, today - timedelta(days=30))
        approve = _random_date(submit, today) if status_val >= 200 else None
        disburse = _random_date(approve, today) if (approve and status_val >= 300) else None
        principal = round(random.lognormvariate(14.5, 0.7), 2)
        rate = round(random.uniform(6.0, 18.0), 2)
        terms = random.choice([6, 12, 24, 36, 48])
        closed_on = None
        if status_val in (600, 601) and disburse:
            closed_on = _random_date(disburse, today)
        lid = smart_insert(conn, "m_loan", {
            "account_no": f"L{3000000+i:07d}",
            "client_id": cid, "product_id": loan_product_id,
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
            "term_frequency": terms, "term_period_frequency_enum": 3,
            "repay_every": 1, "repayment_period_frequency_enum": 2,
            "number_of_repayments": terms,
            "amortization_method_enum": 1,
            "submittedon_date": str(submit),
            "approvedon_date": str(approve) if approve else None,
            "disbursedon_date": str(disburse) if disburse else None,
            "closedon_date": str(closed_on) if closed_on else None,
            "loan_transaction_strategy_code": "mifos-standard-strategy",
            "days_in_month_enum": 30, "days_in_year_enum": 365,
        })
        if disburse and status_val in (300, 600, 601, 700):
            loans_disbursed.append((lid, disburse, principal, terms))

    # ─── Loan Transaction ───
    print(f"      Loan tx ({config['loan_tx']})...", flush=True)
    for i in range(config["loan_tx"]):
        if not loans_disbursed: break
        lid, disburse, principal, terms = random.choice(loans_disbursed)
        tx_type = random.choices([1,2,3,4,6,8], weights=[0.05,0.60,0.05,0.05,0.20,0.05])[0]
        tx_date = _random_date(disburse, today)
        amount = round(principal / terms * random.uniform(0.9, 1.1), 2)
        smart_insert(conn, "m_loan_transaction", {
            "loan_id": lid, "transaction_type_enum": tx_type,
            "transaction_date": str(tx_date), "amount": amount,
            "principal_portion_derived": amount * 0.85,
            "interest_portion_derived": amount * 0.15,
            "fee_charges_portion_derived": 0, "penalty_charges_portion_derived": 0,
            "is_reversed": 0, "submitted_on_date": str(tx_date),
        })

    # ─── Savings Transaction ───
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


# ─── 인덱스 ─────────────────────────────────────────────────────────

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
