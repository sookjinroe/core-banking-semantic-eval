# -*- coding: utf-8 -*-
"""Fineract 골든셋 저작 — 재료 표적 골든.

목록형 골든 원칙 (2026-07-09, __15_ JG01·RV03 실증):
  목록 질문의 골든 SQL은 (안정 식별자, 질문이 묻는 측정값)만 담는다.
  부가 컬럼(이름·외부ID·원금 등) 선택은 에이전트의 자유이며 채점의
  부분집합 매칭이 이를 허용한다. 골든이 특정 표시 조합을 강요하면
  행 집합·값이 완전 동일해도 wrong이 난다.

카테고리:
  metric        : 10 metric 소비 (M_*) — 정본 지표 경로
  join_grain    : 조인·grain 팬아웃 판단
  codedict      : 코드값 사전 소비 (resolve_code)
  time_format   : dimension_time + format 소비
  review        : needs_review 컬럼에 기대 - 신뢰도 하향 관찰
  conceptual    : 개념 응축·다중 자산 후보 중 선택
  boundary      : 재료 결손·부재 - 폴백·거부 관찰
  analytic      : 복합 분석 - 리포트 작성자 관점 (다중 측정·시계열·랭킹·교차·구성비)

골든 저작 원칙 (목록형): 목록을 묻는 질문의 골든 SQL은
(안정 식별자, 질문이 묻는 측정값)만 담는다. 부가 표시 컬럼은 에이전트의
자유이며, 부분집합 매칭 채점에서 골든에 넣는 순간 강요가 된다.
(근거: __15_ JG01 - 행 집합·값 완전 동일인데 표시 컬럼 차이로 wrong)

원칙:
- 재료에 실제 있는 개념/값/컬럼만 사용
- 리터럴은 실측된 값으로 (지점명·상품명·상태값)
- 답 SQL은 sqlite에서 실행 검증 후 answer.rows까지 저장
- 판단 근거는 checkpoint의 must/watch/trap에 명시
"""
import json, sqlite3

conn = sqlite3.connect("data/fineract_3domain.sqlite")
cur = conn.cursor()

def run_sql(sql, max_rows=30):
    """SQL 실행해서 answer 구조 반환 (mock 골든과 동일 형식)."""
    try:
        rows = cur.execute(sql).fetchall()
        cols = [d[0] for d in cur.description] if cur.description else []
        truncated = len(rows) > max_rows
        return {
            "row_count": len(rows),
            "rows": [dict(zip(cols, r)) for r in rows[:max_rows]],
            "truncated": truncated,
        }
    except Exception as e:
        return {"error": str(e)}

# ═══════════════════════ metric (10 metric 각 소비) ═══════════════════════
METRIC_Q = [
    {
        "id": "M01", "cat": "metric", "text": "대출 연체율이 얼마야?",
        "tags": ["metric_trap"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(COUNT(DISTINCT s.loan_id)*1.0/(SELECT COUNT(*) FROM m_loan WHERE loan_status_id IN (300,600,601,700)),4) AS rate FROM (SELECT DISTINCT loan_id FROM m_loan_repayment_schedule WHERE duedate < date('now') AND completed_derived = 0) s JOIN m_loan l ON l.id = s.loan_id AND l.loan_status_id IN (300,600,601,700)",
        "cp_must": "get_metric(M_LOAN_DLNQ_RATE) 호출 → 정의식·base_filters 반영",
        "cp_watch": "분모 필터가 loan_status_id IN (300,600,601,700)인가; 스케줄 미완료 조건이 completed_derived=0인가",
        "cp_trap": "잔액 파생 컬럼(_derived) 참조하면 NULL — 스케줄 유도 필수",
    },
    {
        "id": "M02", "cat": "metric", "text": "활성 대출의 미상환 원금 총액은?",
        "tags": ["metric_trap"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(SUM(s.principal_amount),0) AS total FROM m_loan_repayment_schedule s JOIN m_loan l ON l.id = s.loan_id AND l.loan_status_id = 300 WHERE s.completed_derived = 0",
        "cp_must": "get_metric(M_LOAN_REMAINING_PRINCIPAL) — 잔액 파생 미채움 환경에서 스케줄 미완료 회차 원금 합",
        "cp_watch": "principal_outstanding_derived로 시도하면 NULL. 대체 정의를 metric에서 확인",
    },
    {
        "id": "M03", "cat": "metric", "text": "활성 대출의 평균 금리는?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(AVG(annual_nominal_interest_rate),3) AS avg_rate FROM m_loan WHERE loan_status_id = 300",
        "cp_must": "get_metric(M_AVG_INT_RATE) — 연 명목금리(annual_nominal_interest_rate)",
        "cp_watch": "nominal_interest_rate_per_period(월 금리)와 혼동 여부",
    },
    {
        "id": "M04", "cat": "metric", "text": "대출 승인율이 얼마야?",
        "tags": ["metric_trap"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(COUNT(CASE WHEN loan_status_id NOT IN (100,500) THEN 1 END)*1.0/COUNT(CASE WHEN loan_status_id <> 100 THEN 1 END),4) AS rate FROM m_loan",
        "cp_must": "get_metric(M_LOAN_APRV_RATE) — 분모는 심사 완료(status<>100), 분자는 승인 계열(100·500 제외)",
        "cp_trap": "분모를 전체로 잡으면 과소평가 — metric의 base_filters 준수",
    },
    {
        "id": "M05", "cat": "metric", "text": "회수 총액은?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(SUM(amount),0) AS total FROM m_loan_transaction WHERE transaction_type_enum = 8 AND is_reversed = 0",
        "cp_must": "get_metric(M_TOTAL_RECOVERED) — Fineract LoanBalanceService.calculateTotalRecoveredPayments와 동일 정의",
        "cp_watch": "is_reversed=0 (취소 거래 제외) 반영",
    },
    {
        "id": "M06", "cat": "metric", "text": "대출 상각률이 얼마야?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(COUNT(CASE WHEN loan_status_id = 601 THEN 1 END)*1.0/COUNT(CASE WHEN loan_status_id IN (300,600,601,700) THEN 1 END),4) AS rate FROM m_loan",
        "cp_must": "get_metric(M_WRITEOFF_RATE) — 분모는 실행된 대출, 분자는 601 (WRITTEN_OFF)",
    },
    {
        "id": "M07", "cat": "metric", "text": "저축계좌 입금(예치) 총액은?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(SUM(amount),0) AS total FROM m_savings_account_transaction WHERE transaction_type_enum = 1 AND is_reversed = 0",
        "cp_must": "get_metric(M_SAVINGS_DEPOSIT_TOTAL) — 잔액 파생 미채움이라 입금 거래 총액으로",
        "cp_trap": "account_balance_derived 계열은 NULL",
    },
    {
        "id": "M08", "cat": "metric", "text": "활성 고객이 몇 명이야?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_client WHERE status_enum = 300",
        "cp_must": "get_metric(M_ACTIVE_CLIENT_CNT) 또는 get_column(status_enum) + resolve_code('ACTIVE'→300)",
        "cp_watch": "clarify로 물러서는지 관찰 — '활성'은 status_enum=300 (ACTIVE)로 자연스레 매핑",
    },
    {
        "id": "M09", "cat": "metric", "text": "평균 대출 금액은?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(AVG(principal_amount),0) AS avg_amt FROM m_loan WHERE loan_status_id IN (300,600,601,700)",
        "cp_must": "get_metric(M_AVG_LOAN_SIZE) — 실행된 대출만 (300,600,601,700), 약정 원금(principal_amount)",
        "cp_watch": "principal_disbursed_derived로 시도하면 NULL",
    },
    {
        "id": "M10", "cat": "metric", "text": "대출 수수료 부과 총액은?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric"],
        "sql": "SELECT ROUND(SUM(amount),0) AS total FROM m_loan_charge WHERE is_active = 1",
        "cp_must": "get_metric(M_TOTAL_LOAN_CHARGES) — is_active=1 활성 부과분만",
    },
    {
        "id": "M11", "cat": "metric", "text": "대출 연체율을 지점별로 보여줘",
        "tags": ["metric_trap", "join"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric", "get_join_path"],
        "sql": "SELECT o.name AS office, ROUND(COUNT(DISTINCT s.loan_id)*1.0/COUNT(DISTINCT l.id),4) AS rate FROM m_loan l JOIN m_client c ON l.client_id = c.id JOIN m_office o ON c.office_id = o.id LEFT JOIN (SELECT DISTINCT loan_id FROM m_loan_repayment_schedule WHERE duedate < date('now') AND completed_derived = 0) s ON s.loan_id = l.id WHERE l.loan_status_id IN (300,600,601,700) GROUP BY o.name ORDER BY o.name",
        "cp_must": "metric 정의를 지점 분해로 확장 — 조인 경로: m_loan → m_client → m_office",
        "cp_watch": "지점명 리터럴을 발명하지 않는가; metric의 base_filters를 지점 분해에도 적용하는가",
    },
    {
        "id": "M12", "cat": "metric", "text": "주택대출의 연체율은 얼마야?",
        "tags": ["metric_trap", "join"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric", "get_join_path"],
        "sql": "SELECT ROUND(COUNT(DISTINCT s.loan_id)*1.0/COUNT(DISTINCT l.id),4) AS rate FROM m_loan l LEFT JOIN (SELECT DISTINCT loan_id FROM m_loan_repayment_schedule WHERE duedate < date('now') AND completed_derived = 0) s ON s.loan_id = l.id WHERE l.loan_status_id IN (300,600,601,700) AND l.product_id = 2",
        "cp_must": "metric 정의에 상품 필터 추가 — 주택대출 product_id=2",
        "cp_watch": "product_id로 상품명을 조회하는지, 아니면 임의 매핑하는지",
    },
]

# ═══════════════════════ join_grain (팬아웃 판단) ═══════════════════════
JOIN_GRAIN_Q = [
    {
        "id": "JG01", "cat": "join_grain", "text": "회차 3회 이상 연체된 대출 계좌 목록을 보여줘",
        "tags": ["grain"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_table", "get_join_path"],
        "sql": "SELECT l.id, COUNT(*) AS overdue_installments FROM m_loan l JOIN m_loan_repayment_schedule s ON l.id = s.loan_id WHERE s.duedate < date('now') AND s.completed_derived = 0 GROUP BY l.id HAVING COUNT(*) >= 3 ORDER BY l.id",
        "cp_must": "get_table(m_loan_repayment_schedule) grain='대출 × 상환회차 1건' 확인 → HAVING 판정",
        "cp_watch": "회차 grain에서 HAVING COUNT(*) 없이 대출 단위 필터로 표현하지 못하면 오답",
    },
    {
        "id": "JG02", "cat": "join_grain", "text": "고객당 대출 건수 상위 10명은?",
        "tags": ["grain"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path"],
        "sql": "SELECT c.id, c.display_name, COUNT(l.id) AS loan_cnt FROM m_client c JOIN m_loan l ON l.client_id = c.id GROUP BY c.id, c.display_name ORDER BY loan_cnt DESC, c.id LIMIT 10",
        "cp_must": "고객 grain 유지 + m_loan을 client_id로 조인 후 COUNT",
        "cp_watch": "고객별로 GROUP BY하는가; JOIN 후 DISTINCT/서브쿼리 처리 여부",
    },
    {
        "id": "JG03", "cat": "join_grain", "text": "지점별 활성 대출 계좌 수를 보여줘",
        "tags": ["join"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path"],
        "sql": "SELECT o.name AS office, COUNT(l.id) AS cnt FROM m_office o JOIN m_client c ON c.office_id = o.id JOIN m_loan l ON l.client_id = c.id WHERE l.loan_status_id = 300 GROUP BY o.name ORDER BY o.name",
        "cp_must": "조인 경로 m_office → m_client → m_loan 확인 (get_join_path)",
        "cp_watch": "대출 테이블에 지점 컬럼 있을 것으로 발명하는가",
    },
    {
        "id": "JG04", "cat": "join_grain", "text": "담당자별 관리 중인 활성 대출 계좌 수는?",
        "tags": [], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path"],
        "sql": "SELECT loan_officer_id, COUNT(DISTINCT id) AS loan_cnt FROM m_loan WHERE loan_status_id = 300 AND loan_officer_id IS NOT NULL GROUP BY loan_officer_id ORDER BY loan_cnt DESC, loan_officer_id",
        "alternatives": [
            {"label": "담당자 이름 표기", "sql": "SELECT st.display_name, COUNT(DISTINCT l.id) AS loan_cnt FROM m_loan l JOIN m_staff st ON l.loan_officer_id = st.id WHERE l.loan_status_id = 300 GROUP BY st.display_name ORDER BY loan_cnt DESC, st.display_name"},
        ],
        "cp_must": "get_term(담당자배정) → loan_officer_id 자산 확인 → m_staff 조인",
        "cp_watch": "m_client에서 담당자 컬럼 찾으려 시도하는지 (담당자는 대출 도메인)",
    },
    {
        "id": "JG05", "cat": "join_grain", "text": "대출당 담당자 배정 이력이 여러 건인 계좌를 보여줘",
        "tags": ["grain"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_table"],
        "sql": "SELECT loan_id, COUNT(*) AS assignments FROM m_loan_officer_assignment_history GROUP BY loan_id HAVING COUNT(*) > 1 ORDER BY assignments DESC, loan_id",
        "cp_must": "get_table(m_loan_officer_assignment_history) grain='담당자 배정 이력 1건' 인지 → 대출당 여러 이력",
        "cp_watch": "이력 grain을 대출 단위 grain으로 오해하는지",
    },
    {
        "id": "JG06", "cat": "join_grain", "text": "상환 스케줄이 있는 대출 1건당 평균 회차 수는?",
        "tags": ["grain"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_table"],
        "sql": "SELECT ROUND(AVG(cnt), 1) AS avg_installments FROM (SELECT loan_id, COUNT(*) AS cnt FROM m_loan_repayment_schedule GROUP BY loan_id) t",
        "cp_must": "회차 grain에서 대출 단위 집계 → 서브쿼리 필수",
        "cp_watch": "COUNT(*)/COUNT(DISTINCT loan_id)로 근사한 케이스도 허용 가능",
    },
    {
        "id": "JG07", "cat": "join_grain", "text": "실행 이력이 여러 번인 대출(분할 실행)이 몇 건이야?",
        "tags": ["grain"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_table"],
        "sql": "SELECT COUNT(*) AS cnt FROM (SELECT loan_id FROM m_loan_disbursement_detail GROUP BY loan_id HAVING COUNT(*) > 1) t",
        "cp_must": "get_term(분할실행) → m_loan_disbursement_detail 자산 → 대출당 여러 행",
        "cp_watch": "grain이 '대출 실행(트랜치) 1건'이라 팬아웃 관리 필요",
    },
    {
        "id": "JG08", "cat": "join_grain", "text": "저축 계좌를 2개 이상 보유한 고객은 몇 명이야?",
        "tags": ["grain"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path"],
        "sql": "SELECT COUNT(*) AS cnt FROM (SELECT client_id FROM m_savings_account WHERE client_id IS NOT NULL GROUP BY client_id HAVING COUNT(*) >= 2) t",
        "cp_must": "계좌 grain을 고객 grain으로 접기 - GROUP BY client_id HAVING",
        "cp_watch": "HAVING >= 2 조건과 고객 단위 카운트",
    },
]

# ═══════════════════════ codedict (코드값 사전 소비) ═══════════════════════
CODEDICT_Q = [
    {
        "id": "CD01", "cat": "codedict", "text": "대출 상태별 건수 분포를 보여줘",
        "tags": ["codedict"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "resolve_code"],
        "sql": "SELECT loan_status_id, COUNT(*) AS cnt FROM m_loan GROUP BY loan_status_id ORDER BY loan_status_id",
        "cp_must": "resolve_code(m_loan.loan_status_id) → 코드사전 확인. 값 그대로 반환도 정답 (사전은 라벨 조회용)",
    },
    {
        "id": "CD02", "cat": "codedict", "text": "거절된 대출은 몇 건이야?",
        "tags": ["codedict"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "resolve_code"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE loan_status_id = 500",
        "cp_must": "resolve_code(m_loan.loan_status_id, '거절'/'REJECTED') → 500",
        "cp_trap": "코드값 추측(예: 400, 502) 금지 — resolve_code로만 확정",
    },
    {
        "id": "CD03", "cat": "codedict", "text": "상각된 대출이 몇 건이야?",
        "tags": ["codedict"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "resolve_code"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE loan_status_id = 601",
        "cp_must": "resolve_code(m_loan.loan_status_id, '상각'/'WRITTEN_OFF') → 601",
    },
    {
        "id": "CD04", "cat": "codedict", "text": "성별별 고객 수 분포는?",
        "tags": ["codedict"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "resolve_code"],
        "sql": "SELECT gender_cv_id, COUNT(*) AS cnt FROM m_client GROUP BY gender_cv_id ORDER BY gender_cv_id",
        "cp_must": "get_term(성별) → gender_cv_id 자산 확인 → GROUP BY",
        "cp_watch": "라벨(남/여)이 codedict에 있으면 조인 조회, 없으면 코드값 그대로 표시",
    },
    {
        "id": "CD05", "cat": "codedict", "text": "정기예금 계좌가 몇 개야?",
        "tags": ["codedict"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "resolve_code"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_savings_account WHERE deposit_type_enum = 200",
        "cp_must": "resolve_code(m_savings_account.deposit_type_enum, '정기예금'/'Fixed Deposit') → 200",
        "cp_trap": "'정기적금'(300)과 혼동 금지 — 정기예금은 200",
    },
    {
        "id": "CD06", "cat": "codedict", "text": "정기적금 계좌가 몇 개야?",
        "tags": ["codedict"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "resolve_code"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_savings_account WHERE deposit_type_enum = 300",
        "cp_must": "resolve_code(m_savings_account.deposit_type_enum, '정기적금'/'Recurring Deposit') → 300",
        "cp_watch": "CD05와 짝. 정기예금/적금 혼동 관찰",
    },
]

# ═══════════════════════ time_format (dimension_time + format) ═══════════════════════
TIME_FORMAT_Q = [
    {
        "id": "TF01", "cat": "time_format", "text": "2026년 5월에 실행된 대출은 몇 건이야?",
        "tags": ["dated_by", "format"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE disbursedon_date BETWEEN '2026-05-01' AND '2026-05-31'",
        "cp_must": "get_column(m_loan.disbursedon_date) → capability=dimension_time, format='YYYY-MM-DD' 확인",
        "cp_watch": "'202605' 형식(YYYYMM)으로 잘못 쓰면 0행",
        "cp_trap": "format 필드 미확인 시 형식 오류",
    },
    {
        "id": "TF02", "cat": "time_format", "text": "2026년 2분기(4~6월)에 신청된 대출 수는?",
        "tags": ["dated_by"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE submittedon_date BETWEEN '2026-04-01' AND '2026-06-30'",
        "cp_must": "get_term(대출신청일) → submittedon_date 자산 → 기간 필터",
        "cp_watch": "submittedon_date와 disbursedon_date 구분",
    },
    {
        "id": "TF03", "cat": "time_format", "text": "2026년에 활성화된 고객은 몇 명이야?",
        "tags": ["dated_by"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_client WHERE activation_date BETWEEN '2026-01-01' AND '2026-12-31'",
        "cp_must": "get_term(고객활성일) → activation_date 자산 확인",
        "cp_watch": "office_joining_date(지점 가입일)와 혼동 여부",
    },
    {
        "id": "TF04", "cat": "time_format", "text": "이번 달 실행된 대출의 총 금액은?",
        "tags": ["dated_by", "relative_time"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT ROUND(SUM(principal_amount),0) AS total FROM m_loan WHERE strftime('%Y-%m', disbursedon_date) = strftime('%Y-%m', date('now'))",
        "cp_must": "'이번 달' → date('now') 기반 상대 시간",
        "cp_watch": "고정 리터럴로 잘못 해석하는지",
    },
    {
        "id": "TF05", "cat": "time_format", "text": "지난 3개월간 새로 가입한 고객 수는?",
        "tags": ["dated_by", "relative_time"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_client WHERE activation_date >= date('now', '-3 months')",
        "cp_must": "get_term(고객활성일) + 상대 시간 처리",
    },
    {
        "id": "TF06", "cat": "time_format", "text": "만기가 2026년 하반기인 대출은 몇 건이야?",
        "tags": ["dated_by"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE expected_maturedon_date BETWEEN '2026-07-01' AND '2026-12-31'",
        "cp_must": "get_term(만기예정일) → expected_maturedon_date",
        "cp_watch": "expected_maturedon_date 기간 필터의 형식·경계 정확성",
    },
]

# ═══════════════════════ review (needs_review 컬럼 소비) ═══════════════════════
REVIEW_Q = [
    {
        "id": "RV01", "cat": "review", "text": "고객 세부 상태(sub_status)별 분포는?",
        "tags": ["needs_review"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_column"],
        "sql": "SELECT sub_status, COUNT(*) AS cnt FROM m_client GROUP BY sub_status ORDER BY sub_status",
        "cp_must": "get_column(m_client.sub_status) → needs_review=true 확인 → confidence 하향",
        "cp_watch": "assumptions에 신뢰도 낮음 명시 여부; SQL은 정상 나옴",
    },
    {
        "id": "RV02", "cat": "review", "text": "수수료 납부 방식별 대출 수는?",
        "tags": ["needs_review"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT charge_payment_mode_enum, COUNT(DISTINCT loan_id) AS loan_cnt FROM m_loan_charge WHERE is_active=1 GROUP BY charge_payment_mode_enum",
        "cp_must": "get_column(charge_payment_mode_enum) → needs_review=true → 라벨 부재 명시",
    },
    {
        "id": "RV03", "cat": "review", "text": "그룹대출 계좌 목록을 보여줘",
        "tags": ["needs_review", "empty"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column"],
        "sql": "SELECT account_number FROM glim_accounts ORDER BY account_number",
        "cp_must": "get_column(glim_accounts.group_id) → 모든 행 값 0으로 고정, needs_review 확인",
        "cp_watch": "결과 나오지만 값이 대부분 0/기본값인 걸 caveat로 알리는지",
    },
    {
        "id": "RV04", "cat": "review", "text": "거래 간 관계 유형별 분포는?",
        "tags": ["needs_review"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_column"],
        "sql": "SELECT relation_type_enum, COUNT(*) AS cnt FROM m_loan_transaction_relation GROUP BY relation_type_enum ORDER BY relation_type_enum",
        "cp_must": "get_column(relation_type_enum) → 라벨 확정 어려움, needs_review",
    },
    {
        "id": "RV05", "cat": "review", "text": "이자 복리 계산 주기별 저축 계좌 수는?",
        "tags": ["needs_review"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_column"],
        "sql": "SELECT interest_compounding_period_enum, COUNT(*) AS cnt FROM m_savings_account GROUP BY interest_compounding_period_enum",
        "cp_must": "get_column(interest_compounding_period_enum) → 모든 행 값 4, needs_review",
        "cp_watch": "값 하나만 있음을 caveat로 알리는지",
    },
]

# ═══════════════════════ conceptual (개념 응축·다중 해석) ═══════════════════════
CONCEPTUAL_Q = [
    {
        "id": "CC01", "cat": "conceptual", "text": "대출 실행 총액이 얼마야?",
        "tags": ["ambiguous", "granularity"], "mode": "clarify",
        "expected_ops": ["resolve_terms", "get_term"],
        "interpretations": [
            {"label": "약정 원금 총합(실행된 대출 대상)", "sql": "SELECT ROUND(SUM(principal_amount),0) AS total FROM m_loan WHERE loan_status_id IN (300,600,601,700)"},
            {"label": "분할 실행 트랜치 총합", "sql": "SELECT ROUND(SUM(principal),0) AS total FROM m_loan_disbursement_detail"},
        ],
        "cp_must": "약정 원금 총합 vs 분할 실행 총합 — 개념적으로 다름 (하나는 계약 원금, 다른 하나는 지급 이력)",
        "cp_trap": "'실행 총액' 모호 — 무가정 단일 답은 오답",
    },
    {
        "id": "CC02", "cat": "conceptual", "text": "고객이 낸 총 이자는?",
        "tags": ["ambiguous"], "mode": "clarify",
        "expected_ops": ["resolve_terms", "get_term"],
        "interpretations": [
            {"label": "상환 완료된 회차의 이자 총합", "sql": "SELECT ROUND(SUM(interest_amount),0) AS total FROM m_loan_repayment_schedule WHERE completed_derived = 1"},
            {"label": "이자 상환 거래 총합", "sql": "SELECT ROUND(SUM(amount),0) AS total FROM m_loan_transaction WHERE transaction_type_enum IN (2,6) AND is_reversed = 0"},
        ],
        "cp_must": "스케줄 유도(회차 이자) vs 거래 유도(이자 거래) — 접근 다름",
        "cp_watch": "단일 답 시 어느 해석인지 명시하는가",
    },
    {
        "id": "CC03", "cat": "conceptual", "text": "고객 총 잔액이 얼마야?",
        "tags": ["ambiguous", "domain"], "mode": "clarify",
        "expected_ops": ["resolve_terms", "get_term"],
        "interpretations": [
            {"label": "대출 미상환 원금(부채)", "sql": "SELECT ROUND(SUM(s.principal_amount),0) AS total FROM m_loan_repayment_schedule s JOIN m_loan l ON l.id = s.loan_id AND l.loan_status_id = 300 WHERE s.completed_derived = 0"},
            {"label": "저축 예치 총액(자산)", "sql": "SELECT ROUND(SUM(amount),0) AS total FROM m_savings_account_transaction WHERE transaction_type_enum = 1 AND is_reversed = 0"},
        ],
        "cp_must": "부채와 자산 잔액이 '잔액' 하나로 통칭 — 도메인 확인 필요",
        "cp_trap": "F6 패밀리와 동형 — 두 도메인 반드시 clarify",
    },
    {
        "id": "CC04", "cat": "conceptual", "text": "계좌가 총 몇 개야?",
        "tags": ["ambiguous", "domain"], "mode": "clarify",
        "expected_ops": ["resolve_terms", "get_term"],
        "interpretations": [
            {"label": "대출 계좌", "sql": "SELECT COUNT(*) AS cnt FROM m_loan"},
            {"label": "저축 계좌", "sql": "SELECT COUNT(*) AS cnt FROM m_savings_account"},
        ],
        "cp_must": "'계좌'가 대출(3000)인지 저축(1500)인지 도메인이 갈림 — 확인 필요",
        "cp_trap": "제3 해석 여지가 적은 도메인 이분 — 무가정 단일 답은 오답",
    },
    {
        "id": "CC05", "cat": "conceptual", "text": "신규 대출이 몇 건이야?",
        "tags": ["ambiguous", "time"], "mode": "clarify",
        "expected_ops": ["resolve_terms", "get_term"],
        "interpretations": [
            {"label": "최근 30일 실행", "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE disbursedon_date >= date('now','-30 days')"},
            {"label": "최근 30일 신청", "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE submittedon_date >= date('now','-30 days')"},
            {"label": "이번 달 실행", "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE strftime('%Y-%m', disbursedon_date) = strftime('%Y-%m', date('now'))"},
            {"label": "미승인 신청 상태(100)", "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE loan_status_id = 100"},
        ],
        "cp_must": "'신규' 시간 창과 라이프사이클 단계 모호 — 신청·승인·실행 중 어느 단계",
    },
    {
        "id": "CC06", "cat": "conceptual", "text": "고객 등급별 분포는?",
        "tags": ["ambiguous"], "mode": "clarify",
        "expected_ops": ["resolve_terms", "get_term"],
        "interpretations": [
            {"label": "고객유형(client_type_cv_id)", "sql": "SELECT client_type_cv_id, COUNT(*) AS cnt FROM m_client GROUP BY client_type_cv_id ORDER BY client_type_cv_id"},
            {"label": "고객 분류(client_classification_cv_id)", "sql": "SELECT client_classification_cv_id, COUNT(*) AS cnt FROM m_client GROUP BY client_classification_cv_id ORDER BY client_classification_cv_id"},
        ],
        "cp_must": "'등급' Term 부재 — 유사 개념 두 개(client_type, classification) 중 확인 필요",
        "cp_watch": "Term 부재 시 clarify 하는지 임의 발명하는지",
    },
]

# ═══════════════════════ boundary (재료 결손·부재) ═══════════════════════
BOUNDARY_Q = [
    {
        "id": "BD01", "cat": "boundary", "text": "고객의 신용점수 분포는?",
        "tags": ["no_term", "no_data"], "mode": "missing",
        "expected_ops": ["resolve_terms", "search_columns"],
        "expected_behavior": "Fineract에 신용점수(credit score) 개념 부재. Term도 컬럼도 없음. cannot_answer 정답, 임의 컬럼 발명 오답",
        "world_truth": None,
        "cp_must": "resolve_terms + search_columns 빈 결과 → 재료 부재 보고",
        "cp_trap": "credit_score·grade 같은 컬럼 발명 금지",
    },
    {
        "id": "BD02", "cat": "boundary", "text": "고객 등급이 골드인 사람 수는?",
        "tags": ["no_term", "no_data"], "mode": "missing",
        "expected_ops": ["resolve_terms", "search_columns"],
        "expected_behavior": "Fineract에 VIP/골드 같은 등급 체계 부재 (mock의 CUST_GRD_CD='G' 아님). client_type_cv_id·client_classification_cv_id는 유형/분류이지 등급 아님. cannot_answer 또는 clarify로 유사 개념 제시가 정답",
        "world_truth": None,
        "cp_must": "'골드 등급' 개념 부재 확인 후 재료 결손 보고",
        "cp_trap": "임의로 client_classification_cv_id의 특정 값을 골드로 매핑하면 오답",
    },
    {
        "id": "BD03", "cat": "boundary", "text": "휴면계좌가 몇 개야?",
        "tags": ["no_term"], "mode": "missing",
        "expected_ops": ["resolve_terms", "search_columns"],
        "expected_behavior": "휴면계좌 개념·기준 부재. m_savings_account.status_enum에 DORMANT 상태 코드(600)는 있지만 codedict 확인 필요. resolve_code로 확인 후 답하거나 부재 보고",
        "world_truth": {"sql": "SELECT COUNT(*) AS cnt FROM m_savings_account WHERE status_enum = 600"},
        "cp_must": "resolve_code(status_enum, '휴면'/'DORMANT') 시도 → 확인되면 답, 안 되면 부재 보고",
        "cp_watch": "임의 기준(최근 N개월 미거래 등) 발명 여부",
    },
    {
        "id": "BD04", "cat": "boundary", "text": "카드 결제 총액은 얼마야?",
        "tags": ["no_domain"], "mode": "missing",
        "expected_ops": ["resolve_terms"],
        "expected_behavior": "Fineract는 loan/savings/deposit 3 도메인만 다룸. 카드 도메인 없음. cannot_answer 정답",
        "world_truth": None,
        "cp_must": "도메인 부재 인식 후 조기 종료",
    },
    {
        "id": "BD05", "cat": "boundary", "text": "미상환 잔액 상위 고객 10명은?",
        "tags": ["no_data"], "mode": "missing",
        "expected_ops": ["resolve_terms", "get_term", "get_column", "get_metric"],
        "expected_behavior": "잔액 파생 컬럼(principal_outstanding_derived 등)이 모두 NULL. M02(M_LOAN_REMAINING_PRINCIPAL) metric은 대출 단위 총합용이지 고객 단위 상위 산출용 아님. 상환 스케줄 유도로 답 가능함을 인지하면 SQL, 파생 미채움만 보고 거부면 부분정답",
        "world_truth": {"sql": "SELECT c.id, c.display_name, ROUND(SUM(s.principal_amount),0) AS remaining FROM m_client c JOIN m_loan l ON l.client_id=c.id JOIN m_loan_repayment_schedule s ON s.loan_id=l.id AND s.completed_derived=0 WHERE l.loan_status_id=300 GROUP BY c.id, c.display_name ORDER BY remaining DESC LIMIT 10"},
        "cp_must": "파생 컬럼 미채움 상황에서 스케줄 유도로 우회 가능 — 답이 아예 없다고 하면 부분정답",
        "cp_watch": "cannot_answer 방어적 회피 관찰 지점",
    },
]

# ═══════════════════════ analytic (복합 분석 - 리포트 작성자 관점) ═══════════════════════
ANALYTIC_Q = [
    {
        "id": "AN01", "cat": "analytic", "text": "지점별로 활성 대출 건수와 평균 금리를 함께 보여줘",
        "tags": ["multi_measure", "join"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path", "try_sql"],
        "sql": "SELECT o.name AS office, COUNT(l.id) AS active_loans, ROUND(AVG(l.annual_nominal_interest_rate),2) AS avg_rate FROM m_loan l JOIN m_client cl ON l.client_id=cl.id JOIN m_office o ON cl.office_id=o.id WHERE l.loan_status_id=300 GROUP BY o.name ORDER BY o.name",
        "cp_must": "두 측정값(건수·평균금리)을 한 쿼리에 결합 + 3테이블 조인 경로",
        "cp_watch": "metric M_AVG_INT_RATE의 컬럼(annual_nominal_interest_rate) 사용 여부",
    },
    {
        "id": "AN02", "cat": "analytic", "text": "상품별 대출 건수, 총 약정액, 상각률을 한 번에 정리해줘",
        "tags": ["multi_measure", "metric_trap", "join"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path", "try_sql"],
        "sql": "SELECT p.name AS product, COUNT(l.id) AS loans, ROUND(SUM(l.principal_amount),0) AS total_principal, ROUND(COUNT(CASE WHEN l.loan_status_id=601 THEN 1 END)*1.0/COUNT(CASE WHEN l.loan_status_id IN (300,600,601,700) THEN 1 END),4) AS writeoff_rate FROM m_loan l JOIN m_product_loan p ON l.product_id=p.id WHERE l.loan_status_id IN (300,600,601,700) GROUP BY p.name ORDER BY p.name",
        "cp_must": "세 측정값 결합, 상각률은 M_WRITEOFF_RATE 정의(분모=실행 대출) 유지",
        "cp_trap": "상각률 분모를 전체 대출로 잡으면 왜곡 — metric 정의가 그룹 내에서도 유지되는가",
    },
    {
        "id": "AN03", "cat": "analytic", "text": "2026년 상반기 월별 대출 실행 추이를 건수와 금액으로 보여줘",
        "tags": ["timeseries"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_column", "try_sql"],
        "sql": "SELECT strftime('%Y-%m', disbursedon_date) AS ym, COUNT(*) AS cnt, ROUND(SUM(principal_amount),0) AS amt FROM m_loan WHERE disbursedon_date BETWEEN '2026-01-01' AND '2026-06-30' GROUP BY ym ORDER BY ym",
        "cp_must": "월 단위 시계열 집계 (strftime) + 두 측정값",
        "cp_watch": "기간 경계(1/1~6/30)와 월 버킷 형식",
    },
    {
        "id": "AN04", "cat": "analytic", "text": "연체율이 가장 높은 지점 3곳과 그 연체율은?",
        "tags": ["ranking", "metric_trap", "join"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_metric", "get_join_path", "try_sql"],
        "sql": "SELECT o.name AS office, ROUND(COUNT(DISTINCT s.loan_id)*1.0/COUNT(DISTINCT l.id),4) AS dlnq_rate FROM m_loan l JOIN m_client c2 ON l.client_id=c2.id JOIN m_office o ON c2.office_id=o.id LEFT JOIN (SELECT DISTINCT loan_id FROM m_loan_repayment_schedule WHERE duedate < date('now') AND completed_derived=0) s ON s.loan_id=l.id WHERE l.loan_status_id IN (300,600,601,700) GROUP BY o.name ORDER BY dlnq_rate DESC, o.name LIMIT 3",
        "cp_must": "M_LOAN_DLNQ_RATE 정의를 지점 분해 + 랭킹으로 확장",
        "cp_trap": "연체 정의를 status로 오해하면 값 왜곡 — 스케줄 유도 유지 여부",
    },
    {
        "id": "AN05", "cat": "analytic", "text": "지점별·성별 활성 고객 수 교차 분포를 보여줘",
        "tags": ["cross_dim", "join", "codedict"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path", "resolve_code", "try_sql"],
        "sql": "SELECT o.name AS office, c.gender_cv_id, COUNT(*) AS cnt FROM m_client c JOIN m_office o ON c.office_id=o.id WHERE c.status_enum=300 GROUP BY o.name, c.gender_cv_id ORDER BY o.name, c.gender_cv_id",
        "cp_must": "2차원 그룹핑 (지점 × 성별) + 활성 필터(status_enum=300)",
        "cp_watch": "성별 코드/라벨 어느 쪽이든 codedict 동치로 채점",
    },
    {
        "id": "AN06", "cat": "analytic", "text": "이번 분기에 실행된 대출의 상품별 구성비는?",
        "tags": ["composition", "relative_time", "join"], "mode": "sql",
        "expected_ops": ["resolve_terms", "get_term", "get_join_path", "try_sql"],
        "sql": "SELECT p.name AS product, COUNT(*) AS cnt, ROUND(COUNT(*)*100.0/(SELECT COUNT(*) FROM m_loan WHERE disbursedon_date >= '2026-07-01'),1) AS pct FROM m_loan l JOIN m_product_loan p ON l.product_id=p.id WHERE l.disbursedon_date >= '2026-07-01' GROUP BY p.name ORDER BY cnt DESC, p.name",
        "cp_must": "'이번 분기'(2026 Q3 = 7/1~) 상대 시간 + 구성비(전체 대비 %) 계산",
        "cp_watch": "분기 시작을 7/1로 잡는가, 구성비 분모가 동일 기간 전체인가",
    },
]

# ═══════════════ targeted (실패 클래스 표적 - 2026-07-10 재구성) ═══════════════
TARGETED_Q = [
    # ── 사건 질문 (base_filter 이식 유혹): 사건 발생 = 해당 날짜 컬럼, 지표 기준 이식 금지 ──
    {"id": "EV01", "cat": "targeted", "text": "승인된 대출은 총 몇 건이야?",
     "tags": ["event", "filter_trap"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE approvedon_date IS NOT NULL",
     "cp_must": "승인 사건 = approvedon_date 존재. 지표의 상태 기준 이식하면 오답",
     "cp_trap": "'실행 대출(300,600,601,700)' 기준을 승인에 이식하는 과잉 일반화"},
    {"id": "EV02", "cat": "targeted", "text": "거절된 대출 신청은 몇 건이야?",
     "tags": ["event", "filter_trap"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE rejectedon_date IS NOT NULL",
     "cp_must": "거절 사건 = rejectedon_date (상태 500과 동치)",
     "cp_watch": "거절일 Term의 다중 실현(대출·고객·저축) 중 대출 선택"},
    {"id": "EV03", "cat": "targeted", "text": "올해 종결된 대출은 몇 건이야?",
     "tags": ["event", "relative_time"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE closedon_date >= '2026-01-01' AND closedon_date < '2027-01-01'",
     "cp_must": "종결 사건 = closedon_date + 올해 경계",
     "cp_watch": "상태(600,601)를 추가로 걸어도 동치인지는 데이터에 따름 - 날짜 기준이 정본"},
    # ── 0-답 · 소수답 (JG07 클래스) ──
    {"id": "Z01", "cat": "targeted", "text": "연 금리가 30%를 넘는 대출이 몇 건이야?",
     "tags": ["zero_answer"], "mode": "sql",
     "expected_ops": ["search", "get_column", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE annual_nominal_interest_rate > 30",
     "cp_must": "조회 결과 0을 유효한 답(0건)으로 제출 - cannot_answer 금지",
     "cp_trap": "0행/0값을 '데이터 없음'으로 오판하는 도피"},
    {"id": "Z02", "cat": "targeted", "text": "만기가 2028년인 대출은 몇 건이야?",
     "tags": ["small_answer", "time"], "mode": "sql",
     "expected_ops": ["search", "get_column", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE strftime('%Y', expected_maturedon_date) = '2028'",
     "cp_must": "만기 = expected_maturedon_date 연도 추출",
     "cp_watch": "상태 필터 무근거 추가 여부"},
    # ── 정의 정확 인용 (BD05 클래스): 지표 base_filters를 그대로 ──
    {"id": "DF01", "cat": "targeted", "text": "활성 대출의 미상환 원금 총액은 얼마야?",
     "tags": ["metric_quote"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT SUM(s.principal_amount) AS total FROM m_loan_repayment_schedule s JOIN m_loan l ON s.loan_id = l.id WHERE s.completed_derived = 0 AND l.loan_status_id = 300",
     "cp_must": "M_LOAN_REMAINING_PRINCIPAL의 base_filter(ACTIVE=300)를 그대로 - 타 지표의 (300,600,601,700) 혼입 금지",
     "cp_trap": "지표 간 기준 혼합 (BD05에서 4연속 관찰된 왜곡)"},
    {"id": "DF02", "cat": "targeted", "text": "저축 예치 총액은 얼마야?",
     "tags": ["metric_quote"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT SUM(amount) AS total FROM m_savings_account_transaction WHERE transaction_type_enum = 1 AND is_reversed = 0",
     "cp_must": "M_SAVINGS_DEPOSIT_TOTAL expr(예치 거래 합, 취소 제외) 그대로 - note가 '잔액 아님, 예치 거래 총액' 명시. 기준선에서 에이전트가 3/3 정확 복사했고 구 골든(약정액 합)이 지표 불일치였음 (2026-07-10 정정)",
     "cp_watch": "불필요한 상태·기간 필터 추가 여부"},
    # ── 상대시간 변형 (AN06 클래스): 날짜 주입 후 검증 ──
    {"id": "RT01", "cat": "targeted", "text": "지난 분기에 실행된 대출은 몇 건이야?",
     "tags": ["relative_time"], "mode": "sql",
     "expected_ops": ["try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE disbursedon_date >= '2026-04-01' AND disbursedon_date < '2026-07-01'",
     "cp_must": "오늘(7/10) 기준 지난 분기 = Q2(4/1~6/30) 경계 정확 계산",
     "cp_trap": "이번/지난 분기 혼동 (AN06에서 Q3 인지 후 Q2 해석 착오 관찰)"},
    {"id": "RT02", "cat": "targeted", "text": "지난달에 등록 신청된 고객은 몇 명이야?",
     "tags": ["relative_time"], "mode": "sql",
     "expected_ops": ["search", "get_column", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_client WHERE submittedon_date >= '2026-06-01' AND submittedon_date < '2026-07-01'",
     "cp_must": "지난달 = 6월 경계 + 등록 신청 = submittedon_date",
     "cp_watch": "활성화일(activation_date)과의 혼동"},
    # ── 고유명사 실측 (M12 클래스): 차원 테이블 name 조회 강제 ──
    {"id": "PN01", "cat": "targeted", "text": "긴급대출의 평균 금리는 얼마야?",
     "tags": ["proper_noun"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT ROUND(AVG(l.annual_nominal_interest_rate), 2) AS avg_rate FROM m_loan l JOIN m_product_loan p ON l.product_id = p.id WHERE p.name = '긴급대출'",
     "cp_must": "상품 고유명사 → m_product_loan.name 실측 확정 (codedict 아님)",
     "cp_trap": "clarify 도피 또는 용도코드 끼워맞춤 (M12에서 2양상 관찰)"},
    {"id": "PN02", "cat": "targeted", "text": "부산지점의 활성 고객은 몇 명이야?",
     "tags": ["proper_noun", "join"], "mode": "sql",
     "expected_ops": ["search", "get_join_path", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_client c JOIN m_office o ON c.office_id = o.id WHERE o.name = '부산지점' AND c.status_enum = 300",
     "cp_must": "지점 고유명사 → m_office.name 실측 + 활성 필터(질문에 명시됨)",
     "cp_watch": "office 조인 경로"},
    # ── 0행 형태 확장 (JG07 클래스: GROUP BY·조건 결과가 0일 때 답 제출) ──
    {"id": "ZF01", "cat": "targeted", "text": "같은 대출인데 실행 기록이 2건 이상인 경우가 몇 건이야?",
     "tags": ["zero_answer", "grain"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM (SELECT loan_id FROM m_loan_disbursement_detail GROUP BY loan_id HAVING COUNT(*) >= 2) t",
     "cp_must": "GROUP BY HAVING 결과 0행을 바깥 집계로 감싸 0건 답 제출",
     "cp_trap": "JG07과 동형 - 0행을 데이터 부재로 오판해 cannot_answer 도피"},
    {"id": "ZF02", "cat": "targeted", "text": "만기가 2030년 이후인 대출이 몇 건이야?",
     "tags": ["zero_answer", "time"], "mode": "sql",
     "expected_ops": ["search", "get_column", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE expected_maturedon_date >= '2030-01-01'",
     "cp_must": "0건을 유효한 답으로",
     "cp_watch": "Z01(값 0)과 동형 대조군 - 클래스 내 일관성 관찰"},
    # ── 정의 정확 인용 확장 (BD05·DF02 클래스) ──
    {"id": "DF03", "cat": "targeted", "text": "대출 회수 총액은 얼마야?",
     "tags": ["metric_quote"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT SUM(amount) AS total FROM m_loan_transaction WHERE transaction_type_enum = 8 AND is_reversed = 0",
     "cp_must": "M_TOTAL_RECOVERED 정의(type 8 RECOVERY, is_reversed=0) 그대로",
     "cp_trap": "일반 상환(type 2)과 혼동하거나 필터 의역"},
    {"id": "DF04", "cat": "targeted", "text": "평균 대출 금액은 얼마야?",
     "tags": ["metric_quote"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT ROUND(AVG(principal_amount), 2) AS avg_amount FROM m_loan WHERE loan_status_id IN (300,600,601,700)",
     "cp_must": "M_AVG_LOAN_SIZE base_filter(실행 대출) 그대로 - EV01과 대조쌍: 지표명 직격 질문은 지표를 따르는 게 정답",
     "cp_watch": "EV 클래스(사건)와의 구분 - 스코프 문구의 양면 검증"},
    # ── 고유명사 실측 확장 (M12·PN01 클래스) ──
    {"id": "PN03", "cat": "targeted", "text": "소액대출의 상각률은 얼마야?",
     "tags": ["proper_noun", "metric_quote"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT ROUND(COUNT(CASE WHEN l.loan_status_id = 601 THEN 1 END) * 1.0 / COUNT(CASE WHEN l.loan_status_id IN (300,600,601,700) THEN 1 END), 4) AS writeoff_rate FROM m_loan l JOIN m_product_loan p ON l.product_id = p.id WHERE p.name = '소액대출'",
     "cp_must": "상품 실측 확정 + M_WRITEOFF_RATE 정의를 상품 그룹 내 유지",
     "cp_trap": "M12 형제 - 상품명을 codedict에서 찾아 헤매거나 clarify 도피"},
    {"id": "PN04", "cat": "targeted", "text": "대구지점의 저축 계좌 수는 몇 개야?",
     "tags": ["proper_noun", "join"], "mode": "sql",
     "expected_ops": ["search", "get_join_path", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_savings_account s JOIN m_client c ON s.client_id = c.id JOIN m_office o ON c.office_id = o.id WHERE o.name = '대구지점'",
     "cp_must": "지점 실측 + 저축 도메인 조인 경로 (PN02의 저축판)",
     "cp_watch": "지점-계좌 직접 FK가 없어 고객 경유 필요"},
    # ── 사건 확장 (EV 클래스: 고객 도메인) ──
    {"id": "EV04", "cat": "targeted", "text": "등록을 철회한 고객은 몇 명이야?",
     "tags": ["event", "filter_trap"], "mode": "sql",
     "expected_ops": ["search", "try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_client WHERE withdrawn_on_date IS NOT NULL",
     "cp_must": "철회 사건 = withdrawn_on_date (고객 도메인 - 대출 사건과 교차 검증)",
     "cp_watch": "status 800과 동치이나 날짜 기준이 정본"},
    # ── 이상 결과 감지 확장 (M11 클래스: 지표 그룹 분해 변형) ──
    {"id": "AM01", "cat": "targeted", "text": "상품별 대출 연체율을 보여줘",
     "tags": ["metric_decompose", "ranking"], "mode": "sql",
     "expected_ops": ["search", "get_join_path", "try_sql"],
     "sql": "SELECT p.name AS product, ROUND(COUNT(DISTINCT sch.loan_id) * 1.0 / COUNT(DISTINCT l.id), 4) AS rate FROM m_loan l JOIN m_product_loan p ON l.product_id = p.id LEFT JOIN (SELECT DISTINCT loan_id FROM m_loan_repayment_schedule WHERE duedate < date('now') AND completed_derived = 0) sch ON sch.loan_id = l.id WHERE l.loan_status_id IN (300,600,601,700) GROUP BY p.name ORDER BY p.name",
     "cp_must": "M11의 상품판 - 연체 정의(스케줄 유도) 유지 + 전부 0.0% 같은 이상 결과 자가 감지",
     "cp_trap": "조인 키 타입 실수(M11에서 loan_id=account_no 관찰) 재현 여부"},
    {"id": "AM02", "cat": "targeted", "text": "지점별 상각률을 보여줘",
     "tags": ["metric_decompose"], "mode": "sql",
     "expected_ops": ["search", "get_join_path", "try_sql"],
     "sql": "SELECT o.name AS office, ROUND(COUNT(CASE WHEN l.loan_status_id = 601 THEN 1 END) * 1.0 / COUNT(CASE WHEN l.loan_status_id IN (300,600,601,700) THEN 1 END), 4) AS rate FROM m_loan l JOIN m_client c ON l.client_id = c.id JOIN m_office o ON c.office_id = o.id WHERE l.loan_status_id IN (300,600,601,700) GROUP BY o.name ORDER BY o.name",
     "cp_must": "M_WRITEOFF_RATE의 지점 분해 - 분모 정의 그룹 내 유지",
     "cp_watch": "AN02에서 통과한 능력의 지점판 - 안정성 교차"},
    # ── 진단 (AN06 편향 범위 측정 - 개입 아님) ──
    {"id": "DG01", "cat": "targeted", "text": "이번 달에 실행된 대출은 몇 건이야?",
     "tags": ["diagnostic", "relative_time"], "mode": "sql",
     "expected_ops": ["try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_loan WHERE disbursedon_date >= '2026-07-01' AND disbursedon_date < '2026-08-01'",
     "cp_must": "이번 달 = 7월 (10일치 빈약 데이터 조건은 AN06과 동일, 구성비 아님)",
     "cp_watch": "AN06 대조: 여기서도 '지난달'로 당기면 일반 편향, 여기선 정상이면 구성비·빈약기간 특이 편향"},
    {"id": "DG02", "cat": "targeted", "text": "이번 분기에 등록 신청된 고객은 몇 명이야?",
     "tags": ["diagnostic", "relative_time"], "mode": "sql",
     "expected_ops": ["try_sql"],
     "sql": "SELECT COUNT(*) AS cnt FROM m_client WHERE submittedon_date >= '2026-07-01' AND submittedon_date < '2026-10-01'",
     "cp_must": "이번 분기 = Q3 (7/1~9/30) - AN06과 같은 기간 표현, 단순 집계",
     "cp_watch": "AN06과 직접 대조 문항"},
    # ── 변동 비교 (분석 에이전트 예고) ──
    {"id": "VA01", "cat": "targeted", "text": "5월과 6월의 대출 실행 건수를 비교해줘",
     "tags": ["variance", "timeseries"], "mode": "sql",
     "expected_ops": ["try_sql"],
     "sql": "SELECT strftime('%Y-%m', disbursedon_date) AS ym, COUNT(*) AS cnt FROM m_loan WHERE disbursedon_date >= '2026-05-01' AND disbursedon_date < '2026-07-01' GROUP BY ym ORDER BY ym",
     "alternatives": [
         {"label": "월 라벨 %m 표기", "sql": "SELECT strftime('%m', disbursedon_date) AS m, COUNT(*) AS cnt FROM m_loan WHERE disbursedon_date >= '2026-05-01' AND disbursedon_date < '2026-07-01' GROUP BY m ORDER BY m"},
     ],
     "cp_must": "두 기간을 한 결과로 - 월 버킷 비교",
     "cp_watch": "각 월을 별도 쿼리로 쪼개지 않고 GROUP BY로 처리하는가"},
]

# ═══════════════ 재구성 (2026-07-10): 안정 코어 12 + 실패 표적 8 + 신규 12 = 32 ═══════════════
# 목적: 잘하는 문항의 포화 신호를 줄이고 실패 클래스 밀도를 높여 집중 진단.
# 제외된 22문항의 정의는 위에 보존 - 회귀 전수 검사가 필요하면 FULL_Q로 복원 가능.
CORE_IDS = {"M01", "M08", "M11", "CD04", "CD06", "TF01", "TF06", "JG06", "JG08", "BD01", "BD04", "CC03"}
KEEP_FAIL_IDS = {"AN03", "TF04", "AN06", "BD05", "JG07", "M12", "JG04", "CC01"}
FULL_Q = METRIC_Q + JOIN_GRAIN_Q + CODEDICT_Q + TIME_FORMAT_Q + REVIEW_Q + CONCEPTUAL_Q + BOUNDARY_Q + ANALYTIC_Q
ALL_Q = [q for q in FULL_Q if q["id"] in (CORE_IDS | KEEP_FAIL_IDS)] + TARGETED_Q

# ═══════════════════════ SQL 실행 검증 후 answer 저장 ═══════════════════════
final = []
for q in ALL_Q:
    entry = {"id": q["id"], "cat": q["cat"], "text": q["text"],
             "mode": q["mode"], "tags": q.get("tags", []),
             "expected_ops": q["expected_ops"]}

    if q["mode"] == "sql":
        ans = run_sql(q["sql"])
        golden = {"sql": q["sql"], "answer": ans}
        if "error" in ans:
            print(f"  ✗ {q['id']}: {ans['error']}")
            continue
        # alternatives: 동치 표현 변형 (식별자 id↔이름, 라벨 표기 등) — 전량 실측 검증 후 통과
        alts = []
        for alt in q.get("alternatives", []):
            a_ans = run_sql(alt["sql"])
            if "error" in a_ans:
                print(f"  ✗ {q['id']} alt '{alt['label']}': {a_ans['error']}")
                continue
            alts.append({"label": alt["label"], "sql": alt["sql"]})
        if alts:
            golden["alternatives"] = alts
        entry["golden"] = golden

    elif q["mode"] == "clarify":
        interps = []
        for it in q["interpretations"]:
            ans = run_sql(it["sql"])
            if "error" in ans:
                print(f"  ✗ {q['id']} interp '{it['label']}': {ans['error']}")
                continue
            interps.append({"label": it["label"], "sql": it["sql"], "answer": ans})
        entry["golden"] = {
            "policy": "확인요청=정답 · 가정명시+한쪽답=부분정답 · 무가정단일답=오답 (D8)",
            "interpretations": interps,
        }

    elif q["mode"] == "missing":
        golden = {"expected_behavior": q["expected_behavior"]}
        if q.get("world_truth"):
            wt = q["world_truth"]
            if "sql" in wt:
                ans = run_sql(wt["sql"])
                if "error" not in ans:
                    golden["world_truth"] = {"sql": wt["sql"], "answer": ans}
                else:
                    print(f"  ✗ {q['id']} world_truth: {ans['error']}")
            else:
                golden["world_truth"] = None
        else:
            golden["world_truth"] = None
        entry["golden"] = golden

    # checkpoint 정형화
    cp = {"markers": q.get("tags", [])}
    if q.get("cp_must"): cp["must"] = q["cp_must"]
    if q.get("cp_watch"): cp["watch"] = q["cp_watch"]
    if q.get("cp_trap"): cp["trap"] = q["cp_trap"]
    entry["checkpoint"] = cp

    final.append(entry)
    val = ans if q["mode"] == "sql" else "clarify" if q["mode"] == "clarify" else "missing"
    val_show = ans.get("rows",[{}])[0] if q["mode"]=="sql" and ans.get("rows") else val
    print(f"  ✓ {q['id']:5s} [{q['cat']:11s}] {q['text'][:40]:42s} → {str(val_show)[:60]}")

print(f"\n총 {len(final)}문항")
from collections import Counter
print("카테고리 분포:", dict(Counter(q["cat"] for q in final)))

# JS로 저장
with open("data/nl2sql-questions-fineract.js", "w", encoding="utf-8") as f:
    f.write("// Fineract 재료 표적 골든셋 — 저작자 = Claude (재료를 아는 관점)\n")
    f.write("// 카테고리: metric·join_grain·codedict·time_format·review·conceptual·boundary\n")
    f.write("// SQL 전량 sqlite 실측 검증 통과. answer.rows 최대 30행 저장 (truncated 표시).\n")
    f.write("window.QUESTIONS_FINERACT = ")
    json.dump(final, f, ensure_ascii=False, separators=(",", ":"))
    f.write(";\n")

import os
print(f"\n[ok] data/nl2sql-questions-fineract.js ({os.path.getsize('data/nl2sql-questions-fineract.js')/1024:.1f} KB)")
