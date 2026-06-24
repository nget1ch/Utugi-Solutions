import Link from "next/link"
import { Flower2, Briefcase, ArrowRight } from "lucide-react"

const divisions = [
  {
    icon: Flower2,
    title: "Cosmetics & Beauty",
    href: "/cosmetics",
    description: "Premium skincare, beauty and personal care products for every routine.",
    items: ["Skincare Products", "Beauty Products", "Personal Care Items", "Cosmetic Accessories"],
  },
  {
    icon: Briefcase,
    title: "Office Supplies & Branding",
    href: "/office-supplies",
    description: "Everything your workplace needs, plus fully customized branding solutions.",
    items: [
      "Office Supplies",
      "Corporate Stationery",
      "Printers & Consumables",
      "Promotional Products",
      "Corporate Branding",
      "Custom Merchandise",
    ],
  },
]

export function Divisions() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          Two divisions, one trusted partner
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Utugi operates across two complementary divisions, giving your business a single, reliable source for beauty
          and business essentials.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {divisions.map((division) => (
          <div
            key={division.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary">
              <division.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-semibold">{division.title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{division.description}</p>
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {division.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={division.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Explore {division.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
