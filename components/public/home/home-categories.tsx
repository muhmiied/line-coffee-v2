import Link from 'next/link'
import type { PublicCategory } from '@/lib/db/types'

type Props = {
  categories: PublicCategory[]
}

// Static fallback categories for when DB is empty
const STATIC_CATEGORIES = [
  { id: 'turkish', slug: 'turkish-blends', name_en: 'Turkish Blends', description_en: 'Rich, finely ground coffee for traditional preparation' },
  { id: 'espresso', slug: 'espresso-blends', name_en: 'Espresso Blends', description_en: 'Bold espresso roasts for your machine' },
  { id: 'easy', slug: 'easy-coffee', name_en: 'Easy Coffee', description_en: 'Simple, convenient coffee for every day' },
  { id: 'flavor', slug: 'flavor-coffee', name_en: 'Flavor Coffee', description_en: 'Unique flavored coffees with a twist' },
  { id: 'mix', slug: 'coffee-mix', name_en: 'Coffee Mix', description_en: 'Blended mixes ready to enjoy' },
  { id: 'cappuccino', slug: 'cappuccino', name_en: 'Cappuccino', description_en: 'Creamy cappuccino blends at home' },
  { id: 'hot-choc', slug: 'hot-chocolate', name_en: 'Hot Chocolate', description_en: 'Rich and warming hot chocolate' },
]

export default function HomeCategories({ categories }: Props) {
  const items = categories.length > 0 ? categories : STATIC_CATEGORIES

  return (
    <section className="relative overflow-hidden bg-[#0B0806] px-6 py-20 sm:px-8">
      {/* Subtle top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#522500]/16 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section label */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-[0.65rem] font-semibold tracking-[0.22em] text-[#B6885E]/75 uppercase">
            BROWSE BY CATEGORY
          </p>
          <h2 className="font-heading text-3xl font-semibold text-[#F5E6D8] md:text-4xl">
            Shop{' '}
            <span className="text-[#D6A373]">by</span>{' '}
            Category
          </h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {items.map((category, index) => {
            const accent = TILE_ACCENTS[index % TILE_ACCENTS.length]
            return (
              <Link
                key={category.id}
                href={`/products/category/${category.slug}`}
                className="group relative flex min-h-[10rem] flex-col justify-end overflow-hidden rounded-xl border border-[#B6885E]/18 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D6A373]/42 hover:shadow-[0_20px_58px_rgba(82,37,0,0.36),0_0_24px_rgba(182,136,94,0.14)]"
              >
                {/* Background */}
                <div className={`absolute inset-0 ${accent}`} aria-hidden="true" />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B0806]/10 via-[#0B0806]/32 to-[#0B0806]/90" aria-hidden="true" />
                {/* Top gold line */}
                <div className="absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />
                {/* Decorative circle */}
                <div className="absolute right-4 top-4 h-14 w-14 rounded-full border border-[#D6A373]/14 bg-[#FFDCC2]/4 opacity-80 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                {/* Bottom hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_110%,rgba(214,163,115,0.12),transparent_10rem)] opacity-60 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative z-10 p-4">
                  {/* Gold accent line */}
                  <div className="mb-2 h-px w-5 rounded-full bg-[#D6A373]/60 transition-all duration-200 group-hover:w-8 group-hover:bg-[#FFDCC2]/80" />
                  <h3 className="font-heading text-[15px] font-semibold leading-snug text-[#F5E6D8] transition-colors duration-200 group-hover:text-[#FFDCC2]">
                    {category.name_en}
                  </h3>
                  {category.description_en && (
                    <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-[#D6B79A]/58">
                      {category.description_en}
                    </p>
                  )}
                  <p className="mt-2 text-[11px] font-semibold text-[#D6A373]/72 transition-colors duration-200 group-hover:text-[#FFDCC2]">
                    Explore →
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const TILE_ACCENTS = [
  'bg-[radial-gradient(circle_at_30%_20%,rgba(214,163,115,0.20),transparent_8rem),radial-gradient(circle_at_86%_76%,rgba(82,37,0,0.36),transparent_9rem),linear-gradient(145deg,rgba(27,20,15,0.92),rgba(11,8,6,0.82))]',
  'bg-[radial-gradient(circle_at_76%_22%,rgba(182,136,94,0.18),transparent_8rem),radial-gradient(circle_at_18%_82%,rgba(214,163,115,0.12),transparent_8rem),linear-gradient(145deg,rgba(21,16,11,0.92),rgba(11,8,6,0.84))]',
  'bg-[radial-gradient(circle_at_48%_16%,rgba(214,163,115,0.16),transparent_8rem),radial-gradient(circle_at_74%_86%,rgba(82,37,0,0.32),transparent_10rem),linear-gradient(145deg,rgba(27,20,15,0.88),rgba(18,13,9,0.72)_52%,rgba(11,8,6,0.84))]',
  'bg-[radial-gradient(circle_at_22%_72%,rgba(182,136,94,0.20),transparent_7rem),radial-gradient(circle_at_82%_18%,rgba(214,163,115,0.14),transparent_8rem),linear-gradient(150deg,rgba(27,20,15,0.90),rgba(11,8,6,0.82))]',
]
