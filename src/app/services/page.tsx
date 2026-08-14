import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlaceholderVisual } from "@/components/ui/PlaceholderVisual";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ArrowRightIcon } from "@/components/icons";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Rukn Al Kaaf General Trading's services: import & export, wholesale & distribution, product sourcing, and supply & procurement.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="Trading capabilities built to support businesses at every stage of sourcing and supply, from initial requirement to reliable delivery."
        breadcrumbLabel="Services"
      />

      <section className="py-12 sm:py-16">
        <Container className="flex flex-col gap-16">
          {services.map((service, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={service.slug}
                className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <PlaceholderVisual
                  icon={service.icon}
                  tone={reversed ? "blue" : "navy"}
                  className="aspect-[4/3] w-full rounded-2xl"
                />
                <div className="flex flex-col gap-5">
                  <h2 className="text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                    {service.description}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckIcon className="h-4 w-4 shrink-0 text-blue-700" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button href="/request-quote" variant="secondary" className="w-fit">
                    Enquire About This Service
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </>
  );
}
