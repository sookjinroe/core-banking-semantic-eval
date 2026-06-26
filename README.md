# bird-2domain-eval

BIRD (dev split) evaluation bundle restricted to two domains — **`financial`** and
**`debit_card_specializing`** — prepared for testing whether an enriched semantic
layer can replace BIRD's hand-written `evidence` annotations.

## Contents

| Path | What it is |
|------|------------|
| `questions.jsonl` | Input questions **with** BIRD `evidence` (one record per line) |
| `questions_noev.jsonl` | Same questions with `evidence` **removed** — the **baseline** input (raw schema only) |
| `gold.jsonl` | **Gold SQL answers — scoring only.** Never feed these to the agent. |
| `databases/<domain>/<domain>.sqlite` | The SQLite database for each domain |
| `databases/<domain>/database_description/*.csv` | Column-level metadata (the target for semantic-layer augmentation) |
| `fetch_databases.sh` | Re-downloads the `.sqlite` files from the official BIRD OSS mirror |
| `prep_bird.py` | The script that produced this bundle from the raw BIRD dev set |

### Record formats

`questions.jsonl` / `questions_noev.jsonl`:
```json
{"id": 1, "db_id": "financial", "question": "...", "difficulty": "simple", "evidence": "..."}
```
(`evidence` present only in `questions.jsonl`.)

`gold.jsonl`:
```json
{"id": 1, "db_id": "financial", "gold_sql": "SELECT ..."}
```

## Design intent

`gold.jsonl` is physically separated from the question files so it can never leak
into the agent's execution path (avoids self-fulfilling validation). The experiment
compares **`questions_noev` (baseline, schema only)** against the **same questions
run with an enriched semantic layer**, to measure whether the layer substitutes for
BIRD's manual `evidence`.

- **`gold.jsonl` is the answer key** — used only for scoring, never as model input.
- **`questions_noev.jsonl` is the baseline input** — no evidence, raw schema only.

## Counts

- 170 questions total — `financial`: 106, `debit_card_specializing`: 64
- Difficulty — simple: 105, moderate: 54, challenging: 11

## Getting the databases

The `.sqlite` files are committed here (both under GitHub's size limit). If you
cloned without them, or want to restore them from the official source:

```bash
bash fetch_databases.sh
```

This pulls `dev.zip` from the BIRD OSS mirror and extracts only the two target
databases into `databases/`.

## Source

Derived from the BIRD-SQL dev set (`dev_20240627`). See https://bird-bench.github.io/.
