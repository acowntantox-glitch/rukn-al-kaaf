import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { categories } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Trade"
            title="Product Categories"
            description="A trusted range of trading categories, sourced and supplied to meet business requirements across sectors."
          />
          <Button href="/products" variant="ghost" className="shrink-0">
            View All Products
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products?category=${category.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
            >
              <PlaceholderVisual icon={category.icon} tone="navy" className="aspect-[16/10] w-full" />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold text-navy-900">{category.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {category.shortDescription}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 group-hover:gap-2.5 transition-all">
                  View Products
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
