import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, ChevronDown, Flame, Users, Target, TestTube, BarChart3, PlayCircle, LucideIcon, Search } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { useInsights } from "@/hooks/useInsights";
import { InsightCard } from "@/components/landing/insights/InsightCard";
import { InsightsSidebar } from "@/components/landing/insights/InsightsSidebar";
import { InsightSearch } from "@/components/insights/InsightSearch";

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

const InsightsCategoryContent = ({ category }: { category: CategoryInfo }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInsights(category.id, searchQuery);

  const allInsights = data?.pages.flatMap((page) => page.data) || [];
  const totalCount = data?.pages[0]?.totalCount || 0;

  const CategoryIcon = category.icon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            background: `linear-gradient(to bottom right, ${category.color}10, transparent, transparent)` 
          }}
        />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              首页
            </Link>
            <span>/</span>
            <Link to="/insights" className="hover:text-foreground transition-colors">
              市场洞察
            </Link>
            <span>/</span>
            <span className="text-foreground">{category.label}</span>
          </nav>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: category.color }}
              >
                <CategoryIcon className="w-8 h-8 text-white" />
              </div>
              <span 
                className="px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ backgroundColor: category.color + "1A", color: category.color }}
              >
                {category.labelEn}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {category.label}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Search Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mb-6"
              >
                <InsightSearch
                  onSearch={handleSearch}
                  isSearching={isLoading && !!searchQuery}
                  placeholder={`在${category.label}中搜索...`}
                />
              </motion.div>

              {/* Category Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/insights/${cat.slug}`}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      cat.id === category.id
                        ? "text-white shadow-lg"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                    }`}
                    style={cat.id === category.id ? { backgroundColor: cat.color } : undefined}
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.label}
                  </Link>
                ))}
              </motion.div>

              {/* Results Count */}
              {!isLoading && (
                <p className="text-sm text-muted-foreground mb-4">
                  {searchQuery ? (
                    <>搜索 "{searchQuery}" 找到 {totalCount} 条结果</>
                  ) : (
                    <>共 {totalCount} 条洞察，已加载 {allInsights.length} 条</>
                  )}
                </p>
              )}

              {/* Insights List */}
              <div className="space-y-4 min-h-[300px]">
                {isLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin" style={{ color: category.color }} />
                    <span className="ml-3 text-muted-foreground">加载中...</span>
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <p className="text-destructive">加载失败，请稍后重试</p>
                  </div>
                ) : allInsights.length > 0 ? (
                  allInsights.map((insight, index) => (
                    <InsightCard key={insight.id} insight={insight} index={index} />
                  ))
                ) : (
                  <div className="text-center py-12 bg-card border border-border rounded-2xl">
                    <CategoryIcon className="w-12 h-12 mx-auto mb-4" style={{ color: category.color }} />
                    <p className="text-muted-foreground mb-2">暂无{category.label}数据</p>
                    <p className="text-sm text-muted-foreground/70">
                      我们正在努力收集更多洞察，请稍后再来查看
                    </p>
                  </div>
                )}
              </div>

              {/* Load More Button */}
              {hasNextPage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mt-8"
                >
                  <Button
                    size="lg"
                    onClick={() => fetchNextPage()}
                    disabled={isFetchingNextPage}
                    className="group"
                    style={{ backgroundColor: category.color }}
                  >
                    {isFetchingNextPage ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        加载中...
                      </>
                    ) : (
                      <>
                        加载更多
                        <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <InsightsSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

const InsightsCategoryPage = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  
  const category = categories.find(c => c.slug === categorySlug);
  
  if (!category) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <PageLayout>
      <InsightsCategoryContent category={category} />
    </PageLayout>
  );
};

export default InsightsCategoryPage;
