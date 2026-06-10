import 'server-only'

import { createClient } from '@/lib/supabase/server'

import { getPublicCategoryBySlug } from './categories'
import type {
  ProductWithVariants,
  PublicProduct,
  PublicProductVariant,
} from './types'

const PUBLIC_PRODUCT_SELECT = `
  id,
  category_id,
  slug,
  name_en,
  name_ar,
  short_description_en,
  short_description_ar,
  full_description_en,
  full_description_ar,
  product_type,
  sort_order,
  website_visibility,
  system_status
`

const PUBLIC_VARIANT_SELECT = `
  id,
  product_id,
  variant_name,
  weight_value,
  weight_unit,
  sale_price,
  is_default,
  sort_order,
  website_visibility,
  system_status
`

type PublicProductRow = Omit<PublicProduct, 'description_en' | 'description_ar'> & {
  short_description_en: string | null
  short_description_ar: string | null
  full_description_en: string | null
  full_description_ar: string | null
}

function logProductError(functionName: string, message: string) {
  console.error(`[db/products] ${functionName}: ${message}`)
}

function mapProduct(row: PublicProductRow): PublicProduct {
  return {
    id: row.id,
    category_id: row.category_id,
    slug: row.slug,
    name_en: row.name_en,
    name_ar: row.name_ar,
    description_en: row.full_description_en ?? row.short_description_en,
    description_ar: row.full_description_ar ?? row.short_description_ar,
    product_type: row.product_type,
    sort_order: row.sort_order,
    website_visibility: row.website_visibility,
    system_status: row.system_status,
  }
}

function attachVariants(
  products: PublicProduct[],
  variants: PublicProductVariant[]
): ProductWithVariants[] {
  const variantsByProductId = new Map<string, PublicProductVariant[]>()

  for (const variant of variants) {
    const productVariants = variantsByProductId.get(variant.product_id) ?? []
    productVariants.push(variant)
    variantsByProductId.set(variant.product_id, productVariants)
  }

  return products.map((product) => ({
    ...product,
    variants: variantsByProductId.get(product.id) ?? [],
  }))
}

async function getVisibleVariantsForProductIds(
  productIds: string[],
  functionName: string
): Promise<PublicProductVariant[] | null> {
  if (productIds.length === 0) {
    return []
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .from('product_variants')
    .select(PUBLIC_VARIANT_SELECT)
    .in('product_id', productIds)
    .eq('system_status', 'active')
    .eq('website_visibility', 'visible')
    .is('deleted_at', null)
    .order('product_id', { ascending: true })
    .order('sort_order', { ascending: true })
    .returns<PublicProductVariant[]>()

  if (error) {
    logProductError(functionName, error.message)
    return null
  }

  return data ?? []
}

async function getProductsWithVariants(
  functionName: string,
  categoryId?: string
): Promise<ProductWithVariants[]> {
  const supabase = await createClient()

  let query = supabase
    .from('products')
    .select(PUBLIC_PRODUCT_SELECT)
    .eq('system_status', 'active')
    .eq('website_visibility', 'visible')
    .is('deleted_at', null)

  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  const { data, error } = await query
    .order('sort_order', { ascending: true })
    .returns<PublicProductRow[]>()

  if (error) {
    logProductError(functionName, error.message)
    return []
  }

  const products = (data ?? []).map(mapProduct)
  const variants = await getVisibleVariantsForProductIds(
    products.map((product) => product.id),
    functionName
  )

  if (!variants) {
    return []
  }

  return attachVariants(products, variants)
}

export async function getPublicProducts(): Promise<ProductWithVariants[]> {
  return getProductsWithVariants('getPublicProducts')
}

export async function getPublicProductsByCategorySlug(
  categorySlug: string
): Promise<ProductWithVariants[]> {
  const category = await getPublicCategoryBySlug(categorySlug)

  if (!category) {
    return []
  }

  return getProductsWithVariants(
    'getPublicProductsByCategorySlug',
    category.id
  )
}

export async function getPublicProductBySlug(
  slug: string
): Promise<ProductWithVariants | null> {
  const normalizedSlug = slug.trim()

  if (!normalizedSlug) {
    return null
  }

  const supabase = await createClient()

  const { data, error } = await supabase
    .from('products')
    .select(PUBLIC_PRODUCT_SELECT)
    .eq('slug', normalizedSlug)
    .eq('system_status', 'active')
    .eq('website_visibility', 'visible')
    .is('deleted_at', null)
    .order('sort_order', { ascending: true })
    .limit(1)
    .returns<PublicProductRow[]>()

  if (error) {
    logProductError('getPublicProductBySlug', error.message)
    return null
  }

  const productRow = data?.[0]

  if (!productRow) {
    return null
  }

  const product = mapProduct(productRow)
  const variants = await getVisibleVariantsForProductIds(
    [product.id],
    'getPublicProductBySlug'
  )

  if (!variants) {
    return null
  }

  return {
    ...product,
    variants,
  }
}
