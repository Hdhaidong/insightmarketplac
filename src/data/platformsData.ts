export interface Platform {
  name: string;
  website: string;
  categories: string;
  model: string;
  features: string;
  linkedin?: string;
}

export interface Region {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  count: number;
  platforms: Platform[];
}

export const platformsData: Region[] = [
  {
    id: "global",
    name: "全球",
    nameEn: "Global",
    icon: "🌍",
    count: 8,
    platforms: [
      { name: "Amazon", website: "https://www.amazon.com", categories: "综合全品类", model: "B2C", features: "流量霸主，需本地公司，FBA物流", linkedin: "https://www.linkedin.com/company/amazon" },
      { name: "eBay", website: "https://www.ebay.com", categories: "综合（二手/收藏品突出）", model: "B2C, C2C", features: "个人可开店，门槛低，二手交易占比高", linkedin: "https://www.linkedin.com/company/ebay" },
      { name: "Etsy", website: "https://www.etsy.com", categories: "手工艺品、定制产品、复古品", model: "B2C, C2C", features: "手工、定制和复古商品平台", linkedin: "https://www.linkedin.com/company/etsy" },
      { name: "Rakuten", website: "https://www.rakuten.com", categories: "综合", model: "B2C", features: "日本乐天全球站，积分促销", linkedin: "https://www.linkedin.com/company/rakuten" },
      { name: "Houzz", website: "https://www.houzz.com", categories: "家居装饰、家具、设计服务", model: "B2C", features: "家装设计师和业主社区", linkedin: "https://www.linkedin.com/company/houzz" },
      { name: "Back Market", website: "https://www.backmarket.com", categories: "翻新电子设备", model: "B2C", features: "循环经济代表，专注认证翻新电子", linkedin: "https://www.linkedin.com/company/back-market" },
      { name: "SHEIN", website: "https://www.shein.com", categories: "快时尚", model: "B2C", features: "全球快时尚巨头", linkedin: "https://www.linkedin.com/company/shein" },
      { name: "AliExpress", website: "https://www.aliexpress.com", categories: "综合（小商品/配件突出）", model: "B2C", features: "阿里巴巴旗下，面向国际的B2C平台", linkedin: "https://www.linkedin.com/company/aliexpress" },
    ]
  },
  {
    id: "north-america",
    name: "北美",
    nameEn: "North America",
    icon: "🇺🇸",
    count: 29,
    platforms: [
      { name: "Walmart", website: "https://www.walmart.com", categories: "综合（杂货突出）", model: "B2C", features: "邀请制，需美国公司，WFS物流", linkedin: "https://www.linkedin.com/company/walmart" },
      { name: "The Home Depot", website: "https://www.homedepot.com", categories: "家居建材、工具、园艺", model: "B2C", features: "家居改善领导者，供应商申请", linkedin: "https://www.linkedin.com/company/the-home-depot" },
      { name: "Target", website: "https://www.target.com", categories: "综合（时尚、家居突出）", model: "B2C", features: "邀请制（Target Plus），需美国公司", linkedin: "https://www.linkedin.com/company/target" },
      { name: "Costco", website: "https://www.costco.com", categories: "综合（批量/会员制）", model: "B2C", features: "供应商合同，批量供货，会员制", linkedin: "https://www.linkedin.com/company/costco-wholesale" },
      { name: "Lowe's", website: "https://www.lowes.com", categories: "家居建材、工具、园艺", model: "B2C", features: "家居改善领导者，供应商申请", linkedin: "https://www.linkedin.com/company/lowe's" },
      { name: "Best Buy", website: "https://www.bestbuy.com", categories: "消费电子、家电", model: "B2C", features: "邀请制，需美国公司", linkedin: "https://www.linkedin.com/company/best-buy" },
      { name: "Newegg", website: "https://www.newegg.com", categories: "电脑配件、消费电子", model: "B2C", features: "科技产品专家，需注册公司", linkedin: "https://www.linkedin.com/company/newegg" },
      { name: "Chewy", website: "https://www.chewy.com", categories: "宠物食品与用品", model: "B2C", features: "美国宠物电商巨头，订阅服务", linkedin: "https://www.linkedin.com/company/chewy" },
      { name: "Petco", website: "https://www.petco.com", categories: "宠物食品与用品", model: "B2C", features: "美国宠物零售巨头，线上线下结合", linkedin: "https://www.linkedin.com/company/petco" },
      { name: "Wayfair", website: "https://www.wayfair.com", categories: "家具、家居装饰", model: "B2C", features: "家居电商巨头，AR设计，供应商审批", linkedin: "https://www.linkedin.com/company/wayfair" },
      { name: "Faire", website: "https://www.faire.com", categories: "手工艺品、特色品牌（B2B批发）", model: "B2B", features: "连接品牌与零售商，在线批发蓝海", linkedin: "https://www.linkedin.com/company/faire" },
      { name: "Overstock", website: "https://www.overstock.com", categories: "家具、家居装饰、地毯", model: "B2C", features: "家居电商平台", linkedin: "https://www.linkedin.com/company/overstock-com" },
      { name: "Kohl's", website: "https://www.kohls.com", categories: "时尚、家居、美容", model: "B2C", features: "Kohl's Cash促销，邀请制", linkedin: "https://www.linkedin.com/company/kohl's" },
      { name: "Tractor Supply Co.", website: "https://www.tractorsupply.com", categories: "农业用品、工具、宠物", model: "B2C", features: "乡村生活方式零售商", linkedin: "https://www.linkedin.com/company/tractor-supply-company" },
      { name: "Menards", website: "https://www.menards.com", categories: "家居改善、建材、工具", model: "B2C", features: "美国中西部领先的家居零售商", linkedin: "https://www.linkedin.com/company/menards" },
      { name: "Bed Bath & Beyond", website: "https://www.bedbathandbeyond.com", categories: "家居用品、床上用品、装饰", model: "B2C", features: "美国家居用品专业零售商", linkedin: "https://www.linkedin.com/company/bed-bath-&-beyond" },
      { name: "Sears", website: "https://www.sears.com", categories: "家电、工具、时尚、家居", model: "B2C", features: "美国老牌零售商", linkedin: "https://www.linkedin.com/company/sears" },
      { name: "Kroger", website: "https://www.kroger.com", categories: "杂货、健康、美妆", model: "B2C", features: "美国超市巨头，在线杂货", linkedin: "https://www.linkedin.com/company/kroger" },
      { name: "JCPenney", website: "https://www.jcpenney.com", categories: "时尚、家居、美容", model: "B2C", features: "美国老牌百货", linkedin: "https://www.linkedin.com/company/jcpenney" },
      { name: "PetSmart", website: "https://www.petsmart.com", categories: "宠物食品与用品", model: "B2C", features: "美国宠物用品零售商", linkedin: "https://www.linkedin.com/company/petsmart" },
      { name: "Lamps Plus", website: "https://www.lampsplus.com", categories: "照明、家具", model: "B2C", features: "美国照明产品专家", linkedin: "https://www.linkedin.com/company/lamps-plus" },
      { name: "AAFES", website: "https://www.aafes.com", categories: "综合", model: "B2C", features: "服务美军及家属的军方超市", linkedin: "https://www.linkedin.com/company/aafes" },
      { name: "QVC", website: "https://www.qvc.com", categories: "综合", model: "B2C", features: "电视及直播购物巨头", linkedin: "https://www.linkedin.com/company/qvc" },
      { name: "Meijer", website: "https://www.meijer.com", categories: "杂货、时尚、家居", model: "B2C", features: "美国中西部超市巨头", linkedin: "https://www.linkedin.com/company/meijer" },
      { name: "Build.com", website: "https://www.build.com", categories: "家居改善、卫浴、照明", model: "B2C", features: "家居装修产品专家", linkedin: "https://www.linkedin.com/company/build.com" },
      { name: "Bellacor", website: "https://www.bellacor.com", categories: "照明、家具、家居装饰", model: "B2C", features: "家居装饰与照明产品", linkedin: "https://www.linkedin.com/company/bellacor" },
      { name: "Hayneedle", website: "https://www.hayneedle.com", categories: "家具、家居装饰、户外", model: "B2C", features: "家居用品线上零售商", linkedin: "https://www.linkedin.com/company/hayneedle" },
      { name: "HSN", website: "https://www.hsn.com", categories: "综合", model: "B2C", features: "电视及直播购物巨头", linkedin: "https://www.linkedin.com/company/hsn" },
      { name: "CVS Health", website: "https://www.cvs.com", categories: "健康、药品、美妆", model: "B2C", features: "美国药店连锁巨头", linkedin: "https://www.linkedin.com/company/cvs-health" },
    ]
  },
  {
    id: "europe",
    name: "欧洲",
    nameEn: "Europe",
    icon: "🇪🇺",
    count: 37,
    platforms: [
      { name: "ManoMano", website: "https://www.manomano.fr", categories: "DIY、家居改善、园艺", model: "B2C", features: "欧洲DIY家居电商领导者", linkedin: "https://www.linkedin.com/company/manomano" },
      { name: "Zalando", website: "https://www.zalando.com", categories: "时尚、鞋类、美容", model: "B2C", features: "欧洲时尚巨头，需品牌授权", linkedin: "https://www.linkedin.com/company/zalando" },
      { name: "Otto", website: "https://www.otto.de", categories: "综合（时尚、家居突出）", model: "B2C", features: "德国第二大电商，邀请制", linkedin: "https://www.linkedin.com/company/otto-group" },
      { name: "Allegro", website: "https://allegro.pl", categories: "综合全品类", model: "B2C, C2C", features: "波兰绝对霸主，流量巨大", linkedin: "https://www.linkedin.com/company/allegro" },
      { name: "Bol.com", website: "https://www.bol.com", categories: "综合全品类", model: "B2C", features: "比荷卢地区（荷比卢）最大电商", linkedin: "https://www.linkedin.com/company/bol.com" },
      { name: "Cdiscount", website: "https://www.cdiscount.com", categories: "综合（电子、杂货突出）", model: "B2C", features: "法国本土最大电商之一，闪购促销", linkedin: "https://www.linkedin.com/company/cdiscount" },
      { name: "Fnac", website: "https://www.fnac.com", categories: "消费电子、文化产品、图书", model: "B2C", features: "法国文化电子产品巨头", linkedin: "https://www.linkedin.com/company/fnac" },
      { name: "Leroy Merlin", website: "https://www.leroymerlin.fr", categories: "家居改善、建材、园艺", model: "B2C", features: "法国家居装修巨头，全渠道", linkedin: "https://www.linkedin.com/company/leroy-merlin" },
      { name: "MediaMarkt", website: "https://www.mediamarkt.es", categories: "消费电子、家电", model: "B2C", features: "欧洲消费电子零售巨头", linkedin: "https://www.linkedin.com/company/media-markt" },
      { name: "Mercado Libre", website: "https://www.mercadolibre.com", categories: "综合全品类", model: "B2C, C2C", features: "拉美地区绝对霸主", linkedin: "https://www.linkedin.com/company/mercado-libre" },
      { name: "Carrefour", website: "https://www.carrefour.es", categories: "杂货、电子、家居", model: "B2C", features: "法国超市巨头西班牙站", linkedin: "https://www.linkedin.com/company/carrefour" },
      { name: "E.Leclerc", website: "https://www.e.leclerc", categories: "杂货、电子、家居", model: "B2C", features: "法国超市巨头", linkedin: "https://www.linkedin.com/company/e.leclerc" },
      { name: "Darty", website: "https://www.darty.com", categories: "消费电子、家电", model: "B2C", features: "法国家电连锁巨头", linkedin: "https://www.linkedin.com/company/darty" },
      { name: "Rue du Commerce", website: "https://www.rueducommerce.fr", categories: "消费电子、家居、时尚", model: "B2C", features: "法国电商领导者之一", linkedin: "https://www.linkedin.com/company/rue-du-commerce" },
      { name: "Boulanger", website: "https://www.boulanger.com", categories: "消费电子、家电", model: "B2C", features: "法国家电零售商", linkedin: "https://www.linkedin.com/company/boulanger" },
      { name: "Kaufland", website: "https://www.kaufland.de", categories: "综合（杂货突出）", model: "B2C", features: "德国超市巨头线上平台", linkedin: "https://www.linkedin.com/company/kaufland-international" },
      { name: "Home24", website: "https://www.home24.de", categories: "家具、家居装饰", model: "B2C", features: "德国家具家居电商", linkedin: "https://www.linkedin.com/company/home24" },
      { name: "Hood", website: "https://www.hood.de", categories: "综合（二手突出）", model: "C2C, B2C", features: "德国二手商品平台", linkedin: "https://www.linkedin.com/company/hood.de" },
      { name: "Metro", website: "https://www.metro.de", categories: "杂货、餐饮用品（B2B）", model: "B2B", features: "德国B2B批发巨头", linkedin: "https://www.linkedin.com/company/metro-ag" },
      { name: "Fruugo", website: "https://www.fruugo.com", categories: "综合", model: "B2C", features: "支持全球销售的英国平台", linkedin: "https://www.linkedin.com/company/fruugo" },
      { name: "OnBuy", website: "https://www.onbuy.com", categories: "综合", model: "B2C", features: "英国增长最快的平台之一", linkedin: "https://www.linkedin.com/company/onbuy" },
      { name: "PcComponentes", website: "https://www.pccomponentes.com", categories: "电脑配件、消费电子", model: "B2C", features: "西班牙领先的科技产品平台", linkedin: "https://www.linkedin.com/company/pccomponentes" },
      { name: "Conforama", website: "https://www.conforama.fr", categories: "家具、家居装饰、家电", model: "B2C", features: "法国家庭家居领导者", linkedin: "https://www.linkedin.com/company/conforama" },
      { name: "Miravia", website: "https://www.miravia.es", categories: "综合", model: "B2C", features: "西班牙新兴电商平台", linkedin: "https://www.linkedin.com/company/miravia" },
      { name: "ePRICE", website: "https://www.eprice.it", categories: "消费电子、家电", model: "B2C", features: "意大利领先的电商平台", linkedin: "https://www.linkedin.com/company/eprice" },
      { name: "Fyndiq", website: "https://fyndiq.se", categories: "综合（折扣品）", model: "B2C", features: "瑞典折扣平台", linkedin: "https://www.linkedin.com/company/fyndiq" },
      { name: "CDON", website: "https://cdon.se", categories: "游戏、图书、消费电子", model: "B2C", features: "瑞典数字媒体和商品平台", linkedin: "https://www.linkedin.com/company/cdon" },
      { name: "Empik", website: "https://www.empik.com", categories: "图书、媒体、生活方式", model: "B2C", features: "波兰文化商业巨头", linkedin: "https://www.linkedin.com/company/empik" },
      { name: "Worten", website: "https://www.worten.pt", categories: "消费电子、家电", model: "B2C", features: "葡萄牙领先的电子零售商", linkedin: "https://www.linkedin.com/company/worten" },
      { name: "B&Q", website: "https://www.diy.com", categories: "DIY和家居装饰", model: "B2C", features: "英国和爱尔兰最大DIY零售商", linkedin: "https://www.linkedin.com/company/b&q" },
      { name: "Brico", website: "https://www.brico.nl", categories: "DIY、家居改善、园艺", model: "B2C", features: "荷兰DIY零售品牌", linkedin: "https://www.linkedin.com/company/brico" },
      { name: "Praxis", website: "https://www.praxis.nl", categories: "DIY、家居改善、园艺", model: "B2C", features: "与Brico同属一家集团", linkedin: "https://www.linkedin.com/company/praxis" },
      { name: "Castorama", website: "https://www.castorama.fr", categories: "家居装修、建材、园艺", model: "B2C", features: "法国家居装修连锁品牌", linkedin: "https://www.linkedin.com/company/castorama" },
      { name: "BUT", website: "https://www.but.fr", categories: "家具、家居装饰、家电", model: "B2C", features: "法国家具市场第二，全渠道", linkedin: "https://www.linkedin.com/company/but" },
      { name: "La Redoute", website: "https://www.laredoute.fr", categories: "时尚、家居装饰", model: "B2C", features: "法国领先的时尚家居平台", linkedin: "https://www.linkedin.com/company/la-redoute" },
      { name: "Vente-unique", website: "https://www.vente-unique.com", categories: "室内外家具", model: "B2C", features: "法国垂直家居平台，设计感强", linkedin: "https://www.linkedin.com/company/vente-unique" },
      { name: "Showroomprive", website: "https://www.showroomprive.com", categories: "时尚、家居（闪购）", model: "B2C", features: "法国上市的闪购电商巨头", linkedin: "https://www.linkedin.com/company/showroomprive" },
    ]
  },
  {
    id: "uk",
    name: "英国",
    nameEn: "United Kingdom",
    icon: "🇬🇧",
    count: 23,
    platforms: [
      { name: "ASOS", website: "https://www.asos.com", categories: "时尚（年轻快时尚）", model: "B2C", features: "全球年轻时尚巨头", linkedin: "https://www.linkedin.com/company/asos" },
      { name: "John Lewis & Partners", website: "https://www.johnlewis.com", categories: "高端家居、时尚、电子、礼品", model: "B2C", features: "英国中高端百货标杆", linkedin: "https://www.linkedin.com/company/john-lewis-partners" },
      { name: "Marks & Spencer", website: "https://www.marksandspencer.com", categories: "时尚、食品、家居", model: "B2C", features: "英国国民品牌", linkedin: "https://www.linkedin.com/company/marks-and-spencer" },
      { name: "Argos", website: "https://www.argos.co.uk", categories: "家居、电子、玩具、花园", model: "B2C", features: "独特的\"数字商城+物流网络\"模式", linkedin: "https://www.linkedin.com/company/argos" },
      { name: "Not On The High Street", website: "https://www.notonthehighstreet.com", categories: "个性化、定制化、手工艺礼品", model: "B2C", features: "专注于独特、个性化产品的curated平台", linkedin: "https://www.linkedin.com/company/not-on-the-high-street" },
      { name: "Ocado", website: "https://www.ocado.com", categories: "在线杂货", model: "B2C", features: "英国纯在线杂货巨头，技术驱动", linkedin: "https://www.linkedin.com/company/ocado" },
      { name: "Sainsbury's", website: "https://www.sainsburys.co.uk", categories: "杂货、家居、服装", model: "B2C", features: "英国主要超市巨头", linkedin: "https://www.linkedin.com/company/sainsbury's" },
      { name: "Tesco", website: "https://www.tesco.com", categories: "杂货、家居、服装", model: "B2C", features: "英国最大零售商", linkedin: "https://www.linkedin.com/company/tesco" },
      { name: "The Very Group", website: "https://www.very.co.uk", categories: "时尚、家居、电子", model: "B2C", features: "信贷购物专家，主打\"Buy Now, Pay Later\"", linkedin: "https://www.linkedin.com/company/the-very-group" },
      { name: "Littlewoods", website: "https://www.littlewoods.com", categories: "时尚、家居、电子", model: "B2C", features: "与Very同属一个集团，同样以信贷购物为特色", linkedin: "https://www.linkedin.com/company/littlewoods" },
      { name: "AO.com", website: "https://www.ao.com", categories: "家电", model: "B2C", features: "英国最大的在线家电专家", linkedin: "https://www.linkedin.com/company/ao-com" },
      { name: "Currys", website: "https://www.currys.co.uk", categories: "消费电子、家电", model: "B2C", features: "英国最大的电子电器零售商", linkedin: "https://www.linkedin.com/company/currys" },
      { name: "Boots", website: "https://www.boots.com", categories: "健康与美妆", model: "B2C", features: "英国药妆店巨头", linkedin: "https://www.linkedin.com/company/boots-uk" },
      { name: "Screwfix", website: "https://www.screwfix.com", categories: "工具、贸易商用品", model: "B2C, B2B", features: "英国领先的贸易商工具和配件供应商", linkedin: "https://www.linkedin.com/company/screwfix" },
      { name: "Wickes", website: "https://www.wickes.co.uk", categories: "DIY、家居装饰、建材", model: "B2C", features: "英国主要的DIY和建材零售商", linkedin: "https://www.linkedin.com/company/wickes" },
      { name: "Made.com", website: "https://www.made.com", categories: "设计感家具", model: "B2C", features: "设计师家具平台", linkedin: "https://www.linkedin.com/company/made-com" },
      { name: "Hut Group (THG)", website: "https://www.thg.com", categories: "美妆、健康、奢侈品", model: "B2C", features: "电商孵化巨头", linkedin: "https://www.linkedin.com/company/thg" },
      { name: "LookFantastic", website: "https://www.lookfantastic.com", categories: "美妆", model: "B2C", features: "THG旗下，英国领先的美妆电商", linkedin: "https://www.linkedin.com/company/lookfantastic.com" },
      { name: "Myprotein", website: "https://www.myprotein.com", categories: "运动营养品", model: "B2C", features: "THG旗下，全球领先的运动营养品牌", linkedin: "https://www.linkedin.com/company/myprotein" },
      { name: "Feelunique", website: "https://www.feelunique.com", categories: "美妆", model: "B2C", features: "英国知名美妆电商", linkedin: "https://www.linkedin.com/company/feelunique" },
      { name: "AllBeauty", website: "https://www.allbeauty.com", categories: "美妆", model: "B2C", features: "折扣美妆电商", linkedin: "https://www.linkedin.com/company/allbeauty" },
      { name: "Home Bargains", website: "https://www.homebargains.co.uk", categories: "折扣家居、杂货", model: "B2C", features: "线下折扣店巨头，线上业务同步发展", linkedin: "https://www.linkedin.com/company/home-bargains" },
      { name: "B&M", website: "https://www.bmstores.co.uk", categories: "折扣家居、杂货、园艺", model: "B2C", features: "英国知名折扣零售商", linkedin: "https://www.linkedin.com/company/b&m-retail" },
    ]
  },
  {
    id: "asia",
    name: "亚洲",
    nameEn: "Asia",
    icon: "🌏",
    count: 6,
    platforms: [
      { name: "Coupang", website: "https://www.coupang.com", categories: "综合全品类", model: "B2C", features: "韩国电商巨头，\"火箭配送\"", linkedin: "https://www.linkedin.com/company/coupang" },
      { name: "Tokopedia", website: "https://www.tokopedia.com", categories: "综合全品类", model: "B2C, C2C", features: "印度尼西亚领先的电商平台", linkedin: "https://www.linkedin.com/company/tokopedia" },
      { name: "Naver", website: "https://www.navercorp.com", categories: "综合", model: "B2C", features: "韩国领先的搜索引擎和电商平台", linkedin: "https://www.linkedin.com/company/naver-corp" },
      { name: "11Street", website: "https://www.11st.co.kr", categories: "综合", model: "B2C", features: "韩国主要电商平台之一", linkedin: "https://www.linkedin.com/company/11st" },
      { name: "Qoo10", website: "https://www.qoo10.sg", categories: "综合", model: "B2C", features: "在新加坡及多个亚洲国家运营", linkedin: "https://www.linkedin.com/company/qoo10" },
      { name: "Gmarket", website: "https://www.gmarket.co.kr", categories: "综合", model: "B2C", features: "韩国领先的电商平台", linkedin: "https://www.linkedin.com/company/gmarket" },
    ]
  },
  {
    id: "oceania",
    name: "大洋洲",
    nameEn: "Oceania",
    icon: "🇦🇺",
    count: 4,
    platforms: [
      { name: "Kogan", website: "https://www.kogan.com", categories: "综合（折扣电子突出）", model: "B2C", features: "澳大利亚折扣电商，需澳洲GST", linkedin: "https://www.linkedin.com/company/kogan.com" },
      { name: "Catch", website: "https://www.catch.com.au", categories: "综合（折扣品）", model: "B2C", features: "澳大利亚折扣电商", linkedin: "https://www.linkedin.com/company/catch-com-au" },
      { name: "MyDeal", website: "https://www.mydeal.com.au", categories: "家具、家居等大件重货", model: "B2C", features: "平台不自营，卖家自发大件货", linkedin: "https://www.linkedin.com/company/mydeal-com-au" },
      { name: "Trade Me", website: "https://www.trademe.co.nz", categories: "综合（二手突出）", model: "B2C, C2C", features: "新西兰主流平台，个人可开店", linkedin: "https://www.linkedin.com/company/trade-me" },
    ]
  },
  {
    id: "other",
    name: "其他地区",
    nameEn: "Other Regions",
    icon: "🌐",
    count: 25,
    platforms: [
      // 东欧
      { name: "Rozetka", website: "https://rozetka.com.ua", categories: "综合", model: "B2C", features: "乌克兰领先的电商平台" },
      { name: "eMAG", website: "https://www.emag.hu", categories: "综合", model: "B2C", features: "匈牙利领先的电商平台" },
      { name: "Mall", website: "https://www.mall.cz", categories: "综合", model: "B2C", features: "捷克领先的电商平台" },
      // 中东
      { name: "Fordeal", website: "https://www.fordeal.com", categories: "综合", model: "B2C", features: "中东电商平台" },
      { name: "Noon", website: "https://www.noon.com", categories: "综合", model: "B2C", features: "中东领先的电商平台" },
      // 北欧
      { name: "Tjek", website: "https://www.tjek.dk", categories: "综合", model: "B2C", features: "丹麦电商平台" },
      { name: "Komplett", website: "https://www.komplett.no", categories: "消费电子", model: "B2C", features: "挪威领先的电子产品平台" },
      { name: "NetOnNet", website: "https://www.netonnet.se", categories: "消费电子", model: "B2C", features: "瑞典电子产品平台" },
      { name: "Webhallen", website: "https://www.webhallen.com", categories: "消费电子、游戏", model: "B2C", features: "瑞典科技产品平台" },
      { name: "Apotea", website: "https://www.apotea.se", categories: "健康、药品", model: "B2C", features: "瑞典在线药房" },
      { name: "Jollyroom", website: "https://www.jollyroom.se", categories: "母婴用品", model: "B2C", features: "瑞典母婴电商" },
      { name: "Verkkokauppa", website: "https://www.verkkokauppa.com", categories: "消费电子", model: "B2C", features: "芬兰领先的电子产品平台" },
      // 德国
      { name: "AUTODOC", website: "https://www.autodoc.de", categories: "汽车配件", model: "B2C", features: "德国汽车配件电商" },
      { name: "Zooplus", website: "https://www.zooplus.com", categories: "宠物用品", model: "B2C", features: "欧洲最大的宠物用品电商" },
      { name: "Conrad", website: "https://www.conrad.de", categories: "电子元件、消费电子", model: "B2C, B2B", features: "德国电子元件专家" },
      // 比荷卢
      { name: "Vanden Borre", website: "https://www.vandenborre.be", categories: "消费电子、家电", model: "B2C", features: "比利时电子零售商" },
      { name: "Coolblue", website: "https://www.coolblue.nl", categories: "消费电子、家电", model: "B2C", features: "荷兰领先的电子电商" },
      { name: "Wehkamp", website: "https://www.wehkamp.nl", categories: "时尚、家居", model: "B2C", features: "荷兰综合电商" },
      { name: "Zalando Lounge", website: "https://www.zalando-lounge.nl", categories: "时尚（闪购）", model: "B2C", features: "Zalando旗下闪购平台" },
      // 爱尔兰
      { name: "Littlewoods Ireland", website: "https://www.littlewoods.ie", categories: "时尚、家居", model: "B2C", features: "爱尔兰综合电商" },
      { name: "Harvey Norman", website: "https://www.harveynorman.ie", categories: "家电、家具", model: "B2C", features: "爱尔兰家电家具零售商" },
      // 瑞士
      { name: "Digitec", website: "https://www.digitec.ch", categories: "消费电子", model: "B2C", features: "瑞士领先的电子产品平台" },
      { name: "Galaxus", website: "https://www.galaxus.ch", categories: "综合", model: "B2C", features: "瑞士最大的综合电商" },
      { name: "Brack", website: "https://www.brack.ch", categories: "消费电子、办公用品", model: "B2C, B2B", features: "瑞士电子办公平台" },
      // 非洲
      { name: "Kilimall", website: "https://www.kilimall.co.ke", categories: "综合", model: "B2C", features: "非洲领先的电商平台" },
    ]
  }
];

export const totalPlatforms = 132;
export const totalRegions = 20;
