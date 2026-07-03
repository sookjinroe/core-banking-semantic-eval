# Data — 운영 데이터 sqlite

## `fineract_3domain.sqlite`

3 도메인 패키지(portfolio.loanaccount + savings + client) + 필수 reference + 세부 서브
테이블 스키마를 Liquibase XML에서 자동 변환해 생성한 SQLite 데이터베이스.

## 생성 파이프라인

```bash
python3 scripts/build_sqlite.py --config pilot     # 소규모 (~1MB)
python3 scripts/build_sqlite.py --config medium    # 중규모 (~2MB, 권고)
python3 scripts/build_sqlite.py --config large     # 대규모 (~10MB)
```

## 중규모 규모 (`--config medium`, 현재)

- Fineract 자연 스키마 62 테이블 (3 도메인 + 필수 reference + 서브 테이블)
- Fineract initial data 417행 (r_enum_value 189행 포함)
- 운영 데이터 (seed=42, 재현 가능):
  - Client 300명 (Faker ko_KR)
  - Loan 800건 (분포: 100·200·300·500·600·601·**700 포함**)
  - SavingsAccount 500계좌 (100·200·300·500·600·**700·800 포함**)
  - LoanTransaction 5,000건 / SavingsAccountTransaction 2,500건

## ★ 결정 케이스 자연 발생 (중규모)

| ★ 케이스 | 발생 수 | 의미 |
|---|---:|---|
| `m_loan.loan_status_id=700` (OVERPAID) | 44 | 초과 상환된 활성 대출 |
| `m_savings_account.status_enum=700` (PRE_MATURE_CLOSURE) | 15 | 조기 해지 정기예금 |
| `m_savings_account.status_enum=800` (MATURED) | 30 | 만기 도래 정기예금 |
| `m_client.status_enum=700` (REJECTED) | 3 | client REJECTED — loan 700과 다른 뜻 |
| `m_client.status_enum=800` (WITHDRAWN) | 7 | client WITHDRAWN — savings 800과 다른 뜻 |

**결정적 evidence**: 같은 정수값 700·800이 세 컬럼에서 완전히 다른 뜻. baseline은
구분 불가. Render는 ORM 필드 소속으로 가림. 파일럿에서 확률적으로 놓치던 client
700·800도 중규모에서 발생.

## 슬라이스 커버리지

151 슬라이스 컬럼 중 141개(93%)가 sqlite에 존재하고 peek_profile 프로파일링 완료.
나머지 10 컬럼(5 테이블)은 Liquibase에 스키마 정의가 없는 JPA-only entity — 향후 처리.

## SINGLE_TABLE inheritance 처리

`FixedDepositProduct`, `RecurringDepositProduct`가 `@DiscriminatorValue`로 부모
`SavingsProduct`의 `m_savings_product` 테이블에 저장되는 JPA SINGLE_TABLE inheritance
패턴. tree-sitter 파서가 이를 감지해 자식 entity의 필드가 부모 테이블에 매핑되도록 처리.

## 인덱스

`scripts/build_sqlite.py::INDEXES`에 정의. sql.js-httpvfs HTTP Range 효율을 위해:
- 상태/타입 필터 컬럼: loan_status_id, transaction_type_enum, status_enum
- FK 조인 컬럼: loan_id, client_id, savings_account_id
- 날짜 필터: disbursedon_date, transaction_date

## 브라우저 접근

sql.js-httpvfs로 HTTP Range 요청 부분 로딩. 인덱스 있는 쿼리는 수 KB 다운로드로 실행.
GitHub Pages 정적 호스팅에서 그대로 작동.
