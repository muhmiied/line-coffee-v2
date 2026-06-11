import LcButton from '@/components/ui/lc-button'

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}

export default function HomeContactCta() {
  return (
    <section className="relative overflow-hidden bg-[#0B0806] px-6 py-20 sm:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />

      {/* Warm center glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(82,37,0,0.28),transparent_32rem)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-[#B6885E]/22 bg-[radial-gradient(circle_at_50%_0%,rgba(214,163,115,0.12),transparent_20rem),linear-gradient(145deg,rgba(27,20,15,0.88),rgba(18,13,9,0.84)_55%,rgba(11,8,6,0.78))] px-8 py-12 text-center shadow-[0_22px_64px_rgba(0,0,0,0.44),inset_0_1px_0_rgba(245,230,216,0.10)] backdrop-blur sm:px-12">
          {/* Top inner gold line */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />
          {/* Corner glows */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#D6A373]/12 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#522500]/20 blur-3xl" aria-hidden="true" />

          <p className="lc-premium-kicker mb-4 text-xs font-semibold">
            ORDER &amp; INQUIRIES
          </p>

          <h2 className="font-heading mb-4 text-3xl font-semibold leading-tight text-[#F5E6D8] sm:text-4xl">
            Ready for your next coffee?
          </h2>

          <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-[#D6B79A]/68">
            Browse the current catalog or reach out directly. We will help you
            find the blend that fits your cup.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <LcButton href="/products" variant="primary" size="md">
              Shop Now
            </LcButton>
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="lc-button lc-button-glass lc-shine flex items-center gap-2 px-6 py-2.5 text-sm"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
            <LcButton href="/contact" variant="outline" size="md">
              Contact Us
            </LcButton>
          </div>
        </div>
      </div>
    </section>
  )
}
