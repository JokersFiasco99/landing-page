# Instructions for AI Agents

This project requires dependencies to be installed and environment to be set up before working with the codebase.

## Required Setup Steps

### Option 1: Using the setup script (Recommended)

```bash
chmod +x setup.sh
./setup.sh
```

### Option 2: Using npm directly (If Option 1 fails)

```bash
npm run setup
```

### Option 3: Manual setup (If all else fails)

```bash
# Install dependencies
npm install --no-fund --no-audit

# Copy environment variables
cp .env.example .env

# Build the project
npm run build
```

The setup process will:
- Install all npm dependencies
- Set up environment variables from .env.example
- Build the project

## Working with this Project

After setup is complete, you can start developing by running:

```bash
npm run dev
```

The project is a Next.js application with:
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Neumorphic design principles

## Troubleshooting

If you encounter issues during setup:
1. Try running `npm install` manually
2. Check if Node.js version is compatible (14+ required)
3. If you see dependency conflicts, try `npm install --force` 