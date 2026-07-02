import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { programs } from '@/data/programs';

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Email is required.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch('https://uwezo-backend.onrender.com/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'form-name': 'newsletter',
          email
        }),
      });

      if (response.ok) {
        console.log('Footer newsletter signup:', email);
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem subscribing you. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

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
      url: 'https://twitter.com/uwezonetwork'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/uwezo-network-initiative/'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/uwezonetwork'
    }
  ];

  return (
    <footer className="bg-ink text-bg">
      {/* Newsletter Section */}
      <div className="border-b border-bg/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center border border-ink mx-auto mb-6">
              <Mail className="w-8 h-8 text-ink" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Stay Connected with Our Mission
            </h3>
            <p className="text-base text-bg/85 mb-8">
              Get the latest updates on our programs, success stories, and opportunities to make a difference in technology, health equity, and environmental conservation.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-bg/10 border-bg/20 text-bg placeholder:text-bg/60 focus:bg-bg/20"
                required
              />
              <Button type="submit" className="btn-neo shrink-0 bg-coral text-ink border-ink font-mono text-xs uppercase tracking-wider" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
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
                src="/images/new-uwezo-logo.png"
                alt="Uwezo Logo"
                className="w-10 h-10 object-contain bg-transparent rounded-lg border border-bg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23FFB4A2" stroke="%231F1A17" stroke-width="6"/><text x="50" y="60" font-size="36" font-family="serif" text-anchor="middle" fill="%231F1A17">U</text></svg>';
                }}
              />
              <div>
                <span className="font-serif font-bold text-xl leading-none">The Uwezo Network</span>
                <div className="text-xs uppercase font-mono tracking-widest text-bg/85">Initiative</div>
              </div>
            </Link>
            
            <p className="text-bg/80 text-sm leading-relaxed mb-6">
              A national NGO in Kenya co-designing development solutions with communities through tech education, environmental action, and health dignity.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-coral shrink-0" />
                <span className="text-bg/80">Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-coral shrink-0" />
                <a href="mailto:info@uwezonetwork.org" className="text-bg/80 hover:text-coral transition-colors">
                  info@uwezonetwork.org
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-coral shrink-0" />
                <a href="tel:+254789914719" className="text-bg/80 hover:text-coral transition-colors">
                  +254 789 914 719
                </a>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Programs</h4>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
              <li>
                <Link to="/programs" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  All Programs
                </Link>
              </li>
              {programs.map((program) => (
                <li key={program.id}>
                  <Link 
                    to={`/programs/${program.slug}`} 
                    className="text-bg/80 hover:text-coral transition-colors"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {program.title.split(' - ')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Organization</h4>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
              <li>
                <Link to="/who-we-are/about-us" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/who-we-are/our-history" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Our History
                </Link>
              </li>
              <li>
                <Link to="/who-we-are/our-team" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-serif font-bold text-xl mb-6">Get Involved</h4>
            <ul className="space-y-3 font-mono text-xs uppercase tracking-wider mb-6">
              <li>
                <Link to="/donate" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Make a Donation
                </Link>
              </li>
              <li>
                <Link to="/who-we-are/our-team#volunteer" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Volunteer with Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-bg/80 hover:text-coral transition-colors" onClick={() => window.scrollTo(0, 0)}>
                  Partner with Us
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-serif font-semibold text-sm mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-bg/10 hover:bg-coral hover:text-ink rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 border border-bg/25"
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
      <div className="border-t border-bg/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-mono uppercase tracking-wider">
            <div className="text-bg/60">
              © {currentYear} The Uwezo Network Initiative. All rights reserved. | 
              <a 
                href="/downloads/uwezo_link_terms_and_conditions.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-bg/60 hover:text-coral transition-colors ml-1"
              >
                Terms & Conditions
              </a>
            </div>
            
            <div className="flex items-center space-x-1 text-bg/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-coral-deep fill-current animate-pulse" />
              <span>for communities, learning, and empowerment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;