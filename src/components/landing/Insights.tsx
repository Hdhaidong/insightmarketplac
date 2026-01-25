import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Users, TrendingUp, Package, PlayCircle, ArrowRight, Calendar, Clock, Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Search, Target, TestTube, BarChart3 } from "lucide-react";

const categories = [
  { id: "influencer-analysis", label: "网红分析", icon: Users },
  { id: "hot-product-analysis", label: "爆品分析", icon: Flame },
  { id: "new-product-recruitment", label: "新品招募", icon: Target },
  { id: "sample-testing", label: "样品测评", icon: TestTube },
  { id: "recent-platform-performance", label: "平台近期业绩", icon: BarChart3 },
];

const insightsData: Record<string, Array<{
  title: string;
  description: string;
  image?: string;
  date: string;
  stats: { views: string; likes: string };
  tag: string;
}>> = {
  "influencer-analysis": [
    {
      title: "头部科技类网红带货能力分析报告",
      description: "深度解析TOP 50科技类网红的粉丝画像、带货转化率及合作模式。",
      date: "2025-01-24",
      stats: { views: "156K", likes: "12.3K" },
      tag: "科技",
    },
    {
      title: "家居类网红合作ROI对比",
      description: "对比分析不同粉丝量级家居网红的投放效果与性价比。",
      date: "2025-01-23",
      stats: { views: "89K", likes: "6.8K" },
      tag: "家居",
    },
    {
      title: "美妆网红跨平台影响力评估",
      description: "从TikTok到Instagram，美妆网红如何实现多平台流量变现。",
      date: "2025-01-22",
      stats: { views: "134K", likes: "9.5K" },
      tag: "美妆",
    },
  ],
  "hot-product-analysis": [
    {
      title: "2025年Q1家居类爆品趋势预测",
      description: "基于大数据分析，预测下季度家居类目最具潜力的产品方向。",
      date: "2025-01-24",
      stats: { views: "203K", likes: "15.6K" },
      tag: "趋势",
    },
    {
      title: "智能穿戴设备爆品成功要素解析",
      description: "剖析过去一年智能穿戴品类Top 10产品的共同特征。",
      date: "2025-01-23",
      stats: { views: "178K", likes: "11.2K" },
      tag: "电子",
    },
    {
      title: "户外露营装备爆品打造指南",
      description: "从选品到营销，一文读懂如何打造户外类目爆款。",
      date: "2025-01-22",
      stats: { views: "92K", likes: "7.4K" },
      tag: "户外",
    },
  ],
  "new-product-recruitment": [
    {
      title: "Amazon 2025春季新品招募计划开启",
      description: "针对家居、厨房类目，亚马逊推出专项扶持政策。",
      date: "2025-01-24",
      stats: { views: "67K", likes: "4.2K" },
      tag: "政策",
    },
    {
      title: "Walmart新品入驻绿色通道",
      description: "符合条件的新品牌可享受快速审核及流量扶持。",
      date: "2025-01-23",
      stats: { views: "54K", likes: "3.8K" },
      tag: "入驻",
    },
    {
      title: "Home Depot供应商新品招募",
      description: "建材、工具类目优质供应商招募计划详解。",
      date: "2025-01-22",
      stats: { views: "43K", likes: "2.9K" },
      tag: "招募",
    },
  ],
  "sample-testing": [
    {
      title: "产品样品测试流程全解析",
      description: "从样品准备到测试报告，完整的测试流程指南。",
      date: "2025-01-24",
      stats: { views: "78K", likes: "5.6K" },
      tag: "流程",
    },
    {
      title: "FBA样品入仓测试注意事项",
      description: "避免常见错误，确保样品顺利通过亚马逊检测。",
      date: "2025-01-23",
      stats: { views: "112K", likes: "8.1K" },
      tag: "FBA",
    },
    {
      title: "产品合规性测试要求汇总",
      description: "各大平台对产品安全认证的最新要求整理。",
      date: "2025-01-22",
      stats: { views: "95K", likes: "6.7K" },
      tag: "合规",
    },
  ],
  "recent-platform-performance": [
    {
      title: "Amazon Q4销售额同比增长52%",
      description: "第四季度第三方卖家整体业绩创历史新高。",
      date: "2025-01-24",
      stats: { views: "234K", likes: "18.9K" },
      tag: "业绩",
    },
    {
      title: "Walmart Marketplace月活跃用户突破1.5亿",
      description: "平台流量持续增长，卖家入驻机会凸显。",
      date: "2025-01-23",
      stats: { views: "187K", likes: "14.2K" },
      tag: "数据",
    },
    {
      title: "Home Depot线上销售占比提升至25%",
      description: "传统建材巨头数字化转型成效显著。",
      date: "2025-01-22",
      stats: { views: "156K", likes: "11.8K" },
      tag: "转型",
    },
  ],
};

const trendingTopics = [
  "爆品选品",
  "网红营销",
  "跨境物流",
  "平台政策",
  "品牌出海",
];

export const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("influencer-analysis");
  const currentInsights = insightsData[activeCategory] || [];

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

            {/* Insights List */}
            <div className="space-y-4">
              {currentInsights.map((insight, index) => (
                <motion.article
                  key={insight.title}
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
                          {insight.date}
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
                          {insight.stats.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3.5 h-3.5" />
                          {insight.stats.likes}
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
              ))}
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
        </div>
      </div>
    </section>
  );
};
