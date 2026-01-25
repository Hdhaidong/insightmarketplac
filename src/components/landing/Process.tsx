import { motion } from "framer-motion";
import { Search, Target, Zap, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    description: "We analyze your brand, products, and current marketplace presence to identify opportunities and create a custom strategy.",
  },
  {
    number: "02",
    icon: Target,
    title: "Strategy Development",
    description: "Our team develops a comprehensive go-to-market plan including pricing, positioning, and channel selection.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Launch & Execute",
    description: "We handle all aspects of launch including listing optimization, inventory setup, and advertising campaigns.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Optimize & Scale",
    description: "Continuous monitoring and optimization ensures sustainable growth with regular reporting and strategic adjustments.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to
            <br />
            <span className="text-primary">Marketplace Success</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven four-step process takes you from initial consultation 
            to sustained marketplace growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10">
                <div className="text-6xl font-extrabold text-muted/50 mb-4">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
