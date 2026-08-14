import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  WhatsAppIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/icons";
import { siteConfig, footerLinks } from "@/data/site";
import { categories } from "@/data/categories";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="w-fit rounded-lg bg-white px-4 py-3">
            <Logo imageClassName="h-24 w-auto sm:h-32" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-white/15 p-2 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-slate-400 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Categories</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {categories.slice(0, 5).map((category) => (
              <li key={category.slug}>
                <a
                  href={`/products?category=${category.slug}`}
                  className="text-sm text-slate-400 hover:text-white"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <span>{siteConfig.contact.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-slate-500" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <WhatsAppIcon className="h-4 w-4 shrink-0 text-slate-500" />
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {siteConfig.contact.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon className="h-4 w-4 shrink-0 text-slate-500" />
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6 text-center text-xs text-slate-500 sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
