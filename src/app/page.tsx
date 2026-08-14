import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { QuoteCta } from "@/components/home/QuoteCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <CategoryGrid />
      <ServicesPreview />
      <WhyChooseUs />
      <QuoteCta />
    </>
  );
}
