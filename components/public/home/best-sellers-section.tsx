import type { ProductWithVariants } from '@/lib/db/types'
import { getPublicProducts } from '@/lib/db/products'
import { BestSellersSectionClient } from './best-sellers-section-client'

export async function BestSellersSection() {
  let products: ProductWithVariants[] = []
  try {
    const all = await getPublicProducts()
    products = all.slice(0, 4)
  } catch {
    products = []
  }
  return <BestSellersSectionClient products={products} />
}
