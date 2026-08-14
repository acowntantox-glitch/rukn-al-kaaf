import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";

export function QuoteCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-navy-900 to-blue-700 px-6 py-14 text-center sm:px-16">
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Looking for a Reliable Trading Partner?
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-slate-200 sm:text-lg">
            Tell us what you need and our team will get back to you.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/request-quote" variant="secondary" size="lg">
              Request a Quote
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
