import { PageLayout } from "@/components/layout/PageLayout";
import { Hero } from "@/components/landing/Hero";
import { MarketplaceLogos } from "@/components/landing/MarketplaceLogos";
import { Services } from "@/components/landing/Services";
import { GoodFit } from "@/components/landing/GoodFit";
import { Timeline } from "@/components/landing/Timeline";
import { OmnichannelBenefits } from "@/components/landing/OmnichannelBenefits";
import { Results } from "@/components/landing/Results";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { AmazonTopBrands } from "@/components/landing/AmazonTopBrands";
import { Insights } from "@/components/landing/Insights";
import { Testimonials } from "@/components/landing/Testimonials";
import { Process } from "@/components/landing/Process";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";

const Index = () => {
  return (
    <PageLayout withHeaderPadding={false}>
      <Hero />
      <MarketplaceLogos />
      <Services />
      <GoodFit />
      <Timeline />
      <OmnichannelBenefits />
      <Results />
      <CaseStudies />
      <AmazonTopBrands />
      <Insights />
      <Testimonials />
      <Process />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default Index;
