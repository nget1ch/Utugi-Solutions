/**
 * Central SEO configuration for Utugi Solutions.
 *
 * Update this file when business info changes — all metadata, sitemap,
 * robots, and JSON-LD structured data read from these constants.
 */

export const siteConfig = {
  /** Production canonical origin. Used for canonical URLs, sitemap, OG tags. */
  url: "https://www.utugisolutions.co.ke",

  /** Business name as it should appear in search results and structured data. */
  name: "Utugi Solutions",

  /** Short tagline for default descriptions and OG descriptions. */
  tagline:
    "Office Supplies, Corporate Branding & Cosmetics in Kenya",

  /** Default description used when a page doesn't override it. */
  description:
    "Utugi Solutions supplies office stationery, printers, corporate branding products, promotional merchandise, office equipment, and cosmetics across Kenya.",

  /** Default Open Graph image (relative to site root). 1200×630 recommended. */
  ogImage: "/og-image.png",

  /** Locale for OG tags. */
  locale: "en_KE",

  /** Twitter handle (without @) if you have one. Leave empty to use summary card. */
  twitterHandle: "",

  /** Contact + location info (also feeds JSON-LD LocalBusiness schema). */
  contact: {
    email: "utugisolutions@gmail.com",
    phone: "+254742799481",
    phoneDisplay: "+254 742 799 481",
    addressLine: "Kimbo Matangi Road Junction Centre",
    addressLocality: "Nairobi",
    addressRegion: "Kiambu",
    addressCountry: "KE",
    postalCode: "",
    /** Google Maps directions URL — used in JSON-LD `hasMap`. */
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Kimbo+Matangi+Road+Junction+Centre+Thika+Road+Kenya",
    /** Geo coordinates for LocalBusiness schema. Update with exact lat/long. */
    geo: {
      latitude: -1.2186,
      longitude: 36.8888,
    },
  },

  businessHours: [
    { days: "Mon-Fri", opens: "08:00", closes: "17:00" },
    { days: "Sat", opens: "09:00", closes: "13:00" },
    { days: "Sun", opens: "00:00", closes: "00:00" }, // closed
  ],

  /** Social profiles — used in Organization schema sameAs array. */
  social: {
    instagram: "https://instagram.com/utugi.ke",
    tiktok: "https://www.tiktok.com/@utugi.ke",
    x: "https://x.com/utugi_ke",
  },

  /**
   * Google Search Console verification token.
   *
   * Set this in `.env.local` as:
   *   NEXT_PUBLIC_GSC_VERIFICATION=your-token-here
   *
   * The token is the part AFTER "google-site-verification:" in the
   * verification string Google gives you. We render it as:
   *   <meta name="google-site-verification" content="your-token-here" />
   */
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
} as const

export type SiteConfig = typeof siteConfig
