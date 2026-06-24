import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { Divisions } from "@/components/home/divisions"
import { BrandingFeature } from "@/components/home/branding-feature"
import { WhyChoose } from "@/components/home/why-choose"
import { FeaturedServices } from "@/components/home/featured-services"
import { CTA } from "@/components/home/cta"
import { buildPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Utugi Solutions | Office Supplies, Corporate Branding & Cosmetics in Kenya",
  description:
    "Utugi Solutions supplies office stationery, printers, corporate branding products, promotional merchandise, office equipment, and cosmetics across Kenya.",
  path: "/",
  keywords: [
    "office supplies Kenya",
    "corporate branding Kenya",
    "cosmetics Kenya",
    "office stationery",
    "promotional merchandise",
    "custom branded merchandise",
    "office equipment Nairobi",
  ],
})

// The homepage title is already complete — don't apply the %s template
metadata.title = {
  absolute:
    "Utugi Solutions | Office Supplies, Corporate Branding & Cosmetics in Kenya",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divisions />
      <BrandingFeature />
      <WhyChoose />
      <FeaturedServices />
      <CTA />
    </>
  )
}
