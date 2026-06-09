# LINE COFFEE V2 — CLAUDE REPO AUDIT

Audit date: 2026-06-09

Scope: Phase 0 repo audit only. No application code, database schema, migrations, checkout/order logic, UI, packages, or destructive commands were changed. The only deliverable created is this audit file.

Planning files read first:

- `AGENTS.md`
- `LINE_COFFEE_V2_PROJECT_INDEX.md`
- `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
- `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`
- `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`
- `LINE_COFFEE_V2_DATABASE_BLUEPRINT.md`
- `LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md`
- `LINE_COFFEE_V2_EXECUTION_PLAN.md`
- `LINE_COFFEE_V2_CODEX_PROMPT_PACK.md`
- `LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md`

Because `AGENTS.md` warns that this local Next.js version has breaking changes, the local Next docs were also checked only for project structure/routing conventions:

- `node_modules/next/dist/docs/index.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
- `node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md`

## 1. Current Branch / Git Status

- Current branch: `main`
- Git status at audit start: `## main...origin/main [ahead 1]`
- Working tree before creating this audit file: clean; no modified, deleted, or untracked files reported by `git status --short --branch`.
- Final git status after creating this audit file shows:
  - `?? LINE_COFFEE_V2_CLAUDE_REPO_AUDIT.md`
  - `?? brand-assets/`
- `brand-assets/` was not created or modified during this audit. It appeared in the final status check and was inspected only at top level plus its README because it affects the requested repo-status/structure audit.
- Branch is ahead of `origin/main` by 1 commit.

## 2. Repository Structure Summary

Important tracked top-level structure:

- `app/` - Next.js App Router root with only `layout.tsx`, `page.tsx`, `globals.css`, and `favicon.ico`.
- `public/` - default create-next-app SVG assets only: `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg`.
- `node_modules/` - installed dependencies present locally.
- `.next/` - local build/dev output present locally and ignored by git.
- Planning documents - complete Line Coffee V2 blueprint set exists at repo root.

Important untracked top-level structure:

- `brand-assets/` - untracked brand asset folder. Top-level contents are `BRAND_ASSETS_README.md` and `SVG LOGOS/`. The README repeats the Line Coffee brand colors, font choices, asset-preservation rules, and licensing caution for reference images. SVG contents were not scanned recursively.

Important missing top-level folders:

- No `src/`
- No `components/`
- No `lib/`
- No `utils/`
- No `hooks/`
- No `pages/`
- No `supabase/`
- No `migrations/`
- No `prisma/`
- No `styles/` outside `app/globals.css`

Framework/config state:

- Next.js version: `16.2.7`
- React version: `19.2.4`
- Tailwind CSS: `@tailwindcss/postcss` with Tailwind v4 package
- TypeScript strict mode is enabled in `tsconfig.json`.
- Path alias exists: `@/*` -> `./*`.
- README is still the default create-next-app README.

## 3. Existing Website Pages

Existing public routes found from App Router file conventions:

- `/` from `app/page.tsx`

The root page is still the default create-next-app starter page. It shows the Next.js logo, "To get started, edit the page.tsx file.", links to templates/docs, and default Vercel/Next assets.

Missing V2 website pages:

- No products page
- No category pages
- No product detail pages
- No Make Your Espresso page
- No Make Your Flavor page
- No cart route
- No checkout route
- No order success page
- No about page
- No contact page
- No blog listing/detail pages
- No legal pages
- No search route
- No account routes

Current website state does not yet represent Line Coffee branding, content, navigation, product browsing, ecommerce, or mobile-first buying flows.

## 4. Existing Dashboard / Admin Modules

No dashboard/admin implementation exists.

Missing admin routes/modules:

- No `/dashboard`
- No `/admin`
- No dashboard home
- No orders module
- No products module
- No categories module
- No inventory module
- No recipes module
- No suppliers module
- No purchases module
- No accounting or treasury module
- No customers/CRM module
- No reviews module
- No discounts/loyalty/wallet module
- No blog module
- No Media Studio module
- No analytics module
- No notifications module
- No users, roles, permissions, or audit log modules
- No admin route protection

This means the current repo does not yet satisfy the blueprint requirement that the dashboard controls the business through Supabase.

## 5. Existing Supabase / Database / Migrations

No Supabase implementation was found.

Observed state:

- No `supabase/` folder
- No migration files
- No `schema.sql`
- No Supabase client/server helper files
- No Supabase dependency in `package.json`
- No database table definitions
- No RLS policies
- No seed scripts
- No database types
- No `.env*` files found by name during audit; `.gitignore` correctly ignores `.env*`.

Missing V2 core database groups:

- Identity/admin/permissions
- Customers
- Products/categories/variants
- Custom builders
- Inventory
- Recipes/costing
- Suppliers/purchases
- Orders/checkout
- Discounts/loyalty/wallet
- Reviews/feedback
- Media Studio/content
- Blog/SEO
- Settings
- Notifications
- Analytics/events
- Audit logs

## 6. Existing Products & Categories System

No product/category system exists yet.

Targeted inspection found:

- No product data files
- No category data files
- No product components
- No category components
- No product/category routes
- No product/category API routes
- No product/category database tables or migrations
- No final Line Coffee categories implemented
- No forbidden categories detected in live app, because there are no categories at all

Current source of products/categories:

- None.

Blueprint gap:

- Products, categories, prices, variants, images, visibility, and ordering are not database-controlled yet.
- There is no dashboard source of truth.
- There is no config fallback/seed source either.

## 7. Existing Cart / Checkout / Orders Flow

No cart, checkout, or order flow exists.

Missing:

- Cart state/store
- Cart drawer or mobile bottom sheet
- Checkout page/form
- Order API/server action
- Server-side price recalculation
- Product/variant snapshots
- Custom builder snapshots
- Shipping calculation
- Discount validation
- Order save to Supabase
- Dashboard order creation
- Telegram notification after DB save
- WhatsApp redirect after DB save
- Order success page

Critical blueprint rule not implemented:

- The required flow "save order to database before WhatsApp redirect" does not exist yet.

This is not a regression in current code; it is an unimplemented launch-critical area.

## 8. Existing Customers / Auth / Accounts

No customer/auth/account system exists.

Missing:

- Supabase Auth setup
- Customer login/register pages
- Account profile
- Orders history
- Addresses
- Wishlist
- Loyalty/points/wallet
- Customer matching by WhatsApp/mobile/email
- Guest-to-account linking
- Customer blocking
- Customer tags/notes/timeline
- Admin users/roles/permissions

There are no auth dependencies, middleware/proxy files, protected route layouts, or server-side permission checks.

## 9. Existing Media Studio / CMS

No Media Studio or CMS implementation exists.

Missing:

- `media_assets`
- `media_folders`
- `media_tags`
- `website_pages`
- `page_sections`
- `page_section_items`
- `page_section_revisions`
- Media upload/select UI
- Alt text, focus point, crop metadata
- Draft/preview/publish/rollback flow
- Database-backed homepage sections
- Website reads from published page sections

Current page content is hardcoded in `app/page.tsx` and is the default Next starter page, not a DB-backed editable Line Coffee page.

## 10. Existing Blog / Legal Pages

No blog or legal page implementation exists.

Missing:

- Blog listing page
- Blog detail page
- Blog post data source
- Blog admin module
- Blog categories/tags
- Draft/scheduled/published statuses
- SEO fields
- Privacy Policy page
- Terms & Conditions / Terms of Use page
- Shipping Policy page
- Return / Refund Policy page
- Footer legal links

This is a launch gap because legal pages are required by the blueprint.

## 11. Existing Inventory / Recipes / Suppliers

No inventory, recipe, supplier, or purchase implementation exists.

Missing:

- Inventory items
- Inventory movements
- Low-stock thresholds
- Finished-product stock
- Coffee bean/raw material/packaging/flavor/base tracking
- Recipes and recipe items
- Recipe versioning
- Costing and suggested price calculation
- Suppliers
- Supplier items
- Supplier price history
- Purchase orders
- Goods receipts
- Inventory increase from received goods

No order/inventory coupling exists because neither order creation nor inventory exists.

## 12. Existing Settings / Site Settings

No settings system exists.

Current hardcoded/static settings:

- `app/layout.tsx` metadata is still `Create Next App` / `Generated by create next app`.
- Fonts are default Geist/Geist Mono, not the blueprint fonts Playfair Display and Cairo.
- Global CSS uses default white/dark variables, not Line Coffee brand tokens.
- No `site_settings` table or settings API exists.
- No public/private setting separation exists.

Missing settings groups from blueprint:

- Brand
- Contact
- Social
- Checkout
- WhatsApp
- Telegram
- Shipping
- Currency
- Loyalty
- SEO
- Appearance
- Footer
- Legal
- Security/System

## 13. Existing Notifications / WhatsApp / Telegram

No notification flow exists.

Missing:

- WhatsApp phone/settings
- WhatsApp message template
- WhatsApp redirect after database save
- Telegram bot integration
- Telegram order notification
- Telegram low-stock notification
- Daily summary notification
- Notification templates
- Notification logs
- Failure logging

Security-sensitive observation:

- No `.env*` files were found by name during audit.
- `.gitignore` excludes `.env*`, which is correct.
- No Telegram token, WhatsApp key, or Supabase service key appears in tracked app files inspected.

## 14. Existing Analytics

No analytics implementation exists.

Missing:

- Website events
- Page views
- Product views
- Category views
- Search logs
- Cart events
- Checkout started/completed events
- Order-created analytics
- Traffic source/UTM tracking
- Dashboard analytics
- Profit/sales/product/customer analytics

There is no `instrumentation.ts`, analytics API, event logger, or analytics table migration.

## 15. DB-First Gaps

The repository is currently pre-DB. The biggest DB-first gaps are:

- No Supabase folder or migrations.
- No Supabase dependency or client helpers.
- No database types or generated types.
- No dashboard-controlled products/categories.
- No product variants.
- No product/category media relationships.
- No website content tables.
- No Media Studio section model.
- No order/customer tables.
- No checkout server action/API.
- No server-side price recalculation.
- No order snapshots.
- No settings table.
- No public/private setting rules.
- No notifications/audit logs.
- No analytics events.
- No RLS or permission model.

The current repo does not violate DB-first through an existing wrong implementation; instead, it has not implemented DB-first architecture yet.

## 16. Hardcoded / Config-First Areas

Current hardcoded areas:

- `app/page.tsx` contains the full default starter homepage UI.
- `app/layout.tsx` hardcodes default metadata and default fonts.
- `app/globals.css` hardcodes starter theme variables and default body font.
- `public/*.svg` contains default starter assets.
- `README.md` contains default create-next-app instructions.

Important distinction:

- There are no hardcoded Line Coffee products/categories/prices yet.
- There is no config-first live business data yet.
- The risk is that future implementation could incorrectly hardcode products/categories/content into the frontend unless Phase 1/3 establishes Supabase as the source of truth first.

## 17. Security Risks

Critical/high security-sensitive gaps:

- No admin authentication or authorization exists.
- No role/permission model exists.
- No RLS policies exist because there is no schema.
- No server-side checkout validation exists because checkout is not implemented.
- No private/public settings boundary exists.
- No audit logs exist for sensitive actions.

Current positive security observations:

- `.env*` is ignored in `.gitignore`.
- No `.env*` files were found by name during audit.
- No tracked service keys or tokens were found in inspected files.
- No API routes currently expose private data because no API routes exist.

Future implementation must protect:

- Supabase service role key
- Telegram bot token
- WhatsApp API key if ever added
- Private site settings
- Customer data
- Order data
- Supplier/inventory/cost/profit data
- Admin permissions and audit logs

## 18. Dead / Duplicate / Legacy Areas

Likely removable or replaceable later, but not deleted during this audit:

- Default starter homepage in `app/page.tsx`
- Default Next/Vercel SVGs in `public/`
- Default create-next-app README content
- Default metadata in `app/layout.tsx`
- `CLAUDE.md` only contains `@AGENTS.md`; it is not harmful, but it is a thin pointer rather than project guidance.
- `.next/` exists locally as generated output and is ignored by git.

No duplicate business modules were found because no business modules exist yet.

## 19. Build / Test Commands

Available scripts from `package.json`:

- `npm run dev` -> `next dev`
- `npm run build` -> `next build`
- `npm run start` -> `next start`
- `npm run lint` -> `eslint`

Not available:

- No `test` script
- No `typecheck` script
- No database/migration scripts
- No Supabase scripts
- No seed scripts
- No format script

Config notes:

- TypeScript strict mode is enabled.
- ESLint uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- Tailwind v4 is wired through `@tailwindcss/postcss`.

Commands were inspected but not run as part of this audit.

## 20. What Already Matches Line Coffee V2

Repository/planning matches:

- The full V2 planning documentation set exists.
- The project has a clean, minimal Next.js App Router foundation.
- Next.js, React, TypeScript, ESLint, and Tailwind are installed.
- TypeScript strict mode is enabled.
- `.env*` files are ignored.
- The repo is not polluted with a conflicting product/config system yet.
- No unsafe checkout/order code exists because checkout is not implemented.
- No hardcoded Line Coffee products/categories/prices exist yet.

Architecture opportunity:

- Because the app is still minimal, Phase 1 can establish database-first architecture without needing to unwind a large legacy implementation.

## 21. What Conflicts With Line Coffee V2

Current implementation conflicts or gaps against V2:

- Website shows default create-next-app content instead of Line Coffee.
- Metadata says `Create Next App`.
- Fonts are Geist/Geist Mono instead of Playfair Display/Cairo.
- Visual system does not use the dark luxury Line Coffee direction.
- No customer website routes beyond `/`.
- No products/categories database source.
- No Supabase schema/migrations.
- No dashboard/admin system.
- No Media Studio/CMS.
- No checkout/order save flow.
- No WhatsApp/Telegram flow.
- No legal pages.
- No blog.
- No customer/accounts/auth.
- No inventory/recipes/suppliers.
- No settings/site_settings.
- No analytics.
- No audit logs or permissions.

Most conflicts are absence-of-implementation conflicts, not broken existing behavior.

## 22. Risk Rating

Critical:

- No Supabase database foundation exists.
- No products/categories source exists.
- No checkout/order creation exists.
- No order-save-before-WhatsApp flow exists.
- No dashboard/admin/auth/permissions exist.

High:

- No settings/public-private settings boundary exists.
- No RLS/security policy foundation exists.
- No Media Studio/content model exists.
- No legal pages exist.
- No notifications/Telegram/WhatsApp logging exists.
- No inventory/recipe/costing foundation exists.
- No audit logs exist.

Medium:

- Starter UI/metadata/assets conflict with Line Coffee brand.
- No test script or typecheck script exists.
- No analytics/event tracking exists.
- No blog/SEO content system exists.
- README is still generic create-next-app documentation.

Low:

- Default public SVG assets are harmless but should be replaced later.
- `CLAUDE.md` is only a pointer to `AGENTS.md`.
- `.next/` exists locally but is ignored and should not be committed.

Overall risk rating: Critical for launch readiness, Low for immediate code stability. The repo is currently a clean scaffold, not a partially broken ecommerce system.

## 23. Recommended Next Implementation Order

Recommended next order:

1. Phase 1A: Create the Supabase/database foundation in migrations, starting with core reusable tables and safe public/private boundaries.
2. Add Supabase dependency/client helpers only after the migration shape is agreed.
3. Seed or prepare seed strategy for final categories as database seed/fallback, not live frontend config.
4. Implement admin auth, roles, permissions, and audit-log foundation.
5. Implement products/categories dashboard and DB-backed public reads.
6. Implement Media Library foundation.
7. Build website core pages using DB-backed products/categories/content.
8. Implement cart/checkout/order flow with server-side recalculation and order save before WhatsApp.
9. Add orders dashboard and Telegram notification flow.
10. Add customers CRM foundation.
11. Add inventory/recipes/suppliers.
12. Add blog/legal pages, analytics, notifications, polish, QA, and launch preparation.

What should be done first:

- Do not redesign UI first.
- Do not hardcode products/categories into `app/page.tsx`.
- Do not build checkout before the core database/order table shape exists.
- Start with a minimal, safe Phase 1 database foundation.

## 24. Exact Next Safe Task Prompt

Use AGENTS.md strictly.

This is the Line Coffee V2 project.

Task: Implement Phase 1A — Supabase database foundation only.

Read first:

- AGENTS.md
- LINE_COFFEE_V2_PROJECT_INDEX.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_EXECUTION_PLAN.md

Rules:

- Do not edit customer-facing UI.
- Do not touch checkout/order application logic.
- Do not run destructive commands.
- Do not drop or delete data.
- Do not install packages unless you first confirm the exact package need.
- Do not hardcode live products/categories/prices into frontend files.
- Create only the minimal Supabase folder/migration foundation needed for V2 core tables.
- If no existing migrations are present, say so and create the first migration carefully.
- Keep config files as fallback/seed/guardrails only.
- Protect private settings and service keys.

Goal:

- Inspect only existing Supabase/migration-related files.
- Confirm there is currently no `supabase/` migration foundation.
- Create the first safe migration for the core database foundation, prioritizing:
  - `categories`
  - `products`
  - `product_variants`
  - `media_assets`
  - `website_pages`
  - `page_sections`
  - `page_section_items`
  - `customers`
  - `customer_addresses`
  - `orders`
  - `order_items`
  - `site_settings`
  - `audit_logs`
- Include safe timestamps/status fields and public/private settings separation.
- Do not implement frontend reads yet.
- Do not implement checkout yet.

At the end, report:

- Files inspected
- Files changed
- Migration created
- Tables added
- Any assumptions
- Checks run
- Remaining risks
