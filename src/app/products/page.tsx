import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageBackground } from "@/components/ui/PageBackground";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Rukn Al Kaaf's detergents & cleaning products and order by phone or WhatsApp.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title="Detergents & Cleaning Products"
        description="Call or WhatsApp us to place an order for any item below."
        breadcrumbLabel="Products"
      />

      <section className="relative isolate overflow-hidden bg-white py-12 sm:py-16">
        <PageBackground />
        <Container className="relative z-10">
          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-slate-600">Products coming soon.</p>
          )}
        </Container>
      </section>
    </>
  );
}
