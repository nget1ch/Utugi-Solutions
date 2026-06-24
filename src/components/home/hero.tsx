import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-border bg-accent/50 px-3 py-1 text-xs font-medium text-accent-foreground">
            Beauty {"\u00B7"} Office Supplies {"\u00B7"} Branding
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Your Trusted Partner for Beauty, Office Supplies and Branding Solutions
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Utugi brings together premium cosmetics, dependable office supplies, and fully customized branding under one
            roof. Whatever your business needs to look and feel its best, we deliver it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/office-supplies">Explore Office & Branding</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cosmetics">Browse Cosmetics</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/hero-cosmetics.jpg"
                alt="Premium skincare and beauty products"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="text-center text-sm font-medium text-muted-foreground">Cosmetics & Skincare</p>
          </div>
          <div className="space-y-4 pt-10">
            <div className="aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/hero-office.jpg"
                alt="Branded corporate office supplies and merchandise"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <p className="text-center text-sm font-medium text-muted-foreground">Office Supplies & Branding</p>
          </div>
        </div>
      </div>
    </section>
  )
}
