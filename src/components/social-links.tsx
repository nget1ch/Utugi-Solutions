import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Utugi social media profiles.
 *
 * Update these handles when the official accounts change.
 * Defaults use the `utugi.ke` handle convention commonly available on each platform.
 */
export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/utugisolutions/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@utugisolutions?lang=en",
    icon: TikTokIcon,
  },
  {
    label: "X",
    href: "https://x.com/utugisolutions",
    icon: XIcon,
  },
] as const

type SocialLink = (typeof socialLinks)[number]

interface SocialLinksProps {
  /** Visual size of the icons. `sm` = 18px, `md` = 20px, `lg` = 24px. */
  size?: "sm" | "md" | "lg"
  /** Layout direction. */
  variant?: "row" | "col"
  /** Show the platform name next to each icon. */
  withLabels?: boolean
  className?: string
  iconButtonClassName?: string
}

// Use explicit pixel sizes (inline style) to avoid Tailwind v4 SVG sizing issues
const sizePx: Record<NonNullable<SocialLinksProps["size"]>, number> = {
  sm: 18,
  md: 20,
  lg: 24,
}

const buttonSizeClass: Record<NonNullable<SocialLinksProps["size"]>, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-12 w-12",
}

/**
 * Reusable social media links row.
 *
 * Renders accessible icon buttons for Instagram, TikTok and X — each opening
 * in a new tab with `rel="noopener noreferrer"` for safety.
 */
export function SocialLinks({
  size = "md",
  variant = "row",
  withLabels = false,
  className,
  iconButtonClassName,
}: SocialLinksProps) {
  const containerClasses = cn(
    "flex",
    variant === "row" ? "flex-row items-center gap-2" : "flex-col items-start gap-2",
    className,
  )

  return (
    <ul className={containerClasses}>
      {socialLinks.map((social) => {
        const Icon = social.icon
        return (
          <li key={social.label} className={variant === "col" ? "w-full" : undefined}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit Utugi on ${social.label}`}
              title={`Visit Utugi on ${social.label}`}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full",
                "text-foreground/70 transition-colors",
                "hover:bg-accent hover:text-accent-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                withLabels ? "px-3 py-1.5" : "justify-center",
                !withLabels && buttonSizeClass[size],
                iconButtonClassName,
              )}
            >
              <Icon
                size={sizePx[size]}
                aria-hidden="true"
              />
              {withLabels && (
                <span className="text-sm font-medium">@{social.label === "X" ? "utugi_ke" : "utugi.ke"}</span>
              )}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

/* ------------------------------------------------------------------ */
/*  Brand icons — accurate logos as inline SVG (currentColor aware)    */
/* ------------------------------------------------------------------ */

type IconProps = {
  /** Pixel size for both width and height. */
  size?: number
  className?: string
  "aria-hidden"?: boolean
}

function InstagramIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      style={{ width: size, height: size, flexShrink: 0 }}
      {...rest}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TikTokIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      style={{ width: size, height: size, flexShrink: 0 }}
      {...rest}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .594.045.878.134V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 1 0 15.66 16V8.7a8.16 8.16 0 0 0 4.77 1.52V6.78a4.84 4.84 0 0 1-.84-.09Z" />
    </svg>
  )
}

function XIcon({ size = 20, ...rest }: IconProps) {
  // Official X logo path (X corp, post-rebrand)
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      style={{ width: size, height: size, flexShrink: 0 }}
      {...rest}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
