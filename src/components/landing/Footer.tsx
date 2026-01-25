import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    "Marketplace Launch",
    "Performance Marketing",
    "Fulfillment & Logistics",
    "Account Management",
    "US Market Entry",
  ],
  marketplaces: [
    "Amazon",
    "Walmart",
    "Home Depot",
    "Lowe's",
    "Target",
    "eBay",
  ],
  company: [
    "About Us",
    "Careers",
    "Case Studies",
    "Blog",
    "Contact",
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl">MarketPro</span>
            </a>
            <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
              Your strategic partner for marketplace success. We help brands launch, 
              grow, and dominate on major retail platforms.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplaces */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Marketplaces</h4>
            <ul className="space-y-3">
              {footerLinks.marketplaces.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-4 border-t border-primary-foreground/10">
              <a href="mailto:hello@marketpro.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                hello@marketpro.com
              </a>
              <a href="tel:+18005551234" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                1-800-555-1234
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2025 MarketPro. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
