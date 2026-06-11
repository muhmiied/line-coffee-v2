import LcButton from '@/components/ui/lc-button'
import LcGlassPanel from '@/components/ui/lc-glass-panel'

export default function HomeContactCta() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(214,163,115,0.18),transparent_30rem),radial-gradient(circle_at_10%_20%,rgba(82,37,0,0.16),transparent_22rem),linear-gradient(180deg,rgba(11,8,6,0)_0%,#120D09_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl">
        <LcGlassPanel warm className="relative overflow-hidden px-6 py-10 text-center sm:px-10">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#D6A373]/14 blur-3xl"
            aria-hidden="true"
          />

          <p className="lc-premium-kicker mb-4 text-xs font-semibold">
            Order &amp; Inquiries
          </p>

          <h2 className="font-heading mb-4 text-3xl font-semibold text-[#F5E6D8] sm:text-4xl">
            Ready for your next coffee?
          </h2>

          <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-[#D6B79A]/72">
            Browse the current catalog or reach out directly. We will help you
            find the blend that fits your cup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <LcButton href="/products" variant="primary" size="md">
              Shop Now
            </LcButton>
            <LcButton href="/contact" variant="outline" size="md">
              Contact Us
            </LcButton>
          </div>
        </LcGlassPanel>
      </div>
    </section>
  )
}
