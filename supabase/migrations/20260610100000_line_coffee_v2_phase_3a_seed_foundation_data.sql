-- Line Coffee V2 Phase 3A foundation seed data.
-- Scope: insert-only seed data for public content tables.

insert into public.site_settings (
  setting_group,
  setting_key,
  setting_value,
  value_type,
  is_public
)
select
  seed.setting_group,
  seed.setting_key,
  to_jsonb(seed.setting_value),
  seed.value_type,
  seed.is_public
from (
  values
    ('brand', 'site_name', 'Line Coffee', 'string', true),
    ('brand', 'site_name_ar', 'لاين كوفي', 'string', true),
    ('brand', 'currency', 'EGP', 'string', true),
    ('brand', 'locale_default', 'ar', 'string', true),
    ('brand', 'primary_color', '#522500', 'string', true),
    ('brand', 'accent_color', '#FFDCC2', 'string', true)
) as seed(setting_group, setting_key, setting_value, value_type, is_public)
on conflict (setting_group, setting_key) do update
set
  setting_value = excluded.setting_value,
  value_type = excluded.value_type,
  is_public = excluded.is_public;

insert into public.categories (
  name_en,
  name_ar,
  slug,
  sort_order,
  system_status,
  website_visibility
)
values
  ('Turkish Blends', 'تركي', 'turkish-blends', 10, 'active', 'visible'),
  ('Espresso Blends', 'إسبريسو', 'espresso-blends', 20, 'active', 'visible'),
  ('Easy Coffee', 'إيزي كوفي', 'easy-coffee', 30, 'active', 'visible'),
  ('Flavor Coffee', 'قهوة بالنكهات', 'flavor-coffee', 40, 'active', 'visible'),
  ('Coffee Mix', 'كوفي ميكس', 'coffee-mix', 50, 'active', 'visible'),
  ('Cappuccino', 'كابتشينو', 'cappuccino', 60, 'active', 'visible'),
  ('Hot Chocolate', 'هوت شوكليت', 'hot-chocolate', 70, 'active', 'visible'),
  ('Make Your Espresso', 'اصنع إسبريسو', 'make-your-espresso', 80, 'active', 'hidden'),
  ('Make Your Flavor', 'اصنع فلافرك', 'make-your-flavor', 90, 'active', 'hidden')
on conflict (slug) where deleted_at is null do nothing;

insert into public.products (
  name_en,
  name_ar,
  slug,
  product_type,
  category_id,
  system_status,
  website_visibility,
  sort_order,
  is_featured
)
select
  seed.name_en,
  seed.name_ar,
  seed.slug,
  seed.product_type,
  (
    select public.categories.id
    from public.categories
    where public.categories.slug = seed.category_slug
      and public.categories.deleted_at is null
    limit 1
  ),
  seed.system_status,
  seed.website_visibility,
  seed.sort_order,
  seed.is_featured
from (
  values
    ('Turkish Silk', 'حرير تركي', 'turkish-silk', 'turkish_blend', 'turkish-blends', 'active', 'visible', 10, true),
    ('Strike Coffee', 'طلقة قهوة', 'strike-coffee', 'turkish_blend', 'turkish-blends', 'active', 'visible', 20, false),
    ('Cairo Nights', 'ليالي القاهرة', 'cairo-nights', 'turkish_blend', 'turkish-blends', 'active', 'visible', 30, false),
    ('High Mood', 'المزاج العالي', 'high-mood', 'turkish_blend', 'turkish-blends', 'active', 'visible', 40, false),
    ('HEAVY CREMA', 'هيفي كريما', 'heavy-crema', 'espresso_blend', 'espresso-blends', 'active', 'visible', 10, true),
    ('AROMA BODY', 'أروما بودي', 'aroma-body', 'espresso_blend', 'espresso-blends', 'active', 'visible', 20, false),
    ('HEADSHOT', 'هيدشوت', 'headshot', 'espresso_blend', 'espresso-blends', 'active', 'visible', 30, false),
    ('BLACK LABEL', 'بلاك ليبل', 'black-label', 'espresso_blend', 'espresso-blends', 'active', 'visible', 40, false),
    ('Classic Line', 'كلاسيك لاين', 'classic-line', 'easy_coffee', 'easy-coffee', 'active', 'visible', 10, true),
    ('Gold Line', 'جولد لاين', 'gold-line', 'easy_coffee', 'easy-coffee', 'active', 'visible', 20, false),
    ('French Coffee', 'قهوة فرنساوي', 'french-coffee', 'flavor_coffee', 'flavor-coffee', 'active', 'visible', 10, true),
    ('Make Your Espresso', 'اصنع إسبريسو', 'make-your-espresso-product', 'custom_espresso', 'make-your-espresso', 'active', 'hidden', 10, false),
    ('Make Your Flavor', 'اصنع فلافرك', 'make-your-flavor-product', 'custom_flavor', 'make-your-flavor', 'active', 'hidden', 10, false)
) as seed(name_en, name_ar, slug, product_type, category_slug, system_status, website_visibility, sort_order, is_featured)
on conflict (slug) where deleted_at is null do nothing;

insert into public.product_variants (
  product_id,
  variant_name,
  weight_value,
  weight_unit,
  sale_price,
  is_default,
  system_status,
  website_visibility,
  sort_order
)
select
  resolved.product_id,
  resolved.variant_name,
  resolved.weight_value,
  resolved.weight_unit,
  resolved.sale_price,
  resolved.is_default,
  resolved.system_status,
  resolved.website_visibility,
  resolved.sort_order
from (
  select
    (
      select public.products.id
      from public.products
      where public.products.slug = seed.product_slug
        and public.products.deleted_at is null
      limit 1
    ) as product_id,
    seed.variant_name,
    seed.weight_value::numeric(10,3) as weight_value,
    seed.weight_unit,
    seed.sale_price::numeric(12,2) as sale_price,
    seed.is_default,
    seed.system_status,
    seed.website_visibility,
    seed.sort_order
  from (
    values
      ('turkish-silk', '250g', 250, 'g', 170.00, true, 'active', 'visible', 10),
      ('turkish-silk', '500g', 500, 'g', 340.00, false, 'active', 'visible', 20),
      ('strike-coffee', '250g', 250, 'g', 220.00, true, 'active', 'visible', 10),
      ('strike-coffee', '500g', 500, 'g', 440.00, false, 'active', 'visible', 20),
      ('cairo-nights', '250g', 250, 'g', 210.00, true, 'active', 'visible', 10),
      ('cairo-nights', '500g', 500, 'g', 425.00, false, 'active', 'visible', 20),
      ('high-mood', '250g', 250, 'g', 290.00, true, 'active', 'visible', 10),
      ('high-mood', '500g', 500, 'g', 580.00, false, 'active', 'visible', 20),
      ('heavy-crema', '250g', 250, 'g', 175.00, true, 'active', 'visible', 10),
      ('heavy-crema', '500g', 500, 'g', 350.00, false, 'active', 'visible', 20),
      ('aroma-body', '250g', 250, 'g', 225.00, true, 'active', 'visible', 10),
      ('aroma-body', '500g', 500, 'g', 445.00, false, 'active', 'visible', 20),
      ('headshot', '250g', 250, 'g', 230.00, true, 'active', 'visible', 10),
      ('headshot', '500g', 500, 'g', 455.00, false, 'active', 'visible', 20),
      ('black-label', '250g', 250, 'g', 270.00, true, 'active', 'visible', 10),
      ('black-label', '500g', 500, 'g', 540.00, false, 'active', 'visible', 20),
      ('classic-line', '250g', 250, 'g', 240.00, true, 'active', 'visible', 10),
      ('classic-line', '500g', 500, 'g', 480.00, false, 'active', 'visible', 20),
      ('gold-line', '250g', 250, 'g', 280.00, true, 'active', 'visible', 10),
      ('gold-line', '500g', 500, 'g', 560.00, false, 'active', 'visible', 20),
      ('french-coffee', '250g', 250, 'g', 87.50, true, 'active', 'visible', 10),
      ('french-coffee', '500g', 500, 'g', 175.00, false, 'active', 'visible', 20),
      ('make-your-espresso-product', 'Custom', null, null, 0.00, true, 'active', 'hidden', 10),
      ('make-your-flavor-product', 'Custom', null, null, 0.00, true, 'active', 'hidden', 10)
  ) as seed(product_slug, variant_name, weight_value, weight_unit, sale_price, is_default, system_status, website_visibility, sort_order)
) as resolved
where not exists (
  select 1
  from public.product_variants
  where public.product_variants.product_id = resolved.product_id
    and public.product_variants.variant_name = resolved.variant_name
    and public.product_variants.deleted_at is null
);

insert into public.website_pages (
  page_key,
  title_en,
  title_ar,
  slug,
  page_type,
  status
)
values
  ('home', 'Home', 'الرئيسية', '/', 'system', 'published'),
  ('shop', 'Shop', 'المتجر', '/shop', 'system', 'published')
on conflict (page_key) where deleted_at is null do nothing;

insert into public.page_sections (
  page_id,
  section_key,
  section_type,
  title_en,
  title_ar,
  subtitle_en,
  subtitle_ar,
  sort_order,
  is_visible
)
select
  (
    select public.website_pages.id
    from public.website_pages
    where public.website_pages.page_key = seed.page_key
      and public.website_pages.deleted_at is null
    limit 1
  ),
  seed.section_key,
  seed.section_type,
  seed.title_en,
  seed.title_ar,
  seed.subtitle_en,
  seed.subtitle_ar,
  seed.sort_order,
  seed.is_visible
from (
  values
    ('home', 'hero', 'hero', 'Welcome to Line Coffee', 'أهلاً بك في لاين كوفي', 'Fresh coffee, crafted for your mood.', 'قهوة طازجة معمولة على مزاجك.', 10, true),
    ('home', 'featured-categories', 'category_grid', 'Our Collections', 'مجموعاتنا', 'Choose your favorite coffee style.', 'اختار نوع القهوة اللي يناسب مزاجك.', 20, true),
    ('home', 'featured-products', 'product_showcase', 'Best Sellers', 'الأكثر طلبًا', 'Start with our signature blends.', 'ابدأ بتوليفاتنا المميزة.', 30, true),
    ('shop', 'product-listing', 'product_listing', 'All Products', 'كل المنتجات', 'Explore Line Coffee products.', 'اكتشف منتجات لاين كوفي.', 10, true)
) as seed(page_key, section_key, section_type, title_en, title_ar, subtitle_en, subtitle_ar, sort_order, is_visible)
on conflict (page_id, section_key) where deleted_at is null do nothing;

insert into public.page_section_items (
  section_id,
  title_en,
  title_ar,
  linked_category_id,
  sort_order,
  is_visible
)
select
  resolved.section_id,
  resolved.title_en,
  resolved.title_ar,
  resolved.linked_category_id,
  resolved.sort_order,
  resolved.is_visible
from (
  select
    (
      select public.page_sections.id
      from public.page_sections
      join public.website_pages on public.website_pages.id = public.page_sections.page_id
      where public.website_pages.page_key = 'home'
        and public.page_sections.section_key = 'featured-categories'
        and public.page_sections.deleted_at is null
      limit 1
    ) as section_id,
    seed.title_en,
    seed.title_ar,
    (
      select public.categories.id
      from public.categories
      where public.categories.slug = seed.category_slug
        and public.categories.deleted_at is null
      limit 1
    ) as linked_category_id,
    seed.sort_order,
    seed.is_visible
  from (
    values
      ('Turkish Blends', 'تركي', 'turkish-blends', 10, true),
      ('Espresso Blends', 'إسبريسو', 'espresso-blends', 20, true),
      ('Easy Coffee', 'إيزي كوفي', 'easy-coffee', 30, true),
      ('Flavor Coffee', 'قهوة بالنكهات', 'flavor-coffee', 40, true)
  ) as seed(title_en, title_ar, category_slug, sort_order, is_visible)
) as resolved
where not exists (
  select 1
  from public.page_section_items
  where public.page_section_items.section_id = resolved.section_id
    and public.page_section_items.linked_category_id = resolved.linked_category_id
    and public.page_section_items.deleted_at is null
);
