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

type AdminUserRow = Omit<AdminUser, 'role'>

type SupabaseQueryError = {
  code?: string
  message?: string
  details?: string | null
  hint?: string | null
}

function buildSanitizedLookupError(
  fallbackMessage: string,
  error: SupabaseQueryError
) {
  const parts = [
    fallbackMessage,
    error.code ? `code=${error.code}` : null,
    error.message ? `message=${error.message}` : null,
    error.details ? `details=${error.details}` : null,
    error.hint ? `hint=${error.hint}` : null,
  ].filter(Boolean)

  return new Error(parts.join(' | '))
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
      'id, auth_user_id, full_name, email, phone, role_id, status, avatar_url, last_login_at, created_at, updated_at'
    )
    .eq('auth_user_id', authUserId)
    .maybeSingle()

  if (error) {
    throw buildSanitizedLookupError('Unable to load admin user.', error)
  }

  if (!data) {
    return null
  }

  const row = data as AdminUserRow

  if (row.status !== 'active') {
    return null
  }

  const { data: roleData, error: roleError } = await supabase
    .from('admin_roles')
    .select('id, name, code, is_system_role, is_protected')
    .eq('id', row.role_id)
    .maybeSingle()

  if (roleError) {
    throw buildSanitizedLookupError('Unable to load admin role.', roleError)
  }

  if (!roleData) {
    return null
  }

  const role = roleData as AdminRole

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
