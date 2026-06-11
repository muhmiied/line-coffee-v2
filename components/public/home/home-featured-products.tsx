import LcButton from '@/components/ui/lc-button'
import LcProductCard from '@/components/ui/lc-product-card'
import type { ProductWithVariants } from '@/lib/db/types'

type Props = {
  products: ProductWithVariants[]
}

export default function HomeFeaturedProducts({ products }: Props) {
  if (products.length === 0) {
    return (
      <section className="relative overflow-hidden bg-[#0B0806] px-6 py-20 sm:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.22em] text-[#B6885E]/75 uppercase">
                CUSTOMER FAVORITES
              </p>
              <h2 className="font-heading text-3xl font-semibold text-[#F5E6D8] md:text-4xl">
                Best Sellers
              </h2>
              <p className="mt-2 text-sm text-[#D6B79A]/64">
                Customer favorites from Line Coffee.
              </p>
            </div>
            <LcButton href="/products" variant="outline" size="sm" className="hidden shrink-0 sm:inline-flex">
              View All →
            </LcButton>
          </div>

          <div className="mt-10 flex items-center justify-center py-16 text-[#D6B79A]/40">
            <p className="text-sm">Products coming soon</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-[#0B0806] px-6 py-20 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#522500]/14 blur-[160px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[0.65rem] font-semibold tracking-[0.22em] text-[#B6885E]/75 uppercase">
              CUSTOMER FAVORITES
            </p>
            <h2 className="font-heading text-3xl font-semibold text-[#F5E6D8] md:text-4xl">
              Best Sellers
            </h2>
            <p className="mt-2 text-sm text-[#D6B79A]/64">
              Customer favorites from Line Coffee.
            </p>
          </div>
          <LcButton
            href="/products"
            variant="outline"
            size="sm"
            className="hidden shrink-0 sm:inline-flex"
          >
            View All →
          </LcButton>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
          {products.slice(0, 4).map((product) => {
            const defaultVariant =
              product.variants.find((v) => v.is_default) ?? product.variants[0]

            return (
              <LcProductCard
                key={product.id}
                slug={product.slug}
                name={product.name_en}
                description={product.description_en}
                imageUrl={product.image_url}
                imageAlt={product.image_alt_en ?? undefined}
                price={
                  defaultVariant
                    ? defaultVariant.sale_price.toFixed(2)
                    : null
                }
              />
            )
          })}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 flex justify-center sm:hidden">
          <LcButton href="/products" variant="outline" size="sm">
            View All Products
          </LcButton>
        </div>
      </div>
    </section>
  )
}
