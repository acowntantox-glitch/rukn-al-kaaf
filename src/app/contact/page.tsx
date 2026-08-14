import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  ClockIcon,
} from "@/components/icons";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Rukn Al Kaaf General Trading. Reach us by phone, email, WhatsApp, or send a message directly.",
};

const contactItems = [
  { icon: MapPinIcon, label: "Address", value: siteConfig.contact.address, href: undefined },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: siteConfig.contact.whatsapp,
    href: siteConfig.contact.whatsappHref,
  },
  { icon: ClockIcon, label: "Business Hours", value: siteConfig.contact.hours, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Have a question or a business enquiry? Reach out and our team will respond promptly."
        breadcrumbLabel="Contact Us"
      />

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold text-navy-900">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 rounded-xl border border-slate-200 p-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-navy-900">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-navy-900 hover:text-blue-700"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-navy-900">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Button
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="justify-center"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200">
        <div className="h-80 w-full sm:h-96">
          <iframe
            title="Rukn Al Kaaf location map"
            src={siteConfig.contact.mapEmbedUrl}
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
