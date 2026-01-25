import { motion } from "framer-motion";

const marketplaces = [
  { name: "Amazon", icon: "🛒" },
  { name: "Walmart", icon: "🏪" },
  { name: "Home Depot", icon: "🏠" },
  { name: "Lowe's", icon: "🔧" },
  { name: "Target", icon: "🎯" },
  { name: "eBay", icon: "📦" },
  { name: "Best Buy", icon: "💻" },
  { name: "Wayfair", icon: "🛋️" },
];

export const MarketplaceLogos = () => {
  return (
    <section id="marketplaces" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm mb-2">
            Trusted Marketplace Partners
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            We Sell on 50+ Major Retail Platforms
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {marketplaces.map((marketplace, index) => (
            <motion.div
              key={marketplace.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-300">
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {marketplace.icon}
                </span>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {marketplace.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
