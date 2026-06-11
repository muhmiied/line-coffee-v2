"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { LcButton } from "@/components/ui/lc-button"
import { stats } from "@/lib/data"

type HeroSlide = {
  id: number
  eyebrow: string
  heading: string[]
  subheading: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "نكهات موقّعة",
    heading: ["قهوة", "صُنعت", "للفخامة الهادئة"],
    subheading:
      "حبوب مختارة، محمّصة ببطء لعمقٍ ودفءٍ ونهايةٍ تبقى في الذاكرة طويلاً.",
  },
  {
    id: 2,
    eyebrow: "خلطات البيت",
    heading: ["خلطةٌ", "بتوقيعٍ", "أكثر نعومة"],
    subheading: "تركيبات متوازنة للإسبريسو والصباحات الهادئة في منزلك.",
  },
  {
    id: 3,
    eyebrow: "إرثٌ عريق",
    heading: ["منذ سنوات،", "فنُّ", "القهوة الأصيلة"],
    subheading:
      "تجربة قهوة عائلية بُنيت عبر سنوات من تقديم الأفضل للمقاهي والبيوت.",
  },
]

export function HomeHero() {
  const [current, setCurrent] = useState(0)
  const [auto, setAuto] = useState(true)

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % HERO_SLIDES.length),
    [],
  )
  const prev = useCallback(
    () => setCurrent((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length),
    [],
  )

  useEffect(() => {
    if (!auto) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [auto, next])

  const slide = HERO_SLIDES[current]

  return (
    <section className="relative flex min-h-[92svh] flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-coffee.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B0806] via-[#0B0806]/82 to-[#0B0806]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0806]/60 via-transparent to-[#0B0806]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_22%_34%,rgba(214,163,115,0.20),transparent_40rem)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-20 pt-16 sm:px-8">
        <div className="max-w-3xl">
          <motion.div
            key={`eyebrow-${slide.id}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="premium-section-kicker">{slide.eyebrow}</span>
          </motion.div>

          <motion.h1
            key={`heading-${slide.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="font-serif text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] text-[#F5E6D8]"
          >
            {slide.heading.map((line, i) => (
              <span
                key={i}
                className={`block ${
                  i === slide.heading.length - 1
                    ? "premium-heading-shimmer"
                    : ""
                }`}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            key={`sub-${slide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#D6B79A] sm:text-lg"
          >
            {slide.subheading}
          </motion.p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <LcButton href="/shop">تسوّق القهوة</LcButton>
            <LcButton href="/about" variant="outline">
              قصتنا
            </LcButton>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 flex flex-wrap items-start gap-8 sm:gap-14">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p className="font-serif text-3xl font-bold text-[#F5E6D8] sm:text-4xl">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-xs font-semibold tracking-wider text-[#B6885E]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 sm:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              prev()
              setAuto(false)
            }}
            aria-label="الشريحة السابقة"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/30 text-[#F5E6D8]/60 transition-all hover:border-[#D6A373]/60 hover:text-[#D6A373]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => {
              next()
              setAuto(false)
            }}
            aria-label="الشريحة التالية"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B6885E]/30 text-[#F5E6D8]/60 transition-all hover:border-[#D6A373]/60 hover:text-[#D6A373]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index)
                setAuto(false)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-7 bg-[#D6A373]"
                  : "w-2 bg-[#B6885E]/35 hover:bg-[#B6885E]/60"
              }`}
              aria-label={`اذهب إلى الشريحة ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
