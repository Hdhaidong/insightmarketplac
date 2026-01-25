import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, FileText, CreditCard, CheckCircle2, Globe, Shield, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout, useContactModal } from "@/components/layout/PageLayout";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const regions = [
  { id: "north-america", label: "北美" },
  { id: "europe", label: "欧洲" },
  { id: "asia-pacific", label: "亚太" },
];

const countries = {
  "north-america": [
    { 
      name: "美国", 
      code: "US", 
      flag: "🇺🇸",
      description: "全球最大消费市场，Delaware/Wyoming LLC注册，完善的电商基础设施。",
      features: ["Delaware/Wyoming LLC", "EIN税号申请", "美国银行开户", "合规代理"],
      popular: true,
    },
    { 
      name: "加拿大", 
      code: "CA", 
      flag: "🇨🇦",
      description: "北美第二大市场，联邦或省级公司注册，双语市场优势。",
      features: ["联邦/省级注册", "GST/HST登记", "加拿大银行开户", "商标注册"],
      popular: false,
    },
  ],
  "europe": [
    { 
      name: "英国", 
      code: "GB", 
      flag: "🇬🇧",
      description: "欧洲最大电商市场，快速注册流程，英语商业环境。",
      features: ["Ltd公司注册", "VAT登记", "英国银行开户", "公司秘书"],
      popular: true,
    },
    { 
      name: "德国", 
      code: "DE", 
      flag: "🇩🇪",
      description: "欧洲经济引擎，GmbH/UG注册，强大的制造业和物流网络。",
      features: ["GmbH/UG注册", "VAT登记", "德国银行开户", "贸易登记"],
      popular: true,
    },
    { 
      name: "法国", 
      code: "FR", 
      flag: "🇫🇷",
      description: "欧洲第三大经济体，SARL/SAS注册，奢侈品与时尚市场。",
      features: ["SARL/SAS注册", "VAT登记", "法国银行开户", "商业登记"],
      popular: false,
    },
    { 
      name: "荷兰", 
      code: "NL", 
      flag: "🇳🇱",
      description: "欧洲物流枢纽，BV公司注册，优越的税收协定网络。",
      features: ["BV公司注册", "VAT登记", "荷兰银行开户", "欧盟总部"],
      popular: true,
    },
    { 
      name: "西班牙", 
      code: "ES", 
      flag: "🇪🇸",
      description: "南欧重要市场，SL公司注册，西语市场门户。",
      features: ["SL公司注册", "VAT登记", "西班牙银行开户", "NIE申请"],
      popular: false,
    },
    { 
      name: "意大利", 
      code: "IT", 
      flag: "🇮🇹",
      description: "欧洲第四大经济体，SRL公司注册，时尚与设计中心。",
      features: ["SRL公司注册", "VAT登记", "意大利银行开户", "商会注册"],
      popular: false,
    },
    { 
      name: "瑞典", 
      code: "SE", 
      flag: "🇸🇪",
      description: "北欧创新中心，AB公司注册，高度数字化市场。",
      features: ["AB公司注册", "VAT登记", "瑞典银行开户", "BankID"],
      popular: false,
    },
    { 
      name: "塞浦路斯", 
      code: "CY", 
      flag: "🇨🇾",
      description: "欧盟成员国，优惠税率，理想的控股公司注册地。",
      features: ["Ltd公司注册", "VAT登记", "塞浦路斯银行", "税务优化"],
      popular: false,
    },
  ],
  "asia-pacific": [
    { 
      name: "澳大利亚", 
      code: "AU", 
      flag: "🇦🇺",
      description: "亚太重要市场，Pty Ltd注册，英联邦商业环境。",
      features: ["Pty Ltd注册", "ABN/GST登记", "澳洲银行开户", "商标注册"],
      popular: true,
    },
  ],
};

const pricingData = [
  { country: "美国", flag: "🇺🇸", entityType: "LLC", registration: "$599", taxId: "$149", bankAccount: "$299", annual: "$299/年", timeline: "3-5工作日" },
  { country: "英国", flag: "🇬🇧", entityType: "Ltd", registration: "£399", taxId: "£199", bankAccount: "£249", annual: "£199/年", timeline: "1-2工作日" },
  { country: "德国", flag: "🇩🇪", entityType: "GmbH/UG", registration: "€1,499", taxId: "€299", bankAccount: "€399", annual: "€599/年", timeline: "2-4周" },
  { country: "法国", flag: "🇫🇷", entityType: "SAS/SARL", registration: "€1,199", taxId: "€249", bankAccount: "€349", annual: "€499/年", timeline: "2-3周" },
  { country: "荷兰", flag: "🇳🇱", entityType: "BV", registration: "€1,299", taxId: "€249", bankAccount: "€349", annual: "€549/年", timeline: "1-2周" },
  { country: "西班牙", flag: "🇪🇸", entityType: "SL", registration: "€999", taxId: "€199", bankAccount: "€299", annual: "€449/年", timeline: "2-3周" },
  { country: "意大利", flag: "🇮🇹", entityType: "SRL", registration: "€1,099", taxId: "€249", bankAccount: "€349", annual: "€499/年", timeline: "2-4周" },
  { country: "瑞典", flag: "🇸🇪", entityType: "AB", registration: "€1,399", taxId: "€249", bankAccount: "€399", annual: "€549/年", timeline: "1-2周" },
  { country: "塞浦路斯", flag: "🇨🇾", entityType: "Ltd", registration: "€899", taxId: "€199", bankAccount: "€299", annual: "€399/年", timeline: "1-2周" },
  { country: "加拿大", flag: "🇨🇦", entityType: "Corp/Inc", registration: "CAD$799", taxId: "CAD$199", bankAccount: "CAD$349", annual: "CAD$349/年", timeline: "3-5工作日" },
  { country: "澳大利亚", flag: "🇦🇺", entityType: "Pty Ltd", registration: "AUD$899", taxId: "AUD$199", bankAccount: "AUD$349", annual: "AUD$399/年", timeline: "1-3工作日" },
];

const services = [
  { icon: Building2, title: "公司注册", description: "各类型实体注册，包括LLC、Ltd、GmbH等。" },
  { icon: FileText, title: "税号申请", description: "本地税号、VAT、GST等税务登记。" },
  { icon: CreditCard, title: "银行开户", description: "无需亲临，远程开设当地商业银行账户。" },
  { icon: Shield, title: "合规管理", description: "年报、税务申报、公司秘书服务。" },
  { icon: Globe, title: "商标注册", description: "本地商标注册与品牌保护。" },
  { icon: Users, title: "虚拟办公", description: "注册地址、邮件转发、电话服务。" },
];

const steps = [
  { step: "01", title: "咨询评估", description: "了解业务需求，推荐最优注册方案。" },
  { step: "02", title: "材料准备", description: "协助准备公证文件和注册资料。" },
  { step: "03", title: "公司注册", description: "提交注册申请，获取公司证书。" },
  { step: "04", title: "后续服务", description: "税务登记、银行开户、合规管理。" },
];

const CompanyFormationContent = () => {
  const { openModal } = useContactModal();
  const [activeRegion, setActiveRegion] = useState("north-america");

  const currentCountries = countries[activeRegion as keyof typeof countries] || [];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
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
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              全球公司注册
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-6 mb-6">
              多国公司<span className="text-primary">注册服务</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              一站式全球公司注册解决方案，覆盖北美、欧洲、亚太主要市场，助力品牌全球化布局。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openModal}>
                免费咨询
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                下载注册指南
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              覆盖全球主要市场
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              选择您的目标市场，我们提供专业的本地化注册服务。
            </p>
          </motion.div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300",
                  activeRegion === region.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                )}
              >
                {region.label}
              </button>
            ))}
          </div>

          {/* Country Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCountries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {country.popular && (
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    热门
                  </span>
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{country.name}</h3>
                    <span className="text-xs text-muted-foreground">{country.code}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {country.description}
                </p>
                
                <ul className="space-y-1.5 mb-4">
                  {country.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  onClick={openModal}
                >
                  了解详情
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              注册流程
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              从咨询到注册完成，全程专业团队协助。
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/2 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              各国注册费用对比
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              透明定价，无隐藏费用。价格可能根据具体需求有所调整。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg"
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/5 hover:bg-primary/5">
                    <TableHead className="font-bold text-foreground min-w-[120px]">国家/地区</TableHead>
                    <TableHead className="font-bold text-foreground">公司类型</TableHead>
                    <TableHead className="font-bold text-foreground">公司注册</TableHead>
                    <TableHead className="font-bold text-foreground">税号申请</TableHead>
                    <TableHead className="font-bold text-foreground">银行开户</TableHead>
                    <TableHead className="font-bold text-foreground">年度维护</TableHead>
                    <TableHead className="font-bold text-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        注册周期
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((item, index) => (
                    <TableRow key={item.country} className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.flag}</span>
                          <span className="text-foreground">{item.country}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{item.entityType}</TableCell>
                      <TableCell className="font-semibold text-primary">{item.registration}</TableCell>
                      <TableCell className="text-muted-foreground">{item.taxId}</TableCell>
                      <TableCell className="text-muted-foreground">{item.bankAccount}</TableCell>
                      <TableCell className="text-muted-foreground">{item.annual}</TableCell>
                      <TableCell className="text-muted-foreground">{item.timeline}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="p-4 bg-muted/30 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                * 以上价格为基础服务价格，具体费用根据实际需求可能有所调整。欢迎联系我们获取详细报价。
              </p>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Button size="lg" onClick={openModal}>
              获取定制报价
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              配套服务
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
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
              开启您的全球化之路
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              专业团队为您提供一对一咨询，定制最优注册方案。
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={openModal}>
              预约免费咨询
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const CompanyFormation = () => (
  <PageLayout>
    <CompanyFormationContent />
  </PageLayout>
);

export default CompanyFormation;
