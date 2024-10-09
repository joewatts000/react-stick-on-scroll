#!/bin/bash

# Initialize git repository
git init

# Create .gitignore
cat > .gitignore << EOL
# Dependencies
/node_modules

# Production build
/dist

# IDE files
.idea/
.vscode/
*.sublime-workspace
*.sublime-project

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
EOL

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: React Stick On Scroll component"

# Instructions for adding remote repository
echo "
Next steps:

1. Create a new repository on GitHub
2. Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/react-stick-on-scroll.git
git branch -M main
git push -u origin main

Replace 'YOUR_USERNAME' with your actual GitHub username.
"