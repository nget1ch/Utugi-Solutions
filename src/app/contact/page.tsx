import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { SocialLinks } from "@/components/social-links"
import { buildPageMetadata } from "@/lib/seo/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Contact Utugi Solutions for cosmetics, office supplies, corporate procurement and custom branding solutions. Located at Kimbo Matangi Road Junction Centre. Call +254 742 799 481.",
  path: "/contact",
  keywords: [
    "contact Utugi Solutions",
    "office supplies contact Kenya",
    "cosmetics supplier Kenya contact",
    "corporate branding Kenya contact",
    "Utugi phone number",
    "Utugi email",
  ],
})

const details = [
  { icon: Mail, label: "Email", value: "utugisolutions@gmail.com" },
  { icon: Phone, label: "Phone", value: "+254 742 799 481" },
  { icon: MapPin, label: "Location", value: "Kimbo Matangi Road Junction Centre" },
  { icon: Clock, label: "Hours", value: "Mon – Fri, 8:00 – 17:00" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk beauty, supplies and branding"
        description="Ask us anything about cosmetics, office supplies and custom branding. We'd love to help."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-tight">Get in touch</h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Reach out through the form or use the details below. Our team responds to most inquiries within one business
            day.
          </p>
          <ul className="mt-8 space-y-5">
            {details.map((detail) => (
              <li key={detail.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                  <detail.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium">{detail.label}</p>
                  <p className="text-sm text-muted-foreground">{detail.value}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-5">
            <h3 className="text-sm font-semibold">Follow us on social</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              See our latest products, behind-the-scenes and customer reviews on Instagram, TikTok and X.
            </p>
            <SocialLinks size="md" withLabels variant="col" className="mt-4" />
          </div>
        </div>

        <ContactForm />
      </section>
    </>
  )
}
