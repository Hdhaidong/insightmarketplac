import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ChatWidget } from "@/components/ChatWidget";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Marketplace Pages
import Amazon from "./pages/marketplace/Amazon";
import Walmart from "./pages/marketplace/Walmart";
import HomeDepot from "./pages/marketplace/HomeDepot";
import Lowes from "./pages/marketplace/Lowes";

// Service Pages
import CompanyFormation from "./pages/services/CompanyFormation";
import Fulfillment from "./pages/services/Fulfillment";
import Marketing from "./pages/services/Marketing";

// Other Pages
import CaseStudiesPage from "./pages/CaseStudiesPage";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ChatWidget />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Marketplace Pages */}
            <Route path="/marketplace/amazon" element={<Amazon />} />
            <Route path="/marketplace/walmart" element={<Walmart />} />
            <Route path="/marketplace/home-depot" element={<HomeDepot />} />
            <Route path="/marketplace/lowes" element={<Lowes />} />
            
            {/* Service Pages */}
            <Route path="/services/company-formation" element={<CompanyFormation />} />
            <Route path="/services/fulfillment" element={<Fulfillment />} />
            <Route path="/services/marketing" element={<Marketing />} />
            
            {/* Other Pages */}
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
