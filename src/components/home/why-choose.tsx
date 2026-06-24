import { Palette, Sparkles, Truck, ShieldCheck } from "lucide-react"

const values = [
  {
    icon: Palette,
    title: "Custom Branding Solutions",
    description: "Bespoke branding tailored to your identity, from concept to finished product.",
  },
  {
    icon: Sparkles,
    title: "Professional Product Personalization",
    description: "Precise, high-quality personalization across merchandise and corporate items.",
  },
  {
    icon: Truck,
    title: "Corporate Supply Reliability",
    description: "Dependable fulfillment and restocking that keeps your operations running.",
  },
  {
    icon: ShieldCheck,
    title: "Quality You Can Trust",
    description: "Carefully sourced cosmetics and office products held to a high standard.",
  },
]

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Why choose Utugi</h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          We combine quality products with dependable service and standout branding to support your business at every
          step.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div key={value.title} className="rounded-2xl border border-border bg-card p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
              <value.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{value.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
