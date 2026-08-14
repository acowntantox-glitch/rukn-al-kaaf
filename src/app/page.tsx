import { Hero } from "@/components/home/Hero";
import { CompanyIntro } from "@/components/home/CompanyIntro";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { ContactCta } from "@/components/home/ContactCta";

export default function HomePage() {
  return (
    <div className="home-flow-bg">
      <Hero />
      <CompanyIntro />
      <FeaturedProducts />
      <ContactCta />
    </div>
  );
}
