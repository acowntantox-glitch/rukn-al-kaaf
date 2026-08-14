import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col items-center gap-5 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
          404
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Page Not Found
        </h1>
        <p className="max-w-md text-base leading-relaxed text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <Button href="/">Back to Home</Button>
          <Button href="/products" variant="secondary">
            Browse Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
