// 생성됨: scripts/build_render_bundle.py — 직접 수정 금지. Fineract SIGNAL_STORE.
window.SIGNAL_STORE = {
  "columns": {
    "glim_accounts.loan_status_id": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "glim_accounts",
        "name": "loan_status_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanStatus",
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
        "cardinality": 3,
        "distinct_sample": [
          300,
          600,
          200
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.6,
          "600": 0.2,
          "200": 0.2
        }
      }
    },
    "m_client.status_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_client",
        "name": "status_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "status",
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
        "cardinality": 6,
        "distinct_sample": [
          300,
          100,
          600,
          500,
          800,
          700
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.755,
          "100": 0.106,
          "600": 0.056,
          "500": 0.033,
          "800": 0.031,
          "700": 0.019
        }
      }
    },
    "m_deposit_account_on_hold_transaction.transaction_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "transaction_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "transactionType",
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
        "cardinality": 2,
        "distinct_sample": [
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.66,
          "2": 0.34
        }
      }
    },
    "m_loan_reschedule_request.status_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "status_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "statusEnum",
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
        "cardinality": 3,
        "distinct_sample": [
          200,
          100,
          300
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "200": 0.4959,
          "100": 0.2683,
          "300": 0.2358
        }
      }
    },
    "m_savings_account.account_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "account_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accountType",
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
    "m_savings_account.deposit_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "deposit_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "depositType",
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
        "cardinality": 3,
        "distinct_sample": [
          100,
          200,
          300
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "100": 0.6027,
          "200": 0.2627,
          "300": 0.1347
        }
      }
    },
    "m_savings_account.status_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "status_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "status",
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
        "cardinality": 7,
        "distinct_sample": [
          300,
          600,
          800,
          700,
          100,
          200,
          500
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.6527,
          "600": 0.0987,
          "800": 0.0907,
          "700": 0.0647,
          "100": 0.0407,
          "200": 0.0347,
          "500": 0.018
        }
      }
    },
    "m_savings_account.sub_status_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "sub_status_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "sub_status",
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
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 1.0
        }
      }
    },
    "m_savings_account_transaction.transaction_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "transaction_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "typeOf",
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
        "cardinality": 4,
        "distinct_sample": [
          1,
          2,
          3,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.3516,
          "2": 0.3027,
          "3": 0.2978,
          "4": 0.0479
        }
      }
    },
    "gsim_accounts.savings_status_id": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "gsim_accounts",
        "name": "savings_status_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsStatus",
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
        "cardinality": 3,
        "distinct_sample": [
          800,
          300,
          600
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "800": 0.4,
          "300": 0.4,
          "600": 0.2
        }
      }
    },
    "m_client.legal_form_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_client",
        "name": "legal_form_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "legalForm",
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
        "cardinality": 2,
        "distinct_sample": [
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.835,
          "2": 0.165
        }
      }
    },
    "m_deposit_account_term_and_preclosure.deposit_period_frequency_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "deposit_period_frequency_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "depositPeriodFrequency",
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
        "cardinality": 3,
        "distinct_sample": [
          3,
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.8011,
          "2": 0.1429,
          "1": 0.0561
        }
      }
    },
    "m_deposit_account_term_and_preclosure.on_account_closure_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "on_account_closure_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "onAccountClosureType",
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
        "cardinality": 3,
        "distinct_sample": [
          100,
          200,
          300
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "100": 0.5371,
          "200": 0.2839,
          "300": 0.179
        }
      }
    },
    "m_loan_charge.charge_calculation_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_charge",
        "name": "charge_calculation_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargeCalculation",
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
        "cardinality": 4,
        "distinct_sample": [
          1,
          2,
          3,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.4818,
          "2": 0.3425,
          "3": 0.0949,
          "4": 0.0807
        }
      }
    },
    "m_loan_charge.charge_payment_mode_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_charge",
        "name": "charge_payment_mode_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargePaymentMode",
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
        "cardinality": 2,
        "distinct_sample": [
          0,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.7897,
          "1": 0.2103
        }
      }
    },
    "m_loan_charge.charge_time_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_charge",
        "name": "charge_time_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargeTime",
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
        "cardinality": 6,
        "distinct_sample": [
          1,
          2,
          3,
          4,
          9,
          7
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.2484,
          "2": 0.2094,
          "3": 0.1952,
          "4": 0.134,
          "9": 0.118,
          "7": 0.0949
        }
      }
    },
    "m_loan_recalculation_details.compound_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "compound_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestRecalculationCompoundingMethod",
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
        "cardinality": 4,
        "distinct_sample": [
          1,
          0,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.4717,
          "0": 0.3293,
          "3": 0.1172,
          "2": 0.0818
        }
      }
    },
    "m_loan_recalculation_details.compounding_frequency_nth_day_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "compounding_frequency_nth_day_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "compoundingFrequencyNthDay",
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
        "cardinality": 4,
        "distinct_sample": [
          1,
          2,
          3,
          4
        ],
        "inferred_format": null,
        "null_rate": 0.701,
        "top_values": {
          "1": 0.0828,
          "2": 0.0737,
          "3": 0.0727,
          "4": 0.0697
        }
      }
    },
    "m_loan_recalculation_details.compounding_frequency_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "compounding_frequency_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "compoundingFrequencyType",
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
        "cardinality": 4,
        "distinct_sample": [
          4,
          3,
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.4141,
        "top_values": {
          "4": 0.1586,
          "3": 0.1556,
          "1": 0.1475,
          "2": 0.1242
        }
      }
    },
    "m_loan_recalculation_details.compounding_frequency_weekday_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "compounding_frequency_weekday_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "compoundingFrequencyWeekday",
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
        "cardinality": 7,
        "distinct_sample": [
          3,
          2,
          6,
          1,
          4,
          7,
          5
        ],
        "inferred_format": null,
        "null_rate": 0.6778,
        "top_values": {
          "3": 0.0576,
          "2": 0.0475,
          "6": 0.0455,
          "1": 0.0455,
          "4": 0.0434,
          "7": 0.0424,
          "5": 0.0404
        }
      }
    },
    "m_loan_recalculation_details.reschedule_strategy_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "reschedule_strategy_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduleStrategyMethod",
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
        "cardinality": 4,
        "distinct_sample": [
          1,
          2,
          3,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.3899,
          "2": 0.3131,
          "3": 0.196,
          "4": 0.101
        }
      }
    },
    "m_loan_recalculation_details.rest_frequency_nth_day_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "rest_frequency_nth_day_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "restFrequencyNthDay",
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
        "cardinality": 4,
        "distinct_sample": [
          4,
          3,
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.4727,
        "top_values": {
          "4": 0.1465,
          "3": 0.1434,
          "1": 0.1232,
          "2": 0.1141
        }
      }
    },
    "m_loan_recalculation_details.rest_frequency_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "rest_frequency_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "restFrequencyType",
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
        "cardinality": 3,
        "distinct_sample": [
          4,
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 0.3515,
          "2": 0.3364,
          "1": 0.3121
        }
      }
    },
    "m_loan_recalculation_details.rest_frequency_weekday_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "rest_frequency_weekday_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "restFrequencyWeekday",
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
        "cardinality": 7,
        "distinct_sample": [
          3,
          7,
          2,
          6,
          1,
          4,
          5
        ],
        "inferred_format": null,
        "null_rate": 0.5212,
        "top_values": {
          "3": 0.0788,
          "7": 0.0737,
          "2": 0.0737,
          "6": 0.0707,
          "1": 0.0667,
          "4": 0.0586,
          "5": 0.0566
        }
      }
    },
    "m_loan_term_variations.applied_on_loan_status": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "applied_on_loan_status",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "onLoanStatus",
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
        "cardinality": 3,
        "distinct_sample": [
          300,
          200,
          100
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.7328,
          "200": 0.1903,
          "100": 0.0769
        }
      }
    },
    "m_loan_term_variations.term_type": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "term_type",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "termType",
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
        "cardinality": 5,
        "distinct_sample": [
          1,
          5,
          2,
          3,
          7
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.3239,
          "5": 0.2065,
          "2": 0.2024,
          "3": 0.166,
          "7": 0.1012
        }
      }
    },
    "m_savings_account.interest_calculation_days_in_year_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "interest_calculation_days_in_year_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCalculationDaysInYearType",
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
    "m_savings_account.interest_calculation_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "interest_calculation_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCalculationType",
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
    "m_savings_account.interest_compounding_period_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "interest_compounding_period_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCompoundingPeriodType",
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
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 1.0
        }
      }
    },
    "m_savings_account.interest_posting_period_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "interest_posting_period_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestPostingPeriodType",
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
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 1.0
        }
      }
    },
    "m_savings_account.lockin_period_frequency_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account",
        "name": "lockin_period_frequency_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lockinPeriodFrequencyType",
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
        "cardinality": 3,
        "distinct_sample": [
          2,
          3,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.6027,
          "3": 0.2013,
          "1": 0.196
        }
      }
    },
    "m_savings_account_charge.charge_calculation_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "charge_calculation_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargeCalculation",
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
        "cardinality": 3,
        "distinct_sample": [
          1,
          2,
          5
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.6434,
          "2": 0.2647,
          "5": 0.0919
        }
      }
    },
    "m_savings_account_charge.charge_time_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "charge_time_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargeTime",
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
        "cardinality": 5,
        "distinct_sample": [
          5,
          6,
          1,
          13,
          12
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "5": 0.3051,
          "6": 0.2022,
          "1": 0.2022,
          "13": 0.1618,
          "12": 0.1287
        }
      }
    },
    "m_savings_product.accounting_type": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_product",
        "name": "accounting_type",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accountingRule",
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
    "m_savings_product.interest_calculation_days_in_year_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_product",
        "name": "interest_calculation_days_in_year_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCalculationDaysInYearType",
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
    "m_savings_product.interest_calculation_type_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_product",
        "name": "interest_calculation_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCalculationType",
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
    "m_savings_product.interest_compounding_period_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_product",
        "name": "interest_compounding_period_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCompoundingPeriodType",
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
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 1.0
        }
      }
    },
    "m_savings_product.interest_posting_period_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_product",
        "name": "interest_posting_period_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestPostingPeriodType",
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
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 1.0
        }
      }
    },
    "m_savings_product.lockin_period_frequency_enum": {
      "archetype": "충돌-크럭스",
      "schema": {
        "table": "m_savings_product",
        "name": "lockin_period_frequency_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lockinPeriodFrequencyType",
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
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 1.0
        }
      }
    },
    "m_loan.loan_status_id": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "loan_status_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanStatus",
        "java_type": "LoanStatus",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@Convert(LoanStatusConverter)"
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
        "cardinality": 7,
        "distinct_sample": [
          300,
          600,
          700,
          500,
          200,
          100,
          601
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.5243,
          "600": 0.1833,
          "700": 0.0803,
          "500": 0.0627,
          "200": 0.0617,
          "100": 0.05,
          "601": 0.0377
        }
      }
    },
    "m_loan.loan_sub_status_id": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "loan_sub_status_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanSubStatus",
        "java_type": "LoanSubStatus",
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
        "cardinality": 3,
        "distinct_sample": [
          0,
          100,
          200
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.8503,
          "100": 0.1017,
          "200": 0.048
        }
      }
    },
    "m_loan.loan_type_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "loan_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanType",
        "java_type": "AccountType",
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
    "m_loan_transaction.transaction_type_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan_transaction",
        "name": "transaction_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "typeOf",
        "java_type": "LoanTransactionType",
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
        "cardinality": 6,
        "distinct_sample": [
          2,
          6,
          4,
          1,
          3,
          8
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.6051,
          "6": 0.1996,
          "4": 0.0506,
          "1": 0.0495,
          "3": 0.0493,
          "8": 0.0459
        }
      }
    },
    "m_loan.repayment_start_date_type_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "repayment_start_date_type_enum",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "repaymentStartDateType",
        "java_type": "RepaymentStartDateType",
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
        "cardinality": 3,
        "distinct_sample": [
          1,
          2,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.7097,
          "2": 0.1943,
          "3": 0.096
        }
      }
    },
    "m_loan.term_period_frequency_enum": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan",
        "name": "term_period_frequency_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "termPeriodFrequencyType",
        "java_type": "PeriodFrequencyType",
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
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 1.0
        }
      }
    },
    "m_loan_amortization_allocation_mapping.amortization_type": {
      "archetype": "enum-clean",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
        "name": "amortization_type",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amortizationType",
        "java_type": "AmortizationType",
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
        "cardinality": 3,
        "distinct_sample": [
          "PRINCIPAL",
          "INTEREST",
          "FEE"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "PRINCIPAL": 0.5133,
          "INTEREST": 0.3467,
          "FEE": 0.14
        }
      }
    },
    "m_client.client_classification_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client",
        "name": "client_classification_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "clientClassification",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "client_classification_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 4,
        "distinct_sample": [
          17,
          18,
          20,
          19
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "17": 0.518,
          "18": 0.258,
          "20": 0.134,
          "19": 0.09
        }
      }
    },
    "m_client.client_type_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client",
        "name": "client_type_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "clientType",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "client_type_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          29,
          30,
          31
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "29": 0.689,
          "30": 0.21,
          "31": 0.101
        }
      }
    },
    "m_client.closure_reason_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client",
        "name": "closure_reason_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "closureReason",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "closure_reason_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          21,
          23,
          22
        ],
        "inferred_format": null,
        "null_rate": 0.944,
        "top_values": {
          "21": 0.022,
          "23": 0.019,
          "22": 0.015
        }
      }
    },
    "m_client.gender_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client",
        "name": "gender_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "gender",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "gender_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2,
        "distinct_sample": [
          15,
          16
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "15": 0.501,
          "16": 0.499
        }
      }
    },
    "m_client.reject_reason_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client",
        "name": "reject_reason_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectionReason",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "reject_reason_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          24,
          25,
          26
        ],
        "inferred_format": null,
        "null_rate": 0.967,
        "top_values": {
          "24": 0.013,
          "25": 0.011,
          "26": 0.009
        }
      }
    },
    "m_client.sub_status": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client",
        "name": "sub_status",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "subStatus",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "sub_status",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 4,
        "distinct_sample": [
          0,
          100,
          200,
          300
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.586,
          "100": 0.163,
          "200": 0.151,
          "300": 0.1
        }
      }
    },
    "m_client.withdraw_reason_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client",
        "name": "withdraw_reason_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawalReason",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "withdraw_reason_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2,
        "distinct_sample": [
          27,
          28
        ],
        "inferred_format": null,
        "null_rate": 0.969,
        "top_values": {
          "27": 0.02,
          "28": 0.011
        }
      }
    },
    "m_client_identifier.document_type_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_client_identifier",
        "name": "document_type_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "documentType",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "document_type_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          2,
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.339,
          "1": 0.334,
          "3": 0.327
        }
      }
    },
    "m_loan.charge_off_reason_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_loan",
        "name": "charge_off_reason_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargeOffReason",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "charge_off_reason_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          38,
          39,
          37
        ],
        "inferred_format": null,
        "null_rate": 0.9857,
        "top_values": {
          "38": 0.006,
          "39": 0.0047,
          "37": 0.0037
        }
      }
    },
    "m_loan.loanpurpose_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_loan",
        "name": "loanpurpose_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanPurpose",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loanpurpose_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 5,
        "distinct_sample": [
          35,
          36,
          34,
          33,
          32
        ],
        "inferred_format": null,
        "null_rate": 0.4073,
        "top_values": {
          "35": 0.129,
          "36": 0.1267,
          "34": 0.119,
          "33": 0.11,
          "32": 0.108
        }
      }
    },
    "m_loan.writeoff_reason_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_loan",
        "name": "writeoff_reason_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "writeOffReason",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "writeoff_reason_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2,
        "distinct_sample": [
          40,
          41
        ],
        "inferred_format": null,
        "null_rate": 0.9623,
        "top_values": {
          "40": 0.0203,
          "41": 0.0173
        }
      }
    },
    "m_loan_reschedule_request.reschedule_reason_cv_id": {
      "archetype": "reftable-link",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "reschedule_reason_cv_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduleReasonCodeValue",
        "java_type": "CodeValue",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "reschedule_reason_cv_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2,
        "distinct_sample": [
          42,
          43
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "42": 0.5122,
          "43": 0.4878
        }
      }
    },
    "gsim_accounts.accepting_child": {
      "archetype": "자명",
      "schema": {
        "table": "gsim_accounts",
        "name": "accepting_child",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isAcceptingChild",
        "java_type": "Boolean",
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
        "cardinality": 2,
        "distinct_sample": [
          1,
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.6,
          "0": 0.4
        }
      }
    },
    "glim_accounts.accepting_child": {
      "archetype": "자명",
      "schema": {
        "table": "glim_accounts",
        "name": "accepting_child",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isAcceptingChild",
        "java_type": "Boolean",
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
        "cardinality": 2,
        "distinct_sample": [
          1,
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.6,
          "0": 0.4
        }
      }
    },
    "m_client.account_no": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "account_no",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accountNumber",
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
        "present": true,
        "cardinality": 1000,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "C1000000": 0.001,
          "C1000001": 0.001,
          "C1000002": 0.001,
          "C1000003": 0.001,
          "C1000004": 0.001
        }
      }
    },
    "gsim_accounts.account_number": {
      "archetype": "자명",
      "schema": {
        "table": "gsim_accounts",
        "name": "account_number",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accountNumber",
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
        "present": true,
        "cardinality": 5,
        "distinct_sample": [
          "GSIM00000",
          "GSIM00001",
          "GSIM00002",
          "GSIM00003",
          "GSIM00004"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "GSIM00000": 0.2,
          "GSIM00001": 0.2,
          "GSIM00002": 0.2,
          "GSIM00003": 0.2,
          "GSIM00004": 0.2
        }
      }
    },
    "glim_accounts.account_number": {
      "archetype": "자명",
      "schema": {
        "table": "glim_accounts",
        "name": "account_number",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accountNumber",
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
        "present": true,
        "cardinality": 5,
        "distinct_sample": [
          "GLIM00000",
          "GLIM00001",
          "GLIM00002",
          "GLIM00003",
          "GLIM00004"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "GLIM00000": 0.2,
          "GLIM00001": 0.2,
          "GLIM00002": 0.2,
          "GLIM00003": 0.2,
          "GLIM00004": 0.2
        }
      }
    },
    "m_client.activatedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "activatedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "activatedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "activatedon_userid",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          1,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.245,
        "top_values": {
          "1": 0.263,
          "3": 0.258,
          "2": 0.234
        }
      }
    },
    "gsim_accounts.application_id": {
      "archetype": "자명",
      "schema": {
        "table": "gsim_accounts",
        "name": "application_id",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "applicationId",
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
    "glim_accounts.application_id": {
      "archetype": "자명",
      "schema": {
        "table": "glim_accounts",
        "name": "application_id",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "applicationId",
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
    "m_client.activation_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "activation_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "activationDate",
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
        "present": true,
        "cardinality": 474,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.139,
        "top_values": {
          "2026-07-06": 0.01,
          "2026-06-23": 0.008,
          "2026-07-08": 0.007,
          "2026-07-05": 0.006,
          "2026-06-15": 0.006
        }
      }
    },
    "gsim_accounts.child_accounts_count": {
      "archetype": "자명",
      "schema": {
        "table": "gsim_accounts",
        "name": "child_accounts_count",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "childAccountsCount",
        "java_type": "Long",
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
        "cardinality": 3,
        "distinct_sample": [
          8,
          7,
          5
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "8": 0.4,
          "7": 0.4,
          "5": 0.2
        }
      }
    },
    "glim_accounts.child_accounts_count": {
      "archetype": "자명",
      "schema": {
        "table": "glim_accounts",
        "name": "child_accounts_count",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "childAccountsCount",
        "java_type": "Long",
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
        "cardinality": 3,
        "distinct_sample": [
          2,
          7,
          5
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.6,
          "7": 0.2,
          "5": 0.2
        }
      }
    },
    "m_client.closedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "closedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "closureDate",
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
        "present": true,
        "cardinality": 52,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.944,
        "top_values": {
          "2026-01-28": 0.002,
          "2025-11-19": 0.002,
          "2025-08-06": 0.002,
          "2025-07-18": 0.002,
          "2026-07-08": 0.001
        }
      }
    },
    "gsim_accounts.group_id": {
      "archetype": "자명",
      "schema": {
        "table": "gsim_accounts",
        "name": "group_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "group",
        "java_type": "Group",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "group_id",
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
    "glim_accounts.group_id": {
      "archetype": "자명",
      "schema": {
        "table": "glim_accounts",
        "name": "group_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "group",
        "java_type": "Group",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "group_id",
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
    "m_client.closedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "closedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "closedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "closedon_userid",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          3,
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.944,
        "top_values": {
          "3": 0.023,
          "1": 0.02,
          "2": 0.013
        }
      }
    },
    "gsim_accounts.parent_deposit": {
      "archetype": "자명",
      "schema": {
        "table": "gsim_accounts",
        "name": "parent_deposit",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "parentDeposit",
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
        "cardinality": 5,
        "distinct_sample": [
          2511745.83,
          1089422.11,
          858900.58,
          693386.39,
          557043.87
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2511745.83": 0.2,
          "1089422.11": 0.2,
          "858900.58": 0.2,
          "693386.39": 0.2,
          "557043.87": 0.2
        }
      }
    },
    "glim_accounts.principal_amount": {
      "archetype": "자명",
      "schema": {
        "table": "glim_accounts",
        "name": "principal_amount",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "principalAmount",
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
        "cardinality": 5,
        "distinct_sample": [
          1930529.26,
          1562458.22,
          1319330.01,
          827519.85,
          653828.67
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1930529.26": 0.2,
          "1562458.22": 0.2,
          "1319330.01": 0.2,
          "827519.85": 0.2,
          "653828.67": 0.2
        }
      }
    },
    "m_client.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "created_on_utc",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdDate",
        "java_type": "OffsetDateTime",
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
          "2026-07-08 02:04:26.608738"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 02:04:26.608738": 1.0
        }
      }
    },
    "m_deposit_account_on_hold_transaction.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "amount",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amount",
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
        "cardinality": 50,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "99246.47": 0.02,
          "97215.64": 0.02,
          "93686.86": 0.02,
          "92280.5": 0.02,
          "90562.75": 0.02
        }
      }
    },
    "m_loan.account_no": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "account_no",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accountNumber",
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
        "present": true,
        "cardinality": 3000,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "L3000000": 0.0003,
          "L3000001": 0.0003,
          "L3000002": 0.0003,
          "L3000003": 0.0003,
          "L3000004": 0.0003
        }
      }
    },
    "m_client.date_of_birth": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "date_of_birth",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "dateOfBirth",
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
        "present": true,
        "cardinality": 979,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2001-01-27": 0.002,
          "2000-01-10": 0.002,
          "1999-03-03": 0.002,
          "1996-12-19": 0.002,
          "1996-11-16": 0.002
        }
      }
    },
    "m_deposit_account_on_hold_transaction.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "created_on_utc",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdDate",
        "java_type": "OffsetDateTime",
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
          "2026-07-08 02:04:26.608738"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 02:04:26.608738": 1.0
        }
      }
    },
    "m_loan.allow_full_term_for_tranche": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "allow_full_term_for_tranche",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "allowFullTermForTranche",
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
    "m_client.default_savings_account": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "default_savings_account",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsAccountId",
        "java_type": "Long",
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
        "cardinality": 254,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.72,
        "top_values": {
          "223": 0.003,
          "1498": 0.002,
          "1433": 0.002,
          "1430": 0.002,
          "1420": 0.002
        }
      }
    },
    "m_deposit_account_on_hold_transaction.is_reversed": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "is_reversed",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reversed",
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
    "m_loan.approved_principal": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "approved_principal",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "approvedPrincipal",
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
        "cardinality": 3000,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "199352340.33": 0.0003,
          "199250976.01": 0.0003,
          "198925628.68": 0.0003,
          "198815588.32": 0.0003,
          "198570048.77": 0.0003
        }
      }
    },
    "m_client.default_savings_product": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "default_savings_product",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsProductId",
        "java_type": "Long",
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
        "cardinality": 3,
        "distinct_sample": [
          3,
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.72,
        "top_values": {
          "3": 0.105,
          "2": 0.09,
          "1": 0.085
        }
      }
    },
    "m_deposit_account_on_hold_transaction.savings_account_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "savings_account_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsAccount",
        "java_type": "SavingsAccount",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "savings_account_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 50,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1455": 0.02,
          "1430": 0.02,
          "1429": 0.02,
          "1421": 0.02,
          "1400": 0.02
        }
      }
    },
    "m_loan.approvedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "approvedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "approvedOnDate",
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
        "present": true,
        "cardinality": 793,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.05,
        "top_values": {
          "2026-07-08": 0.005,
          "2026-06-06": 0.0047,
          "2026-06-28": 0.0043,
          "2026-06-19": 0.0043,
          "2026-04-22": 0.0043
        }
      }
    },
    "m_client.display_name": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "display_name",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "displayName",
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
        "present": true,
        "cardinality": 707,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "김영철": 0.007,
          "김아름": 0.007,
          "이현준": 0.006,
          "김준호": 0.005,
          "김정희": 0.005
        }
      }
    },
    "m_deposit_account_on_hold_transaction.transaction_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "transaction_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "transactionDate",
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
        "present": true,
        "cardinality": 41,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-04-29": 0.06,
          "2026-07-08": 0.04,
          "2026-06-29": 0.04,
          "2026-06-27": 0.04,
          "2026-06-06": 0.04
        }
      }
    },
    "m_loan.approvedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "approvedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "approvedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "approvedon_userid",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          2,
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.05,
        "top_values": {
          "2": 0.327,
          "1": 0.3243,
          "3": 0.2987
        }
      }
    },
    "m_client.email_address": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "email_address",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "emailAddress",
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_deposit_account_term_and_preclosure.deposit_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
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
        "present": true,
        "cardinality": 553,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "13973309.28": 0.0018,
          "12748895.7": 0.0018,
          "11394410.8": 0.0018,
          "11065393.93": 0.0018,
          "10139340.35": 0.0018
        }
      }
    },
    "m_loan.charged_off_by_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "charged_off_by_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargedOffBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "charged_off_by_userid",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          1,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.9857,
        "top_values": {
          "1": 0.0067,
          "3": 0.0043,
          "2": 0.0033
        }
      }
    },
    "m_client.firstname": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "firstname",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "firstname",
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
        "present": true,
        "cardinality": 121,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "영철": 0.015,
          "지연": 0.014,
          "정순": 0.014,
          "옥자": 0.013,
          "아름": 0.013
        }
      }
    },
    "m_deposit_account_term_and_preclosure.deposit_period": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "deposit_period",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "depositPeriod",
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
        "cardinality": 4,
        "distinct_sample": [
          24,
          6,
          12,
          36
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "24": 0.2857,
          "6": 0.2676,
          "12": 0.2423,
          "36": 0.2043
        }
      }
    },
    "m_loan.client_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "client_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "client",
        "java_type": "Client",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "client_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 735,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "921": 0.004,
          "87": 0.0037,
          "658": 0.0037,
          "472": 0.0033,
          "722": 0.0033
        }
      }
    },
    "m_client.fullname": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "fullname",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "fullname",
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
        "present": true,
        "cardinality": 5,
        "distinct_sample": [
          "주식회사 서울",
          "주식회사 한강",
          "주식회사 새마을",
          "주식회사 동방",
          "주식회사 대한"
        ],
        "inferred_format": null,
        "null_rate": 0.835,
        "top_values": {
          "주식회사 서울": 0.036,
          "주식회사 한강": 0.033,
          "주식회사 새마을": 0.033,
          "주식회사 동방": 0.033,
          "주식회사 대한": 0.03
        }
      }
    },
    "m_deposit_account_term_and_preclosure.maturity_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "maturity_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maturityAmount",
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
        "cardinality": 553,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "14642746.197369006": 0.0018,
          "14099928.974120261": 0.0018,
          "12874055.502602234": 0.0018,
          "11768914.325336326": 0.0018,
          "11633531.472132953": 0.0018
        }
      }
    },
    "m_loan.closedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "closedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "closedOnDate",
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
        "present": true,
        "cardinality": 205,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.779,
        "top_values": {
          "2026-07-08": 0.0107,
          "2026-07-07": 0.0097,
          "2026-07-04": 0.0087,
          "2026-07-06": 0.007,
          "2026-06-30": 0.0067
        }
      }
    },
    "m_client.image_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "image_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "imageId",
        "java_type": "Long",
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
        "cardinality": 237,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.729,
        "top_values": {
          "520": 0.004,
          "105": 0.004,
          "711": 0.003,
          "661": 0.003,
          "647": 0.003
        }
      }
    },
    "m_deposit_account_term_and_preclosure.maturity_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "maturity_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maturityDate",
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.closedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "closedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "closedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "closedon_userid",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          1,
          2,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.779,
        "top_values": {
          "1": 0.0743,
          "2": 0.074,
          "3": 0.0727
        }
      }
    },
    "m_client.is_staff": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "is_staff",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isStaff",
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
    "m_deposit_account_term_and_preclosure.savings_account_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "savings_account_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "account",
        "java_type": "SavingsAccount",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@OneToOne"
        ],
        "format_pattern": null,
        "join_column": "savings_account_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 553,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1491": 0.0018,
          "1490": 0.0018,
          "1487": 0.0018,
          "1485": 0.0018,
          "1484": 0.0018
        }
      }
    },
    "m_loan.create_standing_instruction_at_disbursement": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "create_standing_instruction_at_disbursement",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createStandingInstructionAtDisbursement",
        "java_type": "Boolean",
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
    "m_client.lastname": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "lastname",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastname",
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
        "present": true,
        "cardinality": 44,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "김": 0.25,
          "이": 0.166,
          "박": 0.112,
          "최": 0.057,
          "강": 0.029
        }
      }
    },
    "m_deposit_account_term_and_preclosure.transfer_interest_to_linked_account": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "transfer_interest_to_linked_account",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "transferInterestToLinkedAccount",
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
    "m_loan.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "created_on_utc",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdDate",
        "java_type": "OffsetDateTime",
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
          "2026-07-08 02:04:26.608738"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 02:04:26.608738": 1.0
        }
      }
    },
    "m_client.middlename": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "middlename",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "middlename",
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_deposit_account_term_and_preclosure.transfer_to_savings_account_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "transfer_to_savings_account_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "transferToSavingsAccountId",
        "java_type": "Long",
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
    "m_loan.disbursedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "disbursedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "actualDisbursementDate",
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
        "present": true,
        "cardinality": 527,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1117,
        "top_values": {
          "2026-07-08": 0.0203,
          "2026-07-07": 0.014,
          "2026-07-06": 0.0123,
          "2026-07-05": 0.012,
          "2026-07-01": 0.011
        }
      }
    },
    "m_client.mobile_no": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "mobile_no",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "mobileNo",
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_deposit_product_recurring_detail.savings_product_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_recurring_detail",
        "name": "savings_product_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "product",
        "java_type": "RecurringDepositProduct",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@OneToOne"
        ],
        "format_pattern": null,
        "join_column": "savings_product_id",
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
        "null_rate": 0,
        "top_values": {}
      }
    },
    "m_loan.disbursedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "disbursedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "disbursedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "disbursedon_userid",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": false
      }
    },
    "m_deposit_account_term_and_preclosure.expected_firstdepositon_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_deposit_account_term_and_preclosure",
        "name": "expected_firstdepositon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "expectedFirstDepositOnDate",
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
        "present": true,
        "cardinality": 30,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-31": 0.0452,
          "2026-07-28": 0.0452,
          "2026-07-22": 0.0434,
          "2026-07-20": 0.0434,
          "2026-07-15": 0.0434
        }
      }
    },
    "m_loan.accrued_till": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "accrued_till",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "accruedTill",
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
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          "2026-07-08"
        ],
        "inferred_format": null,
        "null_rate": 0.7353,
        "top_values": {
          "2026-07-08": 0.2647
        }
      }
    },
    "m_savings_account.lockedin_until_date_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "lockedin_until_date_derived",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lockedInUntilDate",
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
        "present": true,
        "cardinality": 362,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.6573,
        "top_values": {
          "2028-04-20": 0.0027,
          "2027-11-13": 0.0027,
          "2027-04-17": 0.0027,
          "2026-08-07": 0.0027,
          "2028-05-13": 0.002
        }
      }
    },
    "m_loan.charged_off_on_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "charged_off_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargedOffOnDate",
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
        "present": true,
        "cardinality": 39,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9857,
        "top_values": {
          "2026-06-13": 0.0007,
          "2026-05-29": 0.0007,
          "2026-05-08": 0.0007,
          "2026-03-02": 0.0007,
          "2026-07-03": 0.0003
        }
      }
    },
    "m_savings_account.on_hold_funds_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "on_hold_funds_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "onHoldFunds",
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
        "cardinality": 148,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9013,
        "top_values": {
          "49559.73": 0.0007,
          "49472.06": 0.0007,
          "49320.69": 0.0007,
          "48545.44": 0.0007,
          "48528.8": 0.0007
        }
      }
    },
    "m_loan.expected_disbursedon_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "expected_disbursedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "expectedDisbursementDate",
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
        "present": true,
        "cardinality": 439,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.4757,
        "top_values": {
          "2026-07-08": 0.0133,
          "2026-07-07": 0.0077,
          "2026-07-05": 0.0077,
          "2026-07-06": 0.0073,
          "2026-07-04": 0.0067
        }
      }
    },
    "m_savings_account.total_savings_amount_on_hold": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account",
        "name": "total_savings_amount_on_hold",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsOnHoldAmount",
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
    "m_loan.expected_firstrepaymenton_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "expected_firstrepaymenton_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "expectedFirstRepaymentOnDate",
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
        "present": true,
        "cardinality": 439,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.4757,
        "top_values": {
          "2026-08-07": 0.0133,
          "2026-08-06": 0.0077,
          "2026-08-04": 0.0077,
          "2026-08-05": 0.0073,
          "2026-08-03": 0.0067
        }
      }
    },
    "m_savings_account_charge.amount_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "amount_outstanding_derived",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountOutstanding",
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
        "cardinality": 272,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4390.290864319095": 0.0037,
          "4335.591819973837": 0.0037,
          "4302.220748539488": 0.0037,
          "4109.006192914622": 0.0037,
          "4056.202506392795": 0.0037
        }
      }
    },
    "m_loan.expected_maturedon_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "expected_maturedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "expectedMaturityDate",
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_client.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdBy",
        "java_type": "Long",
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
    "m_loan.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdBy",
        "java_type": "Long",
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
    "m_deposit_account_on_hold_transaction.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "created_by",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdBy",
        "java_type": "Long",
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
    "m_client.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "last_modified_by",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastModifiedBy",
        "java_type": "Long",
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
    "m_deposit_account_on_hold_transaction.created_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
        "name": "created_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdDateToRemove",
        "java_type": "LocalDateTime",
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
          "2026-07-08"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 1.0
        }
      }
    },
    "m_loan.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "last_modified_by",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastModifiedBy",
        "java_type": "Long",
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
    "m_client.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "last_modified_on_utc",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastModifiedDate",
        "java_type": "OffsetDateTime",
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
          "2026-07-08 02:04:26.608738"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 02:04:26.608738": 1.0
        }
      }
    },
    "m_loan.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "last_modified_on_utc",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastModifiedDate",
        "java_type": "OffsetDateTime",
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
    "m_loan_transaction_relation.relation_type_enum": {
      "archetype": "floor",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "relation_type_enum",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "relationType",
        "java_type": "LoanTransactionRelationTypeEnum",
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
        "cardinality": 4,
        "distinct_sample": [
          2,
          1,
          3,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.44,
          "1": 0.26,
          "3": 0.23,
          "4": 0.07
        }
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
    }
  }
};
