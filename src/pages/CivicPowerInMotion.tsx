import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Users, Radio, MapPin, GraduationCap, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';

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

const overviewSteps = [
  {
    title: 'Micro-Workshops',
    description: 'Local peer facilitators run short, high-energy civic sessions in market spaces, schools, and local community hubs.',
  },
  {
    title: 'Inclusion Toolkit',
    description: 'Kenyan Sign Language, easy-read explainers, and safety protocols keep women, youth, and PWDs front and center.',
  },
  {
    title: 'Digital Civic Drops',
    description: 'Short audio-visual contents distributed through WhatsApp, community groups, and local radio networks.',
  },
  {
    title: 'Voter Activation Bot',
    description: 'An interactive mobile chat interface that guides youth to verify registration status and learn about county governance.',
  },
];

const keyFeatures = [
  '◆ Community-Led Civic Labs',
  '◆ Peer Facilitator Network',
  '◆ Accessible Materials for PWDs & Marginalized Groups',
  '◆ Grassroots In-Person Outreach, Not High-Level Boardrooms',
  '◆ Strategic Electoral Management Mapping',
];

const impactStats = [
  {
    label: 'Youth Reached',
    value: 10,
    prefix: "",
    suffix: "K+",
    detail: 'Across multiple pilot locations',
    Icon: Users,
  },
  {
    label: 'Peer Facilitators Trained',
    value: 200,
    prefix: "",
    suffix: "",
    detail: 'Active community civic champions',
    Icon: GraduationCap,
  },
  {
    label: 'Voter Registrations Facilitated',
    value: 800,
    prefix: "",
    suffix: "+",
    detail: 'Community registration assistance target',
    Icon: CheckCircle,
  },
  {
    label: 'Community Leaders Mentored',
    value: 25,
    prefix: "",
    suffix: "",
    detail: 'Empowered for formal civic offices',
    Icon: Sparkles,
  },
];


export const CivicPowerInMotion: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg text-ink animate-fadeIn">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[60vh] flex items-center justify-center bg-lavender">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/civic.jpeg"
            alt="Civic Power in Motion"
            className="w-full h-full object-cover grayscale opacity-[0.45]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=2070';
            }}
          />
        </div>
        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6 relative">
          <span className="font-mono text-xs uppercase tracking-widest text-ink bg-bg/50 px-3 py-1 rounded-full border border-ink/20 font-bold">
            CIVIC POWER IN MOTION
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Beyond Activism: Building Lasting Civic Power
          </h1>
          <p className="font-serif text-xl italic text-ink max-w-2xl mx-auto leading-relaxed border-l-2 border-ink pl-4 text-left bg-bg/85 p-4 border border-ink">
            "Translating digital mobilization and community energy into structured, inclusive democratic participation."
          </p>
        </div>
      </section>

      {/* Narrative & The Problem */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-4xl space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl font-bold">The Core Challenge</h2>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                Kenyan youth possess immense digital mobilization capabilities. However, a significant gap remains: translating online energy into formal political access, policy influence, and county-level decision making.
              </p>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                Our model targets this disconnect. By delivering micro-learning modules directly to boda-boda riders, market vendors, informal workers, and persons with disabilities (PWDs), we build continuous civic literacy from the ground up.
              </p>
            </div>

            {/* Styled Sticky Note */}
            <div className="border-2 border-ink p-6 bg-lavender shadow-[5px_5px_0_#1F1A17] rotate-[-1.5deg] relative">
              <div className="tape-accent bg-coral-deep" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-4">Key Priorities</h3>
              <div className="space-y-4">
                {keyFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-sans text-ink-soft">
                    <span className="text-coral-deep font-bold">◆</span>
                    <span>{f.replace('◆ ', '')}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold">Our Operational Framework</h2>
              <p className="text-ink-soft font-mono text-[10px] uppercase tracking-wider">How we scale civic engagement</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewSteps.map((step, idx) => (
                <div key={idx} className="border-2 border-ink p-6 bg-paper rounded shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-full bg-lavender text-ink font-bold font-mono flex items-center justify-center border-2 border-ink shadow-[2px_2px_0_#1F1A17]">
                      {idx + 1}
                    </div>
                    <h3 className="font-serif font-bold text-xl text-ink">{step.title}</h3>
                    <p className="text-ink-soft text-xs leading-relaxed font-sans">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* Impact Stats Grid - bg-paper to alternate background */}
      <section className="py-16 md:py-24 bg-paper border-y-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Projected & Real Impact</h2>
            <p className="text-ink-soft font-mono text-xs uppercase tracking-wider">Verifiable indicators of community representation</p>
          </div>

          <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:overflow-x-visible md:pb-0">
            {impactStats.map((stat, idx) => {
              const IconComponent = stat.Icon;
              return (
                <div key={idx} className="border-2 border-ink p-6 bg-bg shadow-[4px_4px_0_#1F1A17] hover:shadow-[6px_6px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 text-center space-y-4 snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                  <div className="w-12 h-12 rounded-full bg-lavender border-2 border-ink flex items-center justify-center mx-auto shadow-[2px_2px_0_#1F1A17]">
                    <IconComponent className="w-6 h-6 text-ink" />
                  </div>
                  <div>
                    <div className="font-serif text-3xl font-bold text-ink">
                      <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-coral-deep mt-1">{stat.label}</h4>
                    <p className="text-[10px] text-ink-soft font-mono mt-1 leading-snug">{stat.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-coral border-b-[1.5px] border-ink text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink">Partner With Us</h2>
          <p className="text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            Support our county-level micro-workshops and help us digitize inclusive democratic educational materials.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 px-8 py-5 font-mono text-xs uppercase tracking-wider font-bold">
              <Link to="/donate">
                Support Our Cause
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-neo ghost border-2 border-ink bg-bg text-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 px-8 py-5 font-mono text-xs uppercase tracking-wider font-bold">
              <Link to="/contact">
                Explore Collaborations
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CivicPowerInMotion;

