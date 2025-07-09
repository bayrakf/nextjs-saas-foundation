#!/bin/bash

# 🚀 Next.js SaaS Foundation - Preview Setup
echo "🚀 Setting up Next.js SaaS Foundation Preview..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18+ required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Copy environment file
if [ ! -f .env.local ]; then
    echo "📋 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your values"
fi

# Check if git is initialized
if [ ! -d .git ]; then
    echo "🔧 Initializing git repository..."
    git init
    git add .
    git commit -m "🎉 Initial commit"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "🔗 Next steps:"
echo "1. Update .env.local with your values"
echo "2. Run 'npm run dev' to start development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "📖 For the complete version with database, payments, and more:"
echo "   Visit: https://reposhare.io/nextjs-saas-foundation"
echo ""
echo "🌟 Happy coding!"
