-- Line Coffee V2 Phase 2D service-role admin auth grants.
-- Scope: minimal SELECT privileges for server-only admin auth lookups.

grant select on table public.admin_users to service_role;
grant select on table public.admin_roles to service_role;
grant select on table public.admin_permissions to service_role;
grant select on table public.admin_role_permissions to service_role;
