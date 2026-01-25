import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What marketplaces do you support?",
    answer: "We support 50+ major retail marketplaces including Amazon, Walmart, Home Depot, Lowe's, Target, eBay, Best Buy, Wayfair, and many more. Our team has expertise across all major US retail platforms and can help you determine which channels are best suited for your brand and products.",
  },
  {
    question: "How long does it take to launch on a new marketplace?",
    answer: "Typical launch timelines range from 2-6 weeks depending on the marketplace and your product catalog complexity. This includes account setup, listing optimization, inventory integration, and initial advertising campaigns. We handle all the technical details so you can focus on your business.",
  },
  {
    question: "What fees do you charge for your services?",
    answer: "Our pricing is customized based on your specific needs and goals. We offer flexible models including revenue share, flat monthly retainers, or hybrid arrangements. During our initial consultation, we'll discuss your objectives and recommend the most cost-effective structure for your business.",
  },
  {
    question: "Do you handle fulfillment and logistics?",
    answer: "Yes! We offer end-to-end fulfillment solutions including warehousing, pick-and-pack, shipping, and returns processing. We integrate with major fulfillment networks like FBA, WFS, and our own 3PL partners to ensure fast delivery and competitive shipping costs.",
  },
  {
    question: "Can you help international brands enter the US market?",
    answer: "Absolutely. Our US Market Entry service is specifically designed for international brands. We handle everything from entity formation and tax compliance to customs, logistics, and marketplace onboarding. Many of our most successful partnerships are with brands expanding into the US.",
  },
  {
    question: "How do you measure and report on performance?",
    answer: "We provide comprehensive reporting dashboards with real-time data on sales, advertising performance, inventory levels, and profitability. You'll have access to weekly performance summaries and monthly business reviews with your dedicated account manager to discuss strategy and optimization opportunities.",
  },
  {
    question: "What makes you different from other marketplace agencies?",
    answer: "Three things set us apart: our technology platform that automates optimization at scale, our deep relationships with marketplace category managers, and our results-driven approach with 98% client retention. We don't just manage accounts—we become true growth partners invested in your success.",
  },
  {
    question: "Is there a minimum contract length?",
    answer: "We believe in earning your business every month. While we recommend a minimum 6-month commitment to see meaningful results, we offer flexible contract terms including month-to-month options after an initial onboarding period. Our high retention rate speaks to the value we deliver.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <br />
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most common questions about our 
            marketplace management services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card-hover transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:hello@marketpro.com"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
