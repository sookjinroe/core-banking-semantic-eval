# Slice — 평가 대상 컬럼 사양

`signals/peek_orm.json`(114 entity / 1,029 필드)에서 7개 핵심 테이블 / 292 필드를 추리고,
그 안에서 **71개 컬럼**을 평가 슬라이스로 자동 선정.

## 산출 파일

- `columns_candidates.jsonl` — 7개 테이블의 모든 컬럼 (292개) + 자동 archetype + 선정 여부
- `columns.jsonl` — 추천 슬라이스 (71개, 평가 대상)
- `slice_summary.json` — archetype × 테이블 분포 통계

## 7개 핵심 테이블

| 테이블 | Entity | 컬럼 수 | NL2SQL 자연성 | 슬라이스 |
|---|---|---:|---|---:|
| m_loan | Loan | 82 | 매우 높음 | 24 |
| m_savings_account | SavingsAccount | 55 | 매우 높음 | 13 |
| m_client | Client | 43 | 높음 | 13 |
| m_loan_transaction | LoanTransaction | 28 | 매우 높음 | 5 |
| m_savings_account_transaction | SavingsAccountTransaction | 25 | 매우 높음 | 6 |
| m_loan_repayment_schedule | LoanRepaymentScheduleInstallment | 39 | 높음 | 4 |
| acc_gl_journal_entry | JournalEntry | 20 | 중간 | 6 |

## Archetype 정의 (학습 사이트 CH4-3 기준)

| Archetype | 의미 | Render 시험 능력 | 슬라이스 |
|---|---|---|---:|
| **collision-crux ★** | Integer + status/type column. 같은 코드값이 여러 entity에서 다른 권위 enum을 가짐 | ★연결 검증 (ORM 필드 entity 소속으로 권위 가리기) | 14 |
| **enum-clean** | @Convert converter 또는 typed enum (Fineract는 typed-no-converter가 다수) | peek_orm tier-1만으로 정답. control 비교군 | 6 |
| **reftable-link** | @ManyToOne CodeValue. m_code_value/r_enum_value 그룹 연결 미선언 | reftable resolution + 그룹 매칭 | 10 |
| **lineage** | 산출/누적/이자 계산 컬럼 (accrued_till, charged_off_on_date 등) | 파생식 추적, lineage 신호 활용 | 12 |
| **trivial** | name+type 자명. amount/date/name/balance/flag 류 | NL2SQL 자연성·일반 자명 confirm | 28 |
| **technical** | audit/system 컬럼 (created_date 등) | floor + LOW 권한 인정 (정직한 회수 불가) | 1 |

총 **71개** (★ 결정 archetype 30개 = 42%, 일반 archetype 41개 = 58%).

## ★ 결정 케이스 핵심 11개 (selection_priority=1)

특히 sharp한 ★연결 검증/enum-clean 비교 케이스:

```
m_savings_account.status_enum            Integer     [충돌-크럭스]
m_savings_account.sub_status_enum        Integer     [충돌-크럭스]
m_savings_account.account_type_enum      Integer     [충돌-크럭스]
m_savings_account.deposit_type_enum      Integer     [충돌-크럭스]
m_client.status_enum                     Integer     [충돌-크럭스 — savings와 컬럼명 충돌]
m_savings_account_transaction.transaction_type_enum  Integer     [충돌-크럭스]

m_loan.loan_status_id                    LoanStatus  [enum-clean — @Converter]
m_loan.loan_sub_status_id                LoanSubStatus
m_loan.loan_type_enum                    AccountType
m_loan_transaction.transaction_type_enum LoanTransactionType  [enum-clean — typed]
```

### 결정적 비교 — 같은 의미 vs 다른 ORM 깊이

- `m_loan_transaction.transaction_type_enum` (LoanTransactionType typed) → peek_orm으로 *바로* 정답
- `m_savings_account_transaction.transaction_type_enum` (Integer) → tier-2 dig 필수, reftable
  그룹 4개(`transaction_type_enum`/`loan_transaction_type_enum`/`savings_transaction_type_enum`/
  `client_transaction_type_enum`) 중 어느 것이 권위인지 ★연결 검증

이 *한 쌍의 컬럼*이 Render 시험의 single best evidence가 됨. baseline LLM은 둘 다 못 가리고,
Render는 둘 다 가린다면 시험 통과.

## 자동 분류의 한계 — 수동 검토 시 봐야 할 것

- 자동 분류는 **휴리스틱 기반**이라 일부 오분류 가능. 특히 `lineage` 12개 중 도메인 지식이
  필요한 것 (`is_charged_off`, `accrued_till`)은 정말 lineage인지 trivial인지 경계 케이스.
- `trivial` 28개 중 NL2SQL 질문에 자연스럽게 등장하지 않는 컬럼이 있을 수 있음 — 그 경우 빼고
  다른 trivial로 대체.
- `m_charge` 테이블이 peek_orm에 없음 — Entity 클래스명이 다를 수 있어 보강 필요.

수동 검토는 `columns.jsonl`을 직접 편집하거나, 별도 `columns_curated.jsonl`로 분리해 작업.

## 다음

- 슬라이스 71개에 대해 NL question 작성 (제안: 50~60문항)
- gold description 작성 (코드만 보고, 외부 자료 미참조)
- gold SQL 작성 (question 의도와 분리된 단계에서 작성, 실행 검증)
- 행 데이터 확보(③) 후 peek_profile 빌드
- baseline LLM vs Render description 비교 실행
