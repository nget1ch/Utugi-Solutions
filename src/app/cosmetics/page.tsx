import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Flower2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { cosmeticCategories, cosmeticProducts } from "@/lib/data/cosmetics"
import { buildPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Cosmetics & Beauty Products",
  description:
    "Explore Utugi's cosmetics division: skincare, hair care, makeup and personal care products from the brands customers love — Nivea, CeraVe, Maybelline, Darling and more. Available for retail and wholesale across Kenya.",
  path: "/cosmetics",
  keywords: [
    "cosmetics Kenya",
    "beauty products Kenya",
    "skincare Kenya",
    "hair care products Kenya",
    "makeup Kenya",
    "wholesale cosmetics Kenya",
    "Nivea Kenya",
    "Maybelline Kenya",
    "CeraVe Kenya",
  ],
})

export default function CosmeticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cosmetics Division"
        title="Cosmetics & Beauty Products"
        description="Our top 20 best-selling cosmetics — skincare, hair care, makeup and personal care from the brands customers love, available for retail and wholesale."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {cosmeticCategories.map((category) => {
          const products = cosmeticProducts
            .filter((p) => p.category === category)
            .sort((a, b) => a.rank - b.rank)
          return (
            <div key={category} className="mb-14 last:mb-0">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-primary">
                  <Flower2 className="h-5 w-5" />
                </span>
                <h2 className="font-serif text-2xl font-semibold tracking-tight">{category}</h2>
                <span className="ml-1 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  {products.length} {products.length === 1 ? "product" : "products"}
                </span>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 flex h-8 min-w-8 items-center justify-center rounded-full bg-background/95 px-2 text-xs font-semibold text-primary shadow-sm ring-1 ring-border">
                        #{product.rank}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-semibold">{product.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                      <p className="mt-3 text-xs font-medium text-primary">
                        Popular: <span className="text-muted-foreground">{product.examples}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-14 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-serif text-2xl font-semibold sm:text-3xl">
            Looking for bulk or wholesale cosmetics?
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Get in touch for tailored pricing on cosmetics and personal care products for your retail or business needs.
          </p>
          <Button asChild size="lg" className="mt-2">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
