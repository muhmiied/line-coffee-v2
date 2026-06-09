# LINE COFFEE V2 — EXECUTION PLAN

## 0. Purpose of This File

This file defines the execution roadmap for building Line Coffee V2.

It converts the master specification, business blueprint, visual UX blueprint, database blueprint, and admin modules blueprint into a phased development plan.

This file must be used together with:

* `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
* `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`
* `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`
* `LINE_COFFEE_V2_DATABASE_BLUEPRINT.md`
* `LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md`

This file is the implementation roadmap.

It tells developers what to build first, what to defer, what not to touch, and how to avoid wasting time or breaking the system.

---

# 1. Core Execution Rules

## 1.1 Database First

Line Coffee V2 must follow:

```text
Dashboard → Supabase Database → Website → Media Studio → Future Mobile App
```

Supabase is the single source of truth.

Config files may only be used for:

```text
Fallback
Seed data
Guardrails
Type definitions
Emergency defaults
```

Config files must not become the live product/category/content source.

---

## 1.2 Minimal Patch Rule

Every development task must follow:

```text
Read AGENTS.md first.
Do not scan the full repo unless required.
Identify exact files before editing.
Make minimal patches only.
Avoid full rewrites.
Avoid unrelated refactors.
Do not break existing working flows.
Test only what is relevant.
Commit small logical changes.
```

---

## 1.3 Safety Rule

Never modify these areas unless the phase/task explicitly asks for it:

```text
Checkout logic
Order creation
Payment status logic
Inventory deduction
Supabase RLS/security policies
Authentication
Existing production data
```

If a phase requires touching them, the developer must explain the risk first.

---

## 1.4 No Fake Completion Rule

A phase is not complete unless:

```text
Feature works on desktop.
Feature works on mobile where relevant.
Data comes from Supabase when required.
Admin changes reflect on website when required.
No console errors.
No TypeScript/build errors.
No obvious security leak.
No broken checkout/order path.
```

---

# 2. Development Priority Summary

The correct build order is:

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

---

# 3. Phase 0 — Repo Audit & Cleanup

## 3.1 Goal

Prepare the repository for clean V2 development.

This phase should remove confusion and identify what already exists.

---

## 3.2 Tasks

```text
Read AGENTS.md.
Check current branch.
Check git status.
List important folders only.
Identify app structure.
Identify Supabase migrations.
Identify current dashboard modules.
Identify current product/category source.
Identify current checkout/order flow.
Identify current Media Studio implementation if any.
Identify hardcoded config-first areas.
Identify broken/unused files carefully.
```

---

## 3.3 Do Not

```text
Do not rewrite files.
Do not delete data.
Do not change DB.
Do not touch checkout.
Do not touch order logic.
Do not redesign UI.
```

---

## 3.4 Deliverable

Create or update:

```text
LINE_COFFEE_V2_REPO_AUDIT.md
```

It should include:

```text
Current branch
Repo status
Existing modules
Existing database/migrations
Existing checkout/order flow
Hardcoded areas
Risk areas
Recommended next actions
```

---

## 3.5 Completion Criteria

```text
Repo structure understood.
Current implementation mapped.
Risks listed.
No code broken.
No database changed.
```

---

# 4. Phase 1 — Database Foundation

## 4.1 Goal

Create the database foundation that supports the V2 architecture.

This phase must be based on:

```text
LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
```

---

## 4.2 Tasks

```text
Compare existing migrations with database blueprint.
Identify missing tables.
Identify existing tables that can be reused.
Identify unsafe schema gaps.
Create minimal migrations.
Add core tables only first.
Add indexes where needed.
Prepare RLS strategy.
Prepare seed/fallback data carefully.
```

---

## 4.3 Core Tables First

Priority tables:

```text
categories
products
product_variants
product_media
product_profile_attributes
media_assets
website_pages
page_sections
page_section_items
customers
customer_addresses
orders
order_items
site_settings
audit_logs
```

---

## 4.4 Second-Level Tables

Add after core tables are stable:

```text
inventory_items
inventory_movements
recipes
recipe_items
suppliers
supplier_items
purchase_orders
purchase_order_items
product_reviews
promotions
loyalty_accounts
wallet_transactions
notifications
website_events
```

---

## 4.5 Do Not

```text
Do not hard-delete live data.
Do not drop existing tables without approval.
Do not create duplicate tables if existing ones can be migrated safely.
Do not break current website reads.
Do not expose private settings publicly.
```

---

## 4.6 Completion Criteria

```text
Core schema exists.
Migrations run successfully.
No duplicate/conflicting tables.
Critical tables have created_at/updated_at.
Public/private data separation is clear.
Database supports products/categories/orders/content.
```

---

# 5. Phase 2 — Auth, Roles & Permissions

## 5.1 Goal

Build safe admin access and permission control.

---

## 5.2 Tasks

```text
Implement admin users.
Implement roles.
Implement permissions.
Implement role-permission mapping.
Protect dashboard routes.
Protect admin API routes.
Add permission checks server-side.
Make Primary Owner protected.
Add audit logs for user/role changes.
```

---

## 5.3 Default Roles

```text
primary_owner
owner
admin
staff
```

---

## 5.4 Required Rules

```text
Only one Primary Owner.
Primary Owner cannot be deleted.
Primary Owner cannot be disabled.
Primary Owner cannot lose ownership.
Permission checks must not rely only on UI.
Sensitive actions must be audited.
```

---

## 5.5 Completion Criteria

```text
Dashboard requires authentication.
Users have roles.
Permissions control visible modules and server actions.
Primary Owner is protected.
Audit logs work for sensitive role/user changes.
```

---

# 6. Phase 3 — Products & Categories Core

## 6.1 Goal

Make products and categories fully database-controlled.

---

## 6.2 Tasks

```text
Build categories admin list.
Build category create/edit.
Build category reorder.
Build products admin list.
Build product create/edit.
Build variants management.
Build product media connection.
Build product profile attributes.
Build SEO fields.
Build product/category public API.
Connect website category/product pages to DB.
Remove config-first live behavior.
Keep config only fallback/seed/guardrail.
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

## 6.4 Required Product Controls

```text
System Status: Draft / Active / Archived
Website Visibility: Visible / Hidden
Inventory Strategy: finished_stock / recipe_driven / hybrid / none
Variants: 250g / 500g / 1kg
Product media
SEO
Profile attributes
Related products
```

---

## 6.5 Completion Criteria

```text
Admin can control products.
Admin can control categories.
Website reads active visible products from DB.
Product variants work.
Old hardcoded live product output is removed or downgraded to fallback.
Forbidden categories do not appear.
```

---

# 7. Phase 4 — Media System Foundation

## 7.1 Goal

Build a strong media library before advanced Media Studio.

---

## 7.2 Tasks

```text
Create media asset upload flow.
Create media folders.
Create media tags.
Add image preview.
Add video preview if needed.
Add alt text AR/EN.
Add focus point fields.
Add basic crop metadata.
Add optimized image versions where possible.
Connect media to products/categories/page sections/blog.
```

---

## 7.3 Rules

```text
Keep original file.
Create optimized version.
Support WebP where possible.
Do not upload huge uncompressed assets without warning.
Every public important image should support alt text.
```

---

## 7.4 Completion Criteria

```text
Admin can upload media.
Admin can select media for product/category/page section.
Media has alt text.
Media can be searched/organized.
Website uses optimized media when available.
```

---

# 8. Phase 5 — Website Core Pages

## 8.1 Goal

Build the customer-facing website structure.

---

## 8.2 Pages

```text
Home
Products
Category page
Product detail page
Make Your Espresso
Make Your Flavor
About
Blog listing
Blog detail
Contact
Privacy Policy
Terms & Conditions
Shipping Policy
Return & Refund Policy
```

---

## 8.3 Homepage Sections

Default order:

```text
Announcement Bar
Header
Hero
Product PNG Strip
Service Cards
Shop By Category
Best Sellers
Our Story
Latest Blog Posts
Footer
```

---

## 8.4 Visual Direction

Apply:

```text
Dark Luxury
Warm brown depth
Soft glow
Gold strokes
Premium typography
Mobile-first layout
Clear CTA buttons
```

---

## 8.5 Completion Criteria

```text
Main pages exist.
Home sections follow the approved order.
Products/categories come from database.
Mobile layout is usable.
No broken navigation.
Legal pages exist.
Footer links work.
```

---

# 9. Phase 6 — Cart, Checkout & Orders

## 9.1 Goal

Build safe and reliable order creation.

---

## 9.2 Checkout Flow

Correct order flow:

```text
Customer adds products to cart
Customer opens checkout
Server validates all items
Server recalculates prices
Server validates discounts
Server calculates shipping
Order is saved to Supabase
Order appears in dashboard
Telegram notification is sent
Customer is redirected to WhatsApp
Customer manually presses Send
```

---

## 9.3 Critical Rule

```text
Order must exist in database even if WhatsApp message is not sent.
```

---

## 9.4 Tasks

```text
Build cart drawer desktop.
Build bottom sheet cart mobile.
Build checkout form.
Build server-side price recalculation.
Build order creation.
Build order snapshots.
Build custom builder snapshots.
Build Telegram notification.
Build WhatsApp redirect message.
Build order success page.
Build admin order list.
Build admin order detail.
```

---

## 9.5 Security Rules

Do not trust client for:

```text
Unit price
Discount
Shipping
Custom builder price
Order total
Inventory deduction
Customer eligibility
```

---

## 9.6 Completion Criteria

```text
Customer can place order.
Order is saved before WhatsApp redirect.
Admin can see order.
Order items have snapshots.
Custom items have snapshots.
Telegram sends or logs failure.
Checkout is mobile-friendly.
No client-side price trust.
```

---

# 10. Phase 7 — Customers CRM

## 10.1 Goal

Build customer management and guest-to-account linking.

---

## 10.2 Tasks

```text
Create customers list.
Create customer profile.
Create addresses management.
Track orders per customer.
Track total spent.
Track last order.
Add tags.
Add notes.
Add timeline.
Add blocked customer behavior.
Add duplicate warning by phone/WhatsApp/email.
```

---

## 10.3 Rules

```text
Guest checkout remains default.
Accounts are optional.
Guest orders should link by phone/WhatsApp/email.
Blocked customers can browse but cannot checkout.
Customer notes are internal only.
```

---

## 10.4 Completion Criteria

```text
Customers are created from orders.
Admin can view customer history.
Duplicate detection works at warning level.
Blocked customer checkout is prevented.
Customer profile has useful CRM data.
```

---

# 11. Phase 8 — Inventory & Recipes

## 11.1 Goal

Connect selling to stock and costing.

---

## 11.2 Inventory Types

```text
Finished products
Coffee beans
Raw materials
Packaging
Flavor materials
Bases
Other
```

---

## 11.3 Tasks

```text
Build inventory items.
Build inventory movements.
Build low stock threshold.
Build manual stock adjustment.
Build recipes list.
Build recipe editor.
Build recipe versions.
Calculate product cost.
Calculate suggested sale price.
Connect recipe-driven products.
Connect finished-stock products.
```

---

## 11.4 Product Inventory Logic

Finished stock examples:

```text
Turkish Blends
Flavor Coffee
Coffee Mix
Cappuccino
Hot Chocolate
Easy Coffee
```

Recipe-driven examples:

```text
Make Your Espresso
Make Your Flavor
```

Espresso blends can later consume bean inventory depending on production logic.

---

## 11.5 Completion Criteria

```text
Inventory items exist.
Movements are recorded.
Low stock works.
Recipes calculate cost.
Recipe versions exist.
Orders can connect to stock deduction strategy.
Manual adjustments are audited.
```

---

# 12. Phase 9 — Suppliers & Purchases

## 12.1 Goal

Track suppliers, prices, purchasing, and received stock.

---

## 12.2 Tasks

```text
Build suppliers list.
Build supplier profile.
Build supplier items.
Build price history.
Build purchase orders.
Build goods receipt.
Build supplier invoice basics.
Update inventory from received quantities.
Create purchase inventory movements.
```

---

## 12.3 Rule

Inventory increases from actual received quantities, not only purchase order.

---

## 12.4 Completion Criteria

```text
Admin can create supplier.
Admin can create purchase order.
Admin can receive goods.
Inventory increases correctly.
Supplier price history updates.
Purchase records are auditable.
```

---

# 13. Phase 10 — Discounts, Loyalty & Wallet

## 13.1 Goal

Build promotions, loyalty points, and wallet foundation.

---

## 13.2 Tasks

```text
Build promotions list.
Build promotion editor.
Support fixed discount.
Support percentage discount.
Support free shipping.
Support usage limits.
Support date limits.
Support product/category/customer targeting.
Validate discount server-side.
Build loyalty account.
Build loyalty transactions.
Build wallet account.
Build wallet transactions.
```

---

## 13.3 Default Loyalty Rule

```text
10 EGP = 1 point
```

Point value must be configurable.

---

## 13.4 Completion Criteria

```text
Coupons/promotions work server-side.
Usage is logged.
Loyalty points can be earned/redeemed if enabled.
Wallet can store credit/debit/refund.
Admin can adjust with permissions.
```

---

# 14. Phase 11 — Reviews & Feedback

## 14.1 Goal

Build reviews approval and contact/lead management.

---

## 14.2 Tasks

```text
Build product reviews submission.
Restrict verified purchase reviews where required.
Build pending review queue.
Build approve/reject/hide.
Build featured homepage reviews.
Build feedback/contact messages.
Build lead statuses.
```

---

## 14.3 Rules

```text
Only approved reviews appear publicly.
Homepage shows curated featured reviews only.
Recommended homepage reviews: 5 to 6.
Internal feedback is separate from public reviews.
```

---

## 14.4 Completion Criteria

```text
Reviews can be submitted.
Admin approval works.
Featured reviews display on homepage.
Feedback/contact messages are stored.
Admin can update lead status.
```

---

# 15. Phase 12 — Blog & Legal Pages

## 15.1 Goal

Support SEO and customer trust content.

---

## 15.2 Tasks

```text
Build blog post list.
Build blog editor AR/EN.
Build blog categories/tags.
Build featured image.
Build SEO fields.
Build draft/scheduled/published/archived statuses.
Build blog listing page.
Build blog detail page.
Build legal page editor or DB-backed legal content.
```

---

## 15.3 Required Legal Pages

```text
Privacy Policy
Terms & Conditions
Shipping Policy
Return & Refund Policy
```

---

## 15.4 Completion Criteria

```text
Blog posts can be created and published.
Blog pages are SEO-ready.
Legal pages exist and are linked in footer.
Arabic/English content is supported.
```

---

# 16. Phase 13 — Media Studio Visual Builder

## 16.1 Goal

Build the visual website control layer.

---

## 16.2 Tasks

```text
Build website pages list.
Build page sections list.
Build section editor.
Build section visibility toggle.
Build section ordering.
Build text AR/EN editing.
Build button/link editing.
Build media selection.
Build desktop preview.
Build mobile preview.
Build draft save.
Build publish.
Build rollback.
Build revision history.
```

---

## 16.3 Home Sections Controlled

```text
Announcement Bar
Hero
Product PNG Strip
Service Cards
Shop By Category
Best Sellers
Our Story
Latest Blog Posts
Footer
```

---

## 16.4 Rule

Media Studio edits database-backed content.

It must not become a disconnected design toy.

---

## 16.5 Completion Criteria

```text
Admin can edit homepage sections.
Admin can preview before publish.
Published changes appear on website.
Rollback works.
Section order/visibility works.
Changes are audited.
```

---

# 17. Phase 14 — Analytics & Notifications

## 17.1 Goal

Make the business measurable and notify admins about important events.

---

## 17.2 Analytics Tasks

```text
Track page views.
Track product views.
Track category views.
Track search.
Track add to cart.
Track checkout started.
Track order created.
Build dashboard analytics.
Build sales analytics.
Build product analytics.
Build customer analytics.
Build website analytics.
```

---

## 17.3 Notification Tasks

```text
Build notification templates.
Build notification logs.
Send Telegram new order notification.
Send Telegram low stock notification.
Send daily summary.
Show dashboard notifications.
Log failures.
```

---

## 17.4 Completion Criteria

```text
Website events are tracked.
Admin can view analytics.
Telegram new order works.
Low stock notifications work.
Daily summary works or is prepared.
Failures are logged.
```

---

# 18. Phase 15 — Admin Dashboard Polish

## 18.1 Goal

Make the admin dashboard clean, consistent, and usable.

---

## 18.2 Tasks

```text
Standardize tables.
Standardize filters.
Standardize status badges.
Standardize forms.
Standardize drawers/modals.
Improve mobile critical actions.
Add loading skeletons.
Add empty states.
Add error states.
Improve permissions UI.
Improve global search.
Improve quick actions.
```

---

## 18.3 Completion Criteria

```text
Admin modules feel consistent.
No messy UI.
Common actions are easy.
Mobile supports urgent tasks.
Tables are usable.
Errors are understandable.
```

---

# 19. Phase 16 — Visual UX & Animation Polish

## 19.1 Goal

Apply the full premium Line Coffee visual experience.

---

## 19.2 Website Visual Tasks

```text
Apply Dark Luxury visual system.
Add warm brown gradient depth.
Add subtle noise/texture.
Add gold stroke system.
Improve hero animation.
Add product PNG strip movement.
Add category hover effects.
Add product card hover effects.
Add profile bar animation.
Add Our Story scroll storytelling.
Add cart micro animation.
Add checkout minimal transitions.
Improve footer visual depth.
```

---

## 19.3 Animation Stack

Recommended:

```text
CSS animations for simple hover/glow/underline
Framer Motion for UI transitions/cards/modals/drawers
GSAP + ScrollTrigger for storytelling sections
Lenis only if needed and performance is safe
```

---

## 19.4 Do Not

```text
Do not add heavy WebGL in V1.
Do not add scroll hijacking.
Do not animate checkout heavily.
Do not hurt mobile performance.
Do not hide important buying actions behind hover.
```

---

## 19.5 Completion Criteria

```text
Website feels premium.
Mobile is smooth.
Animations guide the customer.
Checkout remains calm.
Product pages remain practical.
No performance regression.
```

---

# 20. Phase 17 — Security, QA & Performance

## 20.1 Goal

Prepare for safe production launch.

---

## 20.2 Security QA

Check:

```text
RLS policies
Admin permissions
Private settings exposure
Checkout price recalculation
Discount validation
Order ownership
Customer data privacy
API route protection
Audit logging
```

---

## 20.3 Functional QA

Test:

```text
Home page
Products page
Category page
Product detail
Make Your Espresso
Make Your Flavor
Cart
Checkout
Order creation
WhatsApp redirect
Telegram notification
Admin order management
Product admin
Category admin
Inventory
Recipes
Media Studio
Blog
Settings
```

---

## 20.4 Mobile QA

Test:

```text
iPhone screen sizes
Android average screen
Mobile menu
Cart bottom sheet
Checkout form
Product pages
Builder pages
Admin urgent actions
```

---

## 20.5 Performance QA

Check:

```text
Image sizes
WebP/optimized media
Bundle size
Unused libraries
Slow animations
Core Web Vitals
Database query performance
Pagination
Caching where safe
```

---

## 20.6 Completion Criteria

```text
Build passes.
No critical console errors.
No broken checkout.
No private data leak.
No major mobile issue.
No severe performance issue.
```

---

# 21. Phase 18 — Launch Preparation

## 21.1 Goal

Prepare website and business for public launch.

---

## 21.2 Tasks

```text
Set production environment variables.
Verify Supabase production connection.
Verify Vercel deployment.
Verify domain.
Verify sitemap.
Verify robots.txt.
Verify SEO metadata.
Verify legal pages.
Verify WhatsApp number.
Verify Telegram notifications.
Verify product prices.
Verify shipping settings.
Verify test orders.
Verify admin users.
Verify backup strategy.
Create launch checklist.
```

---

## 21.3 Content Preparation

Must prepare:

```text
Product images
Category images
Hero image
About story
Blog posts
Legal content
Product descriptions
Arabic and English content
Social links
Contact details
```

---

## 21.4 Launch Criteria

Do not launch unless:

```text
Customer can order successfully.
Admin receives order.
Order is saved before WhatsApp.
Products and prices are correct.
Mobile works.
Checkout works.
Legal pages exist.
No private setting exposed.
Owner can control content.
```

---

# 22. Post-Launch Phase

## 22.1 First 7 Days

Monitor:

```text
Orders
Checkout errors
WhatsApp redirects
Telegram notifications
Low stock
Customer messages
Mobile behavior
Performance
Admin workflow
```

---

## 22.2 First 30 Days

Improve:

```text
Product photos
Social content
Blog SEO
Best sellers
Offers
Homepage content
Customer feedback
Analytics-based improvements
```

---

# 23. Deferred Features

The following should not block V1 launch:

```text
Full mobile app
Advanced AI analytics
Advanced loyalty tiers
WhatsApp marketing automation
Email marketing system
Public order tracking
Advanced supplier performance scoring
Full ERP accounting
Heavy WebGL scenes
Advanced Media Studio animations
Complex customer segmentation
Advanced abandoned cart automation
PWA
Deep reporting exports
```

---

# 24. Developer Prompt Standard

Every Codex/Claude session should start with:

```text
Use AGENTS.md strictly.

This is the Line Coffee V2 project.

Follow Database First Architecture:
Dashboard → Supabase Database → Website → Media Studio → Future Mobile App.

Do not treat config files as live data.
Config is fallback/seed/guardrails only.

Minimize token/limit usage.
Do not scan the full repo unless necessary.
Read only the required files.
Identify exact files before editing.
Use minimal patches only.
Avoid unrelated rewrites.
Do not touch checkout/order/security/inventory logic unless this task explicitly requires it.
Do not hardcode products/categories/prices.
Preserve mobile-first UX.
Run only relevant tests/checks.
At the end, report changed files, what was done, risks, and next step.
```

---

# 25. Phase-by-Phase Execution Prompts

## 25.1 Generic Phase Prompt Template

```text
Use AGENTS.md strictly.

Task:
Implement Phase [NUMBER] — [PHASE NAME] from LINE_COFFEE_V2_EXECUTION_PLAN.md.

Read only:
- AGENTS.md
- LINE_COFFEE_V2_MASTER_SPECIFICATION.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- Relevant existing files only

Rules:
- Minimal patches only.
- No full repo scan unless necessary.
- Do not rewrite unrelated files.
- Do not touch checkout/order/security/inventory unless this phase requires it.
- Do not hardcode live data.
- Use Supabase as source of truth.
- Keep mobile-first.
- Preserve existing working behavior.

Before editing:
1. List exact files you need to inspect.
2. Explain the minimal implementation approach.
3. Wait if the task is risky.

After editing:
1. List changed files.
2. Explain what changed.
3. Mention tests/checks run.
4. Mention risks or follow-up tasks.
```

---

# 26. Execution Order Rules

## 26.1 Do Not Jump Ahead

Do not build advanced UI polish before:

```text
Database foundation
Products/categories DB source
Checkout/order safety
Core dashboard modules
```

## 26.2 Do Not Overbuild

Avoid building enterprise-level systems before the core store works.

## 26.3 Do Not Mix Too Much

Each phase should be split into small tasks.

Example:

Bad:

```text
Build products, orders, inventory, Media Studio, analytics all at once.
```

Good:

```text
Build product admin list.
Then product edit form.
Then product variants.
Then public product API.
Then website connection.
```

---

# 27. Recommended First Implementation Order Inside V2

If starting from a messy existing repo, use this immediate order:

```text
1. Repo audit
2. DB schema comparison
3. Products/categories DB source
4. Admin product/category management
5. Website product/category reads
6. Checkout/order safety
7. Orders dashboard
8. Media system
9. Inventory/recipes
10. UI/animation polish
```

Reason:

```text
A beautiful frontend without stable products, orders, and database logic is not useful.
```

---

# 28. Final Success Definition

Line Coffee V2 is successful when:

```text
The customer sees a premium dark luxury coffee website.
The customer can browse clearly.
The customer can customize espresso/flavors.
The customer can place an order easily.
The order is saved before WhatsApp.
The admin receives and manages the order.
Products are controlled from dashboard.
Categories are controlled from dashboard.
Inventory and recipes support real operations.
Media Studio controls website visuals.
Analytics explain performance.
Permissions protect admin actions.
Audit logs track sensitive actions.
Mobile experience is smooth.
```

The final system must not become:

```text
A hardcoded product website.
A pretty frontend with weak backend.
A dashboard that does not control the website.
A checkout form without reliable order saving.
An inventory system disconnected from sales.
A slow animation-heavy portfolio.
```

Line Coffee V2 must be:

```text
Premium coffee e-commerce + real business control system.
```
