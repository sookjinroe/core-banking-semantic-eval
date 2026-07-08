# Render 앱 번들 (Fineract 데이터)

Render 앱(sookjinroe/semantic-layer-enrich-demo-v1)에서 Fineract 데이터로 실험하기 위한 번들.

## 파일

- `signal-store-fineract.js` — `window.SIGNAL_STORE` (133개 컬럼, 19개 테이블, 27개 reftable 그룹)
- `corpus-index-fineract.js` — `window.CORPUS` (2063개 파일)
- `render-meta-fineract.js` — Fineract용 TABLE_LABEL·TABLE_ORDER 오버라이드 (Render 앱의 mock 6개 테이블 하드코딩을 Fineract 24개 테이블로 교체)

## Render 앱에 배포하는 방법

1. 세 파일을 Render 앱 레포의 `data/` 폴더에 복사

   ```
   sookjinroe/semantic-layer-enrich-demo-v1/data/
     ├── signal-store.js               (mock, 기존)
     ├── corpus-index.js               (mock, 기존)
     ├── signal-store-fineract.js      (신규, 복사)
     ├── corpus-index-fineract.js      (신규, 복사)
     └── render-meta-fineract.js       (신규, 복사)
   ```

2. `index.html`의 script 태그 교체 (mock → fineract):

   ```html
   <!-- 변경 전 (mock 로드) -->
   <script src="data/signal-store.js"></script>
   <script src="data/corpus-index.js"></script>
   <script src="js/render-meta.js"></script>

   <!-- 변경 후 (Fineract 모드) -->
   <script src="data/signal-store-fineract.js"></script>
   <script src="data/corpus-index-fineract.js"></script>
   <script src="js/render-meta.js"></script>
   <script src="data/render-meta-fineract.js"></script>   <!-- 오버라이드, render-meta.js 뒤에 -->
   ```

   `render-meta-fineract.js`는 render-meta.js가 로드된 뒤 실행되어 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 교체.

3. 앱 열어서 개별 컬럼 실행 (기존 UI 그대로).

## ⚠ CORPUS 크기 주의

`corpus-index-fineract.js`는 **13.3MB**로 mock 대비 매우 큼 (mock은 8.6KB). Fineract 4개 모듈의
2,063 파일이 모두 포함됨. 다음 사항 확인 필요:

- 첫 로딩 시간: 브라우저가 13MB JS 파일 파싱하는 데 몇 초 걸릴 수 있음
- GitHub Pages는 gzip 자동 압축 (실제 전송량 3~4MB 예상)
- grep_code 검색은 파일마다 순회하므로 dig 도구가 느려질 수 있음

만약 성능 이슈가 있으면 corpus를 3 도메인 관련 파일만 필터링하는 옵션 추가 가능 (향후).

## 재생성

원본 재료(peek_orm, peek_profile 등)가 갱신되면 이 번들도 재생성 필요:

```bash
python3 scripts/build_render_bundle.py
```

## 스키마

두 번들 모두 Render 앱의 build/build_signals.py, build/build_corpus.py가 생성하는 mock 번들과
동일한 스키마. Render 앱 로직 수정 불필요 (render-meta의 TABLE_ORDER만 오버라이드).

## 컬럼 archetype 매핑

우리 archetype → Render 앱 archetype:

| 우리 | Render 앱 |
|---|---|
| collision-crux | 충돌-크럭스 |
| enum-clean | enum-clean |
| reftable-link | reftable-link |
| lineage | lineage |
| trivial | 자명 |
| technical | 자명 |
| unclassified | floor |

## orm.enum 처리 원칙

Render의 `orm.enum`은 값→라벨 실제 매핑을 담는 슬롯. 우리는 `converter` class 이름만
갖고 있고 실제 매핑은 자바 코드(`LoanStatus.java` 등)에 있음. 원칙적 결정으로 tier-1의
`orm.enum`은 항상 `null`로 두고, `annotations`에 `@Convert(LoanStatusConverter)`만 노출.
Render는 tier-2 dig로 실제 매핑을 발견해 ★연결 검증 실행.

## reftable 처리 원칙

Fineract의 `r_enum_value` 데이터를 `reftable_dump`(전역)에 담음. 컬럼→그룹 연결은
`reftable_dump`에 선언 안 함(present:false) — Render가 값집합 매칭이나 코드 dig로
직접 이어야 함. mock 앱과 동일한 원칙.

## 슬라이스 컬럼 필터링

슬라이스 151 컬럼 중 실제 DB 컬럼이 있는 133개만 SIGNAL_STORE에 포함.
나머지는 `Set<X>` 같은 컬렉션 필드로 실제 DB 컬럼이 없어 평가 대상 아님.
