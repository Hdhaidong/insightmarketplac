import { motion } from "framer-motion";
import { Mic, FileText, Video, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    type: "Podcast",
    icon: Mic,
    title: "The Future of Home Improvement E-commerce",
    description: "Our experts discuss the latest trends in DIY retail and what it means for brands entering the US market.",
    date: "Jan 20, 2025",
    duration: "32 min",
    color: "bg-accent/10 text-accent",
  },
  {
    type: "Article",
    icon: FileText,
    title: "How Mirakl is Transforming Retail Marketplaces",
    description: "Deep dive into the marketplace technology powering Lowe's, Home Depot, and other major retailers.",
    date: "Jan 18, 2025",
    duration: "8 min read",
    color: "bg-primary/10 text-primary",
  },
  {
    type: "Video",
    icon: Video,
    title: "2025 Marketplace Seller Success Guide",
    description: "Complete walkthrough of launching your brand on multiple US marketplaces simultaneously.",
    date: "Jan 15, 2025",
    duration: "45 min",
    color: "bg-green-500/10 text-green-600",
  },
];

const trendingTopics = [
  "Omnichannel Returns",
  "Total Home Strategy",
  "EDI Compliance",
  "Marketplace SEO",
  "FBA vs 3PL",
];

export const Insights = () => {
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
              className="mb-10"
            >
              <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
                Retail Insights
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                Stay Ahead of the
                <br />
                <span className="text-primary">Marketplace Curve</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {insights.map((insight, index) => (
                <motion.article
                  key={insight.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl ${insight.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <insight.icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${insight.color}`}>
                          {insight.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {insight.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {insight.duration}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {insight.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {insight.description}
                      </p>
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
                View All Insights
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
              <h3 className="text-lg font-bold mb-2">Weekly Marketplace Brief</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Get exclusive insights on marketplace trends, platform updates, and seller success strategies.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 text-sm"
                />
                <Button variant="hero" className="w-full" size="default">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-3">
                Join 5,000+ marketplace sellers. Unsubscribe anytime.
              </p>
            </div>

            {/* Trending Topics */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Trending This Week</h3>
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

            {/* Speaking CTA */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <Mic className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-2">
                Book a Speaking Engagement
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our marketplace experts are available for conferences, podcasts, and workshops.
              </p>
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Get in Touch
              </Button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
