# core-banking-semantic-eval

오픈소스 코어뱅킹 시스템(Apache Fineract) 위에서 **시맨틱 레이어 증강 에이전트(Render)**와
**NL2SQL 에이전트**의 능력을 검증하기 위한 외부 평가 번들.

## 목적

- *Render*: 컬럼 description을 다출처 신호(JPA ORM, 서비스 로직, reftable, 데이터 프로파일)에서
  합성하는 능력 — 특히 **연결 검증(같은 값 다른 뜻 환경에서 권위 가리기)** 능력
- *NL2SQL*: 충분히 구축된 시맨틱 레이어를 소비해 자연어 질문을 SQL로 변환하는 능력

자체 mock과 BIRD가 시험하지 못하는 *애플리케이션 소스코드의 권위 신호*를 자연 발생 환경에서
시험한다. self-fulfilling validation 차단을 위해 입력(자연 발생 Fineract 코드)과 골든
(별도 작성)이 분리되어 있다.

## 왜 Apache Fineract인가

- 오픈소스 코어뱅킹 플랫폼 (Apache 2.0). 도메인이 한국 금융권 mock과 1:1 연속성
- 20년 가까이 자라난 자연 발생물 — 의도적으로 심지 않아도 attribution ambiguity·동명 컬럼 등이
  실재 (Loan/Savings/Client 세 status enum에서 정수 700·800이 서로 다른 뜻으로 충돌하는 등)
- JPA ORM + Liquibase + r_enum_value 구조가 Render의 신호원(peek_orm·peek_reftable·grep_code)
  형태와 정합. Render 도구가 상정한 환경과 일치.
- **컬럼 description sparsity가 default state** — Liquibase remarks 7건, Javadoc 3.5%.
  baseline LLM이 retrieval로 정답을 우회할 자료가 없어, 평가가 sharp하게 갈림.

## 디렉터리 구조

```
slice/      평가 대상 슬라이스 정의 (컬럼·테이블·코퍼스 파일 목록)
signals/    tier-1 신호 store (peek_orm/peek_profile/peek_reftable 산출)
corpus/     tier-2 코드 코퍼스 (Render 도구 grep_code/read_file/find_refs 대상)
eval/       NL question + gold SQL + gold description (정답 격리)
data/       운영 데이터 dump (운영 데이터는 .gitignore, reference만 commit)
scripts/    빌드/추출 스크립트
```

## 진행 단계 (3-track)

평가 환경 구축은 세 자원의 확보 순서로 진행한다.

### ① 재료 확보 (완료)

Render가 읽을 *원본 신호* + Render dig 대상 코드 코퍼스.

```bash
bash scripts/fetch_fineract.sh                    # apache/fineract depth=1
python3 scripts/extract_reftable.py ...           # → signals/peek_reftable.json
python3 scripts/extract_orm.py ...                # → signals/peek_orm.json
```

산출 (push 완료):
- `signals/peek_reftable.json` — 27 그룹 / 189 행 (Liquibase 정적 추출)
- `signals/peek_orm.json` — 113 entity / 1,358 필드 (tree-sitter-java 파싱, 상속 필드 포함)
- `corpus/` — 4 모듈 / 2,063 파일 / 20MB (Render tier-2 dig 대상)

### ② 슬라이스 (완료)

평가 대상 모집단 + 슬라이스 결정. 자세한 내용은 `slice/README.md`.

```bash
python3 scripts/build_slice.py                    # → slice/columns.jsonl
```

- 모집단: 3 도메인 패키지 (portfolio.loanaccount + portfolio.savings + portfolio.client) = 50 entity / 564 필드
- 슬라이스: 101 컬럼 (결정 archetype 70개 전수 + 비결정 31개 stratified)

### ③ 행 데이터 확보 (파일럿 완료)

Fineract Liquibase XML을 정적 파싱해 SQLite 데이터베이스 생성 (Docker/PostgreSQL 불필요).
브라우저에서 sql.js-httpvfs로 HTTP Range 부분 로딩 가능 (GitHub Pages 정적 호스팅).

```bash
python3 scripts/build_sqlite.py --config pilot     # 소규모 (~1MB)
python3 scripts/build_sqlite.py --config medium    # 중규모 (~10MB)
python3 scripts/build_peek_profile.py              # → signals/peek_profile.json
```

파일럿 산출 (push 완료):
- `data/fineract_3domain.sqlite` — 47 테이블, 0.9MB
  - Fineract initial data 417행 (r_enum_value 189 포함)
  - Client 100 / Loan 300 / Savings 150 / LoanTx 1,500 / SavingsTx 800
  - ★ 결정 케이스 자연 발생: loan_status=700(11), savings_status=700(11)/800(4)
- `signals/peek_profile.json` — 슬라이스 컬럼 프로파일 58개
### ④ 골든 + 평가 (미시작)

```bash
# 골든 작성: 코드만 보고, Render 도구는 미참조
python3 scripts/author_gold_description.py        # → eval/gold_description.jsonl
python3 scripts/author_nl_questions.py            # → eval/questions.jsonl
python3 scripts/author_gold_sql.py                # → eval/gold_sql.jsonl

# 평가: baseline vs Render
python3 scripts/run_baseline.py
python3 scripts/run_render.py
python3 scripts/compare.py
```
## 자기충족 차단

세 가지 leak 위험에 대해 명시적 분리:

1. *Description 골든* — 코드를 보고 작성하되, Render 도구·프롬프트는 안 봄.
   외부 위키·partner 문서 미참조.
2. *NL question* — SQL 의도 없이 비즈니스 시나리오만 보고 작성.
3. *Gold SQL* — question 의도와 분리된 단계에서 코드 보고 작성, 실행 검증으로 sanity check.

## 라이선스

본 레포의 골든·평가셋·스크립트는 MIT (별도 LICENSE 파일 참조).
`corpus/`에 포함된 Apache Fineract 소스 슬라이스는 원저작권자(Apache Software Foundation)의
Apache License 2.0을 따른다. 원본 NOTICE·LICENSE는 corpus/LICENSE_FINERACT 및 corpus/NOTICE에
포함.

## 관련

- [Render v2 (semantic-layer-enrich-demo-v1)](https://github.com/sookjinroe/semantic-layer-enrich-demo-v1)
- [NL2SQL Agent](https://github.com/sookjinroe/NL2SQL-Agent)
- [학습 사이트 semantic-layer-study](https://github.com/sookjinroe/semantic-layer-study)
- [BIRD 2-domain eval (기존 외부 검증)](https://github.com/sookjinroe/bird-2domain-eval)
