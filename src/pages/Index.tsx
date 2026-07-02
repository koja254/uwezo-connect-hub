import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Send, CheckCircle2, ShieldCheck, Users, Activity } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { programs } from '@/data/programs';

const Index = () => {
  const { toast } = useToast();
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Name, email, and message are required fields.",
        variant: "destructive"
      });
      return;
    }

    // Client-side rate limiting to prevent spam / DDoS
    const now = Date.now();
    const lastSubmit = localStorage.getItem('last_submit_contact_home');
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
    localStorage.setItem('last_submit_contact_home', now.toString());

    setIsSubmitting(true);

    try {
      const response = await fetch('https://uwezo-backend.onrender.com/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'form-name': 'contact',
          ...formData
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. We will get back to you soon.",
        });
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error();
      }
    } catch (err) {
      toast({
        title: "Submission Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden border-b-[1.5px] border-ink">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/homepage.jpeg"
            alt="The Uwezo Network Initiative communities"
            className="w-full h-full object-cover grayscale opacity-[0.22] scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 z-10 max-w-5xl text-center py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <span className="font-mono text-xs uppercase tracking-widest bg-coral/30 border border-ink/30 px-3 py-1.5 rounded-full inline-block font-bold">
              THE UWEZO NETWORK INITIATIVE
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-[1.05] tracking-tight">
              Empowering Communities. <br />
              Transforming Futures. <br />
              Building Resilience.
            </h1>
            
            <div className="relative max-w-2xl mx-auto border-2 border-ink bg-paper p-6 shadow-[6px_6px_0_#1F1A17] rotate-[-1.5deg]">
              <div className="tape-accent bg-mint" />
              <p className="font-serif text-xl italic text-ink text-center">
                "Technology without community is just code. We bridge grassroots realities with scalable social innovation."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
              <Button asChild className="btn-neo bg-ink text-bg border-ink px-8 py-6 font-mono text-xs uppercase tracking-wider">
                <Link to="/programs" onClick={() => window.scrollTo(0, 0)}>
                  See Our Pillars
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-neo ghost border-ink px-8 py-6 font-mono text-xs uppercase tracking-wider">
                <Link to="/donate" onClick={() => window.scrollTo(0, 0)}>
                  Donate & Partner
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introductory Text Block */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Human-First Technology
          </h2>
          <p className="text-lg md:text-xl text-ink-soft leading-relaxed font-sans mb-8">
            Meet Amina, who misses school every month due to a lack of basic hygiene products. Or Daniel, who has never had access to a digital maker lab. Or Mary, who wants to adapt local farms to climate change. 
          </p>
          <p className="text-lg md:text-xl text-ink font-serif italic max-w-2xl mx-auto border-l-4 border-coral pl-6 text-left">
            "The Uwezo Network Initiative connects these communities to opportunity through inclusive design, offline-first digital voucher infrastructures, and sustainable grassroots action."
          </p>
        </div>
      </section>

      {/* Impact Counters (Warm Block) */}
      <section className="py-16 md:py-24 bg-butter border-y-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">Real numbers from our first year of operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Girls Mentored */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 bg-coral border border-ink rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-ink" />
              </div>
              <div>
                <div className="font-serif text-5xl font-bold mb-2">342</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink-soft font-bold">Girls Mentored & Supported</div>
              </div>
            </div>

            {/* Platform Uptime */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 bg-mint border border-ink rounded-full flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-ink" />
              </div>
              <div>
                <div className="font-serif text-5xl font-bold mb-2">99.9%</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink-soft font-bold">Offline-First Uptime</div>
              </div>
            </div>

            {/* Vendor Payouts */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between items-center text-center">
              <div className="w-12 h-12 bg-lavender border border-ink rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-ink" />
              </div>
              <div>
                <div className="font-serif text-5xl font-bold mb-2">KES 487K+</div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink-soft font-bold">Local Vendor Payouts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Partners Section (Light Block) */}
      <section className="py-16 bg-paper border-b-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-8 font-bold">
            SUPPORTED BY INSTITUTIONAL PARTNERS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Kenya Poverty Action */}
            <div className="border-2 border-ink p-6 bg-bg flex items-center justify-center h-20 shadow-[3px_3px_0_#1F1A17]">
              <span className="font-serif font-bold text-lg text-ink">Kenya Poverty Action</span>
            </div>
            
            {/* Collaborators / Universities */}
            <div className="border-2 border-ink/40 p-4 bg-bg/50 flex items-center justify-center h-16 grayscale opacity-75">
              <span className="font-mono text-xs tracking-wider text-ink-soft">Strathmore University Partner</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Our Programs (Pastel Block) */}
      <section className="py-16 md:py-24 bg-mint border-y-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Our Development Pillars
            </h2>
            <p className="text-ink-soft font-mono text-xs uppercase tracking-wider">Minimal hand-outs, maximum scalable dignity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className="relative group">
                <div className="border-2 border-ink bg-bg p-4 shadow-[4px_4px_0_#1F1A17] transition-transform hover:-translate-y-1 h-full flex flex-col justify-between">
                  <div>
                    {/* Image Placeholder Frame */}
                    <div className="relative overflow-hidden border border-ink h-48 mb-4">
                      <div className="tape-accent bg-butter" />
                      <LazyImage
                        src={program.heroImage}
                        alt={program.heroImageAlt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif font-bold text-2xl mb-2 text-ink">
                      {program.title}
                    </h3>
                    <p className="text-ink-soft text-xs font-mono uppercase tracking-wide mb-3">
                      {program.id.replace(/-/g, ' ')}
                    </p>
                    <p className="text-ink-soft text-sm leading-relaxed mb-6">
                      {program.summary}
                    </p>
                  </div>

                  <Button asChild className="w-full btn-neo bg-ink text-bg border-ink py-2 text-xs font-mono uppercase tracking-wider">
                    <Link to={`/programs/${program.slug}`} onClick={() => window.scrollTo(0, 0)}>
                      Explore Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Action Sections: Donations Card Block (bg-coral) */}
      <section className="py-16 md:py-24 bg-coral border-b-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border-2 border-ink bg-paper p-8 md:p-12 shadow-[8px_8px_0_#1F1A17] text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink">
              Make a Direct Difference
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto font-sans leading-relaxed">
              Your support funds digital voucher balances for girls to access pads locally, builds IoT classrooms, and helps run democratic peer labs in Kenya. We eliminate 30% of standard physical logistics costs through pure tech infrastructure.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-neo bg-ink text-bg border-ink px-10 py-6 font-mono text-sm uppercase tracking-wider">
                <Link to="/donate" onClick={() => window.scrollTo(0, 0)}>
                  Become an Ally
                  <Heart className="w-4 h-4 ml-2 fill-coral-deep text-coral-deep" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Inquiry Section (bg-bg) */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-ink-soft font-mono text-xs uppercase tracking-wider">Send us an inquiry or explore collaboration</p>
          </div>

          <div className="border-2 border-ink p-8 bg-paper shadow-[6px_6px_0_#1F1A17]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-mint border-2 border-ink rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0_#1F1A17]">
                  <CheckCircle2 className="w-8 h-8 text-ink" />
                </div>
                <h3 className="font-serif text-2xl font-bold">Message Received!</h3>
                <p className="text-ink-soft text-sm">Our partnerships team will reach out to you within 24 hours.</p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="btn-neo bg-ink text-bg border-ink font-mono text-xs uppercase tracking-wider mt-4"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/50 text-ink focus-visible:ring-0 focus-visible:border-ink"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/50 text-ink focus-visible:ring-0 focus-visible:border-ink"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Subject</label>
                  <Input
                    type="text"
                    placeholder="Partnership Opportunities"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/50 text-ink focus-visible:ring-0 focus-visible:border-ink"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-ink font-bold">Your Message *</label>
                  <Textarea
                    placeholder="Tell us how we can collaborate..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="bg-bg border-2 border-ink rounded-none px-4 py-3 placeholder:text-ink-soft/50 text-ink focus-visible:ring-0 focus-visible:border-ink"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-neo bg-ink text-bg border-ink font-mono text-xs uppercase tracking-wider py-4"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Inquiry'}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
