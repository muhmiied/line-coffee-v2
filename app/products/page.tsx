import Link from 'next/link'

import { getPublicCategories } from '@/lib/db/categories'
import { getPublicProducts } from '@/lib/db/products'
import type { PublicCategory } from '@/lib/db/types'

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getPublicCategories(),
    getPublicProducts(),
  ])

  const categoryById = new Map<string, PublicCategory>(
    categories.map((c) => [c.id, c])
  )

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Products
        </h1>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mt-1">منتجاتنا</p>
      </div>

      {categories.length > 0 && (
        <nav className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.slug}`}
              className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {category.name_en}
              {category.name_ar && (
                <span className="mr-1 text-zinc-400"> / {category.name_ar}</span>
              )}
            </Link>
          ))}
        </nav>
      )}

      {products.length === 0 ? (
        <p className="text-zinc-500">No products available.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const category = product.category_id
              ? categoryById.get(product.category_id)
              : undefined
            const defaultVariant =
              product.variants.find((v) => v.is_default) ?? product.variants[0]

            return (
              <li key={product.id}>
                <Link
                  href={`/products/${product.slug}`}
                  className="block h-full rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                >
                  <p className="text-base font-medium text-zinc-900 dark:text-zinc-100">
                    {product.name_en}
                  </p>
                  {product.name_ar && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {product.name_ar}
                    </p>
                  )}

                  {category && (
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
                      {category.name_en}
                    </p>
                  )}

                  {defaultVariant && (
                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-3">
                      {defaultVariant.sale_price.toFixed(2)}
                    </p>
                  )}

                  {product.variants.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {product.variants.map((v) => (
                        <span
                          key={v.id}
                          className="px-2 py-0.5 text-xs rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {v.weight_value !== null && v.weight_unit
                            ? `${v.weight_value}${v.weight_unit}`
                            : v.variant_name}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
