import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";

const milestones = [
  {
    day: "Day 1-7",
    week: "Week 1",
    title: "Discovery & Planning",
    description: "Deep dive into your brand, products, and goals. We analyze your current situation and develop a customized launch strategy.",
    tasks: [
      "Brand & product assessment",
      "Marketplace opportunity analysis",
      "Competitive landscape review",
      "Custom strategy development",
    ],
  },
  {
    day: "Day 8-21",
    week: "Week 2-3",
    title: "Setup & Integration",
    description: "We handle all the technical setup, legal requirements, and platform integrations to get you marketplace-ready.",
    tasks: [
      "Account creation & verification",
      "Legal & compliance setup",
      "EDI/ERP integration",
      "Inventory system sync",
    ],
  },
  {
    day: "Day 22-45",
    week: "Week 4-6",
    title: "Content & Listings",
    description: "Our team creates optimized product listings with professional content designed to convert and rank.",
    tasks: [
      "Product photography & A+ content",
      "SEO-optimized listings",
      "Pricing strategy implementation",
      "Inventory positioning",
    ],
  },
  {
    day: "Day 46-60",
    week: "Week 7-8",
    title: "Launch & Optimize",
    description: "Go live with full advertising campaigns and continuous optimization to maximize your initial performance.",
    tasks: [
      "Advertising campaign launch",
      "Performance monitoring",
      "Real-time optimization",
      "First results review",
    ],
  },
];

export const Timeline = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Fast-Track Launch Program</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From Zero to Selling in
            <br />
            <span className="text-accent">60 Days</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Our proven 60-day onboarding process gets you from initial consultation 
            to live sales faster than anyone else in the industry.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 md:-translate-x-0.5" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-accent flex items-center justify-center z-10">
                <span className="text-xs font-bold text-accent-foreground">{index + 1}</span>
              </div>

              {/* Content Card */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm">
                  {/* Day Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
                      {milestone.day}
                    </span>
                    <span className="text-sm text-primary-foreground/50">{milestone.week}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-primary-foreground/70 mb-4">{milestone.description}</p>

                  {/* Tasks */}
                  <ul className="space-y-2">
                    {milestone.tasks.map((task) => (
                      <li key={task} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                        <Check className="w-4 h-4 text-accent flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}

          {/* Final Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute left-4 md:left-1/2 -translate-x-1/2 -bottom-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
              <Rocket className="w-5 h-5 text-accent-foreground" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-primary-foreground/60 mt-20 text-sm"
        >
          *Timeline may vary based on product complexity and marketplace requirements
        </motion.p>
      </div>
    </section>
  );
};
