'use client'

import { Flame, Truck, Star, Shield } from 'lucide-react'
import { StaggerGroup, StaggerItem } from '@/components/ui/motion-primitives'

const FEATURES = [
  {
    Icon: Flame,
    title: 'تحميص طازج',
    desc: 'كل دفعة محمّصة خلال 72 ساعة من الشحن',
  },
  {
    Icon: Truck,
    title: 'توصيل سريع',
    desc: 'نوصلك لباب بيتك في أسرع وقت ممكن',
  },
  {
    Icon: Star,
    title: 'جودة بريميوم',
    desc: 'حبوب مختارة من أفضل المصادر العالمية',
  },
  {
    Icon: Shield,
    title: 'طلب آمن',
    desc: 'ادفع عند الاستلام براحة تامة',
  },
]

export function TrustStrip() {
  return (
    <section
      className="relative py-16 border-y border-lc-border/30"
      style={{ backgroundColor: '#070504' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 90% at 50% 50%, rgba(182,136,94,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {FEATURES.map(({ Icon, title, desc }) => (
            <StaggerItem key={title}>
              <div className="premium-info-card rounded-2xl p-6 text-center group cursor-default">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(182,136,94,0.1)',
                    border: '1px solid rgba(182,136,94,0.2)',
                  }}
                >
                  <Icon
                    className="w-5 h-5 transition-colors duration-200 group-hover:text-lc-gold-light"
                    style={{ color: '#b6885e' }}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="text-sm font-semibold mb-1.5 transition-colors duration-200 group-hover:text-lc-gold"
                  style={{ color: '#f5e6d8' }}
                >
                  {title}
                </h3>
                <p className="text-lc-cream-dim text-xs leading-relaxed">{desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
