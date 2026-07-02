import { useEffect } from 'react';
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
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ui/scroll-to-top";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't fire confetti if clicking links/buttons directly to avoid clutter, or let it fire for nice tactile feedback!
      const colors = ['#FFB4A2', '#F38C7C', '#D7C7EC', '#BEE3C8', '#FFE3A8', '#C4DEEC'];
      const shapes = ['circle', 'square', 'triangle'];
      const count = 10;
      
      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'confetti-particle';
        
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        if (shape === 'circle') {
          particle.style.borderRadius = '50%';
          particle.style.backgroundColor = color;
        } else if (shape === 'triangle') {
          particle.style.width = '0';
          particle.style.height = '0';
          particle.style.borderStyle = 'solid';
          particle.style.borderWidth = '0 6px 10px 6px';
          particle.style.borderColor = `transparent transparent ${color} transparent`;
          particle.style.backgroundColor = 'transparent';
          particle.style.borderBottomColor = color;
        } else {
          particle.style.backgroundColor = color;
        }
        
        particle.style.left = `${e.clientX - 4}px`;
        particle.style.top = `${e.clientY - 4}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 50;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        const dr = Math.random() * 360;
        
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        particle.style.setProperty('--dr', `${dr}deg`);
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 800);
      }
    };
    
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
