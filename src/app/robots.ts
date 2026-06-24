import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo/site-config"

/**
 * Dynamic robots.txt — Next.js App Router.
 *
 * Accessible at https://www.utugisolutions.co.ke/robots.txt
 *
 * - Allows all major search engines to crawl all paths
 * - Disallows common crawl-waste paths (API routes, internal Next.js paths)
 * - References the sitemap so crawlers discover all pages
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Explicit allow for major crawlers (belt + suspenders)
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
