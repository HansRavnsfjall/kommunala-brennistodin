#!/usr/bin/env bash
set -euo pipefail

# Publish Umbraco 16 (.NET 9) for Simply.com (IIS) — self-contained win-x86
# Output stays: ./publish-out/win-x86
# Usage: ./serverPublish.sh

cd "$(dirname "$0")"

PROJECT="kob.csproj"
RID="win-x86"
CONFIG="Release"
OUT_DIR="$(pwd)/publish-out/${RID}"

# --------------------------
# 0) Sanity: dotnet present
# --------------------------
if ! command -v dotnet >/dev/null 2>&1; then
  echo "❌ Error: dotnet CLI not found. Install .NET SDK 9 and try again." >&2
  exit 1
fi

echo "ℹ️  Using dotnet: $(dotnet --version)"
dotnet --info | sed -n '1,20p' || true

# --------------------------------------------------
# 1) Clean restore (force re-evaluate package graph)
# --------------------------------------------------
echo "🧹 Cleaning…"
rm -rf bin obj "$OUT_DIR" || true
dotnet clean "$PROJECT" -c "$CONFIG"

echo "📦 Restoring…"
dotnet restore "$PROJECT" --force-evaluate

# ----------------------------
# 2) Publish (self-contained)
# ----------------------------
echo "🚀 Publishing ($CONFIG, $RID, self-contained)…"
mkdir -p "$OUT_DIR"

dotnet publish "$PROJECT" \
  -c "$CONFIG" \
  -r "$RID" \
  --self-contained true \
  -p:PublishIISAssets=true \
  -p:PublishReadyToRun=false \
  -p:PublishSingleFile=false \
  -p:IncludeAllContentForSelfExtract=true \
  -p:GenerateRuntimeConfigurationFiles=true \
  -p:PreserveCompilationContext=true \
  -o "$OUT_DIR"

# -----------------------------------------
# 3) Sanity check publish output is complete
# -----------------------------------------
DLL="$OUT_DIR/kob.dll"
DEPS="$OUT_DIR/kob.deps.json"
RCFG="$OUT_DIR/kob.runtimeconfig.json"

echo "🔎 Verifying output files…"
missing=0
for f in "$DLL" "$DEPS" "$RCFG"; do
  if [[ ! -f "$f" ]]; then
    echo "❌ Missing: $f"
    missing=1
  fi
done
if [[ $missing -ne 0 ]]; then
  echo "❌ Publish output incomplete. Aborting."
  exit 1
fi

echo "✅ Found:"
ls -l "$DLL" "$DEPS" "$RCFG"

# ---------------------------------------------------------
# 4) Show IdentityModel version resolved in the deps (truth)
# ---------------------------------------------------------
echo "🔎 IdentityModel(JsonWebTokens) in deps.json:"
grep -n '"Microsoft.IdentityModel.JsonWebTokens"' "$DEPS" -n || echo "⚠️  Not found in deps (unexpected)"

# Optional: list any IdentityModel DLLs that got published
echo "🔎 IdentityModel DLLs in output:"
find "$OUT_DIR" -iname "Microsoft.IdentityModel.*.dll" -maxdepth 2 -type f -print | sed 's/^/  /' || true

echo "✅ Publish complete → $OUT_DIR"
