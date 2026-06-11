import LcButton from '@/components/ui/lc-button'
import LcGlassPanel from '@/components/ui/lc-glass-panel'

export default function HomeStory() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(214,163,115,0.18),transparent_28rem),radial-gradient(circle_at_12%_84%,rgba(82,37,0,0.22),transparent_24rem),linear-gradient(135deg,#1B140F_0%,#120D09_48%,#0B0806_100%)]"
        aria-hidden="true"
      />
      <div className="lc-coffee-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-72 -translate-x-1/2 lc-gold-divider"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
        <div>
          <p className="lc-premium-kicker mb-4 text-xs font-semibold">
            Our Story
          </p>

          <h2 className="font-heading max-w-3xl text-4xl font-semibold leading-tight text-[#F5E6D8] md:text-5xl">
            A family coffee legacy, refined for everyday ordering.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#D6B79A]/74">
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
            className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D6A373]/14 blur-3xl"
            aria-hidden="true"
          />
          <p className="font-heading text-5xl font-semibold leading-none text-[#FFDCC2]">
            2015
          </p>
          <p className="mt-3 text-sm font-semibold uppercase text-[#D6A373]/76">
            Family coffee craft
          </p>
          <p className="mt-5 text-sm leading-7 text-[#D6B79A]/68">
            Built around real blends, steady service, and a quieter premium
            experience for customers who know what they like.
          </p>
        </LcGlassPanel>
      </div>
    </section>
  )
}
