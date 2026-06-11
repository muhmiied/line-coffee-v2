import Link from 'next/link'
import Image from 'next/image'
import { CATEGORIES } from '@/lib/data'

export default function HomeCategories() {
  return (
    <section className="relative overflow-hidden bg-[#0B0806] px-6 py-20 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-[#522500]/16 blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="lc-premium-kicker mb-3 text-[0.65rem] font-semibold">BROWSE BY CATEGORY</p>
          <h2 className="font-heading text-3xl font-bold text-[#F5E6D8] md:text-4xl">
            Shop by <span className="text-[#D6A373]">Category</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.slug}`}
              className="group relative flex min-h-[12rem] flex-col justify-end overflow-hidden rounded-2xl border border-[#B6885E]/18 transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#D6A373]/45 hover:shadow-[0_24px_64px_rgba(82,37,0,0.4),0_0_28px_rgba(182,136,94,0.18)]"
            >
              <Image
                src={category.image || '/placeholder.svg'}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0806]/10 via-[#0B0806]/45 to-[#0B0806]/92" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />

              <div className="relative z-10 p-4">
                <div className="mb-2 h-px w-5 rounded-full bg-[#D6A373]/70 transition-all duration-300 group-hover:w-9 group-hover:bg-[#FFDCC2]/90" />
                <h3 className="font-heading text-base font-semibold leading-snug text-[#F5E6D8] transition-colors duration-200 group-hover:text-[#FFDCC2]">
                  {category.name}
                </h3>
                <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-[#D6B79A]/64">{category.description}</p>
                <p className="mt-2 text-[11px] font-semibold text-[#D6A373]/80 transition-colors duration-200 group-hover:text-[#FFDCC2]">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
