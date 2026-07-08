"""
seed_enrichment.py — build_sqlite.py의 기존 seed_operational_data / seed_child_tables가 남긴
209개 빈 컬럼 중 은행 실무 상식으로 자연 발생하는 필드만 선별 시드.

원칙:
  - 시드 대상 = 은행 실무에서 자연스럽게 발생하는 필드 (연락처, 상환 스케줄, 담당자 등)
  - 시드 안 함 = 파생 필드(_derived), 특수 상품 옵션(overdraft 등), 우리 시나리오에 없는 것(fund_id 등)
  - 자연 분포 반영: 연락처 95%, email 85%, external_id 80% 등

Fineract 원본 엔티티 정의를 참고해 컬럼 의미 확정. 소비자(Render/NL2SQL)를 위한 편의 시드 아님.
"""
import random
from datetime import date, timedelta


def _random_date(start, end):
    delta = (end - start).days
    if delta <= 0: return start
    return start + timedelta(days=random.randint(0, delta))


def seed_enrichment(conn, seed: int = 42):
    """실무 자연 발생 관점에서 확장 시드."""
    from faker import Faker
    random.seed(seed + 2)  # enrichment는 별도 offset
    fake = Faker("ko_KR")
    fake.seed_instance(seed + 2)

    cur = conn.cursor()
    today = date.today()

    print(f"      [enrichment] 자연 발생 필드 확장 시드...", flush=True)

    # ═══════════════════════════════════════════════════════════════
    # (A) m_client 연락처 · 외부 ID 확장
    # ═══════════════════════════════════════════════════════════════
    cur.execute("SELECT id, firstname, lastname FROM m_client")
    clients = cur.fetchall()
    ext_ids_used = set()
    updated_client = 0
    for cid, first, last in clients:
        updates = {}
        # mobile_no: 95% (한국 스마트폰 보급)
        if random.random() < 0.95:
            updates["mobile_no"] = f"010-{random.randint(1000,9999)}-{random.randint(1000,9999)}"
        # email_address: 85%
        if random.random() < 0.85:
            domain = random.choices(["naver.com", "gmail.com", "kakao.com", "daum.net", "hanmail.net"],
                                     weights=[0.35, 0.30, 0.15, 0.10, 0.10])[0]
            email = f"{last.lower() if last else 'user'}{random.randint(100, 9999)}@{domain}"
            updates["email_address"] = email
        # middlename: 한국은 middle name 개념 거의 없음. 5% (외국인·귀화)
        if random.random() < 0.05:
            updates["middlename"] = fake.first_name()
        # external_id: 외부 시스템 통합용 자연 발생 (예: CIF 번호). 80%
        if random.random() < 0.80:
            ext = f"CIF{random.randint(10000000, 99999999)}"
            while ext in ext_ids_used:
                ext = f"CIF{random.randint(10000000, 99999999)}"
            ext_ids_used.add(ext)
            updates["external_id"] = ext
        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_client SET "{col}" = ? WHERE id = ?', (val, cid))
                if updates: updated_client += 1
            except Exception:
                pass
    print(f"        m_client 연락처/외부ID: {updated_client}건 갱신", flush=True)

    # ═══════════════════════════════════════════════════════════════
    # (B) m_client 특수 상태 이력 (rejected/withdrawn/reactivated/reopened)
    # ═══════════════════════════════════════════════════════════════
    # status_enum: 100=SUB, 300=ACT, 500=REJ, 600=CLS, 700=REV, 800=WD
    for cid, status in list(cur.execute("SELECT id, status_enum FROM m_client")):
        updates = {}
        if status == 500:  # REJECTED
            rej_date = _random_date(today - timedelta(days=730), today - timedelta(days=30))
            updates["rejectedon_date"] = str(rej_date)
            updates["rejectedon_userid"] = random.randint(1, 3)
        elif status == 800:  # WITHDRAWN
            wd_date = _random_date(today - timedelta(days=730), today - timedelta(days=30))
            updates["withdrawn_on_date"] = str(wd_date)
            updates["withdraw_on_userid"] = random.randint(1, 3)
        elif status == 300:  # ACTIVE - 소수만 재활성화 이력
            if random.random() < 0.02:  # 2%
                react_date = _random_date(today - timedelta(days=365), today - timedelta(days=30))
                updates["reactivated_on_date"] = str(react_date)
                updates["reactivated_on_userid"] = random.randint(1, 3)
        elif status == 600:  # CLOSED - 소수는 다시 열렸다가 재종료
            if random.random() < 0.03:
                reop_date = _random_date(today - timedelta(days=365), today - timedelta(days=30))
                updates["reopened_on_date"] = str(reop_date)
                updates["reopened_by_userid"] = random.randint(1, 3)
        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_client SET "{col}" = ? WHERE id = ?', (val, cid))
            except Exception:
                pass

    # ═══════════════════════════════════════════════════════════════
    # (C) m_client_identifier.description
    # ═══════════════════════════════════════════════════════════════
    desc_pool = ["본인 확인용", "주 신분증", "발급 갱신 요망", "본점 발급", "지점 확인 완료", None]
    cur.execute("SELECT id FROM m_client_identifier")
    for (ident_id,) in cur.fetchall():
        if random.random() < 0.4:  # 40%만 description 있음 (실무상 대부분 공란)
            desc = random.choice(desc_pool)
            if desc:
                try:
                    cur.execute("UPDATE m_client_identifier SET description = ? WHERE id = ?", (desc, ident_id))
                except Exception:
                    pass

    # ═══════════════════════════════════════════════════════════════
    # (D) m_loan 확장 필드
    # ═══════════════════════════════════════════════════════════════
    # loan_status_id: 100=SUB, 200=APR, 300=ACT, 400=WD, 500=REJ, 600=CLS_OBL, 601=CLS_WO, 602=CLS_RES, 700=OVR
    cur.execute("""SELECT id, loan_status_id, submittedon_date, approvedon_date, disbursedon_date,
                          term_frequency, term_period_frequency_enum
                   FROM m_loan""")
    loans = cur.fetchall()
    ext_ids_loan = set()
    for lid, status, sub_date, apr_date, dis_date, term_freq, term_period_enum in loans:
        updates = {}
        # external_id 80%
        if random.random() < 0.80:
            ext = f"LN{random.randint(1000000, 9999999)}"
            while ext in ext_ids_loan:
                ext = f"LN{random.randint(1000000, 9999999)}"
            ext_ids_loan.add(ext)
            updates["external_id"] = ext

        # disbursed 이후 상태: disbursedon_userid, expected_maturedon_date, interest_calculated_from_date, last_closed_business_date
        if status in (300, 600, 601, 602, 700):
            updates["disbursedon_userid"] = random.randint(1, 3)
            # 기간 계산 (월 단위 가정: term_period_frequency_enum=2)
            if dis_date and term_freq:
                try:
                    dis = date.fromisoformat(dis_date) if isinstance(dis_date, str) else dis_date
                    months = term_freq if term_period_enum == 2 else max(1, term_freq // 4)
                    matured_expected = dis + timedelta(days=months * 30)
                    updates["expected_maturedon_date"] = str(matured_expected)
                    updates["interest_calculated_from_date"] = str(dis)
                    # last_closed_business_date: 최근 상환 완료일 (활성 대출은 최근일)
                    if status in (300, 700):
                        recent = today - timedelta(days=random.randint(1, 45))
                        updates["last_closed_business_date"] = str(recent)
                    # maturedon_date: 만기 도달한 대출만
                    if status == 600 and today >= matured_expected:
                        updates["maturedon_date"] = str(matured_expected + timedelta(days=random.randint(-15, 15)))
                except Exception:
                    pass

        # withdrawn: status=400 - 신청 후 철회
        if status == 400:
            if sub_date:
                try:
                    sd = date.fromisoformat(sub_date) if isinstance(sub_date, str) else sub_date
                    wd = _random_date(sd, sd + timedelta(days=30))
                    updates["withdrawnon_date"] = str(wd)
                    updates["withdrawnon_userid"] = random.randint(1, 3)
                except Exception:
                    pass

        # written off: status=601 - 상각
        if status == 601 and dis_date:
            try:
                dis = date.fromisoformat(dis_date) if isinstance(dis_date, str) else dis_date
                wo = _random_date(dis + timedelta(days=180), today)
                updates["writtenoffon_date"] = str(wo)
            except Exception:
                pass

        # rescheduled: status=602 - 재조정
        if status == 602:
            resch = _random_date(today - timedelta(days=365), today - timedelta(days=30))
            updates["rescheduledon_date"] = str(resch)
            updates["rescheduledon_userid"] = random.randint(1, 3)

        # overpaid: 소수 (2% of 활성)
        if status == 300 and random.random() < 0.02:
            op_date = today - timedelta(days=random.randint(1, 90))
            updates["overpaidon_date"] = str(op_date)

        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_loan SET "{col}" = ? WHERE id = ?', (val, lid))
            except Exception:
                pass

    # loan_counter, loan_product_counter (고객별 대출 번호)
    counter_by_client = {}
    counter_by_client_product = {}
    loan_rows = list(cur.execute("SELECT id, client_id, product_id FROM m_loan ORDER BY id"))
    for lid, client_id, product_id in loan_rows:
        if client_id is None: continue
        counter_by_client[client_id] = counter_by_client.get(client_id, 0) + 1
        pkey = (client_id, product_id)
        counter_by_client_product[pkey] = counter_by_client_product.get(pkey, 0) + 1
        try:
            cur.execute("UPDATE m_loan SET loan_counter=?, loan_product_counter=? WHERE id=?",
                        (counter_by_client[client_id], counter_by_client_product[pkey], lid))
        except Exception:
            pass

    # ═══════════════════════════════════════════════════════════════
    # (E) m_savings_account 확장 필드
    # ═══════════════════════════════════════════════════════════════
    cur.execute("""SELECT id, status_enum, submittedon_date, approvedon_date, activatedon_date
                   FROM m_savings_account""")
    for sid, status, sub_d, apr_d, act_d in cur.fetchall():
        updates = {}
        # submittedon_userid (모든 계좌는 등록됨)
        updates["submittedon_userid"] = random.randint(1, 3)
        # field_officer_id: 활성 계좌 90%
        if status in (300, 700, 800) and random.random() < 0.9:
            updates["field_officer_id"] = random.randint(1, 8)  # staff 8명
        # approvedon_userid: 승인된 계좌 (200 이상)
        if status in (200, 300, 500, 600, 700, 800):
            updates["approvedon_userid"] = random.randint(1, 3)
        # activatedon_userid: 활성화된 계좌 (300 이상)
        if status in (300, 600, 700, 800):
            updates["activatedon_userid"] = random.randint(1, 3)
        # closedon_date + closedon_userid: 종료 계좌 (600=CLOSED)
        if status == 600:
            cd = _random_date(today - timedelta(days=365), today - timedelta(days=1))
            updates["closedon_date"] = str(cd)
            updates["closedon_userid"] = random.randint(1, 3)
        # withdrawnon: status=500 (REJECTED로 잘못 매핑됨. 사실 rejected는 없음, savings에서 400은 없음)
        # savings에는 withdrawn 상태가 없어서 이건 시드 안 함

        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_savings_account SET "{col}" = ? WHERE id = ?', (val, sid))
            except Exception:
                pass

    # ═══════════════════════════════════════════════════════════════
    # (F) m_loan_charge 확장 필드 (기존 charge에 백필)
    # ═══════════════════════════════════════════════════════════════
    cur.execute("SELECT id, loan_id, charge_calculation_enum, amount FROM m_loan_charge")
    for ch_id, lid, calc_enum, amount in cur.fetchall():
        updates = {}
        # submitted_on_date: 대출 disburse 근처
        try:
            dr = cur.execute("SELECT disbursedon_date FROM m_loan WHERE id=?", (lid,)).fetchone()
            if dr and dr[0]:
                dis = date.fromisoformat(dr[0]) if isinstance(dr[0], str) else dr[0]
                submitted = _random_date(dis - timedelta(days=7), dis + timedelta(days=30))
                updates["submitted_on_date"] = str(submitted)
                # due_for_collection: 다음 상환일 근처
                due = submitted + timedelta(days=random.randint(15, 90))
                updates["due_for_collection_as_of_date"] = str(due)
        except Exception:
            pass
        # 계산 방식별 필드
        # 1=FLAT_AMOUNT: charge_amount_or_percentage=amount
        # 2=PERCENT_OF_AMOUNT, 3=..._AND_INTEREST, 4=PERCENT_OF_INTEREST
        if calc_enum == 1:
            updates["charge_amount_or_percentage"] = amount
        elif calc_enum in (2, 3, 4):
            pct = round(random.uniform(0.5, 5.0), 2)
            updates["charge_amount_or_percentage"] = pct
            updates["calculation_percentage"] = pct
            updates["calculation_on_amount"] = round(amount * 20, 2)  # 원금 근사
            # 20%만 cap 있음
            if random.random() < 0.2:
                updates["min_cap"] = 1000.0
                updates["max_cap"] = round(amount * 30, 2)

        for col, val in updates.items():
            try:
                cur.execute(f'UPDATE m_loan_charge SET "{col}" = ? WHERE id = ?', (val, ch_id))
            except Exception:
                pass

    # ═══════════════════════════════════════════════════════════════
    # (G) m_savings_account_transaction.ref_no
    # ═══════════════════════════════════════════════════════════════
    cur.execute("SELECT id FROM m_savings_account_transaction")
    for (tx_id,) in cur.fetchall():
        ref = f"TXR{random.randint(1000000000, 9999999999)}"
        try:
            cur.execute("UPDATE m_savings_account_transaction SET ref_no=? WHERE id=?", (ref, tx_id))
        except Exception:
            pass

    conn.commit()
    print(f"        m_savings_account · m_loan_charge · tx.ref_no 백필 완료", flush=True)

    # ═══════════════════════════════════════════════════════════════
    # (H) 새 테이블 시드
    # ═══════════════════════════════════════════════════════════════
    _seed_new_tables(conn, cur)

    conn.commit()


def _seed_new_tables(conn, cur):
    """빈 테이블 10개 시드."""
    today = date.today()

    # 활성/종료 loan (스케줄 있어야)
    scheduled_loans = list(cur.execute("""
        SELECT id, disbursedon_date, principal_amount, term_frequency, term_period_frequency_enum,
               annual_nominal_interest_rate, loan_status_id, number_of_repayments
        FROM m_loan
        WHERE loan_status_id IN (300, 600, 601, 602, 700)
          AND disbursedon_date IS NOT NULL
    """))

    # ─── 1. m_loan_repayment_schedule ───
    # 대출당 회차 스케줄. 3000 대출 × 평균 20회차 = 60000행 예상
    print(f"      loan_repayment_schedule ({len(scheduled_loans)} loans)...", flush=True)
    for lid, dis_date, principal, term_freq, term_period, rate, status, num_repay in scheduled_loans:
        try:
            dis = date.fromisoformat(dis_date) if isinstance(dis_date, str) else dis_date
            n = num_repay or 12
            # 상환 금액 근사 (단리 근사)
            monthly_rate = (rate or 10) / 100 / 12
            total_interest = (principal or 1000000) * monthly_rate * n
            principal_per = (principal or 1000000) / n
            interest_per = total_interest / n

            for period in range(1, n + 1):
                due = dis + timedelta(days=period * 30)
                # 지난 회차는 대체로 completed, 미래 회차는 pending
                is_past = due <= today
                # completedon_date: 지난 회차의 실제 상환 완료일 (연체 없이 정시 상환 가정)
                completed = str(due + timedelta(days=random.randint(-3, 5))) if is_past and status in (600, 700) else None
                completed_active = str(due + timedelta(days=random.randint(-3, 10))) if is_past and status == 300 else None

                sch = {
                    "loan_id": lid,
                    "installment": period,
                    "duedate": str(due),
                    "principal_amount": round(principal_per, 2),
                    "interest_amount": round(interest_per, 2),
                    "fromdate": str(dis + timedelta(days=(period-1)*30)),
                }
                if completed:
                    sch["completed_derived"] = 1
                    sch["obligations_met_on_date"] = completed
                    sch["principal_completed_derived"] = round(principal_per, 2)
                    sch["interest_completed_derived"] = round(interest_per, 2)
                elif completed_active:
                    sch["completed_derived"] = 1
                    sch["obligations_met_on_date"] = completed_active
                    sch["principal_completed_derived"] = round(principal_per, 2)
                    sch["interest_completed_derived"] = round(interest_per, 2)
                else:
                    sch["completed_derived"] = 0
                    sch["principal_completed_derived"] = 0
                    sch["interest_completed_derived"] = 0

                from scripts.build_sqlite import smart_insert
                smart_insert(conn, "m_loan_repayment_schedule", sch)
        except Exception as e:
            continue

    # ─── 2. m_loan_disbursement_detail ───
    # disbursed 대출당 1건 (분할 실행 옵션. 대다수 대출은 단일 tranche)
    print(f"      loan_disbursement_detail ({len(scheduled_loans)})...", flush=True)
    for lid, dis_date, principal, _, _, _, _, _ in scheduled_loans:
        try:
            from scripts.build_sqlite import smart_insert
            smart_insert(conn, "m_loan_disbursement_detail", {
                "loan_id": lid,
                "expected_disburse_date": dis_date,
                "disbursedon_date": dis_date,
                "principal": principal,
            })
        except Exception:
            continue

    # ─── 3. m_loan_officer_assignment_history ───
    # 활성 대출 5%에 담당자 변경 이력
    changed = random.sample([l[0] for l in scheduled_loans], k=int(len(scheduled_loans) * 0.05))
    print(f"      loan_officer_assignment_history ({len(changed)} loans)...", flush=True)
    for lid in changed:
        # 이전 → 현재 이력 각각 1건
        from scripts.build_sqlite import smart_insert
        start_prev = _random_date(today - timedelta(days=730), today - timedelta(days=200))
        end_prev = _random_date(start_prev + timedelta(days=30), today - timedelta(days=30))
        try:
            smart_insert(conn, "m_loan_officer_assignment_history", {
                "loan_id": lid,
                "loan_officer_id": random.randint(1, 8),
                "start_date": str(start_prev),
                "end_date": str(end_prev),
            })
            smart_insert(conn, "m_loan_officer_assignment_history", {
                "loan_id": lid,
                "loan_officer_id": random.randint(1, 8),
                "start_date": str(end_prev + timedelta(days=1)),
            })
        except Exception:
            continue

    # ─── 4. m_loan_collateral_management ───
    # 활성 대출 5%에 담보 관리
    with_collateral = random.sample([l[0] for l in scheduled_loans], k=int(len(scheduled_loans) * 0.05))
    print(f"      loan_collateral_management ({len(with_collateral)})...", flush=True)
    for lid in with_collateral:
        try:
            from scripts.build_sqlite import smart_insert
            smart_insert(conn, "m_loan_collateral_management", {
                "loan_id": lid,
                "client_collateral_id": random.randint(1, 100),
                "quantity": random.randint(1, 3),
                "is_released": 0,
            })
        except Exception:
            continue

    # ─── 5. m_loan_charge_paid_by ───
    # 지급된 charge (기존 charge 있는 대출의 일부)
    cur.execute("SELECT id, loan_id FROM m_loan_charge")
    charges = cur.fetchall()
    paid_charges = random.sample(charges, k=int(len(charges) * 0.4)) if charges else []
    print(f"      loan_charge_paid_by ({len(paid_charges)})...", flush=True)
    # loan_transaction 있어야 함
    for ch_id, lid in paid_charges:
        # loan_id의 tx 하나 가져오기
        tx = cur.execute("SELECT id FROM m_loan_transaction WHERE loan_id=? LIMIT 1", (lid,)).fetchone()
        if not tx: continue
        try:
            from scripts.build_sqlite import smart_insert
            smart_insert(conn, "m_loan_charge_paid_by", {
                "loan_transaction_id": tx[0],
                "loan_charge_id": ch_id,
                "amount": round(random.uniform(1000, 30000), 2),
                "installment_number": random.randint(1, 12),
            })
        except Exception:
            continue

    # ─── 6. m_loan_overdue_installment_charge ───
    # 연체 대출의 charge (status=700 OVERDUE)
    overdue_loans = [l[0] for l in scheduled_loans if l[6] == 700]
    print(f"      loan_overdue_installment_charge ({len(overdue_loans)})...", flush=True)
    for lid in overdue_loans:
        # 해당 대출의 charge 하나
        ch = cur.execute("SELECT id FROM m_loan_charge WHERE loan_id=? LIMIT 1", (lid,)).fetchone()
        if not ch: continue
        try:
            from scripts.build_sqlite import smart_insert
            smart_insert(conn, "m_loan_overdue_installment_charge", {
                "loan_charge_id": ch[0],
                "loan_schedule_id": 1,  # placeholder
                "frequency_number": random.randint(1, 5),
            })
        except Exception:
            continue

    # ─── 7. m_loan_installment_charge ───
    # charge와 회차 매핑 (charge 있는 대출)
    print(f"      loan_installment_charge (charges에 매핑)...", flush=True)
    installment_count = 0
    for ch_id, lid in charges:
        # 해당 대출의 최근 회차 몇 개에 매핑
        schedules = cur.execute("""
            SELECT id, installment FROM m_loan_repayment_schedule
            WHERE loan_id=? ORDER BY installment LIMIT 3
        """, (lid,)).fetchall()
        for sch_id, inst in schedules:
            try:
                from scripts.build_sqlite import smart_insert
                smart_insert(conn, "m_loan_installment_charge", {
                    "loan_schedule_id": sch_id,
                    "loan_charge_id": ch_id,
                    "due_date": str(today + timedelta(days=inst * 30)),
                    "amount": round(random.uniform(1000, 10000), 2),
                })
                installment_count += 1
            except Exception:
                continue
    print(f"        loan_installment_charge: {installment_count}건", flush=True)

    # ─── 8. m_savings_account_charge_paid_by ───
    cur.execute("SELECT id, savings_account_id FROM m_savings_account_charge")
    sav_charges = cur.fetchall()
    paid_sav = random.sample(sav_charges, k=int(len(sav_charges) * 0.3)) if sav_charges else []
    print(f"      savings_account_charge_paid_by ({len(paid_sav)})...", flush=True)
    for ch_id, sid in paid_sav:
        tx = cur.execute("SELECT id FROM m_savings_account_transaction WHERE savings_account_id=? LIMIT 1", (sid,)).fetchone()
        if not tx: continue
        try:
            from scripts.build_sqlite import smart_insert
            smart_insert(conn, "m_savings_account_charge_paid_by", {
                "savings_account_transaction_id": tx[0],
                "savings_account_charge_id": ch_id,
                "amount": round(random.uniform(500, 5000), 2),
            })
        except Exception:
            continue

    # ─── 9, 10. m_deposit_product_* ───
    # FXD, RCR 상품에 term/preclosure 설정, RCR에 recurring 설정
    print(f"      deposit_product term_and_preclosure / recurring_detail...", flush=True)
    sp_rows = list(cur.execute("SELECT id, deposit_type_enum FROM m_savings_product"))
    for spid, dep_type in sp_rows:
        if dep_type in (200, 300):  # FIXED or RECURRING
            try:
                from scripts.build_sqlite import smart_insert
                smart_insert(conn, "m_deposit_product_term_and_preclosure", {
                    "savings_product_id": spid,
                    "min_deposit_term": 30,
                    "max_deposit_term": 365,
                    "min_deposit_term_type_enum": 1,  # DAYS
                    "max_deposit_term_type_enum": 1,
                    "pre_closure_penal_applicable": 1,
                    "pre_closure_penal_interest": 1.0,
                    "pre_closure_penal_interest_on_enum": 1,
                })
            except Exception:
                pass
        if dep_type == 300:  # RECURRING
            try:
                from scripts.build_sqlite import smart_insert
                smart_insert(conn, "m_deposit_product_recurring_detail", {
                    "savings_product_id": spid,
                    "is_mandatory": 1,
                    "allow_withdrawal": 0,
                    "adjust_advance_towards_future_payments": 1,
                })
            except Exception:
                pass


if __name__ == "__main__":
    import sqlite3, sys
    if len(sys.argv) < 2:
        print("사용법: python3 seed_enrichment.py <sqlite_path>")
        sys.exit(1)
    conn = sqlite3.connect(sys.argv[1])
    seed_enrichment(conn)
    conn.close()
    print("[ok] 완료")



def _col_exists(cur, table, col):
    cols = [r[1] for r in cur.execute(f'PRAGMA table_info("{table}")')]
    return col in cols

def seed_enrichment_v2(conn, seed: int = 42):
    """2차 확장 - v1이 놓친 실무 자연 발생 필드."""
    random.seed(seed + 3)
    cur = conn.cursor()
    today = date.today()

    print(f"      [enrichment v2] 2차 자연 발생 시드...", flush=True)

    # (A) m_client 지점 이체 시나리오 (2%)
    active = list(cur.execute("SELECT id FROM m_client WHERE status_enum=300"))
    n_transfer = int(len(active) * 0.02)
    transfer_ids = random.sample(active, k=n_transfer) if n_transfer else []
    for (cid,) in transfer_ids:
        prop_date = _random_date(today - timedelta(days=180), today)
        cur.execute("""UPDATE m_client SET
            transfer_to_office_id=?, proposed_transfer_date=?
            WHERE id=?""",
            (random.randint(2, 5), str(prop_date), cid))
    # office_joining_date: 활성 client의 지점 조인일 (activation_date 근처)
    for (cid, act_date) in list(cur.execute("SELECT id, activation_date FROM m_client WHERE status_enum=300 AND activation_date IS NOT NULL")):
        try:
            act = date.fromisoformat(act_date) if isinstance(act_date, str) else act_date
            join = _random_date(act, act + timedelta(days=30))
            cur.execute("UPDATE m_client SET office_joining_date=? WHERE id=?", (str(join), cid))
        except Exception:
            pass

    # (B) m_loan 옵션 필드
    cur.execute("""UPDATE m_loan SET
        create_standing_instruction_at_disbursement = CASE WHEN RANDOM() % 5 = 0 THEN 1 ELSE 0 END
        WHERE loan_status_id IN (300, 600, 601, 700)""")

    # (C) m_loan_charge.external_id (80%)
    for (ch_id,) in list(cur.execute("SELECT id FROM m_loan_charge")):
        if random.random() < 0.8:
            ext = f"CHG{ch_id:07d}"
            cur.execute("UPDATE m_loan_charge SET external_id=? WHERE id=?", (ext, ch_id))

    # (D) m_loan_transaction.external_id (85% - 시스템 통합 표준)
    for (tx_id,) in list(cur.execute("SELECT id FROM m_loan_transaction")):
        if random.random() < 0.85:
            ext = f"TXL{tx_id:08d}"
            cur.execute("UPDATE m_loan_transaction SET external_id=? WHERE id=?", (ext, tx_id))
    # reversed_on_date: 취소된 tx (is_reversed=1) - 극히 소수 (1%)
    for (tx_id, is_rev) in list(cur.execute("SELECT id, is_reversed FROM m_loan_transaction")):
        if is_rev == 1 or random.random() < 0.01:
            rev_date = _random_date(today - timedelta(days=365), today)
            cur.execute("UPDATE m_loan_transaction SET reversed_on_date=? WHERE id=?", (str(rev_date), tx_id))

    # (E) m_savings_account_transaction.external_id (컬럼 없으면 스킵)
    if _col_exists(cur, "m_savings_account_transaction", "external_id"):
      for (tx_id,) in list(cur.execute("SELECT id FROM m_savings_account_transaction")):
        if random.random() < 0.85:
              ext = f"TXS{tx_id:08d}"
              cur.execute("UPDATE m_savings_account_transaction SET external_id=? WHERE id=?", (ext, tx_id))

    # (F) m_savings_account.external_id
    for (sid,) in list(cur.execute("SELECT id FROM m_savings_account")):
        if random.random() < 0.8:
            ext = f"SAV{sid:07d}"
            cur.execute("UPDATE m_savings_account SET external_id=? WHERE id=?", (ext, sid))

    # (G) m_loan_disbursement_detail.net_disbursal_amount
    # (실행 금액에서 수수료 제외 후 순 지급액)
    for (id_, principal) in list(cur.execute("SELECT id, principal FROM m_loan_disbursement_detail")):
        if principal:
            net = round(principal * random.uniform(0.95, 1.0), 2)
            cur.execute("UPDATE m_loan_disbursement_detail SET net_disbursal_amount=? WHERE id=?", (net, id_))

    # (H) m_loan_officer_assignment_history의 audit
    for (id_,) in list(cur.execute("SELECT id FROM m_loan_officer_assignment_history")):
        created = today - timedelta(days=random.randint(30, 730))
        cur.execute("""UPDATE m_loan_officer_assignment_history SET
            createdby_id=?, created_date=?, lastmodifiedby_id=?, lastmodified_date=?
            WHERE id=?""",
            (random.randint(1, 3), str(created), random.randint(1, 3), str(created), id_))

    # (I) m_loan_repayment_schedule의 fee/penalty/credits (대부분 0, 소수만 값)
    # 회차별 fee_charges_amount, penalty_charges_amount, credits_amount
    # 이건 loan_charge가 매핑된 회차에만 값 있음.
    for (sch_id,) in list(cur.execute("""
        SELECT DISTINCT loan_schedule_id FROM m_loan_installment_charge
        WHERE loan_schedule_id IS NOT NULL
    """)):
        # 이 회차에 charge가 매핑됨 → fee/penalty
        cur.execute("""UPDATE m_loan_repayment_schedule SET
            fee_charges_amount = ?,
            penalty_charges_amount = ?
            WHERE id=?""",
            (round(random.uniform(500, 5000), 2),
             round(random.uniform(0, 2000), 2) if random.random() < 0.2 else 0,
             sch_id))

    # (J) m_loan_charge.charge_id는 이미 시드했지만 charge_amount_or_percentage_derived 등 파생 있는지
    # (파생은 시드 안 함)

    # (K) m_loan_collateral_management.transaction_id
    # collateral tx 참조. 담보 있는 대출의 disbursement tx 참조.
    for (col_id, lid) in list(cur.execute("SELECT id, loan_id FROM m_loan_collateral_management")):
        tx = cur.execute("""SELECT id FROM m_loan_transaction 
                            WHERE loan_id=? AND transaction_type_enum=1 LIMIT 1""", (lid,)).fetchone()
        if tx:
            cur.execute("UPDATE m_loan_collateral_management SET transaction_id=? WHERE id=?", (tx[0], col_id))

    # (L) m_loan_installment_charge.amount_through_charge_payment
    for (id_, amount) in list(cur.execute("SELECT id, amount FROM m_loan_installment_charge")):
        if amount and random.random() < 0.6:
            paid = round(float(amount) * random.uniform(0, 1), 2)
            cur.execute("UPDATE m_loan_installment_charge SET amount_through_charge_payment=? WHERE id=?", (paid, id_))

    # (M) audit 필드 백필 - 아직 안 된 테이블
    audit_targets = [
        "m_client_identifier", "m_deposit_product_term_and_preclosure",
        "m_deposit_product_recurring_detail",
    ]
    for tbl in audit_targets:
        try:
            for (id_,) in list(cur.execute(f"SELECT id FROM {tbl}")):
                created = today - timedelta(days=random.randint(30, 1000))
                # 컬럼 존재 확인
                cols = [r[1] for r in cur.execute(f'PRAGMA table_info("{tbl}")')]
                updates = []
                params = []
                if "created_on_utc" in cols:
                    updates.append('"created_on_utc"=?'); params.append(f"{created} 09:00:00")
                if "last_modified_on_utc" in cols:
                    updates.append('"last_modified_on_utc"=?'); params.append(f"{created} 09:00:00")
                if "created_by" in cols:
                    updates.append('"created_by"=?'); params.append(random.randint(1, 3))
                if "last_modified_by" in cols:
                    updates.append('"last_modified_by"=?'); params.append(random.randint(1, 3))
                if updates:
                    params.append(id_)
                    cur.execute(f'UPDATE "{tbl}" SET {", ".join(updates)} WHERE id=?', params)
        except Exception:
            pass

    conn.commit()
    print(f"        v2 백필 완료", flush=True)
