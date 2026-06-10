# Line Coffee — UI Rules for Codex / Claude

These rules apply to every UI phase. They exist to prevent scope creep, accidental data layer changes, and regressions in non-UI code. Read this file before starting any UI phase.

---

## Scope Rules

**Never rewrite the whole app.**
Each phase targets one page, one component set, or one shared primitive. Touching everything at once creates hard-to-review diffs and breaks other pages.

**One page or section per phase.**
If a phase says "homepage redesign," only `app/(public)/page.tsx` and its new section components change. No other public pages, no header rewrite, no config changes unless explicitly listed in the phase spec.

**Never touch unless the phase explicitly permits it:**
- `app/dashboard/` — admin dashboard, login, protected layout
- `lib/db/` — DAL files (`products.ts`, `categories.ts`, `types.ts`)
- `lib/supabase/` — Supabase client files
- `lib/auth/` — admin auth helpers
- `supabase/migrations/` — schema migrations
- `next.config.ts` — Next.js config
- `app/layout.tsx` — root layout
- Any checkout, order, payment, inventory, or cart logic

---

## Data Rules

**Public UI must stay DB-first.**
All data on public pages must come from the existing DAL functions (`getPublicProducts`, `getPublicCategories`, `getPublicCategoryBySlug`, `getPublicProductBySlug`). Do not bypass the DAL.

**Use existing DAL outputs as-is.**
Do not add new fields to DAL functions, do not add new DB queries, do not add new SELECT columns during a UI phase. If a UI need requires a data change, that is a separate DAL phase — stop and report.

**Do not add fake data.**
No hardcoded product names, prices, category names, or placeholder content that isn't served from Supabase. Exception: static brand copy (story text, contact info) that has no DB table.

**Do not hardcode products or categories if DB data exists.**
If `getPublicProducts()` returns data, the page must render from that data. Never duplicate DB content in the JSX.

---

## Image Rules

**Image rendering is always conditional.**
`products.main_image_id` may be null for any product. Always gate image rendering with `{product.image_url && (...)}`. Never render a broken `<img>` or empty box when no image exists.

**Use `next/image` for all product images.**
`fill` prop inside a relative aspect-ratio container when dimensions are unknown. `width`/`height` props when both are known from the DB.

**Do not add remote image domains to `next.config.ts` during UI phases.**
The Supabase Storage domain (`*.supabase.co`) was already added in Phase 3H. Do not add other domains.

---

## Implementation Rules

**Minimal patches only.**
Change only the lines required for the phase goal. Do not reformat, rename, or restructure surrounding code that isn't being redesigned. Unnecessary diff noise makes review harder.

**Build and typecheck after every change.**
Run `npm run build` before reporting a phase complete. TypeScript errors must be zero. Build warnings must be reviewed.

**Report changed files before commit.**
Run `git status` and list every changed file. Confirm each file is expected for the phase. Flag any unexpected file to the user before committing.

**No `any` types.**
TypeScript `any` is not acceptable. Use the existing types in `lib/db/types.ts`. If a new type is needed, create it with proper typing.

**No `'use client'` on public pages.**
Public pages are Server Components. Data fetching happens directly in the async page component. Do not convert public pages to client components.

**`'use client'` only for interactive UI primitives.**
Client components are only acceptable for UI elements that require browser events (e.g. a mobile nav toggle, a variant selector with local state). Keep the client/server boundary explicit and minimal.

---

## Language Direction Rules

**One active language at a time. This is a hard rule.**
The website is fully bilingual but must show only one language in any given render. Do not display English and Arabic side-by-side or stacked in the same section by default.

**English mode:**
- All headings, labels, descriptions, and buttons render in English.
- Layout direction is LTR.
- Use the `_en` DB fields (`name_en`, `description_en`, etc.).

**Arabic mode:**
- All headings, labels, descriptions, and buttons render in Arabic.
- Layout direction is RTL. Apply `dir="rtl"` at the page or section container level, not inline per-word.
- Use the `_ar` DB fields (`name_ar`, `description_ar`, etc.).

**Do not mix languages in the same section.**
Avoid layouts that stack an English heading with an Arabic subtitle beneath it. Each section should read cleanly in one language.

**Exception — brand and product names.**
Official brand names (Line Coffee, BLACK LABEL, Gold Line, Classic Line, HEAVY CREMA) may remain as-is since they are part of the brand identity, not translated UI text.

**Null Arabic fields.**
If an `_ar` field is null in the DB and the active language is Arabic, fall back gracefully — either show the `_en` value or hide the element. Do not crash or show empty text nodes.

---

## Commit Rules

**Do not commit until the phase is fully validated.**
Validation means: `npm run build` passes, TypeScript clean, all expected pages render correctly with real data, and changed files match exactly what the phase spec listed.

**Commit message format:**
```
ui-<phase-number>: <short description>
```
Example: `ui-2: homepage redesign`

**Never force-push or amend published commits.**
Create new commits. If a previous commit needs a fix, add a follow-up commit.
