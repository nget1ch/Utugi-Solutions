export type CosmeticCategory =
  | "Skincare"
  | "Hair Care"
  | "Makeup"
  | "Personal Care"

export interface CosmeticProduct {
  id: string
  rank: number
  name: string
  description: string
  examples: string
  category: CosmeticCategory
  image: string
}

export const cosmeticCategories: CosmeticCategory[] = [
  "Skincare",
  "Hair Care",
  "Makeup",
  "Personal Care",
]

export const cosmeticProducts: CosmeticProduct[] = [
  // ---------- Skincare ----------
  {
    id: "lotions",
    rank: 1,
    name: "Body Lotions & Moisturizers",
    description:
      "Daily-use body lotions and moisturizers that keep skin soft, hydrated and supple throughout the day. Available in popular brands and bulk-friendly sizes for retail and wholesale.",
    examples: "Nivea, Vaseline, Garnier lotions",
    category: "Skincare",
    image: "/images/products/cosmetics/lotions.jpg",
  },
  {
    id: "serums",
    rank: 2,
    name: "Face Serums",
    description:
      "Targeted treatment serums for brightening, anti-aging and blemish control. Lightweight formulas that absorb quickly and deliver active ingredients deep into the skin.",
    examples: "Vitamin C, Niacinamide, Retinol serums",
    category: "Skincare",
    image: "/images/products/cosmetics/serums.jpg",
  },
  {
    id: "sunscreens",
    rank: 3,
    name: "Sunscreens",
    description:
      "Broad-spectrum facial sunscreens that protect against UVA and UVB damage. Non-greasy, fast-absorbing formulas suitable for everyday wear under makeup.",
    examples: "SPF 30–50 facial sunscreens",
    category: "Skincare",
    image: "/images/products/cosmetics/sunscreens.jpg",
  },
  {
    id: "cleansers",
    rank: 4,
    name: "Facial Cleansers",
    description:
      "Gentle daily cleansers that remove dirt, oil and makeup without stripping the skin barrier. Suitable for normal, dry, oily and sensitive skin types.",
    examples: "CeraVe, Garnier, Cetaphil cleansers",
    category: "Skincare",
    image: "/images/products/cosmetics/cleansers.jpg",
  },
  {
    id: "face-creams",
    rank: 5,
    name: "Face Creams & Moisturizers",
    description:
      "Nourishing day and night creams that restore moisture, smooth fine lines and improve skin elasticity. Rich yet non-greasy formulas for healthy, radiant skin.",
    examples: "Olay, CeraVe, Nivea face creams",
    category: "Skincare",
    image: "/images/products/cosmetics/face-creams.jpg",
  },
  {
    id: "face-masks",
    rank: 19,
    name: "Face Masks & Sheet Masks",
    description:
      "Hydrating, brightening and acne-control masks for an at-home spa experience. Single-use sheet masks and tubed clay or cream masks from trusted skincare brands.",
    examples: "Hydrating and acne-control masks",
    category: "Skincare",
    image: "/images/products/cosmetics/face-masks.jpg",
  },

  // ---------- Hair Care ----------
  {
    id: "hair-food",
    rank: 6,
    name: "Hair Food & Hair Oils",
    description:
      "Natural and herbal hair oils that nourish the scalp, promote growth and restore shine. Includes coconut, castor and herbal blends for everyday use.",
    examples: "Coconut oil, castor oil, hair growth oils",
    category: "Hair Care",
    image: "/images/products/cosmetics/hair-food.jpg",
  },
  {
    id: "braids",
    rank: 7,
    name: "Braids & Hair Extensions",
    description:
      "Quality braiding hair, weaves and wigs in a wide range of colors, lengths and textures. Sourced from trusted brands for stylists, salons and personal use.",
    examples: "Darling braids, weaves, wigs",
    category: "Hair Care",
    image: "/images/products/cosmetics/braids.jpg",
  },
  {
    id: "styling-gels",
    rank: 8,
    name: "Styling Gels",
    description:
      "Strong-hold and edge-control styling gels that keep hairstyles in place all day without flaking or stiffness. Suitable for natural, relaxed and braided hair.",
    examples: "Eco Styler, Nice & Lovely gels",
    category: "Hair Care",
    image: "/images/products/cosmetics/styling-gels.png",
  },
  {
    id: "shampoos",
    rank: 9,
    name: "Shampoos",
    description:
      "Anti-dandruff, moisturizing and clarifying shampoos for every hair type and scalp concern. Gently cleanse while keeping hair healthy and manageable.",
    examples: "Anti-dandruff and moisturizing shampoos",
    category: "Hair Care",
    image: "/images/products/cosmetics/shampoos.jpg",
  },
  {
    id: "conditioners",
    rank: 10,
    name: "Hair Conditioners",
    description:
      "Repair, strengthen and deep-conditioning treatments that restore softness and shine to damaged or chemically-treated hair. Daily-use and intensive formulas available.",
    examples: "Repair and strengthening conditioners",
    category: "Hair Care",
    image: "/images/products/cosmetics/conditioners.jpg",
  },

  // ---------- Makeup ----------
  {
    id: "foundations",
    rank: 11,
    name: "Foundations",
    description:
      "Buildable-coverage foundations in a wide range of shades for every skin tone. Lightweight, long-wearing formulas that deliver a natural, flawless finish.",
    examples: "Maybelline Fit Me, SuzieBeauty",
    category: "Makeup",
    image: "/images/products/cosmetics/foundations.jpg",
  },
  {
    id: "face-powders",
    rank: 12,
    name: "Face Powders",
    description:
      "Compact and loose face powders that set makeup, control shine and blur imperfections. Available in sheer and tinted shades for all skin tones.",
    examples: "Compact and loose powders",
    category: "Makeup",
    image: "/images/products/cosmetics/face-powders.jpg",
  },
  {
    id: "lipsticks",
    rank: 13,
    name: "Lipsticks",
    description:
      "Matte, satin and long-lasting lipsticks in a curated range of nudes, reds, pinks and bolds. Smooth-gliding formulas with rich, even color payoff.",
    examples: "Matte and long-lasting lipsticks",
    category: "Makeup",
    image: "/images/products/cosmetics/lipsticks.jpg",
  },
  {
    id: "lip-glosses",
    rank: 14,
    name: "Lip Glosses",
    description:
      "Clear and tinted lip glosses that add shine, fullness and a hint of color. Non-sticky, comfortable formulas for everyday wear or layered over lipstick.",
    examples: "Clear and tinted glosses",
    category: "Makeup",
    image: "/images/products/cosmetics/lip-glosses.jpg",
  },
  {
    id: "eyebrow-pencils",
    rank: 15,
    name: "Eyebrow Pencils",
    description:
      "Precise, blendable eyebrow pencils that fill, shape and define brows for a polished, natural look. Long-wearing shades to match any hair color.",
    examples: "Davis eyebrow pencils",
    category: "Makeup",
    image: "/images/products/cosmetics/eyebrow-pencils.jpg",
  },
  {
    id: "mascaras",
    rank: 16,
    name: "Mascaras",
    description:
      "Volumizing, lengthening and curling mascaras for defined, full lashes. Smudge-resistant, buildable formulas that come off easily at the end of the day.",
    examples: "Maybelline, Essence mascaras",
    category: "Makeup",
    image: "/images/products/cosmetics/mascaras.jpg",
  },

  // ---------- Personal Care ----------
  {
    id: "deodorants",
    rank: 17,
    name: "Deodorants",
    description:
      "Roll-on and stick deodorants that offer all-day freshness and odor protection. Gentle on skin, with a range of fresh and subtle fragrances.",
    examples: "Nivea, Rexona",
    category: "Personal Care",
    image: "/images/products/cosmetics/deodorants.jpg",
  },
  {
    id: "soaps",
    rank: 18,
    name: "Beauty Soaps",
    description:
      "Cleansing and nourishing beauty bars enriched with natural ingredients like shea butter, turmeric and black soap extracts for clear, glowing skin.",
    examples: "Dudu Osun, Turmeric soaps",
    category: "Personal Care",
    image: "/images/products/cosmetics/soaps.jpg",
  },
  {
    id: "perfumes",
    rank: 20,
    name: "Perfumes & Body Mists",
    description:
      "Affordable everyday fragrances and body mists in floral, fresh, warm and oriental scent families. Perfect for personal use, gifting or retail resale.",
    examples: "Affordable fragrances and mists",
    category: "Personal Care",
    image: "/images/products/cosmetics/perfumes.jpg",
  },
]
