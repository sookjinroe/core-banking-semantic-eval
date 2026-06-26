#!/usr/bin/env bash
# Fetch the two BIRD dev databases used by this eval bundle.
# Downloads the full BIRD dev.zip from the official OSS mirror, then extracts
# ONLY financial + debit_card_specializing into ./databases/.
#
# Usage:  bash fetch_databases.sh
set -euo pipefail

OSS_URL="https://bird-bench.oss-cn-beijing.aliyuncs.com/dev.zip"
WORK="$(mktemp -d)"
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGETS=(financial debit_card_specializing)

echo "[1/4] downloading dev.zip (~330MB) ..."
curl -L -s -o "$WORK/dev.zip" "$OSS_URL"

echo "[2/4] unzipping outer archive ..."
unzip -q -o "$WORK/dev.zip" -d "$WORK"

DEVDIR="$WORK/dev_20240627"
echo "[3/4] unzipping dev_databases.zip ..."
unzip -q -o "$DEVDIR/dev_databases.zip" -d "$DEVDIR"

echo "[4/4] copying target databases into ./databases/ ..."
mkdir -p "$HERE/databases"
for d in "${TARGETS[@]}"; do
  src="$DEVDIR/dev_databases/$d"
  if [ -d "$src" ]; then
    rm -rf "$HERE/databases/$d"
    cp -r "$src" "$HERE/databases/$d"
    find "$HERE/databases/$d" -name .DS_Store -delete 2>/dev/null || true
    echo "  [ok] $d"
  else
    echo "  [MISSING] $d  (check OSS archive layout)"
  fi
done

rm -rf "$WORK"
echo "done. databases restored under $HERE/databases/"
