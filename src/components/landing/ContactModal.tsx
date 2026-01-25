import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Building2, DollarSign, Package, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    revenue: "",
    categories: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    onClose();
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      revenue: "",
      categories: "",
      message: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
          >
            <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
              {/* Header */}
              <div className="bg-primary px-6 py-5 relative">
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-bold text-primary-foreground">
                  Schedule a Strategy Call
                </h2>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  Tell us about your brand and marketplace goals
                </p>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-foreground">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-foreground">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2 text-foreground">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your Brand Inc."
                    required
                    className="bg-background"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="revenue" className="flex items-center gap-2 text-foreground">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      Annual Revenue
                    </Label>
                    <Select
                      value={formData.revenue}
                      onValueChange={(value) => setFormData({ ...formData, revenue: value })}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1m">Under $1M</SelectItem>
                        <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5m-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10m-50m">$10M - $50M</SelectItem>
                        <SelectItem value="50m-plus">$50M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="categories" className="flex items-center gap-2 text-foreground">
                      <Package className="w-4 h-4 text-muted-foreground" />
                      Product Category
                    </Label>
                    <Select
                      value={formData.categories}
                      onValueChange={(value) => setFormData({ ...formData, categories: value })}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-improvement">Home Improvement</SelectItem>
                        <SelectItem value="furniture">Furniture & Decor</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="outdoor">Outdoor & Garden</SelectItem>
                        <SelectItem value="appliances">Appliances</SelectItem>
                        <SelectItem value="tools">Tools & Hardware</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-foreground">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    Tell us about your goals
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="What marketplaces are you interested in? What challenges are you facing?"
                    rows={3}
                    className="bg-background resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      />
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Schedule My Call
                    </span>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
