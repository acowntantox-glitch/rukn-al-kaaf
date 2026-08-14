import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageBackground } from "@/components/ui/PageBackground";
import { ChevronRightIcon } from "@/components/icons";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbLabel: string;
};

export function PageHeader({ eyebrow, title, description, breadcrumbLabel }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white py-12 sm:py-16">
      <PageBackground />
      <Container className="relative z-10 flex flex-col gap-4">
        <nav className="flex items-center gap-1.5 text-xs text-slate-500" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-navy-900">
            Home
          </Link>
          <ChevronRightIcon className="h-3 w-3" />
          <span className="font-medium text-navy-900">{breadcrumbLabel}</span>
        </nav>

        <div className="flex max-w-2xl flex-col gap-3">
          {eyebrow ? (
            <span className="gold-rule text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{title}</h1>
          {description ? (
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
