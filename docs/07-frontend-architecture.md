# Frontend Architecture Plan

Status: Approved — frontend implementation ready.

## Architecture Goal

Build a simple, accessible, responsive multi-page professional portfolio suitable for a two-day MVP. Use reusable React components, local typed content data, and clearly marked placeholders for all information not yet provided.

The MVP is frontend-only. No backend, API, database, Supabase connection, external form service, or database-backed contact form is included.

## 1. Approved Technology Stack

### React

- **What it does:** Provides the component-based UI layer for pages, layouts, cards, navigation, and local interactions.
- **Why this project needs it:** It keeps repeated patterns such as the shared header, footer, project cards, skills groups, and calls to action consistent and maintainable.
- **Status:** Required.

### TypeScript

- **What it does:** Adds type checking to JavaScript, including data shapes for portfolio content and component inputs.
- **Why this project needs it:** It keeps the content model reliable as approved details replace placeholders.
- **Status:** Required.

### Vite

- **What it does:** Provides the local development server and production build process for React and TypeScript.
- **Why this project needs it:** It is a lightweight, conventional frontend workflow suitable for a static Render deployment.
- **Status:** Required development/build tooling.

### React Router

- **What it does:** Maps browser URLs to React page components and enables navigation between portfolio pages.
- **Why this project needs it:** The MVP is explicitly a multi-page website with seven approved routes.
- **Status:** Required.

### Native CSS

- **What it does:** Implements responsive layouts, typography, spacing, and interaction states without a UI framework.
- **Why this project needs it:** The approved design needs a tailored professional presentation, while the MVP does not need a CSS framework or component library.
- **Status:** Required. Use native CSS with a clear project-wide stylesheet/component stylesheet convention.

## 2. Project/Application Structure

```text
src/
  app/
    App.tsx                 # Router and shared application shell
    routes.tsx              # Route definitions
    navigation.ts           # Navigation data shared by header and footer
  pages/
    HomePage.tsx
    AboutPage.tsx
    ProjectsPage.tsx
    CapabilitiesPage.tsx
    CourseCreationPage.tsx
    DataAnalysisPage.tsx
    ContactPage.tsx
  components/
    layout/                 # SiteHeader, PrimaryNavigation, MobileMenuButton, SiteFooter
    content/                # SectionHeading, ProjectCard, ProjectGrid, SkillGroup, CTASection
    feedback/               # EmptyState and asset fallback presentation, if needed
  content/
    portfolio.ts            # Approved content objects and explicit placeholders
    types.ts                # TypeScript content interfaces
  styles/
    global.css              # Reset/base styles, tokens, typography, global focus rules
    layout.css              # Shared page/container/layout rules
    components.css          # Shared component patterns and responsive rules
  assets/
    images/                 # Approved local images only
    icons/                  # Project-owned SVG/icon assets, if approved
  main.tsx                  # Application entry point
  vite-env.d.ts             # Vite/TypeScript declarations

tests/                      # Reserved; no automated testing setup in this MVP
```

- `pages/` composes route-specific content.
- `components/` contains reusable, content-agnostic presentation and layout pieces.
- `content/` separates supplied facts and placeholders from page markup.
- `assets/` contains only approved, properly licensed local assets.
- No `api/`, `server/`, database client, Supabase client, or form-delivery folder is created for the MVP.

## 3. Approved Pages and Routes

| Route | Page | MVP purpose |
| --- | --- | --- |
| `/` | Home | Introduce the professional portfolio, positioning, core capabilities, selected work, and a contact CTA. |
| `/about` | About | Present approved background, strengths, working approach, and AI/digital workflow capability. |
| `/projects` | Projects | Present verified work/project cards and their approved details. |
| `/capabilities` | Capabilities | Present skills grouped into the approved capability categories. |
| `/course-creation` | Course Creation | Present verified course-creation work only. |
| `/data-analysis` | Data Analysis | Present verified data-analysis work only. |
| `/contact` | Contact | Present approved contact details and verified professional links; no database-backed form. |

- Every page uses the same application shell, shared navigation, and shared footer.
- The active navigation link is derived from the current route.
- Project-detail routes are not part of the MVP. A project card may link only to a supplied, verified external URL.
- Unavailable content is represented by a clear placeholder during development or the relevant sub-section is omitted. It is never fabricated.

## 4. Reusable Components

| Component | Responsibility |
| --- | --- |
| `AppShell` | Shared outer structure: header, main content region, and footer. |
| `SiteHeader` | Site identity, desktop navigation, mobile navigation trigger, and optional contact CTA. |
| `PrimaryNavigation` | Shared route links, current-route state, and accessible navigation semantics. |
| `MobileMenuButton` | Accessible mobile-menu open/close control and expanded state. |
| `SiteFooter` | Shared footer navigation and verified professional links. |
| `PageContainer` | Shared constrained-width page content layout. |
| `Section` | Consistent semantic section spacing and IDs where needed. |
| `SectionHeading` | Consistent heading hierarchy and supporting copy. |
| `Hero` | Home-page introduction and primary contact CTA. |
| `ProjectGrid` | Responsive collection layout for work/project cards. |
| `ProjectCard` | Supplied project metadata, approved image/fallback, and valid external action only. |
| `SkillGroup` | One approved capability category and its supplied items. |
| `CTASection` | Reusable link to Contact or another approved page. |
| `ProfessionalLinks` | Verified email and professional/social links. |
| `EmptyState` | Truthful presentation for unavailable content where a section remains visible. |

No contact-form component is required for this MVP. It can be designed later only after a form-delivery requirement is approved.

## 5. Layout Structure and Component Relationships

```text
App
├─ BrowserRouter
│  └─ AppShell
│     ├─ SiteHeader
│     │  ├─ SiteIdentity
│     │  ├─ PrimaryNavigation
│     │  └─ MobileMenuButton (small screens)
│     ├─ Main / Routes
│     │  ├─ HomePage
│     │  ├─ AboutPage
│     │  ├─ ProjectsPage
│     │  ├─ CapabilitiesPage
│     │  ├─ CourseCreationPage
│     │  ├─ DataAnalysisPage
│     │  └─ ContactPage
│     └─ SiteFooter
```

- `App` owns route configuration and the shared shell.
- The shared `navigation.ts` definition is consumed by both `PrimaryNavigation` and `SiteFooter`, preventing duplicated link definitions.
- Pages select relevant local content and compose shared components.
- `ProjectGrid` maps approved project data to `ProjectCard` instances.
- `SkillGroup` maps approved category data to accessible grouped lists or cards.
- Layout and content components do not contain invented personal facts; they receive supplied content or explicit placeholders.

## 6. State Requirements

### Required local UI state

- Mobile navigation open/closed state and corresponding focus-management behaviour.
- Current navigation state derived from React Router's current route.

### Not required for the MVP

- No global state manager.
- No user accounts, authentication, server state, database cache, analytics state, or content-management state.
- No contact-form field, validation, sending, success, or error state because a database-backed form is not being implemented.

Use React component state and derived route data only. Do not add Redux, Zustand, React Query, or similar packages.

## 7. Form Handling Requirements

- The Contact page uses approved professional contact details and verified external links as the MVP contact method.
- Do not implement a database-backed contact form, API endpoint, email service, Supabase integration, or delivery confirmation.
- If a form is requested in a later phase, first approve its fields, submission/delivery mechanism, security approach, validation, loading state, success state, and error state.

## 8. Responsive Implementation Approach

- Use mobile-first native CSS with fluid widths, logical spacing tokens, and responsive component rules.
- Use CSS Grid for project and capability collections: one column on mobile, one or two flexible columns on tablet, and more columns on desktop only where card widths remain readable.
- Use Flexbox for header layout, navigation, and CTA groups.
- Collapse the header navigation to an accessible menu at constrained widths; do not rely on device identity.
- Keep content source order aligned with reading and keyboard order across all layouts.
- Avoid fixed dimensions that cause clipping, horizontal scrolling, or unreadable content.
- Ensure every page works on mobile, tablet, and desktop without any hover-only interaction.

## 9. Accessibility Implementation Approach

- Use semantic HTML landmarks: header, navigation, main, sections, and footer.
- Give every page a clear page-level heading and maintain logical heading order.
- Use links for route navigation and buttons only for interface actions such as opening the mobile menu.
- Provide visible, high-contrast focus indicators and keyboard access for all interactive controls.
- Mark the active navigation route visually and programmatically.
- Provide text alternatives for meaningful approved images and hide decorative images from assistive technology.
- Use descriptive link labels and accessible names for icon-only controls.
- Respect reduced-motion preferences and never use colour, hover, or motion as the only state indicator.
- Manually verify keyboard navigation, focus behaviour, browser zoom, and narrow viewport behaviour during implementation.

## 10. Asset and Image Structure

- Store approved local images in `src/assets/images/` and approved project-owned SVG/icon assets in `src/assets/icons/`.
- Use stable, descriptive filenames such as `project-[slug]-[purpose].webp`.
- Keep asset metadata with the associated content: source path, meaningful alternative text, optional caption, and optional focal-position guidance.
- Do not add a profile image, project screenshot, logo, stock image, or icon library until it is supplied or approved.
- If no approved media exists, use a neutral visual placeholder or omit the media. Never imply that a placeholder is real portfolio work.

## 11. Content and Data Structure

Store reviewed content in typed local objects; no CMS or external data source is needed for the MVP.

```text
site
  name: placeholder | supplied text
  title: placeholder | supplied text
  introduction: placeholder | supplied text
  bio: placeholder | supplied text
  contact
    email: optional supplied value
    links: verified external destinations only

navigation[]
  label
  path

capabilities[]
  category
  items[]

projects[]
  name
  context
  objective
  role
  responsibilities[]
  workPerformed[]
  tools[]
  outcome: optional verified value
  externalLink: optional verified value
  image: optional approved asset metadata
  type: project | course-creation | data-analysis
```

- Components render only available, approved fields; empty optional values are omitted rather than fabricated.
- Clearly label development placeholders and keep them separate from verified content.
- Use the `type` field to select projects for `/projects`, `/course-creation`, and `/data-analysis` without duplicating data.
- Capability content is limited to the approved categories: Operations, Management, Project Coordination, Digital Work, Course Creation, Data Analysis, and AI & Digital Workflows.

## 12. Required Packages and Dependencies

### Required runtime packages

| Package | What it does | Why needed | Status |
| --- | --- | --- | --- |
| `react` | Renders the component-based interface. | Required for the approved UI architecture. | Required |
| `react-dom` | Connects React to the browser DOM. | Required to run the React site in the browser. | Required |
| `react-router-dom` | Provides multi-page client-side route mapping and navigation. | Required for the seven approved routes and active-route navigation. | Required |

### Required development/build packages

| Package | What it does | Why needed | Status |
| --- | --- | --- | --- |
| `vite` | Local development server and production build tooling. | Provides the approved lightweight frontend workflow. | Required |
| `typescript` | Static type checking. | Protects component and content-data contracts. | Required |
| `@vitejs/plugin-react` | Enables React support in Vite. | Required by the selected Vite + React setup. | Required |

### Packages not required

- No automated testing packages for this MVP.
- No CSS framework, component library, or icon library; native CSS and approved project-owned assets are sufficient.
- No global state-management or form library; local state is sufficient for the mobile menu, and no form is being implemented.
- No backend, API, database, Supabase SDK, authentication, analytics, CMS, or email-service package.

Packages are documented only. This decision does not authorize installing them yet.

## 13. Development and Manual Testing Approach

### Development sequence

1. Install the approved stack only after explicit implementation authorization.
2. Scaffold the React + TypeScript + Vite application and add React Router.
3. Establish the shared app shell, route definitions, global CSS, and placeholder content data.
4. Build the seven page compositions with shared reusable components.
5. Implement responsive layouts, accessible navigation, and interaction states.
6. Replace placeholders only with supplied and approved content/assets.

### Manual verification

- Test all seven routes, active navigation state, header/footer links, CTAs, and verified external links.
- Test mobile, tablet, and desktop layouts for clipping, horizontal scrolling, readable card widths, and accessible mobile navigation.
- Test hover, focus, active, and disabled states where relevant, including keyboard-only operation and focus visibility.
- Check browser console errors during local development and before handoff.
- Check placeholder treatment, meaningful image alternatives, and absence of invented personal claims.
- Run the local production build when implementation is authorized.

No automated testing packages are planned or installed at this stage.

## 14. Remaining Decisions

1. Provide approved personal profile information, professional contact details, external links, projects, course-creation examples, data-analysis examples, outcomes, and media.
2. Approve visual brand direction: palette, typography, logo use if any, and image style.
3. Decide later whether a contact form is needed; this requires a separate approved delivery architecture and is not part of this MVP.

## Implementation Boundary

This approved architecture defines the frontend direction but does not authorize application code, package installation, backend work, APIs, databases, Supabase, or deployment changes. Wait for explicit implementation approval.
