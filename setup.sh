#!/bin/bash

# Display welcome message
echo "🚀 Setting up your Neumorphic Landing Page project..."

# Make script exit on any errors
set -e

# Install dependencies
echo "📦 Installing dependencies..."
npm install --no-fund --no-audit --loglevel=error

# Check if install was successful
if [ $? -ne 0 ]; then
  echo "❌ Failed to install dependencies. Aborting setup."
  exit 1
fi

# Copy environment variables
echo "🔑 Setting up environment variables..."
cp .env.example .env

# Check if Next.js CLI is available before building
if [ -f "./node_modules/.bin/next" ]; then
  echo "🏗️ Building the project..."
  npm run build
else
  echo "⚠️ Next.js CLI not found. Dependencies may not have installed correctly."
  echo "👉 Try running 'npm install' manually."
  exit 1
fi

# Success message
echo "✅ Setup complete! You can now run 'npm run dev' to start the development server." 