import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-ink/10 ${
        isScrolled 
          ? 'bg-paper shadow-sm py-2' 
          : 'bg-paper/95 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
          >
            <div className="relative">
              <span className="absolute inset-0 bg-coral rounded-full scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/images/new-uwezo-logo.jpeg"
                alt="Uwezo Logo"
                className="w-10 h-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback for logo
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23FFB4A2" stroke="%231F1A17" stroke-width="6"/><text x="50" y="60" font-size="36" font-family="serif" text-anchor="middle" fill="%231F1A17">U</text></svg>';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl text-ink leading-tight">
                The Uwezo Network
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-ink-soft leading-none">
                Initiative
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              
              {/* Who We Are Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3 py-2 bg-transparent text-ink font-mono text-xs uppercase tracking-wider hover:text-coral-deep transition-colors font-bold">
                  Who We Are
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-2 z-50 w-[240px] hidden group-hover:block">
                  <div className="grid gap-2 p-4 bg-paper border-2 border-ink shadow-[4px_4px_0_#1F1A17] text-ink">
                    <Link
                      to="/who-we-are/about-us"
                      className={`block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-coral/30 hover:text-ink ${isActivePath('/who-we-are/about-us') ? 'bg-coral/20 font-bold' : ''}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">About Us</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Our mission, vision and commitment</p>
                    </Link>
                    <Link
                      to="/who-we-are/our-history"
                      className={`block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-coral/30 hover:text-ink ${isActivePath('/who-we-are/our-history') ? 'bg-coral/20 font-bold' : ''}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Our History</div>
                      <p className="text-[10px] text-ink-soft leading-snug">The story of our NGO journey</p>
                    </Link>
                    <Link
                      to="/who-we-are/our-team"
                      className={`block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-coral/30 hover:text-ink ${isActivePath('/who-we-are/our-team') ? 'bg-coral/20 font-bold' : ''}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Our Team</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Meet our leadership and staff</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Our Programs Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3 py-2 bg-transparent text-ink font-mono text-xs uppercase tracking-wider hover:text-coral-deep transition-colors font-bold">
                  Our Programs
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-2 z-50 w-[280px] hidden group-hover:block">
                  <div className="grid gap-2 p-4 bg-paper border-2 border-ink shadow-[4px_4px_0_#1F1A17] text-ink">
                    <Link
                      to="/programs"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mint/30 hover:text-ink border-b border-ink/10 pb-3"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">All Programs Directory</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Explore our synergistic development model</p>
                    </Link>
                    
                    <Link
                      to="/programs/days-for-dignity"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mint/30 hover:text-ink"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Days for Dignity</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Health & attendance-linked support</p>
                    </Link>
                    
                    <Link
                      to="/programs/tech-for-tomorrow"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mint/30 hover:text-ink"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Tech for Tomorrow</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Maker labs, IT and IoT hardware</p>
                    </Link>

                    <Link
                      to="/programs/civic-power-in-motion"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-mint/30 hover:text-ink"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Civic Power in Motion</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Inclusive youth democratic participation</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3 py-2 bg-transparent text-ink font-mono text-xs uppercase tracking-wider hover:text-coral-deep transition-colors font-bold">
                  Resources
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full pt-2 z-50 w-[240px] hidden group-hover:block">
                  <div className="grid gap-2 p-4 bg-paper border-2 border-ink shadow-[4px_4px_0_#1F1A17] text-ink">
                    <Link
                      to="/resources"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-lavender/30 hover:text-ink border-b border-ink/10 pb-3 font-bold"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">All Resources</div>
                    </Link>
                    <Link
                      to="/resources/reports"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-lavender/30 hover:text-ink"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Reports</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Research & impact metrics</p>
                    </Link>
                    <Link
                      to="/resources/publications"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-lavender/30 hover:text-ink"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Publications</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Guides and manuals</p>
                    </Link>
                    <Link
                      to="/resources/assets"
                      className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-lavender/30 hover:text-ink"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <div className="text-sm font-bold">Assets</div>
                      <p className="text-[10px] text-ink-soft leading-snug">Media kit and logo package</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Blog Link */}
              <Link 
                to="/blog" 
                className={`block px-3 py-2 text-ink font-mono text-xs uppercase tracking-wider hover:text-coral-deep transition-colors font-bold ${isActivePath('/blog') ? 'text-coral-deep' : ''}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Blog
              </Link>

              {/* Contact Link */}
              <Link 
                to="/contact" 
                className={`block px-3 py-2 text-ink font-mono text-xs uppercase tracking-wider hover:text-coral-deep transition-colors font-bold ${isActivePath('/contact') ? 'text-coral-deep' : ''}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact
              </Link>

            </div>

            {/* Donate CTA button (solid neo-brutalist shadow, highly visible border) */}
            <div className="flex items-center">
              <Button asChild className="btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 text-xs font-mono uppercase tracking-wider font-bold">
                <Link to="/donate" onClick={() => window.scrollTo(0, 0)}>Donate</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-ink hover:text-coral-deep transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {isMenuOpen && (
          <div className="lg:hidden border border-ink bg-paper rounded-lg mt-2 p-4 shadow-lg animate-[accordion-down_0.25s_ease-out] text-ink">
            <nav className="flex flex-col space-y-4">
              
              {/* Who We Are Subsection */}
              <div>
                <div className="text-ink font-mono text-xs uppercase tracking-wider border-b border-ink/10 pb-1 mb-2 font-bold">
                  Who We Are
                </div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link
                    to="/who-we-are/about-us"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/who-we-are/our-history"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Our History
                  </Link>
                  <Link
                    to="/who-we-are/our-team"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Our Team
                  </Link>
                </div>
              </div>

              {/* Our Programs Subsection */}
              <div>
                <div className="text-ink font-mono text-xs uppercase tracking-wider border-b border-ink/10 pb-1 mb-2 font-bold">
                  Our Programs
                </div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link
                    to="/programs"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    All Programs
                  </Link>
                  <Link
                    to="/programs/days-for-dignity"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Days for Dignity
                  </Link>
                  <Link
                    to="/programs/tech-for-tomorrow"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Tech for Tomorrow
                  </Link>
                  <Link
                    to="/programs/civic-power-in-motion"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Civic Power in Motion
                  </Link>
                </div>
              </div>

              {/* Resources Subsection */}
              <div>
                <div className="text-ink font-mono text-xs uppercase tracking-wider border-b border-ink/10 pb-1 mb-2 font-bold">
                  Resources
                </div>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link
                    to="/resources"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    All Resources
                  </Link>
                  <Link
                    to="/resources/reports"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Reports
                  </Link>
                  <Link
                    to="/resources/publications"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Publications
                  </Link>
                  <Link
                    to="/resources/assets"
                    className="text-sm text-ink-soft hover:text-coral-deep transition-colors"
                    onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  >
                    Assets
                  </Link>
                </div>
              </div>

              <Link
                to="/blog"
                className="text-sm text-ink font-mono uppercase tracking-wider hover:text-coral-deep font-bold"
                onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="text-sm text-ink font-mono uppercase tracking-wider hover:text-coral-deep font-bold"
                onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}
              >
                Contact
              </Link>
              
              <Button asChild className="btn-neo w-full bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17]">
                <Link to="/donate" onClick={() => { setIsMenuOpen(false); window.scrollTo(0, 0); }}>
                  Donate
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;