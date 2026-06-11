import Link from "next/link"
import { cn } from "@/lib/utils"

type LcButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: "solid" | "outline"
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
}

export function LcButton({
  children,
  href,
  variant = "solid",
  className,
  onClick,
  type = "button",
}: LcButtonProps) {
  const classes = cn(
    variant === "solid" ? "premium-button" : "premium-button-outline",
    "text-sm",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
