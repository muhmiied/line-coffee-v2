import LcButton from '@/components/ui/lc-button'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const STORY_POINTS = [
  {
    title: 'Supply Roots',
    body: 'Built first by serving cafes and coffee shops with dependable coffee supply.',
  },
  {
    title: 'Founder Experience',
    body: 'Sayed Kamal brings 28 years of coffee management experience from Bon Al Orouba.',
  },
  {
    title: 'Now Direct to You',
    body: 'The same careful supply mindset now shapes our online customer experience.',
  },
] as const

const STORY_STATS = [
  { value: '2015', label: 'Family Business' },
  { value: '28', label: 'Years of Experience' },
]

export default function HomeStory() {
  return (
    <section className="relative overflow-hidden bg-[#0B0806] px-6 py-20 sm:px-8">
      {/* Background */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(214,163,115,0.14),transparent_28rem),radial-gradient(circle_at_12%_84%,rgba(82,37,0,0.20),transparent_24rem),linear-gradient(135deg,rgba(27,20,15,0.60)_0%,rgba(18,13,9,0.40)_48%,rgba(11,8,6,0)_100%)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Image placeholder / story visual */}
        <div className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl border border-[#B6885E]/20 bg-[radial-gradient(circle_at_60%_30%,rgba(101,55,16,0.42),transparent_22rem),linear-gradient(145deg,#1B140F,#0B0806_70%)] shadow-[0_28px_80px_rgba(0,0,0,0.52)]" style={{ aspectRatio: '4/3' }}>
            {/* Decorative inner elements */}
            <div className="absolute inset-4 rounded-xl border border-[#B6885E]/14" aria-hidden="true" />
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-[#D6A373]/16 bg-[#FFDCC2]/5 shadow-[0_0_50px_rgba(214,163,115,0.14)]" aria-hidden="true" />
            <div className="absolute bottom-10 left-8 h-20 w-44 rounded-[999px] border border-[#B6885E]/14 bg-[#522500]/22 blur-[2px]" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0B0806] via-[#0B0806]/70 to-transparent" aria-hidden="true" />

            {/* Coffee farm label */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase text-[#B6885E]/60">
                Line Coffee — Est. 2015
              </p>
            </div>
          </div>

          {/* Floating stat cards */}
          <div className="absolute -bottom-4 -right-4 flex flex-col gap-2 sm:-right-6">
            {STORY_STATS.map((stat) => (
              <div
                key={stat.value}
                className="lc-glass-warm rounded-xl px-5 py-3 shadow-[0_12px_36px_rgba(0,0,0,0.38)]"
              >
                <p className="font-heading text-2xl font-semibold leading-none text-[#FFDCC2]">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-[#D6A373]/72">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text content */}
        <div className="order-1 lg:order-2">
          <p className="lc-premium-kicker mb-4 text-xs font-semibold">
            OUR STORY
          </p>

          <h2 className="font-heading text-4xl font-semibold leading-tight text-[#F5E6D8] md:text-5xl">
            A Family Coffee Legacy,{' '}
            <span className="text-[#D6A373]">Now Online</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#D6B79A]/70">
            Line Coffee began in 2015 as a family supply business led by Sayed Kamal,
            after 28 years managing coffee operations at Bon Al Orouba. For years, we
            supplied cafes and coffee shops that served our coffee under their own names.
            Today, that experience is becoming a public Line Coffee brand for online
            customers who want trusted coffee at home.
          </p>

          {/* Story points */}
          <ul className="mt-7 flex flex-col gap-4">
            {STORY_POINTS.map((point) => (
              <li key={point.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#B6885E]/38 bg-[#522500]/32 text-[#D6A373]">
                  <CheckIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#F5E6D8]">{point.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-[#D6B79A]/62">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <LcButton href="/about" variant="secondary" size="md">
              Learn More About Us
            </LcButton>
          </div>
        </div>
      </div>
    </section>
  )
}
