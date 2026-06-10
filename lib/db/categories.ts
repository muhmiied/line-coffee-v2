import 'server-only'

import { createClient } from '@/lib/supabase/server'

import type { PublicCategory } from './types'

const PUBLIC_CATEGORY_SELECT = `
  id,
  slug,
  name_en,
  name_ar,
  description_en,
  description_ar,
  sort_order,
  website_visibility,
  system_status
`

function logCategoryError(functionName: string, message: string) {
  console.error(`[db/categories] ${functionName}: ${message}`)
}

export async function getPublicCategories(): Promise<PublicCategory[]> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('categories')
    .select(PUBLIC_CATEGORY_SELECT)
    .eq('system_status', 'active')
    .eq('website_visibility', 'visible')
    .is('deleted_at', null)
    .order('sort_order', { ascending: true })
    .returns<PublicCategory[]>()

  if (error) {
    logCategoryError('getPublicCategories', error.message)
    return []
  }

  return data ?? []
}

export async function getPublicCategoryBySlug(
  slug: string
): Promise<PublicCategory | null> {
  const normalizedSlug = slug.trim()

  if (!normalizedSlug) {
    return null
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .from('categories')
    .select(PUBLIC_CATEGORY_SELECT)
    .eq('slug', normalizedSlug)
    .eq('system_status', 'active')
    .eq('website_visibility', 'visible')
    .is('deleted_at', null)
    .order('sort_order', { ascending: true })
    .limit(1)
    .returns<PublicCategory[]>()

  if (error) {
    logCategoryError('getPublicCategoryBySlug', error.message)
    return null
  }

  return data?.[0] ?? null
}
