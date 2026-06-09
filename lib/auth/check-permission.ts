import 'server-only'

import { createAdminClient } from '@/lib/supabase/admin'
import type { AdminUser } from '@/lib/auth/get-admin-user'

export async function checkPermission(
  adminUser: AdminUser,
  permissionCode: string
): Promise<boolean> {
  if (!permissionCode || !adminUser.role_id) {
    return false
  }

  if (adminUser.role.code === 'primary_owner') {
    return true
  }

  const supabase = createAdminClient()
  const { data, error } = await supabase
    .from('admin_role_permissions')
    .select(
      `
        permission_id,
        admin_permissions!inner (
          code
        )
      `
    )
    .eq('role_id', adminUser.role_id)
    .eq('admin_permissions.code', permissionCode)
    .limit(1)

  if (error) {
    throw new Error('Unable to check admin permission.')
  }

  return Array.isArray(data) && data.length > 0
}
