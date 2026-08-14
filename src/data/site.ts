export const siteConfig = {
  name: "Rukn Al Kaaf General Trading",
  shortName: "Rukn Al Kaaf",
  tagline: "Connecting Markets. Delivering Opportunities.",
  description:
    "Rukn Al Kaaf General Trading is a UAE-based trading company focused on sourcing, supplying, and connecting businesses with quality products and reliable trading solutions across the GCC and international markets.",
  url: "https://www.ruknalkaaf.com",
  locale: "en",
  contact: {
    phone: "+971 4 000 0000",
    phoneHref: "tel:+97140000000",
    whatsapp: "+971 50 000 0000",
    whatsappHref: "https://wa.me/971500000000",
    email: "info@ruknalkaaf.com",
    address: "Office 000, Business Bay, Dubai, United Arab Emirates",
    hours: "Sunday – Thursday, 9:00 AM – 6:00 PM",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Business+Bay+Dubai+UAE&output=embed",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/rukn-al-kaaf",
    instagram: "https://www.instagram.com/ruknalkaaf",
    facebook: "https://www.facebook.com/ruknalkaaf",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
};
