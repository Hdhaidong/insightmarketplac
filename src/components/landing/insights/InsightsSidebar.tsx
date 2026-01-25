import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingTopics = [
  "爆品选品",
  "网红营销",
  "跨境物流",
  "平台政策",
  "品牌出海",
];

export const InsightsSidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Newsletter Signup */}
      <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
        <h3 className="text-lg font-bold mb-2">每周市场简报</h3>
        <p className="text-primary-foreground/80 text-sm mb-4">
          获取独家市场趋势、平台更新和卖家成功策略的洞察。
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 text-sm"
          />
          <Button variant="hero" className="w-full" size="default">
            立即订阅
          </Button>
        </div>
        <p className="text-xs text-primary-foreground/60 mt-3">
          加入5,000+电商卖家。随时可取消订阅。
        </p>
      </div>

      {/* Trending Topics */}
      <div className="bg-card border border-border rounded-2xl p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">本周热门话题</h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Data Stats */}
      <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
        <TrendingUp className="w-10 h-10 text-accent mb-4" />
        <h3 className="text-lg font-bold text-foreground mb-2">
          实时数据监控
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          我们的数据团队全天候跟踪各大平台的最新动态和爆款趋势。
        </p>
        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          了解更多
        </Button>
      </div>
    </motion.aside>
  );
};
