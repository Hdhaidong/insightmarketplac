import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { MarketplaceLogos } from "@/components/landing/MarketplaceLogos";
import { Services } from "@/components/landing/Services";
import { Results } from "@/components/landing/Results";
import { Process } from "@/components/landing/Process";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MarketplaceLogos />
      <Services />
      <Results />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
