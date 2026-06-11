'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import LcButton from '@/components/ui/lc-button'

type HomeHeroProps = {
  productImageUrl?: string | null
  productImageAlt?: string | null
}

type HeroSlide = {
  id: number
  eyebrow: string
  heading: string[]
  subheading: string
  cta: { primary: { text: string; href: string }; secondary: { text: string; href: string } }
  stats: { value: string; label: string }[]
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrow: 'SIGNATURE ROASTS',
    heading: ['Coffee', 'Crafted for', 'Quiet Luxury'],
    subheading: 'Selected beans, slow-roasted for depth, warmth, and a finish that lingers beautifully.',
    cta: {
      primary: { text: 'Shop Coffee', href: '/products' },
      secondary: { text: 'Our Story', href: '/about' },
    },
    stats: [
      { value: '4+', label: 'ORIGINS CURATED' },
      { value: '96h', label: 'FRESH ROAST WINDOW' },
      { value: '27%', label: 'ARABICA FOCUS' },
    ],
  },
  {
    id: 2,
    eyebrow: 'HOUSE BLENDS',
    heading: ['A Blend', 'With a Softer', 'Signature'],
    subheading: 'Balanced profiles for espresso, filter, and slow mornings at home.',
    cta: {
      primary: { text: 'Explore Blends', href: '/products?category=blends' },
      secondary: { text: 'Our Story', href: '/about' },
    },
    stats: [
      { value: '8', label: 'TASTE PROFILES' },
      { value: '3', label: 'ROAST LEVELS' },
      { value: '24K+', label: 'CUPS SERVED' },
    ],
  },
  {
    id: 3,
    eyebrow: 'FRESH DELIVERY',
    heading: ['Roasted Fresh,', 'Arriving', 'With Care'],
    subheading: 'From our roaster to your door, packed to preserve aroma and comfort.',
    cta: {
      primary: { text: 'Order Now', href: '/products' },
      secondary: { text: 'Our Story', href: '/about' },
    },
    stats: [
      { value: '24h', label: 'EXPRESS DELIVERY' },
      { value: '7d', label: 'PEAK FRESHNESS' },
      { value: '2', label: 'LANGUAGES' },
    ],
  },
  {
    id: 4,
    eyebrow: 'FAMILY LEGACY',
    heading: ['Since 2015,', 'The Art of', 'Coffee'],
    subheading: 'A family coffee experience built through years of supplying cafes, businesses, and homes.',
    cta: {
      primary: { text: 'Shop Coffee', href: '/products' },
      secondary: { text: 'Our Story', href: '/about' },
    },
    stats: [
      { value: '28+', label: 'YEARS EXPERIENCE' },
      { value: '100%', label: 'ARABICA BEANS' },
      { value: '2015', label: 'FAMILY BUSINESS' },
    ],
  },
]

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

export default function HomeHero({ productImageUrl, productImageAlt }: HomeHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(goToNext, 5500)
    return () => clearInterval(interval)
  }, [isAutoPlay, goToNext])

  const slide = HERO_SLIDES[currentSlide]

  return (
    <section className="relative flex min-h-[92svh] flex-col overflow-hidden bg-[#0B0806]">
      {/* Full-bleed background */}
      <div className="absolute inset-0" aria-hidden="true">
        {productImageUrl ? (
          <Image
            src={productImageUrl}
            alt=""
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
        ) : (
          /* Coffee beans texture background */
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22400%22%3E%3Crect%20width%3D%22400%22%20height%3D%22400%22%20fill%3D%22%230B0806%22%2F%3E%3C%2Fsvg%3E')]" />
        )}
        {/* Dark overlay layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0806]/95 via-[#0B0806]/70 to-[#0B0806]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0806]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_30%,rgba(214,163,115,0.22),transparent_38rem)]" />
      </div>

      {/* Coffee beans image right side */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[55%] overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(101,55,16,0.55),transparent_50rem),linear-gradient(160deg,rgba(18,9,4,0.18),rgba(11,8,6,0.04)_44%,transparent)]" />
        {/* Decorative coffee-toned shapes */}
        <div className="absolute right-12 top-16 h-72 w-72 rounded-full bg-[#3D1F08]/38 blur-[80px]" />
        <div className="absolute right-32 top-8 h-56 w-56 rounded-full bg-[#6B3810]/28 blur-[60px]" />
        <div className="absolute bottom-32 right-4 h-80 w-80 rounded-full bg-[#522500]/22 blur-[100px]" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-20 pt-16 sm:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            key={`eyebrow-${slide.id}`}
            className="mb-6 text-xs font-semibold tracking-[0.22em] text-[#B6885E] transition-all duration-500"
          >
            {slide.eyebrow}
          </p>

          {/* Large heading */}
          <h1
            key={`heading-${slide.id}`}
            className="font-heading text-[clamp(3.2rem,8vw,6.5rem)] font-semibold leading-[0.96] tracking-[-0.01em] text-[#F5E6D8] transition-all duration-500"
          >
            {slide.heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            key={`sub-${slide.id}`}
            className="mt-6 max-w-lg text-base leading-7 text-[#D6B79A]/72 transition-all duration-500 sm:text-lg"
          >
            {slide.subheading}
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <LcButton href={slide.cta.primary.href} variant="primary" size="lg">
              {slide.cta.primary.text}
            </LcButton>
            <LcButton href={slide.cta.secondary.href} variant="glass" size="lg">
              {slide.cta.secondary.text}
            </LcButton>
          </div>
        </div>

        {/* Stats row */}
        <div
          key={`stats-${slide.id}`}
          className="mt-14 flex flex-wrap items-start gap-8 sm:gap-14"
        >
          {slide.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p className="font-heading text-2xl font-semibold text-[#F5E6D8] sm:text-3xl">
                {stat.value}
              </p>
              <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#B6885E]/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide controls — bottom */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 sm:px-8">
        {/* Arrow buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => { goToPrev(); setIsAutoPlay(false) }}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B6885E]/30 text-[#F5E6D8]/60 transition-all hover:border-[#D6A373]/60 hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => { goToNext(); setIsAutoPlay(false) }}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B6885E]/30 text-[#F5E6D8]/60 transition-all hover:border-[#D6A373]/60 hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]"
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentSlide}
              onClick={() => { setCurrentSlide(index); setIsAutoPlay(false) }}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'h-2 w-7 bg-[#B6885E]'
                  : 'h-2 w-2 bg-[#B6885E]/35 hover:bg-[#B6885E]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0806] to-transparent" aria-hidden="true" />
    </section>
  )
}
