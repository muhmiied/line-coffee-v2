# LINE COFFEE V2 — PROJECT INDEX

## 0. Purpose of This File

This file is the main index for all Line Coffee V2 planning and execution documents.

It explains:

* What each file is for
* When each file should be used
* Which files developers should read before each task
* The correct execution order
* The relationship between business, database, UI, admin, content, and launch files

This file should be used at the start of every new Line Coffee V2 development conversation or Codex / Claude session.

---

# 1. Core Project Rule

Line Coffee V2 is not only a visual website.

It is:

```text
Premium coffee e-commerce
+
Database-first business control system
+
Admin dashboard
+
Media Studio
+
Inventory / recipes / orders foundation
+
Future mobile-app ready architecture
```

The correct architecture is:

```text
Dashboard → Supabase Database → Website → Media Studio → Future Mobile App
```

Supabase Database is the single source of truth.

Config files are allowed only as:

```text
Fallback
Seed data
Guardrails
Type definitions
Emergency defaults
```

Config files must not be the live source of truth.

---

# 2. Master File List

The main planning files are:

```text
1. LINE_COFFEE_V2_MASTER_SPECIFICATION.md
2. LINE_COFFEE_V2_MASTER_BLUEPRINT.md
3. LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
4. LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
5. LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
6. LINE_COFFEE_V2_EXECUTION_PLAN.md
7. LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
8. LINE_COFFEE_V2_CODEX_PROMPT_PACK.md
9. LINE_COFFEE_V2_LAUNCH_CHECKLIST.md
10. LINE_COFFEE_V2_PROJECT_INDEX.md
```

Optional future/generated files:

```text
LINE_COFFEE_V2_REPO_AUDIT.md
LINE_COFFEE_V2_QA_REPORT.md
LINE_COFFEE_V2_CHANGELOG.md
```

---

# 3. File-by-File Explanation

## 3.1 LINE_COFFEE_V2_MASTER_SPECIFICATION.md

### Purpose

This is the high-level master specification.

It defines the overall project vision, brand direction, business model, expected system scope, and main goals.

### Use This File For

```text
Understanding the whole project
Explaining Line Coffee V2 to a new developer
Confirming the big vision
Avoiding scope confusion
Keeping the project aligned
```

### Developers Should Read It When

```text
Starting a new major task
Starting a new chat/session
Making architectural decisions
Reviewing whether a feature belongs to V2
```

---

## 3.2 LINE_COFFEE_V2_MASTER_BLUEPRINT.md

### Purpose

This file contains the core business and system decisions.

It explains how the business should work.

### It Covers

```text
Database First Architecture
Customers
Guest checkout
Products
Categories
Orders
Checkout
WhatsApp flow
Telegram notifications
Inventory logic
Recipes
Suppliers
Purchases
Discounts
Loyalty
Reviews
Roles and permissions
Audit logs
Settings
Media Studio logic
Analytics
Blog
Legal pages
V1 vs deferred features
```

### Use This File For

```text
Understanding what the system must do
Checking business rules
Preventing wrong assumptions
Confirming V1 decisions
Avoiding unnecessary features
```

### Developers Should Read It When

```text
Working on business logic
Working on checkout
Working on orders
Working on customers
Working on inventory
Working on discounts
Working on roles/permissions
Working on admin behavior
```

---

## 3.3 LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md

### Purpose

This file defines the full visual experience and UI/UX direction.

### It Covers

```text
Dark Luxury visual direction
Warm brown backgrounds
Gold strokes
Typography
Animations
Homepage structure
Product page UX
Make Your Espresso UX
Make Your Flavor UX
Cart UX
Checkout UX
Mobile UX
Admin dashboard UX
Media Studio UX
Loading states
Empty states
Error states
Accessibility
Bilingual UI
```

### Use This File For

```text
Designing the website
Building frontend components
Adding animations
Improving mobile experience
Making the website feel premium
Avoiding random UI decisions
```

### Developers Should Read It When

```text
Working on website UI
Working on homepage
Working on product cards
Working on cart
Working on builders
Working on animation
Working on Media Studio preview
Working on responsive design
```

---

## 3.4 LINE_COFFEE_V2_DATABASE_BLUEPRINT.md

### Purpose

This file defines the database architecture blueprint.

It converts the business rules into tables, fields, relationships, and database groups.

### It Covers

```text
Customers tables
Products tables
Categories tables
Variants
Media assets
Orders
Order items
Inventory
Recipes
Suppliers
Purchases
Discounts
Loyalty
Wallet
Reviews
Blog
Settings
Notifications
Analytics events
Audit logs
RLS/security notes
```

### Use This File For

```text
Planning Supabase schema
Comparing current migrations
Creating safe migrations
Understanding relationships
Preventing duplicated tables
Making database decisions
```

### Developers Should Read It When

```text
Creating migrations
Changing database schema
Building APIs
Connecting dashboard to DB
Connecting website to DB
Fixing data relationships
```

### Important Rule

This file is a blueprint, not final SQL.

Before implementation, developers must compare it with the current Supabase schema and existing migrations.

---

## 3.5 LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md

### Purpose

This file defines every dashboard module and what it should do.

### It Covers

```text
Dashboard Home
Orders
Products
Categories
Inventory
Recipes
Suppliers
Purchases
Accounting
Treasury
Customers
Reviews
Discounts
Loyalty
Blog
Media Studio
Analytics
Notifications
Users
Roles and Permissions
Audit Log
Settings
Mobile Admin
Permissions
Data source mapping
```

### Use This File For

```text
Building dashboard pages
Designing admin tables
Creating admin forms
Defining actions/buttons
Mapping modules to database tables
Implementing permissions
```

### Developers Should Read It When

```text
Working on any admin dashboard module
Building dashboard navigation
Building admin tables
Building forms/drawers/modals
Adding role-based visibility
Adding audit behavior
```

---

## 3.6 LINE_COFFEE_V2_EXECUTION_PLAN.md

### Purpose

This file defines the phased implementation roadmap.

It explains what to build first, what to defer, and how to execute safely.

### Main Phases

```text
Phase 0 — Repo Audit & Cleanup
Phase 1 — Database Foundation
Phase 2 — Auth, Roles & Permissions
Phase 3 — Products & Categories Core
Phase 4 — Media System Foundation
Phase 5 — Website Core Pages
Phase 6 — Cart, Checkout & Orders
Phase 7 — Customers CRM
Phase 8 — Inventory & Recipes
Phase 9 — Suppliers & Purchases
Phase 10 — Discounts, Loyalty & Wallet
Phase 11 — Reviews & Feedback
Phase 12 — Blog & Legal Pages
Phase 13 — Media Studio Visual Builder
Phase 14 — Analytics & Notifications
Phase 15 — Admin Dashboard Polish
Phase 16 — Visual UX & Animation Polish
Phase 17 — Security, QA & Performance
Phase 18 — Launch Preparation
```

### Use This File For

```text
Planning implementation order
Avoiding random development
Breaking work into safe phases
Managing Codex/Claude tasks
Knowing what not to build yet
```

### Developers Should Read It When

```text
Starting a phase
Choosing next development task
Reviewing progress
Planning implementation
Avoiding scope creep
```

---

## 3.7 LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md

### Purpose

This file defines all copywriting and content rules.

### It Covers

```text
Brand voice
Arabic tone
English tone
Bilingual writing rules
Homepage copy
Hero copy
Category descriptions
Product copy
Make Your Espresso copy
Make Your Flavor copy
Cart copy
Checkout copy
Order success copy
WhatsApp message template
Telegram templates
Empty states
Error states
Button labels
Status labels
Blog ideas
About page story
SEO copy rules
Admin copy rules
```

### Use This File For

```text
Writing website text
Improving Arabic/English content
Building checkout messages
Creating WhatsApp templates
Creating Telegram notifications
Creating blog content
Adding empty/error states
```

### Developers Should Read It When

```text
Working on frontend copy
Working on checkout copy
Working on dashboard labels
Working on blog/content
Working on bilingual UI
Working on notifications
```

---

## 3.8 LINE_COFFEE_V2_CODEX_PROMPT_PACK.md

### Purpose

This file contains ready-made prompts for Codex / Claude / Claude Code.

It prevents wasting time and keeps every AI coding session controlled.

### It Includes Prompts For

```text
Standard Start Prompt
Repo Audit
Database Foundation
Products & Categories
Checkout Safety
Orders Dashboard
Inventory & Recipes
Media Library
Media Studio
Website UI / Animation
Content Copy
Blog
Reviews
Discounts / Loyalty / Wallet
Analytics / Notifications
QA / Security
Small Tasks
Bug Fixes
Refactors
Emergency Fixes
Commit Reports
```

### Use This File For

```text
Starting Codex sessions
Starting Claude Code sessions
Giving exact tasks to AI coding tools
Keeping tasks minimal
Avoiding whole-repo scans
Protecting checkout/order logic
```

### Developers Should Read It When

```text
Using AI to implement any code task
Preparing a prompt for a specific phase
Debugging issues
Running audits
Requesting QA
```

---

## 3.9 LINE_COFFEE_V2_LAUNCH_CHECKLIST.md

### Purpose

This file is the final checklist before public launch.

### It Covers

```text
Repo status
Build checks
Environment variables
Supabase
Vercel
Domain
Website visuals
Homepage
Products
Categories
Product pages
Make Your Espresso
Make Your Flavor
Cart
Checkout
Admin dashboard
Permissions
Audit logs
Notifications
Media/images
SEO
Legal pages
Mobile
Browser testing
Performance
Security
Test orders
Content
Social/marketing readiness
Business operations
Launch day
First 24 hours
First 7 days
First 30 days
```

### Use This File For

```text
Final pre-launch review
Production readiness
Checking critical flows
Preventing launch mistakes
Testing real orders
Confirming admin readiness
```

### Developers Should Read It When

```text
Before production launch
Before marketing launch
Before connecting ads/social campaigns
After major checkout/order changes
After final deployment
```

---

## 3.10 LINE_COFFEE_V2_PROJECT_INDEX.md

### Purpose

This is the current file.

It explains all other files and how to use them.

### Use This File For

```text
Starting a new conversation
Onboarding a developer
Onboarding Codex/Claude
Understanding file order
Understanding project documentation
```

---

# 4. Recommended Reading Order

## 4.1 For New Developer / New Chat

Read in this order:

```text
1. LINE_COFFEE_V2_PROJECT_INDEX.md
2. LINE_COFFEE_V2_MASTER_SPECIFICATION.md
3. LINE_COFFEE_V2_MASTER_BLUEPRINT.md
4. LINE_COFFEE_V2_EXECUTION_PLAN.md
```

Then read the relevant specialized file based on the task.

---

## 4.2 For Database Work

Read:

```text
1. AGENTS.md
2. LINE_COFFEE_V2_PROJECT_INDEX.md
3. LINE_COFFEE_V2_MASTER_BLUEPRINT.md
4. LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
5. LINE_COFFEE_V2_EXECUTION_PLAN.md
```

---

## 4.3 For Admin Dashboard Work

Read:

```text
1. AGENTS.md
2. LINE_COFFEE_V2_PROJECT_INDEX.md
3. LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
4. LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
5. LINE_COFFEE_V2_EXECUTION_PLAN.md
```

---

## 4.4 For Website UI / UX Work

Read:

```text
1. AGENTS.md
2. LINE_COFFEE_V2_PROJECT_INDEX.md
3. LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
4. LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
5. LINE_COFFEE_V2_EXECUTION_PLAN.md
```

---

## 4.5 For Checkout / Orders Work

Read:

```text
1. AGENTS.md
2. LINE_COFFEE_V2_PROJECT_INDEX.md
3. LINE_COFFEE_V2_MASTER_BLUEPRINT.md
4. LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
5. LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
6. LINE_COFFEE_V2_EXECUTION_PLAN.md
```

Important:

```text
Checkout/order work is sensitive.
Do not edit it unless the task explicitly requires it.
```

---

## 4.6 For Copywriting / Content Work

Read:

```text
1. LINE_COFFEE_V2_PROJECT_INDEX.md
2. LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
3. LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
```

---

## 4.7 For AI Coding Sessions

Read:

```text
1. AGENTS.md
2. LINE_COFFEE_V2_CODEX_PROMPT_PACK.md
3. Relevant blueprint file for the task
```

---

## 4.8 For Launch

Read:

```text
1. LINE_COFFEE_V2_PROJECT_INDEX.md
2. LINE_COFFEE_V2_EXECUTION_PLAN.md
3. LINE_COFFEE_V2_LAUNCH_CHECKLIST.md
4. LINE_COFFEE_V2_QA_REPORT.md if it exists
```

---

# 5. Execution Order

The correct implementation order is:

```text
1. Repo Audit
2. Database Foundation
3. Auth / Roles / Permissions
4. Products & Categories DB-First
5. Media Library Foundation
6. Website Core Pages
7. Cart / Checkout / Orders
8. Customers CRM
9. Inventory & Recipes
10. Suppliers & Purchases
11. Discounts / Loyalty / Wallet
12. Reviews & Feedback
13. Blog & Legal Pages
14. Media Studio
15. Analytics & Notifications
16. Admin Dashboard Polish
17. Visual UX & Animation Polish
18. Security / QA / Performance
19. Launch Preparation
```

Do not jump directly to heavy UI animation before products, checkout, orders, and database foundation are stable.

---

# 6. Current Core Decisions

## 6.1 Architecture

```text
Database First
Supabase is source of truth
Dashboard controls business
Website reads from database
Media Studio edits database-backed content
Future mobile app should reuse database
```

---

## 6.2 Brand

```text
Brand: Line Coffee
Style: Dark Luxury Coffee E-Commerce
Colors: #522500, #FFDCC2, black, white
Fonts: Playfair Display for English, Cairo for Arabic
Mood: Premium, warm, cozy, elegant, cinematic, mobile-first
```

---

## 6.3 Final Categories

```text
Turkish Blends
Espresso Blends
Easy Coffee
Flavor Coffee
Coffee Mix
Cappuccino
Hot Chocolate
Make Your Espresso
Make Your Flavor
```

Forbidden:

```text
Single Origin Beans
All Products sidebar
Original LINE section
Nescafe naming
```

---

## 6.4 Core Products

Turkish Blends:

```text
Turkish Silk
Strike Coffee
Cairo Nights
High Mood
```

Espresso Blends:

```text
HEAVY CREMA
AROMA BODY
HEADSHOT
BLACK LABEL
```

Easy Coffee:

```text
Classic Line
Gold Line
```

---

## 6.5 Checkout Flow

Correct flow:

```text
Place Order
→ Server validates order
→ Server recalculates prices
→ Order saves to Supabase
→ Dashboard order is created
→ Telegram notification is sent
→ WhatsApp opens with prepared message
→ Customer manually presses Send
```

Critical rule:

```text
The order must exist in the database even if WhatsApp is not sent.
```

---

## 6.6 Homepage Order

```text
1. Announcement Bar
2. Header
3. Hero
4. Product PNG Strip
5. Service Cards
6. Shop By Category
7. Best Sellers
8. Our Story
9. Latest Blog Posts
10. Footer
```

---

# 7. Work Rules for Developers

Every task must follow:

```text
Read AGENTS.md first.
Use minimal patches.
Avoid full repo scans.
Read only required files.
Do not rewrite unrelated files.
Do not hardcode live data.
Do not make config the live source of truth.
Do not touch checkout/order/security/inventory unless the task explicitly requires it.
Do not expose private settings.
Keep mobile-first.
Preserve existing working behavior.
Report changed files and checks run.
```

---

# 8. What Not To Do

Do not:

```text
Turn the website into a static hardcoded product catalog.
Treat config files as live database.
Build a pretty frontend with weak backend.
Build dashboard screens that do not control real data.
Break checkout for UI polish.
Trust client-side prices.
Store orders only in WhatsApp.
Expose Telegram/WhatsApp/Supabase private keys.
Create heavy animations before core flows work.
Add Single Origin Beans category.
Use Nescafe naming.
Show All Products sidebar.
Build public order tracking in V1.
Build WhatsApp marketing automation in V1.
Build full ERP accounting in V1.
```

---

# 9. V1 Must Deliver

V1 must deliver:

```text
Premium homepage
Product/category browsing
Product detail pages
Make Your Espresso
Make Your Flavor
Cart
Checkout
Order saved before WhatsApp
Telegram admin notification
Orders dashboard
Products dashboard
Categories dashboard
Inventory foundation
Recipes foundation
Customers CRM foundation
Reviews approval
Discounts/loyalty foundation
Blog/legal pages
Media Studio foundation
Settings
Permissions
Audit logs
Mobile-first experience
Launch-ready security and performance
```

---

# 10. Deferred Features

These should not block V1:

```text
Mobile app
Advanced AI analytics
Advanced loyalty tiers
Email marketing system
WhatsApp marketing automation
Public order tracking
Full ERP accounting
Advanced supplier performance scoring
Heavy WebGL scenes
Complex Media Studio animation builder
Advanced abandoned cart automation
PWA
Advanced customer segmentation
```

---

# 11. Current Documentation Status

The planning documentation set is considered complete when these files exist:

```text
[x] LINE_COFFEE_V2_MASTER_SPECIFICATION.md
[x] LINE_COFFEE_V2_MASTER_BLUEPRINT.md
[x] LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
[x] LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
[x] LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
[x] LINE_COFFEE_V2_EXECUTION_PLAN.md
[x] LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
[x] LINE_COFFEE_V2_CODEX_PROMPT_PACK.md
[x] LINE_COFFEE_V2_LAUNCH_CHECKLIST.md
[x] LINE_COFFEE_V2_PROJECT_INDEX.md
```

After this, the next step is not to create more planning files.

The next step is:

```text
Run a real repo audit and create:
LINE_COFFEE_V2_REPO_AUDIT.md
```

---

# 12. Next Recommended Action

After all planning files are committed, start with:

```text
Phase 0 — Repo Audit & Cleanup
```

Use the Repo Audit Prompt from:

```text
LINE_COFFEE_V2_CODEX_PROMPT_PACK.md
```

The goal is to inspect the real codebase and produce:

```text
LINE_COFFEE_V2_REPO_AUDIT.md
```

Then continue to:

```text
Phase 1 — Database Foundation
```

Only after knowing the current repo state.

---

# 13. Final Project Definition

Line Coffee V2 must become:

```text
A premium dark luxury coffee e-commerce website
connected to a real dashboard-controlled business system
powered by Supabase database
with reliable checkout, orders, inventory, recipes, media, analytics, and admin controls.
```

The project must always protect the core business flow:

```text
Customer can browse.
Customer can add to cart.
Customer can checkout.
Order saves to database.
Admin sees order.
WhatsApp opens after database save.
Products/categories are controlled from database.
Dashboard controls the website.
```

This is the foundation of Line Coffee V2.
