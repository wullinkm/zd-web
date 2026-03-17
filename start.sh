#!/bin/bash
# Copy static assets into standalone output for proper serving
cp -r .next/static .next/standalone/.next/static 2>/dev/null || true
cp -r public .next/standalone/public 2>/dev/null || true

# Start the standalone server
node .next/standalone/server.js
