import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Rukn Al Kaaf General Trading's product categories, from food & FMCG to industrial and building materials.",
};

type ProductsPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category: categorySlug } = await searchParams;
  const activeCategory = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  const filteredProducts = activeCategory
    ? products.filter((product) => product.categorySlug === activeCategory.slug)
    : products;

  return (
    <>
      <PageHeader
        eyebrow="Catalogue"
        title={activeCategory ? activeCategory.name : "Products"}
        description={
          activeCategory
            ? activeCategory.description
            : "A digital catalogue of Rukn Al Kaaf's trading categories and products. For pricing and availability, request a quote for any item."
        }
        breadcrumbLabel="Products"
      />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-8">
          <CategoryFilter activeSlug={activeCategory?.slug} />

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-slate-600">No products found in this category yet.</p>
          )}
        </Container>
      </section>
    </>
  );
}
