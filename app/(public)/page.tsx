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
    <main className="relative isolate flex flex-col overflow-hidden bg-[#0b0603]">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-8%,rgba(255,220,194,0.09),transparent_34rem),radial-gradient(circle_at_8%_28%,rgba(82,37,0,0.22),transparent_30rem),linear-gradient(180deg,#100804_0%,#080300_48%,#120804_100%)]"
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
