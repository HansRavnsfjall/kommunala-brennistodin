#!/usr/bin/env bash
set -euo pipefail

# -------------------------------------------
# Automatically restart an Umbraco solution
# -------------------------------------------

# Go to the folder where this script lives
cd "$(dirname "$0")"

# Path to launchSettings.json
LAUNCH_JSON="Properties/launchSettings.json"

# Extract HTTPS port from applicationUrl (works even with spaces in path)
HTTPS_PORT=$(grep -oE '"applicationUrl"\s*:\s*"[^"]+"' "$LAUNCH_JSON" \
  | head -n1 \
  | sed -E 's/.*"applicationUrl"\s*:\s*"([^"]+)".*/\1/' \
  | sed -E 's/.*https?:\/\/[^:]+:([0-9]+).*/\1/')

# Fallback port if not found
if [[ -z "${HTTPS_PORT:-}" ]]; then
  HTTPS_PORT=44398
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

echo "🚀 Starting solution..."
dotnet run
