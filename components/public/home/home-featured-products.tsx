import LcButton from '@/components/ui/lc-button'
import LcProductCard from '@/components/ui/lc-product-card'
import LcSectionHeading from '@/components/ui/lc-section-heading'
import type { ProductWithVariants } from '@/lib/db/types'

type Props = {
  products: ProductWithVariants[]
}

export default function HomeFeaturedProducts({ products }: Props) {
  if (products.length === 0) return null

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-4">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFDCC2]/14 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-24 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-[#522500]/14 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full bg-[#b6885e]/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <LcSectionHeading
            heading="Featured Products"
            subheading="Selected blends from the current Line Coffee catalog, ready to explore."
          />
          <LcButton
            href="/products"
            variant="outline"
            size="sm"
            className="hidden shrink-0 sm:inline-flex"
          >
            View All
          </LcButton>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
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

        <div className="mt-8 flex justify-center sm:hidden">
          <LcButton href="/products" variant="outline" size="sm">
            View All Products
          </LcButton>
        </div>
      </div>
    </section>
  )
}
