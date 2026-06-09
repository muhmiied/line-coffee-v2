# LINE COFFEE V2 MASTER BLUEPRINT

## Document Purpose

This file is the approved master blueprint for Line Coffee V2.

It defines the business logic, system behavior, dashboard rules, operational decisions, and future-readiness rules.

This is not the database schema file.

The database schema should be created later in:

`LINE_COFFEE_V2_DATABASE_BLUEPRINT.md`

---

# 1. Core Architecture

## Source of Truth

Line Coffee V2 must follow a database-first architecture.

The database is the single source of truth.

System flow:

```text
Supabase Database
↓
Dashboard
↓
Media Studio
↓
Website
↓
Future Mobile App
```

Config files must not be treated as the live source of business data.

Config may only be used as fallback, seed data, or guardrails.

---

# 2. Brand Rules

Brand name:

```text
Line Coffee
```

Brand colors:

```text
Dark Brown: #522500
Beige: #FFDCC2
Black
White
```

Fonts:

```text
English: Playfair Display
Arabic: Cairo
```

Style:

```text
Premium
Luxury Coffee
Warm
Cozy
Minimal
Mobile First
Elegant
```

---

# 3. Final Product Categories

Approved categories:

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

Rejected categories:

```text
All Products
Single Origin Beans
```

---

# 4. Final Core Products

## Turkish Blends

```text
Turkish Silk
Strike Coffee
Cairo Nights
High Mood
```

## Espresso Blends

```text
HEAVY CREMA
AROMA BODY
HEADSHOT
BLACK LABEL
```

## Easy Coffee

```text
Classic Line
Gold Line
```

---

# 5. Customers

## Customer Matching Rule

Guest orders should not remain isolated forever.

The system should automatically try to link guest orders to customer profiles using repeated customer identifiers.

Matching priority:

```text
1. WhatsApp Number
2. Mobile Number
3. Email
4. Repeated Address
```

If WhatsApp, mobile, or email matches an existing customer profile, the order should be linked to that customer.

If only the address matches, the system should treat it as a possible match and show it in the dashboard for admin review.

Address-only matching must not automatically merge customers without admin confirmation.

---

## Guest-to-Account Linking

When a guest customer creates an account, the system should automatically link previous guest orders to the new account if they match by:

```text
WhatsApp Number
Mobile Number
Email
```

The customer account should then show:

```text
Previous Orders
Addresses
Spending
Order Count
Customer Lifetime Value
Loyalty Eligibility if allowed
Wishlist if synced
```

Address-only matches require careful review.

---

## Customer History & Loyalty Control

Customer history should always be linked.

Loyalty behavior must be configurable from dashboard.

Admin can decide:

```text
Award points for historical orders
Ignore historical orders
Award points only for delivered orders
Apply special registration campaigns
```

---

## Customer Lifetime Value

Each customer profile must show lifetime metrics:

```text
Total Orders
Delivered Orders
Cancelled Orders
Total Spent
Total Profit Generated
Average Order Value
First Order Date
Last Order Date
Favorite Products
Favorite Categories
```

Used for:

```text
VIP Detection
Loyalty Campaigns
Targeted Discounts
Customer Retention
B2B Expansion
Analytics
```

---

## Customer Tags

The system should support automatic customer tags with manual override.

Automatic tags may include:

```text
New Customer
Returning Customer
VIP Customer
Inactive Customer
High Value Customer
High Profit Customer
Guest Customer
Registered Customer
```

Dashboard can control tag rules.

Example:

```text
VIP Customer:
- More than 5 delivered orders
- Or total spent above configured amount

Inactive Customer:
- No orders in last 60 or 90 days
```

Admin can manually add, remove, or override customer tags.

---

## Customer Address Book

Customer accounts must support multiple saved addresses.

Each customer can have:

```text
Multiple addresses
One default address
Address labels if needed
```

Address examples:

```text
Home
Work
Family House
```

Each address includes:

```text
Governorate
City
Full Address
Building Name
Floor
Apartment
Landmark
Google Maps Link if provided
```

Guest checkout addresses are stored with the order.

When a guest becomes registered, matching historical addresses can be attached to the customer address book.

---

## Customer Notes & Summaries

Customer profiles should support:

```text
AI-generated summary in future
Manual internal notes
```

AI summaries are future-ready and may include:

```text
Purchase behavior
Favorite products
Favorite categories
Order frequency
Spending patterns
Loyalty recommendations
VIP recommendations
```

Manual notes can be added by admins.

---

## Customer Journey Tracking

The system should track customer journey behavior when possible.

Tracked behavior may include:

```text
Viewed products
Viewed categories
Search queries
Add to cart events
Removed cart items
Abandoned carts
Checkout started
Checkout abandoned
Order completed
```

Used for:

```text
Abandoned cart recovery
Customer recommendations
AI summaries
Marketing campaigns
Analytics
Product performance analysis
```

---

## Customer Duplicate Detection

The system should detect possible duplicate customers but must avoid unsafe automatic merging.

Strong matches:

```text
Same WhatsApp number
Same mobile number
Same email
```

Strong matches may link orders automatically.

Weak matches:

```text
Similar name
Repeated address
Similar order history
```

Weak matches should show a possible duplicate warning in dashboard.

Admin actions:

```text
View both profiles
Merge profiles
Ignore
Mark as not duplicate
```

---

## Customer Segments & Campaigns

The system must support dynamic customer segments.

Segments can be built using:

```text
Governorate
City
Customer Tags
Favorite Categories
Favorite Products
Loyalty Status
Customer Lifetime Value
Order Count
Last Order Date
Account Type
Guest / Registered
VIP Status
```

Examples:

```text
Cairo Customers
Espresso Customers
Flavor Coffee Customers
VIP Customers
Inactive Customers
High Value Customers
New Customers
```

Segments can be used for:

```text
Coupon Campaigns
Free Shipping Campaigns
Loyalty Campaigns
Product Launches
Seasonal Offers
Exporting Customers
```

---

## B2B Readiness

Current launch is B2C only.

V1 should not build active B2B modules.

However, the database should be future-ready for B2B.

V1 stores only:

```text
Customer Type:
- Individual
- Business
```

Deferred B2B features:

```text
Business Profiles
Wholesale Pricing
Custom Price Lists
Account Managers
Credit Limits
Quotations
Purchase Orders
B2B Discounts
Business Loyalty Programs
B2B Portal
Dedicated B2B Website
```

Future B2B functionality should be added later without rebuilding the database.

---

## Favorite Products & Categories

The system should automatically calculate customer preferences.

For each customer, the system may identify:

```text
Favorite products
Favorite categories
Frequently purchased flavors
Most repeated product types
Average preferred order size
```

Calculated from:

```text
Delivered orders
Product views
Wishlist items
Add-to-cart behavior
```

---

## Customer Authentication

Customers can login using:

```text
Email + Password
Mobile Number + Password
```

Registration can be completed using:

```text
Email
Mobile Number
Or both
```

Future-ready support:

```text
OTP Login
WhatsApp Verification
SMS Verification
Social Login
```

These are not required in V1.

---

## Customer Status & Tags

Customer profile supports both status and tags.

Status controls account behavior:

```text
Active
Inactive
Blocked
```

Tags describe business/marketing classification:

```text
VIP
New Customer
Returning Customer
High Value Customer
High Profit Customer
Espresso Lover
Flavor Coffee Lover
Guest Customer
Registered Customer
```

---

## Customer Blocking

Blocked customers can browse the website but cannot complete checkout.

Blocked customers cannot use:

```text
Checkout
Loyalty points
Promo codes
Reviews
Wishlist sync
```

Blocking should be used only for:

```text
Fake orders
Abuse
Suspicious activity
Repeated operational problems
```

Dashboard must store:

```text
Block reason
Blocked by
Blocked at
Internal notes
```

---

## Customer CRM Timeline

Each customer profile should maintain a complete activity timeline.

Timeline may include:

```text
Account Created
Guest Order Created
Registered Order Created
Order Status Changes
Loyalty Points Earned
Loyalty Points Redeemed
Coupon Usage
Review Submission
Wishlist Activity
Customer Service Notes
WhatsApp Notes
Phone Call Logs
Complaints
Delivery Issues
Manual Admin Notes
```

Purpose:

```text
Customer Support
CRM
Loyalty Programs
VIP Management
Future B2B Operations
```

---

## Customer Username

Registered customers must have a unique username.

Rules:

```text
Unique across the system
Reserved usernames cannot be used
Can be changed under controlled rules
Used for future referral programs
```

Referral system in future should use usernames instead of generated referral codes.

Example:

```text
@sika
```

---

## Customer Profile Picture

Customer profile may optionally contain a profile picture.

Options:

```text
Upload profile picture
No profile picture
```

Profile picture is not required.

Guest customers do not need profile pictures.

Profile pictures have no effect on:

```text
Checkout
Loyalty
Orders
Analytics
```

---

## Customer Payment Preferences

Registered customers should have preferred payment settings.

Examples:

```text
Cash On Delivery
InstaPay
Vodafone Cash
```

When a returning customer starts checkout, the preferred payment method may be pre-selected automatically.

Customer can always change it before placing the order.

---

## Customer Account Deletion

Customer deletion uses soft delete.

When a customer requests account deletion:

```text
Customer login is disabled
Customer profile is hidden from normal customer access
Personal account access is removed
Historical orders remain stored
Revenue, profit, inventory, and audit records remain intact
```

Reason:

```text
Order, accounting, tax, and business records must not be deleted.
```

Dashboard may show:

```text
Deleted Customer
Anonymized Customer if needed later
```

---

## Customer Consent Log

The system should maintain a consent history for each customer.

Examples:

```text
Terms of Service Accepted
Privacy Policy Accepted
Loyalty Program Accepted
```

Marketing consent is not required for WhatsApp campaigns in V1.

Stored information:

```text
Consent Type
Accepted / Rejected
Date & Time
Source
```

Sources:

```text
Website
Mobile App Future
Dashboard
API
```

---

## Customer Wallet

The system should support a customer wallet.

Wallet balance can be increased through:

```text
Refunds
Compensation
Loyalty Rewards
Promotional Credits
Manual Admin Credits
```

Wallet can be used during checkout.

Admin can:

```text
Add Balance
Deduct Balance
View Wallet History
View Wallet Transactions
Add Notes
```

Transaction types:

```text
Refund
Reward
Compensation
Adjustment
Manual Credit
Manual Debit
```

---

# 6. Products & Categories

## Product Status, Visibility & Availability

System status, website visibility, and inventory availability are separate concepts.

System status:

```text
Draft
Active
Archived
```

Website visibility:

```text
Visible
Hidden
```

Inventory availability:

```text
In Stock
Low Stock
Out Of Stock
```

Rule:

```text
Nothing should disappear from dashboard automatically.
Dashboard is the source of truth.
Visibility only affects public website appearance.
```

Example:

```text
Product Status: Active
Website Visibility: Hidden
Inventory: 10kg

Result:
Visible in dashboard
Not visible on website
```

---

## Out Of Stock Behavior

Products should remain visible when out of stock.

Customer can:

```text
View product
Read description
View reviews
View specifications
```

Customer cannot:

```text
Purchase product
Add unavailable quantity to cart
```

Show label:

```text
Out Of Stock
```

Future feature:

```text
Notify Me When Available
```

When stock reaches zero:

```text
Dashboard alert
Inventory alert
Optional Telegram alert
```

---

## Product Variants

Products should be stored as a single product.

Weights and sizes are variants.

Example:

```text
Product:
Strike Coffee

Variants:
250g
500g
1kg
```

Benefits:

```text
Better SEO
Cleaner UX
Easier Inventory
Easier Pricing
Easier Dashboard Management
```

---

## Product SKU System

Every product must have an internal SKU.

Examples:

```text
TS-001
SC-001
CN-001
HC-001
FC-001
```

Rules:

```text
SKU must be unique
SKU is primarily for internal operations
SKU may be shown in dashboard
SKU may be used in exports
SKU may be used in inventory
SKU may be used in future barcode systems
```

Each variant should also have its own SKU.

Example:

```text
SC-001-250
SC-001-500
SC-001-1000
```

---

## Product Media System

Products must support rich media.

Supported media types:

```text
Main Image
Gallery Images
Product Videos
```

Main image is used in:

```text
Product Cards
Best Sellers
Search Results
Related Products
Wishlist
```

Gallery images are used in:

```text
Product Details Page
Product Zoom
Mobile Gallery
```

Videos are used in:

```text
Product Details Page
Marketing Content
Product Demonstrations
Brewing Guides
Reels-style Product Content
```

Future-ready:

```text
360° Product Media
Interactive Product Views
AI Generated Media
```

---

## Product Media Ordering

Product images and videos must support drag-and-drop ordering.

The first image becomes the main product image by default.

Admin can:

```text
Reorder images
Reorder videos
Set main image
Remove media
Replace media
Preview order before publishing
```

---

## Product SEO

Each product must support SEO settings.

SEO mode:

```text
Automatic SEO generation
Manual SEO override
```

Fields:

```text
SEO Title
SEO Description
Slug
Open Graph Image
Canonical URL
Index / NoIndex
```

Default behavior:

If admin does not manually enter SEO fields, the system generates them automatically from:

```text
Product name
Product category
Short description
Main product image
```

Manual override is optional.

---

## Product Slug System

Each product must have a unique slug.

Default behavior:

```text
Strike Coffee → strike-coffee
HEAVY CREMA → heavy-crema
French Coffee → french-coffee
```

Admin can manually edit slug.

Validation rules:

```text
Slug must be unique
Slug cannot conflict with existing pages
System suggests alternatives if slug already exists
```

---

## Product Description Structure

Each product should support:

```text
Short Description
Highlights
Full Description
Ingredients / Blend Composition
```

Composition supports both:

```text
Internal recipe management
Public product information
```

Admin decides whether public website shows:

```text
Exact percentages
Partial composition
Ingredients only
No composition
```

---

## Dynamic Product Profile System

Product profile bars are not globally fixed.

They are generated from structured profile data stored in the database.

The admin/user will prepare a large profile mapping table that defines how ingredients, beans, flavors, and bases affect each profile attribute.

Examples:

Brazil Arabica may affect:

```text
Body
Sweetness
Crema
Acidity
```

Hazelnut flavor may affect:

```text
Nutty Flavor
Aroma
Sweetness
```

Cappuccino base may affect:

```text
Creaminess
Foam Richness
Sweetness
```

Rules:

```text
Profile bars are not hardcoded
They are calculated from product ingredients, recipes, and profile mapping data
Admin can later update profile mapping from dashboard
Admin can override calculated values if needed
```

---

## Related Products System

Related products should support automatic generation and manual override.

Automatic related products may use:

```text
Same category
Similar product type
Shared ingredients
Shared flavor group
Similar profile attributes
Best sellers
Customer behavior later
```

Manual selection has priority when enabled.

---

## Category Media System

Each category supports:

```text
Main Image
Banner Image
```

Future-ready:

```text
Mobile Banner Image
Category Icon
```

Main image used in:

```text
Category Cards
Shop By Category
Search Results
```

Banner image used in:

```text
Category Page Hero
Marketing Sections
Landing Sections
```

All category media managed from Media Studio.

---

## Category Ordering System

Category ordering must be controlled from dashboard using drag and drop.

Category order affects:

```text
Homepage Categories Section
Products Page
Mobile Navigation
Search Suggestions
Category Menus
Future Mobile App
```

No hardcoded category ordering.

---

## Category SEO

Each category supports SEO settings.

Fields:

```text
SEO Title
SEO Description
Slug
Open Graph Image
Canonical URL
Index / NoIndex
```

SEO mode:

```text
Automatic generation
Manual override
```

Default generation from:

```text
Category name
Category description
Category image/banner
Related products
```

---

## Category Status & Visibility

Categories follow the same architecture used for products.

System status:

```text
Draft
Active
Archived
```

Website visibility:

```text
Visible
Hidden
```

Nothing disappears from dashboard automatically.

---

# 7. Recipes, Inventory & Costing

## Recipe Engine

Recipes are operational entities, not informational text.

Every blend product may have a recipe linked to inventory and costing.

Example:

```text
HEAVY CREMA
60% Brazil
40% Colombia
```

Selling 1kg deducts:

```text
0.6kg Brazil
0.4kg Colombia
```

Recipes are connected to:

```text
Inventory
Costing
Profit Calculation
Purchasing
```

---

## Inventory Consumption Methods

The system supports multiple inventory methods.

Method 1: Finished Product Stock

Used for products prepared and stocked in advance.

Examples:

```text
Turkish Silk
Strike Coffee
Cairo Nights
High Mood
Flavor Coffee
Coffee Mix
Cappuccino
Hot Chocolate
Easy Coffee
```

Deduction:

```text
Sell 250g → deduct 250g from finished product stock
```

Method 2: Recipe Driven

Used for products prepared from ingredients at order time.

Examples:

```text
Make Your Espresso
Make Your Flavor
```

Deduction:

```text
Sell 1kg custom blend → deduct ingredients according to recipe percentages
```

Method 3: Configurable Hybrid

Products can choose their inventory method from dashboard.

Example:

```text
HEAVY CREMA may operate as:
Finished Product Stock
or
Recipe Driven
```

---

## Recipe Versioning

Recipes must support version history.

Every order must store the recipe version used during production.

Historical orders must never change when a recipe changes.

Admin can:

```text
Create new recipe version
Clone existing version
Activate version
Archive version
View version history
```

---

## Production Batch System

The system must support production batches.

Batch stores:

```text
Batch Number
Product
Production Date
Quantity Produced
Recipe Version
Production Cost
Notes
```

Produced quantity increases finished stock.

Finished products may be traced back to production batches.

---

## Product Costing Engine

Product costing must support full cost calculation.

Cost components:

Raw materials:

```text
Coffee Beans
Flavors
Creamer
Milk Powder
Foam Powder
Cocoa
Other Ingredients
```

Packaging:

```text
Coffee Bag
Valve
Sticker
Labels
Boxes
```

Operations:

```text
Roasting
Grinding
Production
Transportation
Miscellaneous Costs
```

Formula:

```text
Raw Material Cost
+
Packaging Cost
+
Operational Cost
=
Total Product Cost
```

Suggested selling price:

```text
Total Cost + Configured Profit Margin
```

Default margin:

```text
60%
```

---

## Inventory Adjustments & Loss Management

The inventory system must support stock adjustments.

Inventory increase examples:

```text
Stock Correction
Inventory Count Adjustment
Returned Goods
Production Return
```

Inventory decrease examples:

```text
Waste
Production Loss
Roasting Loss
Grinding Loss
Damaged Products
Samples
Expired Products
Theft / Missing Stock
Manual Correction
```

Each adjustment stores:

```text
Adjustment Type
Product / Ingredient
Quantity
Unit
Date
User
Reason
Notes
Optional attachment
```

Every adjustment is recorded in audit log.

---

## Inventory Count Sessions

The inventory system must support count sessions.

Count types:

```text
Monthly Count
Quarterly Count
Annual Count
Custom Count
```

Each count session stores:

```text
Session Number
Session Date
Count Type
Created By
Approved By
Status
```

Each item count stores:

```text
System Quantity
Physical Quantity
Difference
Difference Value
Reason
Notes
```

Flow:

```text
Count Session
↓
Difference Detected
↓
Review
↓
Approval
↓
Inventory Adjustment
```

---

## Supplier Price History

The system must maintain complete supplier price history.

Stores:

```text
Supplier
Item
Purchase Price
Date
Purchase Invoice
Currency
Notes
```

Historical costing uses the ingredient cost that existed at the time of production.

---

## Multi-Supplier Item Pricing

The same inventory item can be purchased from multiple suppliers.

Example:

```text
Brazil Arabica:
Supplier A price: 500 EGP / KG
Supplier B price: 520 EGP / KG
```

Supplier-item relationship includes:

```text
Supplier
Inventory Item
Last Purchase Price
Currency
Unit
Last Purchase Date
Preferred Supplier Flag
Notes
```

Purchase invoice requires:

```text
Supplier
Item
Quantity
Unit Price
```

Costing always uses the supplier and invoice price that created the stock.

---

## Inventory Costing Method

Line Coffee V2 uses FIFO as the primary inventory costing method.

FIFO:

```text
First In
First Out
```

Each inventory batch keeps its own purchase cost.

Consumption deducts from the oldest available batch first unless owner manually overrides.

---

## Manual Cost Override

Manual cost override is supported but restricted.

Default permission:

```text
Owner Only
```

Every override stores:

```text
Previous Cost
New Cost
User
Date
Time
Reason
Notes
```

Reports distinguish:

```text
Calculated Cost
Override Cost
```

---

# 8. Suppliers & Purchases

## Purchase Approval Workflow

Purchase approval is permission-based.

Owner can:

```text
Create Purchase
Approve Purchase
Increase Inventory Directly
```

Admin can:

```text
Create Purchase
Approve Purchase if permission granted
```

Staff can:

```text
Create Purchase Draft
Submit For Approval
```

Staff cannot increase inventory directly.

Flow:

```text
Staff Creates Purchase
↓
Pending Approval
↓
Owner/Admin Approval
↓
Inventory Increase
↓
Supplier Balance Update
↓
Accounting Entries
```

---

## Purchase Orders, Receiving & Invoicing

The system separates:

```text
Purchase Order
Goods Receiving
Supplier Invoice
```

Purchase Order = what was requested.

Receiving = what was physically received.

Supplier Invoice = what supplier billed.

Inventory increases only from actual received quantities, not requested quantities.

---

## Purchase Returns

The system must support supplier purchase returns.

Reasons:

```text
Quality Issue
Wrong Item
Damaged Goods
Supplier Error
Expired Product
Other
```

Effects:

```text
Inventory Reduction
Supplier Balance Adjustment
Accounting Adjustment
Audit Log Entry
```

Return statuses:

```text
Draft
Pending
Approved
Completed
Cancelled
```

Returns are recorded separately from inventory adjustments.

---

## Supplier Performance Scoring

Status:

```text
Deferred
```

Reason:

```text
Current business size does not require supplier scoring.
```

May be added later.

---

# 9. Orders

## Order Number System

Order numbers support configurable formats.

Default:

```text
LC-2026-000001
```

Requirements:

```text
Unique
Sequential
Human readable
Searchable
```

Admin can configure:

```text
Prefix
Year Inclusion
Sequence Format
```

Changing numbering rules must not affect historical orders.

---

## Order Status Flow

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

Definitions:

```text
Pending: Order created and awaiting review
Confirmed: Order accepted and approved
Preparing: Order is being prepared, packed, or produced
Shipped: Order handed to shipping provider
Delivered: Order successfully delivered
Cancelled: Order cancelled before completion
Returned: Delivered order returned
Refunded: Customer refunded partially or fully
```

All new orders start as Pending.

---

## Order Assignment

Status:

```text
Rejected for V1
```

Reason:

```text
Current business size does not require order assignment.
```

May be reconsidered when team size grows.

---

## Order Cancellation Rules

Customers may cancel orders only while status is:

```text
Pending
```

Once order is Confirmed, customer self-cancellation is disabled.

Admins may cancel orders at any stage if permissions allow.

---

## Order Editing Rules

Customers may edit orders only while status is:

```text
Pending
```

Editable fields:

Customer information:

```text
Name
Phone
WhatsApp
Email
```

Delivery information:

```text
Address
Location Link
Notes
```

Order information:

```text
Products
Variants
Quantities
```

After Confirmed, customer editing is disabled.

Admin edits are permission-based and audited.

---

## Refund System

The system supports:

```text
Full Refunds
Partial Refunds
```

Refund methods:

```text
Original Payment Method
Customer Wallet
Manual Refund
```

Refund reasons:

```text
Missing Item
Damaged Product
Delivery Issue
Customer Compensation
Pricing Correction
```

Every refund stores:

```text
Refund Amount
Refund Type
Refund Method
Reason
Notes
User
Date
Time
```

Refunds must not silently modify historical order totals.

---

## Returns Workflow

Return flow:

```text
Requested
Approved
Returned
Refunded
```

The system must distinguish between:

```text
Return requested
Return approved
Item physically returned
Refund completed
```

---

## Order Payment Status

Order status and payment status are separate.

Payment statuses:

```text
Unpaid
Partially Paid
Paid
Partially Refunded
Refunded
```

Delivered does not automatically mean paid unless payment is confirmed.

Supported payment methods:

```text
Cash On Delivery
InstaPay
Vodafone Cash
Customer Wallet
Future Payment Gateways
```

---

## Shipping Rules

Local shipping:

```text
Cairo = 50 EGP
Giza = 50 EGP
```

Other governorates:

```text
Handled through shipping companies
Shipping cost may be determined by shipping company
Admin may add during order confirmation
```

Free shipping campaigns are supported.

Free shipping and promotion campaigns may be displayed through Announcement Bar.

---

## Shipping Companies

The system supports shipping companies.

No shipping company is required at launch.

Admin can:

```text
Create Shipping Company
Edit Shipping Company
Disable Shipping Company
Archive Shipping Company
```

Shipping company information:

```text
Company Name
Contact Information
Tracking URL Template
Notes
Active Status
```

Future-ready for:

```text
Shipment Tracking
Tracking Numbers
Shipping Reports
Shipping APIs
```

---

## Shipment Tracking Numbers

Tracking numbers are optional.

Order may contain:

```text
Shipping Company
Tracking Number
Shipment Date
Delivery Date
```

Customer may view shipping company and tracking number when available.

---

## Order Notes System

Orders support separate note types.

Customer notes:

```text
Visible to customer and admin
```

Examples:

```text
Call before delivery
Building instructions
Floor number
Delivery preferences
```

Internal notes:

```text
Visible only to admin/authorized staff
```

Examples:

```text
VIP Customer
Add Free Sample
Delivery issue follow-up
Internal operational notes
```

---

## Order Attachments

Orders may support optional attachments.

Attachments are not required for normal order flow.

Examples:

```text
InstaPay Screenshot
Payment Proof
Location Screenshot
Shipping Receipt
Return Evidence
Damage Photo
Refund Proof
```

Most communication may still happen through WhatsApp.

---

## Order Timeline

Each order must maintain its own timeline.

Events:

```text
Order Created
WhatsApp Redirect Triggered
Order Edited
Order Confirmed
Order Preparation Started
Order Shipped
Order Delivered
Order Cancelled
Return Requested
Return Approved
Return Received
Refund Issued
```

Order Timeline is separate from Customer CRM Timeline.

---

## Order Snapshot System

Orders must store historical snapshots at purchase time.

Snapshots include:

```text
Product name
Variant
Price
Discount
Coupon
Shipping fee
Recipe version
Loyalty rule
Payment method
Customer data
```

Historical orders must never change when:

```text
Products change
Prices change
Coupons change
Recipes change
Shipping rules change
Loyalty rules change
```

---

## Manual Orders

The system must support manual order creation from dashboard.

Use cases:

```text
Phone Orders
WhatsApp Orders
Returning Customers
Special Orders
Future B2B Orders
```

Manual orders use the same:

```text
Inventory
Costing
Loyalty
Accounting
Order Status Flow
```

---

## Invoice Generation

The system should support invoice generation for orders.

Formats:

```text
PDF invoice
Printable version
Downloadable from dashboard
```

Invoice contents:

```text
Invoice number
Order number
Customer information
Order items
Quantity
Unit price
Line total
Subtotal
Shipping
Discounts
Points / Wallet usage
Final total
Payment method
Order date
```

Invoices are generated from order snapshots.

---

## Telegram Order Notifications

Telegram notifications should provide detailed operational information.

Contents:

```text
Order Number
Order Date
Order Status
Customer Name
Phone
WhatsApp
Email
Products
Variants
Quantities
Total Quantity
Order Total
Subtotal
Discounts
Shipping
Wallet Usage
Final Total
New/Returning Customer
Customer Order Count
Customer Lifetime Value
Payment Method
Payment Status
Internal Notes if applicable
```

---

# 10. Checkout & WhatsApp Flow

## Checkout Flow

Primary checkout flow:

```text
Place Order
↓
Server Validation
↓
Database Save
↓
Dashboard Order Created
↓
Telegram Notification
↓
Automatic WhatsApp Redirect
↓
Customer presses Send manually
```

The order must exist even if the customer never sends the WhatsApp message.

Telegram notification is required because:

```text
Customer may not have WhatsApp installed
Customer may close WhatsApp before sending
Customer may forget to press Send
WhatsApp redirect may fail
Admin must still receive order instantly
```

---

## WhatsApp Message

WhatsApp message should include full order details.

Customer:

```text
Name
Phone
WhatsApp
Email
Governorate
City
Address
Google Maps Link
```

Products:

```text
Product Name
Variant
Quantity
Unit Price
Line Total
```

Totals:

```text
Subtotal
Shipping
Discount
Points Used
Wallet Used
Final Total
```

Custom builder details must be included when relevant.

---

# 11. Discounts, Promotions & Campaigns

## Promotion Types

Supported promotion types:

```text
Fixed Amount Discount
Percentage Discount
Free Shipping
Gift Product
Future Custom Promotions
```

Examples:

```text
50 EGP Off
10% Off
Free Shipping
Buy 1kg Get 250g Free
Free Sample
```

All promotion types operate through a unified promotion engine.

---

## Coupon Restrictions & Rules

Promotion system supports advanced restrictions.

Order restrictions:

```text
Minimum Order Amount
Maximum Discount Amount
Minimum Quantity
Maximum Quantity
```

Usage restrictions:

```text
Total Usage Limit
Per Customer Usage Limit
Per Account Usage Limit
```

Time restrictions:

```text
Start Date
End Date
Scheduled Activation
Scheduled Deactivation
```

Product restrictions:

```text
Specific Products
Product Groups
Categories
```

Customer restrictions:

```text
New Customers Only
Returning Customers Only
VIP Customers Only
Specific Customer Segments
```

Geographic restrictions:

```text
Governorates
Cities
```

---

## Promotion Stacking Rules

Promotion stacking must be configurable.

Admin can configure:

```text
Coupon + Coupon
Coupon + Loyalty
Coupon + Wallet
Coupon + Free Shipping
Loyalty + Wallet
```

Checkout validates:

```text
Promotion Eligibility
Stacking Rules
Customer Eligibility
Product Eligibility
```

---

## First Order Promotions

The system supports first-order promotions.

Default matching logic:

```text
Mobile Number
WhatsApp Number
Email Address
```

Admin can choose matching criteria:

```text
Mobile Only
Email Only
WhatsApp Only
Mobile + Email
Mobile + WhatsApp
Mobile + WhatsApp + Email
```

Promotion examples:

```text
First Order Discount
First Order Free Shipping
First Order Gift
First Order Loyalty Bonus
```

---

## Birthday Promotions

Birthday promotions are supported and optional.

Customer birthday is optional.

Promotion types:

```text
Birthday Coupon
Birthday Free Shipping
Birthday Gift Product
Birthday Loyalty Bonus
Birthday Wallet Credit
```

Admin controls:

```text
Campaign active/inactive
Reward type
Reward value
Validity period
Minimum order amount
One-time use per birthday period
Message text
```

---

## Announcement Bar Messages

Announcement Bar supports multiple active messages.

Message types:

```text
Free Shipping Campaigns
Promo Codes
Birthday Promotions
Seasonal Offers
Product Launches
Custom Notices
```

Behavior:

```text
Multiple messages active at same time
Automatic rotation
Admin controls order
Admin controls active dates
Admin can enable/disable each message
```

Animation is defined later in Visual & UX Blueprint.

---

## Campaign Scheduling

Promotions and campaigns support scheduling.

Options:

```text
Start Date
End Date
No End Date
```

If no end date, campaign remains active until admin manually disables it.

---

## Coupon Code Format

Coupon codes can be created manually or generated automatically.

Manual examples:

```text
WELCOME10
LINE100
CAIRO50
ESPRESSO15
```

Auto-generated codes are useful for:

```text
Customer-specific coupons
Birthday campaigns
First order rewards
Referral rewards
Loyalty rewards
Recovery campaigns
```

Rules:

```text
Unique
Case-insensitive
Easy to copy
No conflict with existing codes
```

---

## Assigned Coupons

Coupons can be assigned to specific customers by:

```text
Customer Account
Email
Mobile Number
WhatsApp Number
```

Use cases:

```text
Special customer discount
Compensation coupon
VIP offer
WhatsApp private offer
Birthday reward
First order reward
```

Assigned coupons cannot be used by other customers.

---

## Promotion Analytics

Each promotion/coupon must have analytics:

```text
Total Uses
Unique Customers
Revenue Generated
Profit Generated
Total Discount Given
Average Order Value
Conversion Impact
Used By Customers
Used Products / Categories
```

---

## Loss Prevention & Promotion Validation

The system should warn admin when promotions may reduce profit significantly or create losses.

Default:

```text
Warning Only
```

Warnings:

```text
High Discount Percentage
Multiple Stacked Promotions
Free Shipping Impact
Loyalty + Coupon Combination
Negative Margin Risk
```

Do not block by default.

Final decision remains with owner.

---

# 12. Loyalty

## Loyalty Points System

Point earning formula is configurable.

Default:

```text
Every 10 EGP = 1 Point
```

Admin can:

```text
Change earning rate
Create bonus campaigns
Create double points campaigns
Disable points temporarily
Adjust customer points manually
```

Points may be earned from:

```text
Orders
First Order Campaigns
Birthday Campaigns
Special Promotions
Manual Rewards
```

---

## Loyalty Point Value

Point monetary value is configurable.

Examples:

```text
1 Point = 0.1 EGP
1 Point = 0.25 EGP
1 Point = 0.5 EGP
Custom Value
```

Customer can see:

```text
Available Points
Redemption Value
Remaining Balance
```

---

## Loyalty Points Expiration

Point expiration rules are configurable.

Supported modes:

```text
No Expiration
Fixed Expiration Period
Custom Expiration Rules
```

Default:

```text
No Expiration
```

Possible periods:

```text
6 Months
12 Months
24 Months
```

---

## Loyalty Tiers

Status:

```text
Deferred
```

Future tier examples:

```text
Bronze
Silver
Gold
Black
```

Potential benefits:

```text
Higher point multipliers
Exclusive promotions
Early access products
VIP offers
Special gifts
```

Not required for launch.

---

# 13. Reviews & Feedback

## Product Reviews & Ratings

Only customers who actually purchased the product may submit product reviews.

Verified purchases receive:

```text
Verified Purchase Badge
```

Review contents:

```text
Rating 1-5 stars
Written Review
Review Images optional
Review Videos future
```

Statuses:

```text
Pending
Approved
Rejected
Hidden
```

Admin can:

```text
Approve
Reject
Hide
Feature
```

---

## Review Approval Workflow

Reviews are not published automatically.

Flow:

```text
Customer submits review
↓
Pending Review
↓
Admin Review
↓
Approved / Rejected
↓
Published if approved
```

---

## Review Replies

Status:

```text
Rejected for V1
```

Reason:

```text
Most customer feedback will come through social media or WhatsApp.
Admin replies happen on Facebook, Instagram, WhatsApp, or phone.
```

---

## Reviews & Testimonials Storage

Do not create a separate heavy Testimonials system in V1.

Use one unified Reviews/Feedback module.

Sources:

```text
Website Review
Facebook
Instagram
WhatsApp
Manual Entry
```

Feedback may be linked to:

```text
Specific product
Or Line Coffee brand generally
```

---

## Website Reviews Display

Homepage displays a small curated set of reviews.

Recommended count:

```text
5 to 6 approved reviews
```

Admin manually selects featured reviews.

Admin can:

```text
Feature Review
Unfeature Review
Reorder Featured Reviews
Hide Review
```

---

# 14. Notifications

## Low Stock Alerts

Enabled channels:

```text
Dashboard Notifications
Telegram Notifications
```

Email notifications disabled by default.

Each inventory item can define:

```text
Minimum Stock Level
Reorder Level
Critical Stock Level
```

Alerts:

```text
Low Stock
Critical Stock
Out Of Stock
```

---

## Daily Business Summary

The system must support automated daily business summaries.

Channel:

```text
Telegram
```

Default schedule:

```text
10:00 PM Daily
```

Summary includes:

Orders:

```text
Total Orders
New Orders
Delivered Orders
Cancelled Orders
```

Financials:

```text
Revenue
Profit
Discounts Given
Refunds
```

Customers:

```text
New Customers
Returning Customers
```

Products:

```text
Best Selling Products
Worst Selling Products
```

Inventory:

```text
Low Stock Alerts
Critical Stock Alerts
Out Of Stock Items
```

---

## Notification Priority System

Notifications support priority levels.

Info:

```text
New Order
New Customer Account
Review Submitted
Content Draft Created
```

Warning:

```text
Low Stock
Pending Orders Delayed
Pricing Review Needed
Failed WhatsApp Redirect
```

Critical:

```text
Out Of Stock
Large Order
Inventory Variance
Failed Telegram Notification
Failed Checkout Save
System Error
```

Dashboard can group/filter by priority.

Telegram messages should clearly show priority.

---

## Telegram Notification Recipients

Default:

```text
Owner receives all Telegram notifications.
```

Future support:

```text
Route notifications by user
Role
Department
Notification Type
Priority Level
Delivery Channel
```

---

# 15. Users, Roles & Permissions

## Ownership

The system supports one Primary Owner.

Primary Owner has unrestricted access.

Primary Owner:

```text
Cannot be deleted
Cannot be disabled
Cannot lose ownership privileges accidentally
```

Additional owner accounts may exist.

Roles:

```text
Primary Owner
Owner
Admin
Staff
```

The system must always have exactly one Primary Owner.

---

## Permission Matrix

Roles define default access.

Permission matrix can override role defaults.

Permission areas:

```text
Orders
Customers
Products
Categories
Inventory
Recipes
Suppliers
Purchases
Accounting
Treasury
Discounts
Loyalty
Reviews
Blog
Media Studio
Analytics
Notifications
Users & Permissions
Settings
Audit Log
```

Primary Owner can:

```text
Grant permissions
Revoke permissions
Clone permissions
Create permission templates
```

---

## User Activity Tracking

The system tracks user activity.

Stores:

```text
Last Seen
Last Login
Last Logout
Current Status
Last Significant Action
```

Examples:

```text
Edited Product
Updated Price
Approved Purchase
Modified Order
Created Coupon
Published Blog Post
```

User activity tracking is separate from Audit Logs.

---

## Delete Permission & Super Owner Approval

Any destructive delete action requires Primary Owner approval.

Applies to:

```text
Products
Categories
Media Assets
Website Sections
Blog Posts
Reviews
Customers
Suppliers
Purchases
Orders
Inventory Records
Settings
Users
```

Preferred actions:

```text
Hide
Archive
Disable
```

Deletion flow:

```text
Delete Request
↓
Pending Super Owner Approval
↓
Approve / Reject
↓
Audit Log Entry
```

---

# 16. Audit Log

## Audit Log Retention

Audit logs are retained permanently by default.

Audit logs cannot be deleted from dashboard in V1.

Allowed actions in V1:

```text
View
Filter
Search
Export
Archive
```

Not allowed in V1:

```text
Delete Audit Logs from Dashboard
```

If deletion is ever required, it must be done manually at database level by Primary Owner or technical maintainer.

---

# 17. System Settings

The system provides centralized Settings organized into tabs.

Suggested sections:

```text
General Settings
Contact Settings
Social Media
Shipping Settings
Notification Settings
SEO Settings
Order Settings
Loyalty Settings
Promotion Settings
System Settings
```

General settings:

```text
Brand Name
Brand Description
Logos
Favicon
```

Contact settings:

```text
Phone Numbers
WhatsApp
Email Addresses
Address
```

Social media:

```text
Facebook
Instagram
TikTok
YouTube
LinkedIn
Other Platforms
```

System settings:

```text
Localization
Currency
Timezone
Date Format
```

---

# 18. Bilingual Content & Localization

The platform supports:

```text
Arabic
English
```

Every customer-facing content element must have independent Arabic and English versions.

Examples:

```text
Products
Categories
Blog Posts
Homepage Sections
Media Studio Content
SEO Content
Notifications
Legal Pages
```

Translation philosophy:

```text
Localization, not literal translation.
```

Quality standard:

```text
Arabic content sounds natural to Arabic speakers.
English content sounds natural to English speakers.
Literal machine-style translation is not acceptable.
```

Language integrity:

```text
Arabic mode must not show unintended English fragments.
English mode must not show unintended Arabic fragments.
```

SEO fields must be bilingual.

---

# 19. Currency

Launch currency:

```text
EGP
Egyptian Pound
```

Future-ready currencies:

```text
USD
SAR
AED
EUR
```

Launch rule:

```text
Only EGP is active at launch.
```

Admin can configure:

```text
Primary Currency
Currency Symbol
Currency Formatting
```

---

# 20. Dashboard & Analytics

## Dashboard Main KPIs

Dashboard home must show:

```text
Sales / Revenue
Profit
Orders Count
Customers Count
Website Visits
```

Recommended dashboard cards:

```text
Today's Orders
Today's Revenue
Today's Profit
Month Revenue
Month Profit
Pending Orders
Low Stock Alerts
Top Product
New Customers
Returning Customers
Website Visits
```

---

## Analytics Filtering System

Analytics and reports support filtering.

Time filters:

```text
Today
Yesterday
This Week
This Month
This Quarter
This Year
Custom Date Range
```

Product filters:

```text
Product
Product Group
Category
```

Customer filters:

```text
New Customers
Returning Customers
Customer Segment
```

Geographic filters:

```text
Governorate
City
```

Order filters:

```text
Order Status
Payment Status
Shipping Company
```

Website filters:

```text
Traffic Source
Landing Page
Device Type
Language
Country
```

Analytics must support drilling down from summary to details.

---

## Website Analytics

Track:

Visitor analytics:

```text
Total Visits
Unique Visitors
Returning Visitors
Device Type
Language
Traffic Source
```

Page analytics:

```text
Most Visited Pages
Least Visited Pages
Landing Pages
Exit Pages
```

Product analytics:

```text
Most Viewed Products
Least Viewed Products
Product View → Add To Cart Rate
Product View → Purchase Rate
```

Search analytics:

```text
Most Searched Terms
No-Result Searches
Search-to-Purchase Behavior
```

Cart analytics:

```text
Add To Cart Events
Removed Cart Items
Cart Abandonment Rate
```

Checkout analytics:

```text
Checkout Started
Checkout Completed
Checkout Abandoned
```

---

## Traffic Source Tracking

Track traffic sources and conversions.

Sources:

```text
Facebook
Instagram
TikTok
Google Search
Google Ads
WhatsApp
Telegram
Direct Visit
Referral Links
Email Campaigns
Custom Campaign Links UTM
```

Track by source:

```text
Visits
Product Views
Add To Cart Events
Checkout Starts
Orders
Revenue
Profit
```

---

## AI Analytics Insights

Status:

```text
Deferred
```

Future examples:

```text
Sales increased
Sales decreased
Cart abandonment increased
TikTok has highest conversion rate
Stock may run out soon
Promotion generated revenue
```

Launch scope:

```text
Not required for initial launch.
```

Analytics architecture should store enough data to support AI insights later.

---

## Dashboard Tables

All major dashboard tables support:

```text
Search
Filtering
Sorting
Export
Column Visibility
Pagination
Adjustable Page Size
```

Export formats:

```text
Excel
CSV
PDF
```

---

## Dashboard Bulk Actions

Major tables support bulk actions.

Examples:

Orders:

```text
Confirm
Export
Print
Change Status where allowed
```

Products:

```text
Activate
Hide
Archive
Change Category
Update Tags
Export
```

Customers:

```text
Add Tag
Remove Tag
Export
Add To Segment
```

Reviews:

```text
Approve
Reject
Feature
Hide
```

Media:

```text
Move To Folder
Add Tags
Archive
```

Dangerous bulk actions require confirmation.

Permanent delete requires Super Owner approval.

---

## Mobile Dashboard Support

Dashboard must be mobile-friendly.

Mobile users can:

```text
View Orders
Update Order Status
View Customers
View Inventory Alerts
View Analytics Summary
Approve Requests
Manage Notifications
View Daily Reports
```

Desktop-preferred tasks:

```text
Media Studio Editing
Large Data Imports
Bulk Operations
Advanced Analytics
System Configuration
```

---

## Dashboard Quick Actions

Dashboard home should provide quick shortcuts:

```text
+ New Order
+ New Product
+ New Purchase
+ New Customer
+ New Supplier
+ New Coupon
+ New Blog Post
```

Quick actions shown based on permissions.

---

## Favorites / Pinned Navigation

Status:

```text
Rejected for V1
```

Reason:

```text
Not important for current operations.
Quick actions and normal navigation are enough.
```

---

## Dashboard Global Search

Dashboard must support global search across the system.

Search examples:

```text
HEAVY CREMA → Product, Inventory, Recipe, Purchases, Orders
Mohamed → Customer, Orders, Loyalty, Reviews, Notes
LC-2026-000125 → Order, Invoice, Payment, Shipment
```

Supported modules:

```text
Orders
Customers
Products
Categories
Inventory
Recipes
Suppliers
Purchases
Coupons
Reviews
Blog
Media Library
```

---

# 21. Media Studio

## Editing Experience

Media Studio uses hybrid editing.

Visual Editing:

```text
Click text and edit
Click images and replace
Preview changes live
Drag and reorder sections
Desktop and mobile previews
```

Control Panel:

```text
Advanced settings
SEO
Visibility
Scheduling
Animations
Media assets
Translation content
```

Modes:

```text
Visual Mode
Advanced Settings Mode
```

---

## Draft, Preview & Publish

Workflow:

```text
Edit
↓
Save Draft
↓
Preview
↓
Publish
```

Changes remain private until published.

Preview supports:

```text
Desktop
Mobile
Arabic
English
```

Safety:

```text
Draft protection
Publish confirmation
Unsaved changes warning
```

---

## Revision History & Rollback

Every publish operation creates a new version.

Admin can restore previous versions.

Version stores:

```text
Version Number
User
Date
Time
Change Summary
Notes
```

Rollback rules:

```text
Rollback does not delete newer versions
Restored version creates a new version record
Rollback actions recorded in audit log
```

Applies to:

```text
Homepage
Product Pages
Category Pages
Blog Pages
About Page
Contact Page
Footer
Header
Announcement Bar
Media Studio Content
```

---

## Section Visibility

Each editable website section can be:

```text
Visible
Hidden
```

Hidden sections remain stored and can be restored later.

Visibility changes are audited.

---

## Section Ordering

Media Studio supports drag-and-drop section ordering.

Supported areas:

```text
Homepage
Landing Pages future
Category Pages
Future Custom Pages
```

Section order is not hardcoded.

---

## Section Scheduling

Status:

```text
Deferred
```

Current V1:

```text
Manual show/hide is sufficient.
```

May be enabled later for seasonal campaigns.

---

## Custom Pages Builder

Status:

```text
Deferred
```

V1 pages are enough:

```text
Home
Products
About
Contact
Blog
Legal Pages
```

Future use cases:

```text
Wholesale
Corporate Gifts
Hotels & Cafes
Ramadan Collection
Seasonal Campaigns
Landing Pages
Marketing Pages
```

---

## Media Library

The system supports a centralized media library.

Assets:

```text
Images
Videos
Documents
PDFs
Guides
Brand Assets
Icons
```

Admin can:

```text
Upload
Replace
Archive
Search
Filter
Reuse media across website
```

Organization:

```text
Products
Homepage
Blog
Categories
Marketing
Brand Assets
Campaigns
Seasonal Content
```

---

## Media Asset References

Media assets are reusable across multiple sections.

Removing an image from one section must not affect any other section.

Replacing an image in one section affects only that section.

Permanent deletion from media library should check usage references and warn where asset is used.

---

## Media Versioning

Status:

```text
Rejected for V1
```

Reason:

```text
Global Revision History already provides rollback.
Media-specific versioning adds complexity without enough value.
```

---

## Media Organization

Media Library supports:

```text
Folders
Tags
Search
Filters
```

Folder examples:

```text
Products
  Turkish Blends
  Espresso Blends
  Flavor Coffee
  Coffee Mix
  Cappuccino
  Hot Chocolate

Homepage
Blog
Brand Assets
Campaigns
Seasonal Content
```

Tags examples:

```text
Hero
Product
Turkish
Espresso
Ramadan
Summer
Black Friday
```

Search by:

```text
File Name
Tags
Folder
Upload Date
File Type
```

Filters:

```text
Images
Videos
Documents
Unused Assets
Recently Uploaded
```

---

## Image Optimization Pipeline

Priority:

```text
High
```

Upload workflow:

```text
Original Upload
↓
Validation
↓
Compression
↓
WebP Generation
↓
Responsive Variants Generation
↓
CDN Storage
↓
Ready For Website
```

Generated versions:

```text
Desktop
Tablet
Mobile
Thumbnail
WebP
```

Original image is preserved.

Future support:

```text
AVIF
Smart Cropping
AI Background Removal
AI Upscaling
```

---

## Video Optimization Pipeline

Videos should be optimized before public website display.

Workflow:

```text
Original Video Upload
↓
Validation
↓
Compression
↓
Preview Thumbnail Generation
↓
Mobile Version Generation
↓
Optimized Video Storage
```

Limits are configurable:

```text
Maximum file size
Maximum duration
Allowed formats
Recommended dimensions
Mobile-safe versions
```

Generated assets:

```text
Optimized video
Mobile video
Thumbnail image
Preview poster image
```

---

## Image Alt Text

Every public image should support alt text.

Languages:

```text
Arabic Alt Text
English Alt Text
```

If empty, system generates suggested alt text.

Admin can manually override.

Benefits:

```text
Image SEO
Accessibility
Search visibility
Lighthouse scores
```

---

## Image Focus Point

Major visual images support optional focus point control.

Applies to:

```text
Hero Images
Page Banners
Category Cards
Product Cards
Blog Banners
```

Purpose:

```text
When images are cropped responsively, preserve the important subject.
```

Images displayed fully without cropping do not need focus point.

---

## Image Crop Editor

Media Studio supports a simple crop editor.

Controls:

```text
Crop
Zoom
Position
Focus Area
Preview Desktop
Preview Mobile
```

This is not a full Photoshop replacement.

---

## Media Studio Permissions

Permissions are granular.

Supported permissions:

```text
View Media Studio
Edit Drafts
Upload Media
Publish Content
Rollback Versions
Manage Media Library
```

Editing and publishing are separate permissions.

Publishing requires explicit authorization.

---

## Emergency Publish Lock

Status:

```text
Deferred
```

Current safety features are enough:

```text
Draft Mode
Preview
Publish Permission
Rollback
Audit Log
```

---

## Media Studio Save System

Save behavior:

```text
Auto Save Draft
+
Manual Save Button
```

Safety:

```text
Unsaved Changes Detection
Restore Draft After Refresh
Restore Draft After Connection Loss
Draft Recovery
```

User feedback:

```text
Saved
Saving...
Save Failed
```

---

## Concurrent Editing

Status:

```text
Deferred
```

Reason:

```text
Current team size is small.
Most editing will be done by owner.
```

---

## Media Studio Search

Status:

```text
Deferred
```

Reason:

```text
Not important for V1.
May be added when pages, sections, or media assets grow.
```

---

## Media Studio Preview Modes

Supported preview devices:

```text
Desktop
Mobile
```

Preview also supports:

```text
Arabic Version
English Version
```

Tablet preview is not required in V1.

---

# 22. Blog

## Blog System

The platform supports a professional blog system.

Posts support:

```text
Authors
Categories
Tags
Featured Image
SEO
Draft
Scheduled
Published
Archived
Created Date
Updated Date
Published Date
```

Example authors:

```text
Line Coffee Team
Mohamed Sayed
Guest Writer
```

Example categories:

```text
Coffee Knowledge
Espresso
Turkish Coffee
Brewing Guides
Recipes
Line Coffee News
```

Blog must be fully bilingual and SEO-friendly.

---

## Related Blog Posts

Priority:

```text
Low / Simple Implementation
```

Related posts may be generated from:

```text
Same Category
Shared Tags
```

Display:

```text
2 to 3 related posts at article end
```

Not a complex recommendation system in V1.

---

## Blog Comments

Status:

```text
Rejected for V1
```

Reason:

```text
Interaction will happen through Facebook, Instagram, TikTok, WhatsApp.
```

---

# 23. Legal & Leads

## Legal Pages

Required from launch:

```text
Privacy Policy
Terms of Use
Shipping Policy
Return / Refund Policy
```

Rules:

```text
Fully bilingual
Editable from dashboard / Media Studio
Linked in footer
SEO-ready
```

---

## Public Order Tracking Page

Status:

```text
Rejected for V1
```

Reason:

```text
Customer communication will primarily happen through WhatsApp, phone calls, and order notifications.
```

May be reconsidered later with shipping integrations or mobile app.

---

## Contact Form & Lead Management

Website contact form should create leads inside dashboard.

Workflow:

```text
Customer submits contact form
↓
Lead Created
↓
Dashboard Notification
↓
Telegram Notification
↓
Follow-up process
```

Lead fields:

```text
Name
Phone
WhatsApp
Email
Subject
Message
Date
Source
```

Lead sources:

```text
Contact Page
Wholesale Inquiry
Corporate Inquiry
Support Request
```

Lead statuses:

```text
New
Contacted
In Progress
Won
Lost
Closed
```

---

## Newsletter / Email Marketing

Status:

```text
Rejected for V1
```

Reason:

```text
Line Coffee customers are expected to communicate primarily through WhatsApp and phone.
```

---

## WhatsApp Marketing Consent

Status:

```text
Rejected for V1
```

Reason:

```text
Not required for current operations.
Customer communication will be handled directly through existing business channels.
```

May be reconsidered later if WhatsApp API campaigns or regulatory requirements become important.

---

# 24. Backup & Restore

## Backup & Restore Dashboard Interface

Status:

```text
Rejected for Dashboard
```

Reason:

```text
Database backup and restore are infrastructure-level responsibilities.
```

Examples:

```text
Supabase Backups
Database Snapshots
GitHub History
Deployment Rollbacks
```

No backup/restore management interface in dashboard V1.

---

# 25. Final V1 Principle

Line Coffee V2 should avoid over-engineering.

Build now:

```text
Features that support real launch operations
Features that protect data and accounting
Features that improve customer buying experience
Features that make dashboard management efficient
```

Defer:

```text
Enterprise-only features
Heavy collaboration features
Complex B2B modules
AI decision engines
Newsletter system
Public order tracking
Custom page builder
Backup/restore dashboard
```

Core rule:

```text
Build strong foundations.
Keep V1 operationally focused.
Make future expansion possible without rebuilding.
```

---

# END OF MASTER BLUEPRINT
