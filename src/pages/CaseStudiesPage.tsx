import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactModal } from "@/components/landing/ContactModal";
import { ContactModalProvider, useContactModal } from "@/contexts/ContactModalContext";

const caseStudies = [
  {
    id: "outdoor-brand",
    category: "Home & Garden",
    title: "Premium Outdoor Furniture Brand",
    subtitle: "From $2M to $12M in 18 months",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=500&fit=crop",
    stats: [
      { label: "Revenue Growth", value: "+500%" },
      { label: "Marketplaces", value: "4" },
      { label: "ROAS", value: "4.8x" },
    ],
    description: "How we helped a European outdoor furniture brand successfully enter and dominate US marketplaces.",
    results: [
      "Launched on Amazon, Walmart, Wayfair, and Home Depot",
      "Established US entity and fulfillment network",
      "Achieved #1 Best Seller in 3 categories",
      "Built sustainable 7-figure monthly revenue",
    ],
  },
  {
    id: "tool-manufacturer",
    category: "Tools & Hardware",
    title: "Professional Tool Manufacturer",
    subtitle: "Capturing the Pro segment",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop",
    stats: [
      { label: "Revenue Growth", value: "+320%" },
      { label: "Pro Customers", value: "25K+" },
      { label: "Repeat Rate", value: "68%" },
    ],
    description: "Helping a tool manufacturer connect with professional contractors through Home Depot and Lowe's.",
    results: [
      "Pro Xtra and MyLowe's loyalty integration",
      "Targeted B2B marketing campaigns",
      "Trade show and contractor outreach",
      "Built dedicated Pro sales channel",
    ],
  },
  {
    id: "home-decor",
    category: "Home Décor",
    title: "Artisan Home Décor Brand",
    subtitle: "Scaling handcrafted products",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop",
    stats: [
      { label: "Revenue Growth", value: "+280%" },
      { label: "SKU Count", value: "500+" },
      { label: "Avg Order", value: "$185" },
    ],
    description: "Growing an artisan home décor brand while maintaining quality and brand integrity.",
    results: [
      "Premium positioning on Wayfair and Amazon",
      "A+ Content showcasing craftsmanship",
      "Efficient small-batch fulfillment",
      "Protected margins with strategic pricing",
    ],
  },
];

const CaseStudiesContent = () => {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Case <span className="text-primary">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Real results from real brands. See how we've helped companies like yours succeed on US marketplaces.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
                
                <div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {study.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-4 mb-2">
                    {study.title}
                  </h2>
                  <p className="text-lg text-accent font-semibold mb-4">{study.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label} className="text-center p-3 bg-secondary/50 rounded-xl">
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
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
            <Quote className="w-12 h-12 text-primary-foreground/30 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your brand achieve similar results.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={openModal}>
              Schedule Strategy Call
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

const CaseStudiesPage = () => (
  <ContactModalProvider>
    <CaseStudiesContent />
  </ContactModalProvider>
);

export default CaseStudiesPage;
