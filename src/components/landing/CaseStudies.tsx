import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShoppingCart, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    brand: "TechGear Pro",
    category: "Consumer Electronics",
    logo: "⚡",
    description: "A premium electronics brand struggling with marketplace visibility achieved record-breaking sales within 6 months.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    metrics: [
      { label: "Revenue", before: "$120K/mo", after: "$890K/mo", icon: DollarSign },
      { label: "Order Volume", before: "450/mo", after: "3,200/mo", icon: ShoppingCart },
      { label: "ROAS", before: "1.8x", after: "4.2x", icon: TrendingUp },
    ],
    platforms: ["Amazon", "Walmart", "Best Buy"],
  },
  {
    brand: "HomeStyle Living",
    category: "Home & Garden",
    logo: "🏡",
    description: "A home décor brand expanded from a single marketplace to dominating 5 major platforms nationwide.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    metrics: [
      { label: "Revenue", before: "$85K/mo", after: "$520K/mo", icon: DollarSign },
      { label: "Order Volume", before: "320/mo", after: "2,100/mo", icon: ShoppingCart },
      { label: "ROAS", before: "2.1x", after: "5.8x", icon: TrendingUp },
    ],
    platforms: ["Home Depot", "Lowe's", "Wayfair"],
  },
  {
    brand: "NordicFit",
    category: "Sports & Fitness",
    logo: "💪",
    description: "A European fitness brand successfully entered the US market and became a top seller in their category.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    metrics: [
      { label: "Revenue", before: "$0 (New)", after: "$1.2M/mo", icon: DollarSign },
      { label: "Order Volume", before: "0/mo", after: "8,500/mo", icon: ShoppingCart },
      { label: "ROAS", before: "N/A", after: "3.9x", icon: TrendingUp },
    ],
    platforms: ["Amazon", "Target", "Dick's"],
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Real Brands,
            <br />
            <span className="text-primary">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped brands transform their marketplace presence 
            and achieve exceptional growth.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.brand}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src={study.image}
                      alt={study.brand}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{study.logo}</span>
                        <div>
                          <h3 className="text-xl font-bold text-primary-foreground">{study.brand}</h3>
                          <p className="text-sm text-primary-foreground/70">{study.category}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {study.platforms.map((platform) => (
                          <span
                            key={platform}
                            className="px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-medium"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                    {study.description}
                  </p>

                  {/* Before/After Metrics */}
                  <div className="space-y-4 mb-8">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <metric.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground mb-1">
                            {metric.label}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-lg font-semibold text-muted-foreground line-through decoration-destructive/50">
                              {metric.before}
                            </span>
                            <ArrowRight className="w-4 h-4 text-accent" />
                            <span className="text-xl font-bold text-accent">
                              {metric.after}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <Button variant="navy" size="lg">
            View All Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
