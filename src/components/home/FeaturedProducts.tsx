import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowRightIcon } from "@/components/icons";
import { products } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Products"
            title="Detergents & Cleaning Products"
            description="Trusted household brands, ready to order by phone or WhatsApp."
          />
          <Button href="/products" variant="ghost" className="shrink-0">
            View All Products
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
