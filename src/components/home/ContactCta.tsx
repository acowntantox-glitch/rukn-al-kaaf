import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export function ContactCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-blue-700 px-6 py-14 text-center sm:px-16">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to Order?
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
            Call or WhatsApp us and we&apos;ll take care of the rest.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href={siteConfig.contact.phoneHref} variant="secondary" size="lg">
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </Button>
            <Button
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              size="lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
