import LcButton from '@/components/ui/lc-button'
import LcGlassPanel from '@/components/ui/lc-glass-panel'

export default function HomeStory() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(182,136,94,0.16),transparent_28rem),linear-gradient(135deg,#1a0800_0%,#0f0400_48%,#080300_100%)]"
        aria-hidden="true"
      />
      <div className="lc-coffee-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFDCC2]/18 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d6a373]/64">
            Our Story
          </p>

          <h2 className="font-heading max-w-3xl text-4xl font-semibold leading-tight text-[#fff4ec] md:text-5xl">
            A family coffee legacy, refined for everyday ordering.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#f8dfce]/64">
            What started as a passion for the perfect blend became a family
            mission: supplying premium coffee to cafes, businesses, and homes,
            then bringing that same craft directly to your table.
          </p>

          <div className="mt-8">
            <LcButton href="/about" variant="secondary" size="md">
              Read Our Story
            </LcButton>
          </div>
        </div>

        <LcGlassPanel warm className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FFDCC2]/10 blur-3xl"
            aria-hidden="true"
          />
          <p className="font-heading text-5xl font-semibold leading-none text-[#FFDCC2]">
            2015
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#d6a373]/70">
            Family coffee craft
          </p>
          <p className="mt-5 text-sm leading-7 text-[#f8dfce]/58">
            Built around real blends, steady service, and a quieter premium
            experience for customers who know what they like.
          </p>
        </LcGlassPanel>
      </div>
    </section>
  )
}
