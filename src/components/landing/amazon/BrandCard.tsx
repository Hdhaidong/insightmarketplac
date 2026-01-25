import { motion } from "framer-motion";
import { TrendingUp, Award, Star } from "lucide-react";
import { TopBrand } from "./brandData";

interface BrandCardProps {
  brand: TopBrand;
  index: number;
  onClick: () => void;
}

export const BrandCard = ({ brand, index, onClick }: BrandCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group relative p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Rank Badge */}
      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
        <span className="text-xs font-bold text-primary-foreground">#{brand.rank}</span>
      </div>

      {/* Brand Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{brand.logo}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground truncate">{brand.brand}</h3>
          <p className="text-xs text-muted-foreground">{brand.category}</p>
        </div>
      </div>

      {/* Current Ranking */}
      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-primary/5">
        <Award className="w-4 h-4 text-primary shrink-0" />
        <span className="text-xs font-medium text-primary truncate">{brand.currentRanking}</span>
      </div>

      {/* Growth */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <TrendingUp className="w-4 h-4 text-accent" />
          <span className="text-sm font-bold text-accent">{brand.growth}</span>
        </div>
        <span className="text-xs text-muted-foreground">{brand.yearAchieved}</span>
      </div>

      {/* Achievement */}
      <div className="flex items-start gap-2 pt-3 border-t border-border">
        <Star className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">{brand.achievement}</p>
      </div>

      {/* Hover hint */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
        <span className="text-xs font-medium text-primary bg-background/90 px-3 py-1 rounded-full">点击查看详情</span>
      </div>
    </motion.div>
  );
};
