import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      toast({
        title: "Error",
        description: "Name, email, interest, and message are required.",
        variant: "destructive",
      });
      return;
    }

    // Client-side rate limiting to prevent spam / DDoS
    const now = Date.now();
    const lastSubmit = localStorage.getItem('last_submit_contact');
    if (lastSubmit) {
      const elapsed = now - parseInt(lastSubmit, 10);
      if (elapsed < 15000) {
        toast({
          title: "Too Many Requests",
          description: "Please wait 15 seconds before sending another message.",
          variant: "destructive",
        });
        return;
      }
    }
    localStorage.setItem('last_submit_contact', now.toString());

    setIsSubmitting(true);

    const maxRetries = 2;
    let attempts = 0;

    while (attempts < maxRetries) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 60000); // 60s timeout for Render spin-up

        const response = await fetch('https://uwezo-backend.onrender.com/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'form-name': 'contact',
            ...formData
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          toast({
            title: "Success!",
            description: data.message || "Your message has been sent successfully.",
          });
          setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
          setIsSubmitting(false);
          return;
        } else {
          const errorText = await response.text();
          throw new Error(`Submission failed: ${response.status} ${errorText}`);
        }
      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed:`, error);
        if (attempts === maxRetries) {
          const isAbortError = error instanceof Error && error.name === 'AbortError';
          toast({
            title: "Error",
            description: isAbortError
              ? "Request timed out. Please try again later."
              : "There was a problem sending your message. Please try again later.",
            variant: "destructive",
          });
        }
      }
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[50vh] flex items-center justify-center bg-paper">
        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-coral-deep font-bold bg-coral/20 px-3 py-1 rounded-full border border-ink/20">
            CONNECT WITH US
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Get In Touch
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "Have questions about our programs or partnership avenues? Let's start the conversation."
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="border-2 border-ink bg-paper p-8 shadow-[6px_6px_0_#1F1A17] rounded-none">
              <h2 className="font-serif text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1 border-2 border-ink rounded-none bg-bg"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
                      required
                      className="mt-1 border-2 border-ink rounded-none bg-bg"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.trim() })}
                    placeholder="+254..."
                    className="mt-1 border-2 border-ink rounded-none bg-bg"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest" className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Area of Interest</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                    <SelectTrigger className="mt-1 border-2 border-ink rounded-none bg-bg">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent className="border-2 border-ink rounded-none bg-bg">
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="donation">Donation</SelectItem>
                      <SelectItem value="programs">Program Information</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="mt-1 min-h-[120px] border-2 border-ink rounded-none bg-bg"
                    placeholder="Tell us about your interest, questions, or how you'd like to get involved..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 py-4 font-mono text-xs uppercase tracking-wider font-bold" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : <><Send className="w-4 h-4 mr-2" />Send Message</>}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="font-serif text-3xl font-bold">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Office Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-mint/20 border border-ink rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">Office Location</h3>
                    <p className="text-ink-soft text-sm leading-relaxed font-sans">
                      Nairobi, Kenya<br />
                      Wu Yi Plaza, Galana Road
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral/20 border border-ink rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">Email</h3>
                    <div className="text-ink-soft text-sm leading-relaxed font-sans space-y-1 select-text">
                      <div>
                        <span className="font-bold">General:</span>{' '}
                        <a href="mailto:info@uwezolinkinitiative.org" className="hover:underline select-text">info@uwezolinkinitiative.org</a> /{' '}
                        <a href="mailto:uwezolinkinitiative@gmail.com" className="hover:underline select-text">uwezolinkinitiative@gmail.com</a>
                      </div>
                      <div>
                        <span className="font-bold">Partnerships:</span>{' '}
                        <a href="mailto:sharly.moraa@uwezolinkinitiative.org" className="hover:underline select-text">sharly.moraa@uwezolinkinitiative.org</a>
                      </div>
                      <div>
                        <span className="font-bold">Donations:</span>{' '}
                        <a href="mailto:tevin@uwezolinkinitiative.org" className="hover:underline select-text">tevin@uwezolinkinitiative.org</a>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lavender/35 border border-ink rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">Phone</h3>
                    <p className="text-ink-soft text-sm leading-relaxed font-sans">
                      +254 (0) 789 914 719
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-butter/30 border border-ink rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-1">Office Hours</h3>
                    <p className="text-ink-soft text-sm leading-relaxed font-sans">
                      Monday - Friday: 9:00 AM - 5:00 PM EAT<br />
                      Weekend: Closed (By appointment only)
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-coral/20 border border-ink rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-xl mb-2">Follow Us</h3>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" asChild className="border-2 border-ink rounded-none bg-bg text-xs font-mono font-bold">
                        <a href="https://x.com/uwezofoundation?s=21&t=37kvQaGNhrmEbI6X267VvQ" target="_blank" rel="noopener noreferrer">
                          Twitter / X
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="border-2 border-ink rounded-none bg-bg text-xs font-mono font-bold">
                        <a href="https://www.linkedin.com/company/uwezo-link-initiative/" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild className="border-2 border-ink rounded-none bg-bg text-xs font-mono font-bold flex items-center">
                        <a href="https://www.instagram.com/uwezo_link?igsh=d2prZ2FzaXBweDFs" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;