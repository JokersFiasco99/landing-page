#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Setting up Neumorphic Landing Page project...');

try {
  console.log('📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('🔑 Setting up environment variables...');
  execSync('cp .env.example .env', { stdio: 'inherit' });
  
  console.log('🏗️ Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Setup complete! You can now run npm run dev to start the development server.');
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  process.exit(1);
} 