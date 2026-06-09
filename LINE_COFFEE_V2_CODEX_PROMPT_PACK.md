# LINE COFFEE V2 — CODEX / CLAUDE PROMPT PACK

## 0. Purpose of This File

This file contains ready-to-use prompts for Codex / Claude / Claude Code when working on the Line Coffee V2 project.

The goal is to avoid re-explaining the project every time and to force every coding session to follow:

* Database First Architecture
* Minimal patches
* No full repo scans unless necessary
* No hardcoded live data
* No unnecessary rewrites
* Safe checkout/order/inventory handling
* Mobile-first premium UX
* Clear end-of-task reports

This file must be used together with:

* `AGENTS.md`
* `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
* `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`
* `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`
* `LINE_COFFEE_V2_DATABASE_BLUEPRINT.md`
* `LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md`
* `LINE_COFFEE_V2_EXECUTION_PLAN.md`
* `LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md`

---

# 1. Standard Start Prompt

Use this at the start of every new Codex / Claude session.

```text
Use AGENTS.md strictly.

This is the Line Coffee V2 project.

Follow Database First Architecture:
Dashboard → Supabase Database → Website → Media Studio → Future Mobile App.

Supabase Database is the single source of truth.

Do not treat config files as live data.
Config files are allowed only as fallback, seed data, guardrails, type definitions, or emergency defaults.

Before editing:
1. Read AGENTS.md.
2. Read only the relevant blueprint files for this task.
3. Identify the exact files you need to inspect.
4. Do not scan the full repo unless necessary.
5. Explain the minimal implementation approach.

Development rules:
- Minimal patches only.
- Avoid full file rewrites.
- Avoid unrelated refactors.
- Do not hardcode products/categories/prices.
- Do not touch checkout/order/security/inventory logic unless this task explicitly requires it.
- Do not change Supabase schema unless this task explicitly requires it.
- Do not delete data.
- Do not expose private settings.
- Keep mobile-first UX.
- Preserve existing working behavior.

At the end, report:
1. Files changed.
2. What changed.
3. Tests/checks run.
4. Any risks.
5. Recommended next step.
```

---

# 2. Repo Audit Prompt

Use this before major implementation.

```text
Use AGENTS.md strictly.

Task:
Audit the current Line Coffee V2 repository before implementation.

Read:
- AGENTS.md
- LINE_COFFEE_V2_MASTER_SPECIFICATION.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- LINE_COFFEE_V2_EXECUTION_PLAN.md

Goal:
Create a clear repo audit without changing code.

Check:
- Current branch and git status.
- App structure.
- Dashboard structure.
- Website page structure.
- Supabase folder and migrations.
- Current product/category source.
- Current checkout/order flow.
- Current Media Studio/CMS implementation.
- Hardcoded config-first areas.
- Security-sensitive areas.
- Dead/duplicate/legacy areas.
- Build/test commands available.

Do not:
- Edit files.
- Run destructive commands.
- Change database.
- Touch checkout/order logic.
- Delete anything.

Deliverable:
Create or update:
LINE_COFFEE_V2_REPO_AUDIT.md

The report must include:
1. Current branch/status.
2. Important folders.
3. Existing modules.
4. Existing database/migrations.
5. Existing checkout/order flow.
6. DB-first gaps.
7. Hardcoded live-data areas.
8. Risk areas.
9. Recommended next implementation step.
```

---

# 3. Database Foundation Prompt

```text
Use AGENTS.md strictly.

Task:
Implement / prepare the database foundation for Line Coffee V2.

Read:
- AGENTS.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- Existing Supabase migrations only as needed.

Goal:
Compare the current Supabase schema/migrations with LINE_COFFEE_V2_DATABASE_BLUEPRINT.md and prepare minimal safe migrations.

Rules:
- Do not drop live tables.
- Do not hard-delete data.
- Do not duplicate existing tables if they can be reused safely.
- Do not run destructive SQL.
- Do not change checkout/order logic unless required.
- Do not expose private settings publicly.
- Use minimal migrations only.
- Explain every migration before creating it if risky.

Priority core tables:
- categories
- products
- product_variants
- product_media
- product_profile_attributes
- media_assets
- website_pages
- page_sections
- page_section_items
- customers
- customer_addresses
- orders
- order_items
- site_settings
- audit_logs

Before editing:
1. List existing relevant migrations/tables found.
2. List missing required tables.
3. List tables that already exist and can be reused.
4. Propose the minimal migration plan.

After editing:
1. List migration files created/changed.
2. Explain schema changes.
3. Mention risks.
4. Mention commands/tests run.
```

---

# 4. Products & Categories DB-First Prompt

```text
Use AGENTS.md strictly.

Task:
Make products and categories database-first.

Read:
- AGENTS.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- Relevant existing product/category files only.

Goal:
Products and categories must be controlled from Supabase and dashboard, not hardcoded config.

Final categories:
- Turkish Blends
- Espresso Blends
- Easy Coffee
- Flavor Coffee
- Coffee Mix
- Cappuccino
- Hot Chocolate
- Make Your Espresso
- Make Your Flavor

Forbidden:
- Single Origin Beans category
- All Products sidebar
- Original LINE section
- Nescafe naming

Required:
- Product variants for 250g / 500g / 1kg.
- Product status separated from visibility.
- Category ordering.
- Product/category media support.
- Product SEO fields.
- Website reads active visible products/categories from DB.
- Config only fallback/seed/guardrails.

Do not:
- Hardcode live products.
- Rewrite unrelated UI.
- Touch checkout/order logic.
- Change inventory logic unless required.

Before editing:
1. Identify current product/category source.
2. List exact files to inspect.
3. Explain minimal DB-first approach.

After editing:
1. List changed files.
2. Explain what now reads from DB.
3. Explain what remains fallback.
4. Mention tests/checks.
```

---

# 5. Checkout Safety Prompt

```text
Use AGENTS.md strictly.

Task:
Audit and harden checkout/order creation.

Read:
- AGENTS.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_EXECUTION_PLAN.md
- Existing checkout/order files only.

Critical flow:
Customer clicks Place Order →
Server validates order →
Server recalculates prices →
Order is saved to Supabase →
Dashboard order is created →
Telegram notification is sent →
Customer is redirected to WhatsApp →
Customer manually presses Send.

Critical rule:
The order must exist in the database even if WhatsApp is not sent.

Do not trust client for:
- Unit price
- Discount
- Shipping
- Custom builder price
- Inventory deduction
- Customer promo eligibility
- Order total

Tasks:
- Identify current checkout flow.
- Confirm server-side recalculation.
- Confirm order snapshots.
- Confirm custom builder snapshots.
- Confirm Telegram notification after DB save.
- Confirm WhatsApp redirect after DB save.
- Fix only necessary security/order issues.

Do not:
- Redesign checkout UI unless asked.
- Touch unrelated product UI.
- Rewrite whole checkout.
- Change DB schema unless required and explained.

Before editing:
1. Map current order flow.
2. Identify risks.
3. List exact files to edit.

After editing:
1. Explain saved-before-WhatsApp behavior.
2. Explain server-side validation.
3. List changed files.
4. Mention tests/checks.
```

---

# 6. Orders Dashboard Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve the Orders admin dashboard.

Read:
- AGENTS.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- Relevant existing orders/admin files only.

Required Orders List columns:
- Order Number
- Customer Name
- Phone / WhatsApp
- Order Source
- Order Status
- Payment Status
- Fulfillment Status
- Grand Total
- Created At
- Actions

Required Order Detail sections:
- Order header
- Customer snapshot
- Shipping address snapshot
- Order items
- Custom builder details
- Pricing snapshot
- Payment records
- Order timeline
- Customer notes
- Internal admin notes

Actions:
- Confirm order
- Mark preparing
- Mark shipped
- Mark delivered
- Cancel order
- Add payment
- Edit shipping price
- Add internal note
- Contact customer on WhatsApp
- Print/download invoice

Rules:
- Do not break order creation.
- Do not modify checkout flow unless required.
- Use database snapshots.
- Internal notes must never show to customer.
- Dangerous actions must be permission-based and audited.

Before editing:
1. Identify current orders admin files.
2. Explain minimal implementation.
3. Avoid unrelated dashboard changes.

After editing:
1. List changed files.
2. Explain order list/detail behavior.
3. Mention tests/checks.
```

---

# 7. Inventory & Recipes Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve Inventory and Recipes modules.

Read:
- AGENTS.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- Relevant inventory/recipe files only.

Inventory must support:
- Finished products
- Coffee beans
- Raw materials
- Packaging
- Flavor materials
- Bases

Inventory movement types:
- purchase_in
- sale_out
- production_in
- recipe_consumption
- adjustment_in
- adjustment_out
- return_in
- return_out
- waste
- damage
- sample
- expired
- correction

Recipes must support:
- Product recipe
- Variant recipe
- Versioning
- Active version
- Recipe items
- Cost calculation
- Waste/loss percentage
- Suggested selling price
- Historical order recipe snapshot

Rules:
- Manual inventory adjustment must require reason.
- Manual adjustment must be audited.
- Recipe updates must not change old orders.
- Only one active recipe version per product/variant.

Do not:
- Deduct inventory from orders unless this task explicitly includes order integration.
- Break checkout/order flow.
- Overbuild production ERP features in V1.

Before editing:
1. Identify exact module files.
2. Explain current state.
3. Propose minimal patch.

After editing:
1. List changed files.
2. Explain inventory/recipe behavior.
3. Mention risks/checks.
```

---

# 8. Media Library Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve the Media Library foundation.

Read:
- AGENTS.md
- LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- Relevant media/storage files only.

Media Library must support:
- Image upload
- Video upload if already supported or easy
- Folders
- Tags
- Search
- Filters
- Preview
- Alt text AR/EN
- Focus point
- Original file
- Optimized version where possible

Media assets should be usable by:
- Products
- Categories
- Page sections
- Blog posts
- Settings/footer/hero

Rules:
- Keep original file.
- Use optimized public version when possible.
- Do not expose private files incorrectly.
- Do not break existing image paths.
- No heavy image editor in this task unless requested.

Before editing:
1. Identify current media/upload implementation.
2. List exact files needed.
3. Explain minimal implementation.

After editing:
1. List changed files.
2. Explain upload/select flow.
3. Mention storage/security risks.
```

---

# 9. Media Studio Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve Media Studio visual editing.

Read:
- AGENTS.md
- LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- Relevant Media Studio/page section files only.

Media Studio must edit database-backed website content.

Home sections:
- Announcement Bar
- Header
- Hero
- Product PNG Strip
- Service Cards
- Shop By Category
- Best Sellers
- Our Story
- Latest Blog Posts
- Footer

Required features:
- Edit text AR/EN
- Edit images/media
- Edit buttons/links
- Toggle visibility
- Reorder sections
- Preview desktop/mobile
- Save draft
- Publish
- Rollback/revision history where implemented
- Audit publish action

Rules:
- Media Studio is not a disconnected design toy.
- Website must read published DB-backed content.
- Do not hardcode final live content.
- Do not break products/categories source.

Before editing:
1. Identify current Media Studio implementation.
2. Identify current website section source.
3. List exact files.
4. Propose minimal implementation.

After editing:
1. List changed files.
2. Explain admin edit → DB → website flow.
3. Mention remaining limitations.
```

---

# 10. Website UI / Animation Prompt

```text
Use AGENTS.md strictly.

Task:
Apply Line Coffee V2 premium visual UX and animation polish.

Read:
- AGENTS.md
- LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
- LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
- Relevant frontend files only.

Visual direction:
Dark Luxury Coffee E-Commerce.

Use:
- Dark warm coffee backgrounds
- Brown depth, not flat solid #522500 blocks
- Warm radial gradients
- Subtle glow
- Low-opacity texture/noise
- Thin warm gold strokes
- Premium typography
- Mobile-first layout

Animation rules:
- Hero: cinematic reveal
- Product PNG Strip: slow movement / swipe on mobile
- Service cards: fade-up
- Categories: premium hover
- Best sellers: product card hover
- Our Story: scroll storytelling if safe
- Product page: gallery/profile bar animation
- Cart: drawer/bottom sheet micro-animation
- Checkout: minimal calm transitions only

Avoid:
- Heavy WebGL in V1
- Scroll hijacking
- Over-animation
- Hiding buying actions behind hover
- Hurting mobile performance
- Redesigning unrelated modules

Before editing:
1. Identify exact UI files.
2. Explain minimal visual approach.
3. Mention any animation library needed.

After editing:
1. List changed files.
2. Explain visual/animation changes.
3. Mention mobile/performance considerations.
```

---

# 11. Content Copy Prompt

```text
Use AGENTS.md strictly.

Task:
Apply or improve Line Coffee V2 website copy.

Read:
- AGENTS.md
- LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
- Relevant content/page/component files only.

Tone:
- Premium
- Warm
- Clear
- Coffee-focused
- Bilingual Arabic/English
- Egyptian Arabic but polished
- Not cheap/loud
- Not overly formal

Apply content for:
- Hero
- Announcement bar
- Service cards
- Categories
- Product descriptions
- Make Your Espresso
- Make Your Flavor
- Cart
- Checkout
- Order success
- Empty states
- Error states
- Blog
- About page

Rules:
- Arabic and English must both feel natural.
- Do not literal-translate if meaning suffers.
- Do not use Nescafe naming.
- Do not create fake claims.
- Do not overpromise shipping or roasting unless backed by business process.
- Keep checkout copy clear and reassuring.

Before editing:
1. Identify exact content locations.
2. Explain what copy will change.
3. Avoid unrelated UI edits.

After editing:
1. List changed files.
2. Summarize content changes.
3. Mention any missing content/admin-controlled fields.
```

---

# 12. Blog Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve Line Coffee V2 blog.

Read:
- AGENTS.md
- LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- Relevant blog files only.

Blog must support:
- Arabic title/content
- English title/content
- Slug
- Excerpt
- Featured image
- Author
- Categories
- Tags
- Draft
- Scheduled
- Published
- Archived
- SEO title/description AR/EN

Public pages:
- Blog listing
- Blog detail
- Related posts if safe

Rules:
- No comments in V1.
- Blog supports SEO and customer education.
- Avoid hardcoded-only blog content if DB exists.
- Use Media Library for featured images if available.

Before editing:
1. Identify current blog implementation.
2. List exact files.
3. Explain minimal approach.

After editing:
1. List changed files.
2. Explain admin/public blog behavior.
3. Mention tests/checks.
```

---

# 13. Reviews Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve reviews and feedback.

Read:
- AGENTS.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- Relevant review/contact files only.

Reviews rules:
- Reviews require approval before public display.
- Verified purchase reviews are preferred/required where implemented.
- Homepage shows curated featured reviews only.
- Recommended homepage count: 5 to 6.
- Admin can approve/reject/hide/feature.

Feedback/contact rules:
- Contact messages become leads/feedback records.
- Statuses: new, contacted, in_progress, won, lost, closed.

Do not:
- Add public review replies in V1.
- Show unapproved reviews.
- Fake reviews.

Before editing:
1. Identify current review/contact implementation.
2. List exact files.
3. Explain minimal approach.

After editing:
1. List changed files.
2. Explain approval/public display flow.
3. Mention tests/checks.
```

---

# 14. Discounts / Loyalty / Wallet Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve discounts, loyalty, and wallet.

Read:
- AGENTS.md
- LINE_COFFEE_V2_MASTER_BLUEPRINT.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- Relevant promo/checkout/customer files only.

Promotions must support:
- Fixed amount
- Percentage
- Free shipping
- Gift product future-ready
- Date limits
- Usage limits
- Customer/product/category targeting
- Stacking rules

Loyalty default:
10 EGP = 1 point.

Wallet supports:
- Refund
- Compensation
- Loyalty/promotional/manual credit
- Debit when used

Rules:
- Server validates discounts.
- Client cannot control discount.
- Assigned coupons must enforce assignment.
- Usage must be logged.
- Wallet/loyalty adjustments must be permission-based and audited.

Do not:
- Break checkout/order creation.
- Trust client totals.
- Overbuild complex tiers unless asked.

Before editing:
1. Identify exact files.
2. Explain effect on checkout.
3. Mention risks.

After editing:
1. List changed files.
2. Explain validation flow.
3. Mention tests/checks.
```

---

# 15. Analytics / Notifications Prompt

```text
Use AGENTS.md strictly.

Task:
Build or improve analytics and notifications.

Read:
- AGENTS.md
- LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
- LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
- LINE_COFFEE_V2_EXECUTION_PLAN.md
- Relevant analytics/notifications files only.

Analytics should track:
- Page views
- Product views
- Category views
- Search
- Add to cart
- Checkout started
- Order created
- Sales
- Profit where permissions allow
- Customer behavior

Notifications should support:
- Telegram new order notification
- Telegram low stock notification
- Daily summary
- Dashboard notification log
- Failure logs

Rules:
- Do not expose private Telegram token.
- Notification failure must not block order creation.
- Profit analytics require permission.
- Avoid heavy tracking that hurts performance.

Before editing:
1. Identify current analytics/notification files.
2. List exact files.
3. Explain minimal approach.

After editing:
1. List changed files.
2. Explain event/notification flow.
3. Mention risks/checks.
```

---

# 16. QA / Security Prompt

```text
Use AGENTS.md strictly.

Task:
Run focused QA and security review for Line Coffee V2.

Read:
- AGENTS.md
- LINE_COFFEE_V2_EXECUTION_PLAN.md
- Relevant files only.

Check:
- Build/type errors
- Console errors
- Public/private settings exposure
- RLS/API protection
- Admin permissions
- Checkout server-side recalculation
- Order saved before WhatsApp redirect
- Telegram notification after DB save
- Product/category DB source
- Mobile cart/checkout
- Broken links
- SEO basics
- Image performance
- Audit logging for sensitive actions

Do not:
- Rewrite code.
- Make broad refactors.
- Change schema without approval.
- Touch unrelated modules.

Deliverable:
Create or update:
LINE_COFFEE_V2_QA_REPORT.md

Report:
1. Checks run.
2. Passed items.
3. Issues found.
4. Severity.
5. Exact files/routes affected.
6. Recommended minimal fixes.
```

---

# 17. Commit Report Format

Every Codex / Claude task should end with this format:

```text
## Summary
- What was implemented/fixed.

## Changed Files
- file/path/example.tsx — what changed
- file/path/example.ts — what changed

## Checks Run
- npm run lint
- npm run build
- npm run typecheck
- Other relevant checks

## Risks / Notes
- Any risky area touched.
- Any assumptions.
- Any follow-up needed.

## Next Recommended Step
- The next smallest safe task.
```

---

# 18. Small Task Prompt Template

Use this when you want a very narrow fix.

```text
Use AGENTS.md strictly.

Small task:
[WRITE EXACT TASK HERE]

Rules:
- Minimal patch only.
- Read only necessary files.
- Do not rewrite full files.
- Do not touch unrelated modules.
- Do not change database unless explicitly required.
- Do not touch checkout/order/security/inventory unless explicitly required.
- Keep existing behavior.

Before editing:
1. Identify exact file(s).
2. Explain the smallest safe fix.

After editing:
1. List changed files.
2. Explain the fix.
3. Mention checks run.
```

---

# 19. Bug Fix Prompt Template

```text
Use AGENTS.md strictly.

Bug:
[DESCRIBE BUG]

Expected behavior:
[DESCRIBE EXPECTED BEHAVIOR]

Current behavior:
[DESCRIBE CURRENT BEHAVIOR]

Rules:
- Reproduce/trace the bug first.
- Identify exact files.
- Minimal patch only.
- Do not rewrite unrelated code.
- Do not add new features.
- Do not touch checkout/order/security/inventory unless bug is directly there.
- Preserve DB-first architecture.

After fixing:
1. Explain root cause.
2. List changed files.
3. Explain the fix.
4. Mention checks run.
5. Mention any remaining risk.
```

---

# 20. Refactor Prompt Template

Use only when refactor is truly needed.

```text
Use AGENTS.md strictly.

Refactor task:
[DESCRIBE REFACTOR]

Goal:
[WHY THIS REFACTOR IS NEEDED]

Rules:
- No behavior change unless explicitly stated.
- Minimal refactor.
- Do not rewrite entire module.
- Do not touch unrelated files.
- Keep public APIs compatible.
- Keep DB-first architecture.
- Add no new feature unless required.

Before editing:
1. Identify exact files.
2. Explain current problem.
3. Explain minimal refactor plan.

After editing:
1. List changed files.
2. Explain behavior preserved.
3. Mention checks run.
4. Mention risks.
```

---

# 21. Emergency Fix Prompt

Use when production is broken.

```text
Use AGENTS.md strictly.

Emergency fix:
[DESCRIBE PRODUCTION ISSUE]

Priority:
Restore working behavior with the smallest safe change.

Rules:
- Do not redesign.
- Do not refactor.
- Do not add features.
- Do not change schema unless absolutely required.
- Make smallest reversible patch.
- Protect checkout/order/customer data.
- Explain risk before touching sensitive logic.

After fixing:
1. State root cause if known.
2. State changed files.
3. State how to verify.
4. State rollback option.
```

---

# 22. Final Rule for All AI Coding Sessions

Every coding session must protect the core business flow:

```text
Customer can browse.
Customer can add to cart.
Customer can checkout.
Order saves to database.
Admin sees order.
WhatsApp redirect happens after database save.
Products/categories are database-controlled.
Private settings stay private.
Dashboard controls the website.
```

Never sacrifice this flow for visual polish.

Line Coffee V2 must be:

```text
Premium coffee e-commerce + real business control system.
```
