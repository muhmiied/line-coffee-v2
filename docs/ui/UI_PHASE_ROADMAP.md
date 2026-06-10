# Line Coffee — UI Phase Roadmap

Phases run sequentially. Each phase must build-pass and be committed before the next begins. No phase may violate the rules in `UI_RULES_FOR_CODEX_CLAUDE.md`.

---

## UI-0 — Blueprint Files and Rules

**Goal:** Establish the planning documents that govern all UI work. No app code changes.

**Files touched:**
- `docs/ui/LINE_COFFEE_UI_MASTER_PLAN.md` (create)
- `docs/ui/PUBLIC_PAGES_SECTION_MAP.md` (create)
- `docs/ui/UI_PHASE_ROADMAP.md` (create)
- `docs/ui/UI_RULES_FOR_CODEX_CLAUDE.md` (create)

**Files not allowed:**
- Any file outside `docs/ui/`

**Validation:**
- `git status` shows only new files under `docs/ui/`
- No app code, no migrations, no config changes

---

## UI-1 — Shared Public Design System Components

**Goal:** Create the reusable primitive components that all public pages will use. Fonts loaded, color tokens confirmed in Tailwind config, shared layout shell finalized.

**Files touched:**
- `app/(public)/layout.tsx` — confirm font loading and base shell
- `components/public/public-header.tsx` — redesign with brand fonts and colors
- `components/ui/` — create shared primitives: `ProductCard`, `CategoryCard`, `SectionHeading`, `PageHero` (structure only)
- `app/globals.css` — Playfair Display + Cairo font imports

**Files not allowed:**
- `app/dashboard/` (any file)
- `lib/db/` (any file)
- `supabase/` (any file)
- `next.config.ts`
- Any file outside `app/(public)/`, `components/`, `app/globals.css`

**Validation:**
- `npm run build` passes
- TypeScript clean
- No dashboard routes affected

---

## UI-2 — Homepage Redesign

**Goal:** Redesign `app/(public)/page.tsx` using the section map: Hero, Categories, Featured Products, Story preview, Features, Contact CTA. Uses real DB data already being fetched.

**Files touched:**
- `app/(public)/page.tsx`
- Any new section components created under `components/public/home/`

**Files not allowed:**
- `lib/db/` (any file) — use existing `getPublicCategories()` and `getPublicProducts()` as-is
- `app/dashboard/` (any file)
- `supabase/` (any file)
- Other public pages

**Validation:**
- `npm run build` passes
- TypeScript clean
- All 6 homepage sections render with real data
- No regressions on other public routes

---

## UI-3 — Product Cards and Listing / Category Redesign

**Goal:** Redesign product card component and apply it to `app/(public)/products/page.tsx` and `app/(public)/products/category/[slug]/page.tsx`. Cards use the boutique layout: image slot, name EN/AR, price, weight chips.

**Files touched:**
- `app/(public)/products/page.tsx`
- `app/(public)/products/category/[slug]/page.tsx`
- `components/ui/ProductCard.tsx` (or equivalent)
- `components/ui/CategoryCard.tsx` (or equivalent)

**Files not allowed:**
- `lib/db/` (any file)
- `app/(public)/products/[slug]/page.tsx` — reserved for UI-4
- `app/dashboard/` (any file)
- `supabase/` (any file)

**Validation:**
- `npm run build` passes
- TypeScript clean
- Product listing and category pages render correctly with real data
- Conditional image rendering still works (image_url null = no image shown)

---

## UI-4 — Product Detail Redesign

**Goal:** Redesign `app/(public)/products/[slug]/page.tsx`. Image area prominent, name EN/AR with Playfair/Cairo, description, variant selector chips, price display, WhatsApp CTA placeholder.

**Files touched:**
- `app/(public)/products/[slug]/page.tsx`
- Any new components under `components/public/product/`

**Files not allowed:**
- `lib/db/` (any file) — use existing `getPublicProductBySlug()` as-is
- `app/dashboard/` (any file)
- `supabase/` (any file)
- Cart / order / checkout logic of any kind

**Validation:**
- `npm run build` passes
- TypeScript clean
- Detail page renders with real product data
- Null image still renders cleanly (no broken image, no empty box)
- Variants display correctly

---

## UI-5 — About, Contact, and Blog Shell

**Goal:** Create `app/(public)/about/page.tsx`, `app/(public)/contact/page.tsx`, and `app/(public)/blog/page.tsx` (shell only). About uses storytelling sections. Contact uses the Glass Contact Hub direction. Blog is a visual shell with the correct layout and empty-state — no real posts data yet. Add all three to the header nav.

**Files touched:**
- `app/(public)/about/page.tsx` (create)
- `app/(public)/contact/page.tsx` (create)
- `app/(public)/blog/page.tsx` (create — shell/empty state only)
- `components/public/public-header.tsx` — add About, Blog, and Contact nav links

**Files not allowed:**
- `lib/db/` (any file)
- `app/dashboard/` (any file)
- `supabase/` (any file)
- Any existing public pages

**Validation:**
- `npm run build` passes
- TypeScript clean
- All three new pages render without errors
- Header nav links are correct (Home, Products, About, Blog, Contact)

---

## UI-6 — Responsive and Mobile Polish

**Goal:** Pass through all redesigned public pages and ensure they are fully responsive: mobile-first grids, touch-friendly tap targets, correct Arabic RTL layout at small viewports, header collapses correctly.

**Files touched:**
- Any public page or component that fails responsive review
- `components/public/public-header.tsx` — mobile nav if needed

**Files not allowed:**
- `app/dashboard/` (any file)
- `lib/db/` (any file)
- `supabase/` (any file)

**Validation:**
- `npm run build` passes
- TypeScript clean
- Manually tested at 375px, 768px, 1280px viewports
- No horizontal overflow
- Arabic text correct direction on all breakpoints

---

## UI-7 — Final Public QA

**Goal:** Full end-to-end QA pass of all public pages. Check real Supabase data, all conditional branches (null image, empty category, unknown slug → 404), typography, color, spacing, bilingual text. Fix any regressions.

**Files touched:**
- Any file with a confirmed regression or visual defect found during QA

**Files not allowed:**
- `app/dashboard/` (any file)
- `lib/db/` (any file)
- `supabase/` (any file)
- Any schema or migration

**Validation:**
- `npm run build` passes
- TypeScript clean
- All public routes respond correctly with live Supabase data
- 404 pages work
- No console errors
