import { motion } from "framer-motion";
import { Flame, Users, Target, TestTube, BarChart3, PlayCircle, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
}

const categories: Category[] = [
  { id: "influencer-analysis", label: "网红分析", icon: Users },
  { id: "hot-product-analysis", label: "爆品分析", icon: Flame },
  { id: "new-product-recruitment", label: "新品招募", icon: Target },
  { id: "sample-testing", label: "样品测评", icon: TestTube },
  { id: "recent-platform-performance", label: "平台近期业绩", icon: BarChart3 },
  { id: "viral-videos", label: "爆红视频", icon: PlayCircle },
];

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-wrap gap-2 mb-8"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
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
  );
};

export { categories };
