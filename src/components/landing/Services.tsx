import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { 
  Building2, 
  BarChart3, 
  Package, 
  FileText, 
  Globe, 
  Headphones,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    category: "Legal Setup",
    icon: Building2,
    title: "USA Company Formation",
    description: "Complete US entity setup including LLC/Corp formation, EIN registration, bank account opening, and compliance management.",
    features: ["Delaware/Wyoming LLC", "EIN & ITIN", "US Bank Account", "Registered Agent"],
  },
  {
    category: "Technology",
    icon: FileText,
    title: "ERP & EDI Management",
    description: "Seamless integration with major retailers through EDI compliance, inventory sync, and order management systems.",
    features: ["EDI Integration", "Order Management", "Inventory Sync", "Compliance"],
  },
  {
    category: "Operations",
    icon: Package,
    title: "Fulfillment & Logistics",
    description: "End-to-end supply chain management including warehousing, FBA prep, distribution, and returns processing.",
    features: ["3PL Network", "FBA Prep", "Returns Management", "Freight Forwarding"],
  },
  {
    category: "Marketing",
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Data-driven advertising campaigns across all marketplaces with real-time optimization and detailed reporting.",
    features: ["PPC Management", "SEO Optimization", "Content Creation", "Analytics"],
  },
  {
    category: "Expansion",
    icon: Globe,
    title: "US Market Entry",
    description: "Complete support for international brands entering the US retail ecosystem with localized strategy.",
    features: ["Market Research", "Pricing Strategy", "Localization", "Compliance"],
  },
  {
    category: "Support",
    icon: Headphones,
    title: "Account Management",
    description: "Dedicated teams handling day-to-day operations, customer service, and marketplace compliance.",
    features: ["24/7 Support", "Case Management", "Performance Reviews", "Strategy Calls"],
  },
];

export const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
              Our Services
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Everything You Need to
              <br />
              <span className="text-primary">Succeed in US Retail</span>
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 mt-6 lg:mt-0">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-30"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300">
                  {/* Category Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full mb-6">
                    {service.category}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium hover:gap-3 gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? "bg-primary w-8" 
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
