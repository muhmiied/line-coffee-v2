# Line Coffee V2 — Claude Code Instructions

Read this file completely before touching any code.
Then read: `AGENTS.md` → `LINE_COFFEE_V2_CURRENT_STATE_AUDIT.md` → `LINE_COFFEE_V2_BUILD_BLUEPRINT_FROM_OLD_UI.md`

---

## 1. Project Identity

**Brand:** Line Coffee — premium Egyptian coffee brand.
**Repo:** line-coffee-v2
**Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 + Supabase
**Deployment:** Vercel
**Database:** Supabase (PostgreSQL) — single source of truth. No MongoDB. No other DB.

---

## 2. Current State

The repo is at a **clean pre-UI checkpoint**.

What exists:
- Next.js 16 App Router foundation
- Supabase Auth + DB helpers (server / client / admin)
- Admin auth and permission system
- Protected `/dashboard` route skeleton
- Public route skeletons: `/`, `/products`, `/products/[slug]`, `/products/category/[slug]`
- Supabase migrations for core tables
- Full blueprint docs in root `.md` files

What does NOT exist yet:
- Any UI components
- Any visual design
- Any public page content
- Any dashboard modules

**Rule: Never assume a component or helper exists. Always check the file first.**

---

## 3. Brand Tokens — Use These Everywhere

```css
--lc-bg: #0b0806;
--lc-bg-deep: #070504;
--lc-surface: #120d09;
--lc-surface-soft: #1b140f;
--lc-gold: #b6885e;
--lc-gold-light: #d6a373;
--lc-cream: #f5e6d8;
--lc-cream-muted: #d6b79a;
--lc-brand-brown: #522500;
--lc-brand-beige: #ffdcc2;
--lc-white: #ffffff;
--lc-black: #000000;
```

**Never use raw hex values in components. Always use CSS variables or Tailwind tokens.**

---

## 4. Typography

- **English display/headings:** Playfair Display (Google Fonts)
- **Arabic:** Cairo (Google Fonts)
- **Body/UI:** System sans or Inter if needed for admin

Rules:
- Arabic text must use `dir="rtl"` and `font-family: Cairo`
- Do not mix Arabic and English randomly
- RTL layout must be tested on every customer-facing page
- Never use machine-translated Arabic — use natural Egyptian Arabic copy

---

## 5. Design Rules

### Public Website
- Dark luxury aesthetic — cinematic coffee mood
- Premium but not heavy — subtle motion only
- Gold/copper accents on CTAs and highlights
- Cream text on dark backgrounds
- Images carry the brand — use `next/image` always
- Hero images: use `priority` only when truly above the fold

### Admin Dashboard
- Dense, fast, clear — not decorative
- Readable contrast — no dark-on-dark text
- Tables and lists — not cards inside cards
- Every important action needs a confirmation

### Motion Rules
- Hover lift: `transform 180–240ms ease`
- Section reveal: `opacity + translateY` once per section
- Drawer: slide with opacity
- Skeleton: subtle pulse only
- NO full-screen loaders as launch blockers
- NO heavy parallax on every section
- NO animation that hides slow data loading
- Always add `prefers-reduced-motion` support

---

## 6. Data Rules — Critical

### Never Hardcode
- Product prices
- Product names or descriptions
- Product availability
- Category names or slugs
- Order totals
- Admin permissions

### Always Read From Supabase
- Products → `lib/db/products.ts`
- Categories → `lib/db/categories.ts`
- Site settings → `site_settings` table
- Media → `media_assets` table
- Page content → `website_pages` + `page_sections` tables

### Server vs Client
**Server handles:**
- Real price calculation
- Stock/availability check
- Order creation
- Discount validation
- Admin permission checks
- Shipping calculation

**Client can preview:**
- Selected variant
- Estimated subtotal
- Cart item count
- Custom blend display summary

---

## 7. Products & Categories

### Product Categories (from DB — do not hardcode)
- Turkish Blends (`turkish-blends`)
- Espresso Blends (`espresso-blends`)
- Easy Coffee (`easy-coffee`)
- Coffee Mix (`coffee-mix`)
- Cappuccino (`cappuccino`)
- Flavor Coffee (`flavor-coffee`)
- Make Your Espresso (`make-your-espresso`)
- Make Your Flavor (`make-your-flavor`)

### Turkish Blend Names
1. Velvet Roast
2. Cairo Nights
3. NOIR ROAST
4. CROWN BLEND

### Espresso Blend Names
1. HEAVY CREMA
2. AROMA BODY
3. HEADSHOT
4. BLACK LABEL

### Customize Blend Rule
- "Make Your Espresso" = espresso only
- "Make Your Flavor" = flavor coffee only
- Never apply customize builder to Turkish blends

### Deactivated Products
- Latte → deactivated, do not show
- Hot Chocolate → deactivated, do not show
- سحلب (Sahlab) → removed entirely, never re-add

### Flavor Groups Order (exact order for all UI)
```
1. الأساسي / Original LINE
   - فرنساوي / أوريجينال

2. sweets LINE / حلويات
   - شوكولاتة قطع، شوكولاتة، كراميل، فانيلا، لوتس، أوريو، كرز

3. مكسرات
   - لوز، فستق، بندق قطع، بندق

4. فواكه
   - فراولة، موز، مانجو، خوخ، توت، توت أزرق، تفاح، عنب، بطيخ، جوافة، أناناس، برتقال

5. Special Order / سبيشيل اوردر
   - جوز الهند، موكا، بينا كولادا، شيشة تفاح، شيشة عنب، هوت سيدر
```

---

## 8. Build Order (Phases)

Follow this order. Do not skip phases.

| Phase | What to build |
|-------|--------------|
| 1 | Brand Shell: global tokens + public layout + header + footer + mobile nav |
| 2 | Home Page: hero + trust strip + categories + best sellers + story + contact CTA |
| 3 | Products Browsing: `/products` + `/products/category/[slug]` + filters + product card |
| 4 | Product Detail: `/products/[slug]` + variants + price display |
| 5 | Cart: cart state + cart page + quantity controls + validation |
| 6 | Checkout: guest checkout + order creation + WhatsApp redirect + success page |
| 7 | Orders Dashboard: list + detail + status update |
| 8 | Catalog Dashboard: products + categories + variants admin |
| 9 | Media Studio: upload + list + alt text + page mapping |
| 10 | Builders: Make Your Espresso + Make Your Flavor |
| 11 | Content: about + contact + blog + reviews |
| 12 | Launch Hardening: mobile QA + RTL QA + RLS review + performance |

**Build one phase at a time. Run `npm run lint` + `npm run build` after each phase.**

---

## 9. Component Rules

### Folder Structure
```
components/
  public/
    layout/     ← header, footer, nav, announcement bar
    home/       ← hero, trust strip, categories, best sellers
    products/   ← product card, grid, filters
    cart/       ← cart drawer, cart item
    checkout/   ← checkout form, order review
    builders/   ← espresso builder, flavor builder
    content/    ← about, blog, reviews
  dashboard/
    layout/     ← sidebar, top bar, nav
    overview/   ← stats, recent orders
    orders/     ← order list, order detail
    products/   ← product form, variant manager
    media/      ← upload, media list
    shared/     ← shared admin components
  ui/
    button.tsx
    panel.tsx
    badge.tsx
    field.tsx
    empty-state.tsx
    skeleton.tsx
    drawer.tsx
    status-badge.tsx
```

### Component Rules
- Prefer **Server Components** for data reads
- Use **Client Components** only for real user interaction
- Never put server-only code in a client component
- Every component needs: loading state + empty state + error state
- Every icon-only button needs an `aria-label`
- Cards must not be nested inside cards

---

## 10. Routing

### Public Routes
```
/                           ← Home
/products                   ← Products listing
/products/[slug]            ← Product detail
/products/category/[slug]   ← Category page
/cart                       ← Cart
/checkout                   ← Checkout
/order-success/[orderNumber] ← Success
/track                      ← Order tracking
/about                      ← About
/blog                       ← Blog list
/blog/[slug]                ← Blog post
/contact                    ← Contact
/privacy-policy             ← Legal
/terms-of-use               ← Legal
```

### Dashboard Routes
```
/dashboard                  ← Overview
/dashboard/login            ← Admin login
/dashboard/orders           ← Orders list
/dashboard/orders/[id]      ← Order detail
/dashboard/products         ← Products list
/dashboard/products/new     ← Create product
/dashboard/products/[id]    ← Edit product
/dashboard/categories       ← Categories
/dashboard/media            ← Media Studio
/dashboard/customers        ← Customers
/dashboard/reviews          ← Reviews moderation
/dashboard/blog             ← Blog admin
/dashboard/settings         ← Site settings
/dashboard/admins           ← Admin users
```

---

## 11. Supabase Rules

- **Service role key** = server-only, never in client components
- **Anon key** = client-side reads only (public catalog)
- Use `lib/supabase/server.ts` for server components
- Use `lib/supabase/client.ts` for client components
- Use `lib/supabase/admin.ts` (service role) only in server actions/API routes
- RLS must be reviewed for every new table
- Use Supabase migrations — never edit DB directly

### Core Tables Already in DB
```
categories, products, product_variants, media_assets,
website_pages, page_sections, page_section_items,
customers, customer_addresses, orders, order_items,
site_settings, audit_logs, admin_roles, admin_permissions,
admin_role_permissions, admin_users
```

---

## 12. Contact & Business Info

- **WhatsApp orders:** +20 100 476 1171
- **Admin email:** m.sayed@abu-elhassan.com
- **Location:** Cairo, Egypt
- **Hours:** Sun–Thu 9AM–6PM
- **Instagram:** @linecoffee.eg
- **Facebook:** facebook.com/linecoffee

---

## 13. Before You Write Any Code

Checklist:
1. Read the relevant existing files first
2. Check `supabase/migrations/` for required tables
3. Check `lib/db/` for existing helpers — don't duplicate
4. Define: loading state + empty state + error state
5. Define: mobile behavior
6. Define: Arabic/RTL behavior if customer-facing
7. Define: server vs client boundary
8. Never hardcode prices, products, or permissions

---

## 14. After Writing Code

Checklist:
1. `npm run lint` — must pass
2. `npm run build` — must pass
3. Check browser console — no errors
4. Test on mobile width (375px)
5. Test Arabic text if customer-facing
6. Verify no hardcoded prices or product data
7. Verify service role not leaked to client
8. Update relevant `.md` docs if something changed

---

## 15. Security Rules

- Never expose `SUPABASE_SERVICE_ROLE_KEY` in client code
- Never trust client-sent prices — always recalculate server-side
- Never trust client-sent order totals
- Every admin mutation writes to `audit_logs`
- Admin routes must check `requireAdmin()` from `lib/auth/`
- RLS policies must exist on every table with customer data

---

## 16. WhatsApp & Order Flow

Order flow:
1. Customer fills checkout form
2. Server validates cart + calculates real price
3. Server creates order in DB with snapshot
4. Server sends Telegram notification (when configured)
5. Server returns WhatsApp URL with order summary
6. Customer is redirected to success page
7. Customer can open WhatsApp to confirm

**Database first. WhatsApp second. Never skip the DB step.**

---

## 17. What NOT To Do

- Do not paste code from the old V1 repo
- Do not restore deleted components or UI files
- Do not hardcode any product/price/category data
- Do not use MongoDB — Supabase only
- Do not add heavy animation before core flows work
- Do not add wishlist/search/account before checkout works
- Do not create all folders upfront — create as needed
- Do not add `framer-motion` unless clearly justified
- Do not build fake/decorative dashboard pages with no real data
- Do not use emojis as icons in UI
- Do not use literal machine-translated Arabic

---

*Last updated: 2026-06-12*
*Reference: LINE_COFFEE_V2_BUILD_BLUEPRINT_FROM_OLD_UI.md*
