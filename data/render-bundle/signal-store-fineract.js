// 생성됨: scripts/build_render_bundle.py — 직접 수정 금지. Fineract SIGNAL_STORE (474 컬럼).
window.SIGNAL_STORE = {
  "columns": {
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
    "m_client.office_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "office_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "office",
        "java_type": "Office",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "office_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 4,
        "distinct_sample": [
          3,
          4,
          5,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.258,
          "4": 0.256,
          "5": 0.249,
          "2": 0.237
        }
      }
    },
    "m_client.transfer_to_office_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "transfer_to_office_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "transferToOffice",
        "java_type": "Office",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "transfer_to_office_id",
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
          4,
          5,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.985,
        "top_values": {
          "2": 0.006,
          "4": 0.005,
          "5": 0.002,
          "3": 0.002
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
        "cardinality": 246,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.711,
        "top_values": {
          "984": 0.003,
          "750": 0.003,
          "527": 0.003,
          "471": 0.003,
          "441": 0.003
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
    "m_client.office_joining_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "office_joining_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "officeJoiningDate",
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
        "cardinality": 446,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.245,
        "top_values": {
          "2026-05-23": 0.007,
          "2026-07-21": 0.006,
          "2026-07-03": 0.006,
          "2026-04-18": 0.006,
          "2026-07-26": 0.005
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
        "cardinality": 39,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.954,
        "top_values": {
          "중수": 0.002,
          "정식": 0.002,
          "영자": 0.002,
          "상호": 0.002,
          "민재": 0.002
        }
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
          "주식회사 동방",
          "주식회사 새마을",
          "주식회사 대한"
        ],
        "inferred_format": null,
        "null_rate": 0.838,
        "top_values": {
          "주식회사 서울": 0.035,
          "주식회사 한강": 0.033,
          "주식회사 동방": 0.032,
          "주식회사 새마을": 0.031,
          "주식회사 대한": 0.031
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
        "cardinality": 948,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.052,
        "top_values": {
          "010-1000-7254": 0.001,
          "010-1005-6122": 0.001,
          "010-1022-6894": 0.001,
          "010-1034-1703": 0.001,
          "010-1057-6834": 0.001
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
        "cardinality": 851,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.146,
        "top_values": {
          "김9113@naver.com": 0.002,
          "김3878@naver.com": 0.002,
          "권5227@naver.com": 0.002,
          "황9881@daum.net": 0.001,
          "황9665@daum.net": 0.001
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
    "m_client.external_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "external_id",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "externalId",
        "java_type": "ExternalId",
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
        "cardinality": 816,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.184,
        "top_values": {
          "CIF10045767": 0.001,
          "CIF10118565": 0.001,
          "CIF10123261": 0.001,
          "CIF10508807": 0.001,
          "CIF10570496": 0.001
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
    "m_client.staff_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "staff_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "staff",
        "java_type": "Staff",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "staff_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 8,
        "distinct_sample": [
          8,
          3,
          7,
          6,
          5,
          2,
          1,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "8": 0.155,
          "3": 0.141,
          "7": 0.125,
          "6": 0.123,
          "5": 0.121,
          "2": 0.12,
          "1": 0.118,
          "4": 0.097
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
          22,
          23,
          21
        ],
        "inferred_format": null,
        "null_rate": 0.944,
        "top_values": {
          "22": 0.029,
          "23": 0.015,
          "21": 0.012
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
        "cardinality": 54,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.944,
        "top_values": {
          "2026-02-21": 0.002,
          "2025-08-31": 0.002,
          "2026-07-07": 0.001,
          "2026-07-05": 0.001,
          "2026-07-03": 0.001
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
          "24": 0.014,
          "25": 0.011,
          "26": 0.008
        }
      }
    },
    "m_client.rejectedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "rejectedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectionDate",
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
        "cardinality": 32,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.967,
        "top_values": {
          "2025-08-23": 0.002,
          "2026-06-05": 0.001,
          "2026-03-31": 0.001,
          "2026-02-03": 0.001,
          "2026-01-28": 0.001
        }
      }
    },
    "m_client.rejectedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "rejectedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "rejectedon_userid",
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
        "null_rate": 0.967,
        "top_values": {
          "2": 0.012,
          "3": 0.011,
          "1": 0.01
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
          28,
          27
        ],
        "inferred_format": null,
        "null_rate": 0.969,
        "top_values": {
          "28": 0.019,
          "27": 0.012
        }
      }
    },
    "m_client.withdrawn_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "withdrawn_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawalDate",
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
        "cardinality": 31,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.969,
        "top_values": {
          "2026-04-25": 0.001,
          "2026-02-16": 0.001,
          "2026-01-27": 0.001,
          "2026-01-19": 0.001,
          "2026-01-10": 0.001
        }
      }
    },
    "m_client.withdraw_on_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "withdraw_on_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawnBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "withdraw_on_userid",
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
        "null_rate": 0.969,
        "top_values": {
          "1": 0.011,
          "3": 0.01,
          "2": 0.01
        }
      }
    },
    "m_client.reactivated_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "reactivated_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reactivateDate",
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
        "cardinality": 13,
        "distinct_sample": [
          "2026-05-24",
          "2026-04-02",
          "2026-03-02",
          "2026-02-03",
          "2026-01-11",
          "2025-12-16",
          "2025-12-13",
          "2025-12-05",
          "2025-11-26",
          "2025-11-23",
          "2025-10-11",
          "2025-09-28",
          "2025-09-07"
        ],
        "inferred_format": null,
        "null_rate": 0.987,
        "top_values": {
          "2026-05-24": 0.001,
          "2026-04-02": 0.001,
          "2026-03-02": 0.001,
          "2026-02-03": 0.001,
          "2026-01-11": 0.001,
          "2025-12-16": 0.001,
          "2025-12-13": 0.001,
          "2025-12-05": 0.001,
          "2025-11-26": 0.001,
          "2025-11-23": 0.001
        }
      }
    },
    "m_client.reactivated_on_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "reactivated_on_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reactivatedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "reactivated_on_userid",
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
        "null_rate": 0.987,
        "top_values": {
          "2": 0.006,
          "3": 0.004,
          "1": 0.003
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
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.944,
        "top_values": {
          "3": 0.02,
          "2": 0.018,
          "1": 0.018
        }
      }
    },
    "m_client.submittedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "submittedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedOnDate",
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
        "cardinality": 657,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2025-04-08": 0.006,
          "2025-09-20": 0.005,
          "2024-10-17": 0.005,
          "2024-05-19": 0.005,
          "2023-10-10": 0.005
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
          3,
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.245,
        "top_values": {
          "3": 0.27,
          "1": 0.246,
          "2": 0.239
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
        "null_rate": 0.706,
        "top_values": {
          "3": 0.1,
          "2": 0.099,
          "1": 0.095
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
        "cardinality": 262,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.706,
        "top_values": {
          "637": 0.003,
          "1442": 0.002,
          "1408": 0.002,
          "1403": 0.002,
          "1373": 0.002
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
          "29": 0.698,
          "30": 0.194,
          "31": 0.108
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
          "1": 0.838,
          "2": 0.162
        }
      }
    },
    "m_client.reopened_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "reopened_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reopenedDate",
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
        "cardinality": 2,
        "distinct_sample": [
          "2026-06-01",
          "2026-03-05"
        ],
        "inferred_format": null,
        "null_rate": 0.998,
        "top_values": {
          "2026-06-01": 0.001,
          "2026-03-05": 0.001
        }
      }
    },
    "m_client.reopened_by_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "reopened_by_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reopenedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "reopened_by_userid",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2,
        "distinct_sample": [
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.998,
        "top_values": {
          "3": 0.001,
          "2": 0.001
        }
      }
    },
    "m_client.proposed_transfer_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_client",
        "name": "proposed_transfer_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "proposedTransferDate",
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
        "cardinality": 15,
        "distinct_sample": [
          "2026-06-24",
          "2026-06-17",
          "2026-06-14",
          "2026-06-09",
          "2026-04-28",
          "2026-04-18",
          "2026-04-10",
          "2026-04-03",
          "2026-04-01",
          "2026-02-17",
          "2026-02-14",
          "2026-02-12",
          "2026-02-02",
          "2026-01-31",
          "2026-01-17"
        ],
        "inferred_format": null,
        "null_rate": 0.985,
        "top_values": {
          "2026-06-24": 0.001,
          "2026-06-17": 0.001,
          "2026-06-14": 0.001,
          "2026-06-09": 0.001,
          "2026-04-28": 0.001,
          "2026-04-18": 0.001,
          "2026-04-10": 0.001,
          "2026-04-03": 0.001,
          "2026-04-01": 0.001,
          "2026-02-17": 0.001
        }
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_client_identifier.client_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_client_identifier",
        "name": "client_id",
        "type": "INTEGER",
        "nullable": false,
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
        "cardinality": 1000,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1000": 0.001,
          "999": 0.001,
          "998": 0.001,
          "997": 0.001,
          "996": 0.001
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
    "m_client_identifier.document_key": {
      "archetype": "자명",
      "schema": {
        "table": "m_client_identifier",
        "name": "document_key",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "documentKey",
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
          "ID9983447": 0.001,
          "ID9982026": 0.001,
          "ID9978977": 0.001,
          "ID9972059": 0.001,
          "ID9969705": 0.001
        }
      }
    },
    "m_client_identifier.status": {
      "archetype": "자명",
      "schema": {
        "table": "m_client_identifier",
        "name": "status",
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
        "cardinality": 1,
        "distinct_sample": [
          300
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 1.0
        }
      }
    },
    "m_client_identifier.description": {
      "archetype": "자명",
      "schema": {
        "table": "m_client_identifier",
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "description",
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
          "지점 확인 완료",
          "주 신분증",
          "발급 갱신 요망",
          "본점 발급",
          "본인 확인용"
        ],
        "inferred_format": null,
        "null_rate": 0.661,
        "top_values": {
          "지점 확인 완료": 0.074,
          "주 신분증": 0.074,
          "발급 갱신 요망": 0.066,
          "본점 발급": 0.063,
          "본인 확인용": 0.062
        }
      }
    },
    "m_client_identifier.active": {
      "archetype": "자명",
      "schema": {
        "table": "m_client_identifier",
        "name": "active",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "active",
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
    "m_client_identifier.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_client_identifier",
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
        "cardinality": 627,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-02-26 09:00:00": 0.005,
          "2024-11-24 09:00:00": 0.005,
          "2024-04-03 09:00:00": 0.005,
          "2026-04-12 09:00:00": 0.004,
          "2026-03-22 09:00:00": 0.004
        }
      }
    },
    "m_client_identifier.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_client_identifier",
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
        "cardinality": 627,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-02-26 09:00:00": 0.005,
          "2024-11-24 09:00:00": 0.005,
          "2024-04-03 09:00:00": 0.005,
          "2026-04-12 09:00:00": 0.004,
          "2026-03-22 09:00:00": 0.004
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
    "m_loan.external_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "external_id",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "externalId",
        "java_type": "ExternalId",
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
        "cardinality": 2419,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1937,
        "top_values": {
          "LN1009288": 0.0003,
          "LN1020265": 0.0003,
          "LN1024463": 0.0003,
          "LN1026741": 0.0003,
          "LN1035021": 0.0003
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
    "m_loan.group_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "group_id",
        "type": "INTEGER",
        "nullable": true,
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan.glim_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "glim_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "glim",
        "java_type": "GroupLoanIndividualMonitoringAccount",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "glim_id",
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
    "m_loan.product_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanProduct",
        "java_type": "LoanProduct",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "product_id",
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
          3,
          2,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.3747,
          "3": 0.321,
          "2": 0.1647,
          "4": 0.1397
        }
      }
    },
    "m_loan.fund_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "fund_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "fund",
        "java_type": "Fund",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "fund_id",
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
    "m_loan.loan_officer_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "loan_officer_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanOfficer",
        "java_type": "Staff",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_officer_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 8,
        "distinct_sample": [
          4,
          7,
          1,
          8,
          5,
          2,
          3,
          6
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 0.1347,
          "7": 0.1343,
          "1": 0.1267,
          "8": 0.1247,
          "5": 0.1223,
          "2": 0.1223,
          "3": 0.12,
          "6": 0.115
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
          33,
          36,
          35,
          34,
          32
        ],
        "inferred_format": null,
        "null_rate": 0.4033,
        "top_values": {
          "33": 0.1223,
          "36": 0.1217,
          "35": 0.1207,
          "34": 0.1183,
          "32": 0.1137
        }
      }
    },
    "m_loan.loan_transaction_strategy_code": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "loan_transaction_strategy_code",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "transactionProcessingStrategyCode",
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
        "cardinality": 1,
        "distinct_sample": [
          "mifos-standard-strategy"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "mifos-standard-strategy": 1.0
        }
      }
    },
    "m_loan.loan_transaction_strategy_name": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "loan_transaction_strategy_name",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "transactionProcessingStrategyName",
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
        "cardinality": 1,
        "distinct_sample": [
          "-"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "-": 1.0
        }
      }
    },
    "m_loan.term_frequency": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "term_frequency",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "termFrequency",
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
        "cardinality": 8,
        "distinct_sample": [
          12,
          6,
          24,
          3,
          84,
          60,
          120,
          36
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "12": 0.2737,
          "6": 0.2493,
          "24": 0.1633,
          "3": 0.1127,
          "84": 0.0567,
          "60": 0.0543,
          "120": 0.0537,
          "36": 0.0363
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
    "m_loan.sync_disbursement_with_meeting": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "sync_disbursement_with_meeting",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "syncDisbursementWithMeeting",
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
    "m_loan.submittedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "submittedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedOnDate",
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
        "cardinality": 1009,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2025-11-29": 0.0033,
          "2025-08-20": 0.003,
          "2025-02-05": 0.003,
          "2024-10-31": 0.003,
          "2026-04-05": 0.0027
        }
      }
    },
    "m_loan.rejectedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "rejectedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectedOnDate",
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
        "cardinality": 169,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9373,
        "top_values": {
          "2025-05-30": 0.001,
          "2026-06-27": 0.0007,
          "2026-05-14": 0.0007,
          "2026-04-17": 0.0007,
          "2026-02-17": 0.0007
        }
      }
    },
    "m_loan.rejectedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "rejectedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "rejectedon_userid",
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
        "null_rate": 0.9373,
        "top_values": {
          "1": 0.022,
          "2": 0.0207,
          "3": 0.02
        }
      }
    },
    "m_loan.withdrawnon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "withdrawnon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawnOnDate",
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
    "m_loan.withdrawnon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "withdrawnon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawnBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "withdrawnon_userid",
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
          "2": 0.323,
          "1": 0.3217,
          "3": 0.3053
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
        "present": true,
        "cardinality": 3,
        "distinct_sample": [
          2,
          3,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.1743,
        "top_values": {
          "2": 0.282,
          "3": 0.2787,
          "1": 0.265
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
          2,
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.779,
        "top_values": {
          "2": 0.0763,
          "1": 0.0743,
          "3": 0.0703
        }
      }
    },
    "m_loan.writtenoffon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "writtenoffon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "writtenOffOnDate",
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
        "cardinality": 92,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9623,
        "top_values": {
          "2027-01-01": 0.0013,
          "2026-12-18": 0.001,
          "2027-01-02": 0.0007,
          "2026-12-30": 0.0007,
          "2026-12-27": 0.0007
        }
      }
    },
    "m_loan.rescheduledon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "rescheduledon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduledOnDate",
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
    "m_loan.rescheduledon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "rescheduledon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduledByUser",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "rescheduledon_userid",
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
        "cardinality": 890,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1743,
        "top_values": {
          "2026-08-07": 0.0093,
          "2026-07-31": 0.0063,
          "2026-10-03": 0.006,
          "2026-08-04": 0.006,
          "2026-10-06": 0.005
        }
      }
    },
    "m_loan.maturedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "maturedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "actualMaturityDate",
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
        "cardinality": 191,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9123,
        "top_values": {
          "2026-06-14": 0.0013,
          "2026-02-12": 0.0013,
          "2026-06-20": 0.001,
          "2026-06-12": 0.001,
          "2026-06-06": 0.001
        }
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
    "m_loan.interest_calculated_from_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "interest_calculated_from_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestChargedFromDate",
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
        "cardinality": 514,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1743,
        "top_values": {
          "2026-07-08": 0.0183,
          "2026-07-06": 0.012,
          "2026-07-05": 0.012,
          "2026-07-07": 0.0117,
          "2026-07-04": 0.01
        }
      }
    },
    "m_loan.total_overpaid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_overpaid_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalOverpaid",
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
    "m_loan.overpaidon_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "overpaidon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "overpaidOnDate",
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
        "cardinality": 23,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.991,
        "top_values": {
          "2026-04-20": 0.001,
          "2026-05-24": 0.0007,
          "2026-05-06": 0.0007,
          "2026-07-03": 0.0003,
          "2026-07-01": 0.0003
        }
      }
    },
    "m_loan.loan_counter": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "loan_counter",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanCounter",
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
        "cardinality": 12,
        "distinct_sample": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.245,
          "2": 0.2277,
          "3": 0.19,
          "4": 0.1437,
          "5": 0.0943,
          "6": 0.0517,
          "7": 0.0273,
          "8": 0.0137,
          "9": 0.0037,
          "10": 0.0017
        }
      }
    },
    "m_loan.loan_product_counter": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "loan_product_counter",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanProductCounter",
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
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.5897,
          "2": 0.2653,
          "3": 0.1023,
          "4": 0.0307,
          "5": 0.01,
          "6": 0.0017,
          "7": 0.0003
        }
      }
    },
    "m_loan.principal_amount_proposed": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "principal_amount_proposed",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "proposedPrincipal",
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
    "m_loan.net_disbursal_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "net_disbursal_amount",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "netDisbursalAmount",
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
    "m_loan.fixed_emi_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "fixed_emi_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "fixedEmiAmount",
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
    "m_loan.max_outstanding_loan_balance": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "max_outstanding_loan_balance",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxOutstandingLoanBalance",
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
    "m_loan.total_recovered_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "total_recovered_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalRecovered",
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
    "m_loan.is_npa": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "is_npa",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isNpa",
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
        "null_rate": 0.7307,
        "top_values": {
          "2026-07-08": 0.2693
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
        "cardinality": 2,
        "distinct_sample": [
          0,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.1743,
        "top_values": {
          "0": 0.6603,
          "1": 0.1653
        }
      }
    },
    "m_loan.guarantee_amount_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "guarantee_amount_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "guaranteeAmountDerived",
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
    "m_loan.interest_recalcualated_on": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "interest_recalcualated_on",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestRecalculatedOn",
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
    "m_loan.is_floating_interest_rate": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "is_floating_interest_rate",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isFloatingInterestRate",
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
    "m_loan.interest_rate_differential": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "interest_rate_differential",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestRateDifferential",
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
          "40": 0.021,
          "41": 0.0167
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
          "0": 0.8477,
          "100": 0.101,
          "200": 0.0513
        }
      }
    },
    "m_loan.is_topup": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "is_topup",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isTopup",
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
    "m_loan.is_fraud": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "is_fraud",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "fraud",
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
    "m_loan.fixed_principal_percentage_per_installment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "fixed_principal_percentage_per_installment",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "fixedPrincipalPercentagePerInstallment",
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
    "m_loan.last_closed_business_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "last_closed_business_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastClosedBusinessDate",
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
        "cardinality": 45,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.3953,
        "top_values": {
          "2026-06-03": 0.0187,
          "2026-06-07": 0.0177,
          "2026-06-15": 0.017,
          "2026-06-10": 0.0167,
          "2026-07-03": 0.0163
        }
      }
    },
    "m_loan.is_charged_off": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan",
        "name": "is_charged_off",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargedOff",
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
          37,
          39
        ],
        "inferred_format": null,
        "null_rate": 0.989,
        "top_values": {
          "38": 0.005,
          "37": 0.0033,
          "39": 0.0027
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
        "cardinality": 32,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.989,
        "top_values": {
          "2026-07-08": 0.0007,
          "2026-07-07": 0.0003,
          "2026-06-26": 0.0003,
          "2026-06-24": 0.0003,
          "2026-06-13": 0.0003
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
          2,
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.989,
        "top_values": {
          "2": 0.004,
          "1": 0.004,
          "3": 0.003
        }
      }
    },
    "m_loan.enable_installment_level_delinquency": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan",
        "name": "enable_installment_level_delinquency",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "enableInstallmentLevelDelinquency",
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
        "cardinality": 2,
        "distinct_sample": [
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.76,
          "2": 0.24
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
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
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_loan_amortization_allocation_mapping.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanId",
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
        "cardinality": 138,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "382": 0.02,
          "2998": 0.0133,
          "2734": 0.0133,
          "2602": 0.0133,
          "2585": 0.0133
        }
      }
    },
    "m_loan_amortization_allocation_mapping.base_loan_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
        "name": "base_loan_transaction_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "baseLoanTransactionId",
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
        "cardinality": 144,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1820": 0.0133,
          "1713": 0.0133,
          "799": 0.0133,
          "713": 0.0133,
          "455": 0.0133
        }
      }
    },
    "m_loan_amortization_allocation_mapping.date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
        "name": "date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "date",
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
        "cardinality": 98,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-05-20": 0.0267,
          "2026-02-22": 0.0267,
          "2026-01-13": 0.0267,
          "2026-06-01": 0.02,
          "2026-05-17": 0.02
        }
      }
    },
    "m_loan_amortization_allocation_mapping.amortization_loan_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
        "name": "amortization_loan_transaction_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amortizationLoanTransactionId",
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
        "cardinality": 147,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2751": 0.0133,
          "352": 0.0133,
          "240": 0.0133,
          "2999": 0.0067,
          "2954": 0.0067
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
    "m_loan_amortization_allocation_mapping.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
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
        "cardinality": 150,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "49963.22": 0.0067,
          "49524.86": 0.0067,
          "49146.5": 0.0067,
          "47986.35": 0.0067,
          "47848.65": 0.0067
        }
      }
    },
    "m_loan_amortization_allocation_mapping.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
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
    "m_loan_amortization_allocation_mapping.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_loan_amortization_allocation_mapping.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
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
    "m_loan_amortization_allocation_mapping.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_amortization_allocation_mapping",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_loan_charge.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 743,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2996": 0.0018,
          "2979": 0.0018,
          "2974": 0.0018,
          "2971": 0.0018,
          "2970": 0.0018
        }
      }
    },
    "m_loan_charge.charge_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "charge_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "charge",
        "java_type": "Charge",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "charge_id",
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
    "m_loan_charge.submitted_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "submitted_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedOnDate",
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
        "cardinality": 419,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-29": 0.0133,
          "2026-07-08": 0.0106,
          "2026-07-06": 0.0106,
          "2026-06-19": 0.0098,
          "2026-06-13": 0.0098
        }
      }
    },
    "m_loan_charge.due_for_collection_as_of_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "due_for_collection_as_of_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "dueDate",
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
        "cardinality": 432,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-08-20": 0.0106,
          "2026-08-04": 0.0098,
          "2026-09-04": 0.0089,
          "2026-08-30": 0.0071,
          "2026-08-28": 0.0071
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
    "m_loan_charge.calculation_percentage": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "calculation_percentage",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "percentage",
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
        "cardinality": 326,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.4818,
        "top_values": {
          "3.72": 0.0053,
          "0.7": 0.0053,
          "4.38": 0.0044,
          "4.01": 0.0044,
          "1.6": 0.0044
        }
      }
    },
    "m_loan_charge.calculation_on_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "calculation_on_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountPercentageAppliedTo",
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
        "cardinality": 584,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.4818,
        "top_values": {
          "997864.6": 0.0009,
          "989675.2": 0.0009,
          "985060.2": 0.0009,
          "984350.6": 0.0009,
          "984293.8": 0.0009
        }
      }
    },
    "m_loan_charge.charge_amount_or_percentage": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "charge_amount_or_percentage",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountOrPercentage",
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
        "cardinality": 869,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3.72": 0.0053,
          "0.7": 0.0053,
          "4.38": 0.0044,
          "4.01": 0.0044,
          "1.6": 0.0044
        }
      }
    },
    "m_loan_charge.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
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
        "cardinality": 1127,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "49988.1": 0.0009,
          "49937.29": 0.0009,
          "49893.23": 0.0009,
          "49796.37": 0.0009,
          "49693.14": 0.0009
        }
      }
    },
    "m_loan_charge.amount_paid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_charge",
        "name": "amount_paid_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountPaid",
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
    "m_loan_charge.amount_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_charge",
        "name": "amount_waived_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountWaived",
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
    "m_loan_charge.amount_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_charge",
        "name": "amount_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountWrittenOff",
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
    "m_loan_charge.amount_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_charge",
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
        "cardinality": 1127,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "46947.397649033795": 0.0009,
          "46198.05986330383": 0.0009,
          "46115.27741980043": 0.0009,
          "45905.376845021194": 0.0009,
          "45307.060621140365": 0.0009
        }
      }
    },
    "m_loan_charge.is_penalty": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "is_penalty",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyCharge",
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
        "cardinality": 2,
        "distinct_sample": [
          0,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.6992,
          "1": 0.3008
        }
      }
    },
    "m_loan_charge.is_paid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_charge",
        "name": "is_paid_derived",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "paid",
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
    "m_loan_charge.waived": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "waived",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "waived",
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
    "m_loan_charge.min_cap": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "min_cap",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minCap",
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
          1000
        ],
        "inferred_format": null,
        "null_rate": 0.8988,
        "top_values": {
          "1000": 0.1012
        }
      }
    },
    "m_loan_charge.max_cap": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "max_cap",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxCap",
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
        "cardinality": 114,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.8988,
        "top_values": {
          "1476440.7": 0.0009,
          "1475475.6": 0.0009,
          "1473914.4": 0.0009,
          "1457437.8": 0.0009,
          "1456859.7": 0.0009
        }
      }
    },
    "m_loan_charge.is_active": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "is_active",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "active",
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
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_loan_charge.external_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge",
        "name": "external_id",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "externalId",
        "java_type": "ExternalId",
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
        "cardinality": 911,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1917,
        "top_values": {
          "CHG0000002": 0.0009,
          "CHG0000003": 0.0009,
          "CHG0000004": 0.0009,
          "CHG0000005": 0.0009,
          "CHG0000006": 0.0009
        }
      }
    },
    "m_loan_charge_paid_by.loan_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge_paid_by",
        "name": "loan_transaction_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanTransaction",
        "java_type": "LoanTransaction",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_transaction_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 382,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "13907": 0.0044,
          "10736": 0.0044,
          "9622": 0.0044,
          "9132": 0.0044,
          "8880": 0.0044
        }
      }
    },
    "m_loan_charge_paid_by.loan_charge_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge_paid_by",
        "name": "loan_charge_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanCharge",
        "java_type": "LoanCharge",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_charge_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 450,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1127": 0.0022,
          "1125": 0.0022,
          "1121": 0.0022,
          "1120": 0.0022,
          "1118": 0.0022
        }
      }
    },
    "m_loan_charge_paid_by.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge_paid_by",
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
        "cardinality": 450,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "29963.27": 0.0022,
          "29910.52": 0.0022,
          "29871.5": 0.0022,
          "29429.99": 0.0022,
          "29393.25": 0.0022
        }
      }
    },
    "m_loan_charge_paid_by.installment_number": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_charge_paid_by",
        "name": "installment_number",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "installmentNumber",
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
        "cardinality": 12,
        "distinct_sample": [
          3,
          4,
          6,
          5,
          1,
          10,
          11,
          8,
          7,
          2,
          12,
          9
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.1044,
          "4": 0.0956,
          "6": 0.0933,
          "5": 0.0867,
          "1": 0.0844,
          "10": 0.0822,
          "11": 0.08,
          "8": 0.0778,
          "7": 0.0778,
          "2": 0.0778
        }
      }
    },
    "m_loan_collateral_management.quantity": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_collateral_management",
        "name": "quantity",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "quantity",
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
        "cardinality": 3,
        "distinct_sample": [
          3,
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.3659,
          "1": 0.3333,
          "2": 0.3008
        }
      }
    },
    "m_loan_collateral_management.transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_collateral_management",
        "name": "transaction_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanTransaction",
        "java_type": "LoanTransaction",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "transaction_id",
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
        "null_rate": 0.6829,
        "top_values": {
          "19021": 0.0081,
          "18367": 0.0081,
          "18352": 0.0081,
          "17240": 0.0081,
          "16705": 0.0081
        }
      }
    },
    "m_loan_collateral_management.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_collateral_management",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 123,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2950": 0.0081,
          "2939": 0.0081,
          "2895": 0.0081,
          "2887": 0.0081,
          "2878": 0.0081
        }
      }
    },
    "m_loan_collateral_management.is_released": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_collateral_management",
        "name": "is_released",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isReleased",
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
    "m_loan_collateral_management.client_collateral_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_collateral_management",
        "name": "client_collateral_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "clientCollateralManagement",
        "java_type": "ClientCollateralManagement",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "client_collateral_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 73,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "21": 0.0407,
          "82": 0.0325,
          "17": 0.0325,
          "96": 0.0244,
          "94": 0.0244
        }
      }
    },
    "m_loan_disbursement_detail.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_disbursement_detail",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2477,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3000": 0.0004,
          "2999": 0.0004,
          "2998": 0.0004,
          "2997": 0.0004,
          "2996": 0.0004
        }
      }
    },
    "m_loan_disbursement_detail.expected_disburse_date": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_disbursement_detail",
        "name": "expected_disburse_date",
        "type": "TEXT",
        "nullable": false,
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
        "cardinality": 514,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0222,
          "2026-07-06": 0.0145,
          "2026-07-05": 0.0145,
          "2026-07-07": 0.0141,
          "2026-07-04": 0.0121
        }
      }
    },
    "m_loan_disbursement_detail.disbursedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_disbursement_detail",
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
        "cardinality": 514,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0222,
          "2026-07-06": 0.0145,
          "2026-07-05": 0.0145,
          "2026-07-07": 0.0141,
          "2026-07-04": 0.0121
        }
      }
    },
    "m_loan_disbursement_detail.principal": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_disbursement_detail",
        "name": "principal",
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
        "present": true,
        "cardinality": 2477,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "199352340.33": 0.0004,
          "199250976.01": 0.0004,
          "198925628.68": 0.0004,
          "198815588.32": 0.0004,
          "198553573.24": 0.0004
        }
      }
    },
    "m_loan_disbursement_detail.net_disbursal_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_disbursement_detail",
        "name": "net_disbursal_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "netDisbursalAmount",
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
        "cardinality": 2477,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "198927674.58": 0.0004,
          "198422603.81": 0.0004,
          "196944929.04": 0.0004,
          "194879764.34": 0.0004,
          "194804904.64": 0.0004
        }
      }
    },
    "m_loan_disbursement_detail.is_reversed": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_disbursement_detail",
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
    "m_loan_installment_charge.loan_charge_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "loan_charge_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loancharge",
        "java_type": "LoanCharge",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_charge_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 1127,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1127": 0.0009,
          "1126": 0.0009,
          "1125": 0.0009,
          "1124": 0.0009,
          "1123": 0.0009
        }
      }
    },
    "m_loan_installment_charge.loan_schedule_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "loan_schedule_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "installment",
        "java_type": "LoanRepaymentScheduleInstallment",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_schedule_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2229,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "63672": 0.0006,
          "63671": 0.0006,
          "63670": 0.0006,
          "63213": 0.0006,
          "63212": 0.0006
        }
      }
    },
    "m_loan_installment_charge.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_installment_charge",
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
        "cardinality": 3380,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "6009.46": 0.0006,
          "9999.8": 0.0003,
          "9997.72": 0.0003,
          "9993.31": 0.0003,
          "9992.03": 0.0003
        }
      }
    },
    "m_loan_installment_charge.amount_paid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "amount_paid_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountPaid",
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
    "m_loan_installment_charge.amount_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "amount_waived_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountWaived",
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
    "m_loan_installment_charge.amount_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "amount_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountWrittenOff",
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
    "m_loan_installment_charge.amount_outstanding_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_installment_charge",
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
    "m_loan_installment_charge.amount_through_charge_payment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "amount_through_charge_payment",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountThroughChargePayment",
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
        "cardinality": 2003,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.4073,
        "top_values": {
          "707": 0.0006,
          "9774.34": 0.0003,
          "9649.56": 0.0003,
          "9528.19": 0.0003,
          "9518.88": 0.0003
        }
      }
    },
    "m_loan_installment_charge.is_paid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "is_paid_derived",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "paid",
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
    "m_loan_installment_charge.waived": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_installment_charge",
        "name": "waived",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "waived",
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
    "m_loan_recalculation_details.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@OneToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 990,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2998": 0.001,
          "2997": 0.001,
          "2996": 0.001,
          "2987": 0.001,
          "2984": 0.001
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
    "m_loan_recalculation_details.rest_frequency_interval": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "rest_frequency_interval",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "restInterval",
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
          7,
          30
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.3485,
          "7": 0.3414,
          "30": 0.3101
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
          3,
          2,
          4,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.5091,
        "top_values": {
          "3": 0.1444,
          "2": 0.1182,
          "4": 0.1172,
          "1": 0.1111
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
          6,
          3,
          7,
          4,
          1,
          2,
          5
        ],
        "inferred_format": null,
        "null_rate": 0.4929,
        "top_values": {
          "6": 0.0828,
          "3": 0.0798,
          "7": 0.0747,
          "4": 0.0707,
          "1": 0.0707,
          "2": 0.0657,
          "5": 0.0626
        }
      }
    },
    "m_loan_recalculation_details.rest_frequency_on_day": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "rest_frequency_on_day",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "restFrequencyOnDay",
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
    "m_loan_recalculation_details.compounding_frequency_interval": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "compounding_frequency_interval",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "compoundingInterval",
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
          30,
          7
        ],
        "inferred_format": null,
        "null_rate": 0.4162,
        "top_values": {
          "1": 0.2,
          "30": 0.1929,
          "7": 0.1909
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
    "m_loan_recalculation_details.compounding_frequency_on_day": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "compounding_frequency_on_day",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "compoundingFrequencyOnDay",
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
    "m_loan_recalculation_details.is_compounding_to_be_posted_as_transaction": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "is_compounding_to_be_posted_as_transaction",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isCompoundingToBePostedAsTransaction",
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
    "m_loan_recalculation_details.allow_compounding_on_eod": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "allow_compounding_on_eod",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "allowCompoundingOnEod",
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
    "m_loan_recalculation_details.disallow_interest_calc_on_past_due": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_recalculation_details",
        "name": "disallow_interest_calc_on_past_due",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "disallowInterestCalculationOnPastDue",
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
          0,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.6717,
          "1": 0.3283
        }
      }
    },
    "m_loan_officer_assignment_history.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 123,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3000": 0.0081,
          "2979": 0.0081,
          "2919": 0.0081,
          "2850": 0.0081,
          "2822": 0.0081
        }
      }
    },
    "m_loan_officer_assignment_history.loan_officer_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "loan_officer_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanOfficer",
        "java_type": "Staff",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_officer_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 8,
        "distinct_sample": [
          3,
          1,
          8,
          7,
          2,
          6,
          5,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.1463,
          "1": 0.1463,
          "8": 0.1341,
          "7": 0.1301,
          "2": 0.126,
          "6": 0.122,
          "5": 0.122,
          "4": 0.0732
        }
      }
    },
    "m_loan_officer_assignment_history.start_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "start_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "startDate",
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
        "cardinality": 203,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-03-07": 0.0122,
          "2025-11-28": 0.0122,
          "2025-10-13": 0.0122,
          "2025-05-16": 0.0122,
          "2025-04-16": 0.0122
        }
      }
    },
    "m_loan_officer_assignment_history.end_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "end_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "endDate",
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
        "cardinality": 103,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.5,
        "top_values": {
          "2026-03-06": 0.0122,
          "2025-11-27": 0.0122,
          "2026-06-04": 0.0081,
          "2026-05-17": 0.0081,
          "2026-05-16": 0.0081
        }
      }
    },
    "m_loan_officer_assignment_history.createdby_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "createdby_id",
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
        "cardinality": 3,
        "distinct_sample": [
          2,
          3,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.3496,
          "3": 0.3415,
          "1": 0.3089
        }
      }
    },
    "m_loan_officer_assignment_history.created_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "created_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "createdDate",
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
        "cardinality": 201,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-04-24": 0.0122,
          "2026-02-06": 0.0122,
          "2026-02-04": 0.0122,
          "2025-06-08": 0.0122,
          "2025-03-19": 0.0122
        }
      }
    },
    "m_loan_officer_assignment_history.lastmodifiedby_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "lastmodifiedby_id",
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
        "cardinality": 3,
        "distinct_sample": [
          2,
          3,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.3577,
          "3": 0.3211,
          "1": 0.3211
        }
      }
    },
    "m_loan_officer_assignment_history.lastmodified_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_officer_assignment_history",
        "name": "lastmodified_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lastModifiedDate",
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
        "cardinality": 201,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-04-24": 0.0122,
          "2026-02-06": 0.0122,
          "2026-02-04": 0.0122,
          "2025-06-08": 0.0122,
          "2025-03-19": 0.0122
        }
      }
    },
    "m_loan_overdue_installment_charge.loan_charge_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_overdue_installment_charge",
        "name": "loan_charge_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loancharge",
        "java_type": "LoanCharge",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_charge_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 82,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1126": 0.0122,
          "1108": 0.0122,
          "1075": 0.0122,
          "1073": 0.0122,
          "1056": 0.0122
        }
      }
    },
    "m_loan_overdue_installment_charge.loan_schedule_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_overdue_installment_charge",
        "name": "loan_schedule_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "installment",
        "java_type": "LoanRepaymentScheduleInstallment",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_schedule_id",
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
    "m_loan_overdue_installment_charge.frequency_number": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_overdue_installment_charge",
        "name": "frequency_number",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "frequencyNumber",
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
          4,
          3,
          1,
          5,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 0.2317,
          "3": 0.2317,
          "1": 0.1951,
          "5": 0.1707,
          "2": 0.1707
        }
      }
    },
    "m_loan_repayment_schedule.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2477,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2994": 0.0019,
          "2987": 0.0019,
          "2937": 0.0019,
          "2933": 0.0019,
          "2927": 0.0019
        }
      }
    },
    "m_loan_repayment_schedule.installment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "installment",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "installmentNumber",
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
        "cardinality": 120,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.0388,
          "2": 0.0388,
          "1": 0.0388,
          "6": 0.0342,
          "5": 0.0342
        }
      }
    },
    "m_loan_repayment_schedule.fromdate": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "fromdate",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "fromDate",
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
        "cardinality": 4296,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0018,
          "2026-08-07": 0.0018,
          "2026-09-06": 0.0017,
          "2026-10-06": 0.0016,
          "2026-07-05": 0.0015
        }
      }
    },
    "m_loan_repayment_schedule.duedate": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "duedate",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "dueDate",
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
        "cardinality": 4296,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-08-07": 0.0018,
          "2026-09-06": 0.0018,
          "2026-10-06": 0.0017,
          "2026-11-05": 0.0016,
          "2026-08-04": 0.0015
        }
      }
    },
    "m_loan_repayment_schedule.principal_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "principal_amount",
        "type": "NUMERIC",
        "nullable": true,
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
        "present": true,
        "cardinality": 2477,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1654613.11": 0.0019,
          "1654314.52": 0.0019,
          "1644859.7": 0.0019,
          "1627481.76": 0.0019,
          "1607809.74": 0.0019
        }
      }
    },
    "m_loan_repayment_schedule.principal_completed_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "principal_completed_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "principalCompleted",
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
        "cardinality": 1707,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.8719,
          "681352.76": 0.0004,
          "1727523.77": 0.0004,
          "1066113.63": 0.0004,
          "387176.43": 0.0004
        }
      }
    },
    "m_loan_repayment_schedule.principal_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "principal_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "principalWrittenOff",
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
    "m_loan_repayment_schedule.interest_amount": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "interest_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestCharged",
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
        "cardinality": 2477,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "912490.8": 0.0019,
          "906727.98": 0.0019,
          "888366.9": 0.0019,
          "876488.4": 0.0019,
          "872370.41": 0.0019
        }
      }
    },
    "m_loan_repayment_schedule.interest_completed_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "interest_completed_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestPaid",
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
        "cardinality": 1707,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.8719,
          "247535.46": 0.0004,
          "488025.46": 0.0004,
          "426871.9": 0.0004,
          "160368.48": 0.0004
        }
      }
    },
    "m_loan_repayment_schedule.interest_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "interest_waived_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestWaived",
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
    "m_loan_repayment_schedule.interest_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "interest_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestWrittenOff",
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
    "m_loan_repayment_schedule.accrual_interest_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "accrual_interest_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestAccrued",
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
    "m_loan_repayment_schedule.reschedule_interest_portion": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "reschedule_interest_portion",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduleInterestPortion",
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
    "m_loan_repayment_schedule.fee_charges_amount": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "fee_charges_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeChargesCharged",
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
        "cardinality": 2226,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9651,
        "top_values": {
          "3080.46": 0.0,
          "1972.08": 0.0,
          "1528.23": 0.0,
          "4999.22": 0.0,
          "4997.58": 0.0
        }
      }
    },
    "m_loan_repayment_schedule.fee_charges_completed_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "fee_charges_completed_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeChargesPaid",
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
    "m_loan_repayment_schedule.fee_charges_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "fee_charges_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeChargesWrittenOff",
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
    "m_loan_repayment_schedule.fee_charges_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "fee_charges_waived_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeChargesWaived",
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
    "m_loan_repayment_schedule.accrual_fee_charges_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "accrual_fee_charges_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeAccrued",
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
    "m_loan_repayment_schedule.penalty_charges_amount": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "penalty_charges_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyCharges",
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
        "cardinality": 429,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9651,
        "top_values": {
          "0": 0.0282,
          "1996.78": 0.0,
          "1996.35": 0.0,
          "1985.28": 0.0,
          "1982.05": 0.0
        }
      }
    },
    "m_loan_repayment_schedule.penalty_charges_completed_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "penalty_charges_completed_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyChargesPaid",
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
    "m_loan_repayment_schedule.penalty_charges_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "penalty_charges_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyChargesWrittenOff",
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
    "m_loan_repayment_schedule.penalty_charges_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "penalty_charges_waived_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyChargesWaived",
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
    "m_loan_repayment_schedule.accrual_penalty_charges_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "accrual_penalty_charges_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyAccrued",
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
    "m_loan_repayment_schedule.total_paid_in_advance_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "total_paid_in_advance_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPaidInAdvance",
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
    "m_loan_repayment_schedule.total_paid_late_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "total_paid_late_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "totalPaidLate",
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
    "m_loan_repayment_schedule.completed_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "completed_derived",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "obligationsMet",
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
        "cardinality": 2,
        "distinct_sample": [
          0,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.8719,
          "1": 0.1281
        }
      }
    },
    "m_loan_repayment_schedule.obligations_met_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "obligations_met_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "obligationsMetOnDate",
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
        "cardinality": 712,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.8719,
        "top_values": {
          "2026-06-13": 0.0009,
          "2026-07-02": 0.0009,
          "2026-07-01": 0.0008,
          "2026-06-10": 0.0008,
          "2026-06-09": 0.0008
        }
      }
    },
    "m_loan_repayment_schedule.recalculated_interest_component": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "recalculated_interest_component",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "recalculatedInterestComponent",
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
    "m_loan_repayment_schedule.is_additional": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "is_additional",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "additional",
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
    "m_loan_repayment_schedule.credits_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "credits_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "creditedPrincipal",
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
    "m_loan_repayment_schedule.credited_interest": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "credited_interest",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "creditedInterest",
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
    "m_loan_repayment_schedule.is_down_payment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
        "name": "is_down_payment",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isDownPayment",
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
    "m_loan_repayment_schedule.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
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
        "cardinality": 514,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:00:00": 0.0179,
          "2026-07-06 09:00:00": 0.016,
          "2026-07-07 09:00:00": 0.0148,
          "2026-07-04 09:00:00": 0.014,
          "2026-07-05 09:00:00": 0.0134
        }
      }
    },
    "m_loan_repayment_schedule.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_repayment_schedule",
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
        "cardinality": 725,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:00:00": 0.0185,
          "2026-07-06 09:00:00": 0.0168,
          "2026-07-07 09:00:00": 0.0156,
          "2026-07-04 09:00:00": 0.0148,
          "2026-07-05 09:00:00": 0.0141
        }
      }
    },
    "m_loan_term_variations.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 247,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2989": 0.004,
          "2956": 0.004,
          "2938": 0.004,
          "2928": 0.004,
          "2910": 0.004
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
    "m_loan_term_variations.applicable_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "applicable_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "termApplicableFrom",
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
        "cardinality": 190,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-10": 0.0162,
          "2026-01-15": 0.0162,
          "2026-05-31": 0.0121,
          "2026-04-05": 0.0121,
          "2026-02-08": 0.0121
        }
      }
    },
    "m_loan_term_variations.decimal_value": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "decimal_value",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "decimalValue",
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
        "cardinality": 247,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "99775.11": 0.004,
          "99658.7": 0.004,
          "99624.03": 0.004,
          "99369.3": 0.004,
          "99253.35": 0.004
        }
      }
    },
    "m_loan_term_variations.date_value": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "date_value",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "dateValue",
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
    "m_loan_term_variations.is_specific_to_installment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "is_specific_to_installment",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isSpecificToInstallment",
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
    "m_loan_term_variations.is_active": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "is_active",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isActive",
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
    "m_loan_term_variations.parent_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
        "name": "parent_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "parent",
        "java_type": "LoanTermVariations",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@OneToOne"
        ],
        "format_pattern": null,
        "join_column": "parent_id",
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
    "m_loan_term_variations.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
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
        "cardinality": 3,
        "distinct_sample": [
          2,
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.3441,
          "1": 0.3441,
          "3": 0.3117
        }
      }
    },
    "m_loan_term_variations.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
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
        "cardinality": 207,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-04-28 09:00:00": 0.0121,
          "2026-03-01 09:00:00": 0.0121,
          "2026-01-28 09:00:00": 0.0121,
          "2025-11-16 09:00:00": 0.0121,
          "2025-07-14 09:00:00": 0.0121
        }
      }
    },
    "m_loan_term_variations.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
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
        "cardinality": 3,
        "distinct_sample": [
          3,
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.3482,
          "2": 0.3401,
          "1": 0.3117
        }
      }
    },
    "m_loan_term_variations.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_term_variations",
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
        "cardinality": 207,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-04-28 09:00:00": 0.0121,
          "2026-03-01 09:00:00": 0.0121,
          "2026-01-28 09:00:00": 0.0121,
          "2025-11-16 09:00:00": 0.0121,
          "2025-07-14 09:00:00": 0.0121
        }
      }
    },
    "m_loan_transaction.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 2477,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2818": 0.0009,
          "399": 0.0009,
          "549": 0.0009,
          "843": 0.0009,
          "121": 0.0008
        }
      }
    },
    "m_loan_transaction.office_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "office_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "office",
        "java_type": "Office",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "office_id",
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
    "m_loan_transaction.payment_detail_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "payment_detail_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "paymentDetail",
        "java_type": "PaymentDetail",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "payment_detail_id",
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
    "m_loan_transaction.transaction_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "transaction_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "dateOf",
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
        "cardinality": 599,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0624,
          "2026-07-07": 0.0403,
          "2026-07-06": 0.0321,
          "2026-07-05": 0.0289,
          "2026-07-04": 0.0241
        }
      }
    },
    "m_loan_transaction.submitted_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "submitted_on_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedOnDate",
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
        "cardinality": 599,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0624,
          "2026-07-07": 0.0403,
          "2026-07-06": 0.0321,
          "2026-07-05": 0.0289,
          "2026-07-04": 0.0241
        }
      }
    },
    "m_loan_transaction.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
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
        "cardinality": 19999,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "51542.58": 0.0001,
          "3630662.25": 0.0001,
          "3619113.33": 0.0001,
          "3605625.5": 0.0001,
          "3585922.47": 0.0001
        }
      }
    },
    "m_loan_transaction.principal_portion_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_transaction",
        "name": "principal_portion_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "principalPortion",
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
        "cardinality": 19999,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "43811.193": 0.0001,
          "3086062.9125": 0.0001,
          "3076246.3305": 0.0001,
          "3064781.675": 0.0001,
          "3048034.0995": 0.0001
        }
      }
    },
    "m_loan_transaction.interest_portion_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_transaction",
        "name": "interest_portion_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "interestPortion",
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
        "cardinality": 19999,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "7731.387": 0.0001,
          "544599.3375": 0.0001,
          "542866.9995": 0.0001,
          "540843.825": 0.0001,
          "537888.3705": 0.0001
        }
      }
    },
    "m_loan_transaction.fee_charges_portion_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_transaction",
        "name": "fee_charges_portion_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeChargesPortion",
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
    "m_loan_transaction.penalty_charges_portion_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_transaction",
        "name": "penalty_charges_portion_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyChargesPortion",
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
    "m_loan_transaction.overpayment_portion_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_transaction",
        "name": "overpayment_portion_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "overPaymentPortion",
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
    "m_loan_transaction.unrecognized_income_portion": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "unrecognized_income_portion",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "unrecognizedIncomePortion",
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
    "m_loan_transaction.is_reversed": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
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
    "m_loan_transaction.external_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "external_id",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "externalId",
        "java_type": "ExternalId",
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
        "cardinality": 16880,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.156,
        "top_values": {
          "TXL00000001": 0.0001,
          "TXL00000002": 0.0001,
          "TXL00000003": 0.0001,
          "TXL00000004": 0.0001,
          "TXL00000005": 0.0001
        }
      }
    },
    "m_loan_transaction.reversal_external_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "reversal_external_id",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reversalExternalId",
        "java_type": "ExternalId",
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
    "m_loan_transaction.reversed_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "reversed_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reversedOnDate",
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
        "cardinality": 138,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9908,
        "top_values": {
          "2026-02-23": 0.0002,
          "2026-05-07": 0.0001,
          "2026-04-08": 0.0001,
          "2026-03-29": 0.0001,
          "2026-03-25": 0.0001
        }
      }
    },
    "m_loan_transaction.outstanding_loan_balance_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_transaction",
        "name": "outstanding_loan_balance_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "outstandingLoanBalance",
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
    "m_loan_transaction.manually_adjusted_or_reversed": {
      "archetype": "lineage",
      "schema": {
        "table": "m_loan_transaction",
        "name": "manually_adjusted_or_reversed",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "manuallyAdjustedOrReversed",
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
    "m_loan_transaction.charge_refund_charge_type": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
        "name": "charge_refund_charge_type",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargeRefundChargeType",
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
    "m_loan_transaction.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_loan_transaction.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_loan_transaction_relation.from_loan_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "from_loan_transaction_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "fromTransaction",
        "java_type": "LoanTransaction",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "from_loan_transaction_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 281,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1830": 0.01,
          "1571": 0.01,
          "2791": 0.0067,
          "2790": 0.0067,
          "2638": 0.0067
        }
      }
    },
    "m_loan_transaction_relation.to_loan_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "to_loan_transaction_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "toTransaction",
        "java_type": "LoanTransaction",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "to_loan_transaction_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 288,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2956": 0.01,
          "2681": 0.0067,
          "2279": 0.0067,
          "2133": 0.0067,
          "2123": 0.0067
        }
      }
    },
    "m_loan_transaction_relation.to_loan_charge_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "to_loan_charge_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "toCharge",
        "java_type": "LoanCharge",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "to_loan_charge_id",
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
    },
    "m_loan_transaction_relation.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "created_by",
        "type": "INTEGER",
        "nullable": false,
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
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 1.0
        }
      }
    },
    "m_loan_transaction_relation.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "created_on_utc",
        "type": "TEXT",
        "nullable": false,
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
          ""
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "": 1.0
        }
      }
    },
    "m_loan_transaction_relation.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "last_modified_by",
        "type": "INTEGER",
        "nullable": false,
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
          0
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 1.0
        }
      }
    },
    "m_loan_transaction_relation.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_transaction_relation",
        "name": "last_modified_on_utc",
        "type": "TEXT",
        "nullable": false,
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
          ""
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "": 1.0
        }
      }
    },
    "m_loan_reage_parameter.loan_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "loan_transaction_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loanTransaction",
        "java_type": "LoanTransaction",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@OneToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_transaction_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 59,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2847": 0.0333,
          "2947": 0.0167,
          "2886": 0.0167,
          "2876": 0.0167,
          "2852": 0.0167
        }
      }
    },
    "m_loan_reage_parameter.frequency_number": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "frequency_number",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "frequencyNumber",
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
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.4,
          "1": 0.3167,
          "2": 0.2833
        }
      }
    },
    "m_loan_reage_parameter.start_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "start_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "startDate",
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
        "cardinality": 54,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-24": 0.0333,
          "2026-04-22": 0.0333,
          "2026-03-03": 0.0333,
          "2026-02-26": 0.0333,
          "2026-02-12": 0.0333
        }
      }
    },
    "m_loan_reage_parameter.number_of_installments": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "number_of_installments",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "numberOfInstallments",
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
        "cardinality": 10,
        "distinct_sample": [
          6,
          11,
          4,
          10,
          5,
          9,
          8,
          3,
          7,
          12
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "6": 0.1667,
          "11": 0.15,
          "4": 0.1333,
          "10": 0.1,
          "5": 0.1,
          "9": 0.0833,
          "8": 0.0833,
          "3": 0.0833,
          "7": 0.0667,
          "12": 0.0333
        }
      }
    },
    "m_loan_reage_parameter.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "created_by",
        "type": "INTEGER",
        "nullable": false,
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
    "m_loan_reage_parameter.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "created_on_utc",
        "type": "TEXT",
        "nullable": false,
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
        "cardinality": 60,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439771": 0.0167,
          "2026-07-08 09:35:28.439737": 0.0167,
          "2026-07-08 09:35:28.439701": 0.0167,
          "2026-07-08 09:35:28.439660": 0.0167,
          "2026-07-08 09:35:28.439626": 0.0167
        }
      }
    },
    "m_loan_reage_parameter.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "last_modified_by",
        "type": "INTEGER",
        "nullable": false,
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
    "m_loan_reage_parameter.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reage_parameter",
        "name": "last_modified_on_utc",
        "type": "TEXT",
        "nullable": false,
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
        "cardinality": 60,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439772": 0.0167,
          "2026-07-08 09:35:28.439738": 0.0167,
          "2026-07-08 09:35:28.439702": 0.0167,
          "2026-07-08 09:35:28.439662": 0.0167,
          "2026-07-08 09:35:28.439628": 0.0167
        }
      }
    },
    "m_loan_reschedule_request.loan_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "loan_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "loan",
        "java_type": "Loan",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "loan_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 123,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3000": 0.0081,
          "2974": 0.0081,
          "2871": 0.0081,
          "2860": 0.0081,
          "2840": 0.0081
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
    "m_loan_reschedule_request.reschedule_from_installment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "reschedule_from_installment",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduleFromInstallment",
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
        "cardinality": 10,
        "distinct_sample": [
          10,
          9,
          1,
          5,
          3,
          4,
          7,
          8,
          2,
          6
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "10": 0.122,
          "9": 0.122,
          "1": 0.122,
          "5": 0.1057,
          "3": 0.1057,
          "4": 0.0976,
          "7": 0.0894,
          "8": 0.0813,
          "2": 0.0813,
          "6": 0.0732
        }
      }
    },
    "m_loan_reschedule_request.reschedule_from_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "reschedule_from_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduleFromDate",
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
        "cardinality": 89,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-24": 0.0244,
          "2026-06-10": 0.0244,
          "2026-06-07": 0.0244,
          "2026-05-21": 0.0244,
          "2026-05-20": 0.0244
        }
      }
    },
    "m_loan_reschedule_request.recalculate_interest": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "recalculate_interest",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "recalculateInterest",
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
          43,
          42
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "43": 0.5122,
          "42": 0.4878
        }
      }
    },
    "m_loan_reschedule_request.reschedule_reason_comment": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "reschedule_reason_comment",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rescheduleReasonComment",
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
    "m_loan_reschedule_request.submitted_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "submitted_on_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedOnDate",
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
        "cardinality": 65,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-04-23": 0.0569,
          "2026-07-07": 0.0325,
          "2026-07-06": 0.0325,
          "2026-06-12": 0.0325,
          "2026-06-05": 0.0325
        }
      }
    },
    "m_loan_reschedule_request.submitted_by_user_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "submitted_by_user_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedByUser",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "submitted_by_user_id",
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
    "m_loan_reschedule_request.approved_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "approved_on_date",
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_loan_reschedule_request.approved_by_user_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "approved_by_user_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "approvedByUser",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "approved_by_user_id",
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
    "m_loan_reschedule_request.rejected_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "rejected_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectedOnDate",
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
    "m_loan_reschedule_request.rejected_by_user_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_loan_reschedule_request",
        "name": "rejected_by_user_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectedByUser",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "rejected_by_user_id",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_deposit_account_on_hold_transaction.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
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
    "m_deposit_account_on_hold_transaction.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_account_on_hold_transaction",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
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
          "2026-08-04": 0.0524,
          "2026-07-14": 0.047,
          "2026-07-10": 0.0452,
          "2026-08-01": 0.0434,
          "2026-08-02": 0.0416
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
    "m_deposit_product_term_and_preclosure.savings_product_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_deposit_product_term_and_preclosure",
        "name": "savings_product_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "product",
        "java_type": "FixedDepositProduct",
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
        "cardinality": 2,
        "distinct_sample": [
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.5,
          "2": 0.5
        }
      }
    },
    "m_savings_product.name": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "name",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "name",
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
        "cardinality": 3,
        "distinct_sample": [
          "자유입출금",
          "정기예금",
          "정기적금"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "자유입출금": 0.3333,
          "정기예금": 0.3333,
          "정기적금": 0.3333
        }
      }
    },
    "m_savings_product.short_name": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "short_name",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "shortName",
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
        "cardinality": 3,
        "distinct_sample": [
          "FXD",
          "RCR",
          "SAV"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "FXD": 0.3333,
          "RCR": 0.3333,
          "SAV": 0.3333
        }
      }
    },
    "m_savings_product.description": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "description",
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
    "m_savings_product.nominal_annual_interest_rate": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "nominal_annual_interest_rate",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "nominalAnnualInterestRate",
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
        "cardinality": 3,
        "distinct_sample": [
          3.5,
          3,
          1.5
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3.5": 0.3333,
          "3": 0.3333,
          "1.5": 0.3333
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
    "m_savings_product.min_required_opening_balance": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "min_required_opening_balance",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minRequiredOpeningBalance",
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
    "m_savings_product.lockin_period_frequency": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "lockin_period_frequency",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lockinPeriodFrequency",
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
    "m_savings_product.withdrawal_fee_for_transfer": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "withdrawal_fee_for_transfer",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawalFeeApplicableForTransfer",
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
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_savings_product.allow_overdraft": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "allow_overdraft",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "allowOverdraft",
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
    "m_savings_product.overdraft_limit": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "overdraft_limit",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "overdraftLimit",
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
    "m_savings_product.nominal_annual_interest_rate_overdraft": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "nominal_annual_interest_rate_overdraft",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "nominalAnnualInterestRateOverdraft",
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
    "m_savings_product.min_overdraft_for_interest_calculation": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "min_overdraft_for_interest_calculation",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minOverdraftForInterestCalculation",
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
    "m_savings_product.enforce_min_required_balance": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "enforce_min_required_balance",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "enforceMinRequiredBalance",
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
    "m_savings_product.min_required_balance": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "min_required_balance",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minRequiredBalance",
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
    "m_savings_product.is_lien_allowed": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "is_lien_allowed",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lienAllowed",
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
    "m_savings_product.max_allowed_lien_limit": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "max_allowed_lien_limit",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxAllowedLienLimit",
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
    "m_savings_product.min_balance_for_interest_calculation": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "min_balance_for_interest_calculation",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minBalanceForInterestCalculation",
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
    "m_savings_product.withhold_tax": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "withhold_tax",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withHoldTax",
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
    "m_savings_product.tax_group_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "tax_group_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "taxGroup",
        "java_type": "TaxGroup",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "tax_group_id",
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
    "m_savings_product.is_dormancy_tracking_active": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "is_dormancy_tracking_active",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isDormancyTrackingActive",
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
    "m_savings_product.days_to_inactive": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "days_to_inactive",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "daysToInactive",
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
    "m_savings_product.days_to_dormancy": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "days_to_dormancy",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "daysToDormancy",
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
    "m_savings_product.days_to_escheat": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_product",
        "name": "days_to_escheat",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "daysToEscheat",
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
    "m_savings_account.account_no": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
        "cardinality": 1500,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "S2000000": 0.0007,
          "S2000001": 0.0007,
          "S2000002": 0.0007,
          "S2000003": 0.0007,
          "S2000004": 0.0007
        }
      }
    },
    "m_savings_account.external_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "external_id",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "externalId",
        "java_type": "ExternalId",
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
        "cardinality": 1217,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1887,
        "top_values": {
          "SAV0000001": 0.0007,
          "SAV0000002": 0.0007,
          "SAV0000003": 0.0007,
          "SAV0000004": 0.0007,
          "SAV0000005": 0.0007
        }
      }
    },
    "m_savings_account.client_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
        "cardinality": 651,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "731": 0.0053,
          "372": 0.0047,
          "806": 0.0047,
          "982": 0.0047,
          "90": 0.004
        }
      }
    },
    "m_savings_account.group_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "group_id",
        "type": "INTEGER",
        "nullable": true,
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_savings_account.gsim_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "gsim_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "gsim",
        "java_type": "GroupSavingsIndividualMonitoring",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "gsim_id",
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
    "m_savings_account.product_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "product_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "product",
        "java_type": "SavingsProduct",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "product_id",
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
          "1": 0.6027,
          "2": 0.2627,
          "3": 0.1347
        }
      }
    },
    "m_savings_account.field_officer_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "field_officer_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsOfficer",
        "java_type": "Staff",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "field_officer_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 8,
        "distinct_sample": [
          4,
          6,
          2,
          1,
          7,
          8,
          3,
          5
        ],
        "inferred_format": null,
        "null_rate": 0.2833,
        "top_values": {
          "4": 0.0993,
          "6": 0.0933,
          "2": 0.0927,
          "1": 0.092,
          "7": 0.0867,
          "8": 0.0847,
          "3": 0.0847,
          "5": 0.0833
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
    "m_savings_account.submittedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "submittedon_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedOnDate",
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
        "cardinality": 822,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2025-07-08": 0.0033,
          "2025-04-27": 0.0033,
          "2025-03-21": 0.0033,
          "2025-03-14": 0.0033,
          "2024-04-19": 0.0033
        }
      }
    },
    "m_savings_account.submittedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "submittedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "submittedon_userid",
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
          "1": 0.3467,
          "2": 0.328,
          "3": 0.3253
        }
      }
    },
    "m_savings_account.rejectedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "rejectedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectedOnDate",
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
    "m_savings_account.rejectedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "rejectedon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "rejectedBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "rejectedon_userid",
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
    "m_savings_account.withdrawnon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "withdrawnon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawnOnDate",
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
    "m_savings_account.withdrawnon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "withdrawnon_userid",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawnBy",
        "java_type": "AppUser",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "withdrawnon_userid",
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
    "m_savings_account.approvedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
        "cardinality": 628,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.0407,
        "top_values": {
          "2026-06-14": 0.008,
          "2026-07-08": 0.0067,
          "2026-07-05": 0.0067,
          "2026-07-06": 0.006,
          "2026-07-02": 0.006
        }
      }
    },
    "m_savings_account.approvedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
          3,
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.0407,
        "top_values": {
          "3": 0.332,
          "2": 0.3227,
          "1": 0.3047
        }
      }
    },
    "m_savings_account.activatedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "activatedon_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "activatedOnDate",
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
        "cardinality": 416,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.0753,
        "top_values": {
          "2026-07-07": 0.024,
          "2026-07-08": 0.0207,
          "2026-07-06": 0.016,
          "2026-07-03": 0.0147,
          "2026-07-02": 0.0127
        }
      }
    },
    "m_savings_account.activatedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
        "null_rate": 0.0933,
        "top_values": {
          "1": 0.34,
          "3": 0.29,
          "2": 0.2767
        }
      }
    },
    "m_savings_account.closedon_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
        "cardinality": 122,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9013,
        "top_values": {
          "2026-06-29": 0.0013,
          "2026-06-19": 0.0013,
          "2026-06-18": 0.0013,
          "2026-06-13": 0.0013,
          "2026-06-10": 0.0013
        }
      }
    },
    "m_savings_account.closedon_userid": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.9013,
        "top_values": {
          "3": 0.036,
          "2": 0.032,
          "1": 0.0307
        }
      }
    },
    "m_savings_account.reason_for_block": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "reason_for_block",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reasonForBlock",
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
    "m_savings_account.nominal_annual_interest_rate": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "nominal_annual_interest_rate",
        "type": "NUMERIC",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "nominalAnnualInterestRate",
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
        "cardinality": 3,
        "distinct_sample": [
          1.5,
          3.5,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1.5": 0.6027,
          "3.5": 0.2627,
          "3": 0.1347
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
    "m_savings_account.min_required_opening_balance": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "min_required_opening_balance",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minRequiredOpeningBalance",
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
    "m_savings_account.lockin_period_frequency": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "lockin_period_frequency",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lockinPeriodFrequency",
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
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.606,
          "1": 0.1993,
          "3": 0.1947
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
        "cardinality": 378,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.6547,
        "top_values": {
          "2028-06-15": 0.0033,
          "2028-04-22": 0.0027,
          "2027-09-07": 0.0027,
          "2026-10-09": 0.0027,
          "2028-06-14": 0.002
        }
      }
    },
    "m_savings_account.withdrawal_fee_for_transfer": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "withdrawal_fee_for_transfer",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withdrawalFeeApplicableForTransfer",
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
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_savings_account.allow_overdraft": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "allow_overdraft",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "allowOverdraft",
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
    "m_savings_account.overdraft_limit": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "overdraft_limit",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "overdraftLimit",
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
    "m_savings_account.nominal_annual_interest_rate_overdraft": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "nominal_annual_interest_rate_overdraft",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "nominalAnnualInterestRateOverdraft",
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
    "m_savings_account.min_overdraft_for_interest_calculation": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "min_overdraft_for_interest_calculation",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minOverdraftForInterestCalculation",
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
    "m_savings_account.enforce_min_required_balance": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "enforce_min_required_balance",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "enforceMinRequiredBalance",
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
    "m_savings_account.min_required_balance": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "min_required_balance",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minRequiredBalance",
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
    "m_savings_account.is_lien_allowed": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "is_lien_allowed",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lienAllowed",
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
    "m_savings_account.max_allowed_lien_limit": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "max_allowed_lien_limit",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "maxAllowedLienLimit",
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
        "cardinality": 157,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.8953,
        "top_values": {
          "49860.29": 0.0007,
          "49472.06": 0.0007,
          "49255.09": 0.0007,
          "48523.59": 0.0007,
          "48513.2": 0.0007
        }
      }
    },
    "m_savings_account.start_interest_calculation_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "start_interest_calculation_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "startInterestCalculationDate",
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
    "m_savings_account.min_balance_for_interest_calculation": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "min_balance_for_interest_calculation",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "minBalanceForInterestCalculation",
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
    "m_savings_account.withhold_tax": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "withhold_tax",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "withHoldTax",
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
    "m_savings_account.tax_group_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
        "name": "tax_group_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "taxGroup",
        "java_type": "TaxGroup",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "tax_group_id",
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
    "m_savings_account.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
    "m_savings_account.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_savings_account.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
    "m_savings_account.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_savings_account_charge.savings_account_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
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
        "cardinality": 272,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1498": 0.0037,
          "1492": 0.0037,
          "1489": 0.0037,
          "1485": 0.0037,
          "1484": 0.0037
        }
      }
    },
    "m_savings_account_charge.charge_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "charge_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "charge",
        "java_type": "Charge",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "charge_id",
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
    "m_savings_account_charge.charge_due_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "charge_due_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "dueDate",
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
    "m_savings_account_charge.fee_on_month": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "fee_on_month",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeOnMonth",
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
    "m_savings_account_charge.fee_on_day": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "fee_on_day",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeOnDay",
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
    "m_savings_account_charge.fee_interval": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "fee_interval",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "feeInterval",
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
    "m_savings_account_charge.free_withdrawal_count": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "free_withdrawal_count",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "freeWithdrawalCount",
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
    "m_savings_account_charge.charge_reset_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "charge_reset_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "chargeResetDate",
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
    "m_savings_account_charge.calculation_percentage": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "calculation_percentage",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "percentage",
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
    "m_savings_account_charge.calculation_on_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "calculation_on_amount",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountPercentageAppliedTo",
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
    "m_savings_account_charge.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
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
        "cardinality": 272,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4997.69": 0.0037,
          "4952.53": 0.0037,
          "4919.09": 0.0037,
          "4902.28": 0.0037,
          "4871.04": 0.0037
        }
      }
    },
    "m_savings_account_charge.amount_paid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "amount_paid_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountPaid",
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
    "m_savings_account_charge.amount_waived_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "amount_waived_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountWaived",
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
    "m_savings_account_charge.amount_writtenoff_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "amount_writtenoff_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "amountWrittenOff",
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
    "m_savings_account_charge.is_penalty": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "is_penalty",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "penaltyCharge",
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
    "m_savings_account_charge.is_paid_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "is_paid_derived",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "paid",
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
    "m_savings_account_charge.waived": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "waived",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "waived",
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
    "m_savings_account_charge.is_active": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "is_active",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "status",
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
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_savings_account_charge.inactivated_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
        "name": "inactivated_on_date",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "inactivationDate",
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
    "m_savings_account_charge.created_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
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
    "m_savings_account_charge.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_savings_account_charge.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
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
    "m_savings_account_charge.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge",
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
          "2026-07-08 09:35:28.439822"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08 09:35:28.439822": 1.0
        }
      }
    },
    "m_savings_account_charge_paid_by.savings_account_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge_paid_by",
        "name": "savings_account_transaction_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsAccountTransaction",
        "java_type": "SavingsAccountTransaction",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "savings_account_transaction_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 81,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "6412": 0.0123,
          "5167": 0.0123,
          "3463": 0.0123,
          "3420": 0.0123,
          "2713": 0.0123
        }
      }
    },
    "m_savings_account_charge_paid_by.savings_account_charge_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge_paid_by",
        "name": "savings_account_charge_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "savingsAccountCharge",
        "java_type": "SavingsAccountCharge",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "savings_account_charge_id",
        "deprecated": false
      },
      "reftable": {
        "present": false
      },
      "profile": {
        "present": true,
        "cardinality": 81,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "271": 0.0123,
          "265": 0.0123,
          "261": 0.0123,
          "256": 0.0123,
          "252": 0.0123
        }
      }
    },
    "m_savings_account_charge_paid_by.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_charge_paid_by",
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
        "cardinality": 81,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4885.28": 0.0123,
          "4879.77": 0.0123,
          "4867.69": 0.0123,
          "4567.02": 0.0123,
          "4551.63": 0.0123
        }
      }
    },
    "m_savings_account_transaction.savings_account_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
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
        "cardinality": 1359,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "823": 0.002,
          "690": 0.0019,
          "571": 0.0017,
          "1363": 0.0017,
          "818": 0.0016
        }
      }
    },
    "m_savings_account_transaction.office_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "office_id",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "office",
        "java_type": "Office",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "office_id",
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
    "m_savings_account_transaction.payment_detail_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "payment_detail_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "paymentDetail",
        "java_type": "PaymentDetail",
        "is_id": false,
        "enum": null,
        "annotations": [
          "@ManyToOne"
        ],
        "format_pattern": null,
        "join_column": "payment_detail_id",
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
    "m_savings_account_transaction.transaction_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "transaction_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "dateOf",
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
        "cardinality": 534,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0654,
          "2026-07-07": 0.0484,
          "2026-07-06": 0.0357,
          "2026-07-03": 0.0231,
          "2026-07-05": 0.0227
        }
      }
    },
    "m_savings_account_transaction.amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
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
        "cardinality": 10000,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3901313.92": 0.0001,
          "3357818.94": 0.0001,
          "3239343.7": 0.0001,
          "2718491.94": 0.0001,
          "2519665.58": 0.0001
        }
      }
    },
    "m_savings_account_transaction.is_reversed": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
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
    "m_savings_account_transaction.running_balance_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "running_balance_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "runningBalance",
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
    "m_savings_account_transaction.cumulative_balance_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "cumulative_balance_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "cumulativeBalance",
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
    "m_savings_account_transaction.balance_end_date_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "balance_end_date_derived",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "balanceEndDate",
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
        "cardinality": 534,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0654,
          "2026-07-07": 0.0484,
          "2026-07-06": 0.0357,
          "2026-07-03": 0.0231,
          "2026-07-05": 0.0227
        }
      }
    },
    "m_savings_account_transaction.balance_number_of_days_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "balance_number_of_days_derived",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "balanceNumberOfDays",
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
    "m_savings_account_transaction.overdraft_amount_derived": {
      "archetype": "lineage",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "overdraft_amount_derived",
        "type": "NUMERIC",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "overdraftAmount",
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
    "m_savings_account_transaction.created_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
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
          ""
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "": 1.0
        }
      }
    },
    "m_savings_account_transaction.submitted_on_date": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "submitted_on_date",
        "type": "TEXT",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "submittedOnDate",
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
        "cardinality": 534,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-08": 0.0654,
          "2026-07-07": 0.0484,
          "2026-07-06": 0.0357,
          "2026-07-03": 0.0231,
          "2026-07-05": 0.0227
        }
      }
    },
    "m_savings_account_transaction.is_manual": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "is_manual",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isManualTransaction",
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
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 1.0
        }
      }
    },
    "m_savings_account_transaction.is_loan_disbursement": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "is_loan_disbursement",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "isLoanDisbursement",
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_savings_account_transaction.release_id_of_hold_amount": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "release_id_of_hold_amount",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "releaseIdOfHoldAmountTransaction",
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
    "m_savings_account_transaction.reason_for_block": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "reason_for_block",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reasonForBlock",
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
    "m_savings_account_transaction.is_reversal": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "is_reversal",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "reversalTransaction",
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
    "m_savings_account_transaction.original_transaction_id": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "original_transaction_id",
        "type": "INTEGER",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "originalTxnId",
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
    "m_savings_account_transaction.is_lien_transaction": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "is_lien_transaction",
        "type": "INTEGER",
        "nullable": false,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "lienTransaction",
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
    "m_savings_account_transaction.ref_no": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
        "name": "ref_no",
        "type": "TEXT",
        "nullable": true,
        "pk": false,
        "fk": null
      },
      "orm": {
        "present": true,
        "field": "refNo",
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
        "cardinality": 10000,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "TXR1000839726": 0.0001,
          "TXR1001227959": 0.0001,
          "TXR1002028850": 0.0001,
          "TXR1002502517": 0.0001,
          "TXR1002609244": 0.0001
        }
      }
    },
    "m_savings_account_transaction.created_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_savings_account_transaction.last_modified_by": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
      }
    },
    "m_savings_account_transaction.last_modified_on_utc": {
      "archetype": "자명",
      "schema": {
        "table": "m_savings_account_transaction",
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
