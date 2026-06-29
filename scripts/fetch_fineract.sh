#!/usr/bin/env bash
# Apache Fineract 원본 코드를 받는다. corpus/ 와 별도 위치(fineract-source/)에 둠.
# corpus/는 우리가 슬라이스한 일부만 포함. fineract-source/는 .gitignore.
#
# 사용:
#   bash scripts/fetch_fineract.sh             # default: HEAD of main
#   FINERACT_REF=1.10.1 bash scripts/fetch_fineract.sh
set -euo pipefail

REF="${FINERACT_REF:-main}"
TARGET="${1:-fineract-source}"

if [ -d "$TARGET/.git" ]; then
  echo "[i] $TARGET 이미 존재. ref=$REF로 fetch + checkout."
  cd "$TARGET"
  git fetch --depth 1 origin "$REF"
  git checkout -q FETCH_HEAD
else
  echo "[i] apache/fineract clone (ref=$REF, depth=1)"
  git clone --depth 1 --branch "$REF" https://github.com/apache/fineract.git "$TARGET" \
    || git clone --depth 1 https://github.com/apache/fineract.git "$TARGET"
fi

echo "[ok] Fineract source at: $TARGET"
echo "    commit: $(git -C "$TARGET" rev-parse --short HEAD)"
echo "    files:  $(find "$TARGET" -name '*.java' | wc -l) java files"
