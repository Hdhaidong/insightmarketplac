import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { MarketplaceLogos } from "@/components/landing/MarketplaceLogos";
import { Services } from "@/components/landing/Services";
import { GoodFit } from "@/components/landing/GoodFit";
import { Timeline } from "@/components/landing/Timeline";
import { Results } from "@/components/landing/Results";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Testimonials } from "@/components/landing/Testimonials";
import { Process } from "@/components/landing/Process";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MarketplaceLogos />
      <Services />
      <GoodFit />
      <Timeline />
      <Results />
      <CaseStudies />
      <Testimonials />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
