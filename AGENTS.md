# AGENTS.md

## Project Overview

**ZD Web** — A jobs website where people can find new career opportunities.  
Frontend for the [ZD Gateway API](https://zd-gw-9famg.ondigitalocean.app/docs).

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Deployment:** DigitalOcean App Platform
- **API:** ZD Gateway (FastAPI) — https://zd-gw-9famg.ondigitalocean.app

## Conventions

### Code Style
- Use TypeScript strict mode
- Prefer server components by default; use `"use client"` only when needed
- Use Next.js App Router conventions (`app/` directory)
- Collocate components with their routes when page-specific
- Shared components go in `components/`
- API calls go through a centralized API client (`lib/api.ts`)

### Naming
- Components: PascalCase (`VacancyCard.tsx`)
- Utilities/hooks: camelCase (`useVacancies.ts`)
- Routes: kebab-case (`/vacancies/[id]`)
- CSS: Tailwind utility classes; avoid custom CSS unless necessary

### Git
- Branch from `main`
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- PR before merge (when collaborating)

## Key Decisions
- SSR/SSG for job listing pages (SEO matters for job posts)
- Client-side interactivity for search/filters
- API base URL configured via environment variable
- No auth on v1 (public job browsing)

## Commands
```bash
npm run dev       # Local dev server
npm run build     # Production build
npm run lint      # Lint check
```
