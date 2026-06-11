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
    <div className="lc-luxury-panel flex flex-col items-center justify-center rounded-2xl px-6 py-16 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#B6885E]/24 bg-[#522500]/24 text-sm font-semibold text-[#FFDCC2] shadow-[inset_0_1px_0_rgba(245,230,216,0.10)]">
        LC
      </div>

      <h3 className="font-heading text-xl font-semibold text-[#F5E6D8]">
        {title}
      </h3>

      {description && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#D6B79A]/68">
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
