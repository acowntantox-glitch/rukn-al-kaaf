import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/icons";
import { services } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          description="Trading capabilities built to support businesses at every stage of sourcing and supply."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col gap-4 rounded-xl border border-slate-200 p-6 transition-colors hover:border-navy-900/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-navy-900">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-navy-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
