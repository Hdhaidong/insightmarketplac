import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Wrench, Truck, Shield, BarChart3, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout, useContactModal } from "@/components/layout/PageLayout";

const features = [
  { icon: Home, title: "Pro Xtra Integration", description: "Connect with Home Depot's loyalty program to reach professional contractors and DIY enthusiasts." },
  { icon: Wrench, title: "EDI Compliance", description: "Full EDI 850/855/856 compliance for seamless order processing and inventory management." },
  { icon: Truck, title: "Drop Ship Program", description: "Leverage Home Depot's network or use your own fulfillment for flexible shipping options." },
  { icon: Store, title: "In-Store Returns", description: "Customers can return marketplace items at any of 2,300+ Home Depot locations." },
  { icon: Shield, title: "Vendor Verification", description: "Navigate Home Depot's rigorous seller requirements with our proven onboarding process." },
  { icon: BarChart3, title: "Category Expertise", description: "Specialized knowledge in tools, hardware, outdoor, and home improvement categories." },
];

const stats = [
  { value: "$180M+", label: "Home Depot Revenue" },
  { value: "85+", label: "Active HD Sellers" },
  { value: "2,300+", label: "Return Locations" },
  { value: "52%", label: "YoY Growth" },
];

const HomeDepotContent = () => {
  const { openModal } = useContactModal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F96302]/10 via-background to-background" />
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
              <div className="w-16 h-16 rounded-2xl bg-[#F96302] flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <span className="px-4 py-1.5 bg-[#F96302]/10 text-[#F96302] rounded-full text-sm font-semibold">
                #1 Home Improvement Retailer
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sell on <span className="text-[#F96302]">Home Depot</span>
              <br />Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Access 45M+ monthly visitors and connect with professional contractors through America's largest home improvement retailer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#F96302] hover:bg-[#F96302]/90" onClick={openModal}>
                Start Selling on Home Depot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Home Depot Case Studies
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
                <div className="text-3xl font-bold text-[#F96302] mb-2">{stat.value}</div>
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
              Home Depot Marketplace Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate Home Depot's unique requirements with our specialized marketplace team.
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
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#F96302]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F96302]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#F96302]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#F96302]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Grow on Home Depot?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let us help you navigate Home Depot's marketplace and reach millions of home improvement customers.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-[#F96302] hover:bg-white/90" onClick={openModal}>
              Get Free HD Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const HomeDepot = () => (
  <PageLayout>
    <HomeDepotContent />
  </PageLayout>
);

export default HomeDepot;
