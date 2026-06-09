# LINE COFFEE V2 — LAUNCH CHECKLIST

## 0. Purpose of This File

This file is the final pre-launch checklist for Line Coffee V2.

It must be used before making the website public and before starting real marketing.

This checklist verifies:

* Website readiness
* Dashboard readiness
* Supabase database readiness
* Vercel deployment readiness
* Checkout and order safety
* WhatsApp flow
* Telegram notifications
* Product and pricing accuracy
* Mobile experience
* SEO
* Security
* Performance
* Legal pages
* Admin permissions
* Launch operations

This file must be used together with:

* `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
* `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`
* `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`
* `LINE_COFFEE_V2_DATABASE_BLUEPRINT.md`
* `LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md`
* `LINE_COFFEE_V2_EXECUTION_PLAN.md`
* `LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md`
* `LINE_COFFEE_V2_CODEX_PROMPT_PACK.md`

---

# 1. Launch Rule

Do not launch Line Coffee V2 publicly unless the core business flow works:

```text
Customer opens website
Customer browses products
Customer adds product to cart
Customer completes checkout
Order is saved to Supabase
Order appears in dashboard
Telegram notification is sent
WhatsApp opens after database save
Customer can confirm manually on WhatsApp
Admin can manage the order
```

The order must exist in the database even if WhatsApp is not sent.

---

# 2. Repository Checklist

## 2.1 Git Status

Before launch:

```text
Current branch is correct
Working tree is clean
Latest changes are committed
Latest changes are pushed
No unfinished local patches
No temporary debug files
No accidental test files
No secrets committed
```

## 2.2 Required Files Exist

Confirm these files exist in the repo:

```text
AGENTS.md
LINE_COFFEE_V2_MASTER_SPECIFICATION.md
LINE_COFFEE_V2_MASTER_BLUEPRINT.md
LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md
LINE_COFFEE_V2_DATABASE_BLUEPRINT.md
LINE_COFFEE_V2_ADMIN_MODULES_BLUEPRINT.md
LINE_COFFEE_V2_EXECUTION_PLAN.md
LINE_COFFEE_V2_CONTENT_COPY_BLUEPRINT.md
LINE_COFFEE_V2_CODEX_PROMPT_PACK.md
LINE_COFFEE_V2_LAUNCH_CHECKLIST.md
```

## 2.3 Build Checks

Run and confirm:

```text
npm install works
npm run lint passes or known issues are documented
npm run build passes
No TypeScript blocking errors
No critical console errors
No missing environment variable crash
```

---

# 3. Environment Variables Checklist

## 3.1 Vercel Environment Variables

Confirm production Vercel has correct variables:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
WHATSAPP_PHONE_NUMBER
TELEGRAM_BOT_TOKEN
TELEGRAM_CHAT_ID
```

Add any project-specific variables used by the code.

## 3.2 Public vs Private Rule

Public variables may include:

```text
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

Private variables must not be exposed:

```text
SUPABASE_SERVICE_ROLE_KEY
TELEGRAM_BOT_TOKEN
WHATSAPP_API_KEY
Any private admin key
Any database secret
```

## 3.3 Security Confirmation

Confirm:

```text
No private key appears in browser source
No private key appears in frontend bundle
No private key appears in public settings API
No private key appears in GitHub
No private key appears in logs
```

---

# 4. Supabase Checklist

## 4.1 Database

Confirm:

```text
Production Supabase project is correct
Migrations are applied
Required tables exist
No duplicate/conflicting tables
No test-only destructive migration pending
Database backups are enabled or understood
```

## 4.2 Core Tables

Confirm important tables exist and work:

```text
products
product_variants
categories
orders
order_items
customers
customer_addresses
site_settings
media_assets
inventory_items
inventory_movements
recipes
recipe_items
audit_logs
```

If some future tables are deferred, document them clearly.

## 4.3 RLS and Access

Confirm:

```text
Public website can read only public active data
Admin routes require authentication
Customers cannot read other customers' orders
Private settings are not public
Service role is server-only
Admin writes are protected
```

## 4.4 Storage

Confirm Supabase Storage buckets:

```text
Product images bucket exists
Category/banner images bucket exists
Media Studio/media library bucket exists
Blog images bucket exists
Public/private policies are correct
Images load on production
```

---

# 5. Domain and Deployment Checklist

## 5.1 Domain

Confirm:

```text
Domain points to Vercel
HTTPS works
www/non-www behavior is correct
No old /lander-only redirect problem
Correct canonical domain is used
```

## 5.2 Vercel

Confirm:

```text
Production deployment is successful
No build errors
No missing env variables
No serverless function crashes
No repeated failed deployment
Preview deployment tested before production
```

## 5.3 URLs

Test:

```text
/
 /products
 /about
 /blog
 /contact
 /privacy
 /terms
 /shipping
 /returns
 /dashboard/admin
```

Dynamic URLs:

```text
Product detail pages
Category pages
Blog detail pages
```

---

# 6. Website Visual Checklist

## 6.1 Brand Direction

Confirm website matches:

```text
Dark Luxury Coffee E-Commerce
Warm dark brown depth
Not flat solid brown blocks
Soft glow
Thin warm gold strokes
Premium typography
Mobile-first layout
```

## 6.2 Colors

Confirm correct brand colors:

```text
Dark Brown: #522500
Beige: #FFDCC2
Black: #000000
White: #FFFFFF
```

## 6.3 Fonts

Confirm:

```text
English uses Playfair Display where intended
Arabic uses Cairo where intended
Arabic is readable on mobile
No broken font loading
No ugly fallback font on production
```

## 6.4 Backgrounds

Confirm dark sections use:

```text
Depth
Gradients
Warm light
Subtle texture/noise if implemented
Readable contrast
```

Avoid:

```text
Huge flat dark blocks
Pure black dead sections
Low contrast text
Aggressive orange glow
```

---

# 7. Homepage Checklist

## 7.1 Homepage Sections

Confirm homepage order:

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

## 7.2 Announcement Bar

Check:

```text
Text is short
Readable on mobile
Can be edited from dashboard/Media Studio if implemented
Does not distract
Links work if present
```

## 7.3 Header

Check desktop:

```text
Logo visible
Navigation works
Search works if enabled
Language switch works if enabled
Cart accessible
Account accessible if enabled
Active nav underline/gold detail works
```

Check mobile:

```text
Logo visible
Menu opens
Menu closes
Cart accessible
No overlap
Tap targets are large
```

## 7.4 Hero

Check:

```text
Headline clear
CTA buttons clear
Image/video loads
Text contrast strong
Mobile hero not too tall
Primary CTA works
Secondary CTA works
```

## 7.5 Product PNG Strip

Check:

```text
Products/images load
Motion is smooth
Mobile swipe works
No broken images
No performance issue
```

## 7.6 Service Cards

Check:

```text
3 or 4 cards maximum
Text is short
Icons/images load
Mobile layout clean
```

## 7.7 Shop By Category

Confirm final categories only:

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

Confirm forbidden categories do not appear:

```text
Single Origin Beans
All Products sidebar
Original LINE section
Nescafe naming
```

## 7.8 Best Sellers

Check:

```text
Products come from database
Prices correct
Images load
Add to Cart works
View Product works
Mobile cards are readable
```

## 7.9 Our Story

Check:

```text
Story is real
Mentions Line Coffee history since 2015 if used
Does not overclaim
Animation is smooth
Mobile readable
```

## 7.10 Blog Preview

Check:

```text
Latest posts appear
Images load
Links work
No unpublished posts shown
```

## 7.11 Footer

Check:

```text
Contact info correct
WhatsApp number correct
Social links correct
Legal links work
Footer categories correct
No broken links
```

---

# 8. Product System Checklist

## 8.1 Product Source

Confirm:

```text
Products come from Supabase
Categories come from Supabase
Prices come from Supabase
Variants come from Supabase
Website does not rely on config as live source
```

## 8.2 Product Data

For each product confirm:

```text
Name Arabic
Name English
Slug
Category
Images
Short description
Full description if used
Variants
Prices
Status
Visibility
SEO
```

## 8.3 Main Products

Confirm products exist and prices are correct:

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
```

## 8.4 Variants

Confirm variants:

```text
250g
500g
1kg
```

Each variant must have:

```text
Correct price
Correct SKU if used
Correct visibility
Correct stock behavior
```

## 8.5 Status Rules

Confirm:

```text
Draft does not appear publicly
Archived does not appear publicly
Hidden does not appear publicly
Out of Stock can appear but cannot be purchased
```

---

# 9. Category Pages Checklist

For every category:

```text
Category page loads
Category banner loads
Products show correctly
Empty state works if no products
SEO metadata exists
Mobile layout works
```

Final category pages:

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

---

# 10. Product Detail Page Checklist

For product pages confirm:

```text
Image gallery works
Product name correct
Category correct
Description correct
Price correct
Weight selector works
Quantity selector works
Add to Cart works
Profile bars work if applicable
Accordions open/close
Reviews appear if approved
Related products appear if available
Mobile sticky action works if implemented
```

Profile bars:

```text
Strength
Body
Acidity
Crema
```

No old/hardcoded wrong values unless intentionally fallback.

---

# 11. Make Your Espresso Checklist

Confirm builder supports:

```text
Arabica/Robusta bean selection
Selected bean area
Smart suggestion
Ratio handling
Live profile bars
Strength
Body
Acidity
Crema
Live price
Weight selection
Add to cart
Warnings/recommendations
```

Check:

```text
No even blend ratio if removed by decision
Unbalanced blend warning appears when needed
Customer selection is saved in cart
Order stores custom espresso snapshot
Admin can see selected beans/ratios in order
Mobile layout is usable
```

---

# 12. Make Your Flavor Checklist

Confirm builder supports bases:

```text
Turkish Coffee
Coffee Mix
Cappuccino
Hot Chocolate
```

Confirm flavor grouping:

```text
Original / Basic
Sweets
Nuts
Fruits
Special Order
```

Check:

```text
Flavor selection works
Multiple flavors work if allowed
Flavor suggestions work if implemented
Live price updates
Selected flavors saved in cart
Order stores custom flavor snapshot
Admin can see base/flavors in order
Mobile layout is usable
```

---

# 13. Cart Checklist

## 13.1 Desktop Cart

Check:

```text
Cart drawer opens
Cart drawer closes
Items appear
Images appear
Quantity updates
Remove item works
Subtotal updates
Checkout button works
Custom product details visible
```

## 13.2 Mobile Cart

Check:

```text
Bottom sheet opens
Bottom sheet closes
Items readable
Checkout button visible
No overlap with browser UI
```

## 13.3 Cart Persistence

Check:

```text
Cart persists after page navigation
Cart handles variant changes
Cart handles custom products
Cart handles out-of-stock update gracefully
```

---

# 14. Checkout Checklist

## 14.1 Checkout Form

Check fields:

```text
Full name
Phone / WhatsApp
Email if used
Governorate
Area
Street/address
Landmark
Notes
```

## 14.2 Validation

Check:

```text
Required fields validate
Phone validates
Address validates
Invalid coupon rejected
Blocked customer prevented
Out-of-stock product prevented
```

## 14.3 Server-Side Calculation

Confirm server recalculates:

```text
Product price
Variant price
Custom espresso price
Custom flavor price
Discount
Shipping
Grand total
```

Client totals must not be trusted.

## 14.4 Order Creation

Confirm:

```text
Order saves to Supabase
Order number generated
Order items saved
Product snapshots saved
Custom builder snapshots saved
Customer snapshot saved
Address snapshot saved
Pricing snapshot saved
```

## 14.5 WhatsApp Flow

Confirm:

```text
WhatsApp opens only after DB save
WhatsApp message includes order details
Customer can press Send manually
If WhatsApp is not sent, order still exists
```

## 14.6 Success Page

Check:

```text
Order number visible
Order summary visible
WhatsApp confirmation CTA visible
Back to shop works
Message is reassuring
```

---

# 15. Admin Dashboard Checklist

## 15.1 Admin Login

Confirm:

```text
Admin route protected
Unauthorized users redirected
Admin login works
Logout works
Session persists correctly
```

## 15.2 Dashboard Home

Check:

```text
KPIs load
Recent orders load
Low stock alerts load
Top product loads if available
No broken widgets
No private data exposed to wrong roles
```

## 15.3 Orders Admin

Check:

```text
Orders list loads
Order detail loads
New website order appears
Status update works
Payment update works if implemented
Internal notes work
Customer notes separate
WhatsApp contact link works
Invoice/print works if implemented
```

## 15.4 Products Admin

Check:

```text
Product list loads
Create product works
Edit product works
Variants work
Prices save
Images save
Visibility works
Status works
SEO fields save
Changes reflect on website
```

## 15.5 Categories Admin

Check:

```text
Category list loads
Create/edit works
Reorder works
Visibility works
Images/banners work
Changes reflect on website
```

## 15.6 Inventory Admin

Check:

```text
Inventory list loads
Inventory item detail loads
Manual adjustment works with reason
Movement history records
Low stock threshold works
Cost visibility permission works
```

## 15.7 Recipes Admin

Check:

```text
Recipe list loads
Recipe detail loads
Recipe items work
Cost calculation works
Versioning works
Active version works
Old orders not affected by recipe changes
```

## 15.8 Customers Admin

Check:

```text
Customer list loads
Customer profile loads
Order history visible
Addresses visible
Tags work
Notes work
Blocked status works
Wallet/loyalty visible if implemented
```

## 15.9 Media Studio

Check:

```text
Pages list loads
Sections load
Edit text works
Edit image works
Visibility toggle works
Reorder works
Preview works
Publish works
Rollback works if implemented
Website updates after publish
```

## 15.10 Settings

Check:

```text
Brand settings save
Contact settings save
WhatsApp settings save
Telegram settings save
Shipping settings save
Loyalty settings save if implemented
Private settings not public
```

---

# 16. Permissions Checklist

Confirm roles:

```text
Primary Owner
Owner
Admin
Staff
```

Check:

```text
Primary Owner cannot be deleted
Primary Owner cannot be disabled
Primary Owner cannot lose ownership
Staff cannot access restricted modules
Permission checks happen server-side
UI hiding is not the only protection
Sensitive actions are audited
```

Sensitive actions:

```text
Price update
Inventory adjustment
Recipe activation
Order cancellation
Refund
Customer block
Settings update
Role/permission update
Media publish
Page publish
```

---

# 17. Audit Log Checklist

Confirm audit log records:

```text
Product changes
Price changes
Inventory adjustments
Recipe changes
Order status changes
Order cancellations
Refunds
Customer blocks
Settings changes
Role changes
Permission changes
Media/page publish
```

Check:

```text
Audit list loads
Filters work
Old values/new values recorded where relevant
Audit logs cannot be deleted normally
```

---

# 18. Notifications Checklist

## 18.1 Telegram New Order

Confirm:

```text
New order sends Telegram notification
Message includes order number
Customer name
Phone
Items
Total
Address
Dashboard link if available
```

## 18.2 Low Stock

Confirm:

```text
Low stock notification works
Correct threshold
Correct item
No notification spam
```

## 18.3 Daily Summary

Confirm if enabled:

```text
Daily summary time correct
Orders count correct
Sales total correct
Pending orders correct
Low stock count correct
```

## 18.4 Failure Handling

Confirm:

```text
Notification failure does not break order creation
Failure is logged
Admin can see failed notification
```

---

# 19. Media and Images Checklist

Confirm:

```text
Product images optimized
Category images optimized
Hero image optimized
Blog images optimized
No broken images
No huge uncompressed images
Alt text exists where important
Mobile images responsive
WebP or optimized format used where possible
```

Check performance:

```text
Homepage does not load unnecessary huge images
Product listing lazy-loads where appropriate
Gallery images load correctly
```

---

# 20. SEO Checklist

## 20.1 Technical SEO

Confirm:

```text
sitemap.xml works
robots.txt works
Canonical URLs correct
Metadata exists
Open Graph image exists
No old /lander-only sitemap issue
No important page blocked
```

## 20.2 Pages SEO

Check SEO for:

```text
Home
Products
Categories
Product details
Blog listing
Blog posts
About
Contact
Legal pages
```

## 20.3 Bilingual SEO

Confirm:

```text
Arabic metadata exists
English metadata exists
RTL/LTR handled
No mojibake / broken Arabic text
```

---

# 21. Legal Pages Checklist

Required pages:

```text
Privacy Policy
Terms & Conditions
Shipping Policy
Return & Refund Policy
```

Confirm:

```text
Pages exist
Footer links work
Content is readable
Arabic/English support exists if required
No placeholder text
Shipping policy matches real process
Return/refund policy matches real process
```

---

# 22. Mobile Checklist

Test on mobile:

```text
Homepage
Navigation menu
Products page
Category page
Product detail
Make Your Espresso
Make Your Flavor
Cart bottom sheet
Checkout
Order success
Blog
Contact
Dashboard urgent actions
```

Check:

```text
No horizontal scroll
Buttons are tappable
Text readable
Images not cropped badly
Cart usable
Checkout fields usable
Mobile menu not broken
Animations not heavy
```

---

# 23. Browser Checklist

Test:

```text
Chrome desktop
Chrome mobile
Safari iPhone if possible
Edge desktop
Android browser if possible
```

Check:

```text
No layout break
No JS crash
No image loading issue
No font issue
No checkout issue
```

---

# 24. Performance Checklist

Check:

```text
Homepage load speed
Product listing speed
Product detail speed
Checkout speed
Dashboard speed
Image size
Bundle size
Database query speed
Pagination
Lazy loading
Caching where safe
```

Avoid:

```text
Heavy WebGL in V1
Large uncompressed videos
Too many animation libraries
Slow checkout
Large blocking scripts
```

---

# 25. Security Checklist

Confirm:

```text
Admin APIs protected
Customer data protected
Orders protected
Private settings protected
Service role server-only
Telegram token private
WhatsApp API key private if used
RLS policies reviewed
Checkout totals recalculated server-side
Discounts validated server-side
No SQL injection risk in custom queries
No unrestricted file upload
```

---

# 26. Test Orders Checklist

Create test orders:

## 26.1 Standard Product Order

```text
Add Turkish Silk 250g
Checkout
Confirm order saved
Confirm dashboard order
Confirm Telegram
Confirm WhatsApp message
```

## 26.2 Espresso Blend Order

```text
Add HEAVY CREMA 500g
Checkout
Confirm snapshots
Confirm price
Confirm admin order
```

## 26.3 Make Your Espresso Order

```text
Choose beans
Adjust ratio
Confirm profile bars
Add to cart
Checkout
Confirm custom snapshot in order
Confirm admin can see bean details
```

## 26.4 Make Your Flavor Order

```text
Choose base
Choose flavors
Add to cart
Checkout
Confirm base/flavor snapshot in order
Confirm admin can see details
```

## 26.5 Discount Order

```text
Apply valid coupon
Confirm server discount
Apply invalid coupon
Confirm rejection
Confirm usage logged
```

## 26.6 Out of Stock Test

```text
Set product out of stock
Confirm product visible if intended
Confirm cannot add to cart / checkout
```

---

# 27. Content Checklist

Confirm content exists for:

```text
Hero
Service Cards
Categories
Product descriptions
About story
Blog posts
Checkout messages
Order success messages
WhatsApp template
Telegram template
Empty states
Error states
Legal pages
```

Confirm:

```text
Arabic copy is natural
English copy is natural
No placeholder text
No lorem ipsum
No fake claims
No Nescafe naming
No old categories
```

---

# 28. Social and Marketing Readiness

Confirm:

```text
Facebook page ready
Instagram page ready
TikTok ready if used
WhatsApp Business ready
Logo uploaded
Profile images ready
Bio ready
Website link ready
First posts ready
Product photos ready
AI-generated visuals checked
```

This does not block website technical launch, but blocks marketing launch.

---

# 29. Business Operations Checklist

Before taking real orders, confirm:

```text
Product stock ready
Packaging ready
Labels/stickers ready
Delivery method ready
WhatsApp response process ready
Telegram admin recipient ready
Order confirmation process ready
Return/refund policy ready
Price list confirmed
Shipping price confirmed
Admin knows order statuses
```

---

# 30. Final Launch Approval

Do not launch until these are all true:

```text
Website opens correctly
Products and prices are correct
Mobile works
Checkout works
Order saves before WhatsApp
Dashboard receives orders
Telegram notification works
WhatsApp message works
Legal pages exist
Admin permissions work
Private settings are safe
No critical build errors
No critical security issue
```

---

# 31. Launch Day Checklist

On launch day:

```text
Deploy production
Open website in incognito
Test homepage
Test product page
Test cart
Place final test order
Check dashboard
Check Telegram
Check WhatsApp
Check mobile
Check contact links
Check legal links
Check sitemap
Monitor logs
Monitor first real order
```

---

# 32. First 24 Hours Monitoring

Monitor:

```text
Orders
Checkout errors
WhatsApp redirects
Telegram failures
Customer messages
Out-of-stock issues
Broken images
Mobile complaints
Slow pages
Admin errors
```

Do not make large redesign changes during first 24 hours.

Only fix urgent bugs.

---

# 33. First 7 Days Monitoring

Review:

```text
Most viewed products
Most added to cart
Checkout drop-off
Orders completed
Customer questions
Top search terms
Products with low sales
Shipping issues
Inventory movement accuracy
```

---

# 34. First 30 Days Improvements

Improve based on real data:

```text
Homepage ordering
Best sellers
Product photos
Product descriptions
Offers
Blog content
Social content
Category descriptions
Checkout copy
Shipping clarity
```

Do not guess too much after launch.

Use real analytics and customer messages.

---

# 35. Final Rule

Line Coffee V2 launch is successful only when:

```text
Customer experience is premium and clear.
Ordering is easy.
Order data is safe.
Admin can manage the business.
Products and prices are controlled from dashboard/database.
WhatsApp is confirmation, not the only order record.
Mobile experience is smooth.
Security is acceptable.
Performance is acceptable.
```

Line Coffee V2 must launch as:

```text
Premium coffee e-commerce + real business control system.
```
