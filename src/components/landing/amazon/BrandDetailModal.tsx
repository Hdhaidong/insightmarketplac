import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Star, Target, Clock, DollarSign, MessageSquare, ThumbsUp, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { TopBrand } from "./brandData";

interface BrandDetailModalProps {
  brand: TopBrand | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BrandDetailModal = ({ brand, isOpen, onClose }: BrandDetailModalProps) => {
  if (!brand) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{brand.logo}</span>
            <div>
              <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                {brand.brand}
                <Badge variant="secondary" className="text-xs">
                  #{brand.rank}
                </Badge>
              </DialogTitle>
              <p className="text-muted-foreground mt-1">{brand.category}</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-center"
            >
              <DollarSign className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-primary">{brand.metrics.monthlyRevenue}</p>
              <p className="text-xs text-muted-foreground">月销售额</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="p-3 rounded-xl bg-accent/5 border border-accent/20 text-center"
            >
              <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" />
              <p className="text-lg font-bold text-accent">{brand.growth}</p>
              <p className="text-xs text-muted-foreground">增长率</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-3 rounded-xl bg-primary/5 border border-primary/20 text-center"
            >
              <Star className="w-5 h-5 text-primary mx-auto mb-1" />
              <p className="text-lg font-bold text-primary">{brand.metrics.rating}⭐</p>
              <p className="text-xs text-muted-foreground">平均评分</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="p-3 rounded-xl bg-accent/5 border border-accent/20 text-center"
            >
              <MessageSquare className="w-5 h-5 text-accent mx-auto mb-1" />
              <p className="text-lg font-bold text-accent">{brand.metrics.reviewCount}</p>
              <p className="text-xs text-muted-foreground">评论数</p>
            </motion.div>
          </div>

          {/* Current Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/30"
          >
            <Award className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-semibold text-primary">{brand.currentRanking}</p>
              <p className="text-sm text-muted-foreground">{brand.achievement} · {brand.yearAchieved}</p>
            </div>
          </motion.div>

          {/* Success Story */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <ThumbsUp className="w-5 h-5 text-primary" />
              成功故事
            </h3>
            <p className="text-muted-foreground leading-relaxed">{brand.story}</p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              合作时间线
            </h3>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-4">
                {brand.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.05 }}
                    className="flex items-start gap-4 pl-8 relative"
                  >
                    <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                    <div>
                      <p className="font-medium text-sm text-primary">{item.month}</p>
                      <p className="text-muted-foreground text-sm">{item.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Strategies */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              核心策略
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {brand.strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 + index * 0.05 }}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <h4 className="font-medium text-foreground mb-1">{strategy.title}</h4>
                  <p className="text-sm text-muted-foreground">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 p-4 rounded-xl bg-secondary/50 border border-border"
          >
            <div className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">退货率: </span>
              <span className="font-medium text-foreground">{brand.metrics.returnRate}</span>
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
