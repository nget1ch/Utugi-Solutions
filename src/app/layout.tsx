import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import { siteConfig } from "@/lib/seo/site-config"
import { allSchemas } from "@/lib/seo/json-ld"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fontSerif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

/**
 * Root metadata — applies site-wide defaults. Per-page metadata extends
 * this via `buildPageMetadata()` from `@/lib/seo/metadata`.
 *
 * The `%s | Utugi Solutions` title template lets pages set just their
 * page title and the suffix is appended automatically.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Next.js",
  keywords: [
    "Utugi Solutions",
    "office supplies Kenya",
    "corporate branding Kenya",
    "cosmetics Kenya",
    "office stationery Nairobi",
    "promotional merchandise Kenya",
    "custom branded merchandise",
    "printers Kenya",
    "office equipment Kenya",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    ...(siteConfig.twitterHandle
      ? { site: `@${siteConfig.twitterHandle}`, creator: `@${siteConfig.twitterHandle}` }
      : {}),
  },
  // Google Search Console verification — set NEXT_PUBLIC_GSC_VERIFICATION in .env.local
  verification: siteConfig.gscVerification
    ? { google: siteConfig.gscVerification }
    : undefined,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  category: "business",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f7f3" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontSerif.variable} bg-background`}>
      <body className="antialiased font-sans">
        {/* JSON-LD structured data — Organization, LocalBusiness, WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(allSchemas()),
          }}
        />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  )
}
