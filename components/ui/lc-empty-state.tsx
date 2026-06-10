import LcButton from './lc-button'

type LcEmptyStateProps = {
  title: string
  description?: string
  actionLabel?: string
  actionHref?: string
}

export default function LcEmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: LcEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-6 text-center">
      {/* Coffee icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full lc-glass-panel text-3xl">
        ☕
      </div>

      <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>

      {description && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/50">
          {description}
        </p>
      )}

      {actionLabel && actionHref && (
        <div className="mt-6">
          <LcButton href={actionHref} variant="outline" size="sm">
            {actionLabel}
          </LcButton>
        </div>
      )}
    </div>
  )
}
