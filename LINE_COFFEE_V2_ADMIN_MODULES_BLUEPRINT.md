# LINE COFFEE V2 — ADMIN MODULES BLUEPRINT

## 0. Purpose of This File

This file defines the complete admin dashboard modules for Line Coffee V2.

It explains what every dashboard page must do, what data it manages, what actions are allowed, what permissions are needed, and how each module connects to the database and website.

This file must be used together with:

* `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
* `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`
* `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`
* `LINE_COFFEE_V2_DATABASE_BLUEPRINT.md`

This file is not final code and not SQL.

It is the admin/dashboard operating blueprint.

---

# 1. Admin Dashboard Core Principle

The admin dashboard is the main control center for Line Coffee V2.

The dashboard must control:

* Products
* Categories
* Prices
* Variants
* Inventory
* Recipes
* Orders
* Customers
* Reviews
* Discounts
* Loyalty
* Blog
* Media Studio
* Analytics
* Notifications
* Users
* Roles
* Permissions
* Settings
* Audit logs

The dashboard must follow the Database First Architecture:

```text
Dashboard → Supabase Database → Website → Media Studio → Future Mobile App
```

The admin dashboard must not be a UI-only panel.

Every important admin action must read from or write to Supabase.

Config files must not be used as the live source of truth.

---

# 2. Admin Dashboard Experience

## 2.1 Dashboard Feeling

The admin dashboard should feel:

```text
Fast
Clear
Operational
Professional
Premium
Mobile-friendly
Data-first
Safe
Auditable
```

It should not feel:

```text
Decorative only
Slow
Confusing
Over-animated
Dependent on code edits
Hardcoded
```

---

## 2.2 Animation Rules

Dashboard animation should be minimal.

Allowed:

```text
KPI count-up
Cards fade in
Table rows load cleanly
Charts animate softly
Modals open smoothly
Drawers slide smoothly
Critical alert pulse
```

Avoid:

```text
Heavy cinematic animation
Parallax
Scroll storytelling
Slow transitions
Decorative effects inside tables
```

The customer website can be cinematic.

The admin dashboard must remain practical.

---

# 3. Global Admin Layout

## 3.1 Sidebar Modules

The dashboard sidebar should include:

```text
Home
Orders
Products
Categories
Inventory
Recipes
Suppliers
Purchases
Accounting
Treasury
Customers
Reviews
Discounts
Loyalty
Blog
Media Studio
Analytics
Notifications
Users
Roles & Permissions
Audit Log
Settings
```

Some modules can be hidden until implemented, but the architecture must support them.

---

## 3.2 Top Bar

The dashboard top bar should include:

```text
Global search
Quick actions
Notifications
Language switcher
Admin profile
Current environment indicator if needed
```

Quick actions examples:

```text
Create Order
Add Product
Add Inventory Item
Add Purchase
Upload Media
Create Blog Post
```

---

## 3.3 Global Search

Global search should search across:

```text
Orders
Customers
Products
Categories
Inventory items
Suppliers
Blog posts
Media assets
Settings
```

Search results should show the module and direct link.

Example:

```text
Order LC-2026-000123
Customer: Ahmed Mohamed
Product: Turkish Silk
Inventory: Brazilian Arabica
```

---

# 4. Permissions System

## 4.1 Core Roles

Admin roles:

```text
Primary Owner
Owner
Admin
Staff
```

## 4.2 Primary Owner Rule

There must be one Primary Owner.

Primary Owner cannot be:

```text
Deleted
Disabled
Blocked
Demoted
Removed from ownership
```

through normal dashboard actions.

Any critical ownership action must be blocked or require manual technical intervention.

---

## 4.3 Permission Pattern

Permissions should follow this style:

```text
module.action
```

Examples:

```text
orders.view
orders.update
orders.cancel
products.create
products.update
inventory.adjust
settings.update
users.manage
audit.view
```

---

## 4.4 Destructive Actions

Destructive actions require special permissions.

Examples:

```text
Delete product
Archive product
Cancel order
Refund order
Adjust inventory
Change role permissions
Change settings
Publish website changes
```

These actions must be logged in Audit Log.

Prefer:

```text
Hide
Archive
Disable
Soft delete
```

instead of hard delete.

---

# 5. Dashboard Home Module

## 5.1 Purpose

Dashboard Home gives the admin a quick overview of business performance and urgent actions.

---

## 5.2 Main KPIs

Dashboard Home should show:

```text
Today Sales
Today Profit
Monthly Sales
Monthly Profit
Pending Orders
Preparing Orders
Low Stock Items
New Customers
Returning Customers
Website Visits
Top Product
Best Selling Category
```

---

## 5.3 Alerts

Important alerts:

```text
New pending order
Low stock
Out of stock
Failed Telegram notification
Failed WhatsApp redirect
Unpaid order
Order waiting too long
Draft Media Studio changes not published
Critical settings missing
```

---

## 5.4 Recent Activity

Show recent activity:

```text
Recent orders
Recent customer signups
Recent inventory movements
Recent admin actions
Recent reviews pending approval
Recent media uploads
```

---

## 5.5 Actions

Available actions:

```text
Open Orders
Create Manual Order
Add Product
Adjust Inventory
Open Media Studio
View Analytics
```

---

## 5.6 Data Sources

Main database tables:

```text
orders
order_items
customers
inventory_items
inventory_movements
product_reviews
website_events
audit_logs
notifications
```

---

# 6. Orders Module

## 6.1 Purpose

Orders module manages the full order lifecycle.

It must support:

```text
Website orders
Guest orders
Manual dashboard orders
WhatsApp-based orders
Future mobile app orders
```

---

## 6.2 Order List

Order list should show:

```text
Order number
Customer name
Phone / WhatsApp
Order source
Order status
Payment status
Fulfillment status
Total
Date
Assigned admin if future-ready
Actions
```

---

## 6.3 Filters

Order filters:

```text
Order status
Payment status
Fulfillment status
Date range
Customer
Phone
Product
Category
Order source
Governorate
Has custom espresso
Has custom flavor
```

---

## 6.4 Order Statuses

Main flow:

```text
Pending
Confirmed
Preparing
Shipped
Delivered
```

Secondary statuses:

```text
Cancelled
Returned
Refunded
```

New website orders start as:

```text
Pending
```

---

## 6.5 Payment Statuses

Payment statuses:

```text
Unpaid
Partially Paid
Paid
Partially Refunded
Refunded
```

---

## 6.6 Order Detail Page

Order detail must show:

```text
Order number
Order status
Payment status
Customer snapshot
Customer profile link
Phone / WhatsApp
Address snapshot
Order items
Product snapshots
Custom builder details
Subtotal
Discount
Shipping
Wallet used
Loyalty points used
Grand total
Customer notes
Internal notes
Timeline
Payment records
Refund records
Attachments
Telegram notification status
WhatsApp message status
```

---

## 6.7 Custom Espresso Display

If order contains Make Your Espresso, show:

```text
Selected beans
Bean type
Bean origin
Ratios
Grams
Profile result
Strength
Body
Acidity
Crema
Smart suggestion used
Warnings
Recommendations
Cost estimate
Profit estimate
```

---

## 6.8 Custom Flavor Display

If order contains Make Your Flavor, show:

```text
Selected base
Selected flavors
Flavor groups
Flavor percentages if available
Suggested mix used
Weight
Price
Preparation notes
```

---

## 6.9 Order Actions

Admin can:

```text
Confirm order
Change status
Edit shipping price
Add payment
Add refund
Cancel order
Mark as preparing
Mark as shipped
Mark as delivered
Print invoice
Download invoice PDF
Contact customer on WhatsApp
Add internal note
Add attachment
Create return
```

Actions depend on permissions.

---

## 6.10 WhatsApp Rule

Correct order flow:

```text
Customer clicks Place Order
Order is saved in database
Dashboard order is created
Telegram notification is sent
Customer is redirected to WhatsApp
Customer manually presses Send
```

Important:

```text
Order must exist even if WhatsApp message is not sent.
```

---

## 6.11 Manual Orders

Admin can create manual orders from dashboard.

Manual order supports:

```text
Existing customer
New customer
Products
Variants
Custom espresso notes
Custom flavor notes
Discount
Shipping
Payment status
Internal notes
```

Manual orders must still use snapshots.

---

## 6.12 Database Tables

Main tables:

```text
orders
order_items
order_status_history
order_payments
order_refunds
order_returns
order_attachments
customers
customer_addresses
custom_espresso_orders
custom_espresso_components
custom_flavor_orders
custom_flavor_components
inventory_movements
notifications
audit_logs
```

---

# 7. Products Module

## 7.1 Purpose

Products module controls all website products.

The dashboard must be the source of truth for product data.

---

## 7.2 Product List

Product list should show:

```text
Product image
Product name AR/EN
Category
Product type
SKU
Price range
System status
Website visibility
Inventory status
Best seller
Featured
Updated date
Actions
```

---

## 7.3 Filters

Product filters:

```text
Category
Product type
System status
Website visibility
Inventory strategy
Best seller
Featured
Out of stock
Low stock
Price range
```

---

## 7.4 Product Types

Supported product types:

```text
Standard
Turkish Blend
Espresso Blend
Easy Coffee
Flavor Coffee
Coffee Mix
Cappuccino
Hot Chocolate
Custom Espresso
Custom Flavor
```

---

## 7.5 Product Status Controls

Product has separate controls:

```text
System Status: Draft / Active / Archived
Website Visibility: Visible / Hidden
Inventory Status: In Stock / Low Stock / Out of Stock
```

Rules:

```text
Draft products do not appear publicly.
Hidden products do not appear publicly.
Out of Stock products may appear but cannot be purchased.
Archived products are not active for selling.
```

---

## 7.6 Product Editor

Product editor should include tabs:

```text
Basic Info
Pricing & Variants
Media
Inventory
Recipe / Costing
Profile Attributes
SEO
Related Products
Advanced Settings
Audit History
```

---

## 7.7 Basic Info Tab

Fields:

```text
Product name AR
Product name EN
Slug
SKU
Category
Product type
Short description AR
Short description EN
Full description AR
Full description EN
Ingredients AR
Ingredients EN
Blend composition visibility
Status
Visibility
Sort order
```

Blend composition visibility:

```text
Full
Partial
Hidden
```

---

## 7.8 Pricing & Variants Tab

Products use variants, not duplicated products.

Standard variants:

```text
250g
500g
1kg
```

Each variant has:

```text
Variant name
Weight
SKU
Purchase cost
Sale price
Compare at price
Profit margin
Default variant
Status
Visibility
```

---

## 7.9 Media Tab

Admin can manage:

```text
Main image
Gallery images
Videos
Thumbnail
Alt text AR
Alt text EN
Image order
```

Rules:

```text
Drag/drop order
First image may become main image
Images stored in Media Library
Optimized versions used on website
```

---

## 7.10 Inventory Tab

Admin selects inventory strategy:

```text
Finished Stock
Recipe Driven
Hybrid
None
```

Examples:

```text
Turkish Silk: Finished Stock
Heavy Crema: Finished Stock or Recipe depending operation
Make Your Espresso: Recipe Driven
Make Your Flavor: Recipe Driven
Flavor Coffee: Finished Stock
Coffee Mix: Finished Stock
Cappuccino: Finished Stock
Hot Chocolate: Finished Stock
Easy Coffee: Finished Stock
```

---

## 7.11 Profile Attributes Tab

Admin controls product profile bars.

Attributes may include:

```text
Strength
Body
Acidity
Crema
Sweetness
Bitterness
Aroma
Creaminess
```

Source:

```text
Manual
Recipe Generated
System Generated
```

---

## 7.12 SEO Tab

Fields:

```text
SEO title AR
SEO title EN
SEO description AR
SEO description EN
Slug
Canonical URL if needed
Open Graph image
```

---

## 7.13 Related Products Tab

Admin can:

```text
Add related products manually
Reorder related products
Remove related products
Allow auto recommendations
```

Manual related products override or supplement automatic related products.

---

## 7.14 Product Actions

Actions:

```text
Create product
Edit product
Duplicate product
Preview product
Archive product
Hide product
Publish product
Update price
Update stock
Assign media
Set best seller
Set featured
```

Sensitive actions must be audited:

```text
Price update
Archive
Visibility change
Inventory strategy change
Recipe link change
```

---

## 7.15 Database Tables

Main tables:

```text
products
product_variants
product_media
product_profile_attributes
product_related
categories
media_assets
recipes
inventory_items
audit_logs
```

---

# 8. Categories Module

## 8.1 Purpose

Categories module controls website product categories.

---

## 8.2 Final Categories

Final Line Coffee categories:

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

Forbidden:

```text
Single Origin Beans
All Products sidebar
Original LINE section
Nescafe naming
```

---

## 8.3 Category List

List shows:

```text
Image
Name AR/EN
Slug
Product count
Sort order
Status
Visibility
Actions
```

---

## 8.4 Category Editor

Fields:

```text
Name AR
Name EN
Slug
Description AR
Description EN
Short description AR
Short description EN
Image
Banner image
Icon
Sort order
System status
Website visibility
SEO title AR
SEO title EN
SEO description AR
SEO description EN
```

---

## 8.5 Category Order

Admin can drag/drop category order.

This affects:

```text
Homepage Shop By Category
Products navigation
Header menus if connected
Footer links if connected
```

---

## 8.6 Database Tables

Main tables:

```text
categories
products
media_assets
page_section_items
audit_logs
```

---

# 9. Inventory Module

## 9.1 Purpose

Inventory module tracks all stockable items.

Inventory must support real business operation.

---

## 9.2 Inventory Groups

Inventory should be grouped into:

```text
Finished Products
Coffee Beans
Raw Materials
Packaging
Flavors
Bases
Other
```

---

## 9.3 Inventory Item List

List shows:

```text
Item name
Type
SKU
Unit
Current quantity
Low stock threshold
Average cost
Supplier
Status
Last movement
Actions
```

---

## 9.4 Inventory Item Detail

Shows:

```text
Current stock
Stock movements
Cost history
Supplier
Related product
Related bean/flavor
Low stock threshold
Adjustments
Notes
```

---

## 9.5 Inventory Movements

Movement types:

```text
Purchase In
Sale Out
Production In
Recipe Consumption
Adjustment In
Adjustment Out
Return In
Return Out
Waste
Damage
Sample
Expired
Correction
```

---

## 9.6 Manual Adjustments

Admin can adjust stock with reason.

Reasons:

```text
Waste
Production loss
Roasting loss
Grinding loss
Damage
Samples
Expired
Theft / Missing
Correction
```

Every adjustment must be audited.

---

## 9.7 Low Stock Alerts

Low stock triggers:

```text
Dashboard alert
Telegram notification if enabled
```

---

## 9.8 Database Tables

Main tables:

```text
inventory_items
inventory_movements
inventory_count_sessions
inventory_count_items
suppliers
products
product_variants
coffee_beans
flavor_options
audit_logs
notifications
```

---

# 10. Recipes Module

## 10.1 Purpose

Recipes connect products to ingredients, inventory, costing, profit, and production.

---

## 10.2 Recipe List

List shows:

```text
Recipe name
Product
Variant
Version
Status
Active version
Total cost
Suggested sale price
Margin
Updated date
Actions
```

---

## 10.3 Recipe Editor

Fields:

```text
Recipe name
Product
Variant
Version number
Status
Waste percentage
Production loss percentage
Default margin
Components
Notes
```

Each component:

```text
Inventory item
Quantity
Unit
Unit cost snapshot
Total cost
```

---

## 10.4 Versioning Rule

Recipes are versioned.

When recipe changes:

```text
Create new version
Do not rewrite historical order recipes
Orders store recipe version snapshot
Only one active recipe per product/variant
```

---

## 10.5 Costing

Recipe module calculates:

```text
Raw material cost
Packaging cost
Waste/loss cost
Total cost
Suggested selling price
Profit margin
```

Default margin:

```text
60%
```

Admin can override final sale price from Product module.

---

## 10.6 Database Tables

Main tables:

```text
recipes
recipe_items
inventory_items
products
product_variants
production_batches
production_batch_items
audit_logs
```

---

# 11. Suppliers Module

## 11.1 Purpose

Suppliers module manages coffee/raw material suppliers.

---

## 11.2 Supplier List

Shows:

```text
Supplier name
Phone
WhatsApp
Email
Items supplied
Status
Last purchase
Actions
```

---

## 11.3 Supplier Detail

Shows:

```text
Supplier info
Contact details
Items supplied
Last prices
Price history
Purchase orders
Invoices
Notes
Status
```

---

## 11.4 Supplier Items

Each supplier can be linked to multiple inventory items.

Fields:

```text
Inventory item
Supplier item name
Supplier SKU
Last price
Unit
Currency
Notes
```

---

## 11.5 Database Tables

Main tables:

```text
suppliers
supplier_items
supplier_price_history
purchase_orders
supplier_invoices
inventory_items
audit_logs
```

---

# 12. Purchases Module

## 12.1 Purpose

Purchases module manages purchasing workflow.

---

## 12.2 Purchase Flow

Recommended flow:

```text
Purchase Order
Goods Receiving
Supplier Invoice
Inventory Increase
Supplier Price History Update
```

Inventory increases from actual received quantity, not ordered quantity.

---

## 12.3 Purchase Order List

Shows:

```text
PO number
Supplier
Status
Expected date
Total
Created by
Approved by
Actions
```

---

## 12.4 Purchase Order Editor

Fields:

```text
Supplier
Items
Ordered quantity
Unit
Unit price
Expected date
Notes
Subtotal
Discount
Tax
Shipping
Grand total
```

---

## 12.5 Goods Receiving

Goods receiving records:

```text
Supplier
Purchase order
Received items
Actual received quantity
Unit cost
Received by
Received date
Notes
```

This creates inventory movements.

---

## 12.6 Supplier Invoice

Invoice stores:

```text
Invoice number
Supplier
Purchase order
Invoice date
Due date
Totals
Payment status
Attachment
Notes
```

---

## 12.7 Database Tables

Main tables:

```text
purchase_orders
purchase_order_items
goods_receipts
goods_receipt_items
supplier_invoices
suppliers
inventory_items
inventory_movements
supplier_price_history
media_assets
audit_logs
```

---

# 13. Accounting Module

## 13.1 Purpose

Accounting module gives financial control.

This is not a full ERP in V1, but it must be future-ready.

---

## 13.2 V1 Accounting View

Show:

```text
Sales revenue
Cost of goods sold
Gross profit
Discounts
Refunds
Shipping collected
Shipping cost if tracked
Wallet credits/debits
Purchase totals
Unpaid supplier invoices
Unpaid customer orders
```

---

## 13.3 Reports

Basic reports:

```text
Sales report
Profit report
Product profitability
Order payments report
Purchases report
Inventory valuation
Refunds report
Discount usage report
```

---

## 13.4 Database Tables

Main tables:

```text
orders
order_items
order_payments
order_refunds
inventory_movements
recipes
recipe_items
purchase_orders
supplier_invoices
wallet_transactions
promotions
```

---

# 14. Treasury Module

## 14.1 Purpose

Treasury tracks cash/bank/payment movement.

V1 can be simple.

---

## 14.2 Treasury Accounts

Future-ready accounts:

```text
Cash
Bank
Instapay
Vodafone Cash
Wallet adjustments
Manual payment channels
```

---

## 14.3 Treasury Transactions

Track:

```text
Order payment received
Refund paid
Supplier payment
Manual income
Manual expense
Wallet adjustment
```

---

## 14.4 V1 Rule

Treasury can be basic in V1 but database should not block future expansion.

---

# 15. Customers Module

## 15.1 Purpose

Customers module manages customer profiles and CRM.

---

## 15.2 Customer List

Shows:

```text
Customer name
Phone
WhatsApp
Email
Orders count
Total spent
Last order
Status
Tags
Actions
```

---

## 15.3 Filters

Filters:

```text
Status
Tags
Total spent
Last order date
Order count
Customer type
Blocked customers
High value customers
New customers
Returning customers
```

---

## 15.4 Customer Detail

Shows:

```text
Profile info
Contact info
Addresses
Orders
Total spent
Average order value
Favorite products
Tags
Internal notes
Wallet
Loyalty points
Reviews
Timeline
Consents
```

---

## 15.5 Customer Actions

Admin can:

```text
Edit customer
Add address
Add note
Add/remove tag
Block customer
Unblock customer
Create manual order
Adjust wallet
Adjust loyalty points
View timeline
```

Sensitive actions audited:

```text
Block customer
Wallet adjustment
Loyalty adjustment
Customer delete/soft delete
```

---

## 15.6 Duplicate Detection

System should warn if customers share:

```text
Same phone
Same WhatsApp
Same email
Similar name + same address
```

Strong matches may auto-link.

Weak matches should show warning/admin review.

---

## 15.7 Database Tables

Main tables:

```text
customers
customer_addresses
customer_tags
customer_tag_assignments
customer_notes
customer_timeline_events
customer_wallets
wallet_transactions
loyalty_accounts
loyalty_transactions
orders
product_reviews
customer_consents
audit_logs
```

---

# 16. Reviews Module

## 16.1 Purpose

Reviews module manages product reviews and featured homepage reviews.

---

## 16.2 Reviews List

Shows:

```text
Product
Customer
Rating
Review text
Status
Verified purchase
Featured
Date
Actions
```

---

## 16.3 Statuses

Review statuses:

```text
Pending
Approved
Rejected
Hidden
```

Only approved reviews appear publicly.

---

## 16.4 Actions

Admin can:

```text
Approve review
Reject review
Hide review
Feature review on homepage
Unfeature review
View related order
View customer
```

---

## 16.5 Homepage Rule

Homepage shows curated reviews only.

Recommended:

```text
5 to 6 featured reviews
```

---

## 16.6 Database Tables

Main tables:

```text
product_reviews
products
customers
orders
page_section_items
audit_logs
```

---

# 17. Discounts Module

## 17.1 Purpose

Discounts module controls promotions and coupons.

---

## 17.2 Discount Types

Supported types:

```text
Fixed amount
Percentage
Free shipping
Gift product
Custom
```

---

## 17.3 Promotion List

Shows:

```text
Name
Code
Type
Value
Status
Start date
End date
Usage count
Usage limit
Actions
```

---

## 17.4 Promotion Editor

Fields:

```text
Name AR
Name EN
Code
Type
Discount value
Start date
End date
Status
Minimum order amount
Maximum discount amount
Usage limit total
Usage limit per customer
Applies to
Targets
Stacking rule
Customer segment
```

---

## 17.5 Targeting

Promotions can target:

```text
All orders
Specific products
Specific categories
Specific customers
Customer tags
Customer segments
First order
Location
```

---

## 17.6 Stacking Rules

Options:

```text
Not stackable
Stackable
Admin only
```

---

## 17.7 Fraud/Loss Prevention

System may show warning if promotion causes suspicious loss.

Warning only in V1.

Do not block automatically unless rule explicitly says so.

---

## 17.8 Database Tables

Main tables:

```text
promotions
promotion_targets
promotion_usages
orders
order_items
customers
customer_tags
audit_logs
```

---

# 18. Loyalty Module

## 18.1 Purpose

Loyalty module manages points.

---

## 18.2 Default Rule

Default formula:

```text
10 EGP = 1 point
```

Point monetary value is configurable from settings.

---

## 18.3 Loyalty Account View

Shows:

```text
Customer
Points balance
Lifetime points
Points used
Points expired
Last transaction
Actions
```

---

## 18.4 Loyalty Transactions

Transaction types:

```text
Earned
Redeemed
Expired
Manual adjustment
Cancelled
```

---

## 18.5 Admin Actions

Admin can:

```text
Adjust points
View history
Disable loyalty for customer if blocked
```

Manual adjustments must be audited.

---

## 18.6 Database Tables

Main tables:

```text
loyalty_accounts
loyalty_transactions
customers
orders
site_settings
audit_logs
```

---

# 19. Blog Module

## 19.1 Purpose

Blog module manages educational and SEO content.

---

## 19.2 Blog List

Shows:

```text
Title AR/EN
Slug
Status
Author
Published date
Scheduled date
Category
Views if tracked
Actions
```

---

## 19.3 Blog Editor

Fields:

```text
Title AR
Title EN
Slug
Excerpt AR
Excerpt EN
Content AR
Content EN
Featured image
Author
Categories
Tags
Status
Publish date
Schedule date
SEO title AR
SEO title EN
SEO description AR
SEO description EN
```

---

## 19.4 Statuses

Statuses:

```text
Draft
Scheduled
Published
Archived
```

---

## 19.5 Blog Rules

Blog should support:

```text
Arabic content
English content
SEO
Featured images
Related posts
Product CTAs where relevant
```

Comments are rejected for V1.

---

## 19.6 Database Tables

Main tables:

```text
blog_posts
blog_categories
blog_post_categories
blog_tags
blog_post_tags
media_assets
admin_users
website_events
audit_logs
```

---

# 20. Media Studio Module

## 20.1 Purpose

Media Studio is the visual website control layer.

It lets admin edit website sections without editing code.

It must be database-backed.

---

## 20.2 Media Studio Controls

Media Studio controls:

```text
Home Hero
Announcement Bar
Product PNG Strip
Service Cards
Shop By Category
Best Sellers
Our Story
Latest Blog Posts
Footer
About Hero
Contact Hero
Blog Hero
Category Banners
Product Visuals
Legal page visuals if needed
```

---

## 20.3 Editing Features

Admin can:

```text
Edit text AR/EN
Edit images
Edit videos
Edit buttons
Change links
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

## 20.4 Section System

Each page has sections.

Each section can have repeated items.

Examples:

```text
Service Cards = section items
Product PNG Strip = section items
Shop By Category = section items linked to categories
Best Sellers = section items linked to products
Footer links = section items
```

---

## 20.5 Revision System

Media Studio must support:

```text
Draft
Preview
Publish
Rollback
Revision history
```

---

## 20.6 Media Library

Media library supports:

```text
Upload
Folders
Tags
Search
Filters
Preview
Alt text AR/EN
Focus point
Crop
Optimized version
Original version
```

---

## 20.7 Media Studio Permissions

Permissions:

```text
media.view
media.upload
media.delete
media.edit
media.publish
media.rollback
```

Publishing should require stronger permission than editing draft.

---

## 20.8 Database Tables

Main tables:

```text
media_assets
media_folders
media_tags
media_asset_tags
website_pages
page_sections
page_section_items
page_section_revisions
products
categories
blog_posts
audit_logs
```

---

# 21. Analytics Module

## 21.1 Purpose

Analytics module helps understand sales, profit, customers, products, campaigns, and website behavior.

---

## 21.2 Analytics Sections

Analytics should include:

```text
Sales Analytics
Profit Analytics
Product Analytics
Customer Analytics
Website Analytics
Promotion Analytics
Inventory Analytics
Checkout Analytics
```

---

## 21.3 Sales Analytics

Shows:

```text
Total sales
Sales by day
Sales by month
Average order value
Orders count
Delivered orders
Cancelled orders
Returned orders
```

---

## 21.4 Profit Analytics

Shows:

```text
Gross profit
Product profit
Category profit
Cost of goods sold
Discount impact
Refund impact
```

---

## 21.5 Product Analytics

Shows:

```text
Best sellers
Most viewed products
Most added to cart
Most abandoned products
High profit products
Low profit products
Out of stock impact
```

---

## 21.6 Customer Analytics

Shows:

```text
New customers
Returning customers
Top customers
Customer lifetime value
Average order frequency
Customer segments
```

---

## 21.7 Website Analytics

Shows:

```text
Visitors
Page views
Product views
Category views
Search terms
Add to cart
Checkout started
Orders created
Conversion rate
Traffic source
```

---

## 21.8 Promotion Analytics

Shows:

```text
Promotion usage
Discount total
Orders from promotion
Revenue after discount
Profit impact
Top used coupons
```

---

## 21.9 Database Tables

Main tables:

```text
orders
order_items
customers
products
categories
promotions
promotion_usages
website_events
search_logs
cart_events
inventory_movements
```

---

# 22. Notifications Module

## 22.1 Purpose

Notifications module manages system alerts and message logs.

---

## 22.2 Notification Types

Types:

```text
New order
Low stock
Out of stock
Daily summary
Failed order
Failed Telegram
Failed WhatsApp redirect
Pending review
Important admin action
```

---

## 22.3 Channels

Channels:

```text
Dashboard
Telegram
Email future
WhatsApp future
```

Telegram is important from launch.

---

## 22.4 Daily Summary

Default daily summary:

```text
10 PM
```

Admin can configure time later.

Summary includes:

```text
Sales
Profit
Orders
Pending orders
Low stock
Top product
New customers
```

---

## 22.5 Notification Log

Show:

```text
Channel
Recipient
Type
Status
Related item
Sent time
Error message
```

---

## 22.6 Database Tables

Main tables:

```text
notification_templates
notifications
orders
inventory_items
site_settings
audit_logs
```

---

# 23. Users Module

## 23.1 Purpose

Users module manages dashboard users.

---

## 23.2 Users List

Shows:

```text
Name
Email
Phone
Role
Status
Last login
Created date
Actions
```

---

## 23.3 User Editor

Fields:

```text
Full name
Email
Phone
Role
Status
Avatar
Notes
```

---

## 23.4 User Actions

Actions:

```text
Invite user
Edit user
Activate
Deactivate
Block
Change role
Reset access if needed
```

Primary Owner cannot be disabled or demoted.

---

## 23.5 Database Tables

Main tables:

```text
admin_users
admin_roles
admin_permissions
admin_role_permissions
audit_logs
```

---

# 24. Roles & Permissions Module

## 24.1 Purpose

Controls what each dashboard role can do.

---

## 24.2 Role List

Shows:

```text
Role name
Description
System role
Users count
Actions
```

---

## 24.3 Permission Matrix

Permissions grouped by module:

```text
Orders
Products
Categories
Inventory
Recipes
Suppliers
Purchases
Accounting
Treasury
Customers
Reviews
Discounts
Loyalty
Blog
Media Studio
Analytics
Notifications
Users
Settings
Audit Log
```

Actions:

```text
View
Create
Update
Delete
Archive
Publish
Export
Approve
Manage
```

---

## 24.4 Rules

Primary Owner role cannot be deleted.

Critical permission changes must be audited.

---

## 24.5 Database Tables

Main tables:

```text
admin_roles
admin_permissions
admin_role_permissions
admin_users
audit_logs
```

---

# 25. Audit Log Module

## 25.1 Purpose

Audit Log records important admin/system actions permanently.

---

## 25.2 Audit List

Shows:

```text
Date
Actor
Module
Action
Target
Old values
New values
IP address
User agent
```

---

## 25.3 Filters

Filters:

```text
Actor
Module
Action
Date
Target table
Target ID
```

---

## 25.4 Actions

Admin can:

```text
View
Search
Filter
Export
Archive view if needed
```

No normal dashboard deletion in V1.

---

## 25.5 Important Logged Actions

```text
Product created
Product updated
Price updated
Product archived
Inventory adjusted
Recipe changed
Order status changed
Order cancelled
Refund created
Customer blocked
Promotion changed
Settings updated
User role changed
Permission changed
Media published
Page section published
```

---

## 25.6 Database Tables

Main table:

```text
audit_logs
```

---

# 26. Settings Module

## 26.1 Purpose

Settings module controls global site and business settings.

---

## 26.2 Settings Tabs

Recommended tabs:

```text
Brand
Contact
Social Links
Checkout
WhatsApp
Telegram
Shipping
Currency
Loyalty
SEO
Appearance
Footer
Legal
Security
System
```

---

## 26.3 Brand Settings

Fields:

```text
Brand name
Logo
Favicon
Primary color
Secondary color
Arabic font
English font
Tagline
```

---

## 26.4 Contact Settings

Fields:

```text
Phone
WhatsApp
Email
Address
Business hours
Map link
```

---

## 26.5 Social Settings

Fields:

```text
Facebook
Instagram
TikTok
WhatsApp
YouTube if needed
```

---

## 26.6 Checkout Settings

Fields:

```text
Guest checkout enabled
Accounts optional
Minimum order if needed
Default shipping rule
Order number format
Order starting number
```

Default order number format:

```text
LC-2026-000001
```

---

## 26.7 WhatsApp Settings

Fields:

```text
WhatsApp phone
Message template
Redirect enabled
API key private if used later
```

Rule:

```text
WhatsApp API key must never be public.
```

---

## 26.8 Telegram Settings

Fields:

```text
Bot token private
Chat IDs
Order notification enabled
Low stock notification enabled
Daily summary enabled
Daily summary time
```

Rule:

```text
Telegram token must never be public.
```

---

## 26.9 Shipping Settings

Fields:

```text
Cairo/Giza default shipping
Other governorates rule
Free shipping threshold
Shipping companies future settings
```

Default:

```text
Cairo/Giza = 50 EGP
Other governorates = admin/shipping company confirmation
```

---

## 26.10 Currency Settings

Launch currency:

```text
EGP
```

Future-ready multi-currency can be planned but not required in V1.

---

## 26.11 Loyalty Settings

Fields:

```text
Points enabled
EGP per point
Point value
Expiration rule
Manual adjustment permissions
```

Default:

```text
10 EGP = 1 point
```

---

## 26.12 SEO Settings

Fields:

```text
Default SEO title AR/EN
Default SEO description AR/EN
Open Graph image
Robots settings
Sitemap settings
```

---

## 26.13 Database Tables

Main tables:

```text
site_settings
appearance_settings
media_assets
audit_logs
```

---

# 27. Module Priority for V1

## 27.1 V1 Critical Modules

Must have:

```text
Dashboard Home
Orders
Products
Categories
Inventory
Recipes
Customers
Media Studio
Settings
Notifications
Audit Log
Users
Roles & Permissions
```

---

## 27.2 V1 Important Modules

Should have:

```text
Suppliers
Purchases
Reviews
Discounts
Loyalty
Blog
Analytics
```

---

## 27.3 Can Be Lighter in V1

Can start simple:

```text
Accounting
Treasury
Advanced Analytics
Advanced Purchase Invoices
Advanced Shipping Companies
Advanced Customer Segments
```

---

# 28. Admin Mobile Experience

## 28.1 Purpose

Admin dashboard must work on mobile for urgent actions.

Mobile admin must support:

```text
View new orders
Confirm orders
Contact customer
Update order status
Check low stock
View basic KPIs
Approve/reject reviews
Receive alerts
```

---

## 28.2 Mobile Admin Rules

Mobile dashboard should have:

```text
Simple navigation
Large touch targets
Readable cards
Fast loading
No complex tables without mobile layout
Sticky important actions
Bottom sheets for filters/actions
```

---

# 29. Export and Reports

## 29.1 Exportable Data

Admin should be able to export:

```text
Orders
Customers
Products
Inventory
Purchases
Sales reports
Profit reports
Discount usage
Loyalty transactions
Audit logs
```

Export formats:

```text
CSV
Excel future
PDF for invoices/reports
```

---

# 30. Final Admin Rule

Line Coffee V2 admin dashboard must become the real business control center.

It must allow Mohamed and the Line Coffee team to manage the business without editing code.

The dashboard must control:

```text
What appears on the website
What products are sold
How much products cost
How stock is deducted
How orders are tracked
How customers are managed
How content is published
How performance is measured
Who can do what
What changed and when
```

The admin dashboard must not be:

```text
A fake dashboard
A UI-only preview
A hardcoded config editor
A disconnected order viewer
A system with no audit
A system that requires code edits for normal business changes
```

Final rule:

```text
Dashboard controls operations.
Supabase stores the truth.
Website reflects the database.
Every important action is safe, permission-based, and audited.
```
