import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export function CompanyIntro() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex max-w-2xl flex-col gap-4">
          <span className="gold-rule text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            About Us
          </span>
          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
            {siteConfig.description}
          </p>
        </div>
        <Button href="/about" variant="secondary" size="md" className="shrink-0">
          Learn More
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </Container>
    </section>
  );
}
