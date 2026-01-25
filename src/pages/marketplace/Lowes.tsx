import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Award, RotateCcw, Store, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const features = [
  { icon: Award, title: "MyLowe's Rewards", description: "Customers earn loyalty points on marketplace purchases, driving repeat business." },
  { icon: RotateCcw, title: "Omnichannel Returns", description: "Marketplace items can be returned at any of 1,700+ Lowe's store locations." },
  { icon: Zap, title: "Mirakl-Powered", description: "Lowe's uses Mirakl's enterprise marketplace technology for seamless seller integration." },
  { icon: Store, title: "Total Home Strategy", description: "Expand into furniture, decor, outdoor, and tools as part of Lowe's category expansion." },
  { icon: Shield, title: "Seller Verification", description: "Benefit from Lowe's rigorous vetting process that ensures quality sellers." },
  { icon: Wrench, title: "DIY + Pro Customers", description: "Reach both weekend warriors and professional contractors through one platform." },
];

const stats = [
  { value: "$150M+", label: "Lowe's Revenue Managed" },
  { value: "70+", label: "Active Lowe's Sellers" },
  { value: "1,700+", label: "Return Locations" },
  { value: "68%", label: "YoY Growth" },
];

const LowesContent = () => {
  const { isOpen, closeModal, openModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#004990]/10 via-background to-background" />
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
              <div className="w-16 h-16 rounded-2xl bg-[#004990] flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="px-4 py-1.5 bg-[#004990]/10 text-[#004990] rounded-full text-sm font-semibold">
                Mirakl-Powered Marketplace
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Grow with <span className="text-[#004990]">Lowe's</span>
              <br />Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Join Lowe's expanding marketplace and reach millions of home improvement enthusiasts through their Total Home Strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#004990] hover:bg-[#004990]/90" onClick={openModal}>
                Start Selling on Lowe's
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Lowe's Case Studies
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
                <div className="text-3xl font-bold text-[#004990] mb-2">{stat.value}</div>
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
              Lowe's Marketplace Advantages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leverage Lowe's unique omnichannel capabilities and growing marketplace ecosystem.
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
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#004990]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#004990]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#004990]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#004990]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Partner with Lowe's?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get expert guidance on joining Lowe's marketplace and expanding your reach.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-[#004990] hover:bg-white/90" onClick={openModal}>
              Get Free Lowe's Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

const Lowes = () => (
  <ContactModalProvider>
    <LowesContent />
  </ContactModalProvider>
);

export default Lowes;
