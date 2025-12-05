#!/usr/bin/env bash
set -euo pipefail

# -------------------------------------------
# Restart Umbraco (net9) the reliable way
# -------------------------------------------

# cd to this script's directory (handles spaces in path)
cd "$(dirname "$0")"

PROJECT="kob.csproj"
CONFIG="Debug"
TFM="net9.0"
LAUNCH_JSON="Properties/launchSettings.json"

# 1) Figure out the port from launchSettings.json (first applicationUrl)
if [[ -f "$LAUNCH_JSON" ]]; then
  HTTPS_PORT=$(grep -oE '"applicationUrl"\s*:\s*"[^"]+"' "$LAUNCH_JSON" \
    | head -n1 \
    | sed -E 's/.*"applicationUrl"\s*:\s*"([^"]+)".*/\1/' \
    | sed -E 's/.*https?:\/\/[^:]+:([0-9]+).*/\1/')
else
  HTTPS_PORT=""
fi

if [[ -z "${HTTPS_PORT:-}" ]]; then
  HTTPS_PORT=5215
  echo "⚠️  Could not find port in $LAUNCH_JSON — using default $HTTPS_PORT"
fi

echo "🔍 Checking for process using port $HTTPS_PORT..."
PID=$(lsof -nP -iTCP:"$HTTPS_PORT" -sTCP:LISTEN -t || true)
if [[ -n "$PID" ]]; then
  echo "🛑 Killing process $PID using port $HTTPS_PORT..."
  kill "$PID" || true
  sleep 1
  if kill -0 "$PID" 2>/dev/null; then
    echo "⚠️  Process still alive, force killing..."
    kill -9 "$PID" || true
  fi
else
  echo "✅ No process found on port $HTTPS_PORT"
fi

echo "🧹 Cleaning..."
rm -rf bin obj

echo "📦 Restoring..."
dotnet restore "$PROJECT" --force-evaluate

echo "🔨 Building ($CONFIG/$TFM)..."
dotnet build "$PROJECT" -c "$CONFIG"

# Sanity: make sure the runtime sidecars exist where dotnet run expects them
OUTDIR="bin/$CONFIG/$TFM"
DLL="$OUTDIR/kob.dll"
DEPS="$OUTDIR/kob.deps.json"
RUNTIMECFG="$OUTDIR/kob.runtimeconfig.json"

if [[ ! -f "$DLL" || ! -f "$DEPS" || ! -f "$RUNTIMECFG" ]]; then
  echo "❌ Build output incomplete:"
  ls -l "$OUTDIR" || true
  echo "Expected: $DLL, $DEPS, $RUNTIMECFG"
  exit 1
fi

echo "🚀 Starting project with launchSettings (port $HTTPS_PORT)..."
# Use the project explicitly so the host looks in the right bin folder
dotnet run --project "$PROJECT" -c "$CONFIG"
