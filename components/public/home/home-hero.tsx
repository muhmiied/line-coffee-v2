import Image from 'next/image'

import LcButton from '@/components/ui/lc-button'

type HomeHeroProps = {
  productImageUrl?: string | null
  productImageAlt?: string | null
}

const HERO_NOTES = [
  { label: 'Since 2015', value: 'Family craft' },
  { label: 'Fresh blends', value: 'Made to order' },
  { label: 'Easy ordering', value: 'Online or WhatsApp' },
] as const

export default function HomeHero({
  productImageUrl,
  productImageAlt,
}: HomeHeroProps) {
  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-[#0B0806] px-6 py-20 sm:py-24">
      <div className="lc-coffee-texture pointer-events-none absolute inset-0 opacity-90" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_74%_32%,rgba(214,163,115,0.28),transparent_30rem),radial-gradient(circle_at_18%_18%,rgba(255,220,194,0.10),transparent_23rem),radial-gradient(circle_at_55%_88%,rgba(82,37,0,0.26),transparent_30rem),linear-gradient(90deg,rgba(11,8,6,0.98)_0%,rgba(18,13,9,0.88)_44%,rgba(11,8,6,0.52)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0806] via-[#0B0806]/72 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full lc-gold-divider"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.88fr)] xl:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="lc-premium-kicker mb-5 text-xs font-semibold">
              LINE COFFEE
            </p>
            <h1 className="font-heading text-5xl font-semibold leading-[1.02] text-[#F5E6D8] sm:text-6xl md:text-7xl">
              Coffee crafted
              <br className="hidden sm:block" />
              for every moment.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#D6B79A]/78 sm:text-lg lg:mx-0">
              Premium Turkish blends, espresso roasts, and specialty coffees
              fresh from our family craft to your daily cup.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <LcButton href="/products" variant="primary" size="lg">
                Explore Products
              </LcButton>
              <LcButton href="/about" variant="glass" size="lg">
                Our Story
              </LcButton>
            </div>

            <div className="mx-auto mt-12 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 lg:mx-0">
              {HERO_NOTES.map((note) => (
                <div
                  key={note.label}
                  className="rounded-2xl border border-[#B6885E]/20 bg-[#1B140F]/56 px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(245,230,216,0.08)] backdrop-blur"
                >
                  <p className="font-heading text-lg font-semibold leading-none text-[#F5E6D8]">
                    {note.label}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-medium uppercase text-[#D6B79A]/58">
                    {note.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-[34rem]" aria-hidden="true">
            <div className="absolute inset-x-10 bottom-10 h-24 rounded-[999px] bg-[#000]/76 blur-2xl" />
            <div className="absolute inset-0 rounded-[2rem] border border-[#B6885E]/22 bg-[radial-gradient(circle_at_50%_18%,rgba(214,163,115,0.18),transparent_15rem),linear-gradient(145deg,rgba(245,230,216,0.08),rgba(82,37,0,0.20)_38%,rgba(11,8,6,0.48)_100%)] shadow-[0_28px_96px_rgba(0,0,0,0.58),0_0_42px_rgba(182,136,94,0.12),inset_0_1px_0_rgba(245,230,216,0.12)]" />
            <div className="absolute -right-10 top-8 h-64 w-64 rounded-full bg-[#B6885E]/20 blur-[76px]" />
            <div className="absolute -left-8 bottom-14 h-56 w-56 rounded-full bg-[#522500]/28 blur-[72px]" />
            <div className="absolute left-1/2 top-12 h-px w-64 -translate-x-1/2 lc-gold-divider" />
            <div className="absolute right-8 top-8 h-20 w-20 rounded-full border border-[#B6885E]/18 bg-[#FFDCC2]/4" />
            <div className="absolute left-10 bottom-12 h-10 w-10 rounded-full border border-[#D6A373]/18 bg-[#522500]/18" />

            <div className="absolute inset-10 flex items-center justify-center">
              {productImageUrl ? (
                <div className="relative h-[22rem] w-[18rem] drop-shadow-[0_34px_44px_rgba(0,0,0,0.58)] sm:h-[25rem] sm:w-[20rem]">
                  <Image
                    src={productImageUrl}
                    alt={productImageAlt ?? 'Line Coffee product'}
                    fill
                    className="object-contain"
                    sizes="320px"
                    priority
                  />
                </div>
              ) : (
                <div className="relative h-[20rem] w-full max-w-[24rem] overflow-hidden rounded-[1.5rem] border border-[#B6885E]/18 bg-[radial-gradient(circle_at_68%_24%,rgba(214,163,115,0.18),transparent_11rem),radial-gradient(circle_at_22%_78%,rgba(82,37,0,0.34),transparent_13rem),linear-gradient(145deg,#1B140F,#0B0806_70%)] shadow-[0_28px_76px_rgba(0,0,0,0.54),inset_0_1px_0_rgba(245,230,216,0.10)] sm:h-[23rem]">
                  <div className="absolute inset-4 rounded-[1.125rem] border border-[#B6885E]/12" />
                  <div className="absolute left-8 right-8 top-9 h-px lc-gold-divider" />
                  <div className="absolute right-8 top-12 h-28 w-28 rounded-full border border-[#D6A373]/16 bg-[#FFDCC2]/5 shadow-[0_0_60px_rgba(214,163,115,0.14)]" />
                  <div className="absolute bottom-16 left-8 h-24 w-44 rounded-[999px] border border-[#B6885E]/18 bg-[#522500]/24 blur-[1px]" />
                  <div className="absolute bottom-12 right-10 h-32 w-20 rounded-[999px] border border-[#D6A373]/14 bg-[#120D09]/76" />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0B0806] via-[#0B0806]/78 to-transparent" />
                  <div className="absolute bottom-9 left-10 right-10 h-px bg-[#D6A373]/18" />
                </div>
              )}
            </div>

            <div className="absolute bottom-10 left-1/2 h-px w-72 -translate-x-1/2 lc-gold-divider" />
          </div>
        </div>
      </div>
    </section>
  )
}
