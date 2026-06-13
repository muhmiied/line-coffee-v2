'use client'

import { Phone, MapPin, Clock } from 'lucide-react'
import { FadeUp } from '@/components/ui/motion-primitives'

const CONTACT_INFO = [
  {
    Icon: Phone,
    title: 'واتساب وأوردر',
    value: '010 0000 0000',
    href: 'https://wa.me/201004761171',
  },
  {
    Icon: MapPin,
    title: 'موقعنا',
    value: 'القاهرة، مصر',
    href: null,
  },
  {
    Icon: Clock,
    title: 'ساعات العمل',
    value: 'السبت – الخميس، 9ص – 9م',
    href: null,
  },
]

export function ContactCTASection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: '#070504' }}
    >
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 60%, rgba(182,136,94,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Top gold divider */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(182,136,94,0.3), transparent)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Heading */}
        <FadeUp className="text-center mb-14">
          <p className="premium-section-kicker justify-center mb-5">تواصل معنا</p>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: '#f5e6d8' }}
          >
            ابدأ رحلتك مع
            <br className="hidden sm:block" />
            <span className="text-gradient"> قهوة لاين</span>
          </h2>
          <p className="text-lc-cream-muted text-base max-w-md mx-auto leading-relaxed">
            هل لديك سؤال؟ أو تريد اقتراح خلطة جديدة؟ نحن هنا لك دائماً.
          </p>
        </FadeUp>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {CONTACT_INFO.map(({ Icon, title, value, href }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className="luxury-panel rounded-2xl p-6 text-center">
                <div
                  className="w-11 h-11 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{
                    background: 'rgba(182,136,94,0.1)',
                    border: '1px solid rgba(182,136,94,0.2)',
                  }}
                >
                  <Icon className="w-4.5 h-4.5 text-lc-gold" strokeWidth={1.5} />
                </div>
                <p className="text-lc-cream-dim text-xs mb-2 tracking-wide">{title}</p>
                {href ? (
                  <a
                    href={href}
                    className="text-lc-cream text-sm font-medium hover:text-lc-gold transition-colors duration-200"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-lc-cream text-sm font-medium">{value}</p>
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <FadeUp className="text-center" delay={0.25}>
          <a
            href="https://wa.me/201004761171"
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-semibold"
          >
            <WhatsAppIcon />
            ابدأ محادثة الآن
          </a>
          <p className="text-lc-cream-dim text-xs mt-4">
            نرد في أقل من ساعة خلال ساعات العمل
          </p>
        </FadeUp>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5 fill-current shrink-0"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
