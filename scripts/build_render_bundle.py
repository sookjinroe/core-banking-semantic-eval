#!/usr/bin/env python3
"""
Fineract 재료(peek_orm, peek_reftable, peek_profile, corpus, slice)를
Render 앱(sookjinroe/semantic-layer-enrich-demo-v1)이 소비할 수 있는
SIGNAL_STORE + CORPUS bundle 형식으로 변환한다.

산출:
  data/render-bundle/signal-store-fineract.js  (window.SIGNAL_STORE)
  data/render-bundle/corpus-index-fineract.js  (window.CORPUS)
  data/render-bundle/README.md                 (Render 앱에 배포하는 방법)

사용법:
  python3 scripts/build_render_bundle.py

Render 앱에서 사용:
  두 .js 파일을 Render 앱의 data/ 폴더에 복사 후, index.html의 mock 로드를
  Fineract 로드로 교체 (README.md 참조).
"""
import argparse, json, sqlite3
from pathlib import Path


# ── 우리 archetype → Render 앱 archetype 매핑 ──────────────────────────
ARCHETYPE_MAP = {
    "collision-crux":  "충돌-크럭스",
    "enum-clean":      "enum-clean",
    "reftable-link":   "reftable-link",
    "lineage":         "lineage",
    "trivial":         "자명",
    "technical":       "자명",       # audit는 자명에 가까움
    "unclassified":    "floor",       # 미분류 = 근거 없음
}


# ── schema 슬롯: sqlite에서 실제 컬럼 타입 조회 ────────────────────────
def load_sqlite_schema(sqlite_path: str) -> dict:
    """sqlite에서 모든 테이블의 컬럼 metadata 조회.
       return: {table: {col_name: {type, notnull, pk}}}"""
    conn = sqlite3.connect(sqlite_path)
    result = {}
    for tbl_name, in conn.execute("SELECT name FROM sqlite_master WHERE type='table'"):
        cols = {}
        for row in conn.execute(f'PRAGMA table_info("{tbl_name}")'):
            _, name, typ, notnull, _, pk = row
            cols[name] = {"type": typ or "TEXT", "notnull": bool(notnull), "pk": bool(pk)}
        result[tbl_name] = cols
    conn.close()
    return result


# ── orm 슬롯 변환 ────────────────────────────────────────────────────
def build_orm_slot(field: dict) -> dict:
    """peek_orm의 field → Render orm 스키마."""
    if not field:
        return {"present": False}

    # annotations: 우리가 감지한 주요 어노테이션을 문자열 목록으로
    annotations = []
    if field.get("converter"):
        annotations.append(f'@Convert({field["converter"]})')
    if field.get("enumerated"):
        annotations.append(f'@Enumerated({field["enumerated"]})')
    if field.get("relationship"):
        annotations.append(f'@{field["relationship"]}')

    return {
        "present": True,
        "field": field["java_field"],
        "java_type": field["java_type"],
        "is_id": bool(field.get("is_id")),
        "enum": None,   # 실제 매핑은 코드에 있음 (dig로 발견) — 원칙적 결정
        "annotations": annotations,
        "format_pattern": None,
        "join_column": (field.get("join_column") or {}).get("name") if field.get("join_column") else None,
        "deprecated": False,
    }


# ── profile 슬롯 변환 ─────────────────────────────────────────────────
def build_profile_slot(profile: dict) -> dict:
    """peek_profile → Render profile 스키마."""
    if not profile:
        return {"present": False}

    dv = profile.get("distinct_values") or []
    tv = profile.get("top_values") or []
    row_count = profile.get("row_count", 0) or 0

    # top_values: {값: 비율}
    top_values = {}
    src = dv if dv else tv
    for item in src[:10]:
        if isinstance(item, dict) and "value" in item and "count" in item and row_count > 0:
            top_values[str(item["value"])] = round(item["count"] / row_count, 4)

    # distinct_sample: 값 목록
    distinct_sample = []
    if dv:
        distinct_sample = [item["value"] for item in dv[:20]]

    return {
        "present": True,
        "cardinality": profile.get("distinct_count", 0),
        "distinct_sample": distinct_sample,
        "inferred_format": None,  # 우리는 이 추론 안 함
        "null_rate": profile.get("null_rate", 0) or 0,
        "top_values": top_values,
    }


# ── reftable_dump 조립 ───────────────────────────────────────────────
def build_reftable_dump(peek_reftable: dict) -> dict:
    """peek_reftable → Render reftable_dump 스키마.
       {GROUP: {"code": "label"}}"""
    dump = {}
    for group_name, rows in peek_reftable.get("groups", {}).items():
        dump[group_name] = {
            str(row.get("enum_id")): row.get("enum_message_property") or row.get("enum_value") or ""
            for row in rows
        }
    return dump


def augment_dump_with_code_value(dump: dict, sqlite_path: str) -> dict:
    """sqlite의 m_code + m_code_value를 reftable_dump에 통합.
       Fineract의 r_enum_value(정적 XML)와 별개로, m_code_value는 우리 시드 및
       Fineract 초기 데이터가 담기는 DB reference. Render가 CodeValue FK
       (client_type_cv_id 등)의 라벨을 조회할 수 있게 노출.
       그룹명: m_code.code_name, 키: m_code_value.id, 값: m_code_value.code_value"""
    import sqlite3
    conn = sqlite3.connect(sqlite_path)
    try:
        q = ("SELECT c.code_name, cv.id, cv.code_value "
             "FROM m_code_value cv JOIN m_code c ON cv.code_id = c.id "
             "WHERE cv.is_active = 1")
        added = 0
        for code_name, cv_id, cv_value in conn.execute(q):
            if not code_name or not cv_value: continue
            dump.setdefault(code_name, {})[str(cv_id)] = cv_value
            added += 1
        print(f"  [i] m_code_value 통합: {added}개 라벨을 reftable_dump에 추가")
    except sqlite3.OperationalError as e:
        print(f"  [!] m_code_value 조회 실패: {e}")
    finally:
        conn.close()
    return dump


# ── column ID 조립 ────────────────────────────────────────────────────
def build_signal_store(slice_columns, peek_orm, peek_profile, peek_reftable,
                       sqlite_schema) -> dict:
    """SIGNAL_STORE 조립."""
    # peek_orm entity 조회 인덱스 (table_name → entity)
    ent_by_table = {}
    for ent in peek_orm.get("entities", []):
        ent_by_table.setdefault(ent["table_name"], []).append(ent)

    # slice 컬럼 → field 인덱스
    def find_field(table, col_name):
        for ent in ent_by_table.get(table, []):
            for f in ent["fields"]:
                col_info = f.get("column") or f.get("join_column")
                if col_info and col_info.get("name") == col_name:
                    return f, ent
        return None, None

    columns = {}
    profiles = peek_profile.get("profiles", {}) if peek_profile else {}

    for sc in slice_columns:
        table = sc["table"]
        col_name = sc["column"]
        if not col_name:
            continue

        cid = f"{table}.{col_name}"

        # schema: sqlite 실제 metadata 우선, 없으면 slice metadata
        sq_col = sqlite_schema.get(table, {}).get(col_name)
        if sq_col:
            schema = {
                "table": table,
                "name": col_name,
                "type": sq_col["type"],
                "nullable": not sq_col["notnull"],
                "pk": sq_col["pk"],
                "fk": None,  # FK 정보는 별도 파싱 필요, 우선 null
            }
        else:
            # sqlite에 없는 테이블 (missing 10 컬럼)
            schema = {
                "table": table,
                "name": col_name,
                "type": "TEXT",  # unknown
                "nullable": True,
                "pk": False,
                "fk": None,
            }

        # orm
        field, _ = find_field(table, col_name)
        orm_slot = build_orm_slot(field)

        # profile: peek_profile에서 조회
        profile_slot = build_profile_slot(profiles.get(cid))

        # archetype 매핑
        our_arch = sc.get("archetype", "unclassified")
        render_arch = ARCHETYPE_MAP.get(our_arch, "자명")

        columns[cid] = {
            "archetype": render_arch,
            "schema": schema,
            "orm": orm_slot,
            "reftable": {"present": False},  # 컬럼→그룹 연결 미선언, dig 대상
            "profile": profile_slot,
        }

    reftable_dump = build_reftable_dump(peek_reftable) if peek_reftable else {}
    # sqlite m_code_value로 dump 증강 (CodeValue FK 라벨 조회 가능하게)
    sqlite_path = str(Path(__file__).resolve().parents[1] / "data/fineract_3domain.sqlite")
    augment_dump_with_code_value(reftable_dump, sqlite_path)

    return {"columns": columns, "reftable_dump": reftable_dump}


# ── CORPUS 조립 ───────────────────────────────────────────────────────
def build_corpus(corpus_root: Path, include_extensions=(".java", ".xml", ".sql")) -> dict:
    """corpus/ → {path: content} dict."""
    corpus = {}
    for f in corpus_root.rglob("*"):
        if f.is_file() and f.suffix in include_extensions:
            try:
                # 상대 경로 (corpus/... 형태로 유지, Render 앱과 일치)
                rel = f"corpus/{f.relative_to(corpus_root)}"
                corpus[rel] = f.read_text(encoding="utf-8", errors="replace")
            except Exception as e:
                print(f"[warn] {f}: {e}")
    return corpus


# ── render-meta 오버라이드 생성 ──────────────────────────────────────
# Render 앱의 render-meta.js는 mock의 6개 테이블만 하드코딩.
# Fineract용 24개 테이블을 별도 render-meta 오버라이드로 제공.

TABLE_LABEL_KO = {
    # portfolio.loanaccount
    "m_loan": "대출",
    "m_loan_transaction": "대출 거래",
    "m_loan_charge": "대출 수수료",
    "m_loan_transaction_relation": "거래 관계",
    "m_loan_recalculation_details": "이자 재계산",
    "m_loan_status_change_history": "대출 상태 이력",
    "m_loan_term_variations": "기간 변경",
    "m_loan_reschedule_request": "재조정 요청",
    "m_loan_reage_parameter": "재적용 파라미터",
    "m_loan_reamortization_parameter": "재상환 파라미터",
    "m_loan_credit_allocation_rule": "여신 배분 규칙",
    "m_loan_payment_allocation_rule": "상환 배분 규칙",
    "m_loan_amortization_allocation_mapping": "상환 매핑",
    "glim_accounts": "GLIM 계좌",
    "gsim_accounts": "GSIM 계좌",
    # portfolio.savings
    "m_savings_account": "예금 계좌",
    "m_savings_account_transaction": "예금 거래",
    "m_savings_account_charge": "예금 수수료",
    "m_savings_product": "예금 상품",
    "m_deposit_account_term_and_preclosure": "정기예금 기간·해지",
    "m_deposit_account_on_hold_transaction": "동결 거래",
    "m_deposit_account_interest_incentives": "이자 인센티브",
    # portfolio.client
    "m_client": "고객",
    "m_client_identifier": "고객 식별정보",
}

def build_render_meta_override(tables: set) -> str:
    """render-meta.js의 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 오버라이드."""
    # 도메인 그룹으로 정렬 (loanaccount → savings → client 순)
    domain_order = {
        "loan": 1, "client": 2, "savings": 3, "deposit": 3,
        "glim": 1, "gsim": 1,
    }
    def sort_key(t):
        for k, v in domain_order.items():
            if k in t: return (v, t)
        return (9, t)
    ordered = sorted(tables, key=sort_key)

    labels_js = ",\n    ".join(
        f'"{t}": "{TABLE_LABEL_KO.get(t, t)}"' for t in ordered
    )
    order_js = ", ".join(f'"{t}"' for t in ordered)

    return f"""// 생성됨: scripts/build_render_bundle.py — 직접 수정 금지.
// render-meta.js의 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 오버라이드.
// index.html에서 render-meta.js 뒤에 이 파일을 로드하면 됨.
(function() {{
  if (!window.RenderMeta) return;
  const FINERACT_TABLE_LABEL = {{
    {labels_js}
  }};
  const FINERACT_TABLE_ORDER = [{order_js}];
  // Render 앱의 원본 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 교체
  Object.assign(window.RenderMeta.TABLE_LABEL, FINERACT_TABLE_LABEL);
  window.RenderMeta.TABLE_ORDER.length = 0;
  window.RenderMeta.TABLE_ORDER.push(...FINERACT_TABLE_ORDER);
}})();
"""
def write_js_bundle(data: dict, var_name: str, output: Path, header: str = ""):
    """Python dict → window.<VAR_NAME> = {...} JS 파일."""
    with output.open("w", encoding="utf-8") as f:
        f.write(f"// {header}\n" if header else "")
        f.write(f"window.{var_name} = ")
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write(";\n")


def write_readme(output: Path, stats: dict):
    output.write_text(f"""# Render 앱 번들 (Fineract 데이터)

Render 앱(sookjinroe/semantic-layer-enrich-demo-v1)에서 Fineract 데이터로 실험하기 위한 번들.

## 파일

- `signal-store-fineract.js` — `window.SIGNAL_STORE` ({stats['columns']}개 컬럼, {stats['tables']}개 테이블, {stats['reftable_groups']}개 reftable 그룹)
- `corpus-index-fineract.js` — `window.CORPUS` ({stats['corpus_files']}개 파일)
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

슬라이스 151 컬럼 중 실제 DB 컬럼이 있는 {stats['columns']}개만 SIGNAL_STORE에 포함.
나머지는 `Set<X>` 같은 컬렉션 필드로 실제 DB 컬럼이 없어 평가 대상 아님.
""", encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo-root", default=".")
    ap.add_argument("--output-dir", default="data/render-bundle")
    args = ap.parse_args()

    root = Path(args.repo_root)
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    # 재료 로드
    print("[1/5] 재료 로드...")
    slice_columns = [json.loads(l) for l in (root / "slice/columns.jsonl").open()]
    peek_orm = json.load((root / "signals/peek_orm.json").open())
    peek_reftable = json.load((root / "signals/peek_reftable.json").open())
    peek_profile = json.load((root / "signals/peek_profile.json").open())
    print(f"  slice: {len(slice_columns)} 컬럼")
    print(f"  peek_orm: {peek_orm['entity_count']} entity / {peek_orm['field_count']} 필드")
    print(f"  peek_reftable: {len(peek_reftable.get('groups', {}))} 그룹")
    print(f"  peek_profile: {len(peek_profile.get('profiles', {}))} 프로파일")

    # sqlite schema 로드
    print("\n[2/5] sqlite schema 조회...")
    sqlite_schema = load_sqlite_schema(str(root / "data/fineract_3domain.sqlite"))
    print(f"  sqlite 테이블: {len(sqlite_schema)}")

    # SIGNAL_STORE 조립
    print("\n[3/5] SIGNAL_STORE 조립...")
    signal_store = build_signal_store(
        slice_columns, peek_orm, peek_profile, peek_reftable, sqlite_schema
    )
    print(f"  columns: {len(signal_store['columns'])}")
    print(f"  reftable_dump: {len(signal_store['reftable_dump'])} 그룹")
    # archetype 분포 확인
    from collections import Counter
    arch_dist = Counter(c["archetype"] for c in signal_store["columns"].values())
    print(f"  archetype 분포: {dict(arch_dist)}")

    # CORPUS 조립
    print("\n[4/5] CORPUS 조립...")
    corpus = build_corpus(root / "corpus")
    total_size = sum(len(v) for v in corpus.values())
    print(f"  파일: {len(corpus)}")
    print(f"  총 크기: {total_size/1024/1024:.1f} MB (텍스트)")

    # JS 파일 출력
    print("\n[5/5] JS 파일 출력...")
    write_js_bundle(
        signal_store, "SIGNAL_STORE",
        out_dir / "signal-store-fineract.js",
        "생성됨: scripts/build_render_bundle.py — 직접 수정 금지. Fineract SIGNAL_STORE."
    )
    write_js_bundle(
        corpus, "CORPUS",
        out_dir / "corpus-index-fineract.js",
        "생성됨: scripts/build_render_bundle.py — 직접 수정 금지. Fineract CORPUS."
    )
    # render-meta 오버라이드 (TABLE_ORDER 확장)
    tables_in_slice = {col["schema"]["table"] for col in signal_store["columns"].values()}
    (out_dir / "render-meta-fineract.js").write_text(
        build_render_meta_override(tables_in_slice), encoding="utf-8"
    )
    write_readme(out_dir / "README.md", {
        "columns": len(signal_store["columns"]),
        "reftable_groups": len(signal_store["reftable_dump"]),
        "corpus_files": len(corpus),
        "tables": len(tables_in_slice),
    })

    # 크기 확인
    sig_size = (out_dir / "signal-store-fineract.js").stat().st_size
    cor_size = (out_dir / "corpus-index-fineract.js").stat().st_size
    meta_size = (out_dir / "render-meta-fineract.js").stat().st_size
    print(f"\n[ok] 산출:")
    print(f"  {out_dir}/signal-store-fineract.js  ({sig_size/1024:.1f} KB)")
    print(f"  {out_dir}/corpus-index-fineract.js  ({cor_size/1024/1024:.1f} MB)")
    print(f"  {out_dir}/render-meta-fineract.js   ({meta_size/1024:.1f} KB)")
    print(f"  {out_dir}/README.md")


if __name__ == "__main__":
    main()
