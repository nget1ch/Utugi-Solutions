import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react"
import { SocialLinks } from "@/components/social-links"

const sections = [
  {
    title: "Divisions",
    links: [
      { label: "Cosmetics", href: "/cosmetics" },
      { label: "Office Supplies & Branding", href: "/office-supplies" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

const businessHours = [
  { day: "Mon – Fri", hours: "8:00 – 17:00" },
  { day: "Saturday", hours: "9:00 – 13:00" },
  { day: "Sunday", hours: "Closed" },
]

// Google Maps directions link for the business location
const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=Kimbo+Matangi+Road+Junction+Centre+Thika+Road+Kenya"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          {/* Top: contact details */}
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> utugisolutions@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +254 742 799 481
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Kimbo Matangi Road Junction Centre
            </li>
          </ul>

          {/* Middle: socials */}
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
              Follow us
            </p>
            <SocialLinks size="sm" className="mt-2" />
          </div>

          {/* Bottom: logo + tagline running left-to-right (horizontal) */}
          <div className="mt-8 flex items-start gap-4 border-t border-border pt-6">
            <Link href="/" className="flex shrink-0 items-center gap-2">
              <Image
                src="/images/utugi-logo.jpg"
                alt="Utugi Solutions"
                width={120}
                height={120}
                className="h-12 w-auto"
              />
              <span className="sr-only">Utugi Solutions</span>
            </Link>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              Your trusted partner for beauty, office supplies and branding solutions. From premium cosmetics to
              custom-branded merchandise, we help your business look and feel its best.
            </p>
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold">{section.title}</h3>
            <ul className="mt-4 space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold">
            <Clock className="h-4 w-4 text-primary" />
            Business Hours
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {businessHours.map((row) => (
              <li key={row.day} className="flex items-baseline justify-between gap-3">
                <span className="text-muted-foreground">{row.day}</span>
                <span
                  className={
                    row.hours === "Closed"
                      ? "font-medium text-muted-foreground/70"
                      : "font-medium text-foreground"
                  }
                >
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>
          <a
            href={directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Get Directions
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          {"\u00A9"} {new Date().getFullYear()} Utugi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}