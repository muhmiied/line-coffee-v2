import { type ReactNode } from 'react'

type LcGlassPanelProps = {
  children: ReactNode
  className?: string
  /** Apply the warm brown tint instead of the default deep dark */
  warm?: boolean
}

export default function LcGlassPanel({
  children,
  className = '',
  warm = false,
}: LcGlassPanelProps) {
  const base = warm ? 'lc-glass-warm' : 'lc-glass-panel'
  return (
    <div className={`${base} rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  )
}
