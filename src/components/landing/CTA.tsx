import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";

const benefits = [
  "Free marketplace audit",
  "Custom growth strategy",
  "No long-term contracts",
  "Dedicated account manager",
];

export const CTA = () => {
  const { openModal } = useContactModal();

  return (
    <section className="py-24 bg-subtle">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-hero p-10 md:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to Scale Your
                <span className="block text-gradient">Marketplace Business?</span>
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
                Join 500+ brands that have transformed their retail presence with our 
                comprehensive marketplace management solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-primary-foreground/80">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" onClick={openModal}>
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="heroOutline" size="lg">
                  Download Case Studies
                </Button>
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
            >
              <p className="text-primary-foreground/60 text-sm mb-4 uppercase tracking-wider">
                Average Client Results
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-accent">+287%</div>
                  <div className="text-primary-foreground/70 text-sm">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">+156%</div>
                  <div className="text-primary-foreground/70 text-sm">Order Volume</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">3.2x</div>
                  <div className="text-primary-foreground/70 text-sm">Ad Efficiency</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
