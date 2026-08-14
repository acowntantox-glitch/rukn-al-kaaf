import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/products", "/services", "/contact", "/request-quote"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })
  );

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.url}/products/${product.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
