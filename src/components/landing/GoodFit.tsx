import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const goodFitItems = [
  "Established brand with quality products ready for US market",
  "Annual revenue of $500K+ or strong growth trajectory",
  "Committed to long-term marketplace success",
  "Open to strategic partnership and collaboration",
  "Products with competitive margins (30%+ gross margin)",
  "Ready to invest in inventory and marketing",
];

const notFitItems = [
  "Looking for quick, short-term results only",
  "Not willing to invest in proper inventory levels",
  "Expecting us to sell low-quality or counterfeit products",
  "Unable to provide necessary product documentation",
  "Not interested in data-driven decision making",
  "Seeking the cheapest option over quality service",
];

export const GoodFit = () => {
  return (
    <section className="py-24 bg-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            Is This Right For You?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We're Selective About
            <br />
            <span className="text-primary">Who We Work With</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in building long-term partnerships. Here's how to know if we're the right fit for each other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border shadow-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Good Fit</h3>
            </div>
            
            <ul className="space-y-4">
              {goodFitItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not a Fit Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-card border border-border shadow-card"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Not a Fit</h3>
            </div>
            
            <ul className="space-y-4">
              {notFitItems.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
