# Data — 운영 데이터 sqlite

## `fineract_3domain.sqlite`

3 도메인 패키지(portfolio.loanaccount + savings + client) + 필수 reference 테이블
스키마를 Liquibase XML에서 자동 변환해 생성한 SQLite 데이터베이스.

## 생성 파이프라인

```bash
python3 scripts/build_sqlite.py --config pilot     # 소규모 (~1MB)
python3 scripts/build_sqlite.py --config medium    # 중규모 (~10MB)
python3 scripts/build_sqlite.py --config large     # 대규모 (~50MB)
```

## 파일럿 규모 (`--config pilot`)

- Fineract 자연 스키마 47 테이블 (3 도메인 + 필수 reference)
- Fineract initial data 417행 (r_enum_value 189행 포함)
- 운영 데이터 (seed=42, 재현 가능):
  - Client 100명 (Faker ko_KR)
  - Loan 300건 (분포: 100·200·300·500·600·601·**700 포함**)
  - SavingsAccount 150계좌 (100·200·300·500·600·**700·800 포함**)
  - LoanTransaction 1,500건 / SavingsAccountTransaction 800건

## ★ 결정 케이스 자연 발생 확인

`peek_profile.json`으로 실제 값 분포 검증:
- `m_loan.loan_status_id` distinct=7, 값 700(OVERPAID) 자연 발생
- `m_savings_account.status_enum` distinct=7, 값 700(PRE_MATURE_CLOSURE)·800(MATURED) 자연 발생
- 두 테이블의 값 700이 *서로 다른 의미* → ★연결 검증의 실체 데이터 마련

## 인덱스

`scripts/build_sqlite.py::INDEXES`에 정의. sql.js-httpvfs에서 HTTP Range 효율성을 위해:
- 상태/타입 필터 컬럼: loan_status_id, transaction_type_enum, status_enum
- FK 조인 컬럼: loan_id, client_id, savings_account_id
- 날짜 필터: disbursedon_date, transaction_date

## 브라우저 접근

sql.js-httpvfs로 HTTP Range 요청 부분 로딩. 인덱스 있는 쿼리는 수 KB 다운로드로 실행.
GitHub Pages 정적 호스팅에서 그대로 작동.
