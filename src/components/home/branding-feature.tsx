import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const brandingItems = [
  "Branded notebooks",
  "Branded pens",
  "Branded mugs",
  "Branded apparel",
  "Corporate gifts",
  "Promotional merchandise",
  "Custom office materials",
  "Company-branded products",
]

export function BrandingFeature() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24 lg:px-8">
        <div className="order-2 overflow-hidden rounded-2xl border border-border bg-white lg:order-1">
          <Image
            src="/images/branding-showcase.jpg"
            alt="Custom-branded corporate apparel with embroidered company logo"
            width={900}
            height={900}
            className="mx-auto h-full w-full object-contain"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary">
            Featured Service
          </span>
          <h2 className="mt-6 text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Branding, made to your specifications
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Our branding service customizes products to match your brand identity exactly. From a single batch of
            branded pens to a full corporate rollout, we handle the design and production end to end.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {brandingItems.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-8">
            <Link href="/office-supplies">Start a Branding Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
