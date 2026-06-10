# Line Coffee — UI Master Plan

## Visual Direction

Premium Cozy Minimal.

Line Coffee is a warm boutique coffee brand. The UI must feel elegant and clean without being crowded. Premium but approachable — a handcrafted product sold with care, not a corporate chain.

Every page should feel like walking into a well-lit specialty coffee shop: warm, quiet, intentional.

---

## Brand Colors

| Name        | Hex       | Usage |
|-------------|-----------|-------|
| Dark Brown  | `#522500` | Primary brand depth, dark backgrounds, headings, accents |
| Beige       | `#FFDCC2` | Controlled accent — buttons, highlights, thin borders, badges; NOT large backgrounds or card fills |
| Black       | `#000000` | Deep contrast, dark surfaces, body text |
| White       | `#FFFFFF` | Text contrast, clean space, card backgrounds on dark layouts |

Supporting tones allowed: deep coffee brown, espresso brown, muted gold, warm amber, cream/off-white, soft caramel, low-opacity beige.

Gradients should stay within the warm brown-beige-black range. Avoid cool grays or blues. Avoid full-screen bright beige areas — beige is an accent, not a dominant background.

---

## Typography

| Language | Font            | Notes |
|----------|-----------------|-------|
| English  | Playfair Display | Serif, elegant, premium feel for headings |
| Arabic   | Cairo            | Clean, modern Arabic, pairs well with Playfair |

- Headings: Playfair Display (EN), Cairo (AR)
- Body: System sans-serif stack or Cairo for both languages
- Arabic text must always use `dir="rtl"` on its containing element
- The site is fully bilingual but shows **one active language at a time** — see Language Direction below

---

## Design Language

- **Large whitespace** — breathing room between sections; never cramped
- **Soft rounded cards** — `rounded-2xl` or larger for product and category cards
- **Warm gradients** — dark brown to near-black for heroes; cream/off-white for lighter surfaces; avoid large flat beige blocks
- **Photography-ready** — product cards and hero sections designed with image slots from day one; text-only is the fallback when no image is present
- **Boutique product cards** — image dominant, name and price below; no clutter
- **Glass / shadow / shine** — used selectively on floating panels, CTAs, hero elements, and hover states; never applied to every card
- **Floating real product objects** — product images placed directly in the layout as physical objects with soft shadows; not trapped inside card boxes
- **Section flow** — sections visually blend into each other; use overlapping cards, soft gradients, and organic transitions; no hard horizontal separator lines between every section

---

## Language Direction

The website is fully bilingual but shows **one active language at a time**. This is a hard rule.

- **English mode** — all headings, labels, descriptions, and buttons in English; layout is LTR
- **Arabic mode** — all headings, labels, descriptions, and buttons in Arabic; layout is RTL
- Do not display English and Arabic together in the same section by default
- Exception: official brand/product names (e.g. Line Coffee, BLACK LABEL, Gold Line) may remain unchanged as part of brand identity

---

## Public Pages to Redesign

The following public pages will receive full UI redesigns in later phases:

1. Home (`/`)
2. Products listing (`/products`)
3. Category page (`/products/category/[slug]`)
4. Product detail (`/products/[slug]`)
5. About (`/about` — to be created)
6. Contact (`/contact` — to be created)
7. Blog (future — not in near-term roadmap)

---

## Hard Rules

- UI phases must not rewrite DB schema, migrations, DAL, or data layer logic.
- UI phases must not touch checkout, orders, payments, inventory, or auth flows.
- UI phases must not touch the admin dashboard.
- All public pages must remain DB-first: data comes from existing DAL functions; no fake data, no hardcoded product names.
- Each UI phase targets one page or one shared component set — not the whole site.
