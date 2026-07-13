// 생성됨: scripts/build_render_bundle.py — 직접 수정 금지.
// render-meta.js의 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 오버라이드.
// index.html에서 render-meta.js 뒤에 이 파일을 로드하면 됨.
(function() {
  if (!window.RenderMeta) return;
  const FINERACT_TABLE_LABEL = {
    "m_loan": "대출",
    "m_deposit_account_term_and_preclosure": "정기예금 기간·해지",
    "m_deposit_product_recurring_detail": "m_deposit_product_recurring_detail",
    "m_deposit_product_term_and_preclosure": "m_deposit_product_term_and_preclosure",
    "m_savings_account": "예금 계좌",
    "m_savings_product": "예금 상품"
  };
  const FINERACT_TABLE_ORDER = ["m_loan", "m_deposit_account_term_and_preclosure", "m_deposit_product_recurring_detail", "m_deposit_product_term_and_preclosure", "m_savings_account", "m_savings_product"];
  // Render 앱의 원본 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 교체
  Object.assign(window.RenderMeta.TABLE_LABEL, FINERACT_TABLE_LABEL);
  window.RenderMeta.TABLE_ORDER.length = 0;
  window.RenderMeta.TABLE_ORDER.push(...FINERACT_TABLE_ORDER);
})();
