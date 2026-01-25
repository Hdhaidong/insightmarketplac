import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  ShoppingCart,
  Megaphone,
  Truck,
  BookOpen
} from "lucide-react";

const categories = [
  { id: "all", label: "All Posts", icon: BookOpen },
  { id: "marketplace", label: "Marketplace", icon: ShoppingCart },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "fulfillment", label: "Fulfillment", icon: Truck },
  { id: "trends", label: "Industry Trends", icon: TrendingUp },
];

const articles = [
  {
    id: 1,
    slug: "amazon-seller-guide-2025",
    title: "The Ultimate Amazon Seller Guide for 2025",
    excerpt: "Everything you need to know about selling on Amazon in 2025, from account setup to advanced optimization strategies.",
    category: "marketplace",
    author: "Sarah Chen",
    date: "Jan 20, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=500&fit=crop",
    featured: true
  },
  {
    id: 2,
    slug: "walmart-marketplace-growth",
    title: "Walmart Marketplace: Your Next Growth Channel",
    excerpt: "Discover why Walmart is becoming the go-to platform for e-commerce brands looking to expand beyond Amazon.",
    category: "marketplace",
    author: "Michael Ross",
    date: "Jan 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 3,
    slug: "ppc-strategies-marketplace",
    title: "5 PPC Strategies That Actually Work on Marketplaces",
    excerpt: "Stop wasting ad spend with these proven PPC strategies that top sellers use to maximize their return on investment.",
    category: "marketing",
    author: "Emma Johnson",
    date: "Jan 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 4,
    slug: "fulfillment-optimization-tips",
    title: "Fulfillment Optimization: Cut Costs by 30%",
    excerpt: "Learn how to streamline your fulfillment operations and reduce costs while improving delivery times.",
    category: "fulfillment",
    author: "David Park",
    date: "Jan 12, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 5,
    slug: "ecommerce-trends-2025",
    title: "E-Commerce Trends Shaping 2025",
    excerpt: "From AI-powered personalization to social commerce, explore the trends that will define e-commerce this year.",
    category: "trends",
    author: "Lisa Wang",
    date: "Jan 10, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 6,
    slug: "home-depot-pro-seller-tips",
    title: "Home Depot Pro Seller: Expert Tips",
    excerpt: "Insider strategies for succeeding on Home Depot's marketplace, from product listings to customer service.",
    category: "marketplace",
    author: "James Miller",
    date: "Jan 8, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 7,
    slug: "brand-building-marketplace",
    title: "Building a Brand on Marketplace Platforms",
    excerpt: "How to create a memorable brand identity that stands out in the competitive marketplace landscape.",
    category: "marketing",
    author: "Rachel Green",
    date: "Jan 5, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 8,
    slug: "inventory-management-best-practices",
    title: "Inventory Management Best Practices",
    excerpt: "Avoid stockouts and overstock situations with these proven inventory management techniques.",
    category: "fulfillment",
    author: "Kevin Zhang",
    date: "Jan 3, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
    featured: false
  },
  {
    id: 9,
    slug: "social-commerce-revolution",
    title: "The Social Commerce Revolution",
    excerpt: "How TikTok Shop and Instagram are changing the way consumers discover and buy products.",
    category: "trends",
    author: "Amanda Liu",
    date: "Jan 1, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    featured: false
  }
];

const BlogContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredArticle = articles.find(a => a.featured);
  
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !article.featured;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Blog & Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Marketplace Insights & Strategies
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert tips, industry trends, and proven strategies to grow your marketplace business.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-xl border-border/50 focus:border-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-border/50 sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat.id)}
                className="shrink-0"
              >
                <cat.icon className="w-4 h-4 mr-2" />
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === "all" && !searchQuery && (
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/blog/${featuredArticle.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 items-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                  </div>
                  <div className="space-y-4">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === featuredArticle.category)?.label}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredArticle.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {featuredArticle.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <Button variant="link" className="p-0 group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link to={`/blog/${article.slug}`} className="group block h-full">
                    <div className="h-full flex flex-col rounded-xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <Badge 
                          variant="secondary" 
                          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-xs"
                        >
                          {categories.find(c => c.id === article.category)?.label}
                        </Badge>
                      </div>
                      <div className="flex-1 p-5 flex flex-col">
                        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                          <span className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest marketplace insights, tips, and strategies delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button>
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const Blog = () => (
  <PageLayout>
    <BlogContent />
  </PageLayout>
);

export default Blog;
