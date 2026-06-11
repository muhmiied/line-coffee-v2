import Link from 'next/link'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export type LcButtonVariant = 'primary' | 'secondary' | 'glass' | 'outline'
export type LcButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<LcButtonVariant, string> = {
  primary:
    'bg-gradient-to-br from-[#FFDCC2] via-[#d6a373] to-[#b6885e] text-[#140904] border border-[#FFDCC2]/45 shadow-[0_10px_34px_rgba(182,136,94,0.28),inset_0_1px_0_rgba(255,255,255,0.26)] hover:from-[#ffe8d7] hover:via-[#dfae7f] hover:to-[#c49368] hover:shadow-[0_14px_42px_rgba(182,136,94,0.38),inset_0_1px_0_rgba(255,255,255,0.34)] lc-shine',
  secondary:
    'bg-[#522500]/28 text-[#FFDCC2] border border-[#FFDCC2]/22 shadow-[inset_0_1px_0_rgba(255,220,194,0.08)] hover:bg-[#6b3100]/34 hover:border-[#FFDCC2]/42 hover:shadow-[0_10px_28px_rgba(82,37,0,0.26)]',
  glass:
    'bg-[#1a0d04]/62 text-[#FFDCC2] border border-[#FFDCC2]/18 shadow-[0_8px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,220,194,0.10)] backdrop-blur hover:border-[#FFDCC2]/34 hover:bg-[#2a1308]/58 lc-shine',
  outline:
    'bg-transparent text-[#FFDCC2] border border-[#FFDCC2]/34 hover:border-[#FFDCC2]/70 hover:bg-[#FFDCC2]/8 hover:shadow-[0_0_18px_rgba(255,220,194,0.14)]',
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
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDCC2]/45 disabled:opacity-50 disabled:pointer-events-none'
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
