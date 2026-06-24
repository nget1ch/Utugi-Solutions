import { siteConfig } from "./site-config"

/**
 * JSON-LD structured data builders for Utugi Solutions.
 *
 * These render as <script type="application/ld+json"> in the document head
 * so Google can build rich results (knowledge panel, sitelinks, etc.).
 *
 * All builders return plain objects — the layout wraps them in <script>.
 */

const absoluteUrl = (path: string) =>
  new URL(path, siteConfig.url).toString()

/** Organization schema — describes the business as an entity. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/utugi-logo.jpg"),
      width: 240,
      height: 240,
    },
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.x,
    ].filter(Boolean),
  }
}

/** LocalBusiness schema — adds address, hours, and geo coordinates. */
export function localBusinessSchema() {
  const hours = siteConfig.businessHours.map((h) => {
    if (h.opens === "00:00" && h.closes === "00:00") {
      return `${h.days} Closed`
    }
    return `${h.days} ${h.opens}-${h.closes}`
  })

  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl(siteConfig.ogImage),
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.addressLine,
      addressLocality: siteConfig.contact.addressLocality,
      addressRegion: siteConfig.contact.addressRegion,
      postalCode: siteConfig.contact.postalCode,
      addressCountry: siteConfig.contact.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    hasMap: siteConfig.contact.mapUrl,
    openingHours: hours,
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.x,
    ].filter(Boolean),
  }
}

/** WebSite schema — enables sitelinks search box in Google results. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.tagline,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-KE",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

/** BreadcrumbList schema — useful for inner pages. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** Combined array — used in root layout <script> tag. */
export function allSchemas() {
  return [organizationSchema(), localBusinessSchema(), websiteSchema()]
}
