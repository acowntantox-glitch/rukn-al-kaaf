import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { ProductCard } from "@/components/products/ProductCard";
import { ChevronRightIcon, ArrowRightIcon } from "@/components/icons";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { getCategoryBySlug } from "@/data/categories";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);
  const relatedProducts = getRelatedProducts(product);
  const detailFields = [
    { label: "Brand", value: product.brand },
    { label: "Origin", value: product.origin },
    { label: "Packaging", value: product.packaging },
    { label: "Availability", value: product.availability },
  ].filter((field) => field.value);

  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50 py-6">
        <Container>
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-navy-900">
              Home
            </Link>
            <ChevronRightIcon className="h-3 w-3" />
            <Link href="/products" className="hover:text-navy-900">
              Products
            </Link>
            {category ? (
              <>
                <ChevronRightIcon className="h-3 w-3" />
                <Link href={`/products?category=${category.slug}`} className="hover:text-navy-900">
                  {category.name}
                </Link>
              </>
            ) : null}
            <ChevronRightIcon className="h-3 w-3" />
            <span className="font-medium text-navy-900">{product.name}</span>
          </nav>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <PlaceholderVisual
            icon={category?.icon ?? "package"}
            tone="navy"
            className="aspect-square w-full rounded-2xl"
          />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              {category ? (
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  {category.name}
                </span>
              ) : null}
              <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                {product.name}
              </h1>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {product.description}
              </p>
            </div>

            {detailFields.length > 0 ? (
              <dl className="grid grid-cols-1 gap-x-6 gap-y-4 rounded-xl border border-slate-200 p-6 sm:grid-cols-2">
                {detailFields.map((field) => (
                  <div key={field.label} className="flex flex-col gap-1">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {field.label}
                    </dt>
                    <dd className="text-sm font-medium text-navy-900">{field.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            {product.specs.length > 0 ? (
              <div className="flex flex-col gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Specifications
                </h2>
                <div className="divide-y divide-slate-200 rounded-xl border border-slate-200">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between gap-4 px-5 py-3 text-sm"
                    >
                      <span className="text-slate-500">{spec.label}</span>
                      <span className="font-medium text-navy-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <Button href={`/request-quote?product=${product.slug}`} size="lg" className="w-fit">
              Request a Quote
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="border-t border-slate-200 bg-slate-50 py-12 sm:py-16">
          <Container className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900">
              Related Products
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <ProductCard key={related.slug} product={related} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
