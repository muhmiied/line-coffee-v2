import 'server-only'

import { createAdminClient } from '@/lib/supabase/admin'

export type AdminRole = {
  id: string
  name: string
  code: string
  is_system_role: boolean
  is_protected: boolean
}

export type AdminUser = {
  id: string
  auth_user_id: string
  full_name: string
  email: string
  phone: string | null
  role_id: string
  status: 'active' | 'inactive' | 'blocked'
  avatar_url: string | null
  last_login_at: string | null
  created_at: string
  updated_at: string
  role: AdminRole
}

type AdminUserRow = Omit<AdminUser, 'role'> & {
  admin_roles: AdminRole | AdminRole[] | null
}

function normalizeRole(role: AdminUserRow['admin_roles']) {
  return Array.isArray(role) ? role[0] ?? null : role
}

export async function getAdminUser(
  authUserId: string
): Promise<AdminUser | null> {
  if (!authUserId) {
    return null
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('admin_users')
    .select(
      `
        id,
        auth_user_id,
        full_name,
        email,
        phone,
        role_id,
        status,
        avatar_url,
        last_login_at,
        created_at,
        updated_at,
        admin_roles (
          id,
          name,
          code,
          is_system_role,
          is_protected
        )
      `
    )
    .eq('auth_user_id', authUserId)
    .maybeSingle()

  if (error) {
    throw new Error('Unable to load admin user.')
  }

  if (!data) {
    return null
  }

  const row = data as AdminUserRow
  const role = normalizeRole(row.admin_roles)

  if (row.status !== 'active' || !role) {
    return null
  }

  return {
    id: row.id,
    auth_user_id: row.auth_user_id,
    full_name: row.full_name,
    email: row.email,
    phone: row.phone,
    role_id: row.role_id,
    status: row.status,
    avatar_url: row.avatar_url,
    last_login_at: row.last_login_at,
    created_at: row.created_at,
    updated_at: row.updated_at,
    role,
  }
}
