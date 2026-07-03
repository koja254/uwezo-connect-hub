import React, { useState, useEffect } from 'react';
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

const CountUp = ({ end, duration = 3500, suffix = "", prefix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; prefix?: string; decimals?: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const totalMiliseconds = duration;
    const steps = decimals > 0 ? 100 : Math.min(end, 60);
    const incrementTime = totalMiliseconds / steps;
    const stepValue = end / steps;
    
    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
        
        // Setup dynamic tick from time to time (fluctuation/live updates)
        const tickTimer = setInterval(() => {
          setCount(current => {
            const change = (Math.random() > 0.4 ? 1 : -1) * (decimals > 0 ? 0.1 : 1);
            const next = current + change;
            if (next > end * 1.10) return current - change;
            if (next < end * 0.90) return current + change;
            return parseFloat(next.toFixed(decimals));
          });
        }, 5000 + Math.random() * 5000);
        
        return () => clearInterval(tickTimer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [end, duration, decimals]);
  return <span>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

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
            className="w-full h-full object-cover grayscale opacity-[0.35] scale-105"
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
              <Button asChild className="btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 px-8 py-6 font-mono text-xs uppercase tracking-wider font-bold">
                <Link to="/programs" onClick={() => window.scrollTo(0, 0)}>
                  See Our Pillars
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-neo ghost border-2 border-ink bg-bg text-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 px-8 py-6 font-mono text-xs uppercase tracking-wider font-bold">
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
            Our Approach
          </h2>
          <p className="text-lg md:text-xl text-ink-soft leading-relaxed font-sans mb-8">
            We build human-centric systems by embedding technological solutions directly into the daily realities of grassroots communities. Rather than introducing top-down infrastructure, we co-design interfaces, deploy offline-first digital voucher tools that ensure aid accountability, and establish low-barrier makerspaces where youth construct localized tech and climate solutions.
          </p>
          <p className="text-lg md:text-xl text-ink font-serif italic max-w-2xl mx-auto border-l-4 border-coral pl-6 text-left">
            "We believe that technology is only as sustainable as the community that shapes it. Every intervention is designed to protect dignity and expand local agency."
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

          <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 md:overflow-x-visible md:pb-0">
            {/* Girls Mentored */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between items-center text-center snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
              <div className="w-12 h-12 bg-coral border border-ink rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-ink" />
              </div>
              <div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <CountUp end={236} />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink-soft font-bold">Girls Mentored & Supported</div>
              </div>
            </div>

            {/* Platform Uptime */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between items-center text-center snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
              <div className="w-12 h-12 bg-mint border border-ink rounded-full flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-ink" />
              </div>
              <div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <CountUp end={99.9} decimals={1} suffix="%" />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink-soft font-bold">Offline-First Uptime</div>
              </div>
            </div>

            {/* Vendor Payouts */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between items-center text-center snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
              <div className="w-12 h-12 bg-lavender border border-ink rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-ink" />
              </div>
              <div>
                <div className="font-serif text-5xl font-bold mb-2">
                  <CountUp end={320} prefix="KES " suffix="K+" />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-ink-soft font-bold">Worth of Vouchers Redeemed</div>
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
            <a 
              href="https://kenyapovertyaction.org.uk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-ink p-4 bg-bg flex items-center justify-center h-24 hover:-translate-y-1 transition-transform duration-200 shadow-[3px_3px_0_#1F1A17] group"
            >
              <img 
                src="/images/partner1.png" 
                alt="Kenya Poverty Action" 
                className="h-16 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '';
                }}
              />
            </a>
            
            {/* Placeholders */}
            <div className="border border-dashed border-ink/30 px-6 py-4 bg-bg/30 flex items-center justify-center h-24 min-w-[200px]">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-soft italic">Partner Coming Soon</span>
            </div>
            <div className="border border-dashed border-ink/30 px-6 py-4 bg-bg/30 flex items-center justify-center h-24 min-w-[200px]">
              <span className="font-mono text-xs uppercase tracking-widest text-ink-soft italic">Partner Coming Soon</span>
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
            <p className="text-ink-soft font-mono text-xs uppercase tracking-wider">Grassroots agency, scalable social infrastructure</p>
          </div>

          <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 gap-8 md:overflow-x-visible md:pb-0">
            {programs.map((program) => (
              <div key={program.id} className="relative group snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto md:shrink md:snap-none">
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

                  <Button asChild className="w-full btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 py-2 text-xs font-mono uppercase tracking-wider font-bold">
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
              Your support powers school retention and aid accountability by funding tracked digital voucher balances for girls to access sanitary products locally. It drives digital literacy and climate innovation through community tech programs, and empowers youth with over 20% increased civic engagement through active democratic participation labs.
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
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border-2 border-ink p-8 md:p-12 bg-paper shadow-[6px_6px_0_#1F1A17] text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-ink">
              Let's Work Together
            </h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
              We are actively looking for volunteers, partners, and collaborators to make society better. If you share our vision of grassroots-led social change, let's build together. Reach out to discuss partnerships, equipment donations, or volunteer opportunities.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="btn-neo bg-ink text-bg border-ink px-8 py-5 font-mono text-xs uppercase tracking-wider">
                <Link to="/contact">
                  Partner with Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="btn-neo ghost border-ink px-8 py-5 font-mono text-xs uppercase tracking-wider">
                <Link to="/contact">
                  Volunteer with Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
