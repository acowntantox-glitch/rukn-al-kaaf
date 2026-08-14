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

export type Product = {
  slug: string;
  name: string;
  brand: string;
  size?: string;
  image?: string;
};
