// 생성됨: scripts/build_render_bundle.py — 직접 수정 금지.
// render-meta.js의 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 오버라이드.
// index.html에서 render-meta.js 뒤에 이 파일을 로드하면 됨.
(function() {
  if (!window.RenderMeta) return;
  const FINERACT_TABLE_LABEL = {
    "glim_accounts": "GLIM 계좌",
    "gsim_accounts": "GSIM 계좌",
    "m_loan": "대출",
    "m_loan_amortization_allocation_mapping": "상환 매핑",
    "m_loan_charge": "대출 수수료",
    "m_loan_charge_paid_by": "m_loan_charge_paid_by",
    "m_loan_collateral_management": "m_loan_collateral_management",
    "m_loan_disbursement_detail": "m_loan_disbursement_detail",
    "m_loan_installment_charge": "m_loan_installment_charge",
    "m_loan_officer_assignment_history": "m_loan_officer_assignment_history",
    "m_loan_overdue_installment_charge": "m_loan_overdue_installment_charge",
    "m_loan_reage_parameter": "재적용 파라미터",
    "m_loan_recalculation_details": "이자 재계산",
    "m_loan_repayment_schedule": "m_loan_repayment_schedule",
    "m_loan_reschedule_request": "재조정 요청",
    "m_loan_term_variations": "기간 변경",
    "m_loan_transaction": "대출 거래",
    "m_loan_transaction_relation": "거래 관계",
    "m_client": "고객",
    "m_client_identifier": "고객 식별정보",
    "m_deposit_account_on_hold_transaction": "동결 거래",
    "m_deposit_account_term_and_preclosure": "정기예금 기간·해지",
    "m_deposit_product_recurring_detail": "m_deposit_product_recurring_detail",
    "m_deposit_product_term_and_preclosure": "m_deposit_product_term_and_preclosure",
    "m_savings_account": "예금 계좌",
    "m_savings_account_charge": "예금 수수료",
    "m_savings_account_charge_paid_by": "m_savings_account_charge_paid_by",
    "m_savings_account_transaction": "예금 거래",
    "m_savings_product": "예금 상품"
  };
  const FINERACT_TABLE_ORDER = ["glim_accounts", "gsim_accounts", "m_loan", "m_loan_amortization_allocation_mapping", "m_loan_charge", "m_loan_charge_paid_by", "m_loan_collateral_management", "m_loan_disbursement_detail", "m_loan_installment_charge", "m_loan_officer_assignment_history", "m_loan_overdue_installment_charge", "m_loan_reage_parameter", "m_loan_recalculation_details", "m_loan_repayment_schedule", "m_loan_reschedule_request", "m_loan_term_variations", "m_loan_transaction", "m_loan_transaction_relation", "m_client", "m_client_identifier", "m_deposit_account_on_hold_transaction", "m_deposit_account_term_and_preclosure", "m_deposit_product_recurring_detail", "m_deposit_product_term_and_preclosure", "m_savings_account", "m_savings_account_charge", "m_savings_account_charge_paid_by", "m_savings_account_transaction", "m_savings_product"];
  // Render 앱의 원본 TABLE_LABEL·TABLE_ORDER를 Fineract용으로 교체
  Object.assign(window.RenderMeta.TABLE_LABEL, FINERACT_TABLE_LABEL);
  window.RenderMeta.TABLE_ORDER.length = 0;
  window.RenderMeta.TABLE_ORDER.push(...FINERACT_TABLE_ORDER);
})();
