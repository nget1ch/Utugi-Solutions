import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo/site-config"
import { routes } from "@/lib/seo/routes"

/**
 * Dynamic sitemap generator — Next.js App Router.
 *
 * Accessible at https://www.utugisolutions.co.ke/sitemap.xml
 *
 * To add a new page, add an entry to `src/lib/seo/routes.ts`.
 * The sitemap auto-includes it on next render — no code change needed here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route.path, siteConfig.url).toString(),
    lastModified: route.lastModified
      ? new Date(route.lastModified)
      : new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
