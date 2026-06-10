import { type ReactNode } from 'react'

export type LcSectionVariant = 'dark' | 'warm' | 'transparent'

const variantClasses: Record<LcSectionVariant, string> = {
  dark: 'bg-[#09050300]',
  warm: 'bg-gradient-to-br from-[#1a0d04] to-[#090503]',
  transparent: 'bg-transparent',
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
      className={`py-16 md:py-24 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </section>
  )
}
