export type IconName =
  | "package"
  | "building"
  | "cog"
  | "cube"
  | "chip"
  | "home"
  | "globe"
  | "truck"
  | "handshake"
  | "search"
  | "shield";

export type Category = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: IconName;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  specs: ProductSpec[];
  brand?: string;
  origin?: string;
  packaging?: string;
  availability?: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  benefits: string[];
  icon: IconName;
};
