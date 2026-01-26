import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BarChart3, Package, Tag, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout, useContactModal } from "@/components/layout/PageLayout";

const features = [
  { icon: Award, title: "Invite-Only Marketplace", description: "Curated platform with high entry standards ensures premium brand positioning and reduced competition." },
  { icon: Package, title: "One Partner Per SKU", description: "Exclusive product ownership eliminates internal competition and maximizes your visibility." },
  { icon: Tag, title: "Full Pricing Control", description: "Complete control over pricing, descriptions, and brand strategy to maintain consistency." },
  { icon: BarChart3, title: "No Monthly Fees", description: "Zero subscription costs—only competitive referral rates on successful sales." },
  { icon: Shield, title: "Brand Protection", description: "Premium marketplace positioning protects your brand alongside trusted retail partners." },
  { icon: Zap, title: "API Integration", description: "Seamless Seller, Orders, and Shipping APIs for automated inventory and fulfillment management." },
];

const stats = [
  { value: "$180M+", label: "Target Revenue Managed" },
  { value: "85+", label: "Active Target Partners" },
  { value: "6,500", label: "Peak Daily Orders" },
  { value: "15x", label: "YoY Traffic Growth" },
];

const TargetContent = () => {
  const { openModal } = useContactModal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CC0000]/10 via-background to-background" />
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
              <div className="w-16 h-16 rounded-2xl bg-[#CC0000] flex items-center justify-center">
                <span className="text-white font-bold text-xl">T+</span>
              </div>
              <span className="px-4 py-1.5 bg-[#CC0000]/10 text-[#CC0000] rounded-full text-sm font-semibold">
                Invite-Only Premium Marketplace
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Join <span className="text-[#CC0000]">Target Plus</span>
              <br />Curated Marketplace
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Access Target's premium invite-only marketplace with exclusive SKU positioning, zero monthly fees, and complete brand control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#CC0000] hover:bg-[#CC0000]/90" onClick={openModal}>
                Apply for Target Plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                View Target Case Studies
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
                <div className="text-3xl font-bold text-[#CC0000] mb-2">{stat.value}</div>
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
              Complete Target Plus Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From application to optimization, we help you succeed on Target's curated marketplace.
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
                className="p-6 rounded-2xl border border-border bg-card hover:border-[#CC0000]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#CC0000]/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#CC0000]" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Target Plus Requirements
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As an invite-only marketplace, Target Plus has specific eligibility requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { title: "US-Based Business", desc: "Must be registered and operating under US law" },
              { title: "Compliance Documents", desc: "W-9 form, EIN tax ID, and DUNS number required" },
              { title: "3-6 Week Timeline", desc: "Application review within 30 days, full onboarding in 3-6 weeks" },
            ].map((req, index) => (
              <motion.div
                key={req.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-[#CC0000]/10 text-[#CC0000] font-bold flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{req.title}</h3>
                <p className="text-sm text-muted-foreground">{req.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#CC0000]">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Join Target Plus?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get started with a free Target Plus eligibility assessment and application strategy.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-[#CC0000] hover:bg-white/90" onClick={openModal}>
              Get Free Target Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Target = () => (
  <PageLayout>
    <TargetContent />
  </PageLayout>
);

export default Target;
