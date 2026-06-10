import { type ReactNode } from 'react'

type LcSectionHeadingProps = {
  heading: ReactNode
  subheading?: ReactNode
  align?: 'left' | 'center'
  /** Pass true when the active language is Arabic to use Cairo font and RTL alignment */
  arabic?: boolean
  className?: string
}

export default function LcSectionHeading({
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
      <h2
        className={`${fontClass} text-3xl font-semibold leading-tight text-white md:text-4xl`}
      >
        {heading}
      </h2>
      {subheading && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/55">
          {subheading}
        </p>
      )}
    </div>
  )
}
