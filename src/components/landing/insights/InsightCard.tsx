import { motion } from "framer-motion";
import { Calendar, Eye, Heart, Share2, ArrowRight } from "lucide-react";
import type { Insight } from "@/hooks/useInsights";

interface InsightCardProps {
  insight: Insight;
  index: number;
}

export const InsightCard = ({ insight, index }: InsightCardProps) => {
  const formattedDate = new Date(insight.published_date).toLocaleDateString("zh-CN");

  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
              {insight.tag}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {formattedDate}
            </span>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {insight.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {insight.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {insight.views_count}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5" />
              {insight.likes_count}
            </span>
            <span className="flex items-center gap-1 ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              <Share2 className="w-3.5 h-3.5" />
              分享
            </span>
          </div>
        </div>

        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
      </div>
    </motion.article>
  );
};
