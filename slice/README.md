# Slice — 평가 대상 모집단 + 슬라이스 사양

## 모집단 정의 — 3개 도메인 패키지

Fineract 자연 발생 코드 구조(Java 패키지 단위)로 정의. 임의 컬럼 선별 없이 3개 도메인
패키지에 소속된 모든 entity의 모든 필드.

| 도메인 패키지 | Entity | 필드 (v2) | 한국 금융권 비유 |
|---|---:|---:|---|
| portfolio.loanaccount | 30 | 416 | 대출 원장 |
| portfolio.savings | 18 | 291 | 예금/적금 |
| portfolio.client | 2 | 59 | 고객 마스터 |
| **합계 모집단** | **50** | **766** | "여신·수신·고객" 핵심 |

`signals/peek_orm.json`의 113 entity / 1,358 필드 중 3개 패키지 소속만.

### 파서 v2 반영

v1(정규식) → v2(tree-sitter-java) 파서 교체로 상속 필드까지 정확히 검출.
필드 수 +32% (1029 → 1358). 특히 부모 클래스 상속 필드(id, createdBy, createdDate,
lastModifiedBy, lastModifiedDate 등)가 이전엔 누락됐던 것이 이제 잡힘.

## 왜 3개 도메인 — 서로 다른 mechanism 분포

세 도메인이 서로 다른 archetype 분포를 가져, Render의 세 메커니즘을 분리하여 시험 가능.

| 도메인 | enum-clean | collision-crux ★ | reftable-link | technical | 특징 |
|---|---:|---:|---:|---:|---|
| portfolio.loanaccount | **17** | 15 | 7 | 91 | tier-1 + tier-2 + reftable 다양 |
| portfolio.savings | 0 | **34** | 0 | 42 | **★연결 검증 집중** (enum-clean 0) |
| portfolio.client | 0 | 2 | **8** | 10 | **reftable resolution 집중** |

Loan은 typed enum이 풍부, Savings는 동일 의미가 Integer raw로 풀려 ★연결 검증 필수,
Client는 CodeValue ManyToOne 패턴이 몰림.

## 모집단 archetype 분포

| Archetype | 필드 | 비율 | 의미 |
|---|---:|---:|---|
| **collision-crux ★** | 51 | 6.7% | ★연결 검증 결정 케이스 |
| **enum-clean** | 17 | 2.2% | peek_orm tier-1만으로 정답 |
| **reftable-link** | 15 | 2.0% | m_code_value/r_enum_value resolution |
| lineage | 73 | 9.5% | 산출/누적/이자 계산 |
| trivial | 388 | 50.7% | name+type 자명 |
| **technical** | **143** | **18.7%** | audit/system (v2에서 크게 늘음 — 상속 필드) |
| exclude | 78 | 10.2% | @Embedded composite 등 |
| unclassified | 1 | 0.1% | 수동 검토 |

평가 가능 필드: 688 (exclude 제외). 결정 archetype 합계: 83 (12.1%).

## 슬라이스 — 평가 대상 컬럼 (151개)

### 선정 전략

| Archetype | 슬라이스 / 모집단 | 전략 |
|---|---:|---|
| collision-crux | 51 / 51 (100%) | **결정 케이스, 전수 포함** |
| enum-clean | 17 / 17 (100%) | **결정 케이스, 전수 포함** |
| reftable-link | 15 / 15 (100%) | **결정 케이스, 전수 포함** |
| trivial | 43 / 388 (11%) | 3 도메인 round-robin, NL 자연성 확보 |
| technical | 16 / 143 (11%) | audit floor 케이스 시험 |
| lineage | 8 / 73 (11%) | 파생 컬럼 시험 |

총 **151 슬라이스** (결정 archetype 83개 = 55%, 비결정 68개 = 45%).

### 도메인 분포

```
portfolio.loanaccount   65 (43%)
portfolio.savings       57 (38%)
portfolio.client        29 (19%)
```

모집단 도메인 비율(416:291:59)이 slice에서도 대체로 유지됨.

## 산출 파일

- `columns_candidates.jsonl` — 766 필드 전체 + 자동 archetype
- `columns.jsonl` — 슬라이스 151 컬럼 (평가 대상)
- `slice_summary.json` — 분포 통계

## 자동 분류의 한계

- 자동 분류는 휴리스틱 기반. 도메인 지식 필요한 경계 케이스는 수동 검수 필요
- typed enum 명명이 비표준(예: `LoanTransactionRelationTypeEnum` 접미사)이면 unclassified — 1건 잔존
- Set<X> 컬렉션 필드가 col 없이 lineage로 분류되는 경우 있음 — 골든 작성 시 배제
