import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { programs } from '@/data/programs';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/images/image-24.png"
              alt="Uwezo Logo"
              className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-all duration-300"
            />
            <div className="hidden sm:block">
              <span className="font-poppins font-bold text-xl text-foreground">
                Uwezo Link
              </span>
              <div className="text-xs text-muted-foreground font-medium">
                Initiative
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-6">
                <NavigationMenuItem>
                  <Link to="/about" className={`nav-link ${isActivePath('/about') ? 'active' : ''}`}>
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            to="/programs"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-primary p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              All Programs
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore our comprehensive STEM and blockchain education initiatives
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </div>
                      {programs.map((program) => (
                        <NavigationMenuLink key={program.id} asChild>
                          <Link
                            to={`/programs/${program.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {program.title}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {program.summary}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/resources" className={`nav-link ${isActivePath('/resources') ? 'active' : ''}`}>
                    Resources
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/team" className={`nav-link ${isActivePath('/team') ? 'active' : ''}`}>
                    Team
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className={`nav-link ${isActivePath('/contact') ? 'active' : ''}`}>
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-3">
              <Button asChild variant="outline" size="sm">
                <Link to="/donate">Donate</Link>
              </Button>
              <Button asChild size="sm" className="cta-primary">
                <Link to="/programs">Get Involved</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              <Link
                to="/about"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="px-4 py-2">
                <div className="text-foreground font-medium mb-2">Programs</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/programs"
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Programs
                  </Link>
                  {programs.map((program) => (
                    <Link
                      key={program.id}
                      to={`/programs/${program.slug}`}
                      className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {program.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/resources"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              
              <Link
                to="/team"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              
              <Link
                to="/contact"
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-4 pt-4 flex flex-col space-y-3">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
                    Donate
                  </Link>
                </Button>
                <Button asChild className="w-full cta-primary">
                  <Link to="/programs" onClick={() => setIsMenuOpen(false)}>
                    Get Involved
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;