import Link from 'next/link'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export type LcButtonVariant = 'primary' | 'secondary' | 'glass' | 'outline'
export type LcButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<LcButtonVariant, string> = {
  primary:
    'bg-[#522500] text-[#FFDCC2] border border-[#FFDCC2]/20 shadow-[0_0_18px_rgba(82,37,0,0.45)] hover:bg-[#6b3100] lc-shine',
  secondary:
    'bg-[#FFDCC2]/10 text-[#FFDCC2] border border-[#FFDCC2]/20 hover:bg-[#FFDCC2]/20',
  glass:
    'lc-glass-panel text-[#FFDCC2] hover:border-[#FFDCC2]/25 lc-shine',
  outline:
    'bg-transparent text-[#FFDCC2] border border-[#FFDCC2]/40 hover:border-[#FFDCC2]/75 hover:bg-[#FFDCC2]/6',
}

const sizeClasses: Record<LcButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

type LcButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: LcButtonVariant
  size?: LcButtonSize
  href?: string
  children: ReactNode
  className?: string
}

export default function LcButton({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: LcButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDCC2]/40 disabled:opacity-50 disabled:pointer-events-none'
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
