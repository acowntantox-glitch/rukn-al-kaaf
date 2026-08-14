import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section>
      <Container className="flex flex-col items-center gap-8 py-16 text-center sm:py-24">
        <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700 shadow-sm">
          Rukn Al Kaaf General Trading &middot; UAE
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-navy-900 sm:text-5xl">
            Quality Cleaning Products
            <br />
            Since 2011
          </h1>
          <p className="text-lg font-medium text-slate-600 sm:text-xl">
            Rukn Al Kaaf General Trading &ndash; UAE
          </p>
        </div>

        <a
          href={siteConfig.contact.phoneHref}
          className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-6 py-3 text-xl font-bold tracking-wide text-navy-900 shadow-sm transition-colors hover:border-gold-400 sm:text-2xl"
        >
          <PhoneIcon className="h-5 w-5 text-blue-700" />
          {siteConfig.contact.phoneDisplay}
        </a>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button href={siteConfig.contact.phoneHref} size="lg">
            <PhoneIcon className="h-4 w-4" />
            Call Now
          </Button>
          <Button
            href={siteConfig.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </Button>
        </div>

        <Button href="/products" variant="ghost" size="md">
          Browse Products
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </Container>
    </section>
  );
}
