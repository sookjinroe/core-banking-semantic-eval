// 생성됨: scripts/build_render_bundle.py — 직접 수정 금지. Fineract SIGNAL_STORE (110 컬럼).
window.SIGNAL_STORE = {
  "columns": {
    "m_loan.currency_code": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "currency_code",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "code",
        "java_type": "String",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.currency_digits": {
      "archetype": "floor",
      "schema": {
        "table": "m_loan",
        "name": "currency_digits",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "digitsAfterDecimal",
        "java_type": "int",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 1.0
        }
      }
    },
    "m_loan.currency_multiplesof": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "currency_multiplesof",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inMultiplesOf",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.principal_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "principal_amount",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "principal",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.nominal_interest_rate_per_period": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "nominal_interest_rate_per_period",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "nominalInterestRatePerPeriod",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.interest_period_frequency_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "interest_period_frequency_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestPeriodFrequencyType",
        "java_type": "PeriodFrequencyType",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(ORDINAL)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 1.0
        }
      }
    },
    "m_loan.annual_nominal_interest_rate": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "annual_nominal_interest_rate",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "annualNominalInterestRate",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1241,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "9.74": 0.003,
          "4.43": 0.003,
          "4.17": 0.003,
          "11.62": 0.0027,
          "8.33": 0.0027
        }
      }
    },
    "m_loan.interest_method_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "interest_method_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestMethod",
        "java_type": "InterestMethod",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(ORDINAL)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_loan.interest_calculated_in_period_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "interest_calculated_in_period_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCalculationPeriodMethod",
        "java_type": "InterestCalculationPeriodMethod",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(ORDINAL)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_loan.allow_partial_period_interest_calcualtion": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "allow_partial_period_interest_calcualtion",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "allowPartialPeriodInterestCalculation",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 1.0
        }
      }
    },
    "m_loan.repay_every": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "repay_every",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "repayEvery",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.repayment_period_frequency_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "repayment_period_frequency_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "repaymentPeriodFrequencyType",
        "java_type": "PeriodFrequencyType",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(ORDINAL)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 1.0
        }
      }
    },
    "m_loan.number_of_repayments": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "number_of_repayments",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "numberOfRepayments",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.grace_on_principal_periods": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "grace_on_principal_periods",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "graceOnPrincipalPayment",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.recurring_moratorium_principal_periods": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "recurring_moratorium_principal_periods",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "recurringMoratoriumOnPrincipalPeriods",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.grace_on_interest_periods": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "grace_on_interest_periods",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "graceOnInterestPayment",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.grace_interest_free_periods": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "grace_interest_free_periods",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "graceOnInterestCharged",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.amortization_method_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "amortization_method_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amortizationMethod",
        "java_type": "AmortizationMethod",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(ORDINAL)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_loan.arrearstolerance_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "arrearstolerance_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inArrearsTolerance",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.grace_on_arrears_ageing": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "grace_on_arrears_ageing",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "graceOnArrearsAgeing",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.days_in_month_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan",
        "name": "days_in_month_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "daysInMonthType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          30
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "30": 1.0
        }
      }
    },
    "m_loan.days_in_year_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan",
        "name": "days_in_year_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "daysInYearType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          365
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "365": 1.0
        }
      }
    },
    "m_loan.interest_recalculation_enabled": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "interest_recalculation_enabled",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isInterestRecalculationEnabled",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.is_equal_amortization": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "is_equal_amortization",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isEqualAmortization",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.enable_down_payment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "enable_down_payment",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "enableDownPayment",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.disbursed_amount_percentage_for_down_payment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "disbursed_amount_percentage_for_down_payment",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "disbursedAmountPercentageForDownPayment",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.enable_accrual_activity_posting": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "enable_accrual_activity_posting",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "enableAccrualActivityPosting",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.days_in_year_custom_strategy": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "days_in_year_custom_strategy",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "daysInYearCustomStrategy",
        "java_type": "DaysInYearCustomStrategyType",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(STRING)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.enable_income_capitalization": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "enable_income_capitalization",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "enableIncomeCapitalization",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.capitalized_income_calculation_type": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "capitalized_income_calculation_type",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "capitalizedIncomeCalculationType",
        "java_type": "LoanCapitalizedIncomeCalculationType",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(STRING)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.capitalized_income_strategy": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "capitalized_income_strategy",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "capitalizedIncomeStrategy",
        "java_type": "LoanCapitalizedIncomeStrategy",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(STRING)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.capitalized_income_type": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "capitalized_income_type",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "capitalizedIncomeType",
        "java_type": "LoanCapitalizedIncomeType",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(STRING)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.enable_buy_down_fee": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "enable_buy_down_fee",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "enableBuyDownFee",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.buy_down_fee_calculation_type": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "buy_down_fee_calculation_type",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "buyDownFeeCalculationType",
        "java_type": "LoanBuyDownFeeCalculationType",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(STRING)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.buy_down_fee_strategy": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "buy_down_fee_strategy",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "buyDownFeeStrategy",
        "java_type": "LoanBuyDownFeeStrategy",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(STRING)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.buy_down_fee_income_type": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "buy_down_fee_income_type",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "buyDownFeeIncomeType",
        "java_type": "LoanBuyDownFeeIncomeType",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Enumerated(STRING)"
        ],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.total_principal_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_principal_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPrincipal",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.capitalized_income_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "capitalized_income_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalCapitalizedIncome",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 1.0
        }
      }
    },
    "m_loan.capitalized_income_adjustment_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "capitalized_income_adjustment_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalCapitalizedIncomeAdjustment",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 1.0
        }
      }
    },
    "m_loan.principal_disbursed_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "principal_disbursed_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPrincipalDisbursed",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.principal_adjustments_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "principal_adjustments_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPrincipalAdjustments",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.principal_repaid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "principal_repaid_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPrincipalRepaid",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.principal_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "principal_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPrincipalWrittenOff",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.principal_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "principal_outstanding_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPrincipalOutstanding",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.interest_charged_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "interest_charged_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalInterestCharged",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.interest_repaid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "interest_repaid_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalInterestRepaid",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.interest_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "interest_waived_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalInterestWaived",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.interest_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "interest_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalInterestWrittenOff",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.interest_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "interest_outstanding_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalInterestOutstanding",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.fee_charges_charged_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "fee_charges_charged_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalFeeChargesCharged",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_charges_due_at_disbursement_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_charges_due_at_disbursement_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalFeeChargesDueAtDisbursement",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.fee_charges_repaid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "fee_charges_repaid_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalFeeChargesRepaid",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.fee_charges_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "fee_charges_waived_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalFeeChargesWaived",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.fee_charges_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "fee_charges_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalFeeChargesWrittenOff",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.fee_charges_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "fee_charges_outstanding_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalFeeChargesOutstanding",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.penalty_charges_charged_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "penalty_charges_charged_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPenaltyChargesCharged",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.penalty_charges_repaid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "penalty_charges_repaid_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPenaltyChargesRepaid",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.penalty_charges_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "penalty_charges_waived_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPenaltyChargesWaived",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.penalty_charges_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "penalty_charges_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPenaltyChargesWrittenOff",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.penalty_charges_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "penalty_charges_outstanding_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPenaltyChargesOutstanding",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_expected_repayment_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_expected_repayment_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalExpectedRepayment",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_repayment_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_repayment_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalRepayment",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_expected_costofloan_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_expected_costofloan_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalExpectedCostOfLoan",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_costofloan_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_costofloan_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalCostOfLoan",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_waived_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalWaived",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalWrittenOff",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_loan.total_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_outstanding_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalOutstanding",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_account_term_and_preclosure.pre_closure_penal_applicable": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "pre_closure_penal_applicable",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "preClosurePenalApplicable",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_account_term_and_preclosure.pre_closure_penal_interest": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "pre_closure_penal_interest",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "preClosurePenalInterest",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_account_term_and_preclosure.pre_closure_penal_interest_on_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "pre_closure_penal_interest_on_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "preClosurePenalInterestOnType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_deposit_account_term_and_preclosure.min_deposit_term": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "min_deposit_term",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minDepositTerm",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_account_term_and_preclosure.max_deposit_term": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "max_deposit_term",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxDepositTerm",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_account_term_and_preclosure.min_deposit_term_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "min_deposit_term_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minDepositTermType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_deposit_account_term_and_preclosure.max_deposit_term_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "max_deposit_term_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxDepositTermType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_deposit_account_term_and_preclosure.in_multiples_of_deposit_term": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "in_multiples_of_deposit_term",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inMultiplesOfDepositTerm",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_account_term_and_preclosure.in_multiples_of_deposit_term_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "in_multiples_of_deposit_term_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inMultiplesOfDepositTermType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_deposit_product_recurring_detail.is_mandatory": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_recurring_detail",
        "name": "is_mandatory",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isMandatoryDeposit",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_recurring_detail.allow_withdrawal": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_recurring_detail",
        "name": "allow_withdrawal",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "allowWithdrawal",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_recurring_detail.adjust_advance_towards_future_payments": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_recurring_detail",
        "name": "adjust_advance_towards_future_payments",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "adjustAdvanceTowardsFuturePayments",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.pre_closure_penal_applicable": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "pre_closure_penal_applicable",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "preClosurePenalApplicable",
        "java_type": "boolean",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.pre_closure_penal_interest": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "pre_closure_penal_interest",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "preClosurePenalInterest",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.pre_closure_penal_interest_on_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "pre_closure_penal_interest_on_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "preClosurePenalInterestOnType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_deposit_product_term_and_preclosure.min_deposit_term": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "min_deposit_term",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minDepositTerm",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.max_deposit_term": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "max_deposit_term",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxDepositTerm",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.min_deposit_term_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "min_deposit_term_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minDepositTermType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_deposit_product_term_and_preclosure.max_deposit_term_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "max_deposit_term_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxDepositTermType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_deposit_product_term_and_preclosure.in_multiples_of_deposit_term": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "in_multiples_of_deposit_term",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inMultiplesOfDepositTerm",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.in_multiples_of_deposit_term_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "in_multiples_of_deposit_term_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inMultiplesOfDepositTermType",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_deposit_product_term_and_preclosure.min_deposit_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "min_deposit_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minDepositAmount",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.max_deposit_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "max_deposit_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxDepositAmount",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_product_term_and_preclosure.deposit_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "deposit_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "depositAmount",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_product.currency_code": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "currency_code",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "code",
        "java_type": "String",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_product.currency_digits": {
      "archetype": "floor",
      "schema": {
        "table": "m_savings_product",
        "name": "currency_digits",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "digitsAfterDecimal",
        "java_type": "int",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_product.currency_multiplesof": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "currency_multiplesof",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inMultiplesOf",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.currency_code": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "currency_code",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "code",
        "java_type": "String",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.currency_digits": {
      "archetype": "floor",
      "schema": {
        "table": "m_savings_account",
        "name": "currency_digits",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "digitsAfterDecimal",
        "java_type": "int",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.currency_multiplesof": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "currency_multiplesof",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inMultiplesOf",
        "java_type": "Integer",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_deposits_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_deposits_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalDeposits",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_withdrawals_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_withdrawals_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalWithdrawals",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_interest_earned_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_interest_earned_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalInterestEarned",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_interest_posted_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_interest_posted_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalInterestPosted",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_withdrawal_fees_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_withdrawal_fees_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalWithdrawalFees",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_fees_charge_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_fees_charge_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalFeeCharge",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_penalty_charge_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_penalty_charge_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPenaltyCharge",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_annual_fees_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_annual_fees_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalAnnualFees",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_savings_account.account_balance_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "account_balance_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accountBalance",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 1.0
        }
      }
    },
    "m_savings_account.total_overdraft_interest_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_overdraft_interest_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalOverdraftInterestDerived",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.total_withhold_tax_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_withhold_tax_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalWithholdTax",
        "java_type": "BigDecimal",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.last_interest_calculation_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "last_interest_calculation_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastInterestCalculationDate",
        "java_type": "LocalDate",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_savings_account.interest_posted_till_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "interest_posted_till_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestPostedTillDate",
        "java_type": "LocalDate",
        "is_id": false,
        "enum": null,
        "annotations": [],
        "format_pattern": null,
        "join_column": null,
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    }
  },
  "reftable_dump": {
    "account_type_type_enum": {
      "0": "INVALID",
      "1": "INDIVIDUAL",
      "2": "GROUP",
      "3": "JLG"
    },
    "accrual_accounts_for_loan_type_enum": {
      "1": "FUND_SOURCE",
      "2": "LOAN_PORTFOLIO",
      "3": "INTEREST_ON_LOANS",
      "4": "INCOME_FROM_FEES",
      "5": "INCOME_FROM_PENALTIES",
      "6": "LOSSES_WRITTEN_OFF",
      "7": "INTEREST_RECEIVABLE",
      "8": "FEES_RECEIVABLE",
      "9": "PENALTIES_RECEIVABLE",
      "10": "TRANSFERS_SUSPENSE",
      "11": "OVERPAYMENT",
      "12": "INCOME_FROM_RECOVERY"
    },
    "amortization_method_enum": {
      "0": "Equal principle payments",
      "1": "Equal installments"
    },
    "calendar_type_enum": {
      "0": "INVALID",
      "1": "CLIENTS",
      "2": "GROUPS",
      "3": "LOANS",
      "4": "CENTERS",
      "5": "SAVINGS",
      "6": "LOAN_RECALCULATION_REST_DETAIL",
      "7": "LOAN_RECALCULATION_COMPOUNDING_DETAIL"
    },
    "cash_accounts_for_loan_type_enum": {
      "1": "FUND_SOURCE",
      "2": "LOAN_PORTFOLIO",
      "3": "INTEREST_ON_LOANS",
      "4": "INCOME_FROM_FEES",
      "5": "INCOME_FROM_PENALTIES",
      "6": "LOSSES_WRITTEN_OFF",
      "10": "TRANSFERS_SUSPENSE",
      "11": "OVERPAYMENT",
      "12": "INCOME_FROM_RECOVERY"
    },
    "cash_accounts_for_savings_type_enum": {
      "1": "SAVINGS_REFERENCE",
      "2": "SAVINGS_CONTROL",
      "3": "INTEREST_ON_SAVINGS",
      "4": "INCOME_FROM_FEES",
      "5": "INCOME_FROM_PENALTIES",
      "10": "TRANSFERS_SUSPENSE",
      "11": "OVERDRAFT_PORTFOLIO_CONTROL",
      "12": "INCOME_FROM_INTEREST"
    },
    "cash_account_for_shares_type_enum": {
      "1": "SHARES_REFERENCE",
      "2": "SHARES_SUSPENSE",
      "3": "INCOME_FROM_FEES",
      "4": "SHARES_EQUITY"
    },
    "client_transaction_type_enum": {
      "1": "PAY_CHARGE",
      "2": "WAIVE_CHARGE"
    },
    "entity_account_type_enum": {
      "1": "CLIENT",
      "2": "LOAN",
      "3": "SAVINGS",
      "4": "CENTER",
      "5": "GROUP",
      "6": "SHARES"
    },
    "financial_activity_type_enum": {
      "100": "ASSET_TRANSFER",
      "101": "CASH_AT_MAINVAULT",
      "102": "CASH_AT_TELLER",
      "103": "ASSET_FUND_SOURCE",
      "200": "LIABILITY_TRANSFER",
      "201": "PAYABLE_DIVIDENDS",
      "300": "OPENING_BALANCES_TRANSFER_CONTRA"
    },
    "glaccount_type_enum": {
      "1": "ASSET",
      "2": "LIABILITY",
      "3": "EQUITY",
      "4": "INCOME",
      "5": "EXPENSE"
    },
    "interest_calculated_in_period_enum": {
      "0": "Daily",
      "1": "Same as repayment period"
    },
    "interest_method_enum": {
      "0": "Declining Balance",
      "1": "Flat"
    },
    "interest_period_frequency_enum": {
      "2": "Per month",
      "3": "Per year"
    },
    "journal_entry_type_type_enum": {
      "1": "CREDIT",
      "2": "DEBIT"
    },
    "loan_status_id": {
      "0": "Invalid",
      "100": "Submitted and awaiting approval",
      "200": "Approved",
      "300": "Active",
      "400": "Withdrawn by client",
      "500": "Rejected",
      "600": "Closed",
      "601": "Written-Off",
      "602": "Rescheduled",
      "700": "Overpaid"
    },
    "loan_transaction_strategy_id": {
      "1": "mifos-standard-strategy",
      "2": "heavensfamily-strategy",
      "3": "creocore-strategy",
      "4": "rbi-india-strategy",
      "8": "Due penalty, fee, interest, principal, In advance principal, penalty, fee, interest",
      "9": "Due penalty, interest, principal, fee, In advance penalty, interest, principal, fee"
    },
    "loan_transaction_type_enum": {
      "0": "INVALID",
      "1": "DISBURSEMENT",
      "2": "REPAYMENT",
      "3": "CONTRA",
      "4": "WAIVE_INTEREST",
      "5": "REPAYMENT_AT_DISBURSEMENT",
      "6": "WRITEOFF",
      "7": "MARKED_FOR_RESCHEDULING",
      "8": "RECOVERY_REPAYMENT",
      "9": "WAIVE_CHARGES",
      "10": "ACCRUAL",
      "12": "INITIATE_TRANSFER",
      "13": "APPROVE_TRANSFER",
      "14": "WITHDRAW_TRANSFER",
      "15": "REJECT_TRANSFER",
      "16": "REFUND",
      "17": "CHARGE_PAYMENT",
      "18": "REFUND_FOR_ACTIVE_LOAN",
      "19": "INCOME_POSTING"
    },
    "loan_type_enum": {
      "1": "Individual Loan",
      "2": "Group Loan"
    },
    "portfolio_account_type_enum": {
      "1": "LOAN",
      "2": "SAVING",
      "3": "PROVISIONING",
      "4": "SHARES"
    },
    "processing_result_enum": {
      "0": "invalid",
      "1": "processed",
      "2": "awaiting.approval",
      "3": "rejected",
      "4": "underProcessing",
      "5": "error"
    },
    "repayment_period_frequency_enum": {
      "0": "Days",
      "1": "Weeks",
      "2": "Months"
    },
    "savings_transaction_type_enum": {
      "0": "INVALID",
      "1": "deposit",
      "2": "withdrawal",
      "3": "Interest Posting",
      "4": "Withdrawal Fee",
      "5": "Annual Fee",
      "6": "Waive Charge",
      "7": "Pay Charge",
      "8": "DIVIDEND_PAYOUT",
      "12": "Initiate Transfer",
      "13": "Approve Transfer",
      "14": "Withdraw Transfer",
      "15": "Reject Transfer",
      "16": "Written-Off",
      "17": "Overdraft Interest",
      "19": "WITHHOLD_TAX"
    },
    "status_enum": {
      "0": "Invalid",
      "100": "Pending",
      "300": "Active",
      "600": "Closed"
    },
    "teller_status": {
      "300": "Active",
      "400": "Inactive",
      "600": "Closed"
    },
    "term_period_frequency_enum": {
      "0": "Days",
      "1": "Weeks",
      "2": "Months",
      "3": "Years"
    },
    "transaction_type_enum": {
      "1": "Disbursement",
      "2": "Repayment",
      "3": "Contra",
      "4": "Waive Interest",
      "5": "Repayment At Disbursement",
      "6": "Write-Off",
      "7": "Marked for Rescheduling",
      "8": "Recovery Repayment",
      "9": "Waive Charges",
      "10": "Apply Charges",
      "11": "Apply Interest",
      "12": "Initiate Transfer",
      "13": "Approve Transfer",
      "14": "Withdraw Transfer",
      "15": "Reject Transfer",
      "16": "Refund",
      "17": "Charge Payment",
      "18": "Refund for Active Loan",
      "19": "Income Posting",
      "20": "Credit Balance Refund",
      "21": "Merchant Issued Refund",
      "22": "Payout Refund",
      "23": "Goodwill Credit",
      "24": "Charge Refund",
      "25": "Chargeback",
      "26": "Charge Adjustment",
      "27": "Charge-off",
      "31": "Interest Payment Waiver",
      "32": "Accrual Activity",
      "33": "Interest Refund",
      "36": "Capitalized Income Amortization",
      "37": "Capitalized Income Adjustment",
      "39": "Capitalized Income Amortization Adjustment",
      "40": "Buy Down Fee",
      "41": "Buy Down Fee Adjustment",
      "42": "Buy Down Fee Amortization",
      "43": "Buy Down Fee Amortization Adjustment"
    },
    "Customer Identifier": {
      "1": "Passport",
      "2": "Id",
      "3": "Drivers License",
      "4": "Any Other Id Type"
    },
    "GuarantorRelationship": {
      "5": "Spouse",
      "6": "Parent",
      "7": "Sibling",
      "8": "Business Associate",
      "9": "Other"
    },
    "Entity to Entity Access Types": {
      "10": "Office Access to Loan Products",
      "11": "Office Access to Savings Products",
      "12": "Office Access to Fees/Charges"
    },
    "GROUPROLE": {
      "13": "Leader"
    },
    "PaymentType": {
      "14": "Money Transfer"
    },
    "Gender": {
      "15": "남성",
      "16": "여성"
    },
    "ClientClassification": {
      "17": "Salaried",
      "18": "Self-Employed",
      "19": "Student",
      "20": "Retired"
    },
    "ClientClosureReason": {
      "21": "Deceased",
      "22": "Migration",
      "23": "Other"
    },
    "ClientRejectReason": {
      "24": "KYC failed",
      "25": "Duplicate applicant",
      "26": "Blacklist"
    },
    "ClientWithdrawReason": {
      "27": "Applicant request",
      "28": "Documentation lost"
    },
    "ClientTypeCategory": {
      "29": "Regular",
      "30": "VIP",
      "31": "Corporate"
    },
    "LoanPurpose": {
      "32": "Business expansion",
      "33": "Home renovation",
      "34": "Education",
      "35": "Medical",
      "36": "Debt consolidation"
    },
    "LoanChargeOffReason": {
      "37": "Bankruptcy",
      "38": "Default > 180 days",
      "39": "Fraud"
    },
    "LoanWriteOffReason": {
      "40": "Uncollectible",
      "41": "Legal writeoff"
    },
    "LoanRescheduleReason": {
      "42": "Customer request",
      "43": "Financial hardship"
    },
    "LoanTransactionClassification": {
      "44": "Regular",
      "45": "Adjustment",
      "46": "Correction"
    }
  }
};
