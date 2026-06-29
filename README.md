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

## 진행 단계

### 1단계 (완료) — 골격 + 정적 추출

샌드박스(Java만, Docker 없음)에서 가능한 범위. PostgreSQL 부팅 없이 Liquibase XML을
정적 파싱해 reference data 전체를 확보한다.

```bash
# Fineract 원본 받기 (depth=1)
bash scripts/fetch_fineract.sh

# r_enum_value 시드 정적 추출 → signals/peek_reftable.json
python3 scripts/extract_reftable.py \
  fineract-source/fineract-provider/src/main/resources/db/changelog \
  signals/peek_reftable.json
```

현 산출: 27개 그룹 / 189 행. 그룹과 컬럼의 연결은 미선언 — Render가 dig로 풀어야 함.

### 2단계 (다음) — 코드 슬라이스 (corpus/)

Tier A(도메인 핵심) + Tier B(공유 권위) ≈ 1,200~1,800 자바 파일 + Liquibase XML 263개.
fineract-core, fineract-loan, fineract-savings, fineract-accounting, fineract-charge,
fineract-tax 모듈 일부.

### 3단계 (로컬) — 부팅 + 운영 데이터 시드

샌드박스 한계 (메모리 4GB, Docker 없음)로 로컬 환경 필요. docker-compose.yml로 정의됨.

```bash
docker compose up -d                # PostgreSQL + Fineract 부팅
bash scripts/fetch_seed_data.sh     # API 호출로 운영 데이터 시드 (작성 예정)
```

### 4단계 — peek_orm·peek_profile 빌드

JPA Entity 정적 파싱 + 실제 DB 프로파일링.

### 5단계 — 슬라이스 + 골든 작성

컬럼 100~120, NL question 50~60, gold SQL 1:1. archetype별 균형 배분.

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
