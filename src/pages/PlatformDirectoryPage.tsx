import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Linkedin, Globe, Filter, ChevronDown, X } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { platformsData, totalPlatforms, totalRegions, type Platform, type Region } from "@/data/platformsData";

const PlatformCard = ({ platform, index }: { platform: Platform; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.02 }}
  >
    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
            {platform.name}
          </CardTitle>
          <div className="flex gap-1">
            <a
              href={platform.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-secondary transition-colors"
              title="访问网站"
            >
              <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
            </a>
            {platform.linkedin && (
              <a
                href={platform.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-md hover:bg-secondary transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground hover:text-[#0077B5]" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="secondary" className="text-xs">
            {platform.model}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {platform.categories}
        </p>
        <p className="text-xs text-muted-foreground/80 line-clamp-2">
          {platform.features}
        </p>
      </CardContent>
    </Card>
  </motion.div>
);

const RegionSection = ({ region, searchQuery }: { region: Region; searchQuery: string }) => {
  const filteredPlatforms = useMemo(() => {
    if (!searchQuery) return region.platforms;
    const query = searchQuery.toLowerCase();
    return region.platforms.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.categories.toLowerCase().includes(query) ||
        p.features.toLowerCase().includes(query)
    );
  }, [region.platforms, searchQuery]);

  if (filteredPlatforms.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl">{region.icon}</span>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{region.name}</h2>
          <p className="text-sm text-muted-foreground">
            {region.nameEn} · {filteredPlatforms.length} 个平台
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredPlatforms.map((platform, index) => (
          <PlatformCard key={platform.name} platform={platform} index={index} />
        ))}
      </div>
    </div>
  );
};

const StatsCard = ({ icon, value, label }: { icon: string; value: number; label: string }) => (
  <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border">
    <span className="text-2xl">{icon}</span>
    <div>
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

export default function PlatformDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filteredRegions = useMemo(() => {
    if (activeTab === "all") return platformsData;
    return platformsData.filter((r) => r.id === activeTab);
  }, [activeTab]);

  const totalFilteredPlatforms = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return platformsData.reduce((acc, region) => {
      const count = region.platforms.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.categories.toLowerCase().includes(query) ||
          p.features.toLowerCase().includes(query)
      ).length;
      return acc + count;
    }, 0);
  }, [searchQuery]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4" variant="secondary">
              <Globe className="h-3 w-3 mr-1" />
              全球电商平台目录
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              132+ 全球电商平台
              <span className="text-primary block mt-2">卖家入驻指南</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              覆盖全球20个地区的主流电商平台，一站式了解平台特色、品类和入驻要求
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="搜索平台名称、品类或特色..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary"
                >
                  <X className="h-5 w-5 text-muted-foreground" />
                </button>
              )}
            </div>

            {searchQuery && (
              <p className="mt-4 text-muted-foreground">
                找到 <span className="font-semibold text-foreground">{totalFilteredPlatforms}</span> 个匹配的平台
              </p>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            <StatsCard icon="🌍" value={totalPlatforms} label="电商平台" />
            <StatsCard icon="🗺️" value={totalRegions} label="覆盖地区" />
            <StatsCard icon="🛒" value={37} label="欧洲平台" />
            <StatsCard icon="🇺🇸" value={29} label="北美平台" />
          </motion.div>
        </div>
      </section>

      {/* Platform Directory */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Region Tabs */}
          <div className="mb-8">
            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <Button
                variant="outline"
                onClick={() => setShowMobileFilter(!showMobileFilter)}
                className="w-full justify-between"
              >
                <span className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  {activeTab === "all" ? "所有地区" : platformsData.find(r => r.id === activeTab)?.name}
                </span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showMobileFilter ? "rotate-180" : ""}`} />
              </Button>
              <AnimatePresence>
                {showMobileFilter && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 p-2 bg-card border rounded-lg"
                  >
                    <button
                      onClick={() => { setActiveTab("all"); setShowMobileFilter(false); }}
                      className={`w-full text-left px-4 py-2 rounded-md ${activeTab === "all" ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                    >
                      🌐 所有地区 ({totalPlatforms})
                    </button>
                    {platformsData.map((region) => (
                      <button
                        key={region.id}
                        onClick={() => { setActiveTab(region.id); setShowMobileFilter(false); }}
                        className={`w-full text-left px-4 py-2 rounded-md ${activeTab === region.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                      >
                        {region.icon} {region.name} ({region.count})
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="hidden md:block">
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent p-0">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border"
                >
                  🌐 所有地区 ({totalPlatforms})
                </TabsTrigger>
                {platformsData.map((region) => (
                  <TabsTrigger
                    key={region.id}
                    value={region.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border"
                  >
                    {region.icon} {region.name} ({region.count})
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Platform Grid */}
          <div className="space-y-12">
            {filteredRegions.map((region) => (
              <RegionSection key={region.id} region={region} searchQuery={searchQuery} />
            ))}
          </div>

          {/* Empty State */}
          {searchQuery && totalFilteredPlatforms === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                未找到匹配 "{searchQuery}" 的平台
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                清除搜索
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              需要专业的平台入驻服务？
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              我们拥有丰富的全球电商平台运营经验，帮助品牌快速入驻并实现增长
            </p>
            <Button size="lg" className="px-8">
              联系我们获取入驻方案
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
