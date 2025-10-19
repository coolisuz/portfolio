# Saidjamol Ikramov - Portfolio

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

A place to know a bit more about me and my work — and where I occasionally jot down articles and notes on software engineering.

## Features

- Dynamic content management with Markdown
- Multi-language support (English, Russian, Uzbek)
- Dark/Light theme toggle
- Responsive design
- Blog with case studies, architecture docs, and articles
- Code syntax highlighting
- GitHub-style UI

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Markdown**: react-markdown with syntax highlighting
- **Deployment**: Vercel

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding Content

Blog content is stored in `/public/content/` as Markdown files.

To add a new post:

1. Create `.md` file in appropriate directory:
   - `/public/content/case-studies/`
   - `/public/content/architecture/`
   - `/public/content/articles/`

2. Add frontmatter:
```markdown
---
id: my-post
title: "My Post Title"
type: article
tags: [React, TypeScript]
---

# Content here
```

3. Update `/public/content/index.json` with the new entry

4. Refresh browser - no code changes needed!

## Project Structure

```
portfolio/
├── public/
│   └── content/          # Blog content (Markdown files)
├── src/
│   ├── components/       # React components
│   ├── contexts/         # Theme & Language contexts
│   ├── i18n/             # Translations
│   ├── pages/            # Page components
│   ├── types/            # TypeScript types
│   └── utils/            # Utility functions
└── README.md
```

## License

© 2025 Saidjamol Ikramov. All rights reserved.
