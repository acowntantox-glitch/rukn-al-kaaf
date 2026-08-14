import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/icons";
import type { IconName } from "@/data/types";

const points: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Reliable Supply",
    description: "Consistent stock and dependable fulfilment for recurring business needs.",
    icon: "shield",
  },
  {
    title: "Quality Products",
    description: "Every category is sourced and quality-checked before it reaches you.",
    icon: "package",
  },
  {
    title: "Competitive Pricing",
    description: "Transparent, requirement-based pricing suited to volume and destination.",
    icon: "cube",
  },
  {
    title: "Global Sourcing",
    description: "A supplier network spanning the GCC and key international markets.",
    icon: "globe",
  },
  {
    title: "Professional Service",
    description: "A responsive team focused on clear communication from enquiry to delivery.",
    icon: "handshake",
  },
  {
    title: "UAE-Based Operations",
    description: "Operating from Dubai with a trusted regional and international reach.",
    icon: "building",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-navy-900 py-16 text-white sm:py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Why Rukn Al Kaaf"
          title="Why Choose Us"
          tone="light"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                <Icon name={point.icon} className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-semibold text-white">{point.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
