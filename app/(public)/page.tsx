import { getPublicCategories } from '@/lib/db/categories'
import { getPublicProducts } from '@/lib/db/products'

import HomeHero from '@/components/public/home/home-hero'
import HomeCategories from '@/components/public/home/home-categories'
import HomeFeaturedProducts from '@/components/public/home/home-featured-products'
import HomeFeatures from '@/components/public/home/home-features'
import HomeStory from '@/components/public/home/home-story'
import HomeContactCta from '@/components/public/home/home-contact-cta'

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getPublicCategories(),
    getPublicProducts(),
  ])

  const featuredProducts = products.slice(0, 6)
  const heroProduct = products.find((product) => product.image_url)

  return (
    <main className="lc-coffee-canvas relative isolate flex flex-col overflow-hidden bg-[#0B0806]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-8%,rgba(214,163,115,0.13),transparent_36rem),radial-gradient(circle_at_8%_28%,rgba(82,37,0,0.24),transparent_32rem),radial-gradient(circle_at_92%_56%,rgba(182,136,94,0.10),transparent_34rem)]"
        aria-hidden="true"
      />
      <HomeHero
        productImageUrl={heroProduct?.image_url ?? null}
        productImageAlt={
          heroProduct?.image_alt_en ?? heroProduct?.name_en ?? 'Line Coffee product'
        }
      />
      <HomeCategories categories={categories} />
      <HomeFeaturedProducts products={featuredProducts} />
      <HomeFeatures />
      <HomeStory />
      <HomeContactCta />
    </main>
  )
}
