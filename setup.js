#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Neumorphic Landing Page project...');

try {
  console.log('📦 Installing dependencies...');
  execSync('npm install --no-fund --no-audit --loglevel=error', { stdio: 'inherit' });
  
  // Verify Next.js was installed
  const nextBinPath = path.join(process.cwd(), 'node_modules', '.bin', 'next');
  const nextExists = fs.existsSync(nextBinPath);
  
  if (!nextExists) {
    throw new Error('Next.js CLI not found. Dependencies may not have installed correctly.');
  }
  
  console.log('🔑 Setting up environment variables...');
  execSync('cp .env.example .env', { stdio: 'inherit' });
  
  console.log('🏗️ Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Setup complete! You can now run npm run dev to start the development server.');
} catch (error) {
  console.error('❌ Setup failed:', error.message);
  console.log('\n🔍 Troubleshooting tips:');
  console.log('1. Try running "npm install" manually');
  console.log('2. Check if your Node version is compatible (14+ required)');
  console.log('3. Check available disk space');
  console.log('4. Try installing with "--force" flag if dependencies conflict');
  process.exit(1);
} 