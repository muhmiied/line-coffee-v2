-- Line Coffee V2 Phase 3C public catalog SELECT grants.
-- Scope: table privileges only. RLS policies continue to control row visibility.

grant select on table public.categories to anon, authenticated;
grant select on table public.products to anon, authenticated;
grant select on table public.product_variants to anon, authenticated;
