import type { Metadata } from "next"
import Link from "next/link"
import {
  Package,
  PenLine,
  Printer,
  Gift,
  Megaphone,
  ShoppingBag,
  Palette,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { OfficeCatalog } from "@/components/office/office-catalog"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Office Supplies & Corporate Branding",
  description:
    "Office supplies, stationery, printers, corporate gifts, promotional products and custom branding services from Utugi Solutions. Serving businesses across Kenya with reliable procurement and branded merchandise.",
  path: "/office-supplies",
  keywords: [
    "office supplies Kenya",
    "office stationery Nairobi",
    "corporate branding Kenya",
    "promotional products Kenya",
    "corporate gifts Kenya",
    "custom branded merchandise",
    "office printers Kenya",
    "branded apparel Kenya",
  ],
})

const categories = [
  { icon: Package, label: "Office Supplies" },
  { icon: PenLine, label: "Stationery" },
  { icon: Printer, label: "Printers & Consumables" },
  { icon: Gift, label: "Corporate Gifts" },
  { icon: Megaphone, label: "Promotional Products" },
  { icon: ShoppingBag, label: "Branded Merchandise" },
  { icon: Palette, label: "Branding Services" },
]

export default function OfficeSuppliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Office Supplies & Branding Division"
        title="Office Supplies & Branding Solutions"
        description="From everyday office essentials to fully customized branded merchandise, Utugi keeps your business stocked and on-brand."
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Categories</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {categories.map((category) => (
              <div
                key={category.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <category.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium leading-tight">{category.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficeCatalog />

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-serif text-2xl font-semibold sm:text-3xl">
            Need products branded with your identity?
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Share your logo and specifications, and we will customize notebooks, pens, mugs, apparel and more for your
            business.
          </p>
          <Button asChild size="lg" className="mt-2">
            <Link href="/contact">Start a Branding Project</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
