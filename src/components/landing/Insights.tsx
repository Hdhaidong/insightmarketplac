import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Users, TrendingUp, Package, PlayCircle, ArrowRight, Calendar, Clock, Eye, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { id: "hot-products", label: "爆品洞察", icon: Flame },
  { id: "influencers", label: "爆红网红", icon: Users },
  { id: "platform-growth", label: "平台业绩爆发", icon: TrendingUp },
  { id: "new-products", label: "新发布产品", icon: Package },
  { id: "viral-videos", label: "新发布爆红视频", icon: PlayCircle },
];

const insightsData: Record<string, Array<{
  title: string;
  description: string;
  image?: string;
  date: string;
  stats: { views: string; likes: string };
  tag: string;
}>> = {
  "hot-products": [
    {
      title: "智能家居控制器成为亚马逊Best Seller",
      description: "该产品在过去30天内销量增长340%，成为家居类目TOP 1爆品。",
      date: "2025-01-24",
      stats: { views: "125K", likes: "8.2K" },
      tag: "家居",
    },
    {
      title: "便携式投影仪在Walmart销量暴涨",
      description: "凭借独特的便携设计和4K画质，该产品在电子类目中脱颖而出。",
      date: "2025-01-23",
      stats: { views: "98K", likes: "6.5K" },
      tag: "电子",
    },
    {
      title: "户外露营装备套装持续热销",
      description: "组合套装策略帮助卖家实现客单价提升200%。",
      date: "2025-01-22",
      stats: { views: "76K", likes: "4.3K" },
      tag: "户外",
    },
  ],
  "influencers": [
    {
      title: "@TechReviewer 单条视频带货$50万",
      description: "科技类头部网红最新带货视频创下单品销售记录。",
      date: "2025-01-24",
      stats: { views: "2.3M", likes: "180K" },
      tag: "科技",
    },
    {
      title: "@HomeDecorQueen 家居改造系列走红",
      description: "连续5条视频播放量破百万，合作品牌销量翻倍。",
      date: "2025-01-23",
      stats: { views: "1.8M", likes: "145K" },
      tag: "家居",
    },
    {
      title: "@FitnessGuru 健身器材评测引爆销量",
      description: "真实使用场景展示让产品转化率提升65%。",
      date: "2025-01-22",
      stats: { views: "890K", likes: "72K" },
      tag: "健身",
    },
  ],
  "platform-growth": [
    {
      title: "Home Depot Q4销售额同比增长45%",
      description: "第三方卖家计划持续扩张，新入驻品牌数量创历史新高。",
      date: "2025-01-24",
      stats: { views: "45K", likes: "3.2K" },
      tag: "趋势",
    },
    {
      title: "Walmart Marketplace流量暴涨60%",
      description: "节日季促销活动带动平台整体GMV突破记录。",
      date: "2025-01-23",
      stats: { views: "38K", likes: "2.8K" },
      tag: "数据",
    },
    {
      title: "亚马逊Prime会员数突破2亿",
      description: "会员增长推动平台卖家订单量持续攀升。",
      date: "2025-01-22",
      stats: { views: "52K", likes: "4.1K" },
      tag: "里程碑",
    },
  ],
  "new-products": [
    {
      title: "创新厨房小家电系列上线",
      description: "多功能设计满足现代家庭需求，预售火爆。",
      date: "2025-01-24",
      stats: { views: "32K", likes: "2.1K" },
      tag: "新品",
    },
    {
      title: "环保可降解包装材料首发",
      description: "响应平台环保政策，该产品获得官方推荐位。",
      date: "2025-01-23",
      stats: { views: "28K", likes: "1.9K" },
      tag: "环保",
    },
    {
      title: "智能宠物喂食器2.0版发布",
      description: "AI识别技术升级，支持多宠物家庭场景。",
      date: "2025-01-22",
      stats: { views: "41K", likes: "3.5K" },
      tag: "宠物",
    },
  ],
  "viral-videos": [
    {
      title: "产品开箱视频24小时播放量破500万",
      description: "悬念式开箱策略引发用户自发传播热潮。",
      date: "2025-01-24",
      stats: { views: "5.2M", likes: "420K" },
      tag: "爆款",
    },
    {
      title: "工厂探访Vlog引发品牌信任潮",
      description: "透明化生产流程展示赢得消费者好评如潮。",
      date: "2025-01-23",
      stats: { views: "1.2M", likes: "95K" },
      tag: "内容",
    },
    {
      title: "用户UGC视频合集播放量破千万",
      description: "品牌鼓励用户生成内容策略取得巨大成功。",
      date: "2025-01-22",
      stats: { views: "10.5M", likes: "680K" },
      tag: "UGC",
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
  const [activeCategory, setActiveCategory] = useState("hot-products");
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
