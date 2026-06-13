'use client'

import { Leaf, Award, Heart } from 'lucide-react'
import { SlideIn } from '@/components/ui/motion-primitives'

const VALUES = [
  {
    Icon: Leaf,
    title: 'مصادر مستدامة',
    desc: 'نختار حبوبنا من مزارع مستدامة بعقود شراكة مباشرة مع المزارعين.',
  },
  {
    Icon: Award,
    title: 'تحميص احترافي',
    desc: 'كل دفعة تحت إشراف محمّص خبير بعين دقيقة ومعايير صارمة.',
  },
  {
    Icon: Heart,
    title: 'شغف بالجودة',
    desc: 'نرفض أي دفعة لا ترقى لمعيارنا — الجودة ليست خياراً بل التزام.',
  },
]

export function StorySection() {
  return (
    <section
      id="story"
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#0d0906' }}
    >
      {/* Warm background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 30% 50%, rgba(82,37,0,0.2) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Text column (right in RTL) ── */}
          <SlideIn from="end">
            <p className="premium-section-kicker mb-6">من نحن</p>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-7"
              style={{ color: '#f5e6d8' }}
            >
              شغفنا بالقهوة
              <br className="hidden sm:block" />
              <span className="text-gradient">منذ البداية</span>
            </h2>
            <p className="text-lc-cream-muted text-base leading-loose mb-10 max-w-md">
              قهوة لاين وُلدت من شغف حقيقي بفن القهوة — نؤمن أن الكوب المثالي يبدأ من اختيار الحبة الصحيحة ويكتمل بلحظة تذوقها.
              <br /><br />
              كل خلطة نصنعها قصة مزارع وعناية بالتحميص وإتقان في التحضير — لك أنت.
            </p>

            {/* Values list */}
            <ul className="space-y-5">
              {VALUES.map(({ Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-4">
                  <div
                    className="mt-0.5 w-9 h-9 rounded-full shrink-0 flex items-center justify-center"
                    style={{
                      background: 'rgba(182,136,94,0.1)',
                      border: '1px solid rgba(182,136,94,0.2)',
                    }}
                  >
                    <Icon className="w-4 h-4 text-lc-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lc-cream text-sm font-semibold mb-0.5">{title}</h4>
                    <p className="text-lc-cream-dim text-xs leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </SlideIn>

          {/* ── Visual column (left in RTL) ── */}
          <SlideIn from="start" delay={0.15}>
            <div className="relative">
              {/* Main frame */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #3d1a00, #5c2800, #1a0c00)',
                  aspectRatio: '4/5',
                  border: '1px solid rgba(182,136,94,0.15)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
                }}
              >
                {/* Grain */}
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 0, transparent 50%)',
                    backgroundSize: '6px 6px',
                  }}
                />
                {/* Center radial */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(182,136,94,0.12) 0%, transparent 65%)',
                  }}
                />
                {/* Decorative center watermark */}
                <div
                  className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                  aria-hidden="true"
                >
                  <div className="text-center">
                    {/* Coffee cup SVG watermark */}
                    <svg
                      viewBox="0 0 88 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-28 h-auto mx-auto"
                      style={{ color: '#d6a373', opacity: 0.06 }}
                    >
                      <line x1="11" y1="9" x2="11" y2="73" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round"/>
                      <line x1="11" y1="73" x2="62" y2="73" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round"/>
                      <circle cx="48" cy="33" r="22" stroke="currentColor" strokeWidth="4"/>
                      <ellipse cx="48" cy="33" rx="12" ry="15" stroke="currentColor" strokeWidth="2.5"/>
                      <line x1="48" y1="18" x2="48" y2="48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M 70 21 Q 83 21 83 33 Q 83 45 70 45" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
                      <ellipse cx="48" cy="57" rx="14" ry="2.5" stroke="currentColor" strokeWidth="2.5"/>
                      <circle cx="78" cy="63" r="3" fill="currentColor"/>
                      <circle cx="78" cy="72" r="2" fill="currentColor"/>
                    </svg>
                    <p
                      className="font-display text-xl italic font-medium mt-3"
                      style={{ color: '#f5e6d8', opacity: 0.1 }}
                    >
                      Line Coffee
                    </p>
                  </div>
                </div>
                {/* Top accent */}
                <div
                  className="absolute top-0 inset-x-0 h-px"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent, rgba(182,136,94,0.4), transparent)',
                  }}
                />
              </div>

              {/* Floating stat — bottom start */}
              <div
                className="absolute -bottom-5 -start-4 luxury-panel rounded-2xl p-4"
                style={{ minWidth: '140px' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: 'rgba(182,136,94,0.15)',
                      border: '1px solid rgba(182,136,94,0.25)',
                    }}
                  >
                    <Award className="w-4 h-4 text-lc-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p
                      className="font-display text-xl font-bold leading-none"
                      style={{ color: '#d6a373' }}
                    >
                      5+
                    </p>
                    <p className="text-lc-cream-dim text-[10px] mt-0.5">سنوات خبرة</p>
                  </div>
                </div>
              </div>

              {/* Floating origin — top end */}
              <div className="absolute -top-4 -end-3 luxury-panel rounded-2xl px-4 py-3">
                <p className="text-lc-gold text-[9px] tracking-widest uppercase mb-0.5">
                  Origins
                </p>
                <p className="text-lc-cream text-sm font-display font-semibold">+15 مصدر</p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
