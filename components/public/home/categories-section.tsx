import type { PublicCategory } from '@/lib/db/types'
import { getPublicCategories } from '@/lib/db/categories'
import { CategoriesSectionClient } from './categories-section-client'

export async function CategoriesSection() {
  let categories: PublicCategory[] = []
  try {
    categories = await getPublicCategories()
  } catch {
    categories = []
  }
  return <CategoriesSectionClient categories={categories} />
}
