# LINE COFFEE V2 — VISUAL UX BLUEPRINT

## 0. Purpose of This File

This file defines the complete visual direction, user experience, page behavior, animation system, mobile experience, admin dashboard experience, and Media Studio visual rules for Line Coffee V2.

This file must be used together with:

* `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
* `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`

This file is not a database schema file and not a code implementation file.

It is the visual and experience blueprint that explains how Line Coffee should feel, move, behave, and guide the customer and admin.

---

# 1. Core Visual Direction

## 1.1 Main Direction

Line Coffee V2 must follow a:

**Dark Luxury Coffee E-Commerce Experience**

The website should feel:

* Premium
* Dark
* Warm
* Cozy
* Elegant
* Cinematic
* Mobile-first
* Clean
* Trustworthy
* Easy to shop from

The experience must not feel like a normal cheap online store.

It should feel like a premium coffee brand with a strong identity, while still being clear and practical for real customers.

---

## 1.2 Brand Colors

Primary brand colors:

```text
Dark Brown: #522500
Beige: #FFDCC2
Black: #000000
White: #FFFFFF
```

Supporting visual tones:

```text
Deep coffee brown
Warm espresso brown
Soft beige
Muted gold
Warm amber glow
Cream highlights
```

The design must not depend on flat solid colors only.

Large dark areas must have depth, lighting, texture, and warmth.

---

## 1.3 Typography

English font:

```text
Playfair Display
```

Arabic font:

```text
Cairo
```

Typography must feel premium, readable, and editorial.

English headings may feel luxurious and cinematic.

Arabic text must remain clean, readable, and comfortable on mobile.

Avoid:

* Tiny Arabic text
* Overly thin Arabic font weights
* Overcrowded headings
* Too many font styles
* Uncontrolled mixed Arabic/English layout

---

# 2. Dark Luxury Background System

## 2.1 Dark Background Rule

Line Coffee must not use large flat solid dark brown blocks.

The dark brown background must feel alive.

It should feel like:

* Coffee depth
* Warm café light
* Roasted coffee atmosphere
* Soft glow
* Premium darkness
* Controlled luxury

---

## 2.2 Background Treatment

Dark sections should use layered backgrounds:

```text
Dark brown base
+ warm radial gradient
+ subtle vignette
+ low opacity noise texture
+ soft light glow
+ optional coffee texture
```

Recommended feeling:

```text
Deep dark coffee room
Soft warm light from one side
Elegant gold details
Readable beige/white text
```

Avoid:

* Flat #522500 full-screen sections with no texture
* Pure black empty sections
* Orange-heavy gradients
* Neon lighting
* Harsh contrast
* Low readability
* Overly noisy textures

---

## 2.3 Suggested CSS Direction

Use backgrounds similar to:

```css
background:
  radial-gradient(circle at 20% 20%, rgba(255, 220, 194, 0.12), transparent 30%),
  radial-gradient(circle at 80% 10%, rgba(212, 163, 115, 0.10), transparent 35%),
  linear-gradient(135deg, #120804 0%, #2b1207 45%, #522500 100%);
```

Optional overlay:

```css
background-image:
  linear-gradient(...),
  url('/textures/noise-subtle.png');
opacity: controlled;
```

The final implementation may vary, but the rule is:

**Dark Luxury does not mean dead darkness.**

---

# 3. Gold Stroke System

## 3.1 Purpose

Warm gold strokes are a core premium detail in the Line Coffee visual identity.

They should guide the eye and add elegance without making the interface noisy.

---

## 3.2 Usage

Gold strokes may be used for:

* Active navigation underline
* Hover underline
* Button borders
* Card borders
* Section dividers
* Icon strokes
* Small decorative heading lines
* Product card hover state
* Category card hover state
* Dashboard premium focus states
* Media Studio selected section outline

---

## 3.3 Visual Style

Gold strokes must feel:

```text
Thin
Warm
Softly glowing
Elegant
Controlled
Premium
```

They must not feel:

```text
Neon
Yellow
Thick
Cheap
Overused
Aggressive
```

Suggested tones:

```text
rgba(255, 220, 194, 0.35)
rgba(212, 163, 115, 0.45)
rgba(255, 194, 128, 0.25)
```

---

## 3.4 Active Navigation

Active nav item:

```text
Muted beige/default text
White or brighter beige active text
Thin warm gold underline
Smooth animation
```

Hover behavior:

```text
Underline expands smoothly
Text becomes warmer
No harsh jump
```

---

# 4. Animation Philosophy

## 4.1 Main Rule

Animation in Line Coffee V2 must serve the customer.

Animation must:

* Make the website feel premium
* Guide attention
* Help the customer understand
* Make shopping enjoyable
* Support brand storytelling
* Improve confidence
* Make interactions feel responsive

Animation must not:

* Slow down buying
* Hide important buttons
* Distract in checkout
* Make mobile heavy
* Turn the website into an art project only
* Hurt performance
* Confuse the customer

---

## 4.2 Animation Distribution

Animation intensity must be different per area.

### High animation allowed

```text
Homepage Hero
Product PNG Strip
Our Story
Make Your Espresso
Make Your Flavor
About page
Blog editorial pages
```

### Medium animation allowed

```text
Category cards
Best seller cards
Product cards
Product detail gallery
Profile bars
Cart drawer
Reviews
Media Studio preview
```

### Low animation only

```text
Checkout
Payment step
Address form
Order confirmation
Dashboard tables
Admin forms
Inventory screens
Settings
```

---

## 4.3 Performance Rule

The website must be mobile-first.

Animations must be smooth on:

```text
Modern mobile phones
Average Android phones
Laptops
Desktop browsers
```

Avoid in V1 unless strongly needed:

```text
Heavy WebGL
Heavy Three.js
Huge video backgrounds
Scroll hijacking
Overuse of parallax
Complex physics animations
Large uncompressed assets
```

---

## 4.4 Preferred Animation Tools

Recommended animation stack:

```text
CSS animations for simple hover/glow/underline
Framer Motion for UI transitions/cards/modals/drawers
GSAP + ScrollTrigger for controlled storytelling sections
Lenis only if smooth scrolling is needed and does not hurt performance
```

Avoid:

```text
Too many animation libraries
Complex WebGL in V1
Scroll hijacking libraries
Uncontrolled animation packages
```

---

# 5. Full Customer Experience Scenario

## 5.1 First Impression

When the customer opens the website, the first impression must be:

```text
Premium coffee brand
Dark warm luxury
Easy to shop
Trustworthy
Not cheap
Not confusing
```

The customer should immediately understand:

```text
This is Line Coffee
They sell premium coffee
I can shop ready products
I can customize my coffee
Ordering is easy
```

---

# 6. Homepage Structure

## 6.1 Default Homepage Order

The default V1 homepage order is:

```text
1. Announcement Bar
2. Header
3. Hero
4. Product PNG Strip
5. Service Cards
6. Shop By Category
7. Best Sellers
8. Our Story
9. Latest Blog Posts
10. Footer
```

This is the Balanced Selling Flow.

---

## 6.2 Why This Order

This order gives the customer:

```text
Premium first impression
Quick product awareness
Trust signals
Easy category browsing
Best seller discovery
Brand story after shopping intent
Educational content near the end
Clear footer and contact paths
```

This order avoids:

```text
Delaying products too much
Selling too aggressively too early
Making the site feel like a marketplace
Making the site feel like only a portfolio
```

---

# 7. Announcement Bar UX

## 7.1 Purpose

The Announcement Bar is used for important short messages.

Examples:

```text
Free delivery over 500 EGP
Fresh coffee prepared for every order
New blends available now
Ramadan offer
Limited time discount
```

---

## 7.2 Visual Style

The Announcement Bar should be:

```text
Thin
Elegant
Readable
Dark or warm brown
Small gold separator
Subtle animation only
```

It must not be:

```text
Too tall
Flashing
Bright red
Distracting
Cheap-looking
```

---

## 7.3 Behavior

If multiple messages exist:

```text
Rotate slowly
Fade between messages
No fast marquee for important text
```

On mobile:

```text
One short message at a time
No crowded text
No tiny font
```

---

# 8. Header UX

## 8.1 Desktop Header

Desktop header should include:

```text
Logo
Home
Products
Make Your Coffee
About
Blog
Contact
Search
Language switcher
Wishlist
Cart
Account
```

The header may start as transparent/dark glass over the hero.

On scroll:

```text
Header becomes solid dark glass
Slight blur
Gold line or shadow appears
Logo remains clear
Cart remains accessible
```

---

## 8.2 Mobile Header

Mobile header should be minimal:

```text
Logo
Cart icon
Menu icon
```

Optional:

```text
Search icon
Language toggle
```

Mobile menu should open as:

```text
Full-height dark drawer
or smooth bottom/side panel
```

Menu items must be large enough to tap comfortably.

---

## 8.3 Header Animation

Allowed:

```text
Gold underline hover
Smooth menu open/close
Small cart pulse when item added
Header background fade on scroll
```

Avoid:

```text
Complex header animations
Disappearing important buttons
Slow menu transitions
Tiny mobile controls
```

---

# 9. Hero Section UX

## 9.1 Purpose

The Hero is the emotional first impression.

It must communicate:

```text
Premium coffee
Line Coffee identity
Shop now
Customize your coffee
Warm dark luxury mood
```

---

## 9.2 Hero Content

Hero should contain:

```text
Small premium label
Main headline
Short subheadline
Primary CTA
Secondary CTA
Hero image/video/visual
```

Example CTA structure:

```text
Primary: Shop Coffee
Secondary: Make Your Blend
```

---

## 9.3 Hero Visual

Hero visual may include:

```text
Coffee cup
Coffee pouch
Coffee beans
Steam
Warm light
Dark background
Line Coffee packaging
```

The hero must not look generic.

It should be aligned with the actual Line Coffee brand and packaging direction.

---

## 9.4 Hero Animation

Initial load sequence:

```text
Background glow fades in
Logo/header becomes visible
Headline appears softly from bottom
Subheadline fades in
CTA buttons appear
Hero product/cup image enters smoothly
Optional steam/glow movement starts subtly
```

Animation should be cinematic but not slow.

Target feeling:

```text
Elegant reveal
Not loading delay
Not over-dramatic
```

---

## 9.5 Mobile Hero

Mobile hero must be optimized.

Rules:

```text
Headline visible above fold
CTA visible without too much scrolling
Image must not cover text
Text contrast must be strong
Buttons must be large enough
Animation must be reduced
```

---

# 10. Product PNG Strip UX

## 10.1 Purpose

The Product PNG Strip gives fast product awareness.

The customer quickly understands:

```text
Line Coffee has Turkish blends
Line Coffee has Espresso blends
Line Coffee has Easy Coffee
Line Coffee has flavored coffee
Line Coffee has custom products
```

---

## 10.2 Visual Style

The strip should use clean PNG product images.

Products should feel floating in a premium dark environment.

Possible items:

```text
Turkish Silk
Strike Coffee
Cairo Nights
High Mood
HEAVY CREMA
AROMA BODY
HEADSHOT
BLACK LABEL
Classic Line
Gold Line
Flavor Coffee
Coffee Mix
Cappuccino
Hot Chocolate
```

---

## 10.3 Motion

Desktop:

```text
Slow infinite horizontal movement
Subtle floating effect
Hover pauses or slows movement
Hovered item scales slightly
Product name appears cleanly
Optional View Product CTA
```

Mobile:

```text
Swipe carousel
No forced fast movement
Large touch targets
Reduced animation
```

---

# 11. Service Cards UX

## 11.1 Purpose

Service Cards create trust before the customer browses categories.

Suggested cards:

```text
Fresh Coffee
Premium Beans
Custom Blends
Fast WhatsApp Ordering
Secure Order Tracking
```

Use 3 or 4 cards maximum.

---

## 11.2 Visual Style

Each card:

```text
Dark glass card
Thin gold icon
Short title
One short line of text
Soft border
Warm hover glow
```

Avoid long text.

---

## 11.3 Animation

On scroll:

```text
Cards fade up one after another
```

On hover:

```text
Card lifts slightly
Gold border becomes stronger
Icon glows subtly
```

On mobile:

```text
No hover dependency
Cards are readable immediately
```

---

# 12. Shop By Category UX

## 12.1 Purpose

Shop By Category is the main customer navigation section.

It must prevent confusion.

The customer should easily choose where to go.

---

## 12.2 Final Categories

The categories are:

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

Forbidden categories:

```text
Single Origin Beans
All Products sidebar
Original LINE section
Nescafe naming
```

---

## 12.3 Card Content

Each category card should contain:

```text
Category image
Category name
Short description
Optional product count
Explore CTA
```

---

## 12.4 Visual Mood Per Category

### Turkish Blends

Mood:

```text
Warm
Classic
Rich
Traditional premium
```

### Espresso Blends

Mood:

```text
Bold
Dark
Strong
Crema-focused
Modern premium
```

### Easy Coffee

Mood:

```text
Simple
Daily
Fast
Clean
```

### Flavor Coffee

Mood:

```text
Warm
Friendly
Aromatic
Slightly playful but premium
```

### Coffee Mix

Mood:

```text
Creamy
Smooth
Comfortable
```

### Cappuccino

Mood:

```text
Soft foam
Creamy
Warm café
```

### Hot Chocolate

Mood:

```text
Cozy
Rich
Soft
Dessert-like
```

### Make Your Espresso

Mood:

```text
Smart
Interactive
Professional
Custom blend lab
```

### Make Your Flavor

Mood:

```text
Creative
Fun
Flavorful
Premium playful
```

---

## 12.5 Animation

On scroll:

```text
Cards reveal with fade-up
```

On hover:

```text
Image zooms slightly
Gold border appears
Card lifts gently
CTA becomes clearer
```

Mobile:

```text
Cards must be tappable
No information hidden behind hover only
```

---

# 13. Best Sellers UX

## 13.1 Purpose

Best Sellers must drive direct sales.

This section should show products customers are likely to buy quickly.

---

## 13.2 Product Card Content

Each product card should show:

```text
Product image
Product name
Category
Short descriptor
Price
Weight options if applicable
Profile indicators if applicable
Add to Cart
View Details
```

---

## 13.3 Product Card Visual Style

Cards should be:

```text
Premium
Dark glass or warm beige card depending on section
Readable
Not cluttered
```

Price must always be clear.

Add to Cart must not be hidden on mobile.

---

## 13.4 Hover Animation

Desktop hover:

```text
Product image scales slightly
Card border glows warm gold
Card lifts slightly
Add to Cart becomes stronger
Quick View may appear
```

Mobile:

```text
No hidden hover actions
Buttons visible
Tap feedback only
```

---

## 13.5 Add to Cart Animation

When adding item:

```text
Button changes to Added ✓
Cart icon pulses
Small toast appears
Optional mini product fly-to-cart on desktop only
```

Mobile:

```text
Simple toast
Cart pulse
No heavy fly animation
```

---

# 14. Our Story UX

## 14.1 Purpose

Our Story builds emotional trust.

It should explain:

```text
Line Coffee started in 2015
The business has real coffee supply experience
The brand is now going directly to customers
The coffee is crafted, not random
```

---

## 14.2 Storytelling Style

This section may use cinematic scroll storytelling inspired by premium editorial websites.

Story structure:

```text
From Beans
To Roast
To Blend
To Your Cup
```

Alternative structure:

```text
Since 2015
Crafted for Cafés
Now Crafted for You
Line Coffee at Home
```

---

## 14.3 Motion

With scroll:

```text
Large words reveal
Images move subtly
Light changes softly
Text fades in step by step
Coffee texture appears
```

This should be the most cinematic homepage section after Hero.

But it must not be too long.

---

## 14.4 Content Rule

Story must be real, not fake.

It should reflect:

```text
Line Coffee has been operating since 2015
The business supplied coffee to cafés and businesses
Now the brand is building direct online sales
```

---

# 15. Latest Blog Posts UX

## 15.1 Purpose

Blog supports:

```text
SEO
Customer education
Brand authority
Coffee knowledge
Social media content
```

---

## 15.2 Homepage Blog Cards

Each card should contain:

```text
Featured image
Category/tag
Title
Short excerpt
Read More CTA
```

---

## 15.3 Blog Motion

Allowed:

```text
Card fade-up
Image subtle zoom on hover
Title underline hover
```

Avoid:

```text
Heavy animation
Distracting movement
Too many cards
```

---

# 16. Footer UX

## 16.1 Purpose

Footer must provide:

```text
Navigation
Trust
Contact
WhatsApp
Social media
Legal links
Brand closing mood
```

---

## 16.2 Footer Visual Style

Footer should be dark luxury:

```text
Deep coffee brown background
Warm glow
Thin gold separators
Clear columns
Readable beige text
```

---

## 16.3 Footer Content

Suggested columns:

```text
Brand
Shop
Make Your Product
Support
Contact
Social
Legal
```

Example shop links:

```text
Turkish Blends
Espresso Blends
Easy Coffee
Flavor Coffee
Coffee Mix
Cappuccino
Hot Chocolate
```

Example custom links:

```text
Make Your Espresso
Make Your Flavor
```

Legal:

```text
Privacy Policy
Terms & Conditions
Shipping Policy
Return & Refund Policy
```

---

# 17. Products Listing Page UX

## 17.1 Purpose

The Products page must be practical and clear.

It is not the place for heavy cinematic animation.

The customer is here to browse and buy.

---

## 17.2 Layout

Products page should include:

```text
Page/category hero
Filters
Sort
Product grid
Pagination or load more
Optional featured category strip
```

---

## 17.3 Filters

Filters may include:

```text
Category
Price
Weight
Best Seller
Availability
Roast type if applicable
Flavor group if applicable
```

Mobile filters should open in a bottom sheet.

---

## 17.4 Animation

Allowed:

```text
Product cards fade in
Filter drawer slides smoothly
Sort dropdown opens cleanly
Hover effects on desktop
```

Avoid:

```text
Heavy scroll animations
Parallax
Animated filters that delay browsing
```

---

# 18. Category Page UX

## 18.1 Purpose

Each category page should feel unique but consistent.

---

## 18.2 Category Hero

Each category hero contains:

```text
Category name
Short premium description
Category visual/banner
Optional CTA
```

Example:

```text
Espresso Blends
Bold crema, rich body, crafted for espresso lovers.
```

---

## 18.3 Category Content

After hero:

```text
Products grid
Short category explanation
Optional recommended products
Optional educational snippet
```

---

# 19. Product Details Page UX

## 19.1 Purpose

Product page must convert the customer.

It must make the customer confident enough to buy.

---

## 19.2 Layout

Product page should include:

```text
Product gallery
Product name
Category
Short description
Price
Weight selector
Quantity selector
Add to Cart
Buy/Checkout CTA if needed
Profile bars
Details accordions
Reviews
Related products
```

---

## 19.3 Product Gallery

Gallery behavior:

```text
Main image large
Thumbnails below or beside
Smooth image change
Zoom on desktop optional
Swipe on mobile
```

Avoid:

```text
Heavy 3D gallery
Slow image loading
Tiny thumbnails on mobile
```

---

## 19.4 Weight Selector

Weights:

```text
250g
500g
1kg
```

Changing weight must:

```text
Update price instantly
Update cart item correctly
Remain clear on mobile
```

---

## 19.5 Profile Bars

Product profile bars may include:

```text
Strength
Body
Acidity
Crema
```

For non-espresso products, profile system may adapt dynamically based on product type.

Bars should animate from 0 to their value when visible.

In builders, bars update live.

---

## 19.6 Accordions

Recommended accordions:

```text
Description
Ingredients / Blend
Brewing Advice
Shipping & Returns
Reviews
```

Accordions open smoothly.

They must not hide critical purchase information.

---

## 19.7 Related Products

Related products may be:

```text
Auto-generated
Manually overridden from dashboard
```

They should appear after main buying area.

---

# 20. Make Your Espresso UX

## 20.1 Purpose

Make Your Espresso is one of the strongest Line Coffee features.

It should feel like a premium smart blend builder.

The customer should feel:

```text
I am creating my own espresso blend
The system is helping me
I can understand strength/body/acidity/crema
Line Coffee will prepare it professionally
```

---

## 20.2 Page Mood

Mood:

```text
Dark
Smart
Professional
Coffee lab
Premium
Interactive
```

Not childish.

---

## 20.3 Builder Flow

Suggested flow:

```text
1. Intro explanation
2. Choose beans
3. See selected blend
4. Adjust ratios or use smart suggestion
5. See live profile bars
6. See warnings/recommendations
7. Choose weight
8. See live price
9. Add to cart
```

---

## 20.4 Bean Cards

Each bean card should show:

```text
Bean name
Origin
Arabica or Robusta
Flavor/profile notes
Price
Stock status
Profile contribution
```

---

## 20.5 Selected Blend Area

When customer selects beans:

```text
Bean appears in selected blend area
Ratio appears
Customer can adjust if allowed
System updates profile
System updates price
```

---

## 20.6 Smart Suggestions

System may show:

```text
Suggested balanced ratio
Warning if blend is unbalanced
What to add
What to reduce
Expected profile
```

Example:

```text
This blend may taste too acidic.
Try adding more body or crema.
```

---

## 20.7 Animation

Allowed:

```text
Bean card selection animation
Selected bean chip enters smoothly
Profile bars update live
Warning appears softly
Price updates smoothly
Add to Cart confirmation
```

Avoid:

```text
Overly playful animations
Dragging that breaks mobile usability
Complex animations that hide calculations
```

---

## 20.8 Mobile Builder

Mobile builder must be simple.

Suggested layout:

```text
Step-by-step sections
Sticky bottom summary
Selected blend visible
Price visible
Add to Cart always easy to reach
```

Avoid:

```text
Too many side-by-side panels
Tiny ratio controls
Hidden price
```

---

# 21. Make Your Flavor UX

## 21.1 Purpose

Make Your Flavor lets customer create flavored coffee products.

It should feel:

```text
Creative
Fun
Premium
Easy
Flavorful
```

---

## 21.2 Bases

Final bases:

```text
Turkish Coffee
Coffee Mix
Cappuccino
Hot Chocolate
```

Do not include French/Original as builder base if it is intended as standalone Flavor Coffee product.

---

## 21.3 Flavor Selection

Flavors should follow the final grouping:

```text
Original LINE / Basic
Sweets
Nuts
Fruits
Special Order
```

The interface should show grouped flavors clearly.

---

## 21.4 Flavor Mixing Suggestions

System may suggest combinations:

```text
Caramel + Hazelnut
Chocolate + Oreo
Coconut + Mocha
Lotus + Vanilla
Chocolate + Cherry
```

Suggestions should be helpful, not forced.

---

## 21.5 Live Updates

When customer selects base/flavors:

```text
Price updates live
Selected flavors appear as chips
Suggested combinations update
Profile/taste hints update
Add to cart summary updates
```

---

## 21.6 Animation

Allowed:

```text
Flavor chips pop in softly
Base card selection glow
Suggested mix cards reveal
Price update animation
```

Avoid:

```text
Childish candy-style UI
Too many bright colors
Overcrowded flavor grid
```

---

# 22. Cart UX

## 22.1 Purpose

Cart must be always accessible and easy.

---

## 22.2 Desktop Cart

Desktop cart should open as:

```text
Right side drawer
```

Cart drawer contains:

```text
Product image
Product name
Weight
Quantity
Custom details if applicable
Price
Subtotal
Shipping estimate
Checkout CTA
Continue shopping
```

---

## 22.3 Mobile Cart

Mobile cart should open as:

```text
Bottom sheet
```

This is better for mobile usability.

---

## 22.4 Cart Animation

Allowed:

```text
Cart icon pulse on add
Drawer slide in
Item added fade-in
Quantity update smooth
Toast message
```

Avoid:

```text
Slow drawer
Full-screen confusing cart
Hidden checkout button
Too much animation near checkout
```

---

# 23. Checkout UX

## 23.1 Main Rule

Checkout must be calm, fast, and distraction-free.

This is not the place for heavy animation.

The goal is order completion.

---

## 23.2 Checkout Steps

Suggested checkout flow:

```text
1. Customer information
2. Address
3. Order review
4. Place Order
5. WhatsApp redirect after database save
```

---

## 23.3 Checkout Fields

Customer information:

```text
Name
Phone / WhatsApp
Email optional if allowed
```

Address:

```text
Governorate
Area
Street/address details
Landmark
Notes
```

Order review:

```text
Products
Weights
Quantities
Custom builder details
Subtotal
Discount
Shipping
Total
```

---

## 23.4 Checkout Animation

Allowed:

```text
Step transition fade
Field validation message
Button loading state
Success confirmation
```

Avoid:

```text
Parallax
Hero animation
Moving backgrounds
Distracting product animations
```

---

## 23.5 Place Order Behavior

The correct flow:

```text
Customer clicks Place Order
Server validates order
Server recalculates prices
Order is saved to Supabase Database
Dashboard order is created
Telegram notification is sent
Customer is redirected to WhatsApp with prepared message
Customer manually presses Send
```

Important rule:

```text
The order must exist in the database even if WhatsApp is not sent.
```

---

# 24. Order Success UX

## 24.1 Purpose

Order success page must reassure the customer.

It should say:

```text
Your order has been received
Your order number is visible
We prepared a WhatsApp message for confirmation
You can contact us easily
```

---

## 24.2 Content

Success screen should include:

```text
Order number
Customer name
Order summary
Total
WhatsApp confirmation button
Expected next step
Back to home/shop button
```

---

## 24.3 Animation

Allowed:

```text
Soft success check animation
Warm glow
Order card fade-in
```

Avoid:

```text
Fireworks
Too much celebration
Confusing next step
```

---

# 25. Account UX

## 25.1 Purpose

Accounts are optional.

Guest checkout remains default.

Account should improve convenience, not block buying.

---

## 25.2 Account Pages

Customer account may include:

```text
Profile
Orders
Addresses
Wallet
Loyalty points
Wishlist
Reviews
Settings
```

---

## 25.3 Account Animation

Minimal:

```text
Tabs transition
Cards fade
Status badges update
```

---

# 26. Reviews UX

## 26.1 Customer Reviews

Reviews appear only after approval.

Verified purchase reviews are preferred.

Product reviews should show:

```text
Rating
Customer name
Review text
Product
Date
Verified purchase badge
```

---

## 26.2 Homepage Reviews

Homepage should show curated reviews only.

Recommended:

```text
5 to 6 featured reviews
```

Not all reviews.

---

## 26.3 Animation

Allowed:

```text
Review cards fade in
Subtle carousel if needed
```

Avoid:

```text
Fast moving review carousel
Fake-looking testimonials
```

---

# 27. Blog UX

## 27.1 Blog Listing

Blog listing should feel editorial and premium.

It should include:

```text
Blog hero
Featured post
Category filters
Post grid
```

---

## 27.2 Blog Detail

Blog detail should include:

```text
Title
Featured image
Author
Date
Content
Related posts
CTA to products where relevant
```

---

## 27.3 Blog Visual Style

Blog should use:

```text
Large headings
Readable paragraphs
Premium images
Warm dark or beige sections
Good spacing
```

---

# 28. About Page UX

## 28.1 Purpose

About page tells the Line Coffee story deeply.

It should not be generic.

---

## 28.2 About Structure

Suggested sections:

```text
Hero
Our Story
Since 2015
Coffee Supply Experience
From Cafés to Your Home
Our Craft
Why Line Coffee
CTA to Shop
```

---

## 28.3 Animation

About page can use:

```text
Scroll storytelling
Large typography
Image reveal
Timeline reveal
Warm light movement
```

But keep mobile readable.

---

# 29. Contact Page UX

## 29.1 Purpose

Contact page must make communication easy.

---

## 29.2 Content

Contact page should include:

```text
WhatsApp
Phone
Email
Address if available
Social links
Contact form
Business hours if available
Map if needed
```

---

## 29.3 UX Rule

WhatsApp must be very clear because it is important for orders.

---

# 30. Legal Pages UX

## 30.1 Pages

Required legal pages:

```text
Privacy Policy
Terms & Conditions
Shipping Policy
Return & Refund Policy
```

---

## 30.2 Visual Style

Legal pages should be clean and readable.

No heavy animation.

Use:

```text
Simple hero
Readable content width
Clear headings
Arabic/English support
```

---

# 31. Admin Dashboard UX

## 31.1 Main Admin Experience

The admin dashboard must feel:

```text
Fast
Clear
Operational
Premium but practical
Mobile-friendly
Data-first
```

Dashboard is not a cinematic customer site.

It should be elegant but not over-animated.

---

## 31.2 Dashboard Home

Dashboard home should show:

```text
Today Sales
Today Profit
Pending Orders
Low Stock
New Customers
Top Product
Website Visits
Recent Orders
Important Alerts
```

---

## 31.3 Dashboard Animation

Allowed:

```text
KPI count-up
Cards fade in
Charts animate softly
Critical alert pulse
Drawer/modal transitions
```

Avoid:

```text
Decorative heavy movement
Slow page transitions
Complex effects inside tables
```

---

# 32. Orders Admin UX

## 32.1 Orders List

Orders list should show:

```text
Order number
Customer
Phone/WhatsApp
Status
Payment status
Total
Date
Source
Actions
```

Filters:

```text
Status
Payment status
Date
Customer
Source
Product
```

---

## 32.2 Order Detail

Order detail should show:

```text
Order summary
Customer details
Address
Items
Custom builder details
Pricing snapshot
Payment status
Shipping
Internal notes
Customer notes
Timeline
Actions
```

---

## 32.3 Actions

Admin can:

```text
Confirm order
Change status
Edit shipping
Add internal note
Contact customer
Print invoice
Cancel order
Refund if applicable
```

---

# 33. Products Admin UX

## 33.1 Product Management

Products are controlled from dashboard.

Admin can edit:

```text
Name Arabic/English
Slug
Category
Description
Images
Videos
Variants
Prices
Stock method
Visibility
Status
SEO
Profile values
Related products
```

---

## 33.2 Product Status Logic

Separate controls:

```text
System Status: Draft / Active / Archived
Website Visibility: Visible / Hidden
Inventory Status: In Stock / Low Stock / Out of Stock
```

Out of Stock products may remain visible but not purchasable.

---

# 34. Categories Admin UX

Admin can manage:

```text
Category name Arabic/English
Slug
Image
Banner
Description
SEO
Visibility
Order
Status
```

Category order should be drag-and-drop.

---

# 35. Inventory Admin UX

Inventory should clearly separate:

```text
Finished products
Beans
Raw materials
Packaging
```

Inventory screens must show:

```text
Current stock
Low stock threshold
Unit
Cost
Supplier
Movement history
Adjustments
```

Low stock must be clear and may trigger Telegram notification.

---

# 36. Recipes Admin UX

Recipes connect products to inventory and costing.

Recipe screens should show:

```text
Recipe name
Product
Version
Ingredients
Quantities
Cost
Waste/loss percentage
Margin
Suggested selling price
Active version
History
```

Orders must store recipe version snapshots.

---

# 37. Suppliers and Purchases Admin UX

Suppliers screen:

```text
Supplier name
Contact
Items supplied
Price history
Notes
Status
```

Purchases screen:

```text
Purchase order
Goods received
Supplier invoice
Actual received quantities
Unit cost
Attachments
Inventory impact
```

---

# 38. Customers Admin UX

Customer profile should show:

```text
Name
Phone
WhatsApp
Email
Addresses
Orders
Total spent
Last order
Favorite products
Tags
Notes
Wallet
Loyalty points
Timeline
```

Duplicate detection should warn admin when needed.

---

# 39. Reviews Admin UX

Reviews module should show:

```text
Pending reviews
Approved reviews
Rejected reviews
Source
Product
Customer
Rating
Text
Date
Featured status
```

Admin can:

```text
Approve
Reject
Feature on homepage
Unfeature
```

---

# 40. Discounts and Loyalty Admin UX

Discount module should support:

```text
Fixed discount
Percentage discount
Free shipping
Gift product
Usage limits
Date limits
Customer targeting
Product/category targeting
Stacking rules
```

Loyalty module should show:

```text
Points balance
Point formula
Point value
Manual adjustments
History
```

---

# 41. Media Studio UX

## 41.1 Purpose

Media Studio is the visual control layer for website content.

It is not separate from the database.

It controls website visuals through database-backed content.

---

## 41.2 Media Studio Sections

Media Studio should control:

```text
Home Hero
Announcement Bar
Product PNG Strip
Service Cards
Shop By Category
Best Sellers
Our Story
Latest Blog Posts
About Hero
Contact Hero
Blog Hero
Footer visual content
Category banners
Product visuals
```

---

## 41.3 Editing Experience

Admin should be able to:

```text
Edit text
Edit images
Edit buttons
Change visibility
Change order
Preview desktop
Preview mobile
Preview Arabic
Preview English
Save draft
Publish
Rollback
```

---

## 41.4 Media Library

Media library supports:

```text
Folders
Tags
Search
Filters
Image preview
Video preview
Alt text
Focus point
Crop editor
Original file
Optimized versions
```

---

## 41.5 Media Studio Animation

Media Studio UI should be smooth:

```text
Section selection outline
Preview updates
Drag/drop feedback
Save state feedback
Publish confirmation
```

But must remain operational and fast.

---

# 42. Analytics UX

Analytics should answer:

```text
How much did we sell?
What is the profit?
Which products sell most?
Which products are viewed but not bought?
Where do customers drop off?
Which categories perform best?
Which campaigns work?
Which customers are returning?
```

---

## 42.1 Analytics Views

Analytics may include:

```text
Sales analytics
Profit analytics
Product analytics
Customer analytics
Website analytics
Promotion analytics
Inventory analytics
```

---

## 42.2 Visual Style

Charts should be clean.

Animation allowed:

```text
Soft chart load
Number count-up
Filter transition
```

Avoid:

```text
Overly decorative charts
Hard-to-read dashboards
```

---

# 43. Mobile Experience Rules

## 43.1 Mobile First

Line Coffee V2 must be designed mobile-first.

Most customers will likely browse from mobile.

Every page must work perfectly on mobile.

---

## 43.2 Mobile Rules

Mobile design must have:

```text
Large tap targets
Readable text
Sticky important actions
Simple navigation
Fast loading
Reduced animation
Clear cart
Clear checkout
```

---

## 43.3 Mobile Customer Journey

Mobile homepage:

```text
Short announcement
Simple header
Strong hero
Clear CTA
Swipe product strip
Category cards
Best sellers
Story
Blog
Footer
```

Mobile product page:

```text
Image first
Name and price
Weight selector
Sticky Add to Cart
Profile bars
Accordions
Reviews
Related products
```

Mobile cart:

```text
Bottom sheet
Sticky checkout button
Clear totals
```

Mobile checkout:

```text
One clean vertical flow
Large fields
Simple validation
No distractions
```

---

# 44. Loading States

## 44.1 Loading Style

Avoid generic ugly spinners when possible.

Use:

```text
Soft coffee bean loader
Thin gold line loader
Brewing text
Skeleton cards
```

---

## 44.2 Loading Rule

If content loads quickly, do not show unnecessary loaders.

Use skeletons for:

```text
Product cards
Dashboard tables
Analytics cards
Orders list
```

---

# 45. Empty States

Empty states must be helpful.

Examples:

Cart empty:

```text
Your cart is empty.
Start with our best-selling blends.
```

No products:

```text
No products found.
Try changing your filters.
```

No orders:

```text
No orders yet.
New orders will appear here automatically.
```

No media:

```text
No media uploaded yet.
Upload your first image to start editing your website.
```

---

# 46. Error States

Errors must be clear and calm.

Avoid scary technical errors.

Examples:

```text
Something went wrong. Please try again.
This product is currently unavailable.
This discount code is not valid.
Please check your phone number.
```

Admin errors may include more details but still should be readable.

---

# 47. Accessibility Rules

The UI must maintain:

```text
Strong contrast
Readable font sizes
Keyboard accessible controls
Visible focus states
Alt text for images
ARIA-friendly components where needed
Reduced motion support
```

If user has reduced motion enabled:

```text
Disable heavy scroll animations
Keep simple fade only
```

---

# 48. Bilingual UX Rules

Arabic and English must both feel native.

Do not treat Arabic as a secondary afterthought.

Rules:

```text
Arabic layout must be RTL
English layout must be LTR
Spacing must adapt
Icons must make sense in both directions
Buttons must not break
Headlines must not overflow
Mixed Arabic/English text must be controlled
```

---

# 49. SEO Visual Rules

Pages must support SEO without hurting design.

Use:

```text
Proper H1
Structured headings
Readable content
Blog content
Category descriptions
Product descriptions
Alt text
Fast images
Clean URLs
```

---

# 50. Final Experience Target

## 50.1 Customer Experience

The customer experience should feel like:

```text
Wow at first entry
Clear browsing
Enjoyable choosing
Smart customization
Fast ordering
Trust after order
```

---

## 50.2 Admin Experience

The admin experience should feel like:

```text
Everything controlled from dashboard
Orders are clear
Products are editable
Inventory is visible
Costs are connected
Media is manageable
Analytics are useful
Every important action is tracked
```

---

## 50.3 Final Rule

Line Coffee V2 should be:

```text
Dark Luxury Cinematic E-Commerce
```

Not:

```text
A normal product grid website
A heavy animation portfolio
A marketplace clone
A slow artistic experiment
A dashboard-only system
```

The website must be emotional, premium, fast, and usable.

The dashboard must be powerful, clear, and operational.

The entire system must support the Database First architecture:

```text
Dashboard → Supabase Database → Website → Media Studio → Future Mobile App
```

Config files are fallback/seed/guardrails only, not the live source of truth.

---

# 51. Implementation Priority

## 51.1 V1 Must Have

V1 should include:

```text
Dark Luxury visual system
Responsive header
Premium hero
Product PNG strip
Service cards
Shop by category
Best sellers
Our Story
Blog preview
Footer
Products page
Category page
Product detail page
Make Your Espresso UX
Make Your Flavor UX
Cart drawer/bottom sheet
Clean checkout
Order success page
Dashboard core UX
Media Studio core editing UX
Mobile optimization
Basic animation system
```

---

## 51.2 V1 Should Avoid

V1 should avoid:

```text
Heavy WebGL
Overcomplicated scroll hijacking
Too many page transitions
Excessive animation in checkout
Over-engineered dashboard effects
Unnecessary 3D
Slow videos
Large uncompressed images
```

---

## 51.3 Future Enhancements

Future versions may add:

```text
Advanced product storytelling pages
More cinematic campaign landing pages
AI-powered personalization
Advanced Media Studio animations
Advanced customer segments
Advanced loyalty tiers
More sophisticated builder visuals
Optional WebGL scenes if performance allows
```

---

# 52. Developer Notes

When implementing this blueprint:

```text
Respect AGENTS.md
Use minimal patches
Avoid full repo rewrites
Do not make config the live source of truth
Use Supabase Database as source of truth
Keep mobile performance first
Do not add heavy animation without reason
Preserve checkout clarity
Preserve admin speed
Do not break existing order logic
Do not hardcode live products if DB should control them
```

---

# 53. Final Summary

Line Coffee V2 must deliver two connected experiences.

For the customer:

```text
A premium dark luxury coffee shopping journey with smooth movement, clear products, smart customization, and fast WhatsApp-based ordering.
```

For the admin:

```text
A practical, powerful, database-first business control center for products, orders, inventory, customers, media, analytics, and settings.
```

The movement, colors, layouts, and interactions must all support one goal:

```text
Make the customer enjoy the brand, trust the product, and complete the order easily.
```
