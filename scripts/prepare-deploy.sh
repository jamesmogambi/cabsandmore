#!/usr/bin/env bash
# Assemble .next/standalone into a folder that can actually be uploaded and run
# by Azure Web App.
#
# Next deliberately does NOT copy public/ or .next/static/ into standalone —
# they are meant for a CDN. Without them copied back the app serves HTML but
# loads no JavaScript or CSS, which looks like a broken site.
#
# Usage: bash scripts/prepare-deploy.sh
# Output: .next/standalone  (upload its CONTENTS to Azure Web App)

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

STANDALONE=".next/standalone"

if [[ ! -f "$STANDALONE/server.js" ]]; then
  echo "error: $STANDALONE/server.js not found. Run 'npm run build' first." >&2
  exit 1
fi

echo "==> Copying .next/static -> $STANDALONE/.next/static"
# Remove first: `cp -r` into an existing directory nests as static/static.
rm -rf "$STANDALONE/.next/static"
cp -r .next/static "$STANDALONE/.next/static"

echo "==> Copying public -> $STANDALONE/public"
rm -rf "$STANDALONE/public"
cp -r public "$STANDALONE/public"

# Next prints "The static directory has been deprecated in favor of the public
# directory" and refuses to treat it as an asset root if a `static/` directory
# sits next to server.js. Azure runs the app with cwd = app root, so a
# stale static/ left by an older upload triggers it on every boot.
echo "==> Removing any stale top-level static/ directory"
rm -rf "$STANDALONE/static"

# The whole project source tree gets traced in because outputFileTracingRoot is
# the project root. None of this is read at runtime, and backup-exports alone is
# ~9MB per upload.
echo "==> Pruning non-runtime files"
rm -rf \
  "$STANDALONE/backup-exports" \
  "$STANDALONE/docs" \
  "$STANDALONE/fixtures" \
  "$STANDALONE/postman" \
  "$STANDALONE/studio" \
  "$STANDALONE/mongodb-queries" \
  "$STANDALONE/cleaned-images-mapping-"*.json \
  "$STANDALONE/processing-report-"*.json \
  "$STANDALONE/scripts" \
  "$STANDALONE/server.js.map" 2>/dev/null || true

# A stray copy of the service account key is a duplicate of a production
# credential. It is removed by default so the artifact is safe to upload and
# archive; the deploy target must then read the key from a path outside the
# app root. Pass --keep-key if you would rather ship it and
# rely on GOOGLE_SERVICE_ACCOUNT_KEY_FILE resolving relative to the app root.
if [[ "${1:-}" == "--keep-key" ]]; then
  echo "==> Keeping service account key in the artifact (--keep-key)"
else
  echo "==> Removing service account keys from the artifact"
  rm -f "$STANDALONE"/*.json 2>/dev/null || true
fi

echo "==> Verifying"
FAIL=0
[[ -d "$STANDALONE/.next/static" ]] || { echo "MISSING .next/static" >&2; FAIL=1; }
[[ -d "$STANDALONE/public" ]]       || { echo "MISSING public" >&2; FAIL=1; }
[[ -d "$STANDALONE/static" ]]       && { echo "UNEXPECTED static/ present" >&2; FAIL=1; }
[[ -f "$STANDALONE/server.js" ]]    || { echo "MISSING server.js" >&2; FAIL=1; }

if [[ $FAIL -eq 0 ]]; then
  echo "OK — total size: $(du -sh "$STANDALONE" | cut -f1)"
  echo "Upload the CONTENTS of $STANDALONE to your Azure Web App."
else
  echo "Verification FAILED" >&2
  exit 1
fi
