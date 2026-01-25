import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Truck, RotateCcw, Warehouse, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const services = [
  { icon: Warehouse, title: "3PL Network", description: "Access our vetted network of fulfillment centers strategically located across the US." },
  { icon: Package, title: "FBA Prep Services", description: "Labeling, bundling, poly-bagging, and inspection to meet Amazon's strict requirements." },
  { icon: Truck, title: "Freight Forwarding", description: "Ocean, air, and ground shipping with customs clearance and duty management." },
  { icon: RotateCcw, title: "Returns Processing", description: "Inspect, restock, refurbish, or liquidate returned inventory efficiently." },
  { icon: Globe, title: "Cross-Border Logistics", description: "Import/export compliance, tariff optimization, and international shipping solutions." },
  { icon: BarChart3, title: "Inventory Management", description: "Real-time visibility, demand forecasting, and automated replenishment." },
];

const stats = [
  { value: "15+", label: "3PL Partners" },
  { value: "500K+", label: "Orders Fulfilled/Month" },
  { value: "99.2%", label: "On-Time Delivery" },
  { value: "48hrs", label: "Avg Processing Time" },
];

const FulfillmentContent = () => {
  const { isOpen, closeModal, openModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-background" />
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
            <span className="px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold">
              Operations
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6">
              Fulfillment & <span className="text-accent">Logistics</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              End-to-end supply chain management. From warehouse to doorstep, we ensure your products reach customers fast and efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" onClick={openModal}>
                Optimize Your Supply Chain
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Get Fulfillment Quote
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
                <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
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
              Complete Logistics Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We handle the complexity so you can focus on growing your brand.
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
                className="p-6 rounded-2xl border border-border bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-accent-foreground mb-6">
              Ready to Streamline Your Logistics?
            </h2>
            <p className="text-xl text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a custom fulfillment strategy tailored to your marketplace needs.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-accent hover:bg-white/90" onClick={openModal}>
              Get Free Logistics Audit
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

const Fulfillment = () => (
  <ContactModalProvider>
    <FulfillmentContent />
  </ContactModalProvider>
);

export default Fulfillment;
