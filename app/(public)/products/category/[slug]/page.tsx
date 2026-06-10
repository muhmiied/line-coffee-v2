import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPublicCategoryBySlug } from '@/lib/db/categories'
import { getPublicProductsByCategorySlug } from '@/lib/db/products'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const category = await getPublicCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const products = await getPublicProductsByCategorySlug(slug)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-2">
        <Link
          href="/products"
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          ← All Products
        </Link>
      </div>

      <div className="mb-8 mt-4">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          {category.name_en}
        </h1>
        {category.name_ar && (
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mt-1">
            {category.name_ar}
          </p>
        )}
        {category.description_en && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 max-w-prose">
            {category.description_en}
          </p>
        )}
      </div>

      {products.length === 0 ? (
        <p className="text-zinc-500">No products in this category.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
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
