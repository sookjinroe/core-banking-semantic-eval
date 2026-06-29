# Fineract source slice (Render tier-2 corpus)

본 디렉터리는 Apache Fineract 소스의 일부를 포함한다.
원본 저작권: Apache Software Foundation, Apache License 2.0.

## 슬라이스 범위

- `fineract-core/src/main/java/` — 핵심 도메인 모델, 공유 infrastructure
- `fineract-loan/src/main/java/` — 대출 도메인 (Loan, LoanTransaction, LoanRepaymentSchedule …)
- `fineract-savings/src/main/java/` — 예금 도메인 (SavingsAccount, SavingsAccountTransaction …)
- `fineract-accounting/src/main/java/` — 회계 (JournalEntry, GLAccount …)
- `fineract-provider/src/main/resources/db/changelog/` — Liquibase 스키마/시드 changelog 전체

## 제외된 모듈 (자기충족 차단)

- `fineract-provider/src/main/java/` — 컨트롤러·REST API 레이어. @Schema description이 부분적으로
  골든의 leak 위험.
- `fineract-e2e-tests-*` — 테스트가 정답을 직접 assert (`assert status=300`)할 수 있음.
- `fineract-client*` — OpenAPI 자동 생성 코드. 권위 없는 복사본.
- `fineract-batch`, `fineract-investor`, `fineract-report` 등 — 1차 슬라이스 범위 밖.

## 라이선스

- 원본 Apache License 2.0: `LICENSE_FINERACT`
- 원본 NOTICE: `NOTICE_FINERACT`

원본 출처: https://github.com/apache/fineract
