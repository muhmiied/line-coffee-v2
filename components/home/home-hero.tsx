'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import LcButton from '@/components/ui/lc-button'

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
    cta: { primary: { text: 'Shop Coffee', href: '/products' }, secondary: { text: 'Our Story', href: '/about' } },
    stats: [
      { value: '4+', label: 'ORIGINS CURATED' },
      { value: '96h', label: 'FRESH ROAST WINDOW' },
      { value: '100%', label: 'ARABICA FOCUS' },
    ],
  },
  {
    id: 2,
    eyebrow: 'HOUSE BLENDS',
    heading: ['A Blend', 'With a Softer', 'Signature'],
    subheading: 'Balanced profiles for espresso, filter, and slow mornings at home.',
    cta: { primary: { text: 'Explore Blends', href: '/products' }, secondary: { text: 'Our Story', href: '/about' } },
    stats: [
      { value: '8', label: 'TASTE PROFILES' },
      { value: '3', label: 'ROAST LEVELS' },
      { value: '24K+', label: 'CUPS SERVED' },
    ],
  },
  {
    id: 3,
    eyebrow: 'FAMILY LEGACY',
    heading: ['Since 2015,', 'The Art of', 'Coffee'],
    subheading: 'A family coffee experience built through years of supplying cafes, businesses, and homes.',
    cta: { primary: { text: 'Shop Coffee', href: '/products' }, secondary: { text: 'Our Story', href: '/about' } },
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

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const goToNext = useCallback(() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length), [])
  const goToPrev = useCallback(() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length), [])

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(goToNext, 5500)
    return () => clearInterval(interval)
  }, [isAutoPlay, goToNext])

  const slide = HERO_SLIDES[currentSlide]

  return (
    <section className="relative flex min-h-[92svh] flex-col overflow-hidden bg-[#0B0806]">
      {/* Full-bleed background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/images/hero-coffee.png" alt="" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0806] via-[#0B0806]/82 to-[#0B0806]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0806]/60 via-transparent to-[#0B0806]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_34%,rgba(214,163,115,0.20),transparent_40rem)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-20 pt-16 sm:px-8">
        <div className="max-w-3xl">
          <div key={`eyebrow-${slide.id}`} className="lc-reveal mb-6 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B6885E]" />
            <p className="text-xs font-semibold tracking-[0.24em] text-[#D6A373]">{slide.eyebrow}</p>
          </div>

          <h1 key={`heading-${slide.id}`} className="lc-reveal font-heading text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.01em] text-[#F5E6D8]">
            {slide.heading.map((line, i) => (
              <span key={i} className={`block ${i === slide.heading.length - 1 ? 'lc-heading-shimmer' : ''}`}>{line}</span>
            ))}
          </h1>

          <p key={`sub-${slide.id}`} className="lc-reveal mt-6 max-w-lg text-base leading-7 text-[#D6B79A]/75 sm:text-lg">{slide.subheading}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <LcButton href={slide.cta.primary.href} variant="primary" size="lg">{slide.cta.primary.text}</LcButton>
            <LcButton href={slide.cta.secondary.href} variant="glass" size="lg">{slide.cta.secondary.text}</LcButton>
          </div>
        </div>

        <div key={`stats-${slide.id}`} className="lc-reveal mt-14 flex flex-wrap items-start gap-8 sm:gap-14">
          {slide.stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p className="font-heading text-3xl font-bold text-[#F5E6D8] sm:text-4xl">{stat.value}</p>
              <p className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#B6885E]/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 sm:px-8">
        <div className="flex items-center gap-3">
          <button type="button" onClick={() => { goToPrev(); setIsAutoPlay(false) }} aria-label="Previous slide" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/30 text-[#F5E6D8]/60 transition-all hover:border-[#D6A373]/60 hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]">
            <ArrowLeftIcon />
          </button>
          <button type="button" onClick={() => { goToNext(); setIsAutoPlay(false) }} aria-label="Next slide" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/30 text-[#F5E6D8]/60 transition-all hover:border-[#D6A373]/60 hover:bg-[#FFDCC2]/8 hover:text-[#FFDCC2]">
            <ArrowRightIcon />
          </button>
        </div>

        <div className="flex items-center gap-2" role="tablist" aria-label="Slide indicators">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              role="tab"
              aria-selected={index === currentSlide}
              onClick={() => { setCurrentSlide(index); setIsAutoPlay(false) }}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-7 bg-[#D6A373]' : 'w-2 bg-[#B6885E]/35 hover:bg-[#B6885E]/60'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0806] to-transparent" aria-hidden="true" />
    </section>
  )
}
