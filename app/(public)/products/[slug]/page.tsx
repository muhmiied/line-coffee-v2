import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getPublicProductBySlug } from '@/lib/db/products'

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = await getPublicProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-6">
        <Link
          href="/products"
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
        >
          ← All Products
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          {product.name_en}
        </h1>
        {product.name_ar && (
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mt-1">
            {product.name_ar}
          </p>
        )}
      </div>

      {(product.description_en || product.description_ar) && (
        <div className="mb-10 space-y-2">
          {product.description_en && (
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-prose">
              {product.description_en}
            </p>
          )}
          {product.description_ar && (
            <p
              className="text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-prose"
              dir="rtl"
            >
              {product.description_ar}
            </p>
          )}
        </div>
      )}

      {product.variants.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-4">
            Variants
          </h2>
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
            {product.variants.map((variant) => (
              <li
                key={variant.id}
                className="flex items-center justify-between px-5 py-4 bg-white dark:bg-zinc-900"
              >
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {variant.weight_value !== null && variant.weight_unit
                      ? `${variant.weight_value}${variant.weight_unit}`
                      : variant.variant_name}
                  </p>
                  {variant.weight_value !== null && variant.weight_unit && (
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {variant.variant_name}
                    </p>
                  )}
                </div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {variant.sale_price.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
