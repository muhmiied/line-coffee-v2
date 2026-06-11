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
    <section className="relative flex min-h-[86svh] items-center overflow-hidden bg-[#0b0502] px-6 py-20 sm:py-24">
      <div className="lc-coffee-texture pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_36%,rgba(182,136,94,0.26),transparent_30rem),radial-gradient(circle_at_18%_20%,rgba(255,220,194,0.09),transparent_22rem),linear-gradient(90deg,rgba(8,3,0,0.96)_0%,rgba(15,7,2,0.82)_44%,rgba(8,3,0,0.45)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#080300] via-[#080300]/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#FFDCC2]/18 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.88fr)] xl:gap-16">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#FFDCC2]/62">
              Line Coffee
            </p>
            <h1 className="font-heading text-5xl font-semibold leading-[1.02] text-[#fff4ec] sm:text-6xl md:text-7xl">
              Coffee crafted
              <br className="hidden sm:block" />
              for warm rituals.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#f8dfce]/70 sm:text-lg lg:mx-0">
              Premium Turkish blends, espresso roasts, and specialty coffees
              prepared with family craft and a calm, easy shopping path.
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
                  className="rounded-2xl border border-[#FFDCC2]/10 bg-[#180b04]/42 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,220,194,0.08)] backdrop-blur"
                >
                  <p className="font-heading text-lg font-semibold leading-none text-[#FFDCC2]">
                    {note.label}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-white/42">
                    {note.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[34rem] lg:block" aria-hidden="true">
            <div className="absolute inset-x-8 bottom-12 h-24 rounded-[999px] bg-[#000]/70 blur-2xl" />
            <div className="absolute inset-0 rounded-[2rem] border border-[#FFDCC2]/10 bg-[linear-gradient(145deg,rgba(255,220,194,0.10),rgba(82,37,0,0.18)_38%,rgba(8,3,0,0.35)_100%)] shadow-[0_24px_90px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,220,194,0.12)]" />
            <div className="absolute -right-10 top-8 h-64 w-64 rounded-full bg-[#b6885e]/18 blur-[76px]" />
            <div className="absolute -left-8 bottom-14 h-56 w-56 rounded-full bg-[#522500]/28 blur-[72px]" />
            <div className="absolute left-1/2 top-12 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFDCC2]/28 to-transparent" />

            <div className="absolute inset-10 flex items-center justify-center">
              {productImageUrl ? (
                <div className="relative h-[25rem] w-[20rem] drop-shadow-[0_34px_44px_rgba(0,0,0,0.54)]">
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
                <div className="relative h-72 w-72">
                  <div className="absolute inset-0 rounded-full border border-[#FFDCC2]/14 bg-[#522500]/18 shadow-[0_0_70px_rgba(182,136,94,0.16),inset_0_0_36px_rgba(255,220,194,0.06)]" />
                  <div className="absolute left-1/2 top-24 h-28 w-40 -translate-x-1/2 rounded-b-[3rem] rounded-t-lg border border-[#FFDCC2]/18 bg-gradient-to-b from-[#2b1207] to-[#100703] shadow-[inset_0_12px_18px_rgba(255,220,194,0.08)]" />
                  <div className="absolute left-1/2 top-24 h-8 w-40 -translate-x-1/2 rounded-full border border-[#FFDCC2]/16 bg-[#0d0502]" />
                  <div className="absolute left-[62%] top-32 h-16 w-14 rounded-r-full border border-l-0 border-[#FFDCC2]/18" />
                  <div className="absolute bottom-16 left-1/2 h-4 w-52 -translate-x-1/2 rounded-full border border-[#FFDCC2]/10 bg-[#FFDCC2]/5" />
                  <div className="absolute left-[42%] top-8 h-16 w-px rounded-full bg-gradient-to-t from-[#FFDCC2]/22 to-transparent" />
                  <div className="absolute left-[52%] top-4 h-20 w-px rounded-full bg-gradient-to-t from-[#FFDCC2]/18 to-transparent" />
                  <div className="absolute left-[59%] top-12 h-12 w-px rounded-full bg-gradient-to-t from-[#FFDCC2]/14 to-transparent" />
                </div>
              )}
            </div>

            <div className="absolute bottom-10 left-1/2 h-px w-72 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFDCC2]/24 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
