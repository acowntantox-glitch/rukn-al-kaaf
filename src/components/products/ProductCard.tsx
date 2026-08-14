import Image from "next/image";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, whatsappLinkWithMessage } from "@/data/site";
import type { Product } from "@/data/types";

export function ProductCard({ product }: { product: Product }) {
  const whatsappHref = whatsappLinkWithMessage(
    `Hi, I'd like to order: ${product.brand} ${product.name}`
  );

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-gold-400">
      {product.image ? (
        <div className="relative aspect-[4/3] w-full bg-white">
          <Image
            src={product.image}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-6"
          />
        </div>
      ) : (
        <PlaceholderVisual icon="package" tone="light" className="aspect-[4/3] w-full" />
      )}
      <div className="flex flex-1 flex-col gap-1 p-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
          {product.brand}
        </span>
        <h3 className="text-lg font-semibold text-navy-900">{product.name}</h3>
        <p className="text-sm text-slate-500">{product.size ?? "Contact for available sizes"}</p>

        <div className="mt-4 flex flex-col gap-2">
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800"
          >
            <PhoneIcon className="h-4 w-4" />
            Call to Order
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1ebd5a]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp to Order
          </a>
        </div>
      </div>
    </div>
  );
}
