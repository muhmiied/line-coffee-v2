function BeanIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.5 3.5C6.36 3.5 3 6.86 3 11s3.36 7.5 7.5 7.5S18 15.14 18 11s-3.36-7.5-7.5-7.5z" />
      <path d="M10.5 3.5c0 2.5 2 5 5 6.5" />
      <path d="M10.5 18.5c0-2.5-2-5-5-6.5" />
    </svg>
  )
}

function PackageIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

function HeartHandshakeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l1.06 1.06L12 21.23l7.77-7.77 1.06-1.06a5.4 5.4 0 0 0 -.41-7.82z" />
    </svg>
  )
}

const FEATURES = [
  {
    icon: <BeanIcon />,
    title: 'Premium Beans',
    body: 'Carefully selected coffee with a rich, balanced profile.',
  },
  {
    icon: <PackageIcon />,
    title: 'Freshly Packed',
    body: 'Packed with care to preserve aroma and freshness.',
  },
  {
    icon: <HeartHandshakeIcon />,
    title: 'Made With Care',
    body: 'A warm coffee experience from order to cup.',
  },
] as const

export default function HomeFeatures() {
  return (
    <section className="relative overflow-hidden bg-[#0B0806] px-6 py-16 sm:px-8">
      {/* Subtle top divider */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px lc-gold-divider" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-0 divide-y divide-[#B6885E]/12 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-4 px-8 py-10 text-center sm:px-10"
            >
              {/* Icon ring */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B6885E]/28 bg-[#1B140F]/80 text-[#D6A373] shadow-[0_0_28px_rgba(182,136,94,0.12)]">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-heading mb-2 text-lg font-semibold text-[#F5E6D8]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#D6B79A]/64">
                  {feature.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px lc-gold-divider" aria-hidden="true" />
    </section>
  )
}
