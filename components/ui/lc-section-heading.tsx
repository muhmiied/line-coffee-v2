import { type ReactNode } from 'react'

type LcSectionHeadingProps = {
  kicker?: ReactNode
  heading: ReactNode
  subheading?: ReactNode
  align?: 'left' | 'center'
  /** Pass true when the active language is Arabic to use Cairo font and RTL alignment */
  arabic?: boolean
  className?: string
}

export default function LcSectionHeading({
  kicker,
  heading,
  subheading,
  align = 'left',
  arabic = false,
  className = '',
}: LcSectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left'
  const fontClass = arabic ? 'font-arabic' : 'font-heading'
  const dirAttr = arabic ? 'rtl' : 'ltr'

  return (
    <div className={`${alignClass} ${className}`} dir={dirAttr}>
      {kicker && (
        <p
          className={`lc-premium-kicker-line mb-4 text-xs font-semibold ${
            align === 'center' ? 'justify-center' : ''
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`${fontClass} text-3xl font-semibold leading-tight text-[#F5E6D8] md:text-4xl`}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed text-[#D6B79A]/72 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
