import Link from 'next/link'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

export type LcButtonVariant = 'primary' | 'secondary' | 'glass' | 'outline'
export type LcButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<LcButtonVariant, string> = {
  primary: 'lc-button-primary lc-shine',
  secondary: 'lc-button-secondary',
  glass: 'lc-button-glass lc-shine',
  outline: 'lc-button-outline',
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
  const base = 'lc-button disabled:pointer-events-none disabled:opacity-50'
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
