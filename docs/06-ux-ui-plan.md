# UX/UI Plan

Status: Draft — pending review and approval before frontend implementation.

## Purpose and UX Goal

Create a professional, clear, and accessible portfolio experience that helps visitors quickly understand Sivaranjani's professional positioning, explore relevant capabilities and work, establish trust through accurate information, and take a contact action.

This plan specifies structure and behaviour only. Personal content, visual branding, project details, outcomes, imagery, and external links must use clearly labelled placeholders until supplied and approved.

## 1. User Journey

### Primary journey

Home → understand the professional profile → explore capabilities → review work and projects → assess fit and trust → contact or open a relevant professional link.

### Supporting journeys

- A visitor arriving at a specific section can use primary navigation to move to any other primary destination.
- A visitor interested in a project can open its detail content or a verified external link, where one is provided.
- A visitor ready to connect can use the persistent or contextual contact CTA to reach Contact.
- Keyboard and screen-reader users can complete the same journey through semantic landmarks, visible focus indicators, descriptive controls, and logical heading order.

## 2. Navigation

### Primary navigation

Navigation items: Home, About, Work & Projects, Skills, Contact.

- The site identity links to Home and uses the approved professional name only when supplied; otherwise it uses a clearly marked placeholder.
- Each item moves to its corresponding page or section.
- The frontend architecture must be flexible enough to support either a single-page section-based portfolio or separate pages without requiring a content-model rewrite. The implementation choice remains open until frontend architecture is approved.
- The current destination is visually indicated and exposed programmatically with an appropriate current-page/current-section state.
- A Contact CTA may appear in the navigation when space permits; it must not replace the Contact navigation item.

### Mobile navigation

- Navigation collapses to an accessible menu control on small screens.
- The control exposes its expanded/collapsed state and has an accessible label.
- Selecting a navigation item closes the menu and moves focus appropriately to the destination.
- The menu can be dismissed with its control and keyboard Escape behaviour where implemented.

### Footer navigation

- Repeat primary destinations and include only verified professional/external links.
- External links identify their destination and, if they open a new tab, communicate that behaviour accessibly.

## 3. Pages and Section Structure

The approved navigation defines five primary destinations.

### Home

1. Introductory hero: professional name, title, short introduction, and primary contact CTA.
2. Professional positioning: concise summary of approved professional areas.
3. Core capabilities: an overview linking to Skills or Work & Projects.
4. Selected work: a limited set of project cards, populated only with verified work or placeholders.
5. Closing contact CTA.

### About

1. Background and professional bio.
2. Strengths and working approach.
3. AI and digital workflow capability, described only from approved content.
4. Contextual CTA to Work & Projects or Contact.

### Work & Projects

1. Introductory context for the work collection.
2. Project/work card collection.
3. Course-creation showcase, when verified content is available.
4. Data-analysis showcase, when verified content is available.
5. Closing CTA to Contact.

Each project can present name, context, objective, role, responsibilities/work performed, tools, outcome/result where available, and a verified link. Absent fields are omitted or shown as clearly labelled content placeholders during development; they are never inferred.

### Skills

1. Introductory statement.
2. Skills grouped into the approved categories: Operations, Management, Project Coordination, Digital Work, Course Creation, Data Analysis, and AI & Digital Workflows.
3. Contextual CTA to Work & Projects or Contact.

### Contact

1. Invitation to make contact.
2. Verified professional email and professional/social links, when supplied.
3. Optional contact form only if it is approved and a delivery method is decided.
4. Clear confirmation, validation, and error feedback for an implemented form.

## 4. Components

- Site header with identity, primary navigation, mobile menu control, and optional contact CTA.
- Footer with repeated navigation, verified professional links, and any required legal or attribution content.
- Hero/intro block.
- Section heading block: label where needed, heading, and supporting copy.
- Capability/skill group.
- Project card and optional project-detail view.
- Course-creation and data-analysis showcase blocks, reusing the project-content pattern where appropriate.
- CTA block.
- Link list for professional contact destinations.
- Optional contact form: labels, input fields, textarea, validation messaging, status message, and submit control.
- Optional loading, empty, and error feedback components where dynamic content or media needs them.

## 5. Content Hierarchy

- Use one page-level heading that identifies the current page or primary portfolio purpose.
- Use section headings in a logical descending order without skipping levels.
- Put the professional title and short introduction before supporting detail.
- Present relevant capabilities and selected work before longer background content.
- On each project card, prioritize project name, context/objective, role, work performed, tools, then verified outcome and link.
- Put the primary contact action near the introduction and after key decision points; secondary actions lead to deeper exploration.
- Keep content scannable with concise paragraphs, grouped labels, and descriptive headings. Do not use styling alone to convey structure or status.

## 6. Buttons and Calls to Action

### Button roles

- Primary CTA: Contact / Get in touch. It directs to the Contact destination or a verified contact method.
- Secondary CTA: View work, Explore skills, Read project details, or an equivalent descriptive action.
- Tertiary controls: mobile menu, close menu, form reset where justified, and other utility actions.

### CTA behaviour

- Use action-oriented, descriptive labels; avoid ambiguous labels such as “Click here.”
- Use one visually primary CTA per decision area to preserve hierarchy.
- A CTA that navigates uses a link; a CTA that changes interface state or submits a form uses a button.
- Contact CTAs retain their destination across Home, About, Work & Projects, and Skills.
- Project CTAs appear only when an approved project detail or verified external destination exists. Placeholder cards do not imply unavailable links.

## 7. Links

- Link text describes the destination or action.
- Inline links are visually distinguishable without relying only on colour.
- External links use verified URLs only and indicate new-window behaviour if used.
- Linked images or cards provide an accessible name that communicates their destination.
- Broken, empty, or placeholder URLs must not be rendered as active links.

## 8. Cards

### Project/work cards

- Include a project name, concise context or objective, role, selected responsibilities/work performed, and tools when supplied.
- Show an outcome/result only when it is verified.
- Use an image/screenshot only when supplied and relevant; otherwise use a neutral, non-personal visual treatment or clearly marked placeholder during development.
- Include one clear action when an approved detail view or external link exists.
- Keep card heights, spacing, headings, metadata order, and interaction behaviour consistent across a collection.

### Skills/capability cards or groups

- Group content under the approved skills categories.
- Avoid unverified proficiency ratings, years of experience, endorsements, or achievements.
- Do not make a static skills card appear interactive unless it has an actual destination or control.

## 9. Forms

An on-site contact form is optional and must not be implemented until its submission/delivery approach is approved. A frontend-only form may validate fields but cannot claim delivery without an approved mechanism.

If a form is approved:

- Use visible labels for every field; placeholders do not replace labels.
- Clearly identify required and optional fields before submission.
- Validate required inputs and format constraints on the client before attempting submission.
- Preserve entered values after validation errors.
- Associate specific error messages with relevant fields and provide a concise error summary where appropriate.
- Provide a clear sending/loading state, success confirmation, and recoverable submission error message.
- Do not request more personal information than needed for the approved contact purpose.

## 10. Interaction and Feedback States

### Normal state

Controls have clear text or icon labels, sufficient contrast, adequate target size, and no reliance on colour alone to communicate meaning.

### Hover state

- Interactive links, buttons, and actionable cards receive a subtle visual change, such as an underline, border, background, or elevation change.
- Hover treatment confirms interactivity without shifting layout or obscuring content.
- Hover is supplementary; all functionality remains available by keyboard and touch.

### Focus state

- Every keyboard-operable control has a highly visible focus indicator with sufficient contrast.
- Do not remove the browser focus outline unless it is replaced with an equally clear custom indicator.
- Focus order follows visual and reading order.

### Active/current state

- Buttons show a brief pressed state while activated.
- Navigation clearly marks the current page or section.
- Selected filters, tabs, or expandable controls, if introduced later, show selected/expanded state visually and programmatically.

### Disabled state

- Use disabled controls only when an action cannot currently be performed, such as a form submit action before mandatory conditions are met where that behaviour is chosen.
- Disabled styling distinguishes the control while retaining legibility; provide nearby explanation when the reason is not obvious.
- Do not use disabled controls as a substitute for accessible validation feedback.

### Loading state

- Static portfolio content does not require a loading state.
- If images, project content, or form submission later load asynchronously, use concise status text and non-disruptive placeholders/skeletons where appropriate.
- Loading feedback must not prevent access to content already available.

### Empty and error states

- When no verified projects are available for a proposed category, show a truthful empty state or omit the section rather than inventing content.
- Missing images use descriptive fallback text or a neutral placeholder; they do not silently fail.
- Form errors explain what happened, identify how to correct it, and preserve user-entered data where possible.
- Links must be verified before publication.

## 11. Responsive Behaviour

The portfolio supports mobile, tablet, and desktop layouts without horizontal scrolling, clipping, or interactions that depend on hover.

- Use fluid content widths, responsive spacing, and readable line lengths.
- Reflow multi-column layouts into fewer columns as available space decreases.
- Preserve heading hierarchy and DOM reading order across breakpoints.
- Images and media scale within containers while preserving meaningful content and accessible text alternatives.
- Maintain adequate touch target size and separation on touch devices.

### Mobile layout

- Single-column content flow.
- Collapsed primary navigation accessed by an accessible menu control.
- Hero, text, cards, and CTAs stack vertically.
- Project cards display essential information first; optional detail remains available without hover.
- Avoid narrow side-by-side controls; allow buttons to wrap or become full-width when needed.

### Tablet layout

- Use a flexible one- or two-column layout depending on content width.
- Navigation remains expanded only when all destinations and the contact CTA fit without crowding; otherwise use the mobile menu pattern.
- Project and skills collections can use two columns with consistent gaps.
- Maintain generous spacing and readable text without oversized empty areas.

### Desktop layout

- Use a centered, constrained content container with responsive margins.
- Display primary navigation in the header.
- Use multi-column project/skill collections where they improve scanning and preserve readable card widths.
- Supporting visual or profile media, if approved, may sit beside introductory content without displacing the core message or CTA.

## 12. Accessibility Requirements

- Use semantic landmarks for header, navigation, main content, complementary content where applicable, and footer.
- Use semantic headings in logical order and descriptive page titles.
- Ensure all functionality is available with keyboard only.
- Provide visible keyboard focus and avoid keyboard traps.
- Maintain sufficient text, control, and focus-indicator contrast according to applicable WCAG guidance.
- Provide text alternatives for meaningful images; mark decorative imagery appropriately.
- Associate form labels, requirements, validation messages, and status feedback programmatically with their controls.
- Announce dynamically updated form status and errors accessibly when implemented.
- Respect reduced-motion preferences; avoid non-essential motion and never use motion as the only status cue.
- Do not rely on colour, hover, or pointer precision as the sole means of understanding or operating the site.
- Use meaningful link text and accessible names for icon-only controls.
- Test at common zoom levels and narrow viewports to ensure content remains usable.

## 13. Visual Direction Boundaries

- The interface should feel professional, calm, readable, and trustworthy through hierarchy, spacing, typography, and consistent components.
- No specific logo, palette, font, photography style, or personal brand treatment is approved yet.
- Do not introduce personal imagery, biographical statements, client names, project claims, metrics, or testimonials without supplied and approved content.

## 14. Implementation Boundary

- This is a UX/UI specification only; it does not authorize frontend implementation, package installation, backend work, APIs, or database work.
- Build a responsive frontend first after this plan and frontend architecture are approved.
- Add a backend, database, or API only when a documented requirement makes frontend-only delivery insufficient and the architecture is separately approved.

## 15. Approved Architecture Direction

- Use a flexible frontend architecture that can support either a single-page portfolio or a multi-page portfolio.
- Keep navigation destinations, page/section content, and reusable components structured so they can be composed in either arrangement.
- Use clearly marked placeholders wherever approved personal, project, contact, or media information has not yet been provided.
- Placeholder content must not be presented as verified experience, outcomes, links, or personal facts.

## 16. Open Decisions Before Implementation

1. Choose the initial navigation implementation: single-page sections or separate pages.
2. Provide or approve the professional name, title, biography, short introduction, and profile-image decision.
3. Provide verified projects/work, course-creation examples, data-analysis examples, links, outcomes, and media.
4. Provide professional contact details and permitted social/external links.
5. Decide whether a contact form is required; if so, approve its submission/delivery method before implementation.
6. Approve visual brand direction, including palette, typography, logo use if any, and image style.
