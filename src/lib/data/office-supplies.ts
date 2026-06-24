export type OfficeCategory =
  | "Office Supplies"
  | "Branding Products"
  | "Corporate Gifts"
  | "Promotional Materials"

export interface OfficeProduct {
  id: string
  name: string
  description: string
  category: OfficeCategory
  tags: string[]
  image: string
}

export const officeCategories: OfficeCategory[] = [
  "Office Supplies",
  "Branding Products",
  "Corporate Gifts",
  "Promotional Materials",
]

export const officeProducts: OfficeProduct[] = [
  {
    id: "os-001",
    name: "Premium Bond Paper",
    description: "High-grade A4 printing paper for everyday business use.",
    category: "Office Supplies",
    tags: ["Stationery", "Printers & Consumables"],
    image: "/images/products/os-001.jpg",
  },
  {
    id: "os-002",
    name: "Desktop Laser Printer",
    description: "Reliable monochrome laser printer with low cost-per-page.",
    category: "Office Supplies",
    tags: ["Printers & Consumables"],
    image: "/images/products/os-002.jpg",
  },
  {
    id: "os-003",
    name: "Toner & Ink Cartridges",
    description: "Genuine consumables compatible with major printer brands.",
    category: "Office Supplies",
    tags: ["Printers & Consumables"],
    image: "/images/products/os-003.jpg",
  },
  {
    id: "os-004",
    name: "Executive Desk Organizer Set",
    description: "Keep workstations tidy with a coordinated stationery set.",
    category: "Office Supplies",
    tags: ["Stationery", "Office Equipment"],
    image: "/images/products/os-004.jpg",
  },
  {
    id: "br-001",
    name: "Branded Notebooks",
    description: "Custom-printed notebooks featuring your logo and colors.",
    category: "Branding Products",
    tags: ["Product Branding", "Stationery"],
    image: "/images/products/br-001.jpg",
  },
  {
    id: "br-002",
    name: "Branded Pens",
    description: "Smooth-writing pens personalized with your brand identity.",
    category: "Branding Products",
    tags: ["Product Branding"],
    image: "/images/products/br-002.jpg",
  },
  {
    id: "br-003",
    name: "Branded Mugs",
    description: "Durable ceramic mugs printed with your company logo.",
    category: "Branding Products",
    tags: ["Product Branding", "Corporate Branding"],
    image: "/images/products/br-003.jpg",
  },
  {
    id: "br-004",
    name: "Branded Apparel",
    description: "Custom polos, t-shirts and uniforms with embroidery or print.",
    category: "Branding Products",
    tags: ["Corporate Branding", "Customized Merchandise"],
    image: "/images/products/br-004.jpg",
  },
  {
    id: "cg-001",
    name: "Corporate Gift Hampers",
    description: "Curated gift sets for clients, partners and staff.",
    category: "Corporate Gifts",
    tags: ["Corporate Gifts"],
    image: "/images/products/cg-001.jpg",
  },
  {
    id: "cg-002",
    name: "Executive Pen & Diary Set",
    description: "Elegant branded gift set for premium corporate occasions.",
    category: "Corporate Gifts",
    tags: ["Corporate Gifts", "Product Branding"],
    image: "/images/products/cg-002.jpg",
  },
  {
    id: "cg-003",
    name: "Branded Drinkware Set",
    description: "Insulated bottles and tumblers customized with your brand.",
    category: "Corporate Gifts",
    tags: ["Corporate Gifts", "Customized Merchandise"],
    image: "/images/products/cg-003.jpg",
  },
  {
    id: "pm-001",
    name: "Promotional Tote Bags",
    description: "Reusable branded totes ideal for events and giveaways.",
    category: "Promotional Materials",
    tags: ["Promotional Products", "Customized Merchandise"],
    image: "/images/products/pm-001.jpg",
  },
  {
    id: "pm-002",
    name: "Event Banners & Roll-ups",
    description: "Eye-catching pull-up banners for exhibitions and launches.",
    category: "Promotional Materials",
    tags: ["Promotional Products", "Brand Identity Production"],
    image: "/images/products/pm-002.jpg",
  },
  {
    id: "pm-003",
    name: "Branded Lanyards & Badges",
    description: "Conference-ready lanyards and ID badges with your identity.",
    category: "Promotional Materials",
    tags: ["Promotional Products"],
    image: "/images/products/pm-003.jpg",
  },
  {
    id: "pm-004",
    name: "Custom Stickers & Labels",
    description: "Vinyl stickers and product labels in any shape or size.",
    category: "Promotional Materials",
    tags: ["Promotional Products", "Product Branding"],
    image: "/images/products/pm-004.jpg",
  },
]
