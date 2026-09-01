# 09 — Supabase Database Plan

## 1. Purpose

Supabase will provide the database layer for the Sivaranjani
professional portfolio.

The database will store portfolio information that may need to
be retrieved dynamically by the frontend.

---

## 2. Architecture

React Frontend
        ↓
Supabase Client / Data Access
        ↓
Supabase
        ↓
PostgreSQL Database

Supabase Storage may be used later for portfolio images/files.

---

## 3. Tables

### 3.1 profiles

Purpose:
Store the main professional profile.

Fields:

- id
- name
- professional_title
- bio
- education
- profile_image_url
- created_at
- updated_at

Current confirmed data:

Name:
Sivaranjani Selvaraj

Professional title:
Operations & Digital Workflow Professional

Education:
M.Sc. Computer Science

---

### 3.2 capabilities

Purpose:
Store professional capability categories.

Fields:

- id
- name
- description
- display_order
- created_at

Initial capabilities:

- Operations
- Management
- Digital Work
- AI-Assisted Workflows
- Instructional Design
- Data Analysis
- Course Creation
- Vibe Coding

Project coordination should not be added as a confirmed capability
until the experience is defined.

---

### 3.3 tools

Purpose:
Store tools used in professional/digital workflows.

Fields:

- id
- name
- category
- description
- created_at

Confirmed tools include:

- ChatGPT
- Claude
- Codex
- NaturalReader
- HeyGen

Additional tools may be added later after verification.

---

### 3.4 courses

Purpose:
Store public course/content information.

Fields:

- id
- title
- description
- category
- status
- thumbnail_url
- public_url
- created_at
- updated_at

Current confirmed course/content:

Data Analysis course creation.

Do not store private course material unless explicitly required.

---

### 3.5 projects

Purpose:
Store public portfolio projects.

Fields:

- id
- title
- description
- category
- role
- tools
- image_url
- project_url
- status
- created_at
- updated_at

Current status:

No private projects should be added.

Only verified public projects may be added later.

---

### 3.6 contact_messages

Purpose:
Store messages submitted through a future portfolio contact form.

Fields:

- id
- name
- email
- message
- created_at
- status

Visitor permissions:

Visitors may submit a message.

Visitors must not be allowed to read other contact messages.

Owner/admin access will be required to read submitted messages.

---

## 4. Data Classification

### Public

- Name
- Professional title
- Bio
- Education
- Capabilities
- Public tools
- Public courses
- Public projects
- Professional links

### Private

- Contact messages
- Private projects
- Private datasets
- Employee information
- Confidential business information
- Secrets
- API keys

Private employee datasets must never be uploaded to the
portfolio database.

---

## 5. Relationships

Initial architecture can remain simple.

profiles
    │
    └── main professional profile

capabilities
    │
    └── independent capability records

tools
    │
    └── independent tool records

courses
    │
    └── independent course records

projects
    │
    └── independent public project records

contact_messages
    │
    └── private visitor submissions

Foreign-key relationships should only be introduced where
they provide a real requirement.

---

## 6. Security

Supabase Row Level Security (RLS) must be considered before
production use.

Public portfolio content may be readable by visitors.

Contact messages must not be publicly readable.

Database credentials and service-role keys must never be
placed in frontend code.

Only the required public data should be exposed to the frontend.

---

## 7. Current Scope

Phase 1:

- Create Supabase project
- Create PostgreSQL tables
- Define columns
- Define primary keys
- Configure RLS
- Add safe sample portfolio data

Phase 2:

- Connect React frontend
- Read portfolio data from Supabase
- Replace selected static content with database data

Phase 3:

- Add contact form if required
- Store contact messages
- Secure contact-message access

Phase 4:

- Add public projects dynamically
- Add course/content management if required

---

## 8. Important Constraints

Do not:

- invent professional experience
- invent projects
- upload private datasets
- expose confidential employee information
- expose database secrets
- create unnecessary tables
- add a backend only for the sake of adding one

The database should support actual website requirements.