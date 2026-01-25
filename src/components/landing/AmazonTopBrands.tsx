import { motion } from "framer-motion";
import { TrendingUp, Award, Star, BarChart3, Crown } from "lucide-react";

const topBrands = [
  {
    rank: 47,
    brand: "PowerTech",
    category: "电子配件",
    logo: "🔌",
    currentRanking: "Amazon 电子类 Top 50",
    growth: "+892%",
    achievement: "12个月内从新品牌进入前100",
    yearAchieved: "2024",
  },
  {
    rank: 89,
    brand: "HomeComfort",
    category: "家居用品",
    logo: "🏠",
    currentRanking: "Amazon 家居类 Top 100",
    growth: "+654%",
    achievement: "季度销售额突破$2M",
    yearAchieved: "2024",
  },
  {
    rank: 123,
    brand: "FitPro Elite",
    category: "健身器材",
    logo: "💪",
    currentRanking: "Amazon 运动类 Top 150",
    growth: "+478%",
    achievement: "Best Seller 标签保持180天",
    yearAchieved: "2024",
  },
  {
    rank: 156,
    brand: "PetLove Premium",
    category: "宠物用品",
    logo: "🐕",
    currentRanking: "Amazon 宠物类 Top 200",
    growth: "+567%",
    achievement: "复购率达到45%",
    yearAchieved: "2023",
  },
  {
    rank: 198,
    brand: "KitchenMaster",
    category: "厨房用品",
    logo: "🍳",
    currentRanking: "Amazon 厨房类 Top 200",
    growth: "+723%",
    achievement: "Prime Day 销量Top 10",
    yearAchieved: "2023",
  },
  {
    rank: 234,
    brand: "BabyJoy",
    category: "母婴用品",
    logo: "👶",
    currentRanking: "Amazon 母婴类 Top 250",
    growth: "+412%",
    achievement: "Amazon's Choice 认证",
    yearAchieved: "2023",
  },
  {
    rank: 287,
    brand: "AutoCare Pro",
    category: "汽车配件",
    logo: "🚗",
    currentRanking: "Amazon 汽车类 Top 300",
    growth: "+534%",
    achievement: "4.8星平均评分，2万+评论",
    yearAchieved: "2023",
  },
  {
    rank: 356,
    brand: "GardenGlow",
    category: "园艺工具",
    logo: "🌱",
    currentRanking: "Amazon 园艺类 Top 400",
    growth: "+389%",
    achievement: "春季销售季Top卖家",
    yearAchieved: "2024",
  },
  {
    rank: 412,
    brand: "TechSafe",
    category: "安防设备",
    logo: "🔒",
    currentRanking: "Amazon 安防类 Top 450",
    growth: "+445%",
    achievement: "B2B订单增长300%",
    yearAchieved: "2024",
  },
  {
    rank: 489,
    brand: "StyleWear",
    category: "时尚配饰",
    logo: "👜",
    currentRanking: "Amazon 时尚类 Top 500",
    growth: "+367%",
    achievement: "品牌搜索量增长500%",
    yearAchieved: "2023",
  },
];

export const AmazonTopBrands = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Crown className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Amazon Top 500 品牌</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            历史成功案例
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            我们帮助众多品牌进入 Amazon 畅销榜前500名，以下是部分成功案例
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {topBrands.map((brand, index) => (
            <motion.div
              key={brand.brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300"
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
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50+</div>
              <p className="text-sm text-muted-foreground">进入Top 500的品牌</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">523%</div>
              <p className="text-sm text-muted-foreground">平均销售增长</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">8.5个月</div>
              <p className="text-sm text-muted-foreground">平均达成时间</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">95%</div>
              <p className="text-sm text-muted-foreground">客户续约率</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
