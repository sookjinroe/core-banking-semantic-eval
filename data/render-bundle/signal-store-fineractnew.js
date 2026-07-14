// 생성됨: scripts/build_render_bundle.py — 직접 수정 금지. Fineract SIGNAL_STORE (584 컬럼).
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
        "cardinality": 100,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "C1000000": 0.01,
          "C1000001": 0.01,
          "C1000002": 0.01,
          "C1000003": 0.01,
          "C1000004": 0.01
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
          5,
          2,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.28,
          "5": 0.27,
          "2": 0.23,
          "4": 0.22
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
        "cardinality": 1,
        "distinct_sample": [
          5
        ],
        "inferred_format": null,
        "null_rate": 0.99,
        "top_values": {
          "5": 0.01
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
        "cardinality": 28,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.72,
        "top_values": {
          "988": 0.01,
          "951": 0.01,
          "844": 0.01,
          "770": 0.01,
          "763": 0.01
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
        "cardinality": 5,
        "distinct_sample": [
          300,
          100,
          600,
          700,
          800
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.75,
          "100": 0.1,
          "600": 0.09,
          "700": 0.03,
          "800": 0.03
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "cardinality": 84,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1,
        "top_values": {
          "2026-07-08": 0.02,
          "2026-05-15": 0.02,
          "2026-04-12": 0.02,
          "2026-02-24": 0.02,
          "2025-12-19": 0.02
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
        "cardinality": 68,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.25,
        "top_values": {
          "2026-05-16": 0.03,
          "2026-05-06": 0.02,
          "2026-04-21": 0.02,
          "2026-02-19": 0.02,
          "2025-09-12": 0.02
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
        "cardinality": 67,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "혜진": 0.04,
          "지훈": 0.04,
          "은주": 0.04,
          "영환": 0.04,
          "영식": 0.04
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
        "cardinality": 6,
        "distinct_sample": [
          "지아",
          "중수",
          "영식",
          "성훈",
          "민서",
          "도윤"
        ],
        "inferred_format": null,
        "null_rate": 0.94,
        "top_values": {
          "지아": 0.01,
          "중수": 0.01,
          "영식": 0.01,
          "성훈": 0.01,
          "민서": 0.01,
          "도윤": 0.01
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
        "cardinality": 29,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "김": 0.28,
          "이": 0.18,
          "박": 0.11,
          "최": 0.06,
          "윤": 0.04
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
        "cardinality": 3,
        "distinct_sample": [
          "주식회사 서울",
          "주식회사 대한",
          "주식회사 새마을"
        ],
        "inferred_format": null,
        "null_rate": 0.87,
        "top_values": {
          "주식회사 서울": 0.05,
          "주식회사 대한": 0.05,
          "주식회사 새마을": 0.03
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
        "cardinality": 94,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "박혜진": 0.02,
          "김지훈": 0.02,
          "김지아": 0.02,
          "김은주": 0.02,
          "김영식": 0.02
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
        "cardinality": 96,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.04,
        "top_values": {
          "010-1022-6894": 0.01,
          "010-1034-1703": 0.01,
          "010-1084-4985": 0.01,
          "010-1088-5811": 0.01,
          "010-1364-4704": 0.01
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
        "cardinality": 87,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.13,
        "top_values": {
          "황8837@daum.net": 0.01,
          "하9500@gmail.com": 0.01,
          "최8471@daum.net": 0.01,
          "최7865@kakao.com": 0.01,
          "최7208@naver.com": 0.01
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
        "cardinality": 89,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.11,
        "top_values": {
          "CIF10508807": 0.01,
          "CIF11871868": 0.01,
          "CIF13591510": 0.01,
          "CIF15533950": 0.01,
          "CIF15892050": 0.01
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
        "cardinality": 98,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1988-04-18": 0.02,
          "1967-11-22": 0.02,
          "2007-03-25": 0.01,
          "2005-11-25": 0.01,
          "2004-03-21": 0.01
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
          "15": 0.53,
          "16": 0.47
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
          5,
          7,
          3,
          4,
          2,
          6,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "8": 0.16,
          "5": 0.15,
          "7": 0.14,
          "3": 0.13,
          "4": 0.12,
          "2": 0.12,
          "6": 0.09,
          "1": 0.09
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
        "null_rate": 0.91,
        "top_values": {
          "21": 0.04,
          "23": 0.03,
          "22": 0.02
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
        "cardinality": 9,
        "distinct_sample": [
          "2026-06-11",
          "2026-05-15",
          "2026-05-01",
          "2026-02-07",
          "2025-11-18",
          "2025-11-12",
          "2025-10-03",
          "2025-08-12",
          "2025-08-03"
        ],
        "inferred_format": null,
        "null_rate": 0.91,
        "top_values": {
          "2026-06-11": 0.01,
          "2026-05-15": 0.01,
          "2026-05-01": 0.01,
          "2026-02-07": 0.01,
          "2025-11-18": 0.01,
          "2025-11-12": 0.01,
          "2025-10-03": 0.01,
          "2025-08-12": 0.01,
          "2025-08-03": 0.01
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
          26,
          25,
          24
        ],
        "inferred_format": null,
        "null_rate": 0.97,
        "top_values": {
          "26": 0.01,
          "25": 0.01,
          "24": 0.01
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "null_rate": 0.97,
        "top_values": {
          "27": 0.02,
          "28": 0.01
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
        "cardinality": 3,
        "distinct_sample": [
          "2025-05-12",
          "2025-03-21",
          "2024-12-24"
        ],
        "inferred_format": null,
        "null_rate": 0.97,
        "top_values": {
          "2025-05-12": 0.01,
          "2025-03-21": 0.01,
          "2024-12-24": 0.01
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
        "cardinality": 2,
        "distinct_sample": [
          3,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.97,
        "top_values": {
          "3": 0.02,
          "1": 0.01
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
        "cardinality": 1,
        "distinct_sample": [
          "2025-07-29"
        ],
        "inferred_format": null,
        "null_rate": 0.99,
        "top_values": {
          "2025-07-29": 0.01
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
        "cardinality": 1,
        "distinct_sample": [
          1
        ],
        "inferred_format": null,
        "null_rate": 0.99,
        "top_values": {
          "1": 0.01
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
          1,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.91,
        "top_values": {
          "1": 0.05,
          "3": 0.02,
          "2": 0.02
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
        "cardinality": 96,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-04-01": 0.02,
          "2024-10-23": 0.02,
          "2024-08-07": 0.02,
          "2023-09-18": 0.02,
          "2026-07-12": 0.01
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
          2,
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.25,
        "top_values": {
          "2": 0.26,
          "1": 0.26,
          "3": 0.23
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
          2,
          3,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.68,
        "top_values": {
          "2": 0.12,
          "3": 0.11,
          "1": 0.09
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
        "cardinality": 30,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.68,
        "top_values": {
          "93": 0.02,
          "42": 0.02,
          "147": 0.01,
          "146": 0.01,
          "143": 0.01
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
          "29": 0.69,
          "30": 0.19,
          "31": 0.12
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
          "17": 0.53,
          "18": 0.22,
          "20": 0.17,
          "19": 0.08
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
          "1": 0.87,
          "2": 0.13
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "cardinality": 1,
        "distinct_sample": [
          "2026-05-01"
        ],
        "inferred_format": null,
        "null_rate": 0.99,
        "top_values": {
          "2026-05-01": 0.01
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
        "cardinality": 100,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "100": 0.01,
          "99": 0.01,
          "98": 0.01,
          "97": 0.01,
          "96": 0.01
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
          1,
          2,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.37,
          "2": 0.34,
          "3": 0.29
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
        "cardinality": 100,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "ID9978977": 0.01,
          "ID9931239": 0.01,
          "ID9873325": 0.01,
          "ID9597154": 0.01,
          "ID9570420": 0.01
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
          "발급 갱신 요망",
          "지점 확인 완료",
          "본인 확인용",
          "주 신분증",
          "본점 발급"
        ],
        "inferred_format": null,
        "null_rate": 0.64,
        "top_values": {
          "발급 갱신 요망": 0.13,
          "지점 확인 완료": 0.07,
          "본인 확인용": 0.07,
          "주 신분증": 0.05,
          "본점 발급": 0.04
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
        "cardinality": 95,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-05-11 09:00:00": 0.02,
          "2025-07-18 09:00:00": 0.02,
          "2025-01-27 09:00:00": 0.02,
          "2024-11-11 09:00:00": 0.02,
          "2023-12-22 09:00:00": 0.02
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
        "cardinality": 95,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-05-11 09:00:00": 0.02,
          "2025-07-18 09:00:00": 0.02,
          "2025-01-27 09:00:00": 0.02,
          "2024-11-11 09:00:00": 0.02,
          "2023-12-22 09:00:00": 0.02
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
          1145994.18,
          1098584.69,
          948036.78,
          825479.99,
          561261.13
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1145994.18": 0.2,
          "1098584.69": 0.2,
          "948036.78": 0.2,
          "825479.99": 0.2,
          "561261.13": 0.2
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
        "cardinality": 2,
        "distinct_sample": [
          3,
          6
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3": 0.6,
          "6": 0.4
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
          0,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.8,
          "1": 0.2
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
        "cardinality": 2,
        "distinct_sample": [
          300,
          600
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.8,
          "600": 0.2
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
        "cardinality": 300,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "L3000000": 0.0033,
          "L3000001": 0.0033,
          "L3000002": 0.0033,
          "L3000003": 0.0033,
          "L3000004": 0.0033
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
        "cardinality": 233,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.2233,
        "top_values": {
          "LN1033213": 0.0033,
          "LN1056640": 0.0033,
          "LN1059331": 0.0033,
          "LN1071312": 0.0033,
          "LN1091708": 0.0033
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
        "cardinality": 75,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "54": 0.03,
          "84": 0.03,
          "23": 0.0267,
          "99": 0.0267,
          "38": 0.0233
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
          "1": 0.3933,
          "3": 0.3,
          "2": 0.1633,
          "4": 0.1433
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
          6,
          1,
          7,
          3,
          5,
          8,
          4,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "6": 0.14,
          "1": 0.14,
          "7": 0.1367,
          "3": 0.1267,
          "5": 0.1233,
          "8": 0.1133,
          "4": 0.1133,
          "2": 0.1067
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
        "null_rate": 0.4333,
        "top_values": {
          "35": 0.1267,
          "36": 0.1233,
          "34": 0.12,
          "33": 0.1033,
          "32": 0.0933
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
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          "AED"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "AED": 1.0
        }
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 300,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "198032379.93": 0.0033,
          "194685537.71": 0.0033,
          "194539030.65": 0.0033,
          "191633344.34": 0.0033,
          "185297713.36": 0.0033
        }
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
        "present": true,
        "cardinality": 276,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0.9316666666666666": 0.01,
          "0.8458333333333333": 0.01,
          "0.7066666666666667": 0.01,
          "0.4691666666666667": 0.01,
          "1.6541666666666668": 0.0067
        }
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
        "cardinality": 276,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "11.18": 0.01,
          "10.15": 0.01,
          "8.48": 0.01,
          "5.63": 0.01,
          "19.85": 0.0067
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
        "present": true,
        "cardinality": 8,
        "distinct_sample": [
          12,
          6,
          24,
          3,
          120,
          84,
          60,
          36
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "12": 0.2767,
          "6": 0.25,
          "24": 0.1767,
          "3": 0.0933,
          "120": 0.0567,
          "84": 0.0567,
          "60": 0.05,
          "36": 0.04
        }
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
          120,
          84,
          60,
          36
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "12": 0.2767,
          "6": 0.25,
          "24": 0.1767,
          "3": 0.0933,
          "120": 0.0567,
          "84": 0.0567,
          "60": 0.05,
          "36": 0.04
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
          500,
          700,
          200,
          100,
          601
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.54,
          "600": 0.1967,
          "500": 0.07,
          "700": 0.0667,
          "200": 0.06,
          "100": 0.0367,
          "601": 0.03
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
        "cardinality": 263,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2025-11-27": 0.01,
          "2024-02-09": 0.01,
          "2026-06-07": 0.0067,
          "2026-05-12": 0.0067,
          "2026-04-15": 0.0067
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
        "cardinality": 21,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.93,
        "top_values": {
          "2026-04-25": 0.0033,
          "2026-03-12": 0.0033,
          "2026-01-19": 0.0033,
          "2025-12-18": 0.0033,
          "2025-08-05": 0.0033
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
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.93,
        "top_values": {
          "1": 0.03,
          "3": 0.0233,
          "2": 0.0167
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
        "cardinality": 220,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1067,
        "top_values": {
          "2026-07-04": 0.0133,
          "2026-07-12": 0.01,
          "2026-06-17": 0.01,
          "2026-03-29": 0.01,
          "2025-10-27": 0.01
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
        "null_rate": 0.0367,
        "top_values": {
          "2": 0.33,
          "1": 0.32,
          "3": 0.3133
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
        "cardinality": 115,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.46,
        "top_values": {
          "2026-07-13": 0.02,
          "2026-07-08": 0.02,
          "2026-07-04": 0.0167,
          "2026-07-10": 0.0133,
          "2026-07-14": 0.01
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
        "cardinality": 158,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1667,
        "top_values": {
          "2026-07-13": 0.03,
          "2026-07-04": 0.0233,
          "2026-07-08": 0.0233,
          "2026-07-06": 0.0167,
          "2026-07-14": 0.0167
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
        "null_rate": 0.1667,
        "top_values": {
          "2": 0.3167,
          "3": 0.3067,
          "1": 0.21
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
        "cardinality": 51,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.7733,
        "top_values": {
          "2026-07-14": 0.0167,
          "2026-07-08": 0.0167,
          "2026-07-12": 0.01,
          "2026-07-11": 0.01,
          "2026-06-28": 0.01
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
          1,
          2,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.7733,
        "top_values": {
          "1": 0.1,
          "2": 0.0767,
          "3": 0.05
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
        "cardinality": 9,
        "distinct_sample": [
          "2027-01-02",
          "2026-12-31",
          "2026-12-29",
          "2026-11-13",
          "2026-10-17",
          "2026-10-06",
          "2026-06-29",
          "2026-03-27",
          "2025-12-11"
        ],
        "inferred_format": null,
        "null_rate": 0.97,
        "top_values": {
          "2027-01-02": 0.0033,
          "2026-12-31": 0.0033,
          "2026-12-29": 0.0033,
          "2026-11-13": 0.0033,
          "2026-10-17": 0.0033,
          "2026-10-06": 0.0033,
          "2026-06-29": 0.0033,
          "2026-03-27": 0.0033,
          "2025-12-11": 0.0033
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
        "cardinality": 197,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1667,
        "top_values": {
          "2026-08-13": 0.0167,
          "2026-08-12": 0.0167,
          "2026-08-07": 0.0167,
          "2026-12-31": 0.01,
          "2026-12-29": 0.01
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
        "cardinality": 27,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9033,
        "top_values": {
          "2026-05-25": 0.01,
          "2026-07-13": 0.0033,
          "2026-06-30": 0.0033,
          "2026-06-16": 0.0033,
          "2026-05-21": 0.0033
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
        "cardinality": 115,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.46,
        "top_values": {
          "2026-08-12": 0.02,
          "2026-08-07": 0.02,
          "2026-08-03": 0.0167,
          "2026-08-09": 0.0133,
          "2026-08-13": 0.01
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
        "cardinality": 158,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1667,
        "top_values": {
          "2026-07-13": 0.03,
          "2026-07-08": 0.0233,
          "2026-07-04": 0.0233,
          "2026-07-14": 0.0167,
          "2026-07-06": 0.0167
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
        "cardinality": 6,
        "distinct_sample": [
          "2026-07-04",
          "2026-06-24",
          "2026-05-26",
          "2026-05-18",
          "2026-05-15",
          "2026-04-26"
        ],
        "inferred_format": null,
        "null_rate": 0.98,
        "top_values": {
          "2026-07-04": 0.0033,
          "2026-06-24": 0.0033,
          "2026-05-26": 0.0033,
          "2026-05-18": 0.0033,
          "2026-05-15": 0.0033,
          "2026-04-26": 0.0033
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
        "cardinality": 9,
        "distinct_sample": [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.25,
          "2": 0.2367,
          "3": 0.2033,
          "4": 0.15,
          "5": 0.07,
          "6": 0.05,
          "7": 0.02,
          "8": 0.0133,
          "9": 0.0067
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
          7,
          6
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.5833,
          "2": 0.27,
          "3": 0.09,
          "4": 0.03,
          "5": 0.02,
          "7": 0.0033,
          "6": 0.0033
        }
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "cardinality": 300,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "198032379.93": 0.0033,
          "194685537.71": 0.0033,
          "194539030.65": 0.0033,
          "191633344.34": 0.0033,
          "185297713.36": 0.0033
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
        "cardinality": 300,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "198032379.93": 0.0033,
          "194685537.71": 0.0033,
          "194539030.65": 0.0033,
          "191633344.34": 0.0033,
          "185297713.36": 0.0033
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
        "cardinality": 300,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "198032379.93": 0.0033,
          "194685537.71": 0.0033,
          "194539030.65": 0.0033,
          "191633344.34": 0.0033,
          "185297713.36": 0.0033
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
          "2026-07-14"
        ],
        "inferred_format": null,
        "null_rate": 0.74,
        "top_values": {
          "2026-07-14": 0.26
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
        "null_rate": 0.1667,
        "top_values": {
          "0": 0.66,
          "1": 0.1733
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
        "null_rate": 0.97,
        "top_values": {
          "40": 0.0233,
          "41": 0.0067
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
          900
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.8533,
          "100": 0.0933,
          "900": 0.0533
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
        "cardinality": 43,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.3933,
        "top_values": {
          "2026-05-31": 0.0333,
          "2026-07-03": 0.03,
          "2026-06-14": 0.03,
          "2026-07-04": 0.0267,
          "2026-07-11": 0.0233
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
        "cardinality": 2,
        "distinct_sample": [
          38,
          37
        ],
        "inferred_format": null,
        "null_rate": 0.99,
        "top_values": {
          "38": 0.0067,
          "37": 0.0033
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
        "cardinality": 3,
        "distinct_sample": [
          "2026-06-30",
          "2026-05-08",
          "2026-01-29"
        ],
        "inferred_format": null,
        "null_rate": 0.99,
        "top_values": {
          "2026-06-30": 0.0033,
          "2026-05-08": 0.0033,
          "2026-01-29": 0.0033
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
        "cardinality": 2,
        "distinct_sample": [
          2,
          3
        ],
        "inferred_format": null,
        "null_rate": 0.99,
        "top_values": {
          "2": 0.0067,
          "3": 0.0033
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
          "1": 0.7033,
          "2": 0.2967
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
        "cardinality": 64,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "65": 0.04,
          "270": 0.0267,
          "263": 0.0267,
          "236": 0.0267,
          "210": 0.0267
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
        "cardinality": 73,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1160": 0.0267,
          "716": 0.0267,
          "1498": 0.0133,
          "1497": 0.0133,
          "1485": 0.0133
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
        "cardinality": 65,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-03-14": 0.04,
          "2026-07-14": 0.0267,
          "2026-06-09": 0.0267,
          "2026-05-16": 0.0267,
          "2026-04-28": 0.0267
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
        "cardinality": 73,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "924": 0.0267,
          "232": 0.0267,
          "1481": 0.0133,
          "1480": 0.0133,
          "1475": 0.0133
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
        "cardinality": 2,
        "distinct_sample": [
          "AM",
          "AM_ADJ"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "AM": 0.7333,
          "AM_ADJ": 0.2667
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
        "cardinality": 75,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "48904.55": 0.0133,
          "48841.27": 0.0133,
          "47987.76": 0.0133,
          "47714.86": 0.0133,
          "47369.99": 0.0133
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
        "cardinality": 75,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "292": 0.0174,
          "291": 0.0174,
          "287": 0.0174,
          "281": 0.0174,
          "277": 0.0174
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
          3,
          2,
          4,
          7,
          9
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.2783,
          "3": 0.2261,
          "2": 0.2087,
          "4": 0.1391,
          "7": 0.087,
          "9": 0.0609
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
        "cardinality": 88,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-27": 0.0348,
          "2026-05-04": 0.0348,
          "2026-07-19": 0.0261,
          "2026-07-16": 0.0261,
          "2026-07-12": 0.0261
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
        "cardinality": 96,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-08-18": 0.0261,
          "2026-07-28": 0.0261,
          "2026-09-20": 0.0174,
          "2026-09-11": 0.0174,
          "2026-09-09": 0.0174
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
          "1": 0.5217,
          "2": 0.3304,
          "3": 0.0783,
          "4": 0.0696
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
          "0": 0.7739,
          "1": 0.2261
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
        "cardinality": 52,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.5217,
        "top_values": {
          "3.72": 0.0174,
          "3.61": 0.0174,
          "1.5": 0.0174,
          "4.67": 0.0087,
          "4.59": 0.0087
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
        "cardinality": 55,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.5217,
        "top_values": {
          "994944.4": 0.0087,
          "988554": 0.0087,
          "967088.6": 0.0087,
          "959493.6": 0.0087,
          "941113.4": 0.0087
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
        "cardinality": 112,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3.72": 0.0174,
          "3.61": 0.0174,
          "1.5": 0.0174,
          "48926.57": 0.0087,
          "48463.47": 0.0087
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
        "cardinality": 115,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "49747.22": 0.0087,
          "49427.7": 0.0087,
          "48926.57": 0.0087,
          "48463.47": 0.0087,
          "48354.43": 0.0087
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
        "cardinality": 115,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "45218.28644073806": 0.0087,
          "43809.395227946785": 0.0087,
          "40677.82056054037": 0.0087,
          "37331.567054028885": 0.0087,
          "36588.18740351776": 0.0087
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
          "0": 0.6696,
          "1": 0.3304
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
        "null_rate": 0.9043,
        "top_values": {
          "1000": 0.0957
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
        "cardinality": 11,
        "distinct_sample": [
          1450632.9,
          1439240.4,
          1410849.9,
          1344488.1,
          1305846.3,
          1255741.5,
          903531.9,
          886630.5,
          734636.4,
          564974.7,
          210706.2
        ],
        "inferred_format": null,
        "null_rate": 0.9043,
        "top_values": {
          "1450632.9": 0.0087,
          "1439240.4": 0.0087,
          "1410849.9": 0.0087,
          "1344488.1": 0.0087,
          "1305846.3": 0.0087,
          "1255741.5": 0.0087,
          "903531.9": 0.0087,
          "886630.5": 0.0087,
          "734636.4": 0.0087,
          "564974.7": 0.0087
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
        "cardinality": 96,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1652,
        "top_values": {
          "CHG0000001": 0.0087,
          "CHG0000002": 0.0087,
          "CHG0000003": 0.0087,
          "CHG0000004": 0.0087,
          "CHG0000005": 0.0087
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
        "cardinality": 42,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "463": 0.0435,
          "328": 0.0435,
          "36": 0.0435,
          "28": 0.0435,
          "1054": 0.0217
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
        "cardinality": 46,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "115": 0.0217,
          "113": 0.0217,
          "112": 0.0217,
          "110": 0.0217,
          "109": 0.0217
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
        "cardinality": 46,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "29972.86": 0.0217,
          "29487.51": 0.0217,
          "28118.62": 0.0217,
          "27976.92": 0.0217,
          "27363.64": 0.0217
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
          11,
          2,
          5,
          3,
          10,
          8,
          6,
          4,
          1,
          7,
          12,
          9
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "11": 0.1957,
          "2": 0.1522,
          "5": 0.1304,
          "3": 0.1087,
          "10": 0.0652,
          "8": 0.0652,
          "6": 0.0652,
          "4": 0.0652,
          "1": 0.0652,
          "7": 0.0435
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
          1,
          2,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.5833,
          "2": 0.25,
          "3": 0.1667
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
        "cardinality": 6,
        "distinct_sample": [
          1473,
          1446,
          1125,
          1014,
          878,
          415
        ],
        "inferred_format": null,
        "null_rate": 0.5,
        "top_values": {
          "1473": 0.0833,
          "1446": 0.0833,
          "1125": 0.0833,
          "1014": 0.0833,
          "878": 0.0833,
          "415": 0.0833
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
        "cardinality": 12,
        "distinct_sample": [
          248,
          244,
          220,
          214,
          179,
          178,
          131,
          122,
          99,
          58,
          34,
          22
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "248": 0.0833,
          "244": 0.0833,
          "220": 0.0833,
          "214": 0.0833,
          "179": 0.0833,
          "178": 0.0833,
          "131": 0.0833,
          "122": 0.0833,
          "99": 0.0833,
          "58": 0.0833
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
        "cardinality": 12,
        "distinct_sample": [
          98,
          97,
          85,
          77,
          69,
          67,
          64,
          56,
          54,
          46,
          40,
          10
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "98": 0.0833,
          "97": 0.0833,
          "85": 0.0833,
          "77": 0.0833,
          "69": 0.0833,
          "67": 0.0833,
          "64": 0.0833,
          "56": 0.0833,
          "54": 0.0833,
          "46": 0.0833
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
        "cardinality": 250,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "298": 0.004,
          "297": 0.004,
          "296": 0.004,
          "295": 0.004,
          "294": 0.004
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
        "cardinality": 158,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-13": 0.036,
          "2026-07-08": 0.028,
          "2026-07-04": 0.028,
          "2026-07-14": 0.02,
          "2026-07-06": 0.02
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
        "cardinality": 158,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-13": 0.036,
          "2026-07-08": 0.028,
          "2026-07-04": 0.028,
          "2026-07-14": 0.02,
          "2026-07-06": 0.02
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
        "cardinality": 250,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "198032379.93": 0.004,
          "194685537.71": 0.004,
          "194539030.65": 0.004,
          "191633344.34": 0.004,
          "185297713.36": 0.004
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
        "cardinality": 250,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "192538155.73": 0.004,
          "191057579": 0.004,
          "190455854.27": 0.004,
          "187615905.47": 0.004,
          "182965390.45": 0.004
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
        "cardinality": 115,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "115": 0.0087,
          "114": 0.0087,
          "113": 0.0087,
          "112": 0.0087,
          "111": 0.0087
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
        "cardinality": 225,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "6513": 0.0058,
          "6512": 0.0058,
          "6511": 0.0058,
          "6510": 0.0058,
          "6509": 0.0058
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
        "cardinality": 345,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "9973.18": 0.0029,
          "9960.53": 0.0029,
          "9944.17": 0.0029,
          "9914.88": 0.0029,
          "9859.49": 0.0029
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
        "cardinality": 192,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.4435,
        "top_values": {
          "8347.01": 0.0029,
          "8271.93": 0.0029,
          "8037.92": 0.0029,
          "7835.93": 0.0029,
          "7828.59": 0.0029
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
        "cardinality": 100,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "298": 0.01,
          "297": 0.01,
          "295": 0.01,
          "294": 0.01,
          "292": 0.01
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
          "1": 0.44,
          "0": 0.35,
          "3": 0.12,
          "2": 0.09
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
          "1": 0.42,
          "2": 0.31,
          "3": 0.17,
          "4": 0.1
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
          2,
          1,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.35,
          "1": 0.35,
          "4": 0.3
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
          7,
          1,
          30
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "7": 0.4,
          "1": 0.32,
          "30": 0.28
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
          1,
          3,
          2,
          4
        ],
        "inferred_format": null,
        "null_rate": 0.47,
        "top_values": {
          "1": 0.16,
          "3": 0.14,
          "2": 0.12,
          "4": 0.11
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
          1,
          3,
          2,
          4,
          7,
          6,
          5
        ],
        "inferred_format": null,
        "null_rate": 0.49,
        "top_values": {
          "1": 0.12,
          "3": 0.11,
          "2": 0.08,
          "4": 0.07,
          "7": 0.06,
          "6": 0.04,
          "5": 0.03
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
        "null_rate": 0.42,
        "top_values": {
          "4": 0.17,
          "3": 0.17,
          "1": 0.13,
          "2": 0.11
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
          30,
          7,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.38,
        "top_values": {
          "30": 0.24,
          "7": 0.22,
          "1": 0.16
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
          2,
          4,
          3,
          1
        ],
        "inferred_format": null,
        "null_rate": 0.74,
        "top_values": {
          "2": 0.09,
          "4": 0.07,
          "3": 0.06,
          "1": 0.04
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
          7,
          1,
          5,
          6,
          4,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.7,
        "top_values": {
          "7": 0.06,
          "1": 0.06,
          "5": 0.05,
          "6": 0.04,
          "4": 0.03,
          "3": 0.03,
          "2": 0.03
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
          "0": 0.69,
          "1": 0.31
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
        "cardinality": 12,
        "distinct_sample": [
          272,
          239,
          221,
          210,
          208,
          200,
          192,
          110,
          76,
          71,
          32,
          24
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "272": 0.0833,
          "239": 0.0833,
          "221": 0.0833,
          "210": 0.0833,
          "208": 0.0833,
          "200": 0.0833,
          "192": 0.0833,
          "110": 0.0833,
          "76": 0.0833,
          "71": 0.0833
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
        "cardinality": 7,
        "distinct_sample": [
          7,
          2,
          1,
          8,
          3,
          5,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "7": 0.2083,
          "2": 0.2083,
          "1": 0.1667,
          "8": 0.125,
          "3": 0.125,
          "5": 0.0833,
          "4": 0.0833
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
        "cardinality": 23,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2025-10-27": 0.0833,
          "2026-06-12": 0.0417,
          "2026-05-13": 0.0417,
          "2026-04-27": 0.0417,
          "2026-04-25": 0.0417
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
        "cardinality": 11,
        "distinct_sample": [
          "2025-10-26",
          "2026-06-11",
          "2026-05-12",
          "2026-04-26",
          "2026-04-24",
          "2026-03-24",
          "2026-02-24",
          "2026-01-28",
          "2026-01-16",
          "2026-01-02",
          "2025-02-06"
        ],
        "inferred_format": null,
        "null_rate": 0.5,
        "top_values": {
          "2025-10-26": 0.0833,
          "2026-06-11": 0.0417,
          "2026-05-12": 0.0417,
          "2026-04-26": 0.0417,
          "2026-04-24": 0.0417,
          "2026-03-24": 0.0417,
          "2026-02-24": 0.0417,
          "2026-01-28": 0.0417,
          "2026-01-16": 0.0417,
          "2026-01-02": 0.0417
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
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.4583,
          "1": 0.3333,
          "3": 0.2083
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
        "cardinality": 23,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2024-11-07": 0.0833,
          "2026-05-24": 0.0417,
          "2026-04-12": 0.0417,
          "2026-04-02": 0.0417,
          "2026-02-03": 0.0417
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
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.4167,
          "1": 0.3333,
          "3": 0.25
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
        "cardinality": 23,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2024-11-07": 0.0833,
          "2026-05-24": 0.0417,
          "2026-04-12": 0.0417,
          "2026-04-02": 0.0417,
          "2026-02-03": 0.0417
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
        "cardinality": 8,
        "distinct_sample": [
          97,
          86,
          84,
          73,
          54,
          44,
          34,
          21
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "97": 0.125,
          "86": 0.125,
          "84": 0.125,
          "73": 0.125,
          "54": 0.125,
          "44": 0.125,
          "34": 0.125,
          "21": 0.125
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
          5,
          4,
          1,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "5": 0.25,
          "4": 0.25,
          "1": 0.25,
          "3": 0.125,
          "2": 0.125
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
        "cardinality": 250,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "292": 0.0179,
          "267": 0.0179,
          "256": 0.0179,
          "223": 0.0179,
          "220": 0.0179
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
          "3": 0.0373,
          "2": 0.0373,
          "1": 0.0373,
          "6": 0.0337,
          "5": 0.0337
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
        "cardinality": 2747,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-09-11": 0.0025,
          "2026-08-12": 0.0025,
          "2026-07-13": 0.0025,
          "2026-11-10": 0.0022,
          "2026-10-11": 0.0022
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
        "cardinality": 2747,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-10-11": 0.0025,
          "2026-09-11": 0.0025,
          "2026-08-12": 0.0025,
          "2026-12-10": 0.0022,
          "2026-11-10": 0.0022
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
        "cardinality": 250,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1405067.81": 0.0179,
          "1403611.15": 0.0179,
          "1398332.84": 0.0179,
          "1393460.55": 0.0179,
          "1383327.86": 0.0179
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
        "cardinality": 161,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.876,
          "117741.44": 0.0033,
          "176266.15": 0.0028,
          "253096.02": 0.0027,
          "1608100.55": 0.0022
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
        "cardinality": 250,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "800946.83": 0.0179,
          "739901.77": 0.0179,
          "669052.32": 0.0179,
          "668118.91": 0.0179,
          "663192.01": 0.0179
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
        "cardinality": 161,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.876,
          "27480.85": 0.0033,
          "32503.48": 0.0028,
          "150718.68": 0.0027,
          "403633.24": 0.0022
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
        "cardinality": 225,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9665,
        "top_values": {
          "4988.29": 0.0001,
          "4969.21": 0.0001,
          "4940.39": 0.0001,
          "4938.48": 0.0001,
          "4935.3": 0.0001
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
        "cardinality": 48,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.9665,
        "top_values": {
          "0": 0.0265,
          "1910.99": 0.0001,
          "1888.95": 0.0001,
          "1879.19": 0.0001,
          "1837.15": 0.0001
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
          "0": 0.876,
          "1": 0.124
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
        "cardinality": 371,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.876,
        "top_values": {
          "2026-06-25": 0.0013,
          "2026-07-14": 0.0012,
          "2026-06-29": 0.001,
          "2026-06-05": 0.001,
          "2026-05-27": 0.001
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
        "cardinality": 158,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-13 09:00:00": 0.064,
          "2026-07-08 09:00:00": 0.0246,
          "2026-06-29 09:00:00": 0.0224,
          "2026-07-11 09:00:00": 0.0215,
          "2026-07-04 09:00:00": 0.0206
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
        "cardinality": 393,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-13 09:00:00": 0.0648,
          "2026-07-08 09:00:00": 0.025,
          "2026-06-29 09:00:00": 0.0234,
          "2026-07-11 09:00:00": 0.0219,
          "2026-07-04 09:00:00": 0.0215
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
        "cardinality": 25,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "296": 0.04,
          "286": 0.04,
          "284": 0.04,
          "281": 0.04,
          "276": 0.04
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
          3,
          7,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.32,
          "5": 0.2,
          "3": 0.2,
          "7": 0.16,
          "2": 0.12
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
        "cardinality": 24,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-01-27": 0.08,
          "2026-07-07": 0.04,
          "2026-06-10": 0.04,
          "2026-06-05": 0.04,
          "2026-05-22": 0.04
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
        "cardinality": 25,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "86570.4": 0.04,
          "86215.36": 0.04,
          "84867.69": 0.04,
          "77413.01": 0.04,
          "76577.76": 0.04
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
          "300": 0.6,
          "200": 0.28,
          "100": 0.12
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
          1,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.52,
          "3": 0.24,
          "2": 0.24
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
        "cardinality": 25,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-13 09:00:00": 0.04,
          "2026-05-10 09:00:00": 0.04,
          "2026-01-09 09:00:00": 0.04,
          "2025-12-14 09:00:00": 0.04,
          "2025-12-08 09:00:00": 0.04
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
          "3": 0.4,
          "2": 0.32,
          "1": 0.28
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
        "cardinality": 25,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-13 09:00:00": 0.04,
          "2026-05-10 09:00:00": 0.04,
          "2026-01-09 09:00:00": 0.04,
          "2025-12-14 09:00:00": 0.04,
          "2025-12-08 09:00:00": 0.04
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
        "cardinality": 250,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "24": 0.008,
          "58": 0.008,
          "73": 0.008,
          "182": 0.008,
          "236": 0.008
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
          3,
          4,
          8,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.594,
          "6": 0.2027,
          "3": 0.0613,
          "4": 0.0587,
          "8": 0.0453,
          "1": 0.038
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
        "cardinality": 301,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14": 0.0727,
          "2026-07-13": 0.0573,
          "2026-07-08": 0.0353,
          "2026-07-09": 0.0353,
          "2026-07-12": 0.0333
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
        "cardinality": 301,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14": 0.0727,
          "2026-07-13": 0.0573,
          "2026-07-09": 0.0353,
          "2026-07-08": 0.0353,
          "2026-07-12": 0.0333
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
        "cardinality": 1500,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3459205.51": 0.0007,
          "3336023.25": 0.0007,
          "3299029.12": 0.0007,
          "3297072.9": 0.0007,
          "3294165.45": 0.0007
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
        "cardinality": 1500,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2940324.6835": 0.0007,
          "2835619.7624999997": 0.0007,
          "2804174.752": 0.0007,
          "2802511.965": 0.0007,
          "2800040.6325000003": 0.0007
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
        "cardinality": 1500,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "518880.82649999997": 0.0007,
          "500403.4875": 0.0007,
          "494854.368": 0.0007,
          "494560.93499999994": 0.0007,
          "494124.8175": 0.0007
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
        "cardinality": 1285,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.1433,
        "top_values": {
          "TXL00000001": 0.0007,
          "TXL00000002": 0.0007,
          "TXL00000003": 0.0007,
          "TXL00000004": 0.0007,
          "TXL00000005": 0.0007
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
        "cardinality": 10,
        "distinct_sample": [
          "2026-06-21",
          "2026-06-16",
          "2026-05-13",
          "2026-05-05",
          "2026-03-06",
          "2026-01-13",
          "2026-01-12",
          "2025-11-01",
          "2025-10-26",
          "2025-10-22"
        ],
        "inferred_format": null,
        "null_rate": 0.9933,
        "top_values": {
          "2026-06-21": 0.0007,
          "2026-06-16": 0.0007,
          "2026-05-13": 0.0007,
          "2026-05-05": 0.0007,
          "2026-03-06": 0.0007,
          "2026-01-13": 0.0007,
          "2026-01-12": 0.0007,
          "2025-11-01": 0.0007,
          "2025-10-26": 0.0007,
          "2025-10-22": 0.0007
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
        "cardinality": 148,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "780": 0.0133,
          "166": 0.0133,
          "1481": 0.0067,
          "1479": 0.0067,
          "1477": 0.0067
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
        "cardinality": 145,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1286": 0.0133,
          "1153": 0.0133,
          "807": 0.0133,
          "391": 0.0133,
          "303": 0.0133
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
          "2": 0.4067,
          "1": 0.3133,
          "3": 0.18,
          "4": 0.1
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
        "cardinality": 30,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1392": 0.0333,
          "1364": 0.0333,
          "1333": 0.0333,
          "1322": 0.0333,
          "1279": 0.0333
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
          2,
          1,
          3
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.3667,
          "1": 0.3667,
          "3": 0.2667
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
        "cardinality": 28,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-05-05": 0.0667,
          "2026-01-22": 0.0667,
          "2026-07-05": 0.0333,
          "2026-06-28": 0.0333,
          "2026-06-26": 0.0333
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
          11,
          10,
          8,
          9,
          3,
          12,
          7,
          6,
          5,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "11": 0.2333,
          "10": 0.2,
          "8": 0.2,
          "9": 0.1333,
          "3": 0.0667,
          "12": 0.0333,
          "7": 0.0333,
          "6": 0.0333,
          "5": 0.0333,
          "4": 0.0333
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
        "cardinality": 30,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312624": 0.0333,
          "2026-07-14 04:50:23.312588": 0.0333,
          "2026-07-14 04:50:23.312552": 0.0333,
          "2026-07-14 04:50:23.312515": 0.0333,
          "2026-07-14 04:50:23.312471": 0.0333
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
        "cardinality": 30,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312625": 0.0333,
          "2026-07-14 04:50:23.312590": 0.0333,
          "2026-07-14 04:50:23.312554": 0.0333,
          "2026-07-14 04:50:23.312517": 0.0333,
          "2026-07-14 04:50:23.312472": 0.0333
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
        "cardinality": 12,
        "distinct_sample": [
          294,
          281,
          253,
          245,
          218,
          215,
          211,
          178,
          176,
          83,
          45,
          24
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "294": 0.0833,
          "281": 0.0833,
          "253": 0.0833,
          "245": 0.0833,
          "218": 0.0833,
          "215": 0.0833,
          "211": 0.0833,
          "178": 0.0833,
          "176": 0.0833,
          "83": 0.0833
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
          300,
          100
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "200": 0.6667,
          "300": 0.1667,
          "100": 0.1667
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
        "cardinality": 8,
        "distinct_sample": [
          4,
          3,
          9,
          8,
          7,
          5,
          2,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4": 0.25,
          "3": 0.25,
          "9": 0.0833,
          "8": 0.0833,
          "7": 0.0833,
          "5": 0.0833,
          "2": 0.0833,
          "1": 0.0833
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
        "cardinality": 11,
        "distinct_sample": [
          "2026-07-06",
          "2026-06-28",
          "2026-06-18",
          "2026-04-28",
          "2026-03-31",
          "2026-03-20",
          "2026-03-12",
          "2026-03-08",
          "2026-02-23",
          "2026-02-16",
          "2026-01-21"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-06": 0.1667,
          "2026-06-28": 0.0833,
          "2026-06-18": 0.0833,
          "2026-04-28": 0.0833,
          "2026-03-31": 0.0833,
          "2026-03-20": 0.0833,
          "2026-03-12": 0.0833,
          "2026-03-08": 0.0833,
          "2026-02-23": 0.0833,
          "2026-02-16": 0.0833
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
          "43": 0.6667,
          "42": 0.3333
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
        "cardinality": 12,
        "distinct_sample": [
          "2026-07-13",
          "2026-06-30",
          "2026-06-26",
          "2026-06-22",
          "2026-06-07",
          "2026-06-06",
          "2026-05-16",
          "2026-05-12",
          "2026-04-30",
          "2026-04-24",
          "2026-04-17",
          "2026-04-16"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-13": 0.0833,
          "2026-06-30": 0.0833,
          "2026-06-26": 0.0833,
          "2026-06-22": 0.0833,
          "2026-06-07": 0.0833,
          "2026-06-06": 0.0833,
          "2026-05-16": 0.0833,
          "2026-05-12": 0.0833,
          "2026-04-30": 0.0833,
          "2026-04-24": 0.0833
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
        "cardinality": 6,
        "distinct_sample": [
          148,
          135,
          103,
          88,
          55,
          23
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "148": 0.1667,
          "135": 0.1667,
          "103": 0.1667,
          "88": 0.1667,
          "55": 0.1667,
          "23": 0.1667
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
        "cardinality": 6,
        "distinct_sample": [
          95674.25,
          92001.31,
          84019.52,
          80528.27,
          67718.34,
          26750.11
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "95674.25": 0.1667,
          "92001.31": 0.1667,
          "84019.52": 0.1667,
          "80528.27": 0.1667,
          "67718.34": 0.1667,
          "26750.11": 0.1667
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
          "1": 0.6667,
          "2": 0.3333
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
        "cardinality": 5,
        "distinct_sample": [
          "2026-06-23",
          "2026-07-01",
          "2026-06-27",
          "2026-06-25",
          "2026-05-04"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-23": 0.3333,
          "2026-07-01": 0.1667,
          "2026-06-27": 0.1667,
          "2026-06-25": 0.1667,
          "2026-05-04": 0.1667
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
          "2026-07-14"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
        "cardinality": 56,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "10768814.4": 0.0179,
          "8038181.52": 0.0179,
          "6855034.25": 0.0179,
          "6708628.8": 0.0179,
          "6404352.39": 0.0179
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
        "cardinality": 56,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "11868582.735837854": 0.0179,
          "9227349.686966393": 0.0179,
          "7431275.745443639": 0.0179,
          "7166529.850185955": 0.0179,
          "7049429.996050767": 0.0179
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
        "cardinality": 24,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-29": 0.0714,
          "2026-07-28": 0.0714,
          "2026-07-18": 0.0714,
          "2026-07-16": 0.0714,
          "2026-08-12": 0.0536
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
          6,
          12,
          36,
          24
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "6": 0.3036,
          "12": 0.2857,
          "36": 0.2321,
          "24": 0.1786
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
          "3": 0.7857,
          "2": 0.125,
          "1": 0.0893
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
          "100": 0.5179,
          "200": 0.3036,
          "300": 0.1786
        }
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
        "present": true,
        "cardinality": 49,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1.04": 0.0536,
          "1.37": 0.0357,
          "1.21": 0.0357,
          "0.61": 0.0357,
          "0.6": 0.0357
        }
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
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          6
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "6": 1.0
        }
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
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          60
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "60": 1.0
        }
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "cardinality": 56,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "148": 0.0179,
          "146": 0.0179,
          "145": 0.0179,
          "143": 0.0179,
          "141": 0.0179
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          "AED"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "AED": 1.0
        }
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
          1586386.11,
          1277197.38,
          1012158.78,
          910966.22,
          626806.35
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1586386.11": 0.2,
          "1277197.38": 0.2,
          "1012158.78": 0.2,
          "910966.22": 0.2,
          "626806.35": 0.2
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
        "cardinality": 4,
        "distinct_sample": [
          2,
          8,
          7,
          5
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2": 0.4,
          "8": 0.2,
          "7": 0.2,
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
          0,
          1
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "0": 0.8,
          "1": 0.2
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
        "cardinality": 2,
        "distinct_sample": [
          300,
          800
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.8,
          "800": 0.2
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
        "cardinality": 150,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "S2000000": 0.0067,
          "S2000001": 0.0067,
          "S2000002": 0.0067,
          "S2000003": 0.0067,
          "S2000004": 0.0067
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
        "cardinality": 118,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.2133,
        "top_values": {
          "SAV0000001": 0.0067,
          "SAV0000003": 0.0067,
          "SAV0000004": 0.0067,
          "SAV0000005": 0.0067,
          "SAV0000006": 0.0067
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
        "cardinality": 67,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "13": 0.0333,
          "48": 0.0267,
          "65": 0.0267,
          "71": 0.0267,
          "81": 0.0267
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
          "1": 0.58,
          "2": 0.32,
          "3": 0.1
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
          5,
          4,
          2,
          8,
          1,
          3,
          6,
          7
        ],
        "inferred_format": null,
        "null_rate": 0.2533,
        "top_values": {
          "5": 0.1133,
          "4": 0.1133,
          "2": 0.1133,
          "8": 0.1067,
          "1": 0.0933,
          "3": 0.0867,
          "6": 0.0667,
          "7": 0.0533
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
          800,
          600,
          700,
          100,
          200,
          500
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "300": 0.6667,
          "800": 0.1133,
          "600": 0.0933,
          "700": 0.0467,
          "100": 0.0333,
          "200": 0.0333,
          "500": 0.0133
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
        "cardinality": 141,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-06-22": 0.0133,
          "2026-05-19": 0.0133,
          "2026-01-31": 0.0133,
          "2025-12-12": 0.0133,
          "2025-09-14": 0.0133
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
          "1": 0.3867,
          "2": 0.3333,
          "3": 0.28
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
        "cardinality": 132,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.0333,
        "top_values": {
          "2026-03-24": 0.0267,
          "2026-05-05": 0.02,
          "2026-07-08": 0.0133,
          "2026-06-09": 0.0133,
          "2026-05-07": 0.0133
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
          1,
          3,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.0333,
        "top_values": {
          "1": 0.3667,
          "3": 0.3467,
          "2": 0.2533
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
        "cardinality": 106,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.0667,
        "top_values": {
          "2026-05-27": 0.0267,
          "2026-04-12": 0.0267,
          "2026-07-14": 0.02,
          "2026-07-13": 0.02,
          "2026-07-10": 0.02
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
          3,
          1,
          2
        ],
        "inferred_format": null,
        "null_rate": 0.08,
        "top_values": {
          "3": 0.34,
          "1": 0.34,
          "2": 0.24
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
        "cardinality": 14,
        "distinct_sample": [
          "2026-06-24",
          "2026-05-18",
          "2026-04-20",
          "2026-03-25",
          "2026-01-20",
          "2025-12-25",
          "2025-12-04",
          "2025-11-11",
          "2025-11-08",
          "2025-10-21",
          "2025-09-08",
          "2025-08-27",
          "2025-08-03",
          "2025-07-30"
        ],
        "inferred_format": null,
        "null_rate": 0.9067,
        "top_values": {
          "2026-06-24": 0.0067,
          "2026-05-18": 0.0067,
          "2026-04-20": 0.0067,
          "2026-03-25": 0.0067,
          "2026-01-20": 0.0067,
          "2025-12-25": 0.0067,
          "2025-12-04": 0.0067,
          "2025-11-11": 0.0067,
          "2025-11-08": 0.0067,
          "2025-10-21": 0.0067
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
        "null_rate": 0.9067,
        "top_values": {
          "3": 0.0533,
          "2": 0.02,
          "1": 0.02
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
        "present": true,
        "cardinality": 1,
        "distinct_sample": [
          "AED"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "AED": 1.0
        }
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
          "1.5": 0.58,
          "3.5": 0.32,
          "3": 0.1
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
          "2": 0.6467,
          "1": 0.18,
          "3": 0.1733
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
        "cardinality": 47,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0.6667,
        "top_values": {
          "2028-06-30": 0.0133,
          "2027-11-12": 0.0133,
          "2027-02-03": 0.0133,
          "2028-06-03": 0.0067,
          "2028-05-31": 0.0067
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
        "cardinality": 18,
        "distinct_sample": [
          48815.48,
          48004.89,
          47213.41,
          44895.14,
          42523.27,
          40359.41,
          35416.09,
          35312.62,
          33707.15,
          33529.55,
          29344.77,
          27731.95,
          24390.83,
          19629.17,
          19604.16,
          11961.57,
          9807.59,
          6847.62
        ],
        "inferred_format": null,
        "null_rate": 0.88,
        "top_values": {
          "48815.48": 0.0067,
          "48004.89": 0.0067,
          "47213.41": 0.0067,
          "44895.14": 0.0067,
          "42523.27": 0.0067,
          "40359.41": 0.0067,
          "35416.09": 0.0067,
          "35312.62": 0.0067,
          "33707.15": 0.0067,
          "33529.55": 0.0067
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
        "present": true,
        "cardinality": 0,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 1.0,
        "top_values": {}
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
          "100": 0.58,
          "200": 0.32,
          "300": 0.1
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
        "cardinality": 27,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "145": 0.037,
          "141": 0.037,
          "139": 0.037,
          "136": 0.037,
          "125": 0.037
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
          13,
          12,
          1,
          6
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "5": 0.2963,
          "13": 0.2593,
          "12": 0.1852,
          "1": 0.1481,
          "6": 0.1111
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
          "1": 0.5185,
          "2": 0.4074,
          "5": 0.0741
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
        "cardinality": 27,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4910.84": 0.037,
          "4904.83": 0.037,
          "4667.75": 0.037,
          "4650.64": 0.037,
          "4319.3": 0.037
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
        "cardinality": 27,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "4594.915733766061": 0.037,
          "4338.820204611162": 0.037,
          "4091.4838123696545": 0.037,
          "3502.4469386543133": 0.037,
          "3183.396066782374": 0.037
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
          "2026-07-14 04:50:23.312668"
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14 04:50:23.312668": 1.0
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
        "cardinality": 8,
        "distinct_sample": [
          411,
          144,
          103,
          91,
          69,
          63,
          37,
          17
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "411": 0.125,
          "144": 0.125,
          "103": 0.125,
          "91": 0.125,
          "69": 0.125,
          "63": 0.125,
          "37": 0.125,
          "17": 0.125
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
        "cardinality": 8,
        "distinct_sample": [
          26,
          25,
          18,
          17,
          15,
          13,
          11,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "26": 0.125,
          "25": 0.125,
          "18": 0.125,
          "17": 0.125,
          "15": 0.125,
          "13": 0.125,
          "11": 0.125,
          "4": 0.125
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
        "cardinality": 8,
        "distinct_sample": [
          3900.9,
          3146.06,
          3110.3,
          2097.33,
          1809.45,
          1803.48,
          1029.38,
          604.94
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "3900.9": 0.125,
          "3146.06": 0.125,
          "3110.3": 0.125,
          "2097.33": 0.125,
          "1809.45": 0.125,
          "1803.48": 0.125,
          "1029.38": 0.125,
          "604.94": 0.125
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
        "cardinality": 138,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "106": 0.0163,
          "148": 0.015,
          "82": 0.0138,
          "113": 0.0138,
          "54": 0.0125
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
          3,
          2,
          4
        ],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "1": 0.3362,
          "3": 0.32,
          "2": 0.2888,
          "4": 0.055
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
        "cardinality": 226,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14": 0.05,
          "2026-07-13": 0.0375,
          "2026-07-10": 0.03,
          "2026-07-11": 0.0288,
          "2026-07-07": 0.0275
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
        "cardinality": 800,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2962122.92": 0.0013,
          "2743767.61": 0.0013,
          "2083164.67": 0.0013,
          "1702790.24": 0.0013,
          "1255758.6": 0.0013
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
        "cardinality": 226,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14": 0.05,
          "2026-07-13": 0.0375,
          "2026-07-10": 0.03,
          "2026-07-11": 0.0288,
          "2026-07-07": 0.0275
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
        "cardinality": 226,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "2026-07-14": 0.05,
          "2026-07-13": 0.0375,
          "2026-07-10": 0.03,
          "2026-07-11": 0.0288,
          "2026-07-07": 0.0275
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
        "cardinality": 800,
        "distinct_sample": [],
        "inferred_format": null,
        "null_rate": 0,
        "top_values": {
          "TXR1004956826": 0.0013,
          "TXR1027708646": 0.0013,
          "TXR1029801035": 0.0013,
          "TXR1052222187": 0.0013,
          "TXR1069155438": 0.0013
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
