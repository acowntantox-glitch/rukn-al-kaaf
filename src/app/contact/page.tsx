import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageBackground } from "@/components/ui/PageBackground";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Call or WhatsApp Rukn Al Kaaf General Trading to place an order.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Call or WhatsApp us to place an order — we're ready to help."
        breadcrumbLabel="Contact Us"
      />

      <section className="relative isolate overflow-hidden bg-white py-12 sm:py-16">
        <PageBackground />
        <Container className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-navy-900">
              <PhoneIcon className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Phone
            </span>
            <a
              href={siteConfig.contact.phoneHref}
              className="text-2xl font-bold text-navy-900 hover:text-blue-700"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            <Button href={siteConfig.contact.phoneHref} size="lg" className="mt-2 w-full justify-center">
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </Button>
          </div>

          <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#1ebd5a]">
              <WhatsAppIcon className="h-6 w-6" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              WhatsApp
            </span>
            <a
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-navy-900 hover:text-blue-700"
            >
              {siteConfig.contact.whatsappDisplay}
            </a>
            <Button
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="mt-2 w-full justify-center bg-[#25D366] hover:bg-[#1ebd5a]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
        <Container className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-navy-900">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Location
              </span>
              <span className="text-base font-medium text-navy-900">
                {siteConfig.contact.address}
              </span>
            </div>
          </div>
          <div className="h-72 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm sm:h-96">
            <iframe
              title="Rukn Al Kaaf location map"
              src={siteConfig.contact.mapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
