# Line Coffee — Visual Direction

## 0. Purpose

This file defines the final visual direction for the Line Coffee public website UI.

It complements:

* `docs/ui/LINE_COFFEE_UI_MASTER_PLAN.md`
* `docs/ui/PUBLIC_PAGES_SECTION_MAP.md`
* `docs/ui/UI_PHASE_ROADMAP.md`
* `docs/ui/UI_RULES_FOR_CODEX_CLAUDE.md`

This file is not code.

It is the detailed visual reference for all upcoming public website UI phases.

Use it before redesigning:

* Home
* Products listing
* Category pages
* Product detail pages
* About
* Contact
* Blog
* Header
* Footer
* Shared public components

---

## 1. Core Visual Identity

Line Coffee should follow a:

**Premium Cozy Minimal** direction.

The website should feel:

* Premium
* Warm
* Cozy
* Elegant
* Minimal
* Boutique
* Editorial
* Coffee-focused
* Trustworthy
* Easy to shop from

It should not feel like:

* A generic e-commerce template
* A cheap marketplace
* A loud sales page
* A cold corporate website
* A crowded café menu
* A crypto/gaming glassmorphism website
* A random AI-generated landing page

The target feeling:

> A warm premium coffee brand with real products, soft movement, refined visuals, and a clear shopping path.

---

## 2. Brand Colors

Approved brand colors:

| Color      |       Hex | Use                                                   |
| ---------- | --------: | ----------------------------------------------------- |
| Dark Brown | `#522500` | Main brand depth, dark backgrounds, headings, accents |
| Beige      | `#FFDCC2` | Controlled accent, highlights, buttons, text contrast |
| Black      | `#000000` | Deep contrast, dark surfaces                          |
| White      | `#FFFFFF` | Text, contrast, clean space                           |

Supporting tones are allowed:

* Deep coffee brown
* Espresso brown
* Muted gold
* Warm amber
* Cream/off-white
* Soft caramel
* Low-opacity beige

### Important Beige Rule

Do not use large bright beige sections that break the eye.

`#FFDCC2` should be used carefully as an accent, not as a huge flat background.

Use beige for:

* Button fills
* Button text contrast
* Logo visibility
* Small highlights
* Thin borders
* Gold/beige strokes
* Badges
* Small decorative details
* Soft light inside gradients

Avoid:

* Full-screen bright beige areas
* Large harsh beige blocks
* Beige cards everywhere
* Yellowish cheap-looking gold

---

## 3. Typography

Approved fonts:

| Language | Font               |
| -------- | ------------------ |
| English  | `Playfair Display` |
| Arabic   | `Cairo`            |

English headings can feel editorial, cinematic, and premium.

Arabic text must be:

* Clear
* Readable
* Well-spaced
* Comfortable on mobile
* Not too thin
* Not too tiny

Avoid:

* Overcrowded headings
* Too many font weights
* Tiny Arabic captions
* Mixed Arabic/English in the same text line unless absolutely necessary
* Random font pairings

---

## 4. Language Direction

The website is fully bilingual, but it should show **one active language at a time**.

This is a hard rule.

### English Mode

When the active language is English:

* Headings should be English.
* Buttons should be English.
* Labels should be English.
* Descriptions should be English.
* Layout should be LTR.
* English product/category fields should be used where available.

### Arabic Mode

When the active language is Arabic:

* Headings should be Arabic.
* Buttons should be Arabic.
* Labels should be Arabic.
* Descriptions should be Arabic.
* Layout should be RTL.
* Arabic product/category fields should be used where available.

### Do Not

Do not display English and Arabic together in the same section by default.

Avoid layouts like:

```text
Premium Coffee
قهوة فاخرة
```

unless the specific phase intentionally asks for a bilingual preview or temporary fallback.

### Exception

Brand names and official product names may remain unchanged if they are part of the official brand identity.

Examples:

* Line Coffee
* HEAVY CREMA
* BLACK LABEL
* Gold Line
* Classic Line

---

## 5. Overall Page Flow

The website should not feel like separate stacked sections divided by hard horizontal lines.

Sections should visually flow into each other.

Use:

* Overlapping cards
* Soft curved separators
* Floating panels
* Background continuation
* Glass layers
* Soft shadows
* Warm gradients
* Organic transitions
* Staggered blocks
* Floating product objects

Avoid:

* Hard horizontal separators between every section
* Isolated boxed sections
* Sudden background jumps
* Flat landing-page structure
* Repeating the same section layout again and again

The page should feel like a smooth premium coffee story, while still being easy to shop from.

---

## 6. Reference Images

Reference images are stored in:

```text
docs/ui/references/
```

Use them as inspiration only.

Do not copy:

* Logos
* Brand names
* Text
* Product names
* Exact layout
* Exact images
* Exact colors

Use them only for mood, structure, spacing, layering, and interaction direction.

---

### 6.1 Section Flow Reference

File:

```text
docs/ui/references/01-section-flow-overlap-dark-coffee.jpg
```

Use this reference for:

* Dark warm coffee mood
* Hero blending into the next section
* No hard section breaks
* Floating service/features area
* Product cards appearing as part of the story
* Premium coffee atmosphere
* Soft section rhythm

Take from it:

* The section flow
* The warm darkness
* The layered page feeling
* The idea that features and products belong to one continuous visual system

Do not copy:

* The exact logo
* The exact brand name
* The exact text
* The exact products
* The exact card layout

---

### 6.2 Floating Product Object Reference

File:

```text
docs/ui/references/02-floating-product-object-clean-editorial.jpg
```

Use this reference for:

* Product object placed directly in the layout
* Realistic soft shadow
* Product not trapped inside a card
* Clean editorial product focus
* Calm premium whitespace
* Floating object placement

Take from it:

* The product-as-object idea
* The soft shadow
* The clean composition
* The sense that the product is physically present on the page

Do not copy:

* The skincare/cosmetics cold feeling
* Too much white space
* Any non-coffee mood

Make it warmer, darker, and more coffee-oriented.

---

### 6.3 Floating Cup / Organic Layout Reference

File:

```text
docs/ui/references/03-floating-cup-soft-dessert-layout.jpg
```

Use this reference for:

* Floating cup/product object
* Soft realistic product shadow
* Organic section transitions
* Product overlapping page areas
* Soft dessert/coffee warmth
* Friendly premium mood

Take from it:

* The cup/product object treatment
* The soft transition between sections
* The object feeling real inside the page
* The light, warm, editorial composition

Do not copy:

* Dessert brand identity
* Pink-heavy color direction
* Exact card shapes
* Exact layout

---

### 6.4 Animation / Effects Reference

File:

```text
docs/ui/references/ChatGPT Image Jun 10, 2026, 03_36_30 PM.png
```

Use this reference for:

* Fade in
* Staggered cards
* Hover lift
* Glow effect
* Glass highlight
* Button shine
* Section flow
* Glassmorphism
* Soft shadow
* Warm gradient
* Subtle shine
* Floating object

This is an internal visual menu of possible effects.

Use only the approved effects in this file.

---

## 7. Background Direction

Use a dynamic background system.

Different sections can have different moods, but the whole website must feel consistent.

### Recommended Background Behavior

Hero:

* Dark
* Warm
* Premium
* Cinematic
* Brown/black depth
* Soft radial glow

Story / About:

* Dark warm editorial
* Coffee texture or subtle background imagery
* Floating panels

Products:

* Slightly lighter if needed
* Still warm
* Not bright beige
* Product-focused
* Clean enough for browsing

Contact:

* Warm dark gradient
* Glass contact cards
* Clear CTA areas

Footer:

* Deep dark premium brown/black
* Subtle warm glow
* Thin beige/gold dividers

### Avoid

* Dead pure black sections
* Flat `#522500` sections with no depth
* Big bright beige sections
* Orange-heavy gradients
* Neon glows
* Harsh section changes
* Low contrast text

---

## 8. Glass / Shine Direction

Use glass and shine effects, but only in important places.

Do not make the whole website glass.

### Use Glass Effects For

* Floating header
* Hero panels
* CTA boxes
* Feature cards
* Product card hover states
* Contact cards
* Floating category tiles
* Story panels
* Select premium sections

### Use Shine Effects For

* Primary CTA hover
* Button highlight
* Glass highlight sweep
* Premium product highlight
* Subtle border glow
* Active nav underline

### Avoid

* Heavy transparency that hurts readability
* Glass on every single card
* Strong reflections everywhere
* Crypto/gaming style
* Neon glow
* Too much blur on mobile
* Shine that feels cheap or distracting

The glass effect must feel:

* Warm
* Premium
* Soft
* Readable
* Controlled

---

## 9. Motion Direction

Use calm premium motion.

Animation should support the customer experience, not slow it down.

### Approved Entrance Animations

* Fade In
* Staggered Cards

### Approved Interaction Animations

* Hover Lift
* Glow Effect
* Glass Highlight
* Button Shine

### Approved Visual Effects

* Glassmorphism
* Soft Shadow
* Warm Gradient
* Subtle Shine
* Floating Real Product Object

### Scroll / Page Behavior

Prioritize:

* Section Flow

Meaning:

* Sections blend visually into each other.
* Backgrounds overlap.
* Floating panels sit across section boundaries.
* Organic shapes or curves can connect areas.
* No hard separators unless needed for clarity.

### Do Not Use by Default

* Image zoom as default product/card interaction
* Heavy parallax
* Sticky storytelling unless a later phase explicitly asks for it
* Progress bars
* Complex page transitions
* Scroll hijacking
* Full-screen loaders
* Excessive animation in checkout or product grids

### Timing

Recommended animation timing:

```text
Fast UI hover: 150–250ms
Premium card hover: 250–400ms
Section entrance: 400–700ms
Stagger delay: 80–140ms between items
```

Avoid long hover delays such as 3 seconds because they feel slow and unresponsive.

---

## 10. Floating Real Product Object Direction

Use cut-out product images or realistic product mockups as objects placed directly in the layout.

A floating product object is not a product card.

It should feel like the product is physically present inside the page.

### Use For

* Hero slides
* Story/About sections
* Featured product highlights
* Category highlights
* Product detail page

### Can Be

* Coffee pouch
* Coffee cup
* Easy Coffee jar
* Coffee Mix canister
* Cappuccino canister
* Hot Chocolate cup
* Brewing tools
* Beans
* Spoon
* Steam element

### Visual Rules

Product objects can:

* Float over warm backgrounds
* Stand beside text
* Overlap glass panels
* Cast soft realistic shadows
* Sit above gradients
* Be slightly rotated or lifted
* Feel like premium editorial mockups

### Avoid

* Cheap PNG sticker feeling
* Unrealistic shadows
* Too many floating objects on one screen
* Objects hiding important text
* Overcrowded compositions
* Product objects that look unrelated to Line Coffee packaging

Use floating objects as highlights, not everywhere.

---

## 11. Header Direction

Use a:

**Floating Glass Sticky Header**

### Desktop

The header should feel like a floating glass navigation bar.

Use:

* Backdrop blur
* Warm dark transparency
* Subtle border
* Soft shadow
* Thin beige/gold active underline
* Minimal navigation
* Clear logo
* Cart icon
* Language switcher
* Search/account icons if available

On scroll:

* Header becomes slightly more solid.
* Text remains readable.
* Border/glow can become slightly more visible.
* Header stays premium and compact.

### Mobile

Use a compact sticky glass header.

Mobile header should include:

* Logo or icon
* Cart icon
* Menu icon
* Optional language switcher if space allows

Mobile menu should open cleanly and be easy to tap.

Avoid:

* Huge mobile header
* Too many nav links visible at once
* Tiny icons
* Header that hides product actions
* Complex header animation

---

## 12. Logo Direction

Logo assets should be stored in:

```text
brand-assets/svg-logos/
```

Current logo asset names:

```text
line-coffee-logo-full-black.svg
line-coffee-logo-full-white.svg
line-coffee-logo-full-alternate-brown.svg
line-coffee-logo-full-colored-main.svg
line-coffee-logo-full-dark-premium.svg

line-coffee-logo-icon-black.svg
line-coffee-logo-icon-white.svg
line-coffee-logo-icon-alternate-brown.svg
line-coffee-logo-icon-colored-main.svg
line-coffee-logo-icon-dark-premium.svg

line-coffee-wordmark-ar-black.svg
line-coffee-wordmark-ar-white.svg
line-coffee-wordmark-ar-brown.svg
line-coffee-wordmark-ar-colored-main.svg
line-coffee-wordmark-ar-dark-brown.svg
```

### Logo Usage

Header:

* Use a clear compact logo.
* Desktop can use icon + wordmark or full logo depending on available space.
* Mobile can use icon-only or compact full logo.

Footer:

* Use full logo larger than header.
* Keep enough breathing room around it.

Hero / Background:

* Icon-only may be used as a subtle watermark.
* Wordmark may be used softly if it does not distract.

Dark backgrounds:

* Use white or dark-premium versions.

Light/warm backgrounds:

* Use brown or black versions.

### Important Rule

Do not crop logo parts with CSS or code.

Use prepared asset files.

If a wordmark or icon is needed, use the dedicated file.

---

## 13. CTA / Button Direction

Use:

**Soft Premium CTA with subtle gold/beige accents**

This is based on the soft premium button direction, with a very small touch of luxury gold/beige detail.

### Button Style

Buttons should be:

* Clear
* Premium
* Smooth
* Rounded
* Warm
* Easy to tap
* Not too large
* Not too aggressive

Use:

* Dark brown button
* Beige button
* Glass button
* Outline button
* Subtle gold/beige border
* Soft hover glow
* Button shine on important CTAs

### Button Hierarchy

Primary CTA:

* Strongest visual
* Used for shopping / add to cart / main action

Secondary CTA:

* Outline or glass
* Used for “Learn More”, “View Products”, “Make Your Blend”

Text link:

* Minimal
* Used for low-priority navigation

### Avoid

* Bright yellow/gold buttons
* Cheap sales-page buttons
* Too many CTAs in one section
* Large aggressive buttons
* Hiding critical CTAs behind hover
* Buttons that are hard to read on mobile

---

## 14. Buying Direction

Use a hybrid buying experience.

The website should support a clear e-commerce flow:

* Add to Cart
* Cart
* Checkout

WhatsApp should remain a strong secondary/quick support CTA.

Use WhatsApp for:

* Ask about product
* Order assistance
* Custom blends
* Fast customer support
* Contact page
* Product detail secondary CTA

Avoid:

* Making WhatsApp the only buying path
* Cluttering every product card with too many CTAs
* Replacing checkout with WhatsApp
* Hiding Add to Cart

---

## 15. Homepage Direction

Homepage should follow a balanced structure.

The homepage should:

* Create premium brand emotion first
* Then quickly show categories/products
* Then build trust/story
* Then guide to contact/order

### Homepage Priority

1. Hero slider
2. Floating categories
3. Featured products
4. Glass feature cards
5. Story / About preview
6. Contact / WhatsApp CTA
7. Blog preview later
8. Footer

---

## 16. Home Hero Direction

Use a hero slider/carousel with 3–4 visual moods.

Do not rely on one static hero.

### Slide 1 — Premium Product Mood

Purpose:

* Introduce Line Coffee products clearly.

Visual:

* Coffee pouch / jar / canister
* Dark warm background
* Premium lighting
* Soft shadows
* Brand packaging visible

### Slide 2 — Cozy Morning Mood

Purpose:

* Communicate warmth and daily ritual.

Visual:

* Coffee cup
* Steam
* Morning light
* Home/café warmth
* Soft beige/brown glow

### Slide 3 — Boutique Coffee Mood

Purpose:

* Communicate premium craft and product range.

Visual:

* Products with brewing tools
* Organized editorial composition
* Warm dark background
* Floating object possible

### Slide 4 — Craft / Family Experience Mood

Purpose:

* Communicate care, experience, and authenticity.

Visual:

* Coffee preparation
* Roasted beans
* Hand-crafted feeling
* Warm and real, not fake corporate

### Hero Behavior

Use:

* Fade In
* Staggered text entrance
* Floating product object
* Subtle shine
* Smooth slide transition
* Soft CTA animation

Avoid:

* Fast carousel movement
* Too much text
* Overloaded hero
* Hero that hides CTA on mobile
* Huge video background in V1

---

## 17. Home Categories Direction

Use:

**Floating Category Tiles**

Category tiles should feel light, premium, and integrated into the page flow.

They should not feel like heavy marketplace cards.

### Use

* Soft glass or warm translucent surfaces
* Subtle shadow
* Small icon/object/image if available
* Clear category name
* Optional short description
* Hover lift
* Light glow on desktop

### Categories

Use approved public categories:

* Turkish Blends
* Espresso Blends
* Easy Coffee
* Flavor Coffee
* Coffee Mix
* Cappuccino
* Hot Chocolate

Builder categories may appear only if the phase intentionally includes them:

* Make Your Espresso
* Make Your Flavor

### Avoid

* Heavy bordered cards
* Marketplace category boxes
* Too much text
* Large bright beige tiles
* Hard section breaks

---

## 18. Product Card Direction

Use:

**Soft Editorial Boutique Product Cards**

This is a mix between boutique product cards and luxury editorial cards.

The product card should not look like a hard boxed marketplace card.

It should feel like:

* Image and text are visually connected
* Medium-sized tile
* Premium product focus
* Light card feeling
* Soft surface
* Clear price
* Easy action

### Desktop Product Cards

Use:

* Medium product tile
* Soft radius
* Very subtle shadow
* Warm background
* Light separation only
* Product image if available
* Product name
* Price
* Weight/default variant
* Small primary action
* Optional category label

Avoid:

* Heavy borders
* Marketplace-style cards
* Cheap compact shop cards
* Large aggressive buttons
* Too much text

### Desktop Hover

On hover:

* Card lifts softly.
* Glow appears subtly.
* Glass highlight can appear.
* CTA becomes clearer.
* Secondary information may appear if not critical.

Do not use image zoom as default card behavior.

### Mobile Product Cards

Mobile has no hover.

Mobile cards should show essential information directly:

* Product image if available
* Product name
* Default weight
* Price
* Primary action

Avoid hiding critical information behind interactions.

---

## 19. Features / Why Line Coffee Direction

Use:

**Glass Feature Cards**

The “Why Line Coffee” section should use 3–4 floating glass cards.

Each card should include:

* Icon
* Short title
* Short supporting text
* Subtle beige/gold border
* Soft shadow
* Hover lift
* Light glow

Suggested feature themes:

* Fresh coffee and carefully selected blends
* Custom blends made for your mood
* Family coffee experience since 2015
* Easy ordering and WhatsApp support

Avoid:

* Long text
* Generic icons without meaning
* Heavy boxed cards
* Bright beige backgrounds
* Too many cards

---

## 20. Products Listing Direction

For `/products`, use:

**Boutique Product Grid**

The products listing page should be practical, but still premium.

### Use

* Warm premium page hero
* Simple category chips
* Product grid
* Soft editorial product cards
* Sort option if needed
* Clear empty state

### Avoid

* Heavy marketplace sidebar filters in early UI phases
* Generic white e-commerce layout
* Crowded product cards
* Too many filters before the product grid
* Fake product data

If filters are needed later, they should be added as a separate phase.

---

## 21. Category Page Direction

For `/products/category/[slug]`, use:

**Editorial Category Experience**

Each category page should have:

* Category hero
* Category name
* Short premium description
* Optional visual/banner/object
* Product grid
* Empty state if no products

The category page can feel slightly more editorial than the main products listing.

### Use

* Category-specific mood
* Warm dark or dynamic background
* Category description
* Clean product grid below

### Avoid

* Same boring layout for every category if category media exists
* Heavy filters in early phases
* Marketplace sidebar
* Hard visual separation
* Fake content

---

## 22. Product Detail Direction

Use:

**Premium Product Showcase**

The product detail page should feel like a premium showcase for one product.

It should not feel like a generic marketplace product page.

### Above The Fold

Include:

* Large product image/object
* Product name
* Short description
* Variant/weight selector
* Price
* Quantity selector if cart exists
* Primary CTA
* Secondary WhatsApp/order CTA later if needed

### Visual Style

Use:

* Dark premium background
* Floating product object where possible
* Glass detail panel
* Soft shadows
* Warm gradients
* Subtle shine
* Clear spacing

### Avoid

* Generic marketplace product page feeling
* Too many sections before purchase action
* Overloaded technical details
* Small product image
* Hiding the price
* Hiding the main CTA

### Product Gallery

If multiple images exist later:

* Main image large
* Thumbnails below or beside
* Swipe on mobile
* Smooth image change

Avoid heavy 3D galleries in V1.

---

## 23. About Page Direction

Use a mixed storytelling direction:

**Family heritage + premium brand quality + craft/process**

The page should communicate that Line Coffee is not just a shop.

It is a family coffee brand built on experience, care, and product knowledge.

### Sections May Include

* About hero
* Family story / since 2015
* Coffee supply experience
* Craft and roasting approach
* Quality and sourcing
* Why customers trust Line Coffee
* CTA to explore products or contact on WhatsApp

### Visual Style

Use:

* Warm dark backgrounds
* Floating coffee objects
* Real craft/process imagery
* Glass story panels
* Soft section flow
* Editorial typography

### Avoid

* Corporate boring tone
* Very long text blocks
* Generic “we are passionate” copy without proof
* Fake story
* Overclaiming

---

## 24. Contact Page Direction

Use:

**Premium Glass Contact Hub**

The contact page should not be a plain boring contact form.

It should include separate glass cards for:

* WhatsApp
* Phone number
* Email
* Location
* Social links

Also include a larger glass card/form for sending a message directly from the page.

### Visual Style

Use:

* Warm dark background
* Soft brown gradient
* Glassmorphism cards
* Subtle beige/gold borders
* Soft shadows
* Clear icons
* Smooth hover lift
* Light glow
* WhatsApp-first CTA priority

### Avoid

* Plain boring contact form
* Too much white space
* Hard boxed cards
* Hidden contact information
* Too many competing CTAs

---

## 25. Blog Direction

Blog should be a standalone public page with its own navbar link.

Recommended navbar order:

```text
Home
Products
About
Blog
Contact
```

Blog execution can happen later, but the visual direction should be planned now.

The blog should focus on:

* Coffee education
* Brewing tips
* Product usage ideas
* Differences between blends
* Flavor guides
* Turkish coffee content
* Espresso content
* Cappuccino / Coffee Mix content
* Hot Chocolate content

### Visual Style

Use:

* Premium editorial articles
* Warm coffee imagery
* Soft article cards
* Clear readable typography
* Category tags
* Featured article area

Avoid:

* Random posts
* SEO spam
* Too many posts on one screen
* Cheap blog template feeling

---

## 26. Footer Direction

Use:

**Dark Premium Multi-Column Footer**

The current old footer direction is a good base, but should be refined.

### Footer Should Include

* Large logo
* Short brand description
* Social icons
* Categories column
* Make Your Product column
* Company column
* Contact column
* Legal links if available

### Visual Style

Use:

* Deep dark coffee background
* Warm glow
* Thin gold/beige separators
* Clear columns
* Readable beige text
* Soft hover states
* Enough spacing

### Suggested Columns

Brand:

* Logo
* Short description
* Social icons

Categories:

* Turkish Blends
* Espresso Blends
* Easy Coffee
* Flavor Coffee
* Coffee Mix
* Cappuccino
* Hot Chocolate

Make Your Product:

* Make Your Espresso
* Make Your Flavor

Company:

* About
* Blog
* Contact
* Our Story if separate
* Sourcing if available later

Contact:

* City
* Phone
* Email
* WhatsApp

Legal:

* Privacy Policy
* Terms & Conditions
* Shipping Policy
* Return & Refund Policy

### Avoid

* Crowded footer
* Tiny unreadable text
* Dead black footer with no warmth
* Too many columns on mobile
* Broken links
* Social icons without destinations

---

## 27. Empty & Loading States

Use:

**Branded Premium Empty States**

Empty states should include:

* Small Line Coffee icon or coffee icon
* Warm helpful message
* Clear CTA
* Soft glass or warm surface
* Premium calm tone

Use for:

* No products found
* Empty category
* Search has no results
* Cart is empty
* Blog has no posts yet
* Contact message success/failure

### Loading States

Use:

* Simple skeletons
* Subtle shimmer
* Low-noise loading placeholders

Avoid:

* Full-screen loaders unless absolutely necessary
* Playful/noisy animations
* Long loading sequences
* Fake progress bars

---

## 28. Icon Direction

Use a mixed icon system.

### Default

Use clean line icons for a premium, calm interface.

### Important Actions

Use filled or stronger icons for key actions such as:

* Cart
* WhatsApp
* Phone
* Location
* Add to Cart
* Primary CTAs

### Future

Custom coffee icons can be introduced later if needed.

### Avoid

* Childish icons
* Mismatched icon styles
* Overly thick icons everywhere
* Icons that look like a different brand

---

## 29. Mobile Direction

Use a:

**Premium but Practical Mobile Experience**

Mobile should keep the Line Coffee premium feeling, but prioritize:

* Speed
* Readability
* Easy tapping
* Clear product cards
* Simple navigation
* Accessible CTAs
* No hidden purchase actions

### Reduce On Mobile

* Heavy glass effects
* Complex hover-dependent interactions
* Too many floating objects
* Excessive shadows
* Excessive shine
* Large animations

### Mobile Animations

Use only:

* Fade In
* Light Staggered Cards
* Simple tap feedback

No hover logic is required on mobile.

### Mobile Product Cards

Show essential information directly:

* Image if available
* Name
* Default weight
* Price
* Primary action

---

## 30. Accessibility & Readability

The website must remain readable.

Premium design must not reduce clarity.

### Rules

* Text contrast must be strong.
* Arabic text must be readable on mobile.
* CTAs must be easy to tap.
* Product prices must be clear.
* Buttons must have visible hover/focus states.
* Links must be distinguishable.
* Images must have alt text where available.
* Important information must not be hidden behind hover.
* Motion should not be overwhelming.

### Avoid

* Low contrast beige on brown
* Text over busy images without overlay
* Tiny Arabic
* Thin Arabic font weights
* Too much blur behind text
* Buttons with unclear labels

---

## 31. UI Implementation Priority

Use a logical mixed implementation order.

### Step 1 — Shared Public UI Components

Create/standardize lightweight shared components first:

* Floating glass header
* Footer
* CTA buttons
* Product card base
* Category tile base
* Section wrapper
* Glass panel helper
* Section heading
* Page hero
* Empty state

### Step 2 — Homepage Redesign

Build:

* Hero slider
* Floating categories
* Featured products
* Glass feature cards
* Story preview
* Contact/WhatsApp CTA

### Step 3 — Products Listing & Category Pages

Build:

* `/products`
* `/products/category/[slug]`
* Boutique product grid
* Editorial category hero
* Empty states

### Step 4 — Product Detail Page

Build:

* Premium product showcase
* Large image/object area
* Variant selector
* Price
* CTA area
* Product info sections

### Step 5 — About, Contact, Blog Shell

Build:

* About storytelling page
* Glass Contact Hub
* Blog visual setup / shell

### Step 6 — Mobile Polish

Review:

* Header
* Product cards
* Hero
* Category tiles
* Product detail
* Contact page
* RTL/LTR behavior
* Tap targets

### Step 7 — Final Public QA

Check:

* Build passes
* TypeScript clean
* No console errors
* Mobile responsive
* No broken images
* Null image states
* Empty states
* RTL/LTR
* Performance

Do not start by rewriting full pages randomly.

Each UI phase should be small, scoped, and easy to review.

---

## 32. Hard UI Rules

These rules must be followed during all UI phases.

### Do Not Touch

Unless the phase explicitly says so, do not touch:

* Dashboard
* Checkout
* Orders
* Payments
* Inventory
* Auth
* Supabase migrations
* RLS
* DAL
* Product/category schema
* Existing DB queries
* Server-side pricing logic

### DB-First Rule

Public UI must stay DB-first.

Use existing DAL outputs.

Do not hardcode products, categories, prices, or variants if DB data exists.

### Image Rule

Product images may be null.

Always conditionally render images.

If no image exists, do not render broken images.

### No Fake Data

Do not add fake products, fake prices, fake categories, or fake reviews.

Static brand copy is allowed only where no DB source exists yet, such as About/Contact placeholder content.

### Minimal Patch Rule

Each UI task should:

* Touch only expected files
* Avoid unrelated refactors
* Avoid full app rewrites
* Avoid reformatting unrelated code
* Build successfully
* Report changed files before commit

---

## 33. Do Not Copy References Literally

Reference files are for direction only.

Do not copy:

* Exact composition
* Exact colors
* Exact logos
* Exact typography
* Exact text
* Exact product names
* Exact section order
* Exact images

Use references for:

* Mood
* Section flow
* Floating object treatment
* Glass/shine treatment
* Warm premium atmosphere
* Organic transitions
* Product placement ideas

The final website must feel like Line Coffee, not like the reference brands.

---

## 34. Final Visual Summary

Line Coffee should feel like:

```text
Premium Cozy Minimal
+
Dark warm coffee atmosphere
+
Soft glass panels
+
Subtle shine
+
Floating real product objects
+
Smooth section flow
+
Boutique product cards
+
Clear shopping path
+
Arabic/English one-language-at-a-time support
+
Mobile practical premium experience
```

The customer should immediately feel:

```text
This is a premium coffee brand.
The products are real and carefully made.
The site is easy to shop from.
The brand feels warm, trustworthy, and elegant.
```
