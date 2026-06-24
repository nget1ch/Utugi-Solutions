import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Cosmetics",
    href: "/cosmetics",
    image: "/images/hero-cosmetics.jpg",
    description: "Skincare, beauty and personal care products from trusted names.",
  },
  {
    title: "Office Supplies",
    href: "/office-supplies",
    image: "/images/hero-office.jpg",
    description: "Stationery, printers, consumables and everyday office essentials.",
  },
  {
    title: "Branding Solutions",
    href: "/office-supplies",
    image: "/images/branding-showcase.jpg",
    description: "Custom-branded merchandise, corporate gifts and promotional products.",
  },
]

export function FeaturedServices() {
  return (
    <section className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Featured services
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Three core areas where Utugi helps your business thrive.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold">{service.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
