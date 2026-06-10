import Link from 'next/link'

import { getPublicCategories } from '@/lib/db/categories'
import { getPublicProducts } from '@/lib/db/products'

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getPublicCategories(),
    getPublicProducts(),
  ])

  const featuredProducts = products.slice(0, 6)

  return (
    <div className="flex flex-col">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-[#0d0a08] px-6 py-24 text-center">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/70">
          Line Coffee
        </p>
        <h1 className="mx-auto max-w-2xl text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
          Fresh coffee blends crafted for every mood.
        </h1>
        <p
          className="mx-auto mt-3 max-w-xl text-2xl font-medium leading-snug text-zinc-400"
          dir="rtl"
        >
          توليفات قهوة طازة معمولة لكل مزاج.
        </p>

        <div className="mx-auto mt-8 max-w-prose space-y-1 text-sm text-zinc-500">
          <p>
            Discover Turkish blends, espresso blends, flavored coffee, coffee
            mix, cappuccino, and hot chocolate.
          </p>
          <p dir="rtl" className="text-zinc-600">
            اختار من توليفات تركي، إسبريسو، قهوة نكهات، كوفي ميكس، كابتشينو،
            وهوت شوكليت.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex h-11 items-center rounded-full bg-amber-500 px-8 text-sm font-semibold text-zinc-900 transition-colors hover:bg-amber-400"
          >
            Products / المنتجات
          </Link>
        </div>
      </section>

      {/* ── Categories ───────────────────────────────────────── */}
      {categories.length > 0 && (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Categories
            </h2>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/products/category/${category.slug}`}
                    className="block rounded-xl border border-zinc-200 dark:border-zinc-800 px-5 py-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {category.name_en}
                    </p>
                    {category.name_ar && (
                      <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-500">
                        {category.name_ar}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Featured Products ────────────────────────────────── */}
      {featuredProducts.length > 0 && (
        <section className="border-t border-zinc-100 dark:border-zinc-800/60 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex items-end justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Featured Products
              </h2>
              <Link
                href="/products"
                className="text-xs text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
              >
                View all →
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => {
                const defaultVariant =
                  product.variants.find((v) => v.is_default) ??
                  product.variants[0]

                return (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="block h-full rounded-xl border border-zinc-200 dark:border-zinc-800 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    >
                      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                        {product.name_en}
                      </p>
                      {product.name_ar && (
                        <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                          {product.name_ar}
                        </p>
                      )}
                      {defaultVariant && (
                        <p className="mt-3 text-sm font-semibold text-amber-600 dark:text-amber-400">
                          {defaultVariant.sale_price.toFixed(2)}
                        </p>
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}
    </div>
  )
}
