import LcButton from '@/components/ui/lc-button'
import LcProductCard from '@/components/ui/lc-product-card'
import { PRODUCTS } from '@/lib/data'

export default function HomeFeaturedProducts() {
  return (
    <section className="relative overflow-hidden bg-[#0B0806] px-6 py-20 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#522500]/14 blur-[160px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="lc-premium-kicker mb-2 text-[0.65rem] font-semibold">CUSTOMER FAVORITES</p>
            <h2 className="font-heading text-3xl font-bold text-[#F5E6D8] md:text-4xl">Best Sellers</h2>
            <p className="mt-2 text-sm text-[#D6B79A]/64">Customer favorites from Line Coffee.</p>
          </div>
          <LcButton href="/products" variant="outline" size="sm" className="hidden shrink-0 sm:inline-flex">View All →</LcButton>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {PRODUCTS.map((product) => (
            <LcProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              description={product.description}
              image={product.image}
              imageAlt={product.name}
              categoryName={product.category}
              price={product.price}
              oldPrice={product.oldPrice}
              badge={product.badge}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <LcButton href="/products" variant="outline" size="md">View All Products</LcButton>
        </div>
      </div>
    </section>
  )
}
