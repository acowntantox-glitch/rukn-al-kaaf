// Starter catalogue entries for the detergents & cleaning products business.
// Sizes/variants are left as "Contact for details" until the client supplies
// the real product list and photos — see PRD note in AGENTS.md workflow.
import type { Product } from "./types";

export const products: Product[] = [
  {
    slug: "fairy-dishwashing-liquid",
    name: "Dishwashing Liquid",
    brand: "Fairy",
    size: "600ml",
    image: "/products/fairy.jpg",
  },
  {
    slug: "tide-laundry-detergent",
    name: "Laundry Detergent",
    brand: "Tide",
    size: "64 Loads",
    image: "/products/tide.jpg",
  },
  {
    slug: "ariel-laundry-detergent",
    name: "Laundry Detergent",
    brand: "Ariel",
    image: "/products/ariel.jpg",
  },
  {
    slug: "dettol-antiseptic-liquid",
    name: "Antiseptic Liquid",
    brand: "Dettol",
    image: "/products/dettol.jpg",
  },
];
