import LcGlassPanel from '@/components/ui/lc-glass-panel'
import LcSectionHeading from '@/components/ui/lc-section-heading'

const FEATURES = [
  {
    num: '01',
    title: 'Fresh Coffee',
    body: 'Carefully selected beans, freshly blended for every order. No stale stock, no shortcuts.',
  },
  {
    num: '02',
    title: 'Premium Blends',
    body: 'From rich Turkish blends to smooth espresso roasts, the range is curated for daily coffee rituals.',
  },
  {
    num: '03',
    title: 'Since 2015',
    body: 'A family coffee experience built through years of supplying cafes, businesses, and homes.',
  },
  {
    num: '04',
    title: 'Easy Ordering',
    body: 'Order online or via WhatsApp. The path from browsing to your next cup stays simple.',
  },
] as const

export default function HomeFeatures() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,3,0,0)_0%,rgba(35,14,4,0.62)_48%,rgba(8,3,0,0)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b6885e]/9 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <LcSectionHeading
          heading="Why Line Coffee?"
          subheading="Warm craft, clear ordering, and blends made for the way you drink coffee."
          align="center"
          className="mb-12"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <LcGlassPanel
              key={feature.num}
              warm
              className="group relative flex min-h-[15rem] flex-col gap-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_52px_rgba(82,37,0,0.32)]"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFDCC2]/22 to-transparent"
                aria-hidden="true"
              />
              <span className="font-heading text-3xl font-semibold leading-none text-[#d6a373]/44 transition-colors duration-300 group-hover:text-[#FFDCC2]/62">
                {feature.num}
              </span>
              <div>
                <h3 className="font-heading mb-2 text-lg font-semibold text-[#fff4ec]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#f8dfce]/58">
                  {feature.body}
                </p>
              </div>
            </LcGlassPanel>
          ))}
        </div>
      </div>
    </section>
  )
}
