# LINE COFFEE V2 CURRENT STATE AUDIT

Last updated: 2026-06-12  
Scope: current repository state after removing the drawn UI/UX layer.  
Status: clean drawing checkpoint.

## 1. How To Use This File

This file is the current-state source of truth for the repo.

Use it before any new agent starts work. It is not a visual brief and not a
history document. It answers: what exists now, what is wired now, what is
missing now, and where the project should continue from.

Any future AI agent should read in this order:

1. `AGENTS.md`
2. `LINE_COFFEE_V2_CURRENT_STATE_AUDIT.md`
3. `package.json`
4. `supabase/migrations/*`
5. The specific file for the task being implemented

Do not use deleted UI/UX files as source of truth. The visual implementation
was intentionally removed so the project can stand cleanly before a fresh
drawing/design step.

## 2. Current Repository Position

Branch state:

- Local branch: `main`
- Remote branches: `origin/main` only
- Working tree: contains the cleanup changes and this audit file
- No feature branches are currently present

Validation state:

- `npm run lint`: passed
- `npm run build`: passed
- Next.js version used by the build: `16.2.7`
- React version: `19.2.4`
- Build tool behavior: Next.js 16 uses Turbopack by default

Important Next.js 16 notes applied during this cleanup:

- `proxy.ts` is the correct current convention for request interception.
- Route groups like `app/(public)` do not affect the URL.
- Dynamic route `params` are async in Next.js 16.
- A route only exists when a `page.tsx` or `route.ts` file exists.

## 3. Current Tech Stack

Runtime and framework:

- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS v4 installed and imported, but no project-specific visual
  system is currently defined

Backend/services:

- Supabase Auth
- Supabase database
- Supabase SSR helpers through `@supabase/ssr`
- Supabase server client, browser client, and service-role admin client

Tooling:

- ESLint flat config through `eslint.config.mjs`
- TypeScript through `tsconfig.json`
- Next image config exists for Supabase Storage URLs in `next.config.ts`
- No UI animation/component dependency is currently kept after cleanup.

## 4. Current File Map

Application shell:

- `app/layout.tsx`
  - Minimal root layout.
  - No brand fonts.
  - No dark luxury classes.
  - No UI composition.

- `app/globals.css`
  - Minimal global reset.
  - Keeps Tailwind import.
  - No Line Coffee color tokens.
  - No animation system.
  - No component classes.

Public routes:

- `app/(public)/layout.tsx`
  - Pass-through layout only.
  - No header.
  - No footer.
  - No fonts.

- `app/(public)/page.tsx`
  - Minimal skeleton route for `/`.
  - No data fetching.
  - No homepage sections.

- `app/(public)/products/page.tsx`
  - Minimal skeleton route for `/products`.
  - No product grid.
  - No category nav.
  - No images.

- `app/(public)/products/[slug]/page.tsx`
  - Exists as a route placeholder.
  - Calls `notFound()`.
  - Does not render product UI.

- `app/(public)/products/category/[slug]/page.tsx`
  - Exists as a route placeholder.
  - Calls `notFound()`.
  - Does not render category UI.

Admin routes:

- `app/dashboard/(auth)/login/page.tsx`
  - Functional Supabase password login.
  - Minimal unstyled form.
  - Keeps auth infrastructure usable.

- `app/dashboard/(protected)/layout.tsx`
  - Calls `requireAdmin()`.
  - Renders children only after admin authorization.
  - No visual dashboard shell.

- `app/dashboard/(protected)/page.tsx`
  - Minimal protected dashboard placeholder.

Request boundary:

- `proxy.ts`
  - Runs on `/dashboard/:path*`.
  - Refreshes Supabase session via `updateSession`.
  - Allows `/dashboard/login`.
  - Redirects unauthenticated dashboard requests to `/dashboard/login`.

Data and auth:

- `lib/supabase/server.ts`
  - Server Supabase client using async `cookies()`.

- `lib/supabase/client.ts`
  - Browser Supabase client for login/client flows.

- `lib/supabase/admin.ts`
  - Service-role Supabase client.
  - Server-only.

- `lib/supabase/middleware.ts`
  - Session refresh helper for `proxy.ts`.

- `lib/auth/get-admin-user.ts`
  - Loads active admin user and role using service role.

- `lib/auth/check-permission.ts`
  - Checks role permissions.
  - Primary owner bypass exists.

- `lib/auth/require-admin.ts`
  - Enforces authenticated, active admin user.
  - Provides `requireAdminPermission`.

- `lib/db/categories.ts`
  - Server-only public category read helpers.

- `lib/db/products.ts`
  - Server-only public product read helpers.
  - Loads visible active products and variants.
  - Maps `main_image_id` relation to public image URLs.

- `lib/db/types.ts`
  - Public catalog TypeScript types.

Supabase:

- `supabase/config.toml`
- `supabase/migrations/*`

No visual components remain:

- `components/` removed.
- `brand-assets/` removed.
- `public/brand-assets/` removed.
- Default public SVG assets removed.
- `app/favicon.ico` removed.
- `docs/ui/` removed.

## 5. Current Build Route Map

The latest successful `npm run build` produced:

```text
/
/_not-found
/dashboard
/dashboard/login
/products
/products/[slug]
/products/category/[slug]
Proxy: /dashboard/:path*
```

Meaning:

- `/` is currently static and bare.
- `/products` is currently static and bare.
- `/products/[slug]` is dynamic but intentionally returns 404.
- `/products/category/[slug]` is dynamic but intentionally returns 404.
- `/dashboard/login` is static and functionally logs in through Supabase.
- `/dashboard` is dynamic and protected by admin auth.

## 6. What Was Intentionally Removed

UI implementation removed:

- Public header.
- Public footer.
- Homepage hero.
- Homepage categories.
- Homepage featured products.
- Homepage story.
- Homepage feature/service sections.
- Homepage contact CTA.
- Product card component.
- Category tile component.
- Section/heading/glass/button visual components.
- Public product grid rendering.
- Product detail rendering.
- Category page rendering.
- Dashboard visual shell.
- Dark luxury CSS system.
- Brand color tokens.
- Gold divider/glass panel/button animation classes.
- Brand fonts and visual metadata.

Visual assets removed:

- Brand logo SVGs under `brand-assets/`.
- Public logo SVGs under `public/brand-assets/`.
- Default create-next public SVGs.
- Favicon.
- UI reference screenshots/images under `docs/ui/references`.

UI/UX planning artifacts removed:

- `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`
- `LINE_COFFEE_UI_MASTER_PLAN.md`
- `LINE_COFFEE_VISUAL_DIRECTION.md`
- `LINE_COFFEE_FINAL_UI_IMPLEMENTATION_BRIEF.md`
- `LINE_COFFEE_FULL_REBUILD_AUDIT_2026-06-11.md`
- `PUBLIC_PAGES_SECTION_MAP.md`
- `UI_PHASE_ROADMAP.md`
- `UI_RULES_FOR_CODEX_CLAUDE.md`
- `docs/ui/**`

Historical audit/checkpoint artifacts removed:

- `LINE_COFFEE_V2_CLAUDE_REPO_AUDIT.md`
- `LINE_COFFEE_V2_PHASE_1_DATABASE_VERIFICATION.md`
- `LINE_COFFEE_V2_PHASE_2A_DATABASE_VERIFICATION.md`

Reason:

The project should now stand at a clean pre-drawing point. The next visual
direction must be created intentionally from the current foundation, not from
old UI components or reference files.

## 7. Current Database Implementation

The repo has eight Supabase migration files.

### 7.1 Core Foundation Migration

File:

- `supabase/migrations/20260609160000_line_coffee_v2_phase_1a_core_foundation.sql`

What exists:

- `media_assets`
- `categories`
- `products`
- `product_variants`
- `website_pages`
- `page_sections`
- `page_section_items`
- `customers`
- `customer_addresses`
- `orders`
- `order_items`
- `site_settings`
- `audit_logs`
- `set_updated_at()` trigger function
- indexes for common lookup paths
- RLS enabled on all core tables

Public RLS read policies exist for:

- public media assets
- active visible categories
- active visible products
- active visible product variants
- published website pages
- visible page sections
- visible section items
- public site settings

No public policies exist for:

- customers
- customer addresses
- orders
- order items
- audit logs

That is correct for privacy.

### 7.2 Admin Auth Migration

File:

- `supabase/migrations/20260609180000_line_coffee_v2_phase_2a_admin_auth.sql`

What exists:

- `admin_roles`
- `admin_permissions`
- `admin_role_permissions`
- `admin_users`
- protected role delete trigger
- protected role-change trigger
- RLS enabled on admin tables
- seed roles:
  - `primary_owner`
  - `owner`
  - `admin`
  - `staff`
- seed permissions for core modules
- permission assignments per role

### 7.3 Service Role Grants

File:

- `supabase/migrations/20260609200000_line_coffee_v2_phase_2d_service_role_admin_grants.sql`

What exists:

- `service_role` can select admin user/role/permission tables.
- This supports server-only admin auth lookups.

### 7.4 Foundation Seed

File:

- `supabase/migrations/20260610100000_line_coffee_v2_phase_3a_seed_foundation_data.sql`

What exists:

- public brand/site settings seed
- categories seed
- initial products seed
- initial variants seed
- `website_pages` seed
- `page_sections` seed
- homepage category item seed

### 7.5 Corrective Product Seed

File:

- `supabase/migrations/20260610120000_line_coffee_v2_phase_3a_fix_products_seed.sql`

What exists:

- category Arabic name corrections
- page section item title corrections
- expanded product seed
- expanded product variant seed
- 250g, 500g, and 1kg variant structure
- product prices

### 7.6 Public Catalog Grants

File:

- `supabase/migrations/20260610130000_line_coffee_v2_phase_3c_public_catalog_select_grants.sql`

What exists:

- table-level `select` grants for:
  - `categories`
  - `products`
  - `product_variants`

RLS still controls row visibility.

### 7.7 Pricing Corrections

File:

- `supabase/migrations/20260610140000_line_coffee_v2_phase_3f_pricing_corrections.sql`

What exists:

- approved pricing corrections for 21 variants across 10 products.

### 7.8 Media Asset Grant

File:

- `supabase/migrations/20260610150000_line_coffee_v2_phase_3h_media_assets_public_grant.sql`

What exists:

- table-level `select` grants for public media assets.

RLS still requires `is_public = true` and `deleted_at is null`.

## 8. Current Roadmap Match

### Phase 0 - Repo Audit and Cleanup

Current status: complete for this checkpoint.

Done now:

- Repo inspected.
- Next.js local docs checked.
- UI/UX implementation removed.
- UI/UX planning artifacts removed.
- Current state documented in this file.
- Lint passes.
- Build passes.

### Phase 1 - Database Foundation

Current status: partially implemented, strong core foundation.

Implemented:

- Core catalog tables.
- Core content tables.
- Core customer/order tables.
- Site settings.
- Audit logs.
- RLS enabled.
- Public-safe read policies for public content.

Missing from the broader V1 database blueprint:

- `product_media`
- `product_profile_attributes`
- `product_related`
- custom espresso builder tables
- custom flavor builder tables
- inventory tables
- recipes/costing tables
- supplier/purchase tables
- order status history
- order payments/refunds/returns/attachments
- shipping zones/companies/shipments
- promotions
- loyalty
- wallet
- reviews/feedback
- media folders/tags/revisions
- blog tables
- notification tables
- analytics/event tables

Verdict:

The database is good enough as an early foundation, not enough for V1 launch.

### Phase 2 - Auth, Roles and Permissions

Current status: partially implemented.

Implemented:

- Admin roles table.
- Admin permissions table.
- Role-permission mapping.
- Admin users table.
- Service-role lookup helpers.
- Dashboard route protection.
- Functional password login route.
- Server-side permission helper.

Missing:

- Admin user management module.
- Roles/permissions management module.
- Server actions/API routes for admin changes.
- Audit-log writes for admin changes.
- One-primary-owner enforcement beyond current protected-role safeguards.
- Logout flow.
- Admin navigation.

Verdict:

Auth foundation exists. Full admin operations do not exist.

### Phase 3 - Products and Categories Core

Current status: partially implemented.

Implemented:

- DB tables for categories/products/product variants.
- Seeded categories/products/variants.
- Public read helpers in `lib/db`.
- RLS and grants for public visible catalog reads.

Not currently implemented:

- Product/category admin screens.
- Product/category create/edit actions.
- Category reorder UI/actions.
- Product media management.
- Product profile attributes.
- Related products.
- Public product/category UI rendering. It was intentionally removed.

Verdict:

Data layer exists. Management layer and drawn public layer do not.

### Phase 4 - Media System Foundation

Current status: schema only.

Implemented:

- `media_assets` table.
- public media RLS policy.
- table-level select grant.
- product/category/page references can point at `media_assets`.

Missing:

- Supabase Storage bucket conventions.
- Upload flow.
- Media folders.
- Media tags.
- Image optimization pipeline.
- Admin media library.
- Media selection UI.

Verdict:

Only the database anchor exists.

### Phase 5 - Website Core Pages

Current status: intentionally reset.

Implemented:

- Route placeholders for `/`, `/products`, product detail, and category pages.

Not implemented:

- Header.
- Footer.
- Homepage sections.
- Products listing UI.
- Category UI.
- Product detail UI.
- About/blog/contact/legal pages.
- Public navigation.
- Public bilingual/RTL UI.

Verdict:

The website is ready for a fresh drawing/build pass, not a customer-ready site.

### Phase 6 - Cart, Checkout and Orders

Current status: not implemented.

Database tables exist:

- `orders`
- `order_items`

Application logic missing:

- cart
- checkout form
- server-side price recalculation
- shipping calculation
- discount validation
- order creation action/API
- order snapshots
- Telegram notification
- WhatsApp redirect
- order success page
- admin order list/detail

Verdict:

Order schema exists. Checkout/order application flow does not.

### Phase 7+ - CRM, Inventory, Suppliers, Discounts, Reviews, Blog, Media Studio, Analytics

Current status: not implemented beyond isolated foundation tables.

Verdict:

These are future phases.

## 9. Current Source Of Truth

Current source of truth for business data:

- Supabase database.

Current source of truth for project state:

- This audit file.

Current source of truth for implemented schema:

- `supabase/migrations/*`

Current source of truth for public catalog reads:

- `lib/db/categories.ts`
- `lib/db/products.ts`
- `lib/db/types.ts`

Current source of truth for admin auth:

- `proxy.ts`
- `lib/auth/*`
- `lib/supabase/*`
- admin auth migrations

No current source of truth for UI/UX exists in the repo. That is intentional.

## 10. Known Mismatches And Risks

### Critical

1. Checkout/order creation is not implemented.

Risk:

- The business cannot take safe website orders yet.

Fix:

- Implement server-side cart and checkout flow before any launch.

### High

1. Admin product/category management is not implemented.

Risk:

- Products and categories are database-backed but not dashboard-controlled from
  the app.

Fix:

- Build product/category admin modules with server-side validation and audit
  logging.

2. Product/category public UI is intentionally absent.

Risk:

- The public site is not usable by customers.

Fix:

- Start a fresh drawing/build phase from the current skeleton.

3. Media system has no upload/admin flow.

Risk:

- Product images and page media cannot be managed from the app yet.

Fix:

- Implement media library foundation before rich visual pages.

### Medium

1. Planning docs still describe future UI/visual goals.

Risk:

- A future agent may confuse old future-target language with current
  implementation.

Fix:

- Treat this audit as the current-state source. Use older planning docs only
  for business/database/admin requirements, not for existing UI.

2. Seeded Arabic content should be verified against the remote database.

Risk:

- If any encoding mismatch exists in applied seed data, Arabic UI/content will
  be wrong later.

Fix:

- Query the remote database directly before rebuilding Arabic-facing UI.

### Low

1. Product detail/category routes currently return 404.

Risk:

- Expected during this checkpoint.

Fix:

- Reconnect them only when the new public drawing layer is implemented.

2. `public/` is empty.

Risk:

- Expected after asset cleanup.

Fix:

- Add only approved assets during the new drawing/media phase.

## 11. Rules For The Next Agent

Do:

- Start from this audit.
- Keep Supabase as the data source.
- Keep service-role usage server-only.
- Read local Next.js docs before editing App Router conventions.
- Keep public routes minimal until a fresh UI task exists.
- Preserve the database and migrations.
- Use migrations for schema changes.
- Validate critical logic server-side.

Do not:

- Restore deleted UI components.
- Restore deleted visual docs.
- Restore old brand assets without a new approved asset task.
- Hardcode products, prices, categories, or variants in frontend code.
- Build checkout that trusts client totals.
- Expose service role keys to the client.
- Build a dashboard screen that does not write real database data.
- Treat old future visual language in planning docs as current implementation.

## 12. Recommended Next Work

There are two valid next directions.

### Direction A - Business Foundation First

Best if the goal is production readiness.

Next tasks:

1. Compare database blueprint against migrations.
2. Add missing product media/profile tables if approved.
3. Build product/category admin modules.
4. Add audit-log writes for admin mutations.
5. Implement cart and checkout with server-side price recalculation.

### Direction B - Fresh Drawing Step

Best if the immediate goal is to design the public experience.

Next tasks:

1. Create a new UI source-of-truth from scratch.
2. Decide pages and section order again.
3. Add only approved assets.
4. Build UI in small slices.
5. Reconnect public pages to `lib/db` reads only when the design is ready.

Important:

If Direction B is chosen, do not resurrect old `components/`, `docs/ui/`, or
brand assets. Start clean.

## 13. Validation Performed

Commands run:

```bash
npm uninstall framer-motion
npm run lint
npm run build
```

Result:

- Confirmed the current package manifest keeps no UI animation dependency.
- Local `node_modules` cleanup ran for the removed animation package.
- Lint passed.
- Production build passed.
- TypeScript passed.
- Static generation passed.
- `npm uninstall framer-motion` reported 2 moderate npm audit findings; no
  forced audit fix was applied because it may introduce unrelated dependency
  changes.

Build route output:

```text
Route (app)
/
/_not-found
/dashboard
/dashboard/login
/products
/products/[slug]
/products/category/[slug]

Proxy (Middleware)
```

## 14. Manual Test Steps

Run:

```bash
npm run dev
```

Then check:

1. Open `/`.
   - Expect a bare `Line Coffee V2` skeleton.
2. Open `/products`.
   - Expect a bare `Products` skeleton.
3. Open `/products/test`.
   - Expect 404.
4. Open `/products/category/test`.
   - Expect 404.
5. Open `/dashboard`.
   - Expect redirect to `/dashboard/login` when not authenticated.
6. Open `/dashboard/login`.
   - Expect a plain login form.
7. Sign in with a valid Supabase admin user.
   - Expect redirect to `/dashboard`.
   - Admin access still depends on an active row in `admin_users`.

## 15. Files Inspected

Primary docs inspected:

- `AGENTS.md`
- `LINE_COFFEE_V2_PROJECT_INDEX.md`
- `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
- `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`
- `LINE_COFFEE_V2_EXECUTION_PLAN.md`
- `LINE_COFFEE_V2_DATABASE_BLUEPRINT.md`
- `LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md`
- `LINE_COFFEE_V2_CODEX_PROMPT_PACK.md`
- `LINE_COFFEE_V2_LAUNCH_CHECKLIST.md`

Next.js docs inspected:

- `node_modules/next/dist/docs/index.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
- `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/route-groups.md`
- `node_modules/next/dist/docs/01-app/02-guides/upgrading/version-16.md`

Application files inspected:

- `app/layout.tsx`
- `app/globals.css`
- `app/(public)/layout.tsx`
- `app/(public)/page.tsx`
- `app/(public)/products/page.tsx`
- `app/(public)/products/[slug]/page.tsx`
- `app/(public)/products/category/[slug]/page.tsx`
- `app/dashboard/(auth)/login/page.tsx`
- `app/dashboard/(protected)/layout.tsx`
- `app/dashboard/(protected)/page.tsx`
- `proxy.ts`
- `next.config.ts`
- `package.json`
- `README.md`
- `tsconfig.json`
- `eslint.config.mjs`
- `.env.example`

Library files inspected:

- `lib/supabase/server.ts`
- `lib/supabase/client.ts`
- `lib/supabase/admin.ts`
- `lib/supabase/middleware.ts`
- `lib/auth/get-admin-user.ts`
- `lib/auth/check-permission.ts`
- `lib/auth/require-admin.ts`
- `lib/db/categories.ts`
- `lib/db/products.ts`
- `lib/db/types.ts`

Database files inspected:

- all files under `supabase/migrations/`

## 16. Files Changed

Simplified:

- `app/layout.tsx`
- `app/globals.css`
- `app/(public)/layout.tsx`
- `app/(public)/page.tsx`
- `app/(public)/products/page.tsx`
- `app/(public)/products/[slug]/page.tsx`
- `app/(public)/products/category/[slug]/page.tsx`
- `app/dashboard/(auth)/login/page.tsx`
- `app/dashboard/(protected)/layout.tsx`
- `app/dashboard/(protected)/page.tsx`

Deleted:

- `components/**`
- `brand-assets/**`
- `public/brand-assets/**`
- `public/file.svg`
- `public/globe.svg`
- `public/next.svg`
- `public/vercel.svg`
- `public/window.svg`
- `app/favicon.ico`
- `docs/ui/**`
- `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`
- old UI/visual planning files
- old audit/checkpoint files

Created:

- `LINE_COFFEE_V2_CURRENT_STATE_AUDIT.md`

Updated:

- `README.md`

## 17. SQL And Data Safety

No SQL file was created or changed in this cleanup.

No migration was added.

No database data was deleted by this cleanup.

The only database-related action was reading migration files to document the
current state.

## 18. Final Current-State Summary

Line Coffee V2 is currently:

```text
Next.js 16 + Supabase foundation
+ core database migrations
+ public catalog read helpers
+ admin auth foundation
+ protected dashboard skeleton
+ clean public route skeletons
- no drawn UI system
- no visual assets
- no old UI/UX docs
- no checkout application flow
- no admin product/order modules
- no media upload/admin system
```

The project is now cleanly positioned before the drawing step.
