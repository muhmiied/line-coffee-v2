'use client'

export function LineCoffeeLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3.5 ${className ?? ''}`}>
      <LogoIcon className="h-10 w-auto" />

      {/* Divider */}
      <div
        className="hidden sm:block self-stretch w-px"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(182,136,94,0.38), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Arabic brand text */}
      <div className="hidden sm:flex flex-col gap-0.5 leading-none">
        <span
          className="font-arabic text-base font-bold"
          style={{ color: '#f5e6d8', letterSpacing: '-0.01em' }}
        >
          لاين كوفي
        </span>
        <span
          className="font-arabic text-[9px]"
          style={{ color: '#b6885e', letterSpacing: '0.02em' }}
        >
          قهوة بنكهة مختلف
        </span>
      </div>
    </div>
  )
}

export function LogoMark({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return <LogoIcon className={className} style={style} />
}

/* Inline SVG recreation of the Line Coffee icon mark */
function LogoIcon({
  className,
  style,
}: {
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 88 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Line Coffee"
    >
      {/* L-frame — vertical bar */}
      <line
        x1="11"
        y1="9"
        x2="11"
        y2="73"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* L-frame — horizontal bar */}
      <line
        x1="11"
        y1="73"
        x2="62"
        y2="73"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
      />
      {/* Cup outer ring */}
      <circle
        cx="48"
        cy="33"
        r="22"
        stroke="currentColor"
        strokeWidth="4"
      />
      {/* Coffee bean (oval with center crease) */}
      <ellipse
        cx="48"
        cy="33"
        rx="12"
        ry="15"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <line
        x1="48"
        y1="18"
        x2="48"
        y2="48"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Cup handle */}
      <path
        d="M 70 21 Q 83 21 83 33 Q 83 45 70 45"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Saucer */}
      <ellipse
        cx="48"
        cy="57"
        rx="14"
        ry="2.5"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      {/* Decorative dots (colon-style) */}
      <circle cx="78" cy="63" r="3" fill="currentColor" />
      <circle cx="78" cy="72" r="2" fill="currentColor" />
      {/* LINE COFFEE wordmark */}
      <text
        x="41"
        y="91"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="7.5"
        fill="currentColor"
        letterSpacing="2.5"
      >
        LINE COFFEE
      </text>
    </svg>
  )
}
