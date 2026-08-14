import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { QuoteForm } from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Submit your product or business requirement and the Rukn Al Kaaf team will get back to you with a tailored quote.",
};

export default function RequestQuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Request a Quote"
        title="Tell Us What You Need"
        description="Share your requirement below and our team will review it and get back to you shortly."
        breadcrumbLabel="Request a Quote"
      />

      <section className="py-12 sm:py-16">
        <Container className="mx-auto max-w-2xl">
          <Suspense fallback={null}>
            <QuoteForm />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
