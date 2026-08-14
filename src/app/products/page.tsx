import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsList } from "@/components/products/ProductsList";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Rukn Al Kaaf General Trading's product categories, from food & FMCG to industrial and building materials.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsList />
    </Suspense>
  );
}
