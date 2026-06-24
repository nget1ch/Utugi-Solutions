import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Target, Eye, Handshake } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { buildPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about Utugi Solutions — Kenya's trusted partner for office supplies, corporate branding, promotional merchandise and cosmetics. Discover our mission, vision and values.",
  path: "/about",
  keywords: [
    "about Utugi Solutions",
    "office supplies company Kenya",
    "corporate branding company Nairobi",
    "Utugi mission vision",
  ],
})

const principles = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To be the dependable single source for beauty products, office supplies and branding solutions that help businesses operate and present themselves with confidence.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A future where every organization can access quality cosmetics, corporate supplies and customized branding without the hassle of juggling multiple vendors.",
  },
  {
    icon: Handshake,
    title: "Our Promise",
    description:
      "Reliable corporate procurement, professional product personalization and customized business products delivered with care.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Utugi"
        title="Beauty and business, brought together"
        description="Utugi is a trusted partner for organizations that want quality cosmetics, dependable office supplies, and standout branding from one place."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border">
          <Image
            src="/images/about-team.jpg"
            alt="Utugi branded display of cosmetics, office supplies, and custom merchandise on an office desk"
            width={900}
            height={700}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight">Our story</h2>
          <div className="mt-4 space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Utugi began with a simple goal: make it easier for businesses to source the products they rely on every
              day. Over time, we grew into two complementary divisions, cosmetics and office supplies and branding,
              serving retailers, offices and growing companies alike.
            </p>
            <p>
              Today our work spans corporate procurement, customized business products and branding solutions. We supply
              office essentials and stationery, then take it further by personalizing those products with your brand,
              from branded notebooks and pens to apparel and corporate gifts.
            </p>
            <p>
              Whether you need a shipment of skincare for your shelves or a full set of company-branded merchandise, we
              bring reliability, quality and attention to detail to every order.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <principle.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-serif text-2xl font-semibold sm:text-3xl">Let&apos;s work together</h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Tell us about your beauty, office supply or branding needs and our team will help you find the right solution.
        </p>
        <Button asChild size="lg" className="mt-2">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </>
  )
}
