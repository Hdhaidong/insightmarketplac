import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Building2, Truck, Megaphone, ShoppingCart, Store, Home, Wrench, Sparkles, ArrowRight, Zap } from "lucide-react";
import { useContactModal } from "@/contexts/ContactModalContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const sectionLinks = [
  { label: "Results", href: "#results" },
  { label: "Insights", href: "#insights" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const marketplaceLinks = [
  { 
    label: "Amazon", 
    href: "/marketplace/amazon",
    icon: ShoppingCart,
    description: "Dominate the world's largest online marketplace"
  },
  { 
    label: "Walmart", 
    href: "/marketplace/walmart",
    icon: Store,
    description: "Expand into Walmart's growing e-commerce platform"
  },
  { 
    label: "Home Depot", 
    href: "/marketplace/home-depot",
    icon: Home,
    description: "Reach DIY enthusiasts and contractors"
  },
  { 
    label: "Lowe's", 
    href: "/marketplace/lowes",
    icon: Wrench,
    description: "Connect with home improvement shoppers"
  },
];

const serviceLinks = [
  { 
    label: "Company Formation", 
    href: "/services/company-formation",
    icon: Building2,
    description: "Establish your US business entity with full compliance"
  },
  { 
    label: "Fulfillment", 
    href: "/services/fulfillment",
    icon: Truck,
    description: "Streamlined logistics and inventory management"
  },
  { 
    label: "Marketing", 
    href: "/services/marketing",
    icon: Megaphone,
    description: "Strategic campaigns to boost your marketplace visibility"
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const { openModal } = useContactModal();

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setExpandedMobileMenu(expandedMobileMenu === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-foreground">MarketPro</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[1fr_280px]">
                      {/* Service Links */}
                      <ul className="grid gap-3">
                        {serviceLinks.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <link.icon className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium leading-none">{link.label}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Featured CTA Banner */}
                      <div className="rounded-xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-4 border border-primary/20">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                            <Sparkles className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <span className="text-xs font-semibold text-primary uppercase tracking-wide">Featured</span>
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Free Launch Assessment</h4>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          Get a personalized roadmap for your US marketplace expansion.
                        </p>
                        <Button 
                          size="sm" 
                          className="w-full group"
                          onClick={openModal}
                        >
                          Get Started
                          <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Marketplaces Mega Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground data-[state=open]:text-foreground">
                    Marketplaces
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[650px] lg:w-[750px] lg:grid-cols-[1fr_260px]">
                      {/* Marketplace Links */}
                      <ul className="grid grid-cols-2 gap-3">
                        {marketplaceLinks.map((link) => (
                          <li key={link.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={link.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                )}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <link.icon className="h-5 w-5 text-primary" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium leading-none">{link.label}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                      {link.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Featured Promo Banner */}
                      <div className="rounded-xl bg-gradient-to-br from-accent/15 via-primary/10 to-accent/5 p-4 border border-accent/20">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                            <Zap className="h-4 w-4 text-accent-foreground" />
                          </div>
                          <span className="text-xs font-semibold text-accent uppercase tracking-wide">New</span>
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Multi-Platform Launch</h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          Launch on Amazon, Walmart & Home Depot simultaneously with our bundle offer.
                        </p>
                        <div className="flex items-baseline gap-2 mb-3">
                          <span className="text-2xl font-bold text-foreground">20%</span>
                          <span className="text-sm text-muted-foreground">discount</span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground group"
                          onClick={openModal}
                        >
                          Learn More
                          <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Section Links */}
            {sectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" onClick={openModal}>
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </Button>
            <Button variant="default" onClick={openModal}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background border-b border-border"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {/* Services Accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("services")}
                className="flex items-center justify-between w-full py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === "services" ? "rotate-180" : ""}`} />
              </button>
              {expandedMobileMenu === "services" && (
                <div className="pl-4 flex flex-col gap-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                        <link.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{link.label}</div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Marketplaces Accordion */}
            <div>
              <button
                onClick={() => toggleMobileSubmenu("marketplaces")}
                className="flex items-center justify-between w-full py-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Marketplaces
                <ChevronDown className={`h-4 w-4 transition-transform ${expandedMobileMenu === "marketplaces" ? "rotate-180" : ""}`} />
              </button>
              {expandedMobileMenu === "marketplaces" && (
                <div className="pl-4 flex flex-col gap-1">
                  {marketplaceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                        <link.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{link.label}</div>
                        <p className="text-xs text-muted-foreground line-clamp-1">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Section Links */}
            {sectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium py-2 transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full" onClick={() => { openModal(); setIsMenuOpen(false); }}>
                <Phone className="w-4 h-4 mr-2" />
                Book a Call
              </Button>
              <Button variant="default" className="w-full" onClick={() => { openModal(); setIsMenuOpen(false); }}>
                Get Started
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
};
