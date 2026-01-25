import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Package, BarChart3, Headphones, ShoppingCart, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const features = [
  { icon: ShoppingCart, title: "FBA & FBM Management", description: "Optimize your fulfillment strategy with expert guidance on when to use FBA vs FBM." },
  { icon: BarChart3, title: "PPC Advertising", description: "Data-driven Sponsored Products, Brands, and Display campaigns with proven ROI." },
  { icon: Package, title: "Listing Optimization", description: "A+ Content, keyword research, and conversion-focused product detail pages." },
  { icon: Star, title: "Brand Registry", description: "Protect your brand and unlock enhanced marketing features on Amazon." },
  { icon: TrendingUp, title: "Sales Analytics", description: "Real-time dashboards and insights to track performance and identify opportunities." },
  { icon: Headphones, title: "Account Health", description: "Proactive monitoring and case management to maintain account standing." },
];

const stats = [
  { value: "$850M+", label: "Revenue Managed on Amazon" },
  { value: "300+", label: "Active Amazon Sellers" },
  { value: "4.8x", label: "Average ROAS" },
  { value: "45%", label: "YoY Growth Rate" },
];

const AmazonContent = () => {
  const { isOpen, closeModal, openModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF9900]/10 via-background to-background" />
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
              <div className="w-16 h-16 rounded-2xl bg-[#FF9900] flex items-center justify-center">
                <span className="text-white font-bold text-2xl">a</span>
              </div>
              <span className="px-4 py-1.5 bg-[#FF9900]/10 text-[#FF9900] rounded-full text-sm font-semibold">
                #1 E-commerce Platform
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Dominate <span className="text-[#FF9900]">Amazon</span>
              <br />with Expert Management
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              From product launches to scale, we help brands maximize their potential on the world's largest online marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF9900] hover:bg-[#FF9900]/90" onClick={openModal}>
                Start Selling on Amazon
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Amazon Case Studies
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
                <div className="text-3xl font-bold text-[#FF9900] mb-2">{stat.value}</div>
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
              Full-Service Amazon Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed on Amazon, handled by certified marketplace experts.
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
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#FF9900]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF9900]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#FF9900]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FF9900]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Scale on Amazon?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get a free audit of your Amazon presence and discover untapped growth opportunities.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-[#FF9900] hover:bg-white/90" onClick={openModal}>
              Get Free Amazon Audit
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

const Amazon = () => (
  <ContactModalProvider>
    <AmazonContent />
  </ContactModalProvider>
);

export default Amazon;
