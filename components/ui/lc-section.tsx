import { type ReactNode } from 'react'

export type LcSectionVariant = 'dark' | 'warm' | 'transparent'

const variantClasses: Record<LcSectionVariant, string> = {
  dark: 'lc-section-dark',
  warm: 'lc-section-warm',
  transparent: 'lc-section-transparent',
}

type LcSectionProps = {
  variant?: LcSectionVariant
  children: ReactNode
  className?: string
  id?: string
}

export default function LcSection({
  variant = 'dark',
  children,
  className = '',
  id,
}: LcSectionProps) {
  return (
    <section
      id={id}
      className={`lc-section-flow py-16 md:py-24 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  )
}
