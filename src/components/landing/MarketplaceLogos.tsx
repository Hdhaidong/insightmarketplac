import { motion } from "framer-motion";

const marketplaces = [
  { 
    name: "Amazon", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    width: "100px"
  },
  { 
    name: "Walmart", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg",
    width: "110px"
  },
  { 
    name: "Home Depot", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/TheHomeDepot.svg",
    width: "55px"
  },
  { 
    name: "Lowe's", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Lowe%27s_Companies_Logo.svg",
    width: "85px"
  },
  { 
    name: "Target", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg",
    width: "45px"
  },
  { 
    name: "eBay", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    width: "75px"
  },
  { 
    name: "Best Buy", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg",
    width: "70px"
  },
  { 
    name: "Wayfair", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/Wayfair_logo.svg",
    width: "90px"
  },
];

const brandPartners = [
  { name: "Under Armour", initials: "UA" },
  { name: "Adidas", initials: "AD" },
  { name: "Pandora", initials: "PA" },
  { name: "Stanley", initials: "ST" },
  { name: "DeWalt", initials: "DW" },
  { name: "Milwaukee", initials: "ML" },
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

        {/* Marketplace Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
          {marketplaces.map((marketplace, index) => (
            <motion.div
              key={marketplace.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="flex flex-col items-center justify-center h-24 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-card transition-all duration-300">
                <img 
                  src={marketplace.logo} 
                  alt={marketplace.name}
                  className="opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  style={{ width: marketplace.width, height: 'auto', maxHeight: '40px', objectFit: 'contain' }}
                  onError={(e) => {
                    // Fallback to text if logo fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-sm font-bold text-muted-foreground group-hover:text-foreground">
                  {marketplace.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Valued Customers / Brand Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-12 border-t border-border"
        >
          <p className="text-center text-muted-foreground font-medium uppercase tracking-wider text-sm mb-8">
            Our Valued Customers — Proud to serve leading brands
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8">
            {brandPartners.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <div className="w-24 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center hover:border-primary/30 hover:bg-secondary transition-all duration-300">
                  <span className="text-lg font-bold text-muted-foreground group-hover:text-foreground tracking-wider">
                    {brand.initials}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
