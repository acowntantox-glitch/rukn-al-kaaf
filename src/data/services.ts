// Placeholder services content. Confirm actual service offerings with the
// client before launch (see PRD section 17).
import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "import-export",
    title: "Import & Export",
    description:
      "End-to-end international sourcing and trading capabilities, connecting suppliers and buyers across the GCC and beyond.",
    benefits: [
      "International supplier network",
      "Documentation & compliance support",
      "Reliable shipping coordination",
    ],
    icon: "globe",
  },
  {
    slug: "wholesale-distribution",
    title: "Wholesale & Distribution",
    description:
      "Consistent, reliable supply solutions built for businesses and distributors that need volume and dependability.",
    benefits: [
      "Bulk order fulfilment",
      "Consistent stock availability",
      "Flexible delivery arrangements",
    ],
    icon: "truck",
  },
  {
    slug: "product-sourcing",
    title: "Product Sourcing",
    description:
      "We help customers source products that match their exact requirements, from specification to supplier selection.",
    benefits: [
      "Requirement-based sourcing",
      "Supplier vetting & quality checks",
      "Competitive pricing",
    ],
    icon: "search",
  },
  {
    slug: "supply-procurement",
    title: "Supply & Procurement",
    description:
      "Connecting businesses with the right products and suppliers through a structured, transparent procurement process.",
    benefits: [
      "Dedicated procurement support",
      "Vetted supplier partnerships",
      "Transparent process & communication",
    ],
    icon: "handshake",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
