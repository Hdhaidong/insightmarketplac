import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Award, Star, Crown, Zap, Home, Dumbbell, Dog, UtensilsCrossed, Baby, Car, Flower2, Shield, Shirt } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "全部品类", icon: Crown },
  { id: "电子配件", label: "电子配件", icon: Zap },
  { id: "家居用品", label: "家居用品", icon: Home },
  { id: "健身器材", label: "健身器材", icon: Dumbbell },
  { id: "宠物用品", label: "宠物用品", icon: Dog },
  { id: "厨房用品", label: "厨房用品", icon: UtensilsCrossed },
  { id: "母婴用品", label: "母婴用品", icon: Baby },
  { id: "汽车配件", label: "汽车配件", icon: Car },
  { id: "园艺工具", label: "园艺工具", icon: Flower2 },
  { id: "安防设备", label: "安防设备", icon: Shield },
  { id: "时尚配饰", label: "时尚配饰", icon: Shirt },
];

const topBrands = [
  // 电子配件 - 5个品牌
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
    rank: 78,
    brand: "ChargeMax",
    category: "电子配件",
    logo: "🔋",
    currentRanking: "Amazon 电子类 Top 80",
    growth: "+756%",
    achievement: "充电器品类销量第一",
    yearAchieved: "2024",
  },
  {
    rank: 112,
    brand: "TechLink",
    category: "电子配件",
    logo: "📱",
    currentRanking: "Amazon 电子类 Top 120",
    growth: "+623%",
    achievement: "手机配件Best Seller",
    yearAchieved: "2023",
  },
  {
    rank: 156,
    brand: "SmartHub",
    category: "电子配件",
    logo: "🎧",
    currentRanking: "Amazon 电子类 Top 160",
    growth: "+534%",
    achievement: "Prime Day 销量Top 20",
    yearAchieved: "2024",
  },
  {
    rank: 203,
    brand: "WirelessPro",
    category: "电子配件",
    logo: "📡",
    currentRanking: "Amazon 电子类 Top 210",
    growth: "+445%",
    achievement: "无线设备类目增长最快",
    yearAchieved: "2023",
  },

  // 家居用品 - 5个品牌
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
    rank: 134,
    brand: "CozyLiving",
    category: "家居用品",
    logo: "🛋️",
    currentRanking: "Amazon 家居类 Top 140",
    growth: "+578%",
    achievement: "软装品类Top 10",
    yearAchieved: "2024",
  },
  {
    rank: 189,
    brand: "CleanHome",
    category: "家居用品",
    logo: "🧹",
    currentRanking: "Amazon 家居类 Top 200",
    growth: "+489%",
    achievement: "清洁用品Best Seller",
    yearAchieved: "2023",
  },
  {
    rank: 245,
    brand: "StoragePlus",
    category: "家居用品",
    logo: "📦",
    currentRanking: "Amazon 家居类 Top 250",
    growth: "+412%",
    achievement: "收纳品类销量冠军",
    yearAchieved: "2023",
  },
  {
    rank: 312,
    brand: "LightDecor",
    category: "家居用品",
    logo: "💡",
    currentRanking: "Amazon 家居类 Top 320",
    growth: "+367%",
    achievement: "灯饰品类月销$500K",
    yearAchieved: "2024",
  },

  // 健身器材 - 5个品牌
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
    rank: 167,
    brand: "GymMaster",
    category: "健身器材",
    logo: "🏋️",
    currentRanking: "Amazon 运动类 Top 180",
    growth: "+534%",
    achievement: "力量训练器材Top 5",
    yearAchieved: "2024",
  },
  {
    rank: 198,
    brand: "YogaZen",
    category: "健身器材",
    logo: "🧘",
    currentRanking: "Amazon 运动类 Top 200",
    growth: "+423%",
    achievement: "瑜伽用品Best Seller",
    yearAchieved: "2023",
  },
  {
    rank: 267,
    brand: "CardioMax",
    category: "健身器材",
    logo: "🏃",
    currentRanking: "Amazon 运动类 Top 280",
    growth: "+389%",
    achievement: "有氧器材类目第一",
    yearAchieved: "2023",
  },
  {
    rank: 345,
    brand: "FlexBand",
    category: "健身器材",
    logo: "🎽",
    currentRanking: "Amazon 运动类 Top 350",
    growth: "+356%",
    achievement: "弹力带销量破100万件",
    yearAchieved: "2024",
  },

  // 宠物用品 - 5个品牌
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
    rank: 189,
    brand: "PawCare",
    category: "宠物用品",
    logo: "🐾",
    currentRanking: "Amazon 宠物类 Top 200",
    growth: "+512%",
    achievement: "宠物护理类Best Seller",
    yearAchieved: "2024",
  },
  {
    rank: 234,
    brand: "CatKingdom",
    category: "宠物用品",
    logo: "🐱",
    currentRanking: "Amazon 宠物类 Top 250",
    growth: "+445%",
    achievement: "猫用品类目Top 10",
    yearAchieved: "2024",
  },
  {
    rank: 298,
    brand: "PetToys",
    category: "宠物用品",
    logo: "🦴",
    currentRanking: "Amazon 宠物类 Top 300",
    growth: "+398%",
    achievement: "宠物玩具月销$300K",
    yearAchieved: "2023",
  },
  {
    rank: 367,
    brand: "AquaPet",
    category: "宠物用品",
    logo: "🐠",
    currentRanking: "Amazon 宠物类 Top 380",
    growth: "+334%",
    achievement: "水族用品增长第一",
    yearAchieved: "2024",
  },

  // 厨房用品 - 5个品牌
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
    rank: 145,
    brand: "ChefPro",
    category: "厨房用品",
    logo: "👨‍🍳",
    currentRanking: "Amazon 厨房类 Top 150",
    growth: "+612%",
    achievement: "厨具套装Best Seller",
    yearAchieved: "2024",
  },
  {
    rank: 223,
    brand: "BlendMax",
    category: "厨房用品",
    logo: "🥤",
    currentRanking: "Amazon 厨房类 Top 230",
    growth: "+534%",
    achievement: "搅拌机类目销量第一",
    yearAchieved: "2024",
  },
  {
    rank: 278,
    brand: "CookWare",
    category: "厨房用品",
    logo: "🥘",
    currentRanking: "Amazon 厨房类 Top 280",
    growth: "+467%",
    achievement: "不粘锅系列月销$400K",
    yearAchieved: "2023",
  },
  {
    rank: 334,
    brand: "KnifeEdge",
    category: "厨房用品",
    logo: "🔪",
    currentRanking: "Amazon 厨房类 Top 340",
    growth: "+389%",
    achievement: "刀具套装5星好评2万+",
    yearAchieved: "2024",
  },

  // 母婴用品 - 5个品牌
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
    rank: 167,
    brand: "MomCare",
    category: "母婴用品",
    logo: "🍼",
    currentRanking: "Amazon 母婴类 Top 180",
    growth: "+534%",
    achievement: "婴儿奶瓶类Best Seller",
    yearAchieved: "2024",
  },
  {
    rank: 212,
    brand: "TinySteps",
    category: "母婴用品",
    logo: "👣",
    currentRanking: "Amazon 母婴类 Top 220",
    growth: "+478%",
    achievement: "婴儿用品月销$600K",
    yearAchieved: "2024",
  },
  {
    rank: 289,
    brand: "SafeBaby",
    category: "母婴用品",
    logo: "🛡️",
    currentRanking: "Amazon 母婴类 Top 300",
    growth: "+398%",
    achievement: "安全座椅类目Top 5",
    yearAchieved: "2023",
  },
  {
    rank: 356,
    brand: "PlayTime",
    category: "母婴用品",
    logo: "🧸",
    currentRanking: "Amazon 母婴类 Top 360",
    growth: "+345%",
    achievement: "益智玩具Best Seller",
    yearAchieved: "2024",
  },

  // 汽车配件 - 5个品牌
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
    rank: 178,
    brand: "CarShine",
    category: "汽车配件",
    logo: "✨",
    currentRanking: "Amazon 汽车类 Top 180",
    growth: "+623%",
    achievement: "汽车美容类Best Seller",
    yearAchieved: "2024",
  },
  {
    rank: 234,
    brand: "DriveMax",
    category: "汽车配件",
    logo: "🔧",
    currentRanking: "Amazon 汽车类 Top 240",
    growth: "+489%",
    achievement: "工具套装月销$350K",
    yearAchieved: "2024",
  },
  {
    rank: 312,
    brand: "AutoLight",
    category: "汽车配件",
    logo: "💡",
    currentRanking: "Amazon 汽车类 Top 320",
    growth: "+412%",
    achievement: "LED车灯销量冠军",
    yearAchieved: "2023",
  },
  {
    rank: 389,
    brand: "CarTech",
    category: "汽车配件",
    logo: "📻",
    currentRanking: "Amazon 汽车类 Top 400",
    growth: "+356%",
    achievement: "车载电子类增长第一",
    yearAchieved: "2024",
  },

  // 园艺工具 - 4个品牌
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
    rank: 234,
    brand: "GreenThumb",
    category: "园艺工具",
    logo: "🌿",
    currentRanking: "Amazon 园艺类 Top 250",
    growth: "+512%",
    achievement: "园艺工具套装Best Seller",
    yearAchieved: "2024",
  },
  {
    rank: 289,
    brand: "PlantCare",
    category: "园艺工具",
    logo: "🪴",
    currentRanking: "Amazon 园艺类 Top 300",
    growth: "+445%",
    achievement: "花盆花器月销$200K",
    yearAchieved: "2023",
  },
  {
    rank: 412,
    brand: "LawnMaster",
    category: "园艺工具",
    logo: "🌻",
    currentRanking: "Amazon 园艺类 Top 420",
    growth: "+334%",
    achievement: "草坪护理类目Top 10",
    yearAchieved: "2024",
  },

  // 安防设备 - 4个品牌
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
    rank: 198,
    brand: "SecureHome",
    category: "安防设备",
    logo: "🏠",
    currentRanking: "Amazon 安防类 Top 200",
    growth: "+578%",
    achievement: "智能门锁Best Seller",
    yearAchieved: "2024",
  },
  {
    rank: 267,
    brand: "WatchGuard",
    category: "安防设备",
    logo: "📹",
    currentRanking: "Amazon 安防类 Top 280",
    growth: "+489%",
    achievement: "监控摄像头月销$450K",
    yearAchieved: "2023",
  },
  {
    rank: 345,
    brand: "AlertPro",
    category: "安防设备",
    logo: "🚨",
    currentRanking: "Amazon 安防类 Top 350",
    growth: "+398%",
    achievement: "报警系统类目第一",
    yearAchieved: "2024",
  },

  // 时尚配饰 - 4个品牌
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
  {
    rank: 178,
    brand: "TrendyBags",
    category: "时尚配饰",
    logo: "🎒",
    currentRanking: "Amazon 时尚类 Top 180",
    growth: "+612%",
    achievement: "背包类目Best Seller",
    yearAchieved: "2024",
  },
  {
    rank: 256,
    brand: "ShineJewels",
    category: "时尚配饰",
    logo: "💎",
    currentRanking: "Amazon 时尚类 Top 260",
    growth: "+523%",
    achievement: "首饰类月销$800K",
    yearAchieved: "2024",
  },
  {
    rank: 334,
    brand: "SunStyle",
    category: "时尚配饰",
    logo: "🕶️",
    currentRanking: "Amazon 时尚类 Top 340",
    growth: "+445%",
    achievement: "太阳镜夏季销量冠军",
    yearAchieved: "2023",
  },
];

export const AmazonTopBrands = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBrands = activeCategory === "all"
    ? topBrands
    : topBrands.filter(brand => brand.category === activeCategory);
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

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
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

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground mb-6"
        >
          共 {filteredBrands.length} 个品牌
          {activeCategory !== "all" && ` · ${activeCategory}`}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
          >
            {filteredBrands.map((brand, index) => (
              <motion.div
                key={brand.brand}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
          </motion.div>
        </AnimatePresence>
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
