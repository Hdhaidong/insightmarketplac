import { motion } from "framer-motion";
import { 
  Store, 
  RotateCcw, 
  Award, 
  Truck, 
  Shield, 
  Zap,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    icon: RotateCcw,
    title: "In-Store Returns",
    description: "Your customers can return marketplace purchases at 1,700+ retail locations nationwide.",
    stats: "1,700+ stores",
    highlight: true,
  },
  {
    icon: Award,
    title: "Loyalty Integration",
    description: "Earn points on every marketplace purchase through MyLowe's Rewards and Home Depot Pro Xtra.",
    stats: "2x rewards",
  },
  {
    icon: Truck,
    title: "Same-Day Fulfillment",
    description: "Leverage store inventory for rapid delivery and BOPIS (Buy Online, Pick Up In-Store) options.",
    stats: "< 2 hrs",
  },
  {
    icon: Store,
    title: "Total Home Strategy",
    description: "Expand into furniture, decor, outdoor, and tools categories across the entire home ecosystem.",
    stats: "15+ categories",
  },
  {
    icon: Shield,
    title: "Seller Verification",
    description: "Rigorous vetting process ensures your brand is positioned alongside trusted marketplace sellers.",
    stats: "100% verified",
  },
  {
    icon: Zap,
    title: "Mirakl-Powered",
    description: "Backed by the world's leading marketplace technology for seamless catalog and order management.",
    stats: "Enterprise grade",
  },
];

export const OmnichannelBenefits = () => {
  return (
    <section id="omnichannel" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Omnichannel Advantage
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Bridge Digital & Physical
            <br />
            <span className="text-primary">Retail Ecosystems</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Unlike pure-play e-commerce, major US retailers offer unique omnichannel benefits 
            that drive customer trust and repeat purchases.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                benefit.highlight 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-card border-border hover:border-primary/30 hover:shadow-card-hover"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  benefit.highlight 
                    ? "bg-primary-foreground/20" 
                    : "bg-primary/10"
                }`}>
                  <benefit.icon className={`w-6 h-6 ${
                    benefit.highlight ? "text-primary-foreground" : "text-primary"
                  }`} />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  benefit.highlight 
                    ? "bg-accent text-accent-foreground" 
                    : "bg-accent/10 text-accent"
                }`}>
                  {benefit.stats}
                </span>
              </div>
              
              <h3 className={`text-lg font-bold mb-2 ${
                benefit.highlight ? "text-primary-foreground" : "text-foreground"
              }`}>
                {benefit.title}
              </h3>
              <p className={`text-sm leading-relaxed ${
                benefit.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-secondary/50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Ready to Go Omnichannel?</h3>
              <p className="text-muted-foreground">
                We handle the complex integrations so you can focus on growth.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              EDI Compliant
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              API Integrated
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              Real-time Sync
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
