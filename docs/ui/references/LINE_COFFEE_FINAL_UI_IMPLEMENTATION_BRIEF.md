# Line Coffee V2 — Final UI Implementation Brief

## 0. Purpose

This file is the final UI implementation brief for Line Coffee V2.

It combines:

1. The visual soul of the old live Line Coffee website.
2. The new Line Coffee V2 architecture, UI rules, page structure, and DB-first system.
3. The latest UI planning documents created under `docs/ui`.
4. The current UI implementation progress from UI-0, UI-1, UI-1C, UI-2, UI-2B, and UI-2C.

This file must guide all upcoming public UI work.

Use this file before touching:

* Homepage
* Products listing
* Category pages
* Product detail pages
* About page
* Contact page
* Blog shell
* Make Your Espresso
* Make Your Flavor
* Cart UI later
* Checkout UI later
* Public header/footer
* Shared UI primitives

This file is not a replacement for the existing docs.

It must be used together with:

* `docs/ui/LINE_COFFEE_VISUAL_DIRECTION.md`
* `docs/ui/LINE_COFFEE_UI_MASTER_PLAN.md`
* `docs/ui/PUBLIC_PAGES_SECTION_MAP.md`
* `docs/ui/UI_PHASE_ROADMAP.md`
* `docs/ui/UI_RULES_FOR_CODEX_CLAUDE.md`

---

## 1. Core Principle

Line Coffee V2 must not copy the old website as code.

Line Coffee V2 must inherit the old website's visual soul while using the new system architecture.

The rule is:

```text
Old Line Coffee = visual DNA
Line Coffee V2 = new architecture, new features, new pages, DB-first system
```

The old website gives us:

* Warm coffee colors
* Dark luxury feeling
* Premium golden strokes
* Header shine
* Announcement bar mood
* Rich button glow
* Coffee depth
* Quiet luxury mood

The new V2 system gives us:

* DB-first product/category rendering
* Supabase as source of truth
* New UI phases
* New shared components
* Better public page structure
* One active language at a time
* Better mobile behavior
* Product detail showcase
* Boutique grid system
* Future builders, cart, checkout, dashboard, and Media Studio compatibility

---

## 2. Old Live Website Visual Reference

Primary old live visual reference:

```text
https://line-coffee-zqoa.vercel.app
```

Use this website as a mood and visual reference only.

Use it for:

* Overall warm dark coffee mood
* Header/top bar shine
* Button glow
* Thin glowing strokes
* Coffee-gold dividers
* Dark espresso surfaces
* Cream text
* Quiet luxury feeling
* Richness and visual fullness

Do not copy:

* Old hardcoded data
* Old product/category logic
* Old cart/search/auth logic
* Old API calls
* Old bilingual stacking
* Old placeholder metrics
* Old page structure as-is
* Any code that conflicts with V2 DB-first rules

---

## 3. Final Target Feeling

The final Line Coffee V2 website should feel like:

```text
The old Line Coffee warmth
+
The new V2 premium system
+
Modern boutique e-commerce
+
Coffee luxury
+
Smooth section flow
+
Practical shopping UX
```

The customer should feel:

* This is a premium coffee brand.
* The website is warm and rich, not empty or flat.
* The products are real and carefully made.
* The brand has history and confidence.
* Shopping is clear and easy.
* The design feels custom, not generic.

The website must not feel like:

* A cheap marketplace
* A flat black template
* A random AI landing page
* A cold corporate site
* A UI demo disconnected from real products
* An over-animated art project
* A copy of the old site with the same old limitations

---

## 4. Final Visual Direction

The final direction is:

```text
Premium Cozy Minimal
+
Dark Coffee Luxury
+
Old Line Coffee Warmth
+
Modern V2 Glass System
```

This means:

* Warm dark backgrounds
* Espresso depth
* Gold/beige glowing strokes
* Cream readable typography
* Subtle shine
* Floating product/object mood
* Soft glass panels
* Clean spacing
* Practical product browsing
* Premium but not loud

The old site's warmth must be preserved.

The new site's structure and components must be cleaner, more scalable, and easier to maintain.

---

## 5. Final Color System

### 5.1 Official Brand Colors

```text
Dark Brown: #522500
Beige:     #FFDCC2
Black:     #000000
White:     #FFFFFF
```

### 5.2 Old Website Visual Palette to Reuse

The old site used a stronger cinematic coffee palette.

These should be brought into V2 as supporting tokens:

```text
Coffee Black:   #0B0806
Coffee Deep:    #120D09
Coffee Dark:    #15100B
Coffee Surface: #1B140F

Gold:           #B6885E
Gold Light:     #D6A373

Cream:          #F5E6D8
Cream Muted:    #D6B79A
Cream Dim:      #B79B85
```

### 5.3 Recommended V2 Token Mapping

Use this mapping in V2 styling:

```text
--lc-brand-brown: #522500
--lc-brand-beige: #FFDCC2

--lc-coffee-black: #0B0806
--lc-coffee-deep: #120D09
--lc-coffee-dark: #15100B
--lc-coffee-surface: #1B140F

--lc-gold: #B6885E
--lc-gold-light: #D6A373

--lc-cream: #F5E6D8
--lc-cream-muted: #D6B79A
--lc-cream-dim: #B79B85
```

### 5.4 Usage Rules

Use `#522500` as the core brand brown.

Use `#FFDCC2` as a controlled accent only.

Use the old coffee palette for depth and warmth.

Use gold tones for:

* Borders
* Dividers
* Button glow
* Navigation underline
* Premium strokes
* Hover accents
* Header shine
* Section kicker lines

Use cream tones for:

* Main text on dark backgrounds
* Muted descriptions
* Button labels
* Premium headings

Avoid:

* Large flat black areas
* Huge bright beige sections
* Cheap yellow gold
* Neon orange glow
* Cold gray backgrounds
* Blue/cool UI accents

---

## 6. Background System

### 6.1 Main Background Feeling

The background should feel like:

```text
Roasted coffee depth
Warm café light
Dark espresso room
Soft amber glow
Premium brown atmosphere
```

It must not feel like:

```text
Flat black
Empty dark screen
Dead brown block
Generic dark mode
```

### 6.2 Recommended Background Layers

Use layered CSS backgrounds:

```text
Deep coffee base
+ espresso brown gradient
+ soft radial amber glow
+ subtle vignette
+ optional very low opacity texture/noise
+ thin glowing section lines
```

Example direction:

```css
background:
  radial-gradient(circle at 18% 12%, rgba(214, 163, 115, 0.12), transparent 28rem),
  radial-gradient(circle at 82% 8%, rgba(255, 220, 194, 0.08), transparent 32rem),
  linear-gradient(180deg, #0B0806 0%, #120D09 45%, #0B0806 100%);
```

### 6.3 Section Continuity

Sections should flow into each other.

Use:

* Warm dividers
* Overlapping gradients
* Shared background glow
* Soft transitions
* Floating panels
* Section continuation

Avoid hard section cuts unless needed for readability.

---

## 7. Header / Top Bar Direction

### 7.1 Old Visual Soul

The old header had:

* Top announcement bar
* Dark warm background
* Thin gold/brown border
* Shine sweep moving across the bar
* Glass nav when scrolled
* Gold top line
* Inner shimmer
* Active nav underline glow
* Large clear logo

This old mood must be preserved in V2.

### 7.2 V2 Header Rule

The V2 header should be:

```text
Floating Glass Sticky Header
+
Old Line Coffee Shine Mood
```

### 7.3 Header Structure

Desktop header should include:

* Logo left
* Nav right or centered depending layout
* Home
* Products
* About
* Blog
* Contact
* Cart/search/language later when implemented

Current recommended nav order:

```text
Home
Products
About
Blog
Contact
```

### 7.4 Header Visual Rules

Use:

* `Coffee Deep` / `Coffee Black` glass surface
* Backdrop blur
* Border `rgba(182,136,94,0.16)`
* Top gold line
* Inner top shimmer
* Subtle box-shadow
* Cream nav text
* Gold active underline
* Slow shine sweep

Avoid:

* Flat black header
* Tiny logo
* Bright beige header
* Thick borders
* Overcrowded nav
* Heavy JS animation

### 7.5 Shine Sweep Direction

The old top bar shine used a light sweep concept:

```text
transparent → beige shine → transparent
moving left to right
slow and elegant
```

In V2, implement with CSS only where possible.

Recommended behavior:

```text
Duration: 6–12 seconds
Opacity: subtle
Motion: left to right
No client JS required
Respect reduced motion if possible
```

Use on:

* Announcement/top bar
* Header shine strip
* Premium hero CTA if subtle
* Important button hover only

Do not use everywhere.

---

## 8. Buttons Direction

### 8.1 Old Button Soul

Old buttons had:

* Warm gold/brown accent
* Soft glow shadow
* Premium hover
* Not too bright
* Not too large
* Confident click target

### 8.2 New V2 Button System

V2 needs more button variants than the old site.

Required public button variants:

```text
Primary CTA
Secondary Glass
Outline Gold
Ghost / Text
WhatsApp CTA
Add to Cart
Checkout
Disabled / Out of Stock
```

### 8.3 Primary Button

Use for:

* Shop Coffee
* Explore Products
* Add to Cart
* Checkout
* Main section CTA

Visual:

```text
Warm dark brown / gold gradient
Cream or dark text depending contrast
Soft golden glow
Subtle shine on hover
Rounded premium shape
Clear tap area
```

Suggested direction:

```text
background: linear-gradient(180deg, #D6A373 0%, #B6885E 100%)
or
background: linear-gradient(180deg, #6b3100 0%, #522500 100%)
with gold/cream highlight
```

The button should feel rich and clickable.

### 8.4 Secondary Glass Button

Use for:

* Our Story
* Learn More
* View Details
* Contact Us
* Explore Category

Visual:

```text
Transparent dark glass
Gold border
Cream text
Soft glow on hover
```

### 8.5 Outline Gold Button

Use for lower-priority premium actions.

Visual:

```text
Transparent background
Thin gold border
Muted cream text
Gold underline/shine on hover
```

### 8.6 WhatsApp Button

Use later for:

* Contact page
* Product support
* Order support
* Custom blends

Visual:

```text
Still Line Coffee styled
Do not use loud default WhatsApp green everywhere
Green may be used as a small icon/accent only
Button should remain premium and consistent
```

### 8.7 Avoid

* Cheap yellow buttons
* Overly bright gold
* Giant aggressive CTAs
* Too many competing CTAs
* Buttons hidden behind hover
* Buttons with weak contrast

---

## 9. Typography Direction

### 9.1 English

Use Playfair Display style for:

* Hero headline
* Page hero titles
* Premium section headings
* Product showcase titles

Use clean sans/system for:

* Body copy
* UI labels
* Product metadata
* Buttons if needed

### 9.2 Arabic

Use Cairo for Arabic.

Arabic must be:

* Clear
* Readable
* Well spaced
* Not too thin
* Not too small
* RTL only in Arabic mode

### 9.3 Old Heading Shine

The old site had a premium heading shimmer concept.

Use heading shimmer very selectively:

* Hero headline
* One or two premium section headings
* Not every heading

The shimmer must be subtle.

Avoid animated text everywhere.

---

## 10. Language Rule

The new V2 rule is:

```text
One active language at a time
```

### English Mode

Show English only.

Use LTR.

### Arabic Mode

Show Arabic only.

Use RTL.

### Do Not

Do not show:

```text
English heading
Arabic heading underneath
```

by default.

Do not restore old bilingual stacking.

### Exception

Official brand/product names may remain as approved:

* Line Coffee
* HEAVY CREMA
* BLACK LABEL
* Classic Line
* Gold Line

---

## 11. Homepage Final Direction

The homepage should use the V2 section structure, but visually feel like an improved version of the old site.

### Final Homepage Sections

```text
1. Hero
2. Categories
3. Featured Products
4. Features / Why Line Coffee
5. Story / About Preview
6. Contact / WhatsApp CTA
7. Blog preview later
8. Footer
```

### Homepage Must Feel

* Warm
* Full
* Premium
* Not empty
* Coffee-rich
* Easy to shop
* More developed than old
* Less generic than current draft

### Homepage Must Not

* Copy old layout exactly
* Add fake data
* Restore bilingual stacking
* Use old API logic
* Break DB-first rendering

---

## 12. Hero Direction

### 12.1 Goal

The hero must be the emotional first impression.

It should feel close to:

```text
Quiet luxury coffee
Warm dark atmosphere
Premium product/cup stage
Line Coffee identity
```

### 12.2 Hero Content

Recommended temporary English active language copy:

```text
Label:
LINE COFFEE

Headline:
Coffee crafted for every moment.

Subheadline:
Premium Turkish blends, espresso roasts, and specialty coffees — fresh from our family to yours.

Primary CTA:
Explore Products

Secondary CTA:
Our Story
```

### 12.3 Hero Visual

If real product images are not ready, do not leave the hero empty.

Use a premium CSS/product-stage visual:

* Glass orb/stage
* Coffee cup silhouette
* Steam lines
* Bean/ring details
* Warm spotlight
* Soft table/base line
* Golden strokes
* Floating object feel

If product packaging images become available later, replace the CSS placeholder with real floating product objects.

### 12.4 Hero Background

Use:

* Coffee black base
* Espresso brown gradient
* Amber radial glow
* Cream/gold highlights
* Thin glowing lines
* Optional local texture only if available

Avoid:

* Empty black right side
* Flat circle placeholder
* Generic stock image
* Fake product photo
* Overly bright background

---

## 13. Category Tiles Direction

### 13.1 Goal

Category tiles should feel like floating premium navigation, not empty dark boxes.

### 13.2 Categories

Use real DB categories from V2.

Render approved categories only based on DB visibility.

Expected final categories:

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

### 13.3 Visual

Each tile should include:

* Category name
* Short description if available
* Optional image if DB has one
* Premium fallback mark if no image
* Subtle “Explore” cue
* Thin gold accent bar
* Warm glass background
* Soft glowing stroke
* Hover lift
* No image zoom by default

### 13.4 Fallback

If category has no image:

Use a visual fallback:

* Coffee ring
* Bean mark
* Tiny gold line
* Abstract cup/icon
* Warm glow

Do not leave the tile empty.

Do not add fake category images.

---

## 14. Product Card Direction

### 14.1 Goal

Product cards should look premium even before product images are uploaded.

### 14.2 Data Rule

Product data must come from Supabase through existing DAL.

Do not hardcode:

* Product names
* Prices
* Categories
* Variants
* Images

### 14.3 Visual

Each card should include:

* Product image if available
* Premium fallback if no image
* Product name
* Short descriptor if available
* Default variant price
* Weight/default variant cue if available
* View details CTA or subtle link
* Add to cart only when cart phase exists

### 14.4 No-Image Fallback

If `image_url` is null:

Use a premium fallback, not an empty area.

Fallback may include:

* Inline SVG coffee cup
* Steam lines
* Warm glow
* Coffee ring
* Gold strokes
* Product type badge if available from real data
* Soft branded mark

Avoid:

* Emoji fallback
* Empty black box
* Fake product photo
* Generic placeholder image
* Large blank card

### 14.5 Hover

Allowed:

* Card lift
* Glow
* Glass highlight
* Shine sweep
* Text warmth

Not allowed by default:

* Product image zoom
* Big scale effects
* Hidden mobile actions

---

## 15. Feature Cards Direction

### 15.1 Goal

Feature cards must build trust.

### 15.2 Suggested Features

```text
Fresh Coffee
Premium Blends
Since 2015
Easy Ordering
```

### 15.3 Visual

Use:

* Glass panels
* Number labels
* Gold strokes
* Warm glow
* Short copy
* Hover lift
* Subtle shine

Avoid:

* Long text
* Generic icon clutter
* Empty dark cards
* Bright beige panels

---

## 16. Story / About Preview Direction

The story section must combine old warmth with new editorial layout.

It should mention:

* Family coffee legacy
* Since 2015
* Supplying cafés and businesses
* Now direct-to-customer online experience

Visual:

* Warm dark editorial section
* Glass text panel
* Gold top line
* Soft radial glow
* Optional floating beans/cup later
* CTA to About

Avoid:

* Fake corporate story
* Too much text
* Hard section separation
* Overclaiming

---

## 17. Contact / CTA Direction

The homepage CTA should be:

```text
Premium glass contact/order panel
```

Use:

* Warm gradient
* Glass card
* Strong primary CTA
* Secondary contact CTA
* Gold/cream glowing line
* Clear copy

If WhatsApp settings are not available yet:

Use `/contact`.

Do not hardcode private API keys.

Do not invent WhatsApp API logic.

---

## 18. Footer Direction

The footer should inherit the old site's warmth but use the new V2 structure.

Visual:

* Deep coffee background
* Warm glow
* Big logo
* Clear columns
* Gold dividers
* Muted cream text
* Social icons
* Legal links

Suggested columns:

```text
Brand
Categories
Make Your Product
Company
Contact
Legal
```

Do not overcrowd mobile.

---

## 19. Products Listing Page Direction

For `/products`, use the new V2 product system, but old visual soul.

Page direction:

```text
Boutique Product Grid
```

Use:

* Warm premium page hero
* Category chips
* Product grid
* Premium card fallbacks
* Soft section background
* Gold strokes
* No heavy filters yet

Avoid:

* Marketplace sidebar
* White generic e-commerce layout
* Fake products
* Hardcoded category list if DB exists
* Add-to-cart before cart phase if not ready

---

## 20. Category Page Direction

For `/products/category/[slug]`, use:

```text
Editorial Category Experience
```

Use:

* Category hero
* Category mood
* Category description
* Product grid
* Empty state
* Warm background
* Gold/cream divider
* Optional banner/image if DB has one

Avoid:

* Hardcoded category content
* Generic identical pages if category media exists
* Heavy filters
* Fake images

---

## 21. Product Detail Page Direction

For `/products/[slug]`, use:

```text
Premium Product Showcase
```

Visual:

* Large product image/stage
* Floating product object if image exists
* Premium no-image fallback if not
* Glass detail panel
* Weight selector
* Price
* CTA area
* Profile bars if real data exists
* Accordions later

Use old mood:

* Warm coffee background
* Gold strokes
* Cream text
* Button glow
* Quiet luxury feeling

Use new structure:

* DB-first product data
* Real variants
* No fake checkout logic
* No fake images

---

## 22. About Page Direction

About should use:

```text
Family heritage
+
Coffee experience
+
Premium editorial design
```

Visual:

* Dark coffee background
* Glass story panels
* Old gold dividers
* Warm hero
* Floating object/cup/bean mood
* Clear since 2015 story

Do not make it corporate.

Do not invent fake history.

---

## 23. Contact Page Direction

Contact should use:

```text
Glass Contact Hub
```

Sections:

* Hero
* Contact method cards
* WhatsApp card
* Phone card
* Email card
* Location card
* Social links
* Message form card

Visual:

* Warm dark background
* Old gold strokes
* Glass panels
* CTA glow
* Header/footer consistent with old mood

---

## 24. Blog Direction

Blog should be standalone.

Use old visual warmth but new editorial layout.

Visual:

* Featured article area
* Warm coffee imagery when available
* Glass article cards
* Category tags
* Cream/gold typography
* Premium readable layout

Do not make it SEO-spam style.

---

## 25. Make Your Espresso Direction

This page is a flagship feature.

It must not look like a simple form.

Direction:

```text
Premium Coffee Lab
```

Use:

* Dark smart layout
* Coffee-gold strokes
* Glass selection panels
* Bean cards
* Live profile bars
* Ratio controls
* Smart suggestions
* Price panel
* Add to cart later when cart is ready

Visual soul from old:

* Warm dark palette
* Gold glow
* Premium panels

New V2 features:

* DB-first beans
* Real profile data
* Server-side price recalculation later
* No fake builder logic

---

## 26. Make Your Flavor Direction

Direction:

```text
Premium Flavor Builder
```

Use:

* Warm creative layout
* Glass base cards
* Flavor chips/groups
* Suggestion area
* Price panel
* Soft playful premium accents
* Still not childish

Allowed bases:

```text
Turkish Coffee
Coffee Mix
Cappuccino
Hot Chocolate
```

Use the old warmth, not old logic.

---

## 27. Cart Direction Later

When cart phase starts, use:

```text
Premium practical cart
```

Desktop:

* Drawer or floating panel
* Warm glass
* Clear totals
* Product rows
* Checkout CTA

Mobile:

* Bottom sheet
* Easy quantity controls
* Large CTA
* No hover dependency

Do not implement cart inside UI-2 homepage phase.

---

## 28. Checkout Direction Later

Checkout must be calm and clear.

Use less animation.

Use:

* Warm glass panels
* Clear form fields
* Cream text
* Gold focus rings
* Clear total summary
* WhatsApp confirmation explanation

Avoid:

* Heavy visual effects
* Distracting animation
* Hidden fields
* Client-side price trust

Checkout must follow V2 order safety rules.

---

## 29. Empty States

Empty states should use old premium warmth.

Use:

* Small coffee mark
* Cream title
* Muted cream text
* Gold divider
* Warm glass card
* CTA button

Use for:

* Empty products
* Empty categories
* Empty cart later
* Blog empty
* Search empty

Avoid:

* Plain white empty states
* Emoji-only empty state
* Cheap illustrations
* Dead blank screens

---

## 30. Loading States

Loading should be subtle.

Use:

* Warm skeletons
* Gold shimmer
* Soft opacity transitions
* No loud loader

The old loader gold-line direction can inspire loading states, but avoid full cinematic loader unless needed.

---

## 31. Motion Rules

Allowed:

* Header shine sweep
* Button hover shine
* Card hover lift
* Glow on hover
* Section fade in later
* Staggered cards later
* Soft underline animation
* Profile bar animation in product/builders

Avoid:

* Heavy parallax
* Scroll hijacking
* Large JS animation libraries unless already approved
* Overuse of Framer Motion in public server pages
* Animation that blocks buying
* Fast distracting shine everywhere

---

## 32. Current V2 Implementation State

As of current UI work:

### UI-0

UI docs created and synced.

### UI-1

Shared public design components created:

* `lc-button`
* `lc-section`
* `lc-glass-panel`
* `lc-section-heading`
* `lc-empty-state`
* `lc-product-card`
* `lc-category-tile`

### UI-1C

Logo assets copied to:

```text
public/brand-assets/logo/
```

Clean `.svg` filenames created.

Header uses public logo asset.

### UI-2

Homepage structure created:

* Hero
* Categories
* Featured Products
* Features
* Story
* Contact CTA

### UI-2B

Improved:

* Hero product-stage placeholder
* Category tile description and CTA
* Product no-image fallback
* Header logo size

### UI-2C

Improved:

* Warmer gradients
* Header shine sweep
* Stronger buttons
* Glass panel strength
* Card shine
* Section dividers

### Remaining Problem

Current UI-2 may still need stronger visual alignment with the old live website.

The next implementation pass should use this file to apply old visual DNA without copying old logic.

---

## 33. Rules for AI Coding Agents

Any AI agent working on V2 UI must follow these rules.

### Must Read

Before UI implementation, read:

```text
AGENTS.md
docs/ui/LINE_COFFEE_FINAL_UI_IMPLEMENTATION_BRIEF.md
docs/ui/LINE_COFFEE_VISUAL_DIRECTION.md
docs/ui/UI_RULES_FOR_CODEX_CLAUDE.md
docs/ui/UI_PHASE_ROADMAP.md
```

### Must Preserve

* DB-first architecture
* Existing DAL functions
* Server Components for public pages where possible
* One active language at a time
* No fake product/category/price data
* No checkout/cart/order changes unless phase explicitly asks
* No dashboard changes unless phase explicitly asks
* No migrations unless phase explicitly asks

### Must Not Touch

Unless explicitly required:

* `lib/db`
* `lib/supabase`
* `supabase/migrations`
* `app/dashboard`
* checkout files
* cart logic
* order logic
* auth logic
* package files
* `next.config.ts`

### Must Avoid

* Whole-page random rewrites
* Copying old code directly
* Old API calls
* Old auth/cart/search logic
* Old bilingual stacking
* Fake data
* External images without approval
* New packages

---

## 34. What to Reuse From Old Website

Reuse these as visual ideas:

```text
Coffee Black background
Coffee Deep sections
Coffee Surface panels
Gold borders
Gold glow
Cream text
Muted cream descriptions
Announcement bar shine
Header nav-glass
Gold top line
Inner shimmer
Premium nav underline
Button glow shadow
Heading shimmer
Cinematic section glow
Luxury panel style
Gold dividers
Warm scrollbar
```

---

## 35. What Not to Reuse From Old Website

Do not reuse:

```text
Old hardcoded product data
Old hardcoded category data
Old checkout/order logic
Old cart store logic
Old wishlist logic
Old auth logic
Old search API logic
Old dashboard logic
Old language context behavior if it conflicts with V2
Old bilingual stacked UI
Old placeholder metrics
Old section order blindly
Old components as direct copy/paste
```

---

## 36. Recommended CSS Utilities for V2

The old visual system can be converted into clean V2 utilities.

Recommended utility concepts:

```text
.lc-coffee-canvas
.lc-luxury-panel
.lc-nav-glass
.lc-header-sweep
.lc-gold-divider
.lc-premium-kicker
.lc-heading-shimmer
.lc-card-shine
.lc-button-shine
.lc-warm-glow
.lc-glass-warm
```

These utilities should be implemented carefully in `app/globals.css` only when they are reusable and not page-specific.

Avoid overloading globals with one-off styles.

---

## 37. Recommended Homepage Rescue Pass

If current UI-2 still feels weak, the next pass should be:

```text
UI-2D — Apply Old Visual DNA to Current V2 Homepage
```

Scope:

* Homepage only
* Shared public visual primitives only
* No data logic
* No route logic
* No checkout/cart/order/dashboard

Tasks:

1. Replace flat dark backgrounds with old coffee palette gradients.
2. Strengthen hero with old quiet luxury mood.
3. Make header shine closer to old top bar sweep.
4. Improve primary/secondary buttons using old button glow.
5. Make category tiles feel like luxury panels.
6. Make product cards feel premium even without images.
7. Use gold dividers and section kicker lines.
8. Add heading shimmer only to hero or key heading.
9. Improve visual fullness without adding fake content.
10. Keep build clean.

---

## 38. Implementation Prompt for UI-2D

Use this prompt for Codex or Claude when applying the final visual rescue pass:

```text
UI-2D — Apply Old Visual DNA to Current V2 Homepage

Context:
The current V2 homepage structure is already implemented.
The goal is not to rewrite the homepage from scratch.
The goal is to apply the old Line Coffee visual DNA using:
docs/ui/LINE_COFFEE_FINAL_UI_IMPLEMENTATION_BRIEF.md

Read:
- AGENTS.md
- docs/ui/LINE_COFFEE_FINAL_UI_IMPLEMENTATION_BRIEF.md
- docs/ui/LINE_COFFEE_VISUAL_DIRECTION.md
- docs/ui/UI_RULES_FOR_CODEX_CLAUDE.md
- app/(public)/page.tsx
- components/public/home/*
- components/ui/lc-button.tsx
- components/ui/lc-category-tile.tsx
- components/ui/lc-product-card.tsx
- components/ui/lc-glass-panel.tsx
- components/public/public-header.tsx
- app/globals.css

Goal:
Make the current V2 homepage feel like an upgraded version of the old live Line Coffee website:
warm coffee luxury, gold strokes, premium buttons, shine sweep, rich dark surfaces, cream text, and quiet luxury hero.

Do NOT:
- copy old code directly
- copy old layout exactly
- restore bilingual stacking
- add fake products/categories/prices
- change DAL or DB logic
- touch dashboard
- touch checkout/cart/orders/auth
- add packages
- add external images
- commit

Allowed files:
- app/(public)/page.tsx
- components/public/home/*
- components/ui/lc-button.tsx
- components/ui/lc-section.tsx
- components/ui/lc-glass-panel.tsx
- components/ui/lc-category-tile.tsx
- components/ui/lc-product-card.tsx
- components/ui/lc-section-heading.tsx
- components/public/public-header.tsx
- app/globals.css

Apply:
1. Old coffee palette:
   #0B0806, #120D09, #15100B, #1B140F, #B6885E, #D6A373, #F5E6D8, #D6B79A.

2. Old header/top bar mood:
   nav glass, gold line, slow shine sweep, cream text.

3. Old button mood:
   rich warm primary, glass secondary, gold glow, subtle shine.

4. Old section mood:
   cinematic dark coffee sections, warm radial glow, gold divider lines.

5. Old card mood:
   luxury panels, gold border, inset highlights, soft shadow.

6. New V2 rules:
   DB-first data, one active language, no fake data, server components, no image zoom.

Run:
npm run build

Report:
- visual audit findings before changes
- files changed
- exact improvements
- confirmation no data logic changed
- build result
- final git status
```

---

## 39. Final Summary

Line Coffee V2 should not become a new generic dark UI.

It should become:

```text
Old Line Coffee's warm luxury soul
+
V2's clean architecture and future-ready components
```

The final UI must preserve:

* old color warmth
* old shine feeling
* old gold strokes
* old premium buttons
* old coffee depth

While adding:

* DB-first rendering
* scalable components
* better products pages
* product detail showcase
* builders
* cart/checkout later
* mobile polish
* one active language at a time
* no fake data
* no old logic copy

This file is the final bridge between the old visual identity and the new V2 build.
