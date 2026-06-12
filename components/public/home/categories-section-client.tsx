'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { PublicCategory } from '@/lib/db/types'
import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion-primitives'

const SLUG_STYLES: Record<string, { bg: string; accent: string }> = {
  'turkish-blends':  { bg: 'linear-gradient(145deg, #3d1a00, #5c2800, #1a0c00)', accent: '#C8853A' },
  'espresso-blends': { bg: 'linear-gradient(145deg, #1a0e08, #2d1a0e, #0b0806)', accent: '#9A7554' },
  'easy-coffee':     { bg: 'linear-gradient(145deg, #2a1508, #3d2010, #150a04)', accent: '#C49A6C' },
  'flavor-coffee':   { bg: 'linear-gradient(145deg, #3a1a04, #5a2a00, #1a0c00)', accent: '#D4A017' },
  'coffee-mix':      { bg: 'linear-gradient(145deg, #1e1008, #2d1a10, #0d0806)', accent: '#A07840' },
  'cappuccino':      { bg: 'linear-gradient(145deg, #3d2518, #5a3820, #1e0e08)', accent: '#C8A882' },
  'hot-chocolate':   { bg: 'linear-gradient(145deg, #2d1010, #3d1a1a, #120808)', accent: '#8B5E3C' },
}

const FALLBACK: PublicCategory[] = [
  { id: '1', slug: 'turkish-blends',  name_ar: 'قهوة تركية',        name_en: 'Turkish Blends',  sort_order: 1, website_visibility: 'visible', system_status: 'active', description_en: null, description_ar: null },
  { id: '2', slug: 'espresso-blends', name_ar: 'إسبريسو',           name_en: 'Espresso Blends', sort_order: 2, website_visibility: 'visible', system_status: 'active', description_en: null, description_ar: null },
  { id: '3', slug: 'easy-coffee',     name_ar: 'قهوة سهلة',         name_en: 'Easy Coffee',     sort_order: 3, website_visibility: 'visible', system_status: 'active', description_en: null, description_ar: null },
  { id: '4', slug: 'flavor-coffee',   name_ar: 'قهوة بالنكهات',    name_en: 'Flavor Coffee',   sort_order: 4, website_visibility: 'visible', system_status: 'active', description_en: null, description_ar: null },
  { id: '5', slug: 'cappuccino',      name_ar: 'كابتشينو',          name_en: 'Cappuccino',      sort_order: 5, website_visibility: 'visible', system_status: 'active', description_en: null, description_ar: null },
  { id: '6', slug: 'hot-chocolate',   name_ar: 'شوكولاتة ساخنة',  name_en: 'Hot Chocolate',   sort_order: 6, website_visibility: 'visible', system_status: 'active', description_en: null, description_ar: null },
]

const FALLBACK_STYLE = { bg: 'linear-gradient(145deg, #1b140f, #120d09, #0b0806)', accent: '#B6885E' }

export function CategoriesSectionClient({
  categories,
}: {
  categories: PublicCategory[]
}) {
  const items = categories.length > 0 ? categories : FALLBACK

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0f0a07' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 80% at 50% 60%, rgba(182,136,94,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <FadeUp className="text-center mb-14">
          <p className="premium-section-kicker justify-center mb-5">تصفح حسب الفئة</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold premium-heading-shimmer">
            اكتشف خلطاتنا
          </h2>
        </FadeUp>

        {/* Grid */}
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {items.map((cat) => {
            const style = SLUG_STYLES[cat.slug] ?? FALLBACK_STYLE
            const name = cat.name_ar ?? cat.name_en

            return (
              <StaggerItem key={cat.id}>
                <Link
                  href={`/products/category/${cat.slug}`}
                  className="group block relative overflow-hidden rounded-2xl premium-image-card"
                  style={{
                    background: style.bg,
                    aspectRatio: '3/4',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  {/* Hover inner glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse 65% 55% at 50% 30%, ${style.accent}1a 0%, transparent 70%)`,
                    }}
                  />
                  {/* Bottom overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 30%, rgba(7,5,4,0.88) 100%)',
                    }}
                  />
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 inset-x-0 h-px opacity-60"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${style.accent}, transparent)`,
                    }}
                  />
                  {/* Subtle grain */}
                  <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 0, transparent 50%)',
                      backgroundSize: '6px 6px',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-5">
                    <h3
                      className="font-display text-xl sm:text-2xl font-bold text-lc-cream mb-3 leading-snug transition-colors duration-300 group-hover:text-lc-gold"
                    >
                      {name}
                    </h3>
                    <div
                      className="flex items-center gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ color: style.accent }}
                    >
                      <span className="text-xs tracking-wide">استكشف</span>
                      <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
