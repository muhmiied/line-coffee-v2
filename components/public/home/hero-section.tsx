'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

const E = [0.22, 1, 0.36, 1] as const

const STATS = [
  { value: '+15',  label: 'مصدر بن مختار' },
  { value: '72h',  label: 'تحميص طازج' },
  { value: '100%', label: 'عربيكا' },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-[88svh] flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: '#0b0806' }}
    >
      {/* ── Cinematic Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Warm coffee glow center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 45%, rgba(182,136,94,0.1) 0%, transparent 70%)',
          }}
        />
        {/* Deep corner — top end */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 85% 15%, rgba(82,37,0,0.25) 0%, transparent 65%)',
          }}
        />
        {/* Dark shadow — bottom start */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 50% 60% at 10% 88%, rgba(7,5,4,0.9) 0%, transparent 65%)',
          }}
        />
        {/* Edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 95% 90% at 50% 50%, transparent 38%, rgba(7,5,4,0.65) 100%)',
          }}
        />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'radial-gradient(rgba(214,163,115,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 inset-x-0 h-40"
          style={{ background: 'linear-gradient(0deg, #0b0806 0%, transparent 100%)' }}
        />
        {/* Thin gold top line */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(182,136,94,0.22), transparent)',
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: E }}
            className="premium-section-kicker mb-7"
          >
            خلطات قهوة فاخرة
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: E }}
            className="font-display font-bold leading-[1.05] mb-7"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
              color: '#f5e6d8',
              textShadow: '0 4px 48px rgba(0,0,0,0.9)',
            }}
          >
            لحظتك المثالية
            <br />
            <span className="text-gradient">في كل كوب</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: E }}
            className="text-lc-cream-muted text-lg sm:text-xl leading-relaxed mb-11 max-w-lg"
          >
            نختار أفضل حبوب البن من أرقى المصادر، ونحمّصها بعناية — لتصنع كوبك المثالي كل يوم.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: E }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/products"
              className="premium-button px-8 py-3.5 rounded-full text-sm font-semibold"
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={2} />
              تسوق الآن
            </Link>
            <Link
              href="#story"
              className="premium-button-outline px-8 py-3.5 rounded-full text-sm"
            >
              اكتشف قصتنا
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.52, ease: E }}
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
              <div key={s.value} className="flex flex-col">
                <span
                  className="font-display text-2xl sm:text-3xl font-bold leading-none"
                  style={{ color: '#d6a373' }}
                >
                  {s.value}
                </span>
                <span className="text-lc-cream-dim text-xs mt-1 tracking-wide">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-9 inset-x-0 flex justify-center"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="text-[9px] tracking-[0.3em] uppercase"
            style={{ color: '#a08060' }}
          >
            تمرير
          </span>
          <div
            className="w-px h-8"
            style={{
              background:
                'linear-gradient(180deg, rgba(182,136,94,0.45), transparent)',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}
