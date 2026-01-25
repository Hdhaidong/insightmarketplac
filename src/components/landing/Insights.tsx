import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInsights } from "@/hooks/useInsights";
import { InsightCard } from "./insights/InsightCard";
import { InsightsSidebar } from "./insights/InsightsSidebar";
import { CategoryTabs } from "./insights/CategoryTabs";

export const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("influencer-analysis");
  const { data: insights, isLoading, error } = useInsights(activeCategory);

  return (
    <section id="insights" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
                市场洞察
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                掌握最新
                <br />
                <span className="text-primary">电商趋势动态</span>
              </h2>
            </motion.div>

            {/* Category Tabs */}
            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            {/* Insights List */}
            <div className="space-y-4 min-h-[300px]">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <span className="ml-3 text-muted-foreground">加载中...</span>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <p className="text-destructive">加载失败，请稍后重试</p>
                </div>
              ) : insights && insights.length > 0 ? (
                insights.map((insight, index) => (
                  <InsightCard key={insight.id} insight={insight} index={index} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">暂无数据</p>
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Button variant="outline" size="lg" className="group">
                查看全部洞察
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <InsightsSidebar />
        </div>
      </div>
    </section>
  );
};
