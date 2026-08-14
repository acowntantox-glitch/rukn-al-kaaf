// Placeholder catalogue content. Replace with the client's actual trading
// categories, names, and descriptions before launch (see PRD section 35).
import type { Category } from "./types";

export const categories: Category[] = [
  {
    slug: "food-fmcg",
    name: "Food & FMCG",
    shortDescription:
      "Quality food products and fast-moving consumer goods sourced for regional distribution.",
    description:
      "We supply a curated range of food products and fast-moving consumer goods, connecting reliable manufacturers with retailers, wholesalers, and distributors across the region.",
    icon: "package",
  },
  {
    slug: "building-materials",
    name: "Building Materials",
    shortDescription:
      "Construction and building materials for contractors, developers, and suppliers.",
    description:
      "From core construction materials to finishing products, we help contractors and developers source dependable building materials at competitive terms.",
    icon: "building",
  },
  {
    slug: "industrial-products",
    name: "Industrial Products",
    shortDescription:
      "Industrial equipment and supplies for manufacturing and processing businesses.",
    description:
      "We trade a wide range of industrial products and supplies, supporting manufacturing and processing businesses with consistent, quality-checked sourcing.",
    icon: "cog",
  },
  {
    slug: "consumer-products",
    name: "Consumer Products",
    shortDescription:
      "Everyday consumer goods sourced for retail and wholesale channels.",
    description:
      "Our consumer products range is sourced to meet the needs of retail and wholesale buyers looking for reliable supply and consistent quality.",
    icon: "cube",
  },
  {
    slug: "electronics",
    name: "Electronics",
    shortDescription:
      "Consumer and commercial electronics sourced from trusted manufacturers.",
    description:
      "We connect businesses with trusted manufacturers of consumer and commercial electronics, supporting bulk and distribution requirements.",
    icon: "chip",
  },
  {
    slug: "household-products",
    name: "Household Products",
    shortDescription:
      "Household and homecare products for retail, hospitality, and distribution.",
    description:
      "A broad selection of household and homecare products, supplied reliably for retail, hospitality, and distribution partners.",
    icon: "home",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
