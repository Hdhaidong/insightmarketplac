import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail, Award, Globe, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { PageLayout, useContactModal } from "@/components/layout/PageLayout";

const stats = [
  { value: "2015", label: "Founded" },
  { value: "85+", label: "Team Members" },
  { value: "500+", label: "Brands Served" },
  { value: "$2B+", label: "Revenue Managed" },
];

const values = [
  { icon: Target, title: "Results-Driven", description: "We measure success by your growth. Every strategy is designed to deliver measurable ROI." },
  { icon: Users, title: "Partnership Mindset", description: "We're an extension of your team. Your success is our success." },
  { icon: Globe, title: "Global Perspective", description: "Deep expertise in cross-border commerce and international brand expansion." },
  { icon: Award, title: "Excellence", description: "Certified marketplace experts with proven track records across all major platforms." },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Amazon exec with 15+ years in e-commerce. Led marketplace strategy for Fortune 500 brands.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michael Rodriguez",
    role: "COO & Co-Founder",
    bio: "Operations veteran who built fulfillment networks for global brands. Expert in supply chain optimization.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emily Watson",
    role: "VP of Client Success",
    bio: "10+ years helping brands scale on Amazon, Walmart, and retail marketplaces. Passionate about client growth.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    role: "VP of Marketing",
    bio: "Digital marketing expert specializing in marketplace advertising. Managed $100M+ in ad spend.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Lisa Thompson",
    role: "Director of Operations",
    bio: "Logistics specialist with expertise in 3PL management and FBA optimization.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Park",
    role: "Director of Technology",
    bio: "Built EDI and ERP integrations for major retailers. Expert in marketplace APIs and automation.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
];

const AboutContent = () => {
  const { openModal } = useContactModal();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero" />
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              About <span className="text-accent">MarketPro</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 mb-8 max-w-2xl">
              We're on a mission to help brands succeed in the complex world of US retail marketplaces. 
              From startups to enterprise, we provide the expertise and infrastructure to scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, MarketPro was born from a simple observation: brands were struggling 
                  to navigate the increasingly complex world of retail marketplaces.
                </p>
                <p>
                  Our founders, former Amazon and Walmart executives, saw an opportunity to build 
                  a company that could serve as a true partner for brands—handling everything from 
                  US market entry to multi-marketplace expansion.
                </p>
                <p>
                  Today, we manage over $2 billion in annual marketplace revenue for 500+ brands, 
                  with a team of 85+ marketplace specialists across the US and Europe.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <div key={value.title} className="p-5 bg-card rounded-xl border border-border">
                  <value.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry veterans with decades of combined marketplace experience.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <a href="#" className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-9 h-9 bg-white/90 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
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
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your brand succeed in US marketplaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={openModal}>
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Open Positions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

const About = () => (
  <PageLayout>
    <AboutContent />
  </PageLayout>
);

export default About;
