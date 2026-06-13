'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

const E = [0.22, 1, 0.36, 1] as const

/* H1 split into animated word groups */
const LINE_1 = ['لحظتك', 'المثالية']
const LINE_2 = ['في', 'كل', 'كوب']
const GRADIENT_WORD = 'كل'

const STATS = [
  { display: '+15',  label: 'مصدر بن مختار' },
  { display: '72h',  label: 'تحميص طازج'    },
  { display: '100%', label: 'عربيكا'         },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0b0806' }}
    >
      {/* ── Background Image with Ken Burns ── */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        initial={{ scale: 1.07 }}
        animate={{ scale: 1 }}
        transition={{ duration: 24, ease: 'linear' }}
        aria-hidden="true"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ── Cinematic Overlays ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Primary dark overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(7,5,4,0.68)' }}
        />
        {/* Warm gold center glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 45%, rgba(182,136,94,0.09) 0%, transparent 70%)',
          }}
        />
        {/* Deep warm corner — top end */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 85% 15%, rgba(82,37,0,0.32) 0%, transparent 65%)',
          }}
        />
        {/* Dark shadow — bottom start */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 10% 88%, rgba(7,5,4,0.92) 0%, transparent 65%)',
          }}
        />
        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 95% 90% at 50% 50%, transparent 32%, rgba(7,5,4,0.72) 100%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: 'radial-gradient(rgba(214,163,115,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 inset-x-0 h-48"
          style={{ background: 'linear-gradient(0deg, #0b0806 0%, transparent 100%)' }}
        />
        {/* Thin gold top accent */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(182,136,94,0.22), transparent)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: E }}
            className="premium-section-kicker mb-8"
          >
            خلطات قهوة فاخرة
          </motion.div>

          {/* H1 — word-by-word blur reveal */}
          <h1
            className="font-display font-bold leading-[1.05] mb-8"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
              textShadow: '0 4px 48px rgba(0,0,0,0.95)',
            }}
          >
            {/* Line 1 */}
            <span className="block">
              {LINE_1.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.08 + i * 0.13, ease: E }}
                  className="inline-block me-[0.22em] text-lc-cream"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            {/* Line 2 */}
            <span className="block mt-1">
              {LINE_2.map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 0.7, delay: 0.34 + i * 0.13, ease: E }}
                  className={`inline-block me-[0.22em] ${word === GRADIENT_WORD ? 'text-gradient' : 'text-lc-cream'}`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease: E }}
            className="text-lc-cream-muted text-lg sm:text-xl leading-relaxed mb-11 max-w-lg"
          >
            نختار أفضل حبوب البن من أرقى المصادر، ونحمّصها بعناية — لتصنع كوبك المثالي كل يوم.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78, ease: E }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/products"
              className="premium-button px-8 py-3.5 rounded-full text-sm font-semibold"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
              تسوق الآن
            </Link>
            <Link
              href="/about"
              className="premium-button-outline px-8 py-3.5 rounded-full text-sm"
            >
              اكتشف قصتنا
            </Link>
          </motion.div>

          {/* Stats — animated count-up */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.95, ease: E }}
            className="mt-16 flex flex-wrap items-end gap-10"
          >
            <div
              className="hidden sm:block self-stretch w-px shrink-0"
              style={{
                background:
                  'linear-gradient(180deg, transparent, rgba(182,136,94,0.3), transparent)',
              }}
              aria-hidden="true"
            />
            {STATS.map((s) => (
              <CountStat key={s.display} display={s.display} label={s.label} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Breathing scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-9 inset-x-0 flex justify-center"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.3em] uppercase text-lc-cream-dim">
            تمرير
          </span>
          <motion.div
            className="w-px rounded-full"
            style={{ background: 'linear-gradient(180deg, rgba(182,136,94,0.55), transparent)' }}
            animate={{ height: [24, 42, 24] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}

/* ── Animated count-up stat ── */
function CountStat({ display, label }: { display: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const num    = parseInt(display.replace(/\D/g, ''), 10) || 0
  const prefix = /^\D+/.exec(display)?.[0] ?? ''
  const suffix = /\D+$/.exec(display)?.[0] ?? ''

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || !num) return
    const controls = animate(0, num, {
      duration: 2.2,
      delay: 0.6,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return () => controls.stop()
  }, [isInView, num])

  return (
    <div ref={ref} className="flex flex-col">
      <span
        className="font-display text-2xl sm:text-3xl font-bold leading-none"
        style={{ color: '#d6a373' }}
      >
        {prefix}
        {num > 0 ? count : display}
        {suffix}
      </span>
      <span className="text-lc-cream-dim text-xs mt-1 tracking-wide">{label}</span>
    </div>
  )
}
