import { motion } from "framer-motion";
import { 
  Rocket, 
  BarChart3, 
  Package, 
  Headphones, 
  Globe, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Marketplace Launch",
    description: "Strategic onboarding and launch execution on new retail platforms with optimized listings and inventory setup.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description: "Data-driven advertising campaigns across all marketplaces with real-time optimization and reporting.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Package,
    title: "Fulfillment & Logistics",
    description: "End-to-end supply chain management including warehousing, distribution, and returns processing.",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Headphones,
    title: "Account Management",
    description: "Dedicated teams handling day-to-day operations, customer service, and marketplace compliance.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Globe,
    title: "US Market Entry",
    description: "Complete support for international brands entering the US retail ecosystem.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Long-term partnership with quarterly business reviews and expansion roadmaps.",
    color: "bg-orange-500/10 text-orange-600",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to
            <br />
            <span className="text-primary">Dominate Marketplaces</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial launch to ongoing optimization, we provide comprehensive 
            solutions to help your brand thrive on every major retail platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-card hover:shadow-card-hover transition-all duration-300">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
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
    </section>
  );
};
