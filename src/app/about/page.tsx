import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Icon } from "@/components/icons";
import { QuoteCta } from "@/components/home/QuoteCta";
import { siteConfig } from "@/data/site";
import type { IconName } from "@/data/types";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rukn Al Kaaf General Trading — a UAE-based trading company focused on sourcing, supplying, and connecting businesses across the GCC and international markets.",
};

const values: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Integrity",
    description: "Operating honestly and transparently in every business relationship.",
    icon: "shield",
  },
  {
    title: "Reliability",
    description: "Delivering on commitments with consistent, dependable execution.",
    icon: "truck",
  },
  {
    title: "Quality",
    description: "Holding every sourced product to a consistent standard.",
    icon: "package",
  },
  {
    title: "Partnership",
    description: "Building long-term relationships with customers and suppliers alike.",
    icon: "handshake",
  },
  {
    title: "Customer Focus",
    description: "Understanding requirements closely to deliver the right solution.",
    icon: "search",
  },
];

const companyInfo = [
  { label: "Headquarters", value: "Dubai, United Arab Emirates" },
  { label: "Markets Served", value: "UAE, GCC & International" },
  {
    label: "Trading Capabilities",
    value: "Import & Export, Wholesale, Sourcing, Procurement",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Rukn Al Kaaf"
        description="A UAE-based general trading company built on reliability, quality, and long-term partnerships."
        breadcrumbLabel="About Us"
      />

      <section className="py-12 sm:py-16">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Company Overview
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {siteConfig.description}
            </p>
            <p className="text-base leading-relaxed text-slate-600">
              We work closely with manufacturers, suppliers, and businesses to move goods
              reliably from origin to destination — with a focus on quality, transparency,
              and long-term trading relationships.
            </p>
          </div>
          <PlaceholderVisual icon="building" tone="navy" className="aspect-[4/3] w-full rounded-2xl" />
        </Container>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-xl bg-white p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-navy-900">Our Vision</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              To be a trusted trading partner recognized across the GCC and international
              markets for reliability, quality, and long-term value.
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-xl bg-white p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-navy-900">Our Mission</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              To connect businesses with quality products and dependable trading solutions
              through transparent sourcing, consistent supply, and responsive service.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-10">
          <div className="flex max-w-2xl flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Our Values
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
              What Guides Our Work
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col gap-3 rounded-xl border border-slate-200 p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-navy-900">
                  <Icon name={value.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-navy-900">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-12 text-white sm:py-16">
        <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {companyInfo.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {item.label}
              </span>
              <span className="text-lg font-semibold text-white">{item.value}</span>
            </div>
          ))}
        </Container>
      </section>

      <QuoteCta />
    </>
  );
}
