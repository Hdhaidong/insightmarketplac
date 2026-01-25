import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Award } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    value: "340%",
    label: "Average Revenue Growth",
    description: "Within first 12 months of partnership",
  },
  {
    icon: TrendingUp,
    value: "2.8x",
    label: "ROAS Improvement",
    description: "Across all advertising channels",
  },
  {
    icon: Users,
    value: "15M+",
    label: "Orders Fulfilled",
    description: "Through our logistics network",
  },
  {
    icon: Award,
    value: "#1",
    label: "Marketplace Partner",
    description: "Rated by 200+ brand executives",
  },
];

export const Results = () => {
  return (
    <section id="results" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Proven Results
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Numbers That Speak
            <br />
            <span className="text-gradient">For Themselves</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Our track record of success has made us the go-to partner for 
            brands serious about marketplace growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-5">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-primary-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-primary-foreground/60">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
