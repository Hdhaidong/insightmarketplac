import { motion } from "framer-motion";
import { ArrowRight, Flame, Users, Target, TestTube, BarChart3, PlayCircle, LucideIcon, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout, useContactModal } from "@/components/layout/PageLayout";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface CategoryInfo {
  id: string;
  slug: string;
  label: string;
  labelEn: string;
  icon: LucideIcon;
  description: string;
  color: string;
}

const categories: CategoryInfo[] = [
  { 
    id: "influencer-analysis", 
    slug: "influencer-analysis",
    label: "网红分析", 
    labelEn: "Influencer Analysis",
    icon: Users,
    description: "深度剖析各平台头部网红的带货能力、粉丝画像和合作价值",
    color: "#8B5CF6"
  },
  { 
    id: "hot-product-analysis", 
    slug: "hot-product-analysis",
    label: "爆品分析", 
    labelEn: "Hot Product Analysis",
    icon: Flame,
    description: "追踪全网热销爆款，解析产品成功要素和市场机会",
    color: "#EF4444"
  },
  { 
    id: "new-product-recruitment", 
    slug: "new-product-recruitment",
    label: "新品招募", 
    labelEn: "New Product Recruitment",
    icon: Target,
    description: "发现最新上市产品，把握首发红利和招募机会",
    color: "#10B981"
  },
  { 
    id: "sample-testing", 
    slug: "sample-testing",
    label: "样品测评", 
    labelEn: "Sample Testing",
    icon: TestTube,
    description: "专业产品测评报告，帮助卖家做出明智选品决策",
    color: "#F59E0B"
  },
  { 
    id: "recent-platform-performance", 
    slug: "platform-performance",
    label: "平台近期业绩", 
    labelEn: "Platform Performance",
    icon: BarChart3,
    description: "各大电商平台的最新业绩数据和趋势分析",
    color: "#3B82F6"
  },
  { 
    id: "viral-videos", 
    slug: "viral-videos",
    label: "爆红视频", 
    labelEn: "Viral Videos",
    icon: PlayCircle,
    description: "解码爆款视频内容，学习病毒式传播的成功秘诀",
    color: "#EC4899"
  },
];

const InsightsIndexContent = () => {
  const { openModal } = useContactModal();

  // Fetch counts for each category
  const { data: categoryCounts } = useQuery({
    queryKey: ["insights-counts"],
    queryFn: async () => {
      const counts: Record<string, number> = {};
      for (const cat of categories) {
        const { count } = await supabase
          .from("insights")
          .select("*", { count: "exact", head: true })
          .eq("category", cat.id as "hot-product-analysis" | "hot-products" | "influencer-analysis" | "influencers" | "new-product-recruitment" | "new-products" | "platform-growth" | "recent-platform-performance" | "sample-testing" | "viral-videos");
        counts[cat.id] = count || 0;
      }
      return counts;
    },
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            返回首页
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                市场洞察中心
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              掌握最新
              <br />
              <span className="text-primary">电商趋势动态</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              深度分析各大平台的网红生态、爆品趋势、新品机会，帮助卖家做出数据驱动的商业决策。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openModal}>
                获取定制报告
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                订阅每周简报
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Cards Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              选择您感兴趣的领域
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们的数据团队全天候追踪各大平台的最新动态，为您提供最有价值的市场洞察。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/insights/${category.slug}`}
                  className="group block p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300"
                  style={{ 
                    ["--category-color" as string]: category.color 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = category.color + "4D";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: category.color + "1A" }}
                  >
                    <category.icon 
                      className="w-7 h-7" 
                      style={{ color: category.color }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.label}
                    </h3>
                    {categoryCounts && categoryCounts[category.id] > 0 && (
                      <span 
                        className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-white"
                        style={{ backgroundColor: category.color }}
                      >
                        {categoryCounts[category.id]}篇
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground/70 mb-3">
                    {category.labelEn}
                  </p>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: category.color }}>
                    查看全部
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "深度分析报告" },
              { value: "50K+", label: "月度数据点" },
              { value: "100+", label: "追踪网红" },
              { value: "24/7", label: "实时监控" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              需要定制化市场分析？
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              我们的数据团队可以为您提供针对特定品类、平台或竞品的深度分析报告。
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={openModal}>
              联系我们
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const InsightsIndex = () => (
  <PageLayout>
    <InsightsIndexContent />
  </PageLayout>
);

export default InsightsIndex;

export { categories };
