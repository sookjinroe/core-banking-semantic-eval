# Slice — 평가 대상 모집단 + 슬라이스 사양

## 모집단 정의 — 3개 도메인 패키지

평가 대상의 *모집단*은 Fineract의 자연 발생 코드 구조(Java 패키지 단위)로 정의한다.
임의 컬럼 선별 없이 *3개 도메인 패키지*에 속하는 모든 entity의 모든 필드.

| 도메인 패키지 | Entity | 필드 | 한국 금융권 비유 |
|---|---:|---:|---|
| portfolio.loanaccount | 30 | 326 | 대출 원장 |
| portfolio.savings | 18 | 189 | 예금/적금 |
| portfolio.client | 2 | 49 | 고객 마스터 |
| **합계 모집단** | **50** | **564** | "여신·수신·고객" 핵심 |

`signals/peek_orm.json`의 114 entity / 1,029 필드 중 위 3개 패키지에 *자연 소속*된
필드만. 누가 추렸는지 의문이 안 생기는 *코드 구조 정의 그대로*의 경계.

### 왜 이 3개 도메인인가

세 도메인이 *서로 다른 archetype 분포*를 가져, Render의 세 메커니즘
(tier-1 enum / tier-2 dig + ★연결 검증 / reftable resolution)을 *분리하여* 시험할 수 있다.

| 도메인 | enum-clean | collision-crux ★ | reftable-link | 의미 |
|---|---:|---:|---:|---|
| portfolio.loanaccount | **17** | 14 | 7 | tier-1 + tier-2 + reftable 모두 풍부 |
| portfolio.savings | 0 | **22** | 0 | **tier-2 dig + ★연결 검증 집중** |
| portfolio.client | 0 | 2 | **8** | **reftable resolution 집중** |

Loan은 typed enum이 풍부(LoanStatus, LoanSubStatus 등), Savings는 *동일 의미가 Integer raw*로
풀려 ★연결 검증 필수, Client는 *CodeValue ManyToOne* 패턴이 몰려 m_code_value resolution.
한 도메인 우연이 아니라 *세 도메인 모두에서 메커니즘이 발동*함을 보일 수 있다.

또한 cross-domain 조인 자연 자리 (client → loan, client → savings)가 있어 NL2SQL
cross-entity 질문 시험 가능.

### 모집단 archetype 분포

| Archetype | 필드 | 비율 | 의미 |
|---|---:|---:|---|
| **collision-crux ★** | 38 | 6.7% | ★연결 검증 결정 케이스 |
| **enum-clean** | 17 | 3.0% | peek_orm tier-1만으로 정답 |
| **reftable-link** | 15 | 2.7% | m_code_value/r_enum_value resolution |
| lineage | 77 | 13.7% | 산출/누적/이자 계산 |
| trivial | 341 | 60.5% | name+type 자명 |
| technical | 8 | 1.4% | audit/system (floor) |
| exclude | 67 | 11.9% | @Embedded composite, PK 등 평가 단위 X |
| unclassified | 1 | 0.2% | 수동 검토 필요 |

평가 가능 필드: **497** (exclude 제외). 결정 archetype 합계: **70** (12.4%).

## 슬라이스 — 평가 대상 컬럼 (101개)

`columns.jsonl`. 모집단 497 평가가능 필드 중 *어떤 컬럼에 골든을 작성할지*의 선정.

### 선정 전략

| Archetype | 슬라이스 / 모집단 | 비율 | 전략 |
|---|---:|---:|---|
| collision-crux | 38 / 38 | 100% | **결정 케이스, 전수 포함** |
| enum-clean | 17 / 17 | 100% | **결정 케이스, 전수 포함** |
| reftable-link | 15 / 15 | 100% | **결정 케이스, 전수 포함** |
| trivial | 24 / 341 | 7% | 모집단 비율 stratified, 도메인 round-robin |
| lineage | 5 / 77 | 6.5% | 모집단 비율 stratified |
| technical | 1 / 8 | 12.5% | floor 확인용 소수 |

총 **101 슬라이스** (모집단 497의 20.3%).

### 도메인 분포 (자연스러운 결과)

```
portfolio.loanaccount      49
portfolio.savings          33
portfolio.client           19
```

도메인별 모집단 비율(326:189:49)이 슬라이스에서도 대체로 유지됨 — 결정 archetype 전수
포함 + trivial stratified의 자연 결과.

## 두 평가 슬라이스의 분리 — 향후

지금 만든 `columns.jsonl`은 **Description 슬라이스**: "Render가 어떤 컬럼에 description을
잘 다는가"를 시험. 모집단의 stratified representative.

**NL2SQL 슬라이스**는 별도로 작성된 NL question에서 *역으로* 정의됨 — 자연 비즈니스
질문이 거치는 컬럼만. 이건 NL question 작성 단계에서 자동으로 산출.

두 슬라이스의 *교집합*에 결정 archetype이 많이 들어가게 되며, 거기가 Render와 NL2SQL
두 능력을 함께 시험하는 sharp evaluation 자리.

## 산출 파일

- `columns_candidates.jsonl` — 모집단 564 필드 전체 + 자동 archetype
- `columns.jsonl` — 슬라이스 101 컬럼 (평가 대상)
- `slice_summary.json` — 분포 통계 (모집단·도메인·archetype 매트릭스)

## 자동 분류의 한계

자동 분류는 휴리스틱 기반이라 오분류 가능. 특히:
- 일부 lineage 케이스가 trivial로 잘못 분류될 수 있음
- TypedEnumTokens 정규식이 놓치는 *비표준 enum 명명*은 unclassified
- 도메인 지식이 필요한 경계 케이스(`is_charged_off`가 trivial인지 lineage인지)

골든 작성 시 수동 검토에서 archetype 재분류가 가능. `columns.jsonl`을 직접 편집하거나
`columns_curated.jsonl`로 분리.
