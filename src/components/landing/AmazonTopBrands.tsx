import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { categories, topBrands, TopBrand } from "./amazon/brandData";
import { BrandCard } from "./amazon/BrandCard";
import { BrandDetailModal } from "./amazon/BrandDetailModal";

export const AmazonTopBrands = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState<TopBrand | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredBrands = activeCategory === "all"
    ? topBrands
    : topBrands.filter(brand => brand.category === activeCategory);

  const handleBrandClick = (brand: TopBrand) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrand(null);
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Crown className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Amazon Top 500 品牌</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            历史成功案例
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们帮助众多品牌进入 Amazon 畅销榜前500名，以下是部分成功案例
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground mb-6"
        >
          共 {filteredBrands.length} 个品牌
          {activeCategory !== "all" && ` · ${activeCategory}`}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {filteredBrands.map((brand, index) => (
              <BrandCard
                key={brand.brand}
                brand={brand}
                index={index}
                onClick={() => handleBrandClick(brand)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <p className="text-sm text-muted-foreground">进入Top 500的品牌</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">523%</div>
              <p className="text-sm text-muted-foreground">平均销售增长</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">8.5个月</div>
              <p className="text-sm text-muted-foreground">平均达成时间</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">95%</div>
              <p className="text-sm text-muted-foreground">客户续约率</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Brand Detail Modal */}
      <BrandDetailModal
        brand={selectedBrand}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
