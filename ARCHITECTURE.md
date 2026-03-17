# Architecture

This document describes the architecture of the ZD Web frontend.

## Overview

A **Next.js 15** application using the App Router pattern with server-first rendering for SEO-critical job listing pages.

```
┌─────────────────────────────────────────────────────┐
│                    Next.js App                       │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   Pages /    │  │ Components  │  │    Hooks     │ │
│  │   Layouts    │  │  (UI layer) │  │  (client)    │ │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘ │
│         │                │                │         │
│  ┌──────┴────────────────┴────────────────┴──────┐  │
│  │              lib/api.ts (API Client)          │  │
│  └───────────────────┬──────────────────────────┘  │
│                      │                              │
├──────────────────────┼──────────────────────────────┤
│                      ▼                              │
│         ZD Gateway API (FastAPI)                    │
│    https://zd-gw-9famg.ondigitalocean.app          │
└─────────────────────────────────────────────────────┘
```

## Directory Structure

```
.
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (fonts, metadata, providers)
│   ├── page.tsx                # Homepage (hero, featured jobs, search)
│   ├── vacancies/
│   │   ├── page.tsx            # Job listings (search, filters, pagination)
│   │   └── [id]/
│   │       └── page.tsx        # Single job detail page
│   └── globals.css             # Global styles + Tailwind imports
│
├── components/                 # Shared UI components
│   ├── ui/                     # shadcn/ui primitives (button, card, input, etc.)
│   ├── layout/                 # Header, Footer, Navigation
│   ├── vacancy/                # VacancyCard, VacancyList, VacancyDetail
│   └── search/                 # SearchBar, Filters, SearchResults
│
├── lib/                        # Utilities and shared logic
│   ├── api.ts                  # API client for ZD Gateway
│   ├── types.ts                # TypeScript interfaces (Vacancy, etc.)
│   └── utils.ts                # Helpers (formatting, dates, etc.)
│
├── hooks/                      # Custom React hooks
│   └── use-vacancies.ts        # Client-side vacancy fetching/filtering
│
├── public/                     # Static assets (images, icons)
│
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── AGENTS.md                   # Project conventions
└── ARCHITECTURE.md             # This file
```

## Rendering Strategy

| Route | Rendering | Reason |
|-------|-----------|--------|
| `/` (Homepage) | SSG + ISR | Mostly static, revalidate periodically |
| `/vacancies` | SSR | Fresh listings, SEO-critical |
| `/vacancies/[id]` | SSR | Each job page must be indexable |

- **Server Components** are the default — data fetching happens on the server
- **Client Components** (`"use client"`) used only for interactive elements: search input, filters, dropdowns

## API Integration

All API calls go through `lib/api.ts`, a thin wrapper around the ZD Gateway:

| Frontend Route | API Endpoint | Method |
|---------------|-------------|--------|
| `/vacancies` | `GET /vacancies` | List/search jobs |
| `/vacancies/[id]` | `GET /vacancies/{id}` | Get job details |
| Homepage | `GET /vacancies?limit=6` | Featured jobs |

## Configuration

| Environment Variable | Description | Required |
|---------------------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | ZD Gateway API base URL | Yes |
| `PORT` | Server port (default: 3000) | No |

## Deployment

- **Platform:** DigitalOcean App Platform
- **Build:** `npm run build` (Next.js static + server output)
- **Runtime:** Node.js
- **Source:** GitHub auto-deploy from `main` branch

## Design Principles

1. **SEO first** — Job listings must be server-rendered and indexable
2. **Fast** — Minimal client-side JS; use server components by default
3. **Accessible** — shadcn/ui provides accessible primitives out of the box
4. **Simple** — No auth, no complex state management on v1
5. **API-driven** — All data comes from ZD Gateway; no local database
