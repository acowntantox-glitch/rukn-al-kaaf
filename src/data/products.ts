// Placeholder catalogue content. Replace with the client's actual products,
// specifications, and imagery before launch (see PRD section 35).
import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "premium-rice-varieties",
    name: "Premium Rice Varieties",
    categorySlug: "food-fmcg",
    shortDescription:
      "Bulk-grade rice varieties sourced for wholesale and distribution.",
    description:
      "A range of premium rice varieties sourced from trusted growers and packers, suitable for bulk wholesale, retail distribution, and export requirements.",
    specs: [
      { label: "Type", value: "Basmati, Long Grain, Parboiled" },
      { label: "Grade", value: "Premium / Standard" },
      { label: "Supply", value: "Container / Bulk" },
    ],
    brand: "Multiple sourcing brands",
    origin: "India, Pakistan, Thailand",
    packaging: "5kg, 25kg, 50kg bags; bulk container",
    availability: "In stock / Made to order",
  },
  {
    slug: "packaged-food-essentials",
    name: "Packaged Food Essentials",
    categorySlug: "food-fmcg",
    shortDescription:
      "Everyday packaged food essentials for retail and wholesale buyers.",
    description:
      "A curated selection of packaged food essentials, sourced for consistency, shelf stability, and compliance with regional food regulations.",
    specs: [
      { label: "Category", value: "Packaged & Ambient Foods" },
      { label: "Shelf Life", value: "12–24 months" },
    ],
    origin: "GCC and international suppliers",
    packaging: "Retail and bulk case packs",
    availability: "In stock / Made to order",
  },
  {
    slug: "cement-and-aggregates",
    name: "Cement & Aggregates",
    categorySlug: "building-materials",
    shortDescription:
      "Core construction materials for contractors and developers.",
    description:
      "Reliable supply of cement and construction aggregates for residential, commercial, and infrastructure projects across the region.",
    specs: [
      { label: "Type", value: "OPC, Aggregates, Sand" },
      { label: "Supply", value: "Bulk / Bagged" },
    ],
    origin: "UAE and GCC suppliers",
    packaging: "Bagged or bulk delivery",
    availability: "Made to order",
  },
  {
    slug: "steel-and-metal-products",
    name: "Steel & Metal Products",
    categorySlug: "building-materials",
    shortDescription:
      "Structural steel and metal products for construction projects.",
    description:
      "Structural and finishing steel products sourced to meet project specifications, from reinforcement bars to fabricated metal components.",
    specs: [
      { label: "Type", value: "Rebar, Pipes, Sheets" },
      { label: "Standard", value: "As per project specification" },
    ],
    origin: "Regional and international mills",
    packaging: "Bundled / palletized",
    availability: "Made to order",
  },
  {
    slug: "industrial-machinery-parts",
    name: "Industrial Machinery Parts",
    categorySlug: "industrial-products",
    shortDescription:
      "Machinery components and spares for manufacturing operations.",
    description:
      "Quality-checked machinery parts and components sourced for manufacturing and processing operations, supplied with technical documentation.",
    specs: [
      { label: "Category", value: "Machinery Components & Spares" },
      { label: "Compliance", value: "Manufacturer specification" },
    ],
    origin: "International manufacturers",
    packaging: "Export-grade crating",
    availability: "Made to order",
  },
  {
    slug: "safety-and-protective-equipment",
    name: "Safety & Protective Equipment",
    categorySlug: "industrial-products",
    shortDescription:
      "Workplace safety equipment for industrial and construction sites.",
    description:
      "Certified personal protective equipment and workplace safety supplies for industrial, construction, and facilities operations.",
    specs: [
      { label: "Category", value: "PPE & Site Safety" },
      { label: "Certification", value: "Available on request" },
    ],
    origin: "Certified manufacturers",
    packaging: "Retail and bulk cartons",
    availability: "In stock / Made to order",
  },
  {
    slug: "home-and-personal-care",
    name: "Home & Personal Care",
    categorySlug: "consumer-products",
    shortDescription:
      "Consumer home and personal care goods for retail distribution.",
    description:
      "A reliable range of home and personal care products sourced for retail chains, distributors, and wholesale buyers.",
    specs: [{ label: "Category", value: "Home & Personal Care" }],
    origin: "GCC and international suppliers",
    packaging: "Retail and bulk case packs",
    availability: "In stock / Made to order",
  },
  {
    slug: "general-consumer-goods",
    name: "General Consumer Goods",
    categorySlug: "consumer-products",
    shortDescription:
      "General merchandise sourced for retail and wholesale channels.",
    description:
      "A broad assortment of general consumer goods sourced to meet seasonal and standing retail and wholesale demand.",
    specs: [{ label: "Category", value: "General Merchandise" }],
    origin: "Multiple sourcing regions",
    packaging: "Retail and bulk case packs",
    availability: "Made to order",
  },
  {
    slug: "consumer-electronics",
    name: "Consumer Electronics",
    categorySlug: "electronics",
    shortDescription:
      "Consumer electronics sourced from trusted manufacturers for bulk supply.",
    description:
      "Consumer electronics sourced from established manufacturers, suitable for retail distribution and bulk supply agreements.",
    specs: [
      { label: "Category", value: "Consumer Electronics" },
      { label: "Warranty", value: "Manufacturer warranty" },
    ],
    origin: "International manufacturers",
    packaging: "Retail and export packaging",
    availability: "Made to order",
  },
  {
    slug: "commercial-electronic-equipment",
    name: "Commercial Electronic Equipment",
    categorySlug: "electronics",
    shortDescription:
      "Commercial-grade electronic equipment for business and facility use.",
    description:
      "Commercial-grade electronic equipment sourced for offices, facilities, and hospitality operations, with supply and installation support available.",
    specs: [{ label: "Category", value: "Commercial Electronics" }],
    origin: "International manufacturers",
    packaging: "Export-grade packaging",
    availability: "Made to order",
  },
  {
    slug: "cleaning-and-homecare-supplies",
    name: "Cleaning & Homecare Supplies",
    categorySlug: "household-products",
    shortDescription:
      "Cleaning and homecare supplies for retail, hospitality, and distribution.",
    description:
      "A dependable range of cleaning and homecare supplies for retail, hospitality, and facilities management partners.",
    specs: [{ label: "Category", value: "Cleaning & Homecare" }],
    origin: "GCC and international suppliers",
    packaging: "Retail and bulk case packs",
    availability: "In stock / Made to order",
  },
  {
    slug: "household-essentials",
    name: "Household Essentials",
    categorySlug: "household-products",
    shortDescription:
      "Everyday household essentials sourced for consistent retail supply.",
    description:
      "Everyday household essentials sourced for consistent supply to retail, wholesale, and distribution partners.",
    specs: [{ label: "Category", value: "Household Essentials" }],
    origin: "Multiple sourcing regions",
    packaging: "Retail and bulk case packs",
    availability: "In stock / Made to order",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter(
      (item) =>
        item.categorySlug === product.categorySlug && item.slug !== product.slug
    )
    .slice(0, limit);
}
