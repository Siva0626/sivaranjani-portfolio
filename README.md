# Sivaranjani Portfolio --- Codex Project

## AI Project Identity

**PortfolioDev**

This project is a professional portfolio website developed using an
AI-assisted / vibe-coding workflow.

This repository acts as a project knowledge base for AI-assisted
development. It is not model training.

The AI should read the relevant project files and documentation as
context before making changes.

------------------------------------------------------------------------

## Development Workflow

The project follows this development workflow:

``` text
Requirements
    ↓
UX / UI
    ↓
Architecture
    ↓
Frontend
    ↓
Backend — when required
    ↓
Database — when required
    ↓
API — when required
    ↓
Testing
    ↓
Git
    ↓
GitHub
    ↓
Deployment
```

The project starts with a responsive frontend.

Supabase, backend services, and APIs are added only when a real project
requirement needs them.

------------------------------------------------------------------------

## Project Architecture

### Frontend

``` text
React
TypeScript
Vite
```

The frontend contains the portfolio pages, navigation, UI components,
and contact form.

### Backend

``` text
Node.js
Express
```

The backend provides API endpoints required by the portfolio.

Current API endpoints:

``` text
GET  /api/health
POST /api/contact
```

### Database

``` text
Supabase
```

The contact form stores submitted messages in:

``` text
contact_messages
```

------------------------------------------------------------------------

## Contact Form Flow

``` text
Visitor
   ↓
Portfolio Contact Form
   ↓
Cloudflare Frontend
   ↓
Render Backend API
   ↓
POST /api/contact
   ↓
Supabase
   ↓
contact_messages
```

------------------------------------------------------------------------

## Deployment

### Frontend

The frontend is deployed using:

``` text
Cloudflare Workers & Pages
```

Production website:

``` text
https://sivaranjani-portfolio-web.sivaranjani0626.workers.dev
```

### Backend

The backend is deployed using:

``` text
Render
```

Backend service:

``` text
sivaranjani-portfolio-backend
```

Health endpoint:

``` text
/api/health
```

------------------------------------------------------------------------

## Repository Structure

``` text
Sivaranjani_Portfolio_Codex_Project_Starter/
│
├── ai/
│   └── AI/project context and instructions
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── database/
│   └── database-related documentation
│
├── docs/
│   └── project documentation
│
├── scripts/
│   └── project scripts
│
├── src/
│   └── frontend source code
│
├── tests/
│   └── testing resources
│
├── dist/
│   └── production frontend build
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .gitignore
└── README.md
```

------------------------------------------------------------------------

## Current Status

``` text
Frontend              ✅
Responsive UI         ✅
Navigation            ✅
Contact Form          ✅
Backend API           ✅
Supabase Database     ✅
Contact API           ✅
GitHub                ✅
Render Deployment     ✅
Cloudflare Deployment ✅
Health Check          ✅
Live Site Testing     ✅
```

------------------------------------------------------------------------

## Testing Completed

The live portfolio has been tested for the main navigation:

``` text
Home
About
Projects
Capabilities
Course Creation
Data Analysis
Contact
```

The contact form has also been tested with:

-   Valid submission
-   Invalid email validation
-   Backend API submission
-   Supabase database insertion

------------------------------------------------------------------------

## AI-Assisted Development Rules

When working on this project, the AI should:

1.  Read the relevant project documentation before making changes.
2.  Understand the existing architecture before adding new code.
3.  Reuse existing components and patterns where possible.
4.  Avoid unnecessary dependencies.
5.  Start with frontend implementation when no backend requirement
    exists.
6.  Add backend/database/API functionality only when required.
7.  Test changes before deployment.
8.  Keep Git history meaningful.
9.  Never expose secrets or environment variables.
10. Update project documentation when the architecture changes.

------------------------------------------------------------------------

## Deployment Roles

``` text
GitHub
   ↓
Source Code Repository

Cloudflare Workers & Pages
   ↓
Frontend Hosting / Deployment

Render
   ↓
Backend Hosting / Deployment

Supabase
   ↓
Database
```

------------------------------------------------------------------------

## Project Principle

> Build only what the business requirement needs.

The project should remain simple, maintainable, responsive, and
production-ready while using AI as a development assistant.
