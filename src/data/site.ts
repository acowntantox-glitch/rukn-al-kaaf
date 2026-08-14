export const siteConfig = {
  name: "Rukn Al Kaaf General Trading",
  shortName: "Rukn Al Kaaf",
  tagline: "Quality Cleaning Products Since 2011",
  description:
    "Established in 2011, Rukn Al Kaaf General Trading is a UAE-based trading company supplying quality detergents and cleaning products.",
  url: "https://www.ruknalkaaf.com",
  locale: "en",
  contact: {
    phone: "+97165243828",
    phoneDisplay: "+971 6 524 3828",
    phoneHref: "tel:+97165243828",
    whatsappDisplay: "+971 55 178 6854",
    whatsappHref: "https://wa.me/971551786854",
    address: "Bin Thani Residence, Al Twar Fifth, Al Qusais, Dubai, United Arab Emirates",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Bin+Thani+Residence+Al+Twar+Fifth+Al+Qusais+Dubai+UAE&output=embed",
  },
} as const;

export function whatsappLinkWithMessage(message: string) {
  return `${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: navLinks,
};
