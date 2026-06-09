# LINE COFFEE V2 — DATABASE BLUEPRINT

## 0. Purpose of This File

This file defines the database structure blueprint for Line Coffee V2.

It converts the business, dashboard, website, checkout, inventory, media, analytics, and customer rules into a clear Supabase database architecture.

This file must be used together with:

* `LINE_COFFEE_V2_MASTER_SPECIFICATION.md`
* `LINE_COFFEE_V2_MASTER_BLUEPRINT.md`
* `LINE_COFFEE_V2_VISUAL_UX_BLUEPRINT.md`

This file is a planning blueprint, not final SQL.

Before implementation, the developer must compare this blueprint with the current Supabase migrations and existing production tables, then create minimal safe migrations.

---

# 1. Core Architecture Rule

Line Coffee V2 uses a Database First Architecture.

The database is the single source of truth for:

* Website content
* Products
* Categories
* Prices
* Variants
* Inventory
* Orders
* Customers
* Recipes
* Media Studio
* Blog
* Reviews
* Discounts
* Loyalty
* Settings
* Analytics
* Notifications
* Admin permissions
* Audit logs

The correct architecture is:

```text
Dashboard → Supabase Database → Website → Media Studio → Future Mobile App
```

Config files may only be used as:

* Fallback
* Seed data
* Guardrails
* Type definitions
* Emergency defaults

Config files must not be the live source of truth.

---

# 2. Database Design Principles

## 2.1 Main Principles

The database must be:

* Clean
* Relational
* Auditable
* Safe
* Extensible
* Dashboard-controlled
* Mobile-app ready
* Bilingual-ready
* Media Studio ready
* Inventory-aware
* Order snapshot aware

## 2.2 Important Rules

The database must support:

* Guest checkout
* Optional customer accounts
* Product variants
* Custom espresso builder
* Custom flavor builder
* Finished stock products
* Recipe-driven products
* Product snapshots in orders
* Recipe version snapshots in orders
* Historical order integrity
* Dashboard edits without code changes
* Media Studio visual control
* Audit logging for important admin actions

## 2.3 Historical Snapshot Rule

Orders must never depend only on live product data.

When an order is created, the system must store snapshots of:

* Product name
* Product image
* Product category
* Variant
* Weight
* Unit price
* Discount
* Custom builder details
* Recipe version
* Customer details
* Address details
* Shipping price
* Final total

If product data changes later, old orders must remain unchanged.

---

# 3. Naming Conventions

## 3.1 Table Names

Use lowercase plural names:

```text
products
categories
orders
customers
inventory_items
media_assets
```

## 3.2 Primary Keys

Use UUID primary keys unless a strong reason exists otherwise.

Recommended:

```sql
id uuid primary key default gen_random_uuid()
```

## 3.3 Common Columns

Most editable business tables should include:

```text
id
created_at
updated_at
created_by
updated_by
status or is_active
metadata
```

## 3.4 Soft Delete Rule

Avoid hard delete for business data.

Use:

```text
status
is_active
archived_at
deleted_at
```

Hard delete should be restricted and audited.

---

# 4. Core Table Groups

The database should be organized into these groups:

```text
1. Identity / Admin / Permissions
2. Customers
3. Products / Categories / Variants
4. Custom Builders
5. Inventory
6. Recipes / Costing
7. Suppliers / Purchases
8. Orders / Checkout
9. Discounts / Loyalty / Wallet
10. Reviews / Feedback
11. Media Studio / Content
12. Blog / SEO
13. Settings
14. Notifications
15. Analytics / Events
16. Audit Logs
```

---

# 5. Identity, Admin, Roles, and Permissions

## 5.1 admin_users

Stores dashboard users.

### Suggested Columns

```text
id
auth_user_id
full_name
email
phone
role_id
status
avatar_url
last_login_at
created_at
updated_at
```

### Status Values

```text
active
inactive
blocked
pending
```

---

## 5.2 admin_roles

Stores admin role definitions.

### Suggested Roles

```text
primary_owner
owner
admin
staff
```

### Suggested Columns

```text
id
name
code
description
is_system_role
created_at
updated_at
```

### Rule

There must be only one Primary Owner.

Primary Owner cannot be deleted, disabled, or lose ownership through normal dashboard actions.

---

## 5.3 admin_permissions

Stores available permissions.

### Suggested Columns

```text
id
module
action
code
description
created_at
updated_at
```

### Examples

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

## 5.4 admin_role_permissions

Many-to-many table connecting roles to permissions.

### Suggested Columns

```text
id
role_id
permission_id
created_at
```

---

# 6. Customers

## 6.1 customers

Stores all customers, including guest customers.

### Suggested Columns

```text
id
auth_user_id
full_name
email
phone
whatsapp
username
customer_type
status
profile_image_url
default_address_id
total_orders
total_spent
last_order_at
first_order_at
notes
metadata
created_at
updated_at
deleted_at
```

### customer_type Values

```text
individual
business
```

### status Values

```text
active
inactive
blocked
deleted
```

### Rules

* Guest customers can exist without `auth_user_id`.
* If guest later creates account, previous orders should link by phone, WhatsApp, or email.
* Blocked customers can browse but cannot checkout, use promo, use loyalty, sync wishlist, or submit reviews.
* Username must be unique if provided.

---

## 6.2 customer_addresses

Stores multiple customer addresses.

### Suggested Columns

```text
id
customer_id
label
full_name
phone
governorate
city
area
street
building
floor
apartment
landmark
notes
is_default
created_at
updated_at
deleted_at
```

### Rule

Customer can have multiple addresses.

Only one default address per customer.

---

## 6.3 customer_tags

Stores available customer tags.

### Suggested Columns

```text
id
name
code
description
color
is_system
created_at
updated_at
```

### Examples

```text
vip
new_customer
repeat_customer
high_value
needs_follow_up
wholesale_lead
blocked_risk
```

---

## 6.4 customer_tag_assignments

Connects customers to tags.

### Suggested Columns

```text
id
customer_id
tag_id
assigned_by
assigned_at
source
```

### source Values

```text
system
manual
campaign
```

---

## 6.5 customer_notes

Stores internal notes on customers.

### Suggested Columns

```text
id
customer_id
admin_user_id
note
visibility
created_at
updated_at
```

### visibility Values

```text
internal
important
```

---

## 6.6 customer_timeline_events

Stores customer activity timeline.

### Suggested Columns

```text
id
customer_id
event_type
event_title
event_description
related_table
related_id
metadata
created_at
```

### Example Events

```text
account_created
guest_order_created
order_delivered
address_added
wallet_credit_added
loyalty_points_added
review_submitted
support_contacted
```

---

## 6.7 customer_consents

Stores consent records.

### Suggested Columns

```text
id
customer_id
consent_type
status
version
source
ip_address
user_agent
created_at
```

### consent_type Examples

```text
terms
privacy
loyalty
marketing_whatsapp
marketing_email
```

### Rule

WhatsApp marketing consent is rejected for V1, but the table can be future-ready.

---

# 7. Categories

## 7.1 categories

Stores product categories.

### Final Categories

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

### Forbidden Categories

```text
Single Origin Beans
All Products sidebar
Original LINE section
Nescafe naming
```

### Suggested Columns

```text
id
parent_id
name_ar
name_en
slug
description_ar
description_en
short_description_ar
short_description_en
image_id
banner_image_id
icon_id
sort_order
system_status
website_visibility
seo_title_ar
seo_title_en
seo_description_ar
seo_description_en
metadata
created_at
updated_at
deleted_at
```

### system_status Values

```text
draft
active
archived
```

### website_visibility Values

```text
visible
hidden
```

---

# 8. Products

## 8.1 products

Stores master product records.

### Suggested Columns

```text
id
category_id
name_ar
name_en
slug
sku
product_type
short_description_ar
short_description_en
full_description_ar
full_description_en
ingredients_ar
ingredients_en
blend_composition_visibility
main_image_id
system_status
website_visibility
inventory_strategy
is_featured
is_best_seller
is_customizable
sort_order
seo_title_ar
seo_title_en
seo_description_ar
seo_description_en
metadata
created_at
updated_at
deleted_at
```

### product_type Values

```text
standard
espresso_blend
turkish_blend
easy_coffee
flavor_coffee
coffee_mix
cappuccino
hot_chocolate
custom_espresso
custom_flavor
```

### blend_composition_visibility Values

```text
full
partial
hidden
```

### inventory_strategy Values

```text
finished_stock
recipe_driven
hybrid
none
```

### system_status Values

```text
draft
active
archived
```

### website_visibility Values

```text
visible
hidden
```

---

## 8.2 product_variants

Stores product weights and prices.

### Suggested Columns

```text
id
product_id
variant_name
weight_value
weight_unit
sku
purchase_cost
sale_price
compare_at_price
profit_margin
is_default
system_status
website_visibility
sort_order
created_at
updated_at
deleted_at
```

### Standard Weights

```text
250g
500g
1kg
```

### Rule

Products are not duplicated per weight.

One product has multiple variants.

---

## 8.3 product_media

Connects products to media assets.

### Suggested Columns

```text
id
product_id
media_asset_id
media_type
sort_order
is_main
alt_text_ar
alt_text_en
created_at
updated_at
```

### media_type Values

```text
image
video
gallery
thumbnail
```

---

## 8.4 product_profile_attributes

Stores product taste/profile values.

### Suggested Columns

```text
id
product_id
attribute_code
attribute_name_ar
attribute_name_en
value
max_value
source
created_at
updated_at
```

### Example Attributes

```text
strength
body
acidity
crema
sweetness
bitterness
aroma
creaminess
```

### source Values

```text
manual
recipe
system_generated
```

---

## 8.5 product_related

Stores manual related products.

### Suggested Columns

```text
id
product_id
related_product_id
sort_order
created_at
```

### Rule

Manual related products override or supplement automatic recommendations.

---

# 9. Beans and Flavor Materials

## 9.1 coffee_beans

Stores beans used for espresso/turkish blends and custom espresso.

### Suggested Columns

```text
id
name_ar
name_en
origin_country
bean_family
bean_type
supplier_id
purchase_price_per_kg
sale_price_per_kg
roast_level
strength
body
acidity
crema
aroma
notes_ar
notes_en
system_status
website_visibility
created_at
updated_at
```

### bean_family Values

```text
arabica
robusta
blend_component
```

### Rule

Beans can be visible in builders but not necessarily sold as standalone products.

---

## 9.2 flavor_bases

Stores bases for Make Your Flavor.

### Final Bases

```text
Turkish Coffee
Coffee Mix
Cappuccino
Hot Chocolate
```

### Suggested Columns

```text
id
name_ar
name_en
code
base_cost_per_kg
base_sale_price_per_kg
system_status
website_visibility
sort_order
created_at
updated_at
```

---

## 9.3 flavor_options

Stores available flavors.

### Suggested Columns

```text
id
name_ar
name_en
code
flavor_group
purchase_cost_per_kg
sale_addon_price
has_chunks
is_special_order
system_status
website_visibility
sort_order
created_at
updated_at
```

### flavor_group Values

```text
original
sweets
nuts
fruits
special_order
```

### Final Flavor Ordering

```text
1. فرنساوي / أوريجينال

Sweets:
2. شوكولاتة قطع
3. شوكولاتة
4. كراميل
5. فانيلا
6. لوتس
7. أوريو
8. كرز

Nuts:
9. لوز
10. فستق
11. بندق قطع
12. بندق

Fruits:
13. فراولة
14. موز
15. مانجو
16. خوخ
17. توت
18. توت أزرق
19. تفاح
20. عنب
21. بطيخ
22. جوافة
23. أناناس
24. برتقال

Special Order:
25. جوز الهند
26. موكا
27. بينا كولادا
28. شيشة تفاح
29. شيشة عنب
30. هوت سيدر
```

---

## 9.4 flavor_base_options

Connects bases to allowed flavors.

### Suggested Columns

```text
id
base_id
flavor_option_id
is_allowed
custom_addon_price
created_at
updated_at
```

### Rule

This allows each base to have its own allowed flavor list and price override.

---

# 10. Custom Builders

## 10.1 custom_espresso_orders

Stores builder configuration snapshot for Make Your Espresso.

### Suggested Columns

```text
id
order_item_id
customer_id
weight_value
weight_unit
total_price
profile_strength
profile_body
profile_acidity
profile_crema
smart_suggestion_used
warning_message_ar
warning_message_en
recommendation_ar
recommendation_en
metadata
created_at
```

---

## 10.2 custom_espresso_components

Stores selected beans and ratios.

### Suggested Columns

```text
id
custom_espresso_order_id
coffee_bean_id
bean_name_snapshot
bean_type_snapshot
origin_snapshot
percentage
grams
purchase_cost_snapshot
sale_price_snapshot
created_at
```

### Rule

Always store bean snapshots because bean data and prices may change later.

---

## 10.3 custom_flavor_orders

Stores builder configuration snapshot for Make Your Flavor.

### Suggested Columns

```text
id
order_item_id
customer_id
base_id
base_name_snapshot
weight_value
weight_unit
total_price
suggested_mix_used
metadata
created_at
```

---

## 10.4 custom_flavor_components

Stores selected flavors.

### Suggested Columns

```text
id
custom_flavor_order_id
flavor_option_id
flavor_name_snapshot
flavor_group_snapshot
addon_price_snapshot
percentage
grams
created_at
```

---

# 11. Inventory

## 11.1 inventory_items

Stores all stockable items.

### Item Types

```text
finished_product
coffee_bean
raw_material
packaging
flavor
base
other
```

### Suggested Columns

```text
id
item_type
name_ar
name_en
sku
unit
current_quantity
low_stock_threshold
average_cost
fifo_enabled
supplier_id
related_product_id
related_variant_id
related_bean_id
related_flavor_id
system_status
created_at
updated_at
```

### Unit Examples

```text
kg
g
piece
bag
box
liter
```

---

## 11.2 inventory_movements

Stores stock additions/deductions/adjustments.

### Suggested Columns

```text
id
inventory_item_id
movement_type
quantity
unit
unit_cost
total_cost
source_type
source_id
reason
notes
created_by
created_at
```

### movement_type Values

```text
purchase_in
sale_out
production_in
recipe_consumption
adjustment_in
adjustment_out
return_in
return_out
waste
damage
sample
expired
correction
```

### source_type Examples

```text
order
purchase
production_batch
manual_adjustment
return
```

---

## 11.3 inventory_count_sessions

Stores stock count sessions.

### Suggested Columns

```text
id
session_name
status
started_by
started_at
completed_by
completed_at
notes
created_at
```

---

## 11.4 inventory_count_items

Stores counted items per session.

### Suggested Columns

```text
id
session_id
inventory_item_id
system_quantity
counted_quantity
difference
notes
created_at
updated_at
```

---

# 12. Recipes and Costing

## 12.1 recipes

Stores product recipes.

### Suggested Columns

```text
id
product_id
variant_id
name
version_number
status
is_active_version
waste_percentage
production_loss_percentage
total_cost
suggested_sale_price
default_margin_percentage
notes
created_by
created_at
updated_at
```

### status Values

```text
draft
active
archived
```

### Rule

Only one active recipe version should exist per product/variant.

Orders must store the recipe version used.

---

## 12.2 recipe_items

Stores recipe components.

### Suggested Columns

```text
id
recipe_id
inventory_item_id
component_name_snapshot
quantity
unit
unit_cost_snapshot
total_cost_snapshot
sort_order
created_at
updated_at
```

---

## 12.3 production_batches

Stores production runs.

### Suggested Columns

```text
id
batch_number
product_id
variant_id
recipe_id
planned_quantity
actual_quantity
unit
status
started_at
completed_at
created_by
notes
created_at
updated_at
```

### status Values

```text
planned
in_progress
completed
cancelled
```

---

## 12.4 production_batch_items

Stores consumed recipe items per batch.

### Suggested Columns

```text
id
batch_id
inventory_item_id
planned_quantity
actual_quantity
unit_cost
total_cost
created_at
updated_at
```

---

# 13. Suppliers and Purchases

## 13.1 suppliers

Stores suppliers.

### Suggested Columns

```text
id
name
contact_name
phone
whatsapp
email
address
notes
status
created_at
updated_at
deleted_at
```

### status Values

```text
active
inactive
blocked
```

---

## 13.2 supplier_items

Connects suppliers to items they sell.

### Suggested Columns

```text
id
supplier_id
inventory_item_id
supplier_item_name
supplier_sku
last_price
currency
unit
notes
created_at
updated_at
```

---

## 13.3 supplier_price_history

Stores historical item prices per supplier.

### Suggested Columns

```text
id
supplier_id
inventory_item_id
price
currency
unit
effective_date
source_type
source_id
created_at
```

### source_type Examples

```text
manual
purchase_invoice
price_update
```

---

## 13.4 purchase_orders

Stores purchase orders.

### Suggested Columns

```text
id
purchase_order_number
supplier_id
status
expected_date
subtotal
discount_total
tax_total
shipping_total
grand_total
notes
created_by
approved_by
approved_at
created_at
updated_at
```

### status Values

```text
draft
pending_approval
approved
partially_received
received
cancelled
```

---

## 13.5 purchase_order_items

Stores purchase order items.

### Suggested Columns

```text
id
purchase_order_id
inventory_item_id
description
ordered_quantity
received_quantity
unit
unit_price
total_price
created_at
updated_at
```

---

## 13.6 goods_receipts

Stores actual received quantities.

### Suggested Columns

```text
id
receipt_number
purchase_order_id
supplier_id
received_by
received_at
notes
created_at
updated_at
```

---

## 13.7 goods_receipt_items

Stores items received.

### Suggested Columns

```text
id
goods_receipt_id
purchase_order_item_id
inventory_item_id
received_quantity
unit
unit_cost
notes
created_at
```

---

## 13.8 supplier_invoices

Stores supplier invoices.

### Suggested Columns

```text
id
invoice_number
supplier_id
purchase_order_id
invoice_date
due_date
subtotal
discount_total
tax_total
grand_total
payment_status
attachment_id
notes
created_at
updated_at
```

### payment_status Values

```text
unpaid
partially_paid
paid
cancelled
```

---

# 14. Orders and Checkout

## 14.1 orders

Stores customer orders.

### Suggested Columns

```text
id
order_number
customer_id
order_source
order_status
payment_status
fulfillment_status
customer_name_snapshot
customer_phone_snapshot
customer_whatsapp_snapshot
customer_email_snapshot
shipping_address_snapshot
subtotal
discount_total
shipping_total
wallet_used
loyalty_points_used
grand_total
currency
customer_notes
internal_notes
whatsapp_message
whatsapp_redirected_at
telegram_notified_at
created_at
updated_at
cancelled_at
cancel_reason
```

### order_source Values

```text
website
dashboard_manual
whatsapp
phone
future_mobile_app
```

### order_status Values

```text
pending
confirmed
preparing
shipped
delivered
cancelled
returned
refunded
```

### payment_status Values

```text
unpaid
partially_paid
paid
partially_refunded
refunded
```

### fulfillment_status Values

```text
unfulfilled
partially_fulfilled
fulfilled
returned
```

### Rule

New website orders start as:

```text
pending
```

Order must be saved before WhatsApp redirect.

---

## 14.2 order_items

Stores items inside orders with snapshots.

### Suggested Columns

```text
id
order_id
product_id
variant_id
product_name_ar_snapshot
product_name_en_snapshot
category_name_snapshot
sku_snapshot
product_image_snapshot
product_type_snapshot
weight_value
weight_unit
quantity
unit_price
discount_amount
line_total
recipe_id_snapshot
recipe_version_snapshot
custom_builder_type
custom_builder_snapshot
metadata
created_at
```

### custom_builder_type Values

```text
none
make_your_espresso
make_your_flavor
```

---

## 14.3 order_status_history

Stores order timeline.

### Suggested Columns

```text
id
order_id
old_status
new_status
changed_by
change_reason
notes
created_at
```

---

## 14.4 order_payments

Stores payment records.

### Suggested Columns

```text
id
order_id
payment_method
payment_status
amount
currency
transaction_reference
attachment_id
paid_at
created_at
updated_at
```

### payment_method Values

```text
cash_on_delivery
instapay
vodafone_cash
bank_transfer
wallet
manual
future_online_payment
```

---

## 14.5 order_refunds

Stores refunds.

### Suggested Columns

```text
id
order_id
payment_id
refund_method
refund_status
amount
reason
processed_by
processed_at
created_at
updated_at
```

### refund_method Values

```text
wallet
manual
original_payment_method
```

---

## 14.6 order_returns

Stores returns.

### Suggested Columns

```text
id
order_id
return_status
reason
requested_at
approved_by
approved_at
received_at
refunded_at
notes
created_at
updated_at
```

### return_status Values

```text
requested
approved
rejected
returned
refunded
cancelled
```

---

## 14.7 order_attachments

Stores optional order attachments.

### Suggested Columns

```text
id
order_id
media_asset_id
attachment_type
uploaded_by
created_at
```

### attachment_type Examples

```text
payment_proof
location
receipt
return_evidence
customer_file
internal_file
```

---

# 15. Shipping

## 15.1 shipping_zones

Stores shipping rules by location.

### Suggested Columns

```text
id
zone_name
governorate
city
area
base_price
free_shipping_threshold
is_active
created_at
updated_at
```

### Default Rule

```text
Cairo/Giza: 50 EGP
Other governorates: admin/shipping company confirmation
```

---

## 15.2 shipping_companies

Future-ready table for shipping companies.

### Suggested Columns

```text
id
name
phone
website
tracking_url_template
status
notes
created_at
updated_at
```

---

## 15.3 order_shipments

Stores shipment details.

### Suggested Columns

```text
id
order_id
shipping_company_id
tracking_number
shipping_status
shipped_at
delivered_at
shipping_cost
notes
created_at
updated_at
```

---

# 16. Discounts, Promotions, Wallet, and Loyalty

## 16.1 promotions

Stores discount campaigns.

### Suggested Columns

```text
id
name_ar
name_en
code
promotion_type
discount_value
start_at
end_at
status
usage_limit_total
usage_limit_per_customer
minimum_order_amount
maximum_discount_amount
applies_to
stacking_rule
created_at
updated_at
```

### promotion_type Values

```text
fixed_amount
percentage
free_shipping
gift_product
custom
```

### applies_to Values

```text
all
products
categories
customers
segments
```

### stacking_rule Values

```text
not_stackable
stackable
admin_only
```

---

## 16.2 promotion_targets

Stores products/categories/customers targeted by promotion.

### Suggested Columns

```text
id
promotion_id
target_type
target_id
created_at
```

### target_type Values

```text
product
category
customer
customer_tag
segment
```

---

## 16.3 promotion_usages

Stores usage history.

### Suggested Columns

```text
id
promotion_id
customer_id
order_id
discount_amount
used_at
```

---

## 16.4 customer_wallets

Stores customer wallet balance.

### Suggested Columns

```text
id
customer_id
balance
currency
created_at
updated_at
```

---

## 16.5 wallet_transactions

Stores wallet movements.

### Suggested Columns

```text
id
wallet_id
customer_id
transaction_type
amount
source_type
source_id
reason
created_by
created_at
```

### transaction_type Values

```text
credit
debit
refund
manual_adjustment
promotion
compensation
```

---

## 16.6 loyalty_accounts

Stores customer loyalty account.

### Suggested Columns

```text
id
customer_id
points_balance
lifetime_points
tier_id
created_at
updated_at
```

---

## 16.7 loyalty_transactions

Stores points movements.

### Suggested Columns

```text
id
customer_id
order_id
transaction_type
points
value_amount
reason
expires_at
created_at
```

### transaction_type Values

```text
earned
redeemed
expired
manual_adjustment
cancelled
```

### Default Rule

```text
10 EGP = 1 point
```

Point value is configurable from settings.

---

# 17. Reviews and Feedback

## 17.1 product_reviews

Stores product reviews.

### Suggested Columns

```text
id
product_id
customer_id
order_id
rating
review_text
status
is_verified_purchase
is_featured
created_at
updated_at
approved_by
approved_at
rejected_reason
```

### status Values

```text
pending
approved
rejected
hidden
```

### Rule

Only approved reviews appear publicly.

Homepage shows curated featured reviews only.

---

## 17.2 feedback_messages

Stores general feedback/contact messages.

### Suggested Columns

```text
id
source
customer_id
name
phone
email
message
status
assigned_to
notes
created_at
updated_at
```

### source Values

```text
website_contact
whatsapp
manual
social
```

### status Values

```text
new
contacted
in_progress
won
lost
closed
```

---

# 18. Media Studio and Content

## 18.1 media_assets

Stores all uploaded media.

### Suggested Columns

```text
id
file_name
file_type
mime_type
file_size
storage_path
public_url
optimized_url
thumbnail_url
alt_text_ar
alt_text_en
folder_id
uploaded_by
width
height
duration
focus_x
focus_y
metadata
created_at
updated_at
deleted_at
```

### file_type Values

```text
image
video
document
icon
other
```

---

## 18.2 media_folders

Stores media folders.

### Suggested Columns

```text
id
name
parent_id
sort_order
created_at
updated_at
```

---

## 18.3 media_tags

Stores media tags.

### Suggested Columns

```text
id
name
code
created_at
```

---

## 18.4 media_asset_tags

Connects media to tags.

### Suggested Columns

```text
id
media_asset_id
tag_id
created_at
```

---

## 18.5 website_pages

Stores website pages controlled by CMS/Media Studio.

### Suggested Columns

```text
id
page_key
title_ar
title_en
slug
page_type
seo_title_ar
seo_title_en
seo_description_ar
seo_description_en
status
created_at
updated_at
```

### page_key Examples

```text
home
about
products
blog
contact
privacy
terms
shipping
returns
```

---

## 18.6 page_sections

Stores sections per page.

### Suggested Columns

```text
id
page_id
section_key
section_type
title_ar
title_en
subtitle_ar
subtitle_en
content_ar
content_en
primary_button_text_ar
primary_button_text_en
primary_button_url
secondary_button_text_ar
secondary_button_text_en
secondary_button_url
background_media_id
foreground_media_id
layout_variant
sort_order
is_visible
metadata
created_at
updated_at
```

### section_key Examples

```text
announcement_bar
header
hero
product_png_strip
service_cards
shop_by_category
best_sellers
our_story
latest_blog_posts
footer
```

---

## 18.7 page_section_items

Stores repeated items inside a section.

### Suggested Columns

```text
id
section_id
title_ar
title_en
description_ar
description_en
media_id
icon_id
button_text_ar
button_text_en
button_url
linked_product_id
linked_category_id
sort_order
is_visible
metadata
created_at
updated_at
```

### Used For

```text
Service cards
Product strip items
Category cards
Homepage review cards
Blog preview items
Footer links
```

---

## 18.8 page_section_revisions

Stores Media Studio revision history.

### Suggested Columns

```text
id
page_id
section_id
revision_number
snapshot
created_by
created_at
published_at
status
```

### status Values

```text
draft
published
rolled_back
archived
```

---

# 19. Blog and SEO

## 19.1 blog_posts

Stores blog posts.

### Suggested Columns

```text
id
title_ar
title_en
slug
excerpt_ar
excerpt_en
content_ar
content_en
featured_image_id
author_id
status
published_at
scheduled_at
seo_title_ar
seo_title_en
seo_description_ar
seo_description_en
created_at
updated_at
deleted_at
```

### status Values

```text
draft
scheduled
published
archived
```

---

## 19.2 blog_categories

Stores blog categories.

### Suggested Columns

```text
id
name_ar
name_en
slug
description_ar
description_en
sort_order
created_at
updated_at
```

---

## 19.3 blog_post_categories

Many-to-many blog post/category table.

### Suggested Columns

```text
id
post_id
category_id
created_at
```

---

## 19.4 blog_tags

Stores blog tags.

### Suggested Columns

```text
id
name_ar
name_en
slug
created_at
updated_at
```

---

## 19.5 blog_post_tags

Many-to-many blog post/tag table.

### Suggested Columns

```text
id
post_id
tag_id
created_at
```

---

# 20. Settings

## 20.1 site_settings

Stores general settings.

### Suggested Columns

```text
id
setting_group
setting_key
setting_value
value_type
is_public
description
updated_by
created_at
updated_at
```

### setting_group Examples

```text
brand
contact
social
footer
seo
checkout
whatsapp
telegram
shipping
loyalty
currency
appearance
```

### Rules

* Public settings can be exposed to website.
* Private settings must only be accessible server-side/admin-side.
* WhatsApp API key must never be public.
* Telegram token must never be public.

---

## 20.2 appearance_settings

Optional structured table for brand appearance.

### Suggested Columns

```text
id
brand_name
primary_color
secondary_color
background_color
text_color
font_en
font_ar
logo_media_id
favicon_media_id
metadata
created_at
updated_at
```

---

# 21. Notifications

## 21.1 notification_templates

Stores notification templates.

### Suggested Columns

```text
id
template_key
channel
title_ar
title_en
body_ar
body_en
is_active
created_at
updated_at
```

### channel Values

```text
telegram
email
dashboard
whatsapp_future
```

---

## 21.2 notifications

Stores notification logs.

### Suggested Columns

```text
id
channel
recipient
notification_type
title
body
status
related_table
related_id
sent_at
error_message
created_at
```

### status Values

```text
pending
sent
failed
cancelled
```

---

# 22. Analytics and Events

## 22.1 website_events

Stores website behavior events.

### Suggested Columns

```text
id
session_id
customer_id
event_type
page_url
referrer
product_id
category_id
metadata
ip_address
user_agent
created_at
```

### event_type Examples

```text
page_view
product_view
category_view
search
add_to_cart
remove_from_cart
checkout_started
order_created
blog_view
```

---

## 22.2 search_logs

Stores customer search terms.

### Suggested Columns

```text
id
customer_id
session_id
query
results_count
created_at
```

---

## 22.3 cart_events

Stores cart analytics.

### Suggested Columns

```text
id
session_id
customer_id
event_type
product_id
variant_id
quantity
metadata
created_at
```

### event_type Values

```text
add
remove
update_quantity
abandon
checkout
```

---

# 23. Audit Logs

## 23.1 audit_logs

Stores important admin/system actions permanently.

### Suggested Columns

```text
id
actor_type
actor_id
action
module
target_table
target_id
old_values
new_values
ip_address
user_agent
created_at
```

### actor_type Values

```text
admin
system
customer
```

### Important Audited Actions

```text
product_create
product_update
product_archive
price_update
inventory_adjustment
recipe_update
order_status_update
order_cancel
refund_create
customer_block
settings_update
role_update
permission_update
media_publish
page_publish
discount_create
discount_update
```

### Rule

Audit logs are retained permanently.

No normal dashboard delete for audit logs in V1.

---

# 24. Security and RLS Notes

## 24.1 Public Website Access

The public website may read:

```text
visible active products
visible active categories
public media
published blog posts
public site settings
published page sections
approved reviews
```

The public website must not read:

```text
private settings
supplier costs
inventory costs
customer private data
orders of other customers
admin data
audit logs
```

---

## 24.2 Checkout Security

Checkout must be server-side validated.

Client must not be trusted for:

```text
unit price
discount calculation
shipping total
custom builder price
inventory deduction
customer discount eligibility
```

Server must recalculate:

```text
product prices
variant prices
custom builder prices
discounts
shipping
totals
```

---

## 24.3 Admin Access

Admin dashboard requires authentication and permission checks.

Actions must be permission-based.

Sensitive actions must be audited.

---

# 25. Data Relationships Summary

## 25.1 Product Relationships

```text
categories 1 → many products
products 1 → many product_variants
products 1 → many product_media
products 1 → many product_profile_attributes
products many → many related products
```

## 25.2 Order Relationships

```text
customers 1 → many orders
orders 1 → many order_items
orders 1 → many order_status_history
orders 1 → many order_payments
orders 1 → many order_returns
orders 1 → many order_attachments
```

## 25.3 Inventory Relationships

```text
inventory_items 1 → many inventory_movements
recipes 1 → many recipe_items
products 1 → many recipes
production_batches consume inventory_items
orders may consume inventory through recipes or finished stock
```

## 25.4 Media Relationships

```text
media_assets used by products
media_assets used by categories
media_assets used by page_sections
media_assets used by blog_posts
media_assets used by settings
```

## 25.5 Customer Relationships

```text
customers 1 → many addresses
customers 1 → many orders
customers 1 → one wallet
customers 1 → one loyalty account
customers 1 → many reviews
customers many → many tags
```

---

# 26. V1 Minimum Required Tables

For V1 launch, the most important tables are:

```text
admin_users
admin_roles
admin_permissions
admin_role_permissions

customers
customer_addresses

categories
products
product_variants
product_media
product_profile_attributes

coffee_beans
flavor_bases
flavor_options
flavor_base_options

orders
order_items
order_status_history
order_payments

inventory_items
inventory_movements

recipes
recipe_items

suppliers
supplier_items
supplier_price_history
purchase_orders
purchase_order_items
goods_receipts
goods_receipt_items

promotions
promotion_targets
promotion_usages

customer_wallets
wallet_transactions
loyalty_accounts
loyalty_transactions

product_reviews
feedback_messages

media_assets
media_folders
media_tags
media_asset_tags
website_pages
page_sections
page_section_items
page_section_revisions

blog_posts
blog_categories
blog_tags

site_settings
notification_templates
notifications
website_events
audit_logs
```

---

# 27. Tables That Can Be Deferred

The following can be deferred if needed:

```text
admin_activity_sessions
inventory_count_sessions
inventory_count_items
production_batches
production_batch_items
supplier_invoices
shipping_companies
order_shipments
blog_post_categories
blog_post_tags
appearance_settings
search_logs
cart_events
```

But the schema should remain future-ready.

---

# 28. Implementation Rules for Developers

When implementing this blueprint:

```text
Read AGENTS.md first.
Do not rewrite the whole database blindly.
Compare current migrations with this blueprint.
Use minimal safe migrations.
Do not drop live data without explicit approval.
Do not make config files the live source of truth.
Do not hardcode products/categories/prices in frontend.
Do not trust client-side checkout totals.
Do not break existing order flow.
Do not expose private settings publicly.
Do not add heavy unrelated features.
```

---

# 29. Final Rule

The database must support one clean system:

```text
Dashboard controls the business.
Supabase stores the truth.
Website reads from the database.
Media Studio edits database-backed content.
Orders are saved before WhatsApp.
Inventory and costing are connected.
Audit logs protect important actions.
Future mobile app can reuse the same database.
```

Line Coffee V2 must not become:

```text
Config-driven website
Hardcoded product system
UI-only dashboard
Order form without real business logic
Inventory disconnected from sales
Beautiful frontend with weak backend
```

The database is the foundation of the whole Line Coffee V2 system.
