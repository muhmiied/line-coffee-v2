'use client'

import { FadeUp, StaggerGroup, StaggerItem } from '@/components/ui/motion-primitives'

const BUILDERS = [
  {
    key: 'espresso',
    title: 'اصنع إسبريسوك',
    desc: 'خلطة إسبريسو مصمّمة على مزاجك — اختر الحبوب والتحميص والنكهة.',
    accent: '#C8853A',
    bg: 'linear-gradient(145deg, #3a0a00, #5c1800, #1a0800)',
    badge: 'Custom Espresso',
    emoji: '☕',
  },
  {
    key: 'flavor',
    title: 'اصنع نكهتك',
    desc: 'اختر نكهتك المفضلة وامزجها مع قهوتك — تجربة فريدة لا تتكرر.',
    accent: '#D4A017',
    bg: 'linear-gradient(145deg, #2d1400, #4a2000, #1a0c00)',
    badge: 'Flavor Builder',
    emoji: '✨',
  },
]

export function MakeYourProductSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0f0a07' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(182,136,94,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-14">
          <p className="premium-section-kicker justify-center mb-5">تجربة فريدة</p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: '#f5e6d8' }}
          >
            صمّم{' '}
            <span className="text-gradient">قهوتك</span>{' '}
            بنفسك
          </h2>
          <p className="text-lc-cream-muted mt-4 max-w-md mx-auto text-sm leading-relaxed">
            لأول مرة — صمّم خلطتك الخاصة من البداية حسب مزاجك وذوقك.
          </p>
        </FadeUp>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {BUILDERS.map((b) => (
            <StaggerItem key={b.key}>
              <div
                className="relative rounded-3xl overflow-hidden p-8 cursor-not-allowed select-none"
                style={{ background: b.bg, minHeight: '280px' }}
              >
                {/* Coming-soon overlay */}
                <div
                  className="absolute inset-0 flex items-center justify-center z-20"
                  style={{
                    background: 'rgba(7,5,4,0.52)',
                    WebkitBackdropFilter: 'blur(2px)',
                    backdropFilter: 'blur(2px)',
                  }}
                >
                  <div className="text-center">
                    <div
                      className="inline-block px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase mb-3 border"
                      style={{
                        color: b.accent,
                        borderColor: `${b.accent}50`,
                        background: `${b.accent}12`,
                      }}
                    >
                      قريباً
                    </div>
                    <p className="text-lc-cream-dim text-xs">قيد التطوير</p>
                  </div>
                </div>

                {/* Grain */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 0, transparent 50%)',
                    backgroundSize: '7px 7px',
                  }}
                />
                {/* Gold top line */}
                <div
                  className="absolute top-0 inset-x-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${b.accent}55, transparent)`,
                  }}
                />

                {/* Card content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-5" aria-hidden="true">{b.emoji}</div>
                  <div
                    className="inline-block text-[10px] tracking-widest uppercase px-3 py-1 rounded-full mb-4 border"
                    style={{
                      color: b.accent,
                      borderColor: `${b.accent}38`,
                      background: `${b.accent}10`,
                    }}
                  >
                    {b.badge}
                  </div>
                  <h3
                    className="font-display text-2xl font-bold text-lc-cream mb-3"
                  >
                    {b.title}
                  </h3>
                  <p className="text-lc-cream-muted text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
