import Link from "next/link";
import { categories } from "@/data/categories";

export function CategoryFilter({ activeSlug }: { activeSlug?: string }) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products by category">
      <Link
        href="/products"
        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
          !activeSlug
            ? "border-navy-900 bg-navy-900 text-white"
            : "border-slate-200 text-slate-600 hover:border-navy-900 hover:text-navy-900"
        }`}
        aria-selected={!activeSlug}
      >
        All Products
      </Link>
      {categories.map((category) => {
        const isActive = category.slug === activeSlug;
        return (
          <Link
            key={category.slug}
            href={`/products?category=${category.slug}`}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-slate-200 text-slate-600 hover:border-navy-900 hover:text-navy-900"
            }`}
            aria-selected={isActive}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
