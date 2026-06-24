/**
 * Central route registry for Utugi Solutions.
 *
 * The sitemap reads from this list, so adding a new page = adding one
 * entry here. Each entry can also feed per-page metadata if needed.
 *
 * `priority` follows sitemap protocol (0.0–1.0).
 * `changeFrequency` is a hint to crawlers — not a directive.
 */

export interface RouteEntry {
  /** Path relative to site root. Must start with "/". */
  path: string
  /** Last modified ISO date string, or undefined to omit from sitemap. */
  lastModified?: string
  /** Sitemap priority 0.0–1.0. Home is 1.0, top-level pages 0.8, etc. */
  priority: number
  /** Hint for crawlers. */
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
}

export const routes: RouteEntry[] = [
  {
    path: "/",
    lastModified: "2025-06-23",
    priority: 1.0,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    lastModified: "2025-06-23",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/cosmetics",
    lastModified: "2025-06-23",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/office-supplies",
    lastModified: "2025-06-23",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/contact",
    lastModified: "2025-06-23",
    priority: 0.7,
    changeFrequency: "monthly",
  },
]
