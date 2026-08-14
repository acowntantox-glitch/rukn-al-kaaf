import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { PhoneIcon, MapPinIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig, footerLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <div className="w-fit rounded-lg bg-white px-4 py-3">
            <Logo imageClassName="h-24 w-auto sm:h-32" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <li className="flex items-center gap-2.5">
              <PhoneIcon className="h-4 w-4 shrink-0 text-slate-500" />
              <a href={siteConfig.contact.phoneHref} className="hover:text-white">
                {siteConfig.contact.phoneDisplay}
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
                {siteConfig.contact.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
              <span>{siteConfig.contact.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold-500/20">
        <Container className="py-6 text-center text-xs text-slate-500 sm:text-left">
          <p>
            &copy; {year} {siteConfig.name}. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
