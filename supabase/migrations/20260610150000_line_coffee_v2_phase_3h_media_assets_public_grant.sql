-- Line Coffee V2 Phase 3H: grant SELECT on media_assets to public roles.
-- RLS policy already exists; this adds the required table-level privilege.
grant select on table public.media_assets to anon, authenticated;
