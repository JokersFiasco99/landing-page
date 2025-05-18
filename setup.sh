#!/bin/bash

# Display welcome message
echo "🚀 Setting up your Neumorphic Landing Page project..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment variables
echo "🔑 Setting up environment variables..."
cp .env.example .env

# Build the project
echo "🏗️ Building the project..."
npm run build

# Success message
echo "✅ Setup complete! You can now run 'npm run dev' to start the development server." 