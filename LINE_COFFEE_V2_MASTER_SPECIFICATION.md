# LINE COFFEE V2 MASTER SPECIFICATION

## PROJECT OVERVIEW

Line Coffee V2 is a complete coffee commerce, operations, inventory, accounting, content, and analytics platform.

The system consists of:

* Public Website
* Customer Accounts
* Orders & Checkout
* Inventory Management
* Supplier Management
* Accounting & Treasury
* Media Studio (Visual Website Builder)
* Analytics & Reporting
* Loyalty System
* Reviews & Testimonials
* Blog & SEO
* AI-Assisted Features
* Future Mobile App Readiness

---

# CORE ARCHITECTURE

## Source of Truth

The database is the only source of truth.

Flow:

Database
↓
Dashboard
↓
Media Studio
↓
Website
↓
Future Mobile Apps

All systems must stay synchronized.

No config files should be used as the live source of business data.

Platform:

* Supabase Database
* Supabase Storage
* Supabase Auth

---

# PUBLIC WEBSITE

## Main Navigation

Header contains:

* Logo
* Home
* Products
* About
* Contact
* Blog
* Language Switcher
* Wishlist
* Login

Supports:

* Arabic RTL
* English LTR

---

# HOME PAGE

## Announcement Bar

Position:

Above header.

Purpose:

* Promotions
* Coupons
* Free shipping campaigns
* Important notices

Features:

* Closable with X
* No empty space after close
* Reappears after refresh if active
* Controlled from dashboard
* Arabic & English

---

## Hero Section

Contains:

* Hero image
* Headline
* Subtitle
* Shop Now button
* Dynamic category button

Supported categories:

* Turkish Blends
* Espresso Blends
* Easy Coffee
* Flavor Coffee
* Make Your Espresso
* Make Your Flavor

Editable through Media Studio.

---

## Product PNG Strip

Animated horizontal strip containing product PNG images.

Purpose:

* Visual movement
* Product exposure

Controlled through Media Studio.

---

## Service Cards

Suggested cards:

* 24/7 Customer Support
* Fast Delivery
* Premium Quality
* Easy Ordering

Editable.

---

## Shop By Category

Categories:

* Turkish Blends
* Espresso Blends
* Easy Coffee
* Flavor Coffee
* Coffee Mix
* Cappuccino
* Hot Chocolate
* Make Your Espresso
* Make Your Flavor

Each card:

* Image
* Title
* Description
* Link

---

## Best Sellers

Displays:

* Top-selling products
* Dashboard-selected products

Contains:

* Image
* Product Name
* Price
* Wishlist
* Add To Cart

---

## Our Story

Contains:

* Portrait image
* Story content
* CTA button

Editable from Media Studio.

---

## Latest Blog Posts

Displays latest published articles.

---

## Footer

Contains:

* Logo
* Brand Description
* Navigation Links
* Contact Information
* Social Links
* Privacy Policy
* Terms of Service

---

# PRODUCTS PAGE

## Structure

Products Hero
↓
Category Cards
↓
Category-Specific Filters
↓
Product Grid
↓
Smart Floating Cart

---

## Search

Global Search includes:

* Products
* Categories
* Blog Posts
* Flavors

Features:

* Arabic
* English
* Autocomplete
* Organized dropdown

---

## Filters

Dynamic per category.

Examples:

Espresso:

* Price
* Strength
* Body
* Acidity
* Crema

Flavor Products:

* Flavor Group
* Price
* Best Seller

Turkish:

* Price
* Best Seller
* In Stock

---

# PRODUCT DETAILS PAGE

Contains:

* Gallery
* Product Name
* Price
* Weight Selection
* Quantity Selector
* Add To Cart
* Wishlist
* Share

---

## Product Profile Metrics

Can be enabled per product.

Examples:

* Strength
* Body
* Acidity
* Crema

Calculated from recipes.

Dashboard editable.

Supports manual override.

---

## Accordion Sections

* Description
* Ingredients / Blend Details
* Shipping Information
* Reviews

Mobile-friendly.

---

## Related Products

Priority:

1. Same Category
2. Similar Product Type
3. Similar Flavor Group
4. Best Sellers
5. Manual Selection

---

# SMART FLOATING CART

Persistent shopping companion.

Displays:

* Items
* Quantity
* Subtotal
* Promotions
* Free Shipping Progress
* Checkout Button

Compact mode on non-shopping pages.

Desktop:

Floating panel.

Mobile:

Floating bubble + expandable sheet.

---

# CHECKOUT

## Checkout Type

Single Page Checkout.

---

## Required Fields

* Name
* WhatsApp
* Mobile
* Governorate
* City
* Full Address

---

## Optional Fields

* Building Name
* Floor
* Apartment
* Landmark
* Google Maps Link

---

## Shipping

Rules:

Cairo:
40 EGP

Giza:
50 EGP

Other governorates:
Shipping Company Rules

Dashboard configurable.

---

## Payment Methods

* Cash on Delivery
* InstaPay
* Vodafone Cash

Future:

* Online Payment Gateway

---

# ORDER FLOW

Customer
↓
Place Order
↓
Database Save
↓
Dashboard Entry
↓
Telegram Notification
↓
Automatic WhatsApp Redirect
↓
Customer Presses Send

---

## WhatsApp Order Message

Contains:

Customer:

* Name
* Phone
* WhatsApp
* Email
* Governorate
* City
* Address
* Maps Link

Products:

* Name
* Variant
* Quantity
* Unit Price
* Line Total

Totals:

* Subtotal
* Shipping
* Discounts
* Points Used
* Final Total

Custom Builder Details Included.

---

# SUCCESS PAGE

Displays:

* Order Number
* Order Summary
* Account Creation Reward

Guest users can be offered:

* Points
* Discount
* Free Shipping

Controlled by dashboard.

---

# CUSTOMER ACCOUNTS

Contains:

* Profile
* Orders
* Addresses
* Wishlist
* Points
* Reviews
* Settings

Future:

* Referrals
* Subscriptions

---

# LOYALTY SYSTEM

Points awarded only after:

Delivered Status

Rules configurable:

* Earning Rate
* Redemption Rate
* Expiration
* Minimum Redemption
* Maximum Redemption

Dashboard controlled.

---

# REVIEWS & TESTIMONIALS

Sources:

* Website
* Facebook
* Instagram
* WhatsApp
* Manual

Approval required.

Statuses:

* Pending
* Approved
* Rejected
* Archived

---

# BLOG

Supports:

* Arabic
* English
* Featured Images
* SEO
* Categories
* Tags
* Drafts
* Scheduling

---

# SEO

Automatic SEO generation.

Manual override available.

Supports:

* Meta Title
* Meta Description
* OG Image
* Canonical
* Index / NoIndex

---

# MAKE YOUR ESPRESSO

Smart Builder.

Customer can:

* Select Arabica Beans
* Select Robusta Beans
* Adjust Ratios
* Accept Suggested Ratios

---

## Live Features

* Live Price
* Live Strength
* Live Body
* Live Acidity
* Live Crema

---

## AI Assistance

Provides:

* Suggestions
* Warnings
* Blend Improvements
* Smart Recommendations

---

## Inventory Integration

Consumes bean inventory directly.

---

# MAKE YOUR FLAVOR

Customer selects:

Base:

* Turkish Coffee
* Coffee Mix
* Cappuccino
* Hot Chocolate

Then selects flavors.

---

## Smart Flavor System

AI suggests:

* Popular Mixes
* Premium Mixes
* Flavor Ratios

Live profile updates.

---

# INVENTORY

## Finished Goods

* Turkish Blends
* Flavor Coffee
* Coffee Mix
* Cappuccino
* Hot Chocolate
* Easy Coffee

Tracked as finished products.

---

## Raw Materials

* Coffee Beans
* Packaging
* Stickers
* Ingredients

Tracked separately.

---

# RECIPES

Products can contain:

* Raw Materials
* Beans
* Packaging

Recipe drives:

* Cost
* Inventory
* Profit

---

# PRICING ENGINE

Admin enters:

* Raw Cost
* Packaging Cost
* Additional Costs

System calculates:

Suggested Selling Price

Default margin:

60%

Fully configurable.

---

# SUPPLIERS

Each supplier includes:

* Profile
* Ledger
* Purchases
* Payments
* Balance

---

# PURCHASES

Purchase Invoice
↓
Inventory Increase
↓
Supplier Balance Update

Automatic.

---

# ACCOUNTING

Supports:

* Revenue
* COGS
* Gross Profit
* Expenses
* Net Profit

Profit recognized on:

Delivered Orders Only

---

# TREASURY

Accounts:

* Cash
* Bank
* InstaPay
* Vodafone Cash

Tracks all movements.

---

# ANALYTICS

Tracks:

* Visitors
* Orders
* Revenue
* Profit
* Conversion Rate

---

## Traffic Sources

* Facebook
* Instagram
* TikTok
* Google
* WhatsApp
* Direct

---

## Funnel

Visitors
↓
Product Views
↓
Add To Cart
↓
Checkout
↓
Order
↓
Delivered

---

# DASHBOARD

Modules:

* Dashboard Home
* Orders
* Products
* Categories
* Inventory
* Recipes
* Suppliers
* Purchases
* Accounting
* Treasury
* Customers
* Reviews
* Discounts
* Loyalty
* Blog
* Analytics
* Notifications
* Users
* Audit Log
* Settings

---

# USERS & PERMISSIONS

Roles:

* Owner
* Admin
* Staff

Custom permissions supported.

---

# AUDIT LOG

Tracks:

* Product Changes
* Price Changes
* Inventory Changes
* Order Changes
* User Actions
* Publishing Actions

Owner access only.

---

# NOTIFICATIONS

## Internal Dashboard Notifications

* Orders
* Inventory Alerts
* Content Events
* User Events

---

## Telegram Notifications

* New Orders
* Critical Inventory Alerts
* Important Events

---

# MEDIA STUDIO

Visual Website Builder.

Capabilities:

* Edit Text
* Replace Images
* Upload Media
* Drag & Drop
* Undo
* Redo
* Preview
* Publish
* Rollback

Supports:

* Arabic
* English
* Assisted Translation

---

# EXPORTS

Formats:

* Excel
* PDF
* CSV

Modules:

* Orders
* Customers
* Inventory
* Purchases
* Accounting
* Analytics

---

# FUTURE FEATURES

* Referral Program
* Abandoned Cart Recovery
* Back In Stock Alerts
* Campaign Engine
* AI Business Assistant
* WhatsApp CRM
* Mobile App
* PWA

---

# DESIGN RULES

## Mobile First

Every screen optimized for mobile.

---

## Visual Style

* Premium
* Warm
* Dark Luxury
* Coffee-Focused
* Elegant
* Minimal

Colors:

* Dark Brown #522500
* Beige #FFDCC2
* Black
* White

Fonts:

* Playfair Display (EN)
* Cairo (AR)

---

## Animation

Preferred:

* Framer Motion
* Subtle Motion
* Smooth Transitions

Avoid:

* Heavy Effects
* Scroll Hijacking
* Performance Issues

---

END OF MASTER SPECIFICATION
