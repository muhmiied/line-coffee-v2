import 'server-only'

import { redirect } from 'next/navigation'

import { checkPermission } from '@/lib/auth/check-permission'
import { getAdminUser } from '@/lib/auth/get-admin-user'
import type { AdminUser } from '@/lib/auth/get-admin-user'
import { createClient } from '@/lib/supabase/server'

export async function requireAdmin(): Promise<AdminUser> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/dashboard/login')
  }

  const adminUser = await getAdminUser(user.id)

  if (!adminUser) {
    redirect('/dashboard/login?error=unauthorized')
  }

  return adminUser
}

export async function requireAdminPermission(
  permissionCode: string
): Promise<AdminUser> {
  const adminUser = await requireAdmin()
  const isAllowed = await checkPermission(adminUser, permissionCode)

  if (!isAllowed) {
    throw new Error('Unauthorized admin permission.')
  }

  return adminUser
}
