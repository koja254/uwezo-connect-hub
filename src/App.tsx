import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import WhoWeAreIndex from "./pages/WhoWeAreIndex";
import AboutUs from "./pages/AboutUs";
import OurHistory from "./pages/OurHistory";
import OurTeam from "./pages/OurTeam";

import Programs from "./pages/Programs";
import CivicPowerInMotion from "./pages/CivicPowerInMotion";
import ProgramDetail from "./pages/ProgramDetail";

import Resources from "./pages/Resources";
import Reports from "./pages/Reports";
import Publications from "./pages/Publications";
import Assets from "./pages/Assets";

import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ui/scroll-to-top";

import PixelTrail from "./components/PixelTrail";
import NewsletterPopup from "./components/NewsletterPopup";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PixelTrail />
          <NewsletterPopup />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-we-are" element={<WhoWeAreIndex />} />
            <Route path="/who-we-are/about-us" element={<AboutUs />} />
            <Route path="/who-we-are/our-history" element={<OurHistory />} />
            <Route path="/who-we-are/our-team" element={<OurTeam />} />

            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/civic-power-in-motion" element={<CivicPowerInMotion />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />

            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/reports" element={<Reports />} />
            <Route path="/resources/publications" element={<Publications />} />
            <Route path="/resources/assets" element={<Assets />} />

            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/careers" element={<Careers />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
