# LINE COFFEE V2 BUILD BLUEPRINT FROM OLD UI

Last updated: 2026-06-12  
Purpose: explain how to rebuild Line Coffee V2 from the clean current repo,
using the old UI project as visual/product inspiration only.  
Status: planning and implementation guide. This is not implemented code.

## 1. How To Use This File

Read order for any future AI agent:

1. `AGENTS.md`
2. `LINE_COFFEE_V2_CURRENT_STATE_AUDIT.md`
3. `LINE_COFFEE_V2_BUILD_BLUEPRINT_FROM_OLD_UI.md`
4. `package.json`
5. `supabase/migrations/*`
6. The files directly related to the task

This file answers:

- what the old UI taught us
- what should be rebuilt
- what should not be copied
- how each area of the current V2 project should be built cleanly
- how public website, dashboard, cart, checkout, builders and media should
  connect to Supabase

Important boundary:

- The old project is a visual and experience reference.
- The current repo is the foundation.
- Do not paste old components back.
- Do not restore deleted `components/`, `docs/ui/`, `brand-assets/`, or visual
  reference files.
- Rebuild in small, verified slices.

## 2. What The Old UI Project Means For V2

The old UI review described a rich, dark, cinematic ecommerce experience:

- premium dark coffee backgrounds
- warm gold/copper accents
- cream typography
- bilingual Arabic/English support
- RTL-aware layout
- cinematic hero sections
- product cards with strong image treatment
- cart drawer
- wishlist drawer
- WhatsApp button
- homepage sections
- products listing
- product detail
- Make Your Espresso
- Make Your Flavor
- account area
- admin dashboard
- media/banner management
- blog, reviews and tracking pages

The old project had good product instincts:

- strong brand feel
- memorable visual language
- complete customer journey
- useful admin modules
- custom coffee builders
- guest-friendly ecommerce flow

But it should not be copied directly because it also carried risks:

- very large page files
- too much animation everywhere
- too many fallback datasets
- UI and data behavior mixed together
- API assumptions from the old app
- duplicate dashboard logic
- old route shape that does not match current V2
- dependencies that are not currently part of the clean repo

The V2 strategy:

```text
Keep the old project's feeling.
Keep the old project's customer journey.
Keep the old project's dashboard ambition.
Rebuild the implementation from the clean V2 foundation.
```

## 3. Current V2 Foundation To Preserve

Current app foundation:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Supabase Auth
- Supabase database
- server/client/admin Supabase helpers
- admin auth and permission helpers
- protected dashboard route
- minimal public route skeletons
- public catalog read helpers
- database migrations for core foundation

Current route skeleton:

```text
/
/products
/products/[slug]
/products/category/[slug]
/dashboard/login
/dashboard
```

Current important rule:

- the UI layer is intentionally removed
- the next build must start clean
- public pages must reconnect to `lib/db` and Supabase, not hardcoded arrays

## 4. Global Build Principles

### 4.1 Data First

Every customer-facing entity should come from Supabase or a server-side helper:

- products
- categories
- variants
- prices
- media
- page sections
- site settings
- blog posts
- reviews

Temporary static content is allowed only when:

- the feature is a skeleton
- the file clearly marks it as temporary
- it does not duplicate final product/pricing data

Never hardcode:

- product prices
- product availability
- product variants
- order totals
- admin permissions

### 4.2 Server First For Business Logic

The browser can preview:

- selected variant
- estimated price
- cart subtotal
- custom blend summary

The server must decide:

- real price
- stock availability
- shipping
- discount validity
- order total
- order creation
- admin permission

### 4.3 Build Small Slices

Do not rebuild the old app in one pass.

Each slice should include:

- database check or migration if needed
- server read/write path
- UI
- loading state
- empty state
- error state
- mobile check
- validation

### 4.4 Old Visual Language, New Component Discipline

The old project had reusable visual ideas:

- luxury panels
- dark cards
- gold buttons
- image cards
- section headings
- badges
- drawers
- status pills

In V2, create these as small primitives only when they are needed by a real
page. Avoid creating a huge design system before product flows exist.

### 4.5 Motion Should Be Premium, Not Heavy

Use motion carefully:

- subtle hover lift
- short fade/slide reveal
- drawer transitions
- loading skeletons
- status timeline progress

Avoid:

- full-screen loader as a launch blocker
- constant shimmer everywhere
- heavy parallax on every section
- animation that hides slow data loading
- animation that causes layout shift

Add `prefers-reduced-motion` support whenever recurring animation is added.

## 5. Proposed Folder Shape When UI Returns

Only create these folders as work reaches them.

```text
app/
  (public)/
    layout.tsx
    page.tsx
    products/
      page.tsx
      [slug]/page.tsx
      category/[slug]/page.tsx
    cart/page.tsx
    checkout/page.tsx
    order-success/[orderNumber]/page.tsx
    track/page.tsx
    about/page.tsx
    blog/page.tsx
    blog/[slug]/page.tsx
    contact/page.tsx
    legal/
  dashboard/
    (auth)/login/page.tsx
    (protected)/
      layout.tsx
      page.tsx
      orders/
      products/
      categories/
      media/
      customers/
      reviews/
      blog/
      settings/
      admins/
      audit-logs/

components/
  public/
    layout/
    home/
    products/
    cart/
    checkout/
    builders/
    content/
  dashboard/
    layout/
    overview/
    orders/
    products/
    media/
    shared/
  ui/
    button.tsx
    panel.tsx
    badge.tsx
    field.tsx
    empty-state.tsx
    skeleton.tsx

lib/
  db/
  auth/
  supabase/
  cart/
  checkout/
  orders/
  media/
  dashboard/
  format/
```

Notes:

- Do not create all directories upfront.
- Prefer server components for data reads.
- Use client components only for real interaction.
- Keep server-only logic in `lib/**` with `server-only` where appropriate.

## 6. Visual System To Rebuild

### 6.1 Brand Tokens

The old UI used a dark cinematic coffee palette. V2 should use a cleaner,
tokenized version:

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
```

Use tokens instead of repeating arbitrary hex values everywhere.

### 6.2 Typography

Target:

- English display: Playfair Display
- Arabic: Cairo
- operational admin/body text can use system or a clean sans if readability
  needs it

Rules:

- Arabic text must not overflow.
- RTL must be handled intentionally.
- Do not mix Arabic and English randomly unless it is a bilingual label.
- Use natural Arabic copy, not literal machine translation.

### 6.3 Core UI Primitives

Build only when needed:

- `LcButton`
- `LcPanel`
- `LcCard`
- `LcImageFrame`
- `LcBadge`
- `LcSectionHeading`
- `LcEmptyState`
- `LcSkeleton`
- `LcField`
- `LcDrawer`
- `LcStatusBadge`

Design rules:

- public UI can feel luxurious and cinematic
- admin UI should be dense, fast and clear
- cards should not be nested inside cards
- dark surfaces need readable cream/white text
- all icon-only buttons need accessible labels

### 6.4 Image Treatment

Old UI insight:

- images carried the brand heavily
- product and section images used dark overlays, warmth and gold glow

V2 implementation:

- use `next/image` for public images
- stable dimensions and `sizes`
- hero images get priority only when actually above the fold
- image overlays should be a shared component or utility pattern
- alt text must come from Media Studio or product/category data

### 6.5 Motion Language

Use a small shared motion scale:

- hover lift: `transform 180-240ms`
- section reveal: `opacity + translateY`, once per section
- drawer: slide with opacity
- skeleton: subtle pulse
- timeline: progress transition

Do not add `framer-motion` until there is a clear need. CSS transitions are
enough for the first visual pass.

## 7. Public Layout

### 7.1 Public Root Layout

Target:

```text
PublicLayout
-> optional announcement bar
-> header
-> page content
-> footer
-> cart drawer or cart link
-> WhatsApp floating button
```

Build order:

1. simple dark public shell
2. header with static nav
3. footer with static content
4. connect header/footer to `site_settings`
5. connect categories links to Supabase
6. add cart count after cart state exists

Do not start with:

- full cinematic page loader
- wishlist drawer
- notification center
- complex search overlay

Those can come later.

### 7.2 Announcement Bar

Old idea:

- small sticky top bar
- dark background
- gold/cream text
- close for session
- content from settings

V2 approach:

- read from `site_settings` or future announcement table
- render only if active
- simple close stored in session storage
- optional marquee later
- no heavy shimmer in first pass

Data needed:

- `announcement_enabled`
- `announcement_text_en`
- `announcement_text_ar`
- `announcement_link`
- `announcement_mode`

### 7.3 Header

Old idea:

- transparent over hero
- dark glass after scroll
- logo
- nav links
- language switch
- search
- wishlist
- cart
- user menu
- mobile drawer

V2 first pass:

- logo text or approved asset when available
- links: Home, Products, Make Your Espresso, Make Your Flavor, Blog, About,
  Contact
- cart link/count placeholder
- mobile menu
- no user dropdown until customer accounts exist
- no search until product page is connected

Data connections:

- categories from `categories`
- settings from `site_settings`
- cart count from cart store/session

Accessibility:

- nav has labels
- mobile menu traps focus later if implemented as modal
- button labels for menu/cart/search
- RTL-aware arrows

### 7.4 Footer

Old idea:

- dark footer
- brand column
- category links
- make your product links
- company links
- contact/social
- legal links

V2 implementation:

- server component reading categories/settings
- no client state
- simple responsive grid
- WhatsApp/social links from settings
- legal links exist even if pages are simple placeholders

Data needed:

- categories
- site settings
- social links
- contact fields

## 8. Home Page

The old home page had this order:

```text
hero -> categories -> features -> story -> best sellers -> blog
-> testimonials -> instagram -> contact
```

V2 should use a slightly more business-focused order:

```text
hero -> trust strip -> categories -> best sellers
-> make your product -> story -> blog/reviews -> contact CTA
```

### 8.1 Home Hero

Old inspiration:

- immersive dark hero
- strong coffee/product image
- gold CTA
- Arabic/English content
- optional stats
- content controlled by admin/media

V2 first pass:

- one static hero section
- text from code or `page_sections`
- image from `media_assets` when available
- two CTAs:
  - Shop Coffee -> `/products`
  - Make Your Blend -> `/products?category=make-your-espresso` or future route

V2 later:

- Media Studio controls hero image, title, subtitle, button labels, button
  links, overlay strength and visibility
- optional slide support only after single hero works

Data mapping:

- `website_pages` row for `home`
- `page_sections` row for `home.hero`
- `media_assets` for hero image
- `page_section_items` for optional stats

Acceptance criteria:

- loads without client JavaScript for main content
- image has alt text
- CTAs work
- mobile hero does not hide next section completely
- Arabic does not overflow

### 8.2 Trust Strip

Old inspiration:

- four small premium info cards
- fast delivery, fresh roast, support, quality

V2 implementation:

- start static
- later move to `page_section_items`
- icons from lucide if icon library is installed
- no emojis as icons

Recommended items:

- Freshly roasted
- Fast delivery
- Premium blends
- Secure order

### 8.3 Categories Section

Old inspiration:

- visual category cards
- dark image treatment
- premium hover

V2 implementation:

- server component reads `getPublicCategories()`
- only active/visible categories
- stable card aspect ratio
- image from category `main_image_id` or media relation
- fallback card is allowed but must not look broken

Data mapping:

- `categories`
- `media_assets`

Acceptance criteria:

- categories are not hardcoded
- hidden categories do not render
- links go to `/products/category/[slug]`
- cards work on mobile

### 8.4 Best Sellers

Old inspiration:

- product cards with image, badges, price options and quick add

V2 first pass:

- server component reads products
- display 4 to 6 selected products
- no quick add until cart exists
- link to product detail

V2 later:

- featured/best-seller flag in product data
- Add to cart from card
- wishlist only after customer/account flow exists

Data mapping:

- `products`
- `product_variants`
- `categories`
- `media_assets`

### 8.5 Make Your Product Section

Purpose:

- introduce Make Your Espresso and Make Your Flavor
- route customers into custom builder journeys

Old inspiration:

- premium cards with special red/custom identity

V2 implementation:

- two cards:
  - Make Your Espresso
  - Make Your Flavor
- explain difference briefly
- CTA to future builder routes
- keep disabled/coming-soon state if builder is not implemented

### 8.6 Story Section

Old inspiration:

- brand story
- image
- values
- premium but human tone

V2 implementation:

- content from `website_pages/page_sections`
- image from Media Studio
- copy should talk about coffee experience, family knowledge and premium home
  ritual

### 8.7 Blog, Reviews And Social Proof

Build order:

1. reviews preview after reviews table/admin exists
2. blog preview after blog tables/admin exists
3. social proof only when real content exists

Avoid fake testimonials as if they are real.

### 8.8 Contact CTA

Old inspiration:

- warm contact section
- WhatsApp link
- form

V2 first pass:

- CTA block with WhatsApp and contact page link
- form comes later with `contact_messages`

## 9. Products Experience

### 9.1 Products Page

Old page was huge. V2 must split it.

Target route:

- `/products`

First pass:

- server read categories and products
- category filter links
- product grid
- search can be query based later
- sort later

Recommended component split:

```text
ProductsPage
-> ProductsHero
-> ProductFilters
-> ProductGrid
-> ProductCard
-> ProductEmptyState
```

Data:

- `getPublicCategories()`
- `getPublicProducts()`

Rules:

- no products hardcoded
- no prices hardcoded
- product card derives price from variants
- if variants missing, show unavailable state

### 9.2 Product Card

Old inspiration:

- dark luxury card
- image area
- badges
- name
- short description
- weight/price options
- quick add

V2 first pass:

- image
- name
- category
- short description
- "from price"
- link to detail

V2 later:

- badges: new, best seller, sale
- quick add
- wishlist
- low stock

Important:

- price comes from lowest active visible variant
- quick add should use a real variant id
- cart can preview, but checkout recalculates

### 9.3 Category Page

Target route:

- `/products/category/[slug]`

Implementation:

- fetch category by slug
- fetch products by category
- show category hero, description and grid
- 404 if category inactive/hidden/missing

Data gap:

- current `lib/db/categories.ts` may need a `getPublicCategoryBySlug`
- current `lib/db/products.ts` may need category filtering helper

### 9.4 Product Detail Page

Target route:

- `/products/[slug]`

First pass:

- fetch product by slug
- 404 if inactive/hidden/missing
- show image, name, description, variants, price and add-to-cart placeholder

Later:

- gallery
- related products
- reviews
- storage notes
- brewing notes
- WhatsApp quick ask

Data gaps:

- `product_media`
- `product_profile_attributes`
- `product_related`
- `reviews`

## 10. Cart

Old inspiration:

- cart drawer
- item list
- quantity controls
- subtotal
- shipping/free-shipping note
- checkout button

V2 build in two steps.

### 10.1 Cart State

First, create cart logic independent from UI.

Cart item types:

```ts
type NormalCartItem = {
  type: 'product'
  productId: string
  variantId: string
  quantity: number
}

type CustomEspressoCartItem = {
  type: 'custom_espresso'
  weight: string
  beans: Array<{ beanId: string; ratio: number }>
  profileSnapshot: Record<string, number>
  quantity: number
}

type CustomFlavorCartItem = {
  type: 'custom_flavor'
  baseId: string
  flavorIds: string[]
  weight: string
  intensity?: string
  quantity: number
}
```

The cart can store display snapshots, but those snapshots are not trusted for
checkout.

Storage options:

- guest: local storage or signed server session later
- logged-in: database cart later

Start simple:

- guest cart in local storage
- product/variant ids only for real products

### 10.2 Cart UI

Start with a cart page or drawer, not both.

Recommended first UI:

- `/cart` page for simplicity
- later add drawer once cart logic is stable

UI states:

- empty
- loading validation
- item list
- unavailable item
- quantity update
- remove
- checkout CTA

### 10.3 Cart Validation

Before checkout:

- server validates all variant ids
- server checks active/visible product and variant
- server recalculates display subtotal
- server returns validation result

This validation should be reused by checkout.

## 11. Checkout

Checkout is the most important business flow.

Old inspiration:

- order saved
- Telegram notification
- WhatsApp opens
- success page

V2 implementation rule:

```text
Database first, WhatsApp second.
```

### 11.1 Checkout Page

Target route:

- `/checkout`

Sections:

- contact details
- delivery details
- payment method
- order review
- notes
- place order

Guest fields:

- name
- phone
- WhatsApp number
- email optional
- address
- area
- governorate/city
- location link optional
- notes

Initial payment:

- Cash on Delivery

Later:

- Vodafone Cash
- InstaPay
- online payments if approved

### 11.2 Server Action Or API

Use a server-side action/API for `placeOrder`.

Server flow:

1. parse payload
2. validate customer fields
3. validate cart items
4. fetch current products/variants/pricing
5. calculate subtotal
6. calculate shipping
7. validate discount if any
8. create/update customer
9. create address
10. create order
11. create order items with immutable snapshots
12. create custom item snapshots when needed
13. send Telegram notification
14. create WhatsApp message URL
15. return order number and redirect target

Use a transaction/RPC when the flow becomes multi-step and must be atomic.

### 11.3 Orders Data

Current tables exist:

- `orders`
- `order_items`

Needed improvements:

- order number generation policy
- order status history
- snapshot structure for product and custom items
- payment status
- shipping fee fields
- notification log later

### 11.4 Success Page

Target route:

- `/order-success/[orderNumber]`

Show:

- confirmation
- order number
- summary
- WhatsApp send/resend button
- tracking link
- continue shopping

### 11.5 Tracking Page

Target route:

- `/track`

Guest tracking:

- order number
- phone

Show:

- status timeline
- order items
- total
- created date
- WhatsApp support link

## 12. Make Your Espresso

Old inspiration:

- interactive espresso builder
- goals
- bean cards
- ratio builder
- live profile bars
- smart suggestions
- price preview

V2 build order:

1. schema for beans/profiles/presets/rules
2. admin management for beans
3. public builder read-only flow
4. cart integration
5. checkout snapshot support

Do not build a public builder that cannot be ordered safely.

### 12.1 Data Model Needed

Future tables:

- `espresso_beans`
- `espresso_bean_profiles`
- `espresso_blend_presets`
- `espresso_blend_rules`
- `custom_espresso_orders`

Bean fields:

- name
- origin
- family: Arabica/Robusta
- body
- acidity
- crema
- strength
- aroma
- cost
- stock
- active
- recommended usage

### 12.2 Public Builder UI

Sections:

- hero
- choose goal
- suggested preset
- bean selector
- ratio editor
- live profile bars
- smart suggestion text
- weight selector
- price preview
- add custom blend

Rules:

- ratio total must equal 100
- unavailable beans cannot be selected
- server recalculates price at checkout
- cart stores snapshot for display

### 12.3 Admin Requirements

Dashboard should let admin:

- add/edit beans
- set profile values
- set cost/stock
- toggle active
- define presets
- define warnings/rules

## 13. Make Your Flavor

Old inspiration:

- choose base
- choose flavor group
- choose flavors
- pairing suggestions
- price preview
- add to cart

V2 build order:

1. schema for bases/flavors/groups/rules
2. admin management
3. public builder
4. cart integration
5. checkout snapshot support

Future tables:

- `flavor_bases`
- `flavors`
- `flavor_groups`
- `flavor_pairing_rules`
- `custom_flavor_orders`

Rules:

- French Coffee is not a builder base
- French Coffee is not a builder flavor
- Sahlab is not allowed
- one to three flavors unless future rules change
- some pairings warn or block
- server recalculates add-ons

## 14. Dashboard

The old dashboard was ambitious. V2 should keep the ambition but build with
real permissions, server-side validation and audit logs.

### 14.1 Dashboard Shell

Current route:

- `/dashboard`

Current auth:

- `proxy.ts`
- `requireAdmin()`
- permission helpers

Target shell:

- dark admin layout
- sidebar on desktop
- horizontal nav on mobile
- top bar with current page title
- quick search later
- pending order badge later
- sign out

Important:

- dashboard UI must not expose service role
- all mutations happen on server
- every important mutation writes `audit_logs`

### 14.2 Overview

Read from:

- orders
- order_items
- products
- customers

Show:

- today orders
- pending orders
- revenue
- active orders
- recent orders
- best sellers
- top categories
- low stock later

First pass can show simple counts. Charts come later.

### 14.3 Products Admin

Must control:

- product create/edit/archive
- active/visible flags
- category
- descriptions
- main image
- variants
- prices
- sort order
- best seller/featured later
- SEO later

Server rules:

- validate slug uniqueness
- validate category exists
- validate price numeric and positive
- validate variants
- audit every price/status/visibility change

### 14.4 Categories Admin

Must control:

- create/edit category
- active/visible
- sort order
- image
- homepage visibility
- SEO later

### 14.5 Orders Admin

Must show:

- order number
- customer
- phone
- address
- items
- custom snapshots
- total
- status
- payment method
- notes
- created date

Must support:

- status update
- internal notes
- WhatsApp link
- cancel later
- print invoice later

Rules:

- only valid status transitions
- status changes write audit log
- customer-facing totals come from saved snapshots, not live product price

### 14.6 Customers

Must show:

- name
- phone
- email
- orders count
- total spent
- addresses
- last order

Guest checkout still creates/reuses customer records where possible.

### 14.7 Media Studio

Old project had `banners`. V2 should formalize this as Media Studio.

Media Studio controls:

- Home Hero
- Products Page banner
- category images
- product images
- About hero
- Contact hero
- Blog covers
- promotional banners
- social sections

Build order:

1. storage bucket decision
2. upload flow
3. `media_assets` admin list
4. folder/tags later
5. usage mapping
6. live preview for mapped sections

Rules:

- every media asset needs alt text
- public/private flag matters
- admin preview should match live output
- avoid fake preview components that drift from live website

### 14.8 Reviews

Flow:

```text
customer submits review
-> status pending
-> admin approves/rejects
-> approved reviews render publicly
```

Needed:

- reviews table
- review admin module
- product/home preview

### 14.9 Blog

Needed:

- blog tables
- admin editor
- public blog list
- public blog detail
- SEO fields
- cover image from Media Studio

### 14.10 Settings

Settings should control:

- brand name
- logo/media
- phone
- WhatsApp
- email
- address
- social links
- announcement bar
- SEO defaults
- footer text
- support text
- free shipping threshold if approved

### 14.11 Admins And Roles

Foundation exists.

Still needed:

- admin users list
- invite/create admin
- assign role
- permission view
- protect primary owner
- audit changes

### 14.12 Analytics

Later:

- most viewed products
- best sellers
- conversion rate
- cart abandonment
- search terms
- traffic sources
- repeat customers

Do not block launch on analytics unless specifically required.

## 15. Account Area

The old project had customer account pages. V2 should keep account optional.

Guest is default.

Account can later add:

- profile
- saved addresses
- my orders
- wishlist
- reviews
- loyalty

Do not force account creation for checkout.

## 16. Search And Wishlist

Search:

- old UI had header search overlay
- V2 should start with products-page search
- header search comes after product read helpers and indexing are stable

Wishlist:

- old UI had wishlist drawer/store
- V2 should delay wishlist until account/cart basics work
- guest wishlist can be local storage later
- logged-in wishlist needs database table

## 17. Content Pages

### 17.1 About

Build with:

- hero
- story
- craft/blends
- family experience
- values
- CTA

Data later:

- `website_pages`
- `page_sections`
- `media_assets`

### 17.2 Blog

Build after blog tables/admin.

Pages:

- `/blog`
- `/blog/[slug]`

### 17.3 Contact

First pass:

- contact methods from settings
- WhatsApp link
- simple content

Later:

- contact form
- `contact_messages`
- dashboard messages module
- notification

### 17.4 Legal

Needed:

- Privacy Policy
- Terms and Conditions
- Shipping Policy
- Return/Refund Policy if needed

Can start as simple static pages, then move into CMS/settings later.

## 18. Database Roadmap

Already present:

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
- `admin_roles`
- `admin_permissions`
- `admin_role_permissions`
- `admin_users`

Near-term needed:

- `product_media`
- `product_profile_attributes`
- `product_related`
- `order_status_history`
- media usage/folder/tag tables
- blog tables
- reviews table
- contact messages

Builder needed:

- espresso beans/profiles/presets/rules
- custom espresso snapshots/orders
- flavor bases/groups/flavors/rules
- custom flavor snapshots/orders

Later:

- inventory
- suppliers
- purchase batches
- shipping zones
- payments
- discounts
- loyalty
- notifications
- analytics events

Migration rules:

- use Supabase migrations
- no destructive deletes for existing data
- soft delete where possible
- RLS must be reviewed for every table
- service role access only server-side

## 19. Implementation Phases

### Phase 1 - Brand Shell

Build:

- global tokens
- typography setup
- public layout
- header
- footer
- mobile nav

Avoid:

- checkout
- admin modules
- builders
- massive homepage

Validation:

- lint/build
- mobile no horizontal scroll
- header/footer links work

### Phase 2 - Home Foundation

Build:

- hero
- trust strip
- categories
- best sellers
- make your product section
- story/contact CTA

Connect:

- categories from Supabase
- products from Supabase
- media if available

### Phase 3 - Product Browsing

Build:

- `/products`
- `/products/category/[slug]`
- product card
- filters
- empty states

Connect:

- `lib/db/products.ts`
- `lib/db/categories.ts`

### Phase 4 - Product Detail

Build:

- `/products/[slug]`
- variant selector
- price display from variants
- add-to-cart placeholder or actual cart integration

### Phase 5 - Cart

Build:

- cart state
- cart page/drawer
- normal product items
- quantity controls
- validation endpoint/action

### Phase 6 - Checkout

Build:

- guest checkout
- server-side order creation
- order snapshots
- Telegram
- WhatsApp redirect
- success page

### Phase 7 - Orders Dashboard

Build:

- dashboard shell if not already done
- orders list
- order detail
- status update
- WhatsApp link

### Phase 8 - Catalog Dashboard

Build:

- products admin
- variants admin
- categories admin
- audit logs for mutations

### Phase 9 - Media Studio

Build:

- upload
- media list
- alt text
- usage mapping
- product/category/page assignment

### Phase 10 - Builders

Build:

- schema
- admin data entry
- Make Your Espresso
- Make Your Flavor
- cart support
- checkout snapshot support

### Phase 11 - Content, Reviews, Blog

Build:

- about/contact/legal
- blog admin/public
- review submit/admin/public preview

### Phase 12 - Launch Hardening

Do:

- mobile QA
- Arabic/RTL QA
- order test
- admin permission test
- RLS review
- image optimization
- performance checks
- backup/export plan

## 20. What To Take From The Old UI

Take:

- premium dark coffee mood
- copper/gold accents
- cream typography
- immersive hero idea
- image overlay treatment
- public page structure
- cart drawer concept
- product card structure
- custom builder concept
- admin module list
- media/banner control idea
- status timeline idea
- bilingual/RTL awareness

Do not take:

- old source code
- huge single-page products implementation
- heavy default animation
- fake fallback data as final content
- old API shape without checking current schema
- wishlist/search/account before core checkout
- decorative dashboard pages with no real writes

## 21. Agent Checklist Before Implementing Any Slice

Before coding:

1. Read local Next.js docs under `node_modules/next/dist/docs/`.
2. Read the relevant current files.
3. Check schema/migrations for required tables.
4. Decide whether a migration is needed.
5. Keep service-role code server-only.
6. Define loading, empty and error states.
7. Define mobile behavior.
8. Define Arabic behavior if customer-facing.
9. Define validation and security boundaries.

After coding:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Manually test the route.
4. Check browser console for frontend work.
5. Verify no hardcoded prices/products entered UI code.
6. Verify no service role leaked.
7. Update docs if source of truth changed.

## 22. Final Summary

Line Coffee V2 should be rebuilt as:

```text
Clean Next.js 16 + Supabase foundation
-> premium dark public website
-> DB-backed catalog
-> safe guest checkout
-> database-first order flow
-> WhatsApp and Telegram order handling
-> real admin dashboard
-> Media Studio-driven visuals
-> custom espresso/flavor builders
-> content, reviews, analytics and loyalty later
```

The old UI tells us what the product should feel like.  
The current V2 repo tells us where to build it from.  
The rule is simple: same premium ambition, cleaner architecture.
