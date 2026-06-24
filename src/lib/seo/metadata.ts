import type { Metadata } from "next"
import { siteConfig } from "./site-config"

const absoluteUrl = (path: string) =>
  new URL(path, siteConfig.url).toString()

interface PageMetaInput {
  /** Page title — will be combined with the title template. */
  title: string
  /** Meta description (155–160 chars recommended). */
  description: string
  /** Path relative to root, e.g. "/cosmetics". Used for canonical URL. */
  path: string
  /** Optional custom OG image (relative path or absolute URL). */
  ogImage?: string
  /** Set to false to prevent indexing of this page. Default true. */
  indexable?: boolean
  /** Optional keywords — minor SEO weight but still useful. */
  keywords?: string[]
}

/**
 * Build page-level metadata with canonical URL, Open Graph, Twitter card,
 * and robots directives. Use in any page.tsx `export const metadata`.
 *
 * Example:
 *   export const metadata = buildPageMetadata({
 *     title: "Cosmetics & Beauty Products",
 *     description: "...",
 *     path: "/cosmetics",
 *   })
 */
export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
  indexable = true,
  keywords,
}: PageMetaInput): Metadata {
  const canonical = absoluteUrl(path)
  const image = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage)
    : absoluteUrl(siteConfig.ogImage)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      // Avoid duplicating the brand name when the title already contains it
      title: title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`,
      description,
      images: [image],
      // If you set a @handle in siteConfig, it's used here
      ...(siteConfig.twitterHandle
        ? { site: `@${siteConfig.twitterHandle}`, creator: `@${siteConfig.twitterHandle}` }
        : {}),
    },
  }
}
