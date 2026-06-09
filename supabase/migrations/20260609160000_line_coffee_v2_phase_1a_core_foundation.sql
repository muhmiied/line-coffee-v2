-- Line Coffee V2 Phase 1A core database foundation.
-- Scope: core tables only. No seed data, frontend reads, checkout logic,
-- inventory, recipes, suppliers, discounts, notifications, or analytics.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table public.media_assets (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  file_type text not null default 'image',
  mime_type text,
  file_size bigint,
  storage_path text not null,
  public_url text,
  optimized_url text,
  thumbnail_url text,
  alt_text_ar text,
  alt_text_en text,
  width integer,
  height integer,
  duration_seconds integer,
  focus_x numeric(5,4),
  focus_y numeric(5,4),
  is_public boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint media_assets_file_type_check check (
    file_type in ('image', 'video', 'document', 'icon', 'other')
  ),
  constraint media_assets_file_size_check check (file_size is null or file_size >= 0),
  constraint media_assets_dimensions_check check (
    (width is null or width >= 0)
    and (height is null or height >= 0)
    and (duration_seconds is null or duration_seconds >= 0)
  ),
  constraint media_assets_focus_check check (
    (focus_x is null or (focus_x >= 0 and focus_x <= 1))
    and (focus_y is null or (focus_y >= 0 and focus_y <= 1))
  )
);

create trigger set_media_assets_updated_at
before update on public.media_assets
for each row execute function public.set_updated_at();

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references public.categories(id) on delete set null,
  name_ar text,
  name_en text not null,
  slug text not null,
  description_ar text,
  description_en text,
  short_description_ar text,
  short_description_en text,
  image_id uuid references public.media_assets(id) on delete set null,
  banner_image_id uuid references public.media_assets(id) on delete set null,
  icon_id uuid references public.media_assets(id) on delete set null,
  sort_order integer not null default 0,
  system_status text not null default 'draft',
  website_visibility text not null default 'hidden',
  seo_title_ar text,
  seo_title_en text,
  seo_description_ar text,
  seo_description_en text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint categories_system_status_check check (
    system_status in ('draft', 'active', 'archived')
  ),
  constraint categories_website_visibility_check check (
    website_visibility in ('visible', 'hidden')
  ),
  constraint categories_slug_not_blank_check check (length(btrim(slug)) > 0)
);

create unique index categories_slug_unique_active
on public.categories (slug)
where deleted_at is null;

create index categories_parent_id_idx on public.categories (parent_id);
create index categories_public_lookup_idx
on public.categories (system_status, website_visibility, sort_order)
where deleted_at is null;

create trigger set_categories_updated_at
before update on public.categories
for each row execute function public.set_updated_at();

create table public.products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references public.categories(id) on delete set null,
  name_ar text,
  name_en text not null,
  slug text not null,
  sku text,
  product_type text not null default 'standard',
  short_description_ar text,
  short_description_en text,
  full_description_ar text,
  full_description_en text,
  ingredients_ar text,
  ingredients_en text,
  blend_composition_visibility text not null default 'hidden',
  main_image_id uuid references public.media_assets(id) on delete set null,
  system_status text not null default 'draft',
  website_visibility text not null default 'hidden',
  inventory_strategy text not null default 'none',
  is_featured boolean not null default false,
  is_best_seller boolean not null default false,
  is_customizable boolean not null default false,
  sort_order integer not null default 0,
  seo_title_ar text,
  seo_title_en text,
  seo_description_ar text,
  seo_description_en text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint products_product_type_check check (
    product_type in (
      'standard',
      'espresso_blend',
      'turkish_blend',
      'easy_coffee',
      'flavor_coffee',
      'coffee_mix',
      'cappuccino',
      'hot_chocolate',
      'custom_espresso',
      'custom_flavor'
    )
  ),
  constraint products_blend_composition_visibility_check check (
    blend_composition_visibility in ('full', 'partial', 'hidden')
  ),
  constraint products_system_status_check check (
    system_status in ('draft', 'active', 'archived')
  ),
  constraint products_website_visibility_check check (
    website_visibility in ('visible', 'hidden')
  ),
  constraint products_inventory_strategy_check check (
    inventory_strategy in ('finished_stock', 'recipe_driven', 'hybrid', 'none')
  ),
  constraint products_slug_not_blank_check check (length(btrim(slug)) > 0)
);

create unique index products_slug_unique_active
on public.products (slug)
where deleted_at is null;

create unique index products_sku_unique_active
on public.products (sku)
where sku is not null and deleted_at is null;

create index products_category_id_idx on public.products (category_id);
create index products_public_lookup_idx
on public.products (system_status, website_visibility, sort_order)
where deleted_at is null;

create trigger set_products_updated_at
before update on public.products
for each row execute function public.set_updated_at();

create table public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  variant_name text not null,
  weight_value numeric(10,3),
  weight_unit text,
  sku text,
  sale_price numeric(12,2) not null,
  compare_at_price numeric(12,2),
  is_default boolean not null default false,
  system_status text not null default 'draft',
  website_visibility text not null default 'hidden',
  sort_order integer not null default 0,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint product_variants_price_check check (
    sale_price >= 0 and (compare_at_price is null or compare_at_price >= 0)
  ),
  constraint product_variants_weight_check check (
    weight_value is null or weight_value > 0
  ),
  constraint product_variants_system_status_check check (
    system_status in ('draft', 'active', 'archived')
  ),
  constraint product_variants_website_visibility_check check (
    website_visibility in ('visible', 'hidden')
  )
);

create unique index product_variants_sku_unique_active
on public.product_variants (sku)
where sku is not null and deleted_at is null;

create unique index product_variants_single_default_active
on public.product_variants (product_id)
where is_default is true and deleted_at is null;

create index product_variants_product_id_idx on public.product_variants (product_id);
create index product_variants_public_lookup_idx
on public.product_variants (system_status, website_visibility, sort_order)
where deleted_at is null;

create trigger set_product_variants_updated_at
before update on public.product_variants
for each row execute function public.set_updated_at();

create table public.website_pages (
  id uuid primary key default gen_random_uuid(),
  page_key text not null,
  title_ar text,
  title_en text not null,
  slug text not null,
  page_type text not null default 'system',
  seo_title_ar text,
  seo_title_en text,
  seo_description_ar text,
  seo_description_en text,
  status text not null default 'draft',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint website_pages_page_type_check check (
    page_type in ('system', 'legal', 'blog', 'landing', 'custom')
  ),
  constraint website_pages_status_check check (
    status in ('draft', 'published', 'archived')
  ),
  constraint website_pages_page_key_not_blank_check check (length(btrim(page_key)) > 0),
  constraint website_pages_slug_not_blank_check check (length(btrim(slug)) > 0)
);

create unique index website_pages_page_key_unique_active
on public.website_pages (page_key)
where deleted_at is null;

create unique index website_pages_slug_unique_active
on public.website_pages (slug)
where deleted_at is null;

create index website_pages_status_idx
on public.website_pages (status)
where deleted_at is null;

create trigger set_website_pages_updated_at
before update on public.website_pages
for each row execute function public.set_updated_at();

create table public.page_sections (
  id uuid primary key default gen_random_uuid(),
  page_id uuid not null references public.website_pages(id) on delete cascade,
  section_key text not null,
  section_type text not null,
  title_ar text,
  title_en text,
  subtitle_ar text,
  subtitle_en text,
  content_ar text,
  content_en text,
  primary_button_text_ar text,
  primary_button_text_en text,
  primary_button_url text,
  secondary_button_text_ar text,
  secondary_button_text_en text,
  secondary_button_url text,
  background_media_id uuid references public.media_assets(id) on delete set null,
  foreground_media_id uuid references public.media_assets(id) on delete set null,
  layout_variant text,
  sort_order integer not null default 0,
  is_visible boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint page_sections_section_key_not_blank_check check (length(btrim(section_key)) > 0),
  constraint page_sections_section_type_not_blank_check check (length(btrim(section_type)) > 0)
);

create unique index page_sections_key_unique_active
on public.page_sections (page_id, section_key)
where deleted_at is null;

create index page_sections_page_id_idx on public.page_sections (page_id);
create index page_sections_public_lookup_idx
on public.page_sections (page_id, is_visible, sort_order)
where deleted_at is null;

create trigger set_page_sections_updated_at
before update on public.page_sections
for each row execute function public.set_updated_at();

create table public.page_section_items (
  id uuid primary key default gen_random_uuid(),
  section_id uuid not null references public.page_sections(id) on delete cascade,
  title_ar text,
  title_en text,
  description_ar text,
  description_en text,
  media_id uuid references public.media_assets(id) on delete set null,
  icon_id uuid references public.media_assets(id) on delete set null,
  button_text_ar text,
  button_text_en text,
  button_url text,
  linked_product_id uuid references public.products(id) on delete set null,
  linked_category_id uuid references public.categories(id) on delete set null,
  sort_order integer not null default 0,
  is_visible boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create index page_section_items_section_id_idx on public.page_section_items (section_id);
create index page_section_items_public_lookup_idx
on public.page_section_items (section_id, is_visible, sort_order)
where deleted_at is null;

create trigger set_page_section_items_updated_at
before update on public.page_section_items
for each row execute function public.set_updated_at();

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid,
  full_name text not null,
  email text,
  phone text,
  whatsapp text,
  username text,
  customer_type text not null default 'individual',
  status text not null default 'active',
  profile_image_url text,
  total_orders integer not null default 0,
  total_spent numeric(12,2) not null default 0,
  first_order_at timestamptz,
  last_order_at timestamptz,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  constraint customers_customer_type_check check (
    customer_type in ('individual', 'business')
  ),
  constraint customers_status_check check (
    status in ('active', 'inactive', 'blocked', 'deleted')
  ),
  constraint customers_totals_check check (total_orders >= 0 and total_spent >= 0)
);

create unique index customers_username_unique_active
on public.customers (lower(username))
where username is not null and deleted_at is null;

create index customers_auth_user_id_idx on public.customers (auth_user_id);
create index customers_email_lookup_idx on public.customers (lower(email)) where email is not null;
create index customers_phone_lookup_idx on public.customers (phone) where phone is not null;
create index customers_whatsapp_lookup_idx on public.customers (whatsapp) where whatsapp is not null;

create trigger set_customers_updated_at
before update on public.customers
for each row execute function public.set_updated_at();

create table public.customer_addresses (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  label text,
  full_name text,
  phone text,
  governorate text not null,
  city text not null,
  area text,
  street text,
  building text,
  floor text,
  apartment text,
  landmark text,
  maps_url text,
  notes text,
  is_default boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create unique index customer_addresses_single_default_active
on public.customer_addresses (customer_id)
where is_default is true and deleted_at is null;

create index customer_addresses_customer_id_idx on public.customer_addresses (customer_id);

create trigger set_customer_addresses_updated_at
before update on public.customer_addresses
for each row execute function public.set_updated_at();

alter table public.customers
add column default_address_id uuid references public.customer_addresses(id) on delete set null;

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  order_number text not null,
  customer_id uuid references public.customers(id) on delete set null,
  order_source text not null default 'website',
  order_status text not null default 'pending',
  payment_status text not null default 'unpaid',
  fulfillment_status text not null default 'unfulfilled',
  customer_name_snapshot text not null,
  customer_phone_snapshot text,
  customer_whatsapp_snapshot text,
  customer_email_snapshot text,
  shipping_address_snapshot jsonb not null default '{}'::jsonb,
  subtotal numeric(12,2) not null default 0,
  discount_total numeric(12,2) not null default 0,
  shipping_total numeric(12,2) not null default 0,
  wallet_used numeric(12,2) not null default 0,
  loyalty_points_used integer not null default 0,
  grand_total numeric(12,2) not null default 0,
  currency text not null default 'EGP',
  customer_notes text,
  internal_notes text,
  whatsapp_message text,
  whatsapp_redirected_at timestamptz,
  telegram_notified_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  cancelled_at timestamptz,
  cancel_reason text,
  constraint orders_order_source_check check (
    order_source in ('website', 'dashboard_manual', 'whatsapp', 'phone', 'future_mobile_app')
  ),
  constraint orders_order_status_check check (
    order_status in ('pending', 'confirmed', 'preparing', 'shipped', 'delivered', 'cancelled', 'returned', 'refunded')
  ),
  constraint orders_payment_status_check check (
    payment_status in ('unpaid', 'partially_paid', 'paid', 'partially_refunded', 'refunded')
  ),
  constraint orders_fulfillment_status_check check (
    fulfillment_status in ('unfulfilled', 'partially_fulfilled', 'fulfilled', 'returned')
  ),
  constraint orders_totals_check check (
    subtotal >= 0
    and discount_total >= 0
    and shipping_total >= 0
    and wallet_used >= 0
    and loyalty_points_used >= 0
    and grand_total >= 0
  ),
  constraint orders_order_number_not_blank_check check (length(btrim(order_number)) > 0)
);

create unique index orders_order_number_unique on public.orders (order_number);
create index orders_customer_id_idx on public.orders (customer_id);
create index orders_status_created_at_idx on public.orders (order_status, created_at desc);

create trigger set_orders_updated_at
before update on public.orders
for each row execute function public.set_updated_at();

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid references public.products(id) on delete set null,
  variant_id uuid references public.product_variants(id) on delete set null,
  product_name_ar_snapshot text,
  product_name_en_snapshot text not null,
  category_name_snapshot text,
  sku_snapshot text,
  product_image_snapshot text,
  product_type_snapshot text,
  weight_value numeric(10,3),
  weight_unit text,
  quantity integer not null,
  unit_price numeric(12,2) not null,
  discount_amount numeric(12,2) not null default 0,
  line_total numeric(12,2) not null,
  recipe_id_snapshot uuid,
  recipe_version_snapshot text,
  custom_builder_type text not null default 'none',
  custom_builder_snapshot jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint order_items_quantity_price_check check (
    quantity > 0
    and unit_price >= 0
    and discount_amount >= 0
    and line_total >= 0
    and (weight_value is null or weight_value > 0)
  ),
  constraint order_items_custom_builder_type_check check (
    custom_builder_type in ('none', 'make_your_espresso', 'make_your_flavor')
  )
);

create index order_items_order_id_idx on public.order_items (order_id);
create index order_items_product_id_idx on public.order_items (product_id);

create table public.site_settings (
  id uuid primary key default gen_random_uuid(),
  setting_group text not null,
  setting_key text not null,
  setting_value jsonb not null default '{}'::jsonb,
  value_type text not null default 'json',
  is_public boolean not null default false,
  description text,
  updated_by uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint site_settings_value_type_check check (
    value_type in ('string', 'number', 'boolean', 'json', 'text', 'secret')
  ),
  constraint site_settings_secret_private_check check (
    value_type <> 'secret' or is_public is false
  ),
  constraint site_settings_group_key_not_blank_check check (
    length(btrim(setting_group)) > 0 and length(btrim(setting_key)) > 0
  )
);

create unique index site_settings_group_key_unique
on public.site_settings (setting_group, setting_key);

create index site_settings_public_lookup_idx
on public.site_settings (setting_group, setting_key)
where is_public is true;

create trigger set_site_settings_updated_at
before update on public.site_settings
for each row execute function public.set_updated_at();

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_type text not null default 'system',
  actor_id uuid,
  action text not null,
  module text not null,
  target_table text,
  target_id uuid,
  old_values jsonb,
  new_values jsonb,
  ip_address inet,
  user_agent text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint audit_logs_actor_type_check check (
    actor_type in ('admin', 'system', 'customer')
  ),
  constraint audit_logs_action_module_not_blank_check check (
    length(btrim(action)) > 0 and length(btrim(module)) > 0
  )
);

create index audit_logs_created_at_idx on public.audit_logs (created_at desc);
create index audit_logs_target_idx on public.audit_logs (target_table, target_id);
create index audit_logs_actor_idx on public.audit_logs (actor_type, actor_id);

alter table public.media_assets enable row level security;
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.product_variants enable row level security;
alter table public.website_pages enable row level security;
alter table public.page_sections enable row level security;
alter table public.page_section_items enable row level security;
alter table public.customers enable row level security;
alter table public.customer_addresses enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;
alter table public.site_settings enable row level security;
alter table public.audit_logs enable row level security;

create policy "Public can read public media assets"
on public.media_assets
for select
to anon, authenticated
using (is_public is true and deleted_at is null);

create policy "Public can read active visible categories"
on public.categories
for select
to anon, authenticated
using (
  system_status = 'active'
  and website_visibility = 'visible'
  and deleted_at is null
);

create policy "Public can read active visible products"
on public.products
for select
to anon, authenticated
using (
  system_status = 'active'
  and website_visibility = 'visible'
  and deleted_at is null
);

create policy "Public can read active visible product variants"
on public.product_variants
for select
to anon, authenticated
using (
  system_status = 'active'
  and website_visibility = 'visible'
  and deleted_at is null
  and exists (
    select 1
    from public.products
    where products.id = product_variants.product_id
      and products.system_status = 'active'
      and products.website_visibility = 'visible'
      and products.deleted_at is null
  )
);

create policy "Public can read published website pages"
on public.website_pages
for select
to anon, authenticated
using (status = 'published' and deleted_at is null);

create policy "Public can read visible sections for published pages"
on public.page_sections
for select
to anon, authenticated
using (
  is_visible is true
  and deleted_at is null
  and exists (
    select 1
    from public.website_pages
    where website_pages.id = page_sections.page_id
      and website_pages.status = 'published'
      and website_pages.deleted_at is null
  )
);

create policy "Public can read visible section items"
on public.page_section_items
for select
to anon, authenticated
using (
  is_visible is true
  and deleted_at is null
  and exists (
    select 1
    from public.page_sections
    join public.website_pages on website_pages.id = page_sections.page_id
    where page_sections.id = page_section_items.section_id
      and page_sections.is_visible is true
      and page_sections.deleted_at is null
      and website_pages.status = 'published'
      and website_pages.deleted_at is null
  )
);

create policy "Public can read public site settings"
on public.site_settings
for select
to anon, authenticated
using (is_public is true);

-- No public policies are created for customers, customer_addresses, orders,
-- order_items, or audit_logs. Admin/service access must be added in a later
-- auth and permissions phase.
