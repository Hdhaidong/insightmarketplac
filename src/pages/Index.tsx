import { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { MarketplaceLogos } from "@/components/landing/MarketplaceLogos";
import { Services } from "@/components/landing/Services";
import { GoodFit } from "@/components/landing/GoodFit";
import { Timeline } from "@/components/landing/Timeline";
import { OmnichannelBenefits } from "@/components/landing/OmnichannelBenefits";
import { Results } from "@/components/landing/Results";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { Insights } from "@/components/landing/Insights";
import { Testimonials } from "@/components/landing/Testimonials";
import { Process } from "@/components/landing/Process";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const IndexContent = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MarketplaceLogos />
      <Services />
      <GoodFit />
      <Timeline />
      <OmnichannelBenefits />
      <Results />
      <CaseStudies />
      <Insights />
      <Testimonials />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const Index = () => {
  return (
    <ContactModalProvider>
      <IndexContent />
    </ContactModalProvider>
  );
};

export default Index;
