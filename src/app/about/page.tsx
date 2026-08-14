import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PageBackground } from "@/components/ui/PageBackground";
import { ContactCta } from "@/components/home/ContactCta";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: siteConfig.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="About Rukn Al Kaaf" breadcrumbLabel="About Us" />

      <section className="relative isolate overflow-hidden bg-white py-12 sm:py-16">
        <PageBackground />
        <Container className="relative z-10">
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            {siteConfig.description}
          </p>
        </Container>
      </section>

      <ContactCta />
    </>
  );
}
