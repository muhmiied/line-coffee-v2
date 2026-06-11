import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HomeHero } from "@/components/home/home-hero"
import { HomeFeatures } from "@/components/home/home-features"
import { HomeCategories } from "@/components/home/home-categories"
import { HomeFeaturedProducts } from "@/components/home/home-featured-products"
import { HomeStory } from "@/components/home/home-story"
import { HomeContactCta } from "@/components/home/home-contact-cta"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0B0806]">
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeFeatures />
        <HomeCategories />
        <HomeFeaturedProducts />
        <HomeStory />
        <HomeContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
