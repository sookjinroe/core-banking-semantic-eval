# Data — 운영 데이터 sqlite

## `fineract_3domain.sqlite`

3 도메인 패키지(portfolio.loanaccount + savings + client) + 필수 reference + 세부 서브
테이블 스키마를 Liquibase XML에서 자동 변환해 생성한 SQLite.

브라우저에서 [sql.js-httpvfs](https://github.com/phiresky/sql.js-httpvfs)로 HTTP Range
부분 로딩 가능 (GitHub Pages 정적 호스팅).

## 생성 파이프라인

```bash
python3 scripts/build_sqlite.py --config pilot     # 소규모 (~0.9MB, 30초)
python3 scripts/build_sqlite.py --config medium    # 중규모 (~1.8MB, 1분)
python3 scripts/build_sqlite.py --config large     # 대규모 (~5.4MB, 4초, 현재)
```

## 대규모 규모 (`--config large`, 현재)

- Fineract 자연 스키마 62 테이블
- 운영 데이터 (seed=42, 재현 가능):
  - **Client 1,000명** (한국 이름 Faker + 세그먼트 4가지)
  - **Loan 3,000건** (4개 상품·상품별 status 분포)
  - **SavingsAccount 1,500계좌** (3개 상품·상품별 status 분포)
  - **LoanTransaction 20,000건 / SavingsTransaction 10,000건**

## 다양성 시나리오

Fineract 자연 스키마 위에 실효성 높은 시나리오 layer:

- **지점 5개**: Head Office, 강남·부산·대구·인천지점
- **대출 상품 4종** (다른 이율·기간·status 분포):
  - 일반대출 (10% / 6~24개월)
  - 주택대출 (5% / 60~120개월, ACTIVE 비율 높음)
  - 소액대출 (15% / 3~12개월, CLOSED 비율 높음)
  - 긴급대출 (18.5% / 6~36개월, REJECTED 비율 높음)
- **예금 상품 3종**: 자유입출금 / 정기예금(FXD) / 정기적금(RCR)
- **Loan Officer 8명** (한국 이름) — 각 대출에 배정
- **Client 세그먼트**: Salaried 50% / Self-Employed 25% / Retired 15% / Student 10%
- **Gender**, **date_of_birth** (세그먼트별 연령 분포)

## ★ 결정 케이스 자연 발생 (대규모)

| ★ 케이스 | 발생 수 | 의미 |
|---|---:|---|
| `m_loan.loan_status_id=700` (OVERPAID) | **241** | 초과 상환된 활성 대출 |
| `m_savings_account.status_enum=700` (PRE_MATURE) | 97 | 조기 해지 정기예금 |
| `m_savings_account.status_enum=800` (MATURED) | 136 | 만기 도래 정기예금 |
| `m_client.status_enum=700` (REJECTED) | 19 | client REJECTED — loan 700과 다른 뜻 |
| `m_client.status_enum=800` (WITHDRAWN) | 31 | client WITHDRAWN — savings 800과 다른 뜻 |

## 실효성 예시 — NL 질문 답 크기

| 질문 | 답 |
|---|---|
| 지점별 활성 대출 건수 | 강남 362 / 부산 389 / 대구 420 / 인천 402 |
| 상품별 disburse 건수 | 일반 956 / 소액 859 / 주택 472 / 긴급 378 |
| 세그먼트별 평균 대출금액 | Retired 5137만 / Salaried 3137만 / Self-Emp 2557만 / Student 946만 |
| 담당자별 관리 대출 상위 5 | 최지영 404 / 윤재현 403 / 김철수 380 … |
| OVERPAID 대출 지점별 분포 | 강남 64 / 대구 61 / 인천 60 / 부산 56 |
| 최근 30일 disburse된 대출 | 761건 |
| 최근 6개월 loan 거래 월별 | 2,698 → 7,637 → 3,066 → 1,771 → 1,191 → 785 |

지점·상품·세그먼트·담당자·시간축 다각 비교 자연스럽게 성립.

## 슬라이스 커버리지

151 슬라이스 컬럼 중 141개(93%)가 sqlite에 존재. peek_profile 프로파일링 완료
(126 profiles).

## SINGLE_TABLE inheritance 처리

`FixedDepositProduct`, `RecurringDepositProduct`가 `@DiscriminatorValue`로 부모
`SavingsProduct`의 `m_savings_product` 테이블에 저장되는 JPA SINGLE_TABLE inheritance.
tree-sitter 파서가 감지해 자식 entity의 필드가 부모 테이블에 매핑되도록 처리.

## 인덱스

filter/join 컬럼에 인덱스 (loan_status_id, transaction_type_enum, status_enum,
loan_id, client_id, savings_account_id, disbursedon_date, transaction_date).
sql.js-httpvfs HTTP Range 효율을 위해 필수.
