import type { Metadata } from 'next'
import { HeroSection }            from '@/components/public/home/hero-section'
import { TrustStrip }             from '@/components/public/home/trust-strip'
import { CategoriesSection }      from '@/components/public/home/categories-section'
import { BestSellersSection }     from '@/components/public/home/best-sellers-section'
import { MakeYourProductSection } from '@/components/public/home/make-your-product-section'
import { StorySection }           from '@/components/public/home/story-section'
import { ContactCTASection }      from '@/components/public/home/contact-cta-section'

export const metadata: Metadata = {
  title: 'Line Coffee — قهوة بريميوم مصنوعة بشغف',
  description:
    'خلطات قهوة فاخرة محمّصة طازجاً ومصنوعة بعناية، لتصنع كوبك المثالي في كل يوم.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <CategoriesSection />
      <BestSellersSection />
      <MakeYourProductSection />
      <StorySection />
      <ContactCTASection />
    </>
  )
}
