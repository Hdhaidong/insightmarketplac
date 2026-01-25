import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, Search, FileText, BarChart3, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout, useContactModal } from "@/components/layout/PageLayout";

const services = [
  { icon: Target, title: "PPC Management", description: "Data-driven Sponsored Products, Brands, and Display campaigns across all marketplaces." },
  { icon: Search, title: "SEO Optimization", description: "Keyword research, listing optimization, and backend search terms for maximum visibility." },
  { icon: FileText, title: "A+ Content Creation", description: "Enhanced brand content and storefronts that convert browsers into buyers." },
  { icon: Megaphone, title: "Brand Advertising", description: "Sponsored Brands, Video ads, and DSP campaigns to build awareness." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Real-time dashboards, attribution modeling, and actionable insights." },
  { icon: TrendingUp, title: "Growth Strategy", description: "Market analysis, competitive intelligence, and expansion roadmaps." },
];

const stats = [
  { value: "4.2x", label: "Average ROAS" },
  { value: "$120M+", label: "Ad Spend Managed" },
  { value: "35%", label: "Avg Conversion Lift" },
  { value: "200+", label: "Brands Served" },
];

const MarketingContent = () => {
  const { openModal } = useContactModal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-background" />
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
            <span className="px-4 py-1.5 bg-green-500/10 text-green-600 rounded-full text-sm font-semibold">
              Marketing
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6">
              Performance <span className="text-green-600">Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Drive sales with data-driven advertising. Our certified experts maximize your ROI across every marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={openModal}>
                Boost Your Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Marketing Case Studies
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
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Full-Funnel Marketing Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From awareness to conversion, we optimize every touchpoint.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-green-500/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-600">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Maximize Your ROAS?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a free advertising audit and discover your growth potential.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-white/90" onClick={openModal}>
              Get Free Ad Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Marketing = () => (
  <PageLayout>
    <MarketingContent />
  </PageLayout>
);

export default Marketing;
