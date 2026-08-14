import Link from "next/link";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { ArrowRightIcon } from "@/components/icons";
import type { Product } from "@/data/types";
import { getCategoryBySlug } from "@/data/categories";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategoryBySlug(product.categorySlug);

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
    >
      <PlaceholderVisual
        icon={category?.icon ?? "package"}
        tone="light"
        className="aspect-[4/3] w-full"
      />
      <div className="flex flex-1 flex-col gap-2 p-6">
        {category ? (
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            {category.name}
          </span>
        ) : null}
        <h3 className="text-lg font-semibold text-navy-900">{product.name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{product.shortDescription}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-navy-900 group-hover:gap-2.5 transition-all">
          View Details
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}
