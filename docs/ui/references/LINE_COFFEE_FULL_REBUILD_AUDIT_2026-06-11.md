# LINE COFFEE Full Code + Visual Rebuild Audit

Date: 2026-06-11  
Project path: `D:\Graphic\LINE COFFEE\New folder\LINE COFFEE 1`  
Purpose: مرجع كامل لإعادة بناء نفس روح LINE COFFEE البصرية والنظامية داخل مشروع جديد، مع خطة تطوير أحدث وأنظف.

---

## 1. Executive Summary

المشروع الحالي هو متجر قهوة premium مبني بـ Next.js App Router + React + TypeScript + TailwindCSS v4 + Supabase.

الشكل البصري قوي ومميز:

- Dark luxury coffee mood.
- صور full-bleed داكنة مع overlays دافئة.
- ألوان espresso/gold/cream.
- خطوط Playfair للإنجليزي وCairo للعربي.
- هيدر زجاجي ثابت، hero سينمائي، كروت منتجات compact، وأدمن داكن عملي.

النظام الوظيفي متقدم نسبيًا:

- كتالوج منتجات وفئات.
- كارت وwishlist بـ Zustand + sync API.
- checkout بحساب مستخدم، إعادة تسعير server-side، خصومات، شحن، واتساب، تيليجرام.
- stock validation للمنتجات والخلطات المخصصة.
- custom espresso blend builder.
- custom flavor builder.
- admin dashboard للطلبات، المنتجات، الخصومات، البلوج، الميديا، الإعدادات، العملاء، المراجعات.
- Media Studio / content builder لتعديل صور ومحتوى وأوفرلايز الأقسام.

أكبر قيمة يجب نقلها للمشروع الجديد:

1. الهوية البصرية السينمائية الداكنة.
2. نظام media/content builder.
3. custom product configurators.
4. checkout server-side validation.
5. admin UX المتخصص للمتجر.

أكبر شيء يجب تحسينه في النسخة الجديدة:

1. فصل i18n/content عن المكونات.
2. تقسيم ملفات monolith كبيرة.
3. توحيد design tokens.
4. تحسين mobile product discovery.
5. إضافة lint/test/CI حقيقي.
6. منع تسريب `error.message` من APIs.
7. تقليل الاعتماد على Unsplash fallback/public external images.

---

## 2. Scope Inspected

تمت مراجعة:

- App Router pages/layouts/routes.
- Home, products, product detail, checkout, auth, dashboard, admin.
- Supabase clients/services/config.
- Cart/wishlist stores.
- Checkout and discount APIs.
- Media Studio APIs and media config.
- Product system/configuration/espresso intelligence.
- Tailwind/global CSS/brand tokens.
- Supabase migrations and SQL scripts overview.
- Visual rendering via local dev server on desktop/mobile/RTL.

لم يتم تعديل كود الموقع.

---

## 3. Project Size Snapshot

Approximate non-generated code/assets outside `node_modules`, `.next`, and `output`:

| Type | Files | Lines |
|---|---:|---:|
| `.tsx` | 146 | 26,797 |
| `.ts` | 106 | 12,378 |
| `.sql` | 43 | 6,416 |
| `.css` | 1 | 836 |
| `.md` | 6 | 2,160 |
| assets/fonts/images/svg/json | multiple | large asset footprint |

Largest files / refactor candidates:

| File | Lines | Notes |
|---|---:|---|
| `app/dashboard/admin/banners/page.tsx` | 1,861 | Media Studio/admin editor monolith |
| `lib/media.ts` | 1,373 | Media schema, section config, effects, fallbacks |
| `app/products/page.tsx` | 1,337 | Product listing + custom espresso + custom flavor in one file |
| `app/api/checkout/route.ts` | 916 | Critical checkout domain logic |
| `app/checkout/page.tsx` | 833 | Checkout UI/client logic |
| `components/layout/header.tsx` | 714 | Header/search/mobile/user/language mixed |
| `lib/config/customization.ts` | 692 | Pricing/options/fallback data |
| `app/dashboard/admin/products/page.tsx` | 667 | Admin products UI |

---

## 4. Validation Results

### Build

Passed:

```bash
npm run build
```

Result:

- Next.js 16.2.4 production build passed.
- TypeScript passed.
- 59 static/dynamic route entries generated.

### Lint

Failed:

```bash
npm run lint
```

Reason:

`eslint` is referenced in `package.json` but is not installed/resolvable:

```txt
'eslint' is not recognized as an internal or external command
```

This is a tooling gap, not a runtime build failure.

### Visual Browser Checks

Local dev server:

```txt
http://localhost:3001
```

Checked:

- `/`
- `/products`
- `/products?category=make-your-espresso`
- `/about`
- `/contact`
- `/` mobile 390x844
- `/products` mobile 390x844
- `/` Arabic RTL mobile/desktop

Observed:

- No horizontal overflow detected in checked pages.
- No broken images detected in checked pages.
- RTL language switch works.
- Console warning detected for a `next/image fill` parent using `position: sticky`.

Screenshots saved:

- `output/audit-visuals/home-1440x900.png`
- `output/audit-visuals/products-1440x900.png`
- `output/audit-visuals/custom-espresso-1440x900.png`
- `output/audit-visuals/about-1440x900.png`
- `output/audit-visuals/contact-1440x900.png`
- `output/audit-visuals/home-390x844.png`
- `output/audit-visuals/products-390x844.png`
- `output/audit-visuals/home-ar-1440x900.png`
- `output/audit-visuals/home-ar-390x844.png`

---

## 5. Visual Identity To Reuse

### Current Live Palette

The implemented UI uses a darker cinematic palette than the original AGENTS brand tokens.

Core implemented tokens in `app/globals.css`:

- Coffee black: `#0B0806`
- Coffee deep: `#120D09`
- Coffee dark: `#15100B`
- Coffee surface: `#1B140F`
- Gold: `#B6885E`
- Gold light: `#D6A373`
- Cream: `#F5E6D8`
- Cream muted: `#D6B79A`
- Cream dim: `#B79B85`

Original brand tokens from project rules:

- Primary Brown: `#522500`
- Primary Beige: `#FFDCC2`
- Neutral: `#000000`, `#FFFFFF`

Recommendation for new project:

Use the implemented cinematic palette as the runtime UI palette, but keep `#522500` and `#FFDCC2` as brand anchor colors. This preserves the current look while respecting the brand rules.

### Typography

Implemented:

- English: Playfair Display via local font files.
- Arabic: Cairo via `next/font/google`.
- `html[lang="ar"]` overrides body/headings/buttons/inputs to Cairo.

Reusable rules:

- Big editorial headings in Playfair.
- Arabic headings in Cairo with slightly taller line-height.
- Body text muted cream/gold, never pure gray.
- No negative letter-spacing.
- Long Arabic strings need explicit responsive constraints.

### Visual Language

Rebuild these exact visual patterns:

- Fixed top announcement + glass header.
- Full-bleed hero with dark overlay, side gradient, bottom fade, subtle vignette.
- Warm gold CTA buttons with slight lift.
- Dark glass panels with thin gold borders.
- Product cards with image vignette and compact three-size pricing.
- Rounded image cards, 12-16px radius in current app.
- Section dividers using gold line/radial glow.
- Motion mostly fade/up/crossfade; avoid bouncy motion.
- WhatsApp floating CTA.
- Dark admin dashboard with compact sidebar and gold active states.

Avoid in new project:

- Generic white ecommerce cards.
- Blue/green SaaS palette.
- Over-bright success blocks.
- Random decorative gradients unrelated to coffee/brand.
- Excessive animation.

---

## 6. UX + Page Audit

### Home

Files:

- `app/page.tsx`
- `components/home/hero-section.tsx`
- `components/home/hero-background.tsx`
- `components/home/categories-section.tsx`
- `components/home/story-section.tsx`
- `components/home/best-sellers-section.tsx`
- `components/home/blog-section.tsx`
- `components/home/testimonials-section.tsx`
- `components/home/instagram-section.tsx`
- `components/home/contact-section.tsx`

Strengths:

- Strong first impression.
- Full-bleed premium hero works well on desktop.
- Media-driven hero/content loading gives CMS flexibility.
- Section order/visibility can be controlled via `site_settings`.
- Category grid and best sellers support fallback data.

Issues:

- `WordByWord` creates text extraction like `ShopbyCategory` / `تسوقحسبالفئة`; visually spacing is acceptable, but DOM/SEO/screen-reader text loses spaces.
- Hero counters can show `0+`, `0h`, `0%` during screenshots/mobile initial view.
- Some fallback text/images are hardcoded inside components.
- Heavy reliance on external Unsplash fallback images.

Recommended rebuild:

- Use content blocks from CMS/DB for all home sections.
- Keep the hero overlay system, but make content animation accessibility-safe.
- For animated counters, render final value by default and animate only visual transform, or hide until hydrated/in-view.
- Replace `WordByWord` with spacing-preserving text rendering or `aria-label` plus hidden plain text.

### Products

Files:

- `app/products/page.tsx`
- `components/pages/products/products-hero.tsx`
- `components/products/product-card.tsx`
- `components/products/premium-configurator.tsx`

Strengths:

- Clear category taxonomy.
- Product card visual style is premium and compact.
- Custom espresso and flavor configurators are a strong differentiator.
- Product fallback system prevents empty storefront.

Issues:

- `app/products/page.tsx` is too large and mixes listing, categories, search, custom espresso, custom flavor, business logic, and UI.
- On mobile, the full category list appears before product cards, pushing products below the fold.
- Category UI should become chips/tabs/drawer on mobile.
- Some product fallback/category data is duplicated between config and UI.

Recommended rebuild:

- Split into:
  - `ProductCatalogPage`
  - `CategoryRail`
  - `ProductGrid`
  - `ProductSearch`
  - `MakeYourEspressoBuilder`
  - `MakeYourFlavorBuilder`
  - `useCatalogProducts`
  - `useCustomOptions`
- Mobile products should show horizontal category chips + product grid first, with full filters in drawer.
- Keep product card proportions and gold/brown styling.

### Product Detail

File:

- `components/products/product-detail.tsx`

Strengths:

- Good image gallery.
- Size selector and stock states are clear.
- Assurance cards fit premium coffee ecommerce.

Issues:

- Review count/rating appears static.
- Share button has no implemented behavior.
- Stock/client limits are present but final trust belongs to checkout route.

Recommended rebuild:

- Connect rating/reviews to DB.
- Implement share API/fallback copy.
- Keep server-side price/stock validation authoritative.

### Cart + Wishlist

Files:

- `lib/store/cart.ts`
- `lib/store/wishlist.ts`
- `components/cart/cart-drawer.tsx`
- `components/wishlist/wishlist-drawer.tsx`
- `app/api/cart/*`
- `app/api/wishlist/*`

Strengths:

- Zustand persisted cart.
- Owner sync support.
- Custom product stock limit checks in client store.
- Drawer UX fits ecommerce.

Risks:

- Client store stores prices; checkout correctly recalculates, but new project must keep this invariant.
- Sync APIs need consistent safe errors and rate limits in production.

Recommended rebuild:

- Treat client cart as draft only.
- On checkout, rehydrate all prices/stock server-side.
- Add cart item schema validation with Zod.

### Checkout

Files:

- `app/checkout/page.tsx`
- `app/api/checkout/route.ts`
- `lib/config/shipping.ts`
- `lib/custom-stock.ts`
- `supabase/migrations/016_custom_checkout_stock_deduction.sql`

Strengths:

- Account-required checkout.
- Server recalculates prices.
- Validates product visibility, size availability, stock, custom item pricing, custom inventory.
- Checks assigned-email discounts server-side.
- Deducts product stock using optimistic lock.
- Deducts custom beans/flavors through `deduct_checkout_stock` RPC.
- Creates WhatsApp order URL and Telegram notification.

High-risk issues:

- `app/api/checkout/route.ts` returns raw `error.message` in the catch response.
- Order + order_items + stock deduction is not a single DB transaction. It manually deletes the order on failure, but order_items/custom stock/discount usage can still become partially inconsistent in edge failures.
- Discount usage increment is read/update, not atomic.
- Product stock restore handles normal products; custom beans/flavors restoration on cancellation is not clearly mirrored.

Recommended rebuild:

- Move checkout to a Supabase RPC/transaction for:
  - validate cart
  - create order
  - create order items
  - deduct all stock
  - increment discount usage
- Return stable public error codes/messages.
- Keep full error details in server logs only.
- Add idempotency key per checkout attempt.

### Auth + User Dashboard

Files:

- `lib/context/auth.tsx`
- `lib/auth/session.ts`
- `app/auth/*`
- `app/dashboard/*`

Strengths:

- SSR initial auth state.
- Admin detection centralized through `isAdminEmail`.
- User profile/address/order pages exist.

Risks:

- Admin authorization is single-email based.
- Better future model: roles table or profile role with RLS and server validation.

Recommended rebuild:

- Add `profiles.role` or `admin_users` table.
- Keep email fallback only for bootstrap admin.
- Add route-level `requireAdminUser` for admin pages where possible.

### Admin Dashboard

Files:

- `app/dashboard/admin/layout.tsx`
- `app/dashboard/admin/page.tsx`
- `app/dashboard/admin/orders/page.tsx`
- `app/dashboard/admin/products/page.tsx`
- `app/dashboard/admin/banners/page.tsx`
- `app/dashboard/admin/discounts/page.tsx`
- `app/dashboard/admin/blog/page.tsx`
- `app/dashboard/admin/settings/page.tsx`
- `app/api/admin/*`

Strengths:

- Admin shell visually strong and dense.
- Useful modules: orders, products, categories, beans, flavors, customers, messages, reviews, discounts, blog, media, settings.
- Pending order badge and notification center concept.
- Media Studio is a big competitive feature.

Issues:

- Several admin pages are large monolith files.
- Some APIs return raw DB errors.
- Admin search UI in layout appears decorative/global but not wired to all modules.
- Mobile admin has horizontal nav, acceptable but could get cramped.

Recommended rebuild:

- Use module folders:
  - `admin/orders`
  - `admin/catalog`
  - `admin/media-studio`
  - `admin/settings`
- Add server-side action/API layer with shared `guardAdmin()`.
- Add shared `safeJsonError()`.
- Add audit log table for admin actions.

### Media Studio / Content Builder

Files:

- `lib/media.ts`
- `app/dashboard/admin/banners/page.tsx`
- `app/api/media/route.ts`
- `app/api/admin/media-studio/*`
- `app/api/admin/media/upload/route.ts`
- `supabase/migrations/010_section_media_editor.sql`
- `supabase/migrations/011_website_content_builder.sql`

Strengths:

- Excellent foundation for a visual CMS.
- Supports section keys, usage areas, slides, content JSON, layout JSON, visual effects, device visibility, timing windows.
- Upload validation checks MIME and size.
- Shared `HeroBackground` helps parity between admin/live.

Issues:

- `lib/media.ts` is too large and mixes config/types/helpers/fallbacks/effects.
- Media Studio page is very large.
- Public `/api/media` uses service role if available and silently returns empty data on failure. Good for UX, but can hide production data issues.
- Unsplash fallback means new project may visually drift from real brand assets.

Recommended rebuild:

- Split media system:
  - `media/types.ts`
  - `media/sections.ts`
  - `media/effects.ts`
  - `media/fallbacks.ts`
  - `media/public-loader.ts`
- Store real default assets in project or Supabase bucket.
- Add media health dashboard: missing image, too-small image, inactive section, schedule status.

---

## 7. Architecture Audit

### Current Architecture

Frontend:

- Next.js App Router.
- Mostly client components for interactive storefront/admin.
- TailwindCSS v4 through `app/globals.css`.
- Framer Motion for transitions.
- Zustand for cart/wishlist.
- Radix/shadcn-style UI primitives.

Backend:

- Next route handlers under `app/api`.
- Supabase SSR client for session.
- Supabase service-role admin client for privileged server actions.
- SQL migrations under `supabase/migrations`.
- Legacy/seed scripts under `scripts`.

Data:

- Products/categories/product_sizes.
- Cart/wishlist.
- Orders/order_items.
- Profiles/addresses/notifications.
- Discounts with assigned emails.
- Banners/media/content builder.
- Coffee beans/flavor bases/flavor options.
- Blog/testimonials/contact messages/site settings.

Good architecture decisions:

- `server-only` on admin/server clients.
- Server-side checkout validation.
- RLS migrations exist.
- Discount table locked down in migration 015.
- Custom stock deduction RPC is security-definer and service-role only.

Architecture debt:

- Too much business logic in React pages.
- Duplicate service/action/API patterns.
- Some older scripts can reintroduce stale demo data.
- Content/i18n is scattered across components and configs.
- Missing test harness.
- Missing lint dependency.

---

## 8. Security + Production Findings

### Critical

No critical runtime blocker found during build/visual audit.

### High

1. Raw DB/internal errors returned by multiple APIs.

Affected examples:

- `app/api/checkout/route.ts`
- `app/api/admin/products/route.ts`
- `app/api/admin/products/[productId]/route.ts`
- `app/api/admin/settings/public/route.ts`
- `app/api/admin/settings/whatsapp/route.ts`
- `app/api/admin/media-studio/route.ts`
- `app/api/contact/route.ts`
- `app/api/profile/route.ts`

Risk:

- Leaks schema names, DB errors, implementation details.

Recommended fix:

- Add shared `safeJsonError(error, publicMessage, status)` helper.
- Log internal error server-side only.

2. Checkout is multi-step without one transaction.

Affected:

- `app/api/checkout/route.ts`

Risk:

- Partial order/order_items/stock/discount state if a later step fails.

Recommended fix:

- Move checkout mutation into one DB RPC transaction with idempotency key.

3. Admin auth is hardcoded email.

Affected:

- `lib/config/site.ts`
- `isAdminEmail()`
- `app/api/admin/*`
- `app/dashboard/admin/layout.tsx`

Risk:

- No scalable roles/permissions.

Recommended fix:

- Use `admin_users` or `profiles.role`.
- Keep env/email bootstrap only.

### Medium

4. Lint script is broken.

Affected:

- `package.json`

Risk:

- No static quality gate.

Recommended fix:

- Add ESLint config/dependency compatible with Next 16, or remove script until configured.

5. Monolithic files slow future development.

Affected:

- `app/products/page.tsx`
- `app/dashboard/admin/banners/page.tsx`
- `lib/media.ts`
- `app/api/checkout/route.ts`

Risk:

- Hard to extend, test, and safely modify.

Recommended fix:

- Split by feature/domain.

6. Mobile product discovery is weak.

Affected:

- `app/products/page.tsx`

Risk:

- Category panel consumes first mobile viewport; product cards are delayed.

Recommended fix:

- Horizontal chips + drawer filters on mobile.

7. Animated counters visible as zero.

Affected:

- `components/ui/animated-counter.tsx`
- `components/home/hero-section.tsx`

Risk:

- Premium feel drops, especially in mobile/RTL screenshots.

Recommended fix:

- Render final value server-side/static, animate only when client ready.

8. `WordByWord` removes semantic spaces.

Affected:

- `components/ui/motion-primitives.tsx`
- `components/home/categories-section.tsx`

Risk:

- Screen readers/SEO/text extraction show joined words.

Recommended fix:

- Include literal spaces in text nodes or use accessible hidden plain text.

9. `next/image fill` parent warning with sticky parent.

Affected likely:

- `components/pages/about/about-journey.tsx`

Risk:

- Console noise and possible layout issues.

Recommended fix:

- Wrap sticky container in separate outer sticky element and keep image parent `relative`.

### Low

10. Unsplash fallback dependency.

Affected:

- `components/home/*`
- `lib/media.ts`
- `lib/config/product-system.ts`
- `app/blog/page.tsx`

Risk:

- External availability/brand mismatch.

Recommended fix:

- Ship branded fallback assets locally or via Supabase storage.

11. Some UI color exceptions.

Examples:

- WhatsApp green.
- Red sale/error badges.
- Green stock badge.

Risk:

- Mostly acceptable due semantic meaning, but should be tuned to brand.

Recommended fix:

- Use warmer semantic colors or tokenized status palette.

12. `images.unoptimized = true`.

Affected:

- `next.config.mjs`

Risk:

- Performance tradeoff, no Next image optimization.

Recommended fix:

- For production, configure remote patterns and image optimization/CDN strategy.

### Deferred

13. Add tests.

Needed:

- Checkout unit/integration tests.
- Discount assignment tests.
- Stock conflict tests.
- Custom blend/custom flavor pricing tests.
- Admin route guard tests.
- Visual regression tests for desktop/mobile/RTL.

14. Add observability.

Needed:

- Structured server logs.
- Checkout event logs.
- Admin audit logs.
- Error monitoring.
- Order notification delivery status.

---

## 9. Rebuild Specification For New Project

Use this section as the handoff prompt/spec for a new project.

### Brand Brief

Build a premium dark luxury coffee ecommerce app inspired by LINE COFFEE.

The app must feel:

- boutique coffee shop
- luxury cafe
- warm Egyptian premium brand
- cinematic
- cozy
- minimal
- professional

Use:

- `#0B0806` black coffee background
- `#120D09`, `#15100B`, `#1B140F` surfaces
- `#522500` brand brown
- `#FFDCC2` brand beige
- `#B6885E`, `#D6A373` gold accents
- `#F5E6D8`, `#D6B79A` text

Typography:

- English headings: Playfair Display
- Arabic: Cairo
- Body: readable, spacious, warm cream tones

Motion:

- fade
- soft crossfade
- slight hover lift
- no bouncy/flashy animation

### New Architecture Target

Recommended stack:

- Next.js App Router
- React
- TypeScript strict
- TailwindCSS
- Supabase
- Zod validation
- Zustand only for local draft cart UI
- Server actions or route handlers for mutations
- Playwright visual regression
- ESLint + Prettier + CI

Suggested folder shape:

```txt
app/
  (storefront)/
  (auth)/
  dashboard/
  api/
components/
  brand/
  layout/
  storefront/
  products/
  checkout/
  admin/
  media-studio/
features/
  catalog/
  cart/
  checkout/
  discounts/
  orders/
  media/
  i18n/
  auth/
lib/
  supabase/
  config/
  validation/
  errors/
  money/
  stock/
supabase/
  migrations/
tests/
```

### Required Storefront Pages

1. Home
   - cinematic hero slider
   - categories
   - feature pills
   - story section
   - best sellers
   - testimonials
   - blog highlights
   - contact CTA

2. Products
   - mobile-first category chips
   - filters/search
   - product grid
   - product cards with sizes
   - custom espresso builder route/state
   - custom flavor builder route/state

3. Product Detail
   - image gallery
   - size selector
   - stock state
   - wishlist/share
   - add to cart
   - related products

4. Cart Drawer
   - draft cart
   - quantity controls
   - custom item summaries
   - checkout CTA

5. Checkout
   - login required
   - address/profile autofill
   - discount code
   - shipping calculation
   - payment method
   - WhatsApp summary
   - server-side validation

6. Track Order
   - order lookup
   - timeline
   - WhatsApp support

7. Blog/About/Contact/Reviews
   - same cinematic page hero system

### Required Admin Modules

1. Overview
   - sales/order/customer cards
   - pending orders
   - recent orders

2. Orders
   - status workflow
   - cancellation reason
   - WhatsApp notification
   - stock restore

3. Products
   - products, categories, product sizes, visibility, stock

4. Customization
   - coffee beans
   - flavor bases
   - flavor options
   - stock per custom ingredient

5. Discounts
   - percentage/fixed
   - min order
   - max uses
   - assigned emails
   - expiry

6. Media Studio
   - section list
   - image upload
   - content fields
   - overlay/effects
   - object position
   - mobile image
   - schedule
   - preview parity with live UI

7. Blog/Reviews/Contact Messages

8. Settings
   - public site settings
   - announcement bar
   - WhatsApp
   - free shipping
   - SEO defaults

### Required Database Concepts

Core tables:

- `profiles`
- `admin_users` or `profiles.role`
- `categories`
- `products`
- `product_sizes`
- `cart_items`
- `wishlist_items`
- `orders`
- `order_items`
- `discounts`
- `site_settings`
- `banners` or `media_items`
- `coffee_beans`
- `flavor_bases`
- `flavor_options`
- `blog_posts`
- `testimonials`
- `contact_messages`
- `notifications`
- `admin_audit_logs`
- `checkout_attempts`

Critical RPCs:

- `create_checkout_order(payload, idempotency_key)`
- `deduct_checkout_stock(...)`
- `restore_order_stock(order_id)`

RLS:

- Public read only for visible products/categories/published content.
- Users only read/update own profile/cart/wishlist/orders.
- Discounts not publicly listable.
- Admin writes via service role/API only.
- Never expose service role to client.

---

## 10. Exact Visual Patterns To Recreate

### Header

- Fixed stack: announcement bar then header.
- Header can be transparent over hero, glass after scroll/non-hero pages.
- Desktop nav centered.
- Logo left.
- Actions right: language, search, wishlist, cart, account.
- Mobile: logo, cart, menu.
- Use dark scrim on transparent state.

### Hero

- Height: around `86svh`, min 620 desktop, adjusted mobile.
- Background image full-bleed.
- Overlay layers:
  - black opacity
  - vignette
  - bottom fade
  - side gradient behind text
  - ambient gold glow
  - optional grain
- Content max width around 35-38rem.
- H1 huge Playfair/Cairo, cream.
- CTA primary gold gradient.
- CTA secondary outline glass.
- Stats below with gold numbers.

### Product Card

- Card background: gradient `#1B140F -> #15100B -> #0B0806`.
- Border: `#B6885E` at 12-18%.
- Image height compact.
- Image overlay: bottom vignette + warm multiply.
- Badges: new/best/sale.
- Wishlist circle top right.
- Quick Add slides up on desktop, visible on mobile.
- Three size price boxes.

### Admin

- Background: `#0B0806`.
- Sidebar: near-black, 215px desktop.
- Active nav: gold gradient/outline.
- Top bar fixed with compact search/language/bell/avatar.
- Tables/forms must be dense, not marketing-like.

---

## 11. Priority Implementation Plan For New Project

### Phase 1: Foundation

- Install Next/TS/Tailwind/Supabase.
- Add design tokens in CSS variables.
- Add Playfair/Cairo fonts.
- Add i18n provider with RTL support.
- Add `safeJsonError`.
- Add ESLint/Prettier/TypeScript strict.

### Phase 2: Storefront Shell

- Root layout.
- Announcement/header/footer.
- Home hero + section renderer.
- Products hero + category chips/grid.
- Product card.
- Cart drawer.

### Phase 3: Database + Catalog

- Migrations for profiles/categories/products/product_sizes.
- Public catalog APIs.
- Admin product CRUD.
- Seed real brand catalog only.

### Phase 4: Cart + Checkout

- Draft cart store.
- Server-side checkout RPC.
- Discount validation.
- Stock validation/deduction.
- WhatsApp order message.
- Order tracking.

### Phase 5: Custom Builders

- Coffee beans and flavor inventory.
- Custom espresso builder.
- Custom flavor builder.
- Server pricing validation.
- Custom stock deduction/restore.

### Phase 6: Admin + Media Studio

- Admin guard/roles.
- Dashboard shell.
- Orders/products/discounts/settings.
- Media Studio with live-preview components.
- Blog/reviews/contact messages.

### Phase 7: Quality

- Unit tests for pricing/discount/stock.
- Integration tests for checkout.
- Playwright screenshots for home/products/checkout/admin.
- Mobile/RTL visual regression.
- Error monitoring and audit logs.

---

## 12. Files Inspected

Key inspected files:

- `package.json`
- `next.config.mjs`
- `tsconfig.json`
- `app/layout.tsx`
- `app/globals.css`
- `app/page.tsx`
- `app/products/page.tsx`
- `app/checkout/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `components/layout/header.tsx`
- `components/layout/sticky-top-bar.tsx`
- `components/layout/footer.tsx`
- `components/home/hero-section.tsx`
- `components/home/hero-background.tsx`
- `components/home/categories-section.tsx`
- `components/home/story-section.tsx`
- `components/home/best-sellers-section.tsx`
- `components/home/blog-section.tsx`
- `components/home/testimonials-section.tsx`
- `components/home/instagram-section.tsx`
- `components/home/contact-section.tsx`
- `components/products/product-card.tsx`
- `components/products/product-detail.tsx`
- `components/products/premium-configurator.tsx`
- `components/ui/animated-counter.tsx`
- `components/ui/motion-primitives.tsx`
- `components/cart/cart-drawer.tsx`
- `components/wishlist/wishlist-drawer.tsx`
- `lib/context/language.tsx`
- `lib/context/auth.tsx`
- `lib/store/cart.ts`
- `lib/store/wishlist.ts`
- `lib/config/site.ts`
- `lib/config/shipping.ts`
- `lib/config/public-settings.ts`
- `lib/config/product-system.ts`
- `lib/config/customization.ts`
- `lib/config/espresso-intelligence.ts`
- `lib/media.ts`
- `lib/supabase/server.ts`
- `lib/supabase/client.ts`
- `lib/supabase/admin.ts`
- `lib/supabase/config.ts`
- `lib/services/orders.service.ts`
- `lib/services/products.service.ts`
- `lib/services/cart.service.ts`
- `lib/services/wishlist.service.ts`
- `app/api/checkout/route.ts`
- `app/api/discounts/validate/route.ts`
- `app/api/products/route.ts`
- `app/api/products/[slug]/route.ts`
- `app/api/categories/route.ts`
- `app/api/cart/route.ts`
- `app/api/wishlist/route.ts`
- `app/api/contact/route.ts`
- `app/api/media/route.ts`
- `app/api/admin/products/route.ts`
- `app/api/admin/orders/route.ts`
- `app/api/admin/orders/[orderId]/route.ts`
- `app/api/admin/media-studio/route.ts`
- `app/api/admin/media/upload/route.ts`
- `supabase/migrations/011_website_content_builder.sql`
- `supabase/migrations/015_lock_down_discounts_rls.sql`
- `supabase/migrations/016_custom_checkout_stock_deduction.sql`
- SQL scripts overview under `scripts/`

Also reviewed generated file map and route list.

---

## 13. Files Changed

No application source code was changed.

Generated audit artifacts:

- `output/LINE_COFFEE_FULL_REBUILD_AUDIT_2026-06-11.md`
- `output/audit-visuals/*.png`

---

## 14. Manual Test Steps

For current project:

1. Run `npm run build`.
2. Run local dev server: `npm run dev -- --port 3001`.
3. Visit `/`.
4. Check desktop hero, header, category hint, no overflow.
5. Visit `/products`.
6. Check category UI and product grid.
7. Visit `/products?category=make-your-espresso`.
8. Check custom espresso builder layout.
9. Visit `/about` and `/contact`.
10. Switch language to Arabic.
11. Check RTL header, hero, CTA, stats.
12. Resize to mobile 390x844.
13. Confirm no horizontal scroll.
14. Open browser console and confirm no critical runtime errors.

For new project:

1. Build the design tokens and layout shell first.
2. Create visual snapshots for home/products/checkout/admin.
3. Implement server-side checkout validation before real checkout UI release.
4. Add tests before adding discounts/custom stock.

---

## 15. Remaining Risks

- Audit is code + local visual review only; no live Supabase data integrity audit was run.
- No real checkout order was submitted.
- No authenticated admin browser session was tested.
- No automated accessibility report was run.
- No Lighthouse/performance score was run.
- No RLS policy live verification was run against Supabase.
- Existing `.env.local` was used implicitly by build/dev server; secrets were not inspected.

---

## 16. Short Rebuild Prompt

Use this prompt when starting the new project:

```txt
Build a premium dark luxury coffee ecommerce system inspired by LINE COFFEE.
Replicate the visual language: cinematic dark coffee backgrounds, warm gold/cream accents, Playfair Display English headings, Cairo Arabic UI, glass header, full-bleed hero, premium product cards, compact admin dashboard, and media-driven section builder.

Do not copy the old architecture one-to-one. Rebuild cleaner:
- feature-based folders
- central i18n/content layer
- design tokens
- server-side checkout transaction/RPC
- Zod validation
- safe API errors
- admin roles
- media studio with live-preview parity
- mobile-first product discovery
- tests and visual regression

Core modules:
storefront home, catalog, product detail, cart, checkout, order tracking, custom espresso builder, custom flavor builder, auth, user dashboard, admin dashboard, products, orders, discounts, media studio, blog, reviews, contact messages, settings.

Preserve the premium cozy minimal LINE COFFEE aesthetic while applying the new project features and a more advanced system.
```
