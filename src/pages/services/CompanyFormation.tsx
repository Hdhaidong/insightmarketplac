import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, FileText, CreditCard, CheckCircle2, Globe, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const services = [
  { icon: Building2, title: "LLC / Corporation Formation", description: "Delaware or Wyoming entity setup with registered agent and compliance management." },
  { icon: FileText, title: "EIN & ITIN Application", description: "Federal tax ID registration for your US business entity, required for all marketplace sales." },
  { icon: CreditCard, title: "US Bank Account", description: "Open a US business bank account without visiting the US. Accept ACH and wire transfers." },
  { icon: Shield, title: "Registered Agent", description: "Maintain compliance with official address and document handling in your state of incorporation." },
  { icon: Globe, title: "Sales Tax Registration", description: "Multi-state sales tax nexus registration and ongoing compliance management." },
  { icon: Users, title: "Ongoing Compliance", description: "Annual reports, franchise taxes, and regulatory filings handled for you." },
];

const steps = [
  { step: "01", title: "Consultation", description: "We assess your business needs and recommend the optimal entity structure." },
  { step: "02", title: "Entity Formation", description: "File articles of incorporation and establish your US legal presence." },
  { step: "03", title: "Tax Registration", description: "Obtain EIN, state registrations, and sales tax permits." },
  { step: "04", title: "Banking Setup", description: "Open US business accounts and payment processing." },
];

const CompanyFormationContent = () => {
  const { isOpen, closeModal, openModal } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
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
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Legal Setup
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6">
              USA Company <span className="text-primary">Formation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Establish your US legal presence quickly and compliantly. We handle everything from LLC formation to bank accounts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openModal}>
                Start Your US Entity
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Download Formation Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Formation Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From consultation to banking, we guide you through every step.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-border" />
                )}
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
              Complete Formation Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Establish Your US Presence?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get started with a free consultation to discuss your entity formation needs.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={openModal}>
              Schedule Free Consultation
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

const CompanyFormation = () => (
  <ContactModalProvider>
    <CompanyFormationContent />
  </ContactModalProvider>
);

export default CompanyFormation;
