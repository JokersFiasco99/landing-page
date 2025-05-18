# Neumorphic Landing Page

> **⚠️ IMPORTANT FOR AI AGENTS:** This project requires setup! Please run `./setup.sh` before working with the code.

A modern, elegant landing page built with Next.js, Tailwind CSS, and shadcn/ui, featuring a neumorphic design style.

## Features

- Clean, modern neumorphic UI design
- Built with Next.js 14
- Styled with Tailwind CSS
- UI components from shadcn/ui
- Fully responsive design (works on mobile and desktop)
- Smooth scroll navigation
- Interactive elements with subtle animations
- Codex-ready with setup scripts

## What is Neumorphism?

Neumorphism (or Neo-skeuomorphism) is a UI design trend that combines elements of skeuomorphism and flat design. It creates soft, extruded plastic-like interfaces through the clever use of shadows and highlights, giving elements a subtle 3D appearance while maintaining a minimal aesthetic.

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/landing-page.git
cd landing-page
```

2. Set up the project using the setup script
```bash
# Option 1: Using the setup script
./setup.sh

# Option 2: Manual setup
npm install
cp .env.example .env
npm run build
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Codex Integration

This project is fully configured for use with Codex. The setup includes:

1. **Ready-to-use setup script**: Run `./setup.sh` to install dependencies, set up environment variables, and build the project.

2. **VS Code devcontainer support**: The `.devcontainer.json` file configures a development container with all necessary extensions and settings.

3. **Environment variable examples**: The `.env.example` file provides templates for all required environment variables.

4. **Complete dependency listing**: The `package.json` includes all dependencies for seamless Codex analysis.

## Customization

You can easily customize this landing page by:

1. Editing the content in `src/app/page.tsx`
2. Modifying the styles using Tailwind classes
3. Customizing the shadcn/ui components as needed
4. Adding more sections or components

## Deployment

This project can be easily deployed to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/landing-page)

## License

This project is available for free use under the MIT License.
