import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { ChatWidget } from "@/components/ChatWidget";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Marketplace Pages
import Amazon from "./pages/marketplace/Amazon";
import Walmart from "./pages/marketplace/Walmart";
import HomeDepot from "./pages/marketplace/HomeDepot";
import Lowes from "./pages/marketplace/Lowes";
import Target from "./pages/marketplace/Target";

// Service Pages
import CompanyFormation from "./pages/services/CompanyFormation";
import Fulfillment from "./pages/services/Fulfillment";
import Marketing from "./pages/services/Marketing";

// Other Pages
import CaseStudiesPage from "./pages/CaseStudiesPage";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import Blog from "./pages/Blog";
import ResultsPage from "./pages/ResultsPage";
import InsightsIndex from "./pages/insights/InsightsIndex";
import InsightsCategoryPage from "./pages/insights/InsightsCategoryPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import FAQPage from "./pages/FAQPage";

// Section Pages
import ServicesPage from "./pages/ServicesPage";
import GoodFitPage from "./pages/GoodFitPage";
import TimelinePage from "./pages/TimelinePage";
import OmnichannelPage from "./pages/OmnichannelPage";
import TopBrandsPage from "./pages/TopBrandsPage";
import ProcessPage from "./pages/ProcessPage";
import PlatformDirectoryPage from "./pages/PlatformDirectoryPage";

// Auth Pages
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import DashboardPage from "./pages/DashboardPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ChatWidget />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* Auth Pages */}
              <Route path="/auth/signup" element={<SignUpPage />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              
              {/* Marketplace Pages */}
              <Route path="/marketplace/amazon" element={<Amazon />} />
              <Route path="/marketplace/walmart" element={<Walmart />} />
              <Route path="/marketplace/home-depot" element={<HomeDepot />} />
              <Route path="/marketplace/lowes" element={<Lowes />} />
              <Route path="/marketplace/target" element={<Target />} />
              
              {/* Service Pages */}
              <Route path="/services/company-formation" element={<CompanyFormation />} />
              <Route path="/services/fulfillment" element={<Fulfillment />} />
              <Route path="/services/marketing" element={<Marketing />} />
              
              {/* Other Pages */}
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/results" element={<ResultsPage />} />
              <Route path="/insights" element={<InsightsIndex />} />
              <Route path="/insights/:category" element={<InsightsCategoryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              
              {/* Section Pages */}
              <Route path="/services-overview" element={<ServicesPage />} />
              <Route path="/good-fit" element={<GoodFitPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
              <Route path="/omnichannel" element={<OmnichannelPage />} />
              <Route path="/top-brands" element={<TopBrandsPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/platforms" element={<PlatformDirectoryPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
