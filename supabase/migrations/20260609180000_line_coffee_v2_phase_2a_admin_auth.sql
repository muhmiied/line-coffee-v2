-- Line Coffee V2 Phase 2A admin auth, roles, and permissions foundation.
-- Scope: database migration only. No app/UI code, no public RLS policies.

create table public.admin_roles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text not null unique,
  description text,
  is_system_role boolean not null default false,
  is_protected boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint admin_roles_code_not_blank_check check (length(btrim(code)) > 0)
);

create trigger set_admin_roles_updated_at
before update on public.admin_roles
for each row execute function public.set_updated_at();

create table public.admin_permissions (
  id uuid primary key default gen_random_uuid(),
  module text not null,
  action text not null,
  code text not null unique,
  description text,
  created_at timestamptz not null default now(),
  constraint admin_permissions_not_blank_check check (
    length(btrim(module)) > 0
    and length(btrim(action)) > 0
    and length(btrim(code)) > 0
  )
);

create table public.admin_role_permissions (
  id uuid primary key default gen_random_uuid(),
  role_id uuid not null references public.admin_roles(id) on delete cascade,
  permission_id uuid not null references public.admin_permissions(id) on delete cascade,
  created_at timestamptz not null default now(),
  constraint admin_role_permissions_unique unique (role_id, permission_id)
);

create index admin_role_permissions_permission_id_idx
on public.admin_role_permissions (permission_id);

create table public.admin_users (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid not null references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  role_id uuid not null references public.admin_roles(id) on delete restrict,
  status text not null default 'active',
  avatar_url text,
  last_login_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint admin_users_auth_user_id_unique unique (auth_user_id),
  constraint admin_users_status_check check (status in ('active', 'inactive', 'blocked'))
);

create unique index admin_users_email_unique
on public.admin_users (lower(email));

create index admin_users_role_id_idx
on public.admin_users (role_id);

create trigger set_admin_users_updated_at
before update on public.admin_users
for each row execute function public.set_updated_at();

create or replace function public.prevent_delete_protected_admin_role()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if old.is_protected is true then
    raise exception 'Protected admin role cannot be deleted: %', old.code
      using errcode = 'check_violation';
  end if;

  return old;
end;
$$;

create trigger prevent_delete_protected_admin_role
before delete on public.admin_roles
for each row execute function public.prevent_delete_protected_admin_role();

create or replace function public.prevent_admin_user_protected_role_change()
returns trigger
language plpgsql
set search_path = public
as $$
declare
  old_role_is_protected boolean;
begin
  if new.role_id is distinct from old.role_id then
    select is_protected
      into old_role_is_protected
    from public.admin_roles
    where id = old.role_id;

    if coalesce(old_role_is_protected, false) then
      raise exception 'Admin user cannot be moved away from a protected role'
        using errcode = 'check_violation';
    end if;
  end if;

  return new;
end;
$$;

create trigger prevent_admin_user_protected_role_change
before update on public.admin_users
for each row execute function public.prevent_admin_user_protected_role_change();

alter table public.admin_roles enable row level security;
alter table public.admin_permissions enable row level security;
alter table public.admin_role_permissions enable row level security;
alter table public.admin_users enable row level security;

insert into public.admin_roles (
  code,
  name,
  description,
  is_system_role,
  is_protected
) values
  (
    'primary_owner',
    'Primary Owner',
    'Highest-protection owner role for the main Line Coffee admin account.',
    true,
    true
  ),
  (
    'owner',
    'Owner',
    'Business owner role with full operational permissions.',
    true,
    false
  ),
  (
    'admin',
    'Admin',
    'General administrator role for daily dashboard operations.',
    true,
    false
  ),
  (
    'staff',
    'Staff',
    'Limited staff role for basic read-only operational access.',
    true,
    false
  );

insert into public.admin_permissions (
  module,
  action,
  code,
  description
) values
  ('orders', 'view', 'orders.view', 'View orders'),
  ('orders', 'update', 'orders.update', 'Update orders'),
  ('orders', 'cancel', 'orders.cancel', 'Cancel orders'),
  ('products', 'view', 'products.view', 'View products'),
  ('products', 'create', 'products.create', 'Create products'),
  ('products', 'update', 'products.update', 'Update products'),
  ('products', 'archive', 'products.archive', 'Archive products'),
  ('categories', 'manage', 'categories.manage', 'Manage categories'),
  ('inventory', 'view', 'inventory.view', 'View inventory'),
  ('inventory', 'adjust', 'inventory.adjust', 'Adjust inventory'),
  ('recipes', 'manage', 'recipes.manage', 'Manage recipes'),
  ('suppliers', 'manage', 'suppliers.manage', 'Manage suppliers'),
  ('purchases', 'manage', 'purchases.manage', 'Manage purchases'),
  ('customers', 'view', 'customers.view', 'View customers'),
  ('customers', 'manage', 'customers.manage', 'Manage customers'),
  ('reviews', 'manage', 'reviews.manage', 'Manage reviews'),
  ('discounts', 'manage', 'discounts.manage', 'Manage discounts'),
  ('loyalty', 'manage', 'loyalty.manage', 'Manage loyalty'),
  ('blog', 'manage', 'blog.manage', 'Manage blog'),
  ('media', 'manage', 'media.manage', 'Manage media'),
  ('settings', 'view', 'settings.view', 'View settings'),
  ('settings', 'update', 'settings.update', 'Update settings'),
  ('users', 'manage', 'users.manage', 'Manage admin users'),
  ('roles', 'manage', 'roles.manage', 'Manage roles and permissions'),
  ('audit', 'view', 'audit.view', 'View audit logs');

insert into public.admin_role_permissions (role_id, permission_id)
select admin_roles.id, admin_permissions.id
from public.admin_roles
cross join public.admin_permissions
where admin_roles.code in ('primary_owner', 'owner');

insert into public.admin_role_permissions (role_id, permission_id)
select admin_roles.id, admin_permissions.id
from public.admin_roles
cross join public.admin_permissions
where admin_roles.code = 'admin'
  and admin_permissions.code not in ('users.manage', 'roles.manage');

insert into public.admin_role_permissions (role_id, permission_id)
select admin_roles.id, admin_permissions.id
from public.admin_roles
cross join public.admin_permissions
where admin_roles.code = 'staff'
  and admin_permissions.code in (
    'orders.view',
    'products.view',
    'inventory.view',
    'customers.view',
    'settings.view'
  );
