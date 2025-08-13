import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { programs } from '@/data/programs';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup submitted');
  };

  const getSocialIcon = (platform: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Twitter: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      ),
      LinkedIn: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      Instagram: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      )
    };
    return icons[platform] || null;
  };

  const socialLinks = [
    {
      platform: 'Twitter',
      url: 'https://x.com/uwezofoundation?s=21&t=37kvQaGNhrmEbI6X267VvQ'
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uwezo-link-initiative-2a7b23379'
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/uwezo_link?igsh=d2prZ2FzaXBweDFs'
    }
  ];

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-poppins text-3xl font-bold mb-4">
              Stay Connected with Our Mission
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Get the latest updates on our programs, success stories, and opportunities to make a difference in STEM education.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                required
              />
              <Button type="submit" className="cta-accent shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/images/image-24.png"
                alt="Uwezo Logo"
                className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center shadow-card group-hover:shadow-card-hover transition-all duration-300"
              />
              <div>
                <span className="font-poppins font-bold text-xl">Uwezo Link</span>
                <div className="text-sm text-white/80">Initiative</div>
              </div>
            </Link>
            
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Empowering young people in marginalized communities through innovative STEM education, hands-on learning, and sustainable development practices.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span className="text-white/80">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@uwezolink.org" className="text-white/80 hover:text-accent transition-colors">
                  info@uwezolinkinitiative.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+254700000000" className="text-white/80 hover:text-accent transition-colors">
                  +254 789 914 719
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/programs" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  All Programs
                </Link>
              </li>
              {programs.map((program) => (
                <li key={program.id}>
                  <Link 
                    to={`/programs/${program.slug}`} 
                    className="text-white/80 hover:text-accent transition-colors text-sm"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Organization</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/donate" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link to="/team#volunteer" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Volunteer with Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Partner with Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-white/80 hover:text-accent transition-colors text-sm" onClick={() => window.scrollTo(0, 0)}>
                  Download Resources
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-medium text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-accent hover:text-neutral-dark rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © {currentYear} Uwezo Link Initiative. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for education and empowerment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;