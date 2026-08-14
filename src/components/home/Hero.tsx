import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoImage } from "@/components/brand/Logo";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

const highlights = ["UAE-Based Operations", "Import & Export", "Wholesale Supply"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
            General Trading Company &middot; UAE
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.4rem]">
            Connecting Markets.
            <br />
            Delivering Opportunities.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Rukn Al Kaaf General Trading sources, supplies, and connects businesses
            across the UAE, GCC, and international markets with quality products and
            reliable trading solutions.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button href="/request-quote" size="lg">
              Request a Quote
              <ArrowRightIcon className="h-4 w-4" />
            </Button>
            <Button href="/products" variant="secondary" size="lg">
              Explore Products
            </Button>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckIcon className="h-4 w-4 text-blue-700" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3.4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-navy-800 lg:aspect-square">
          <svg
            className="absolute inset-0 h-full w-full text-white/10"
            viewBox="0 0 400 400"
            preserveAspectRatio="none"
          >
            <path d="M-20 260 200 100 420 260" fill="none" stroke="currentColor" strokeWidth="18" />
            <path d="M-20 330 200 170 420 330" fill="none" stroke="currentColor" strokeWidth="18" />
            <path d="M-20 400 200 240 420 400" fill="none" stroke="currentColor" strokeWidth="18" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-10 text-center">
            <div className="rounded-xl bg-white px-6 py-4 shadow-lg">
              <LogoImage className="h-20 w-auto sm:h-24" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-200">
              A trusted trading partner across the UAE, GCC, and international markets.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
