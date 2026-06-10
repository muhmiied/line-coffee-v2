-- Line Coffee V2 Phase 3F: approved pricing corrections.
-- Corrects sale_price for 21 variants across 10 products.
-- Scope: product_variants UPDATE only.
-- No schema changes. No product or category changes. No UI changes.
--
-- Products corrected:
--   Turkish Blends : turkish-silk, strike-coffee, cairo-nights (250g), high-mood (500g)
--   Espresso Blends: aroma-body (500g/1kg), headshot, black-label
--   Easy Coffee    : classic-line (500g/1kg), gold-line

with corrections (product_slug, variant_name, sale_price) as (
  values
    -- Turkish Blends
    ('turkish-silk',  '250g',   175.00),
    ('turkish-silk',  '500g',   350.00),
    ('turkish-silk',  '1kg',    700.00),
    ('strike-coffee', '250g',   225.00),
    ('strike-coffee', '500g',   450.00),
    ('strike-coffee', '1kg',    900.00),
    ('cairo-nights',  '250g',   215.00),
    ('high-mood',     '500g',   575.00),
    -- Espresso Blends
    ('aroma-body',    '500g',   450.00),
    ('aroma-body',    '1kg',    900.00),
    ('headshot',      '250g',   240.00),
    ('headshot',      '500g',   480.00),
    ('headshot',      '1kg',    960.00),
    ('black-label',   '250g',   300.00),
    ('black-label',   '500g',   600.00),
    ('black-label',   '1kg',   1200.00),
    -- Easy Coffee
    ('classic-line',  '500g',   475.00),
    ('classic-line',  '1kg',    950.00),
    ('gold-line',     '250g',   375.00),
    ('gold-line',     '500g',   750.00),
    ('gold-line',     '1kg',   1500.00)
)
update public.product_variants as pv
set    sale_price = corrections.sale_price::numeric(12,2)
from   corrections
join   public.products as p
         on  p.slug        = corrections.product_slug
         and p.deleted_at  is null
where  pv.product_id   = p.id
  and  pv.variant_name = corrections.variant_name
  and  pv.deleted_at   is null;
