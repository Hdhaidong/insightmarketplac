import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  Phone, 
  Clock,
  Search,
  ShoppingCart,
  Truck,
  CreditCard,
  Users,
  Settings,
  Shield,
  Send,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters")
});

const faqCategories = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: ShoppingCart,
    faqs: [
      {
        question: "How do I get started with MarketPro?",
        answer: "Getting started is easy! Simply book a free consultation call with our team. We'll assess your business needs, discuss your goals, and create a customized marketplace strategy for your brand."
      },
      {
        question: "What marketplaces do you support?",
        answer: "We currently support Amazon, Walmart, Home Depot, and Lowe's. We're constantly expanding our marketplace partnerships to provide you with more opportunities to grow."
      },
      {
        question: "How long does it take to launch on a marketplace?",
        answer: "Launch timelines vary depending on the marketplace and your readiness. Typically, Amazon launches take 2-4 weeks, while Walmart and Home Depot may take 4-8 weeks due to additional verification requirements."
      }
    ]
  },
  {
    id: "fulfillment",
    label: "Fulfillment & Logistics",
    icon: Truck,
    faqs: [
      {
        question: "Do you handle inventory management?",
        answer: "Yes! Our fulfillment services include complete inventory management, from receiving and storage to picking, packing, and shipping. We use advanced software to track inventory levels in real-time."
      },
      {
        question: "Which fulfillment centers do you use?",
        answer: "We operate multiple fulfillment centers strategically located across the US to ensure fast delivery times. We also integrate with FBA (Fulfillment by Amazon) and WFS (Walmart Fulfillment Services)."
      },
      {
        question: "Can you handle international shipping?",
        answer: "Yes, we offer international shipping solutions. We can help you expand to global markets with our network of logistics partners and customs expertise."
      }
    ]
  },
  {
    id: "billing",
    label: "Billing & Pricing",
    icon: CreditCard,
    faqs: [
      {
        question: "How does your pricing work?",
        answer: "We offer flexible pricing models including flat-rate packages and performance-based pricing. Our team will work with you to find the best structure that aligns with your business goals and budget."
      },
      {
        question: "Are there any hidden fees?",
        answer: "No hidden fees. We believe in transparent pricing. All costs are clearly outlined in your service agreement, including any marketplace fees, fulfillment costs, and our management fees."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, ACH bank transfers, and wire transfers. For enterprise clients, we also offer NET 30 payment terms upon approval."
      }
    ]
  },
  {
    id: "account",
    label: "Account Management",
    icon: Users,
    faqs: [
      {
        question: "Will I have a dedicated account manager?",
        answer: "Yes! Every client is assigned a dedicated account manager who serves as your primary point of contact. They'll handle your day-to-day needs and ensure your success on the marketplaces."
      },
      {
        question: "How often will I receive performance reports?",
        answer: "We provide weekly performance summaries and detailed monthly reports. You'll also have access to our real-time dashboard to monitor your sales, inventory, and key metrics 24/7."
      },
      {
        question: "Can I manage multiple brands?",
        answer: "Absolutely! We specialize in multi-brand management. Our platform allows you to manage multiple brands and product lines efficiently from a single dashboard."
      }
    ]
  },
  {
    id: "technical",
    label: "Technical Support",
    icon: Settings,
    faqs: [
      {
        question: "Do you provide API integrations?",
        answer: "Yes, we offer API integrations with major e-commerce platforms including Shopify, WooCommerce, and custom ERP systems. Our technical team can help set up seamless data flows."
      },
      {
        question: "How do I access the dashboard?",
        answer: "Once onboarded, you'll receive credentials to access our client portal. The dashboard provides real-time insights into your sales, inventory, advertising performance, and more."
      },
      {
        question: "What if I experience technical issues?",
        answer: "Our technical support team is available during business hours via email and phone. For urgent issues, we offer priority support channels for enterprise clients."
      }
    ]
  },
  {
    id: "security",
    label: "Security & Privacy",
    icon: Shield,
    faqs: [
      {
        question: "How do you protect my business data?",
        answer: "We use enterprise-grade security measures including encrypted data storage, secure API connections, and strict access controls. Your data is protected by industry-standard security protocols."
      },
      {
        question: "Do you share my data with third parties?",
        answer: "Never. Your business data is strictly confidential. We only share information with marketplace platforms as required for listing and fulfillment purposes, with your explicit consent."
      },
      {
        question: "Are you compliant with data protection regulations?",
        answer: "Yes, we are fully compliant with GDPR, CCPA, and other relevant data protection regulations. We regularly audit our practices to ensure ongoing compliance."
      }
    ]
  }
];

const HelpCenter = () => {
  const [selectedCategory, setSelectedCategory] = useState("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const filteredFaqs = searchQuery
    ? faqCategories.flatMap(cat => 
        cat.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ).map(faq => ({ ...faq, category: cat.label }))
      )
    : faqCategories.find(cat => cat.id === selectedCategory)?.faqs || [];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message;
        }
      });
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Help Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How can we help you?
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions or reach out to our support team for personalized assistance.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-xl border-border/50 focus:border-primary"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MessageSquare, title: "Live Chat", desc: "Chat with our team", detail: "Available 9am-6pm EST" },
              { icon: Mail, title: "Email Support", desc: "support@marketpro.com", detail: "Response within 24 hours" },
              { icon: Phone, title: "Phone Support", desc: "1-800-555-1234", detail: "Mon-Fri, 9am-6pm EST" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  <p className="text-xs text-muted-foreground/70 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            {/* Category Sidebar */}
            {!searchQuery && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
                <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <cat.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{cat.label}</span>
                  </button>
                ))}
              </motion.div>
            )}

            {/* FAQ List */}
            <div className={searchQuery ? "lg:col-span-2" : ""}>
              {searchQuery && (
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Found {filteredFaqs.length} results for "{searchQuery}"
                  </p>
                </div>
              )}
              
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem 
                      value={`faq-${i}`} 
                      className="border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                        <div>
                          {faq.question}
                          {'category' in faq && (
                            <span className="block text-xs text-muted-foreground mt-1">
                              {(faq as { category: string }).category}
                            </span>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">No results found. Try a different search term.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Still need help?
              </h2>
              <p className="text-muted-foreground">
                Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <Button variant="outline" onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className={formErrors.name ? "border-destructive" : ""}
                    />
                    {formErrors.name && (
                      <p className="text-xs text-destructive">{formErrors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className={formErrors.email ? "border-destructive" : ""}
                    />
                    {formErrors.email && (
                      <p className="text-xs text-destructive">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    className={formErrors.subject ? "border-destructive" : ""}
                  />
                  {formErrors.subject && (
                    <p className="text-xs text-destructive">{formErrors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your issue or question in detail..."
                    rows={5}
                    className={formErrors.message ? "border-destructive" : ""}
                  />
                  {formErrors.message && (
                    <p className="text-xs text-destructive">{formErrors.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;
