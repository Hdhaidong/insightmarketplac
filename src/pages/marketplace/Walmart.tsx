import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, BarChart3, Package, Tag, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout, useContactModal } from "@/components/layout/PageLayout";

const features = [
  { icon: Package, title: "WFS (Walmart Fulfillment)", description: "Leverage Walmart's fulfillment network for fast, reliable delivery and Prime-like experience." },
  { icon: BarChart3, title: "Walmart Connect Ads", description: "Sponsored Search and Display advertising optimized for maximum visibility and conversions." },
  { icon: Tag, title: "Repricer Strategy", description: "Dynamic pricing algorithms to win the Buy Box while protecting margins." },
  { icon: Truck, title: "2-Day Delivery Badge", description: "Qualify for fast shipping tags that boost visibility and conversion rates." },
  { icon: Shield, title: "Brand Portal", description: "Protect your brand with Walmart's IP protection and enhanced content tools." },
  { icon: Zap, title: "API Integration", description: "Seamless inventory and order management through Walmart's seller APIs." },
];

const stats = [
  { value: "$320M+", label: "Walmart Revenue Managed" },
  { value: "150+", label: "Active Walmart Sellers" },
  { value: "89%", label: "Buy Box Win Rate" },
  { value: "3.5x", label: "Average ROAS" },
];

const WalmartContent = () => {
  const { openModal } = useContactModal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0071DC]/10 via-background to-background" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0071DC] flex items-center justify-center">
                <span className="text-white font-bold text-xl">W</span>
              </div>
              <span className="px-4 py-1.5 bg-[#0071DC]/10 text-[#0071DC] rounded-full text-sm font-semibold">
                Fastest Growing Marketplace
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Conquer <span className="text-[#0071DC]">Walmart</span>
              <br />Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Tap into Walmart's 120M+ monthly visitors. We help brands navigate Walmart's unique ecosystem for maximum growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#0071DC] hover:bg-[#0071DC]/90" onClick={openModal}>
                Start Selling on Walmart
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Walmart Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[#0071DC] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Walmart Marketplace Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From onboarding to optimization, we handle every aspect of your Walmart presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#0071DC]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0071DC]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#0071DC]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Walmart Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how brands are winning on America's fastest-growing marketplace.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                brand: "Anker",
                logo: "A",
                highlight: "8,500+",
                highlightLabel: "Peak Daily Orders",
                description: "Achieved market leadership in electronics through WFS optimization and strategic Walmart Connect campaigns.",
                growth: "+420% YoY Revenue",
              },
              {
                brand: "Shark",
                logo: "S",
                highlight: "$25M+",
                highlightLabel: "Annual Revenue",
                description: "Dominated vacuum category with exclusive bundles and aggressive 2-Day Delivery positioning.",
                growth: "+310% Market Share",
              },
              {
                brand: "Ozark Trail",
                logo: "O",
                highlight: "95%",
                highlightLabel: "Buy Box Win Rate",
                description: "Leveraged dynamic repricing and inventory optimization to capture outdoor recreation demand.",
                growth: "+275% Conversion Rate",
              },
            ].map((story, index) => (
              <motion.div
                key={story.brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-[#0071DC]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0071DC] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{story.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{story.brand}</h3>
                    <span className="text-sm text-[#0071DC] font-medium">{story.growth}</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-[#0071DC]">{story.highlight}</div>
                  <div className="text-sm text-muted-foreground">{story.highlightLabel}</div>
                </div>
                <p className="text-muted-foreground text-sm">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0071DC]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Win on Walmart?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get started with a free Walmart marketplace assessment and growth strategy.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-[#0071DC] hover:bg-white/90" onClick={openModal}>
              Get Free Walmart Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Walmart = () => (
  <PageLayout>
    <WalmartContent />
  </PageLayout>
);

export default Walmart;
