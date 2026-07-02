import React from 'react';
import { ArrowRight, Eye, ShieldAlert, Sparkles, Star, Lightbulb, Heart, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const values = [
    {
      title: "Co-Designed Solutions",
      description: "We do not deploy systems from comfortable boardrooms. We sit with local kiosks, schools, and youth to build models that respect their daily offline realities.",
      color: "bg-mint",
      icon: <Target className="w-6 h-6 text-ink" />
    },
    {
      title: "Radical Transparency",
      description: "Aid works best when it is accountable. Our digital tracking maps every shilling straight from sponsor allocation to local vendor payouts.",
      color: "bg-lavender",
      icon: <Lightbulb className="w-6 h-6 text-ink" />
    },
    {
      title: "Empowering Autonomy",
      description: "Handouts create dependencies. By utilizing Learn-to-Earn structures, we return autonomy and dignity back into the hands of communities.",
      color: "bg-butter",
      icon: <Heart className="w-6 h-6 text-ink" />
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[60vh] flex items-center justify-center">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/image-02.jpg"
            alt="The Uwezo Network team working"
            className="w-full h-full object-cover grayscale"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071';
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-coral-deep font-bold bg-coral/20 px-3 py-1 rounded-full border border-coral/30">
            WHO WE ARE
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Bridging Tech & Grassroots Realities
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "True representation means translating high-level policy into structural resources back home."
          </p>
        </div>
      </section>

      {/* Philosophy & Sticky Note Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Main narrative */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Philosophy</h2>
              <p className="text-ink-soft text-lg leading-relaxed font-sans">
                We believe that digital infrastructure must be inclusive, safe, and community-led. The digital divide cannot be solved by simply dumping hardware in schools. True digital equity requires addressing the basic human barriers that stand in the way of learning.
              </p>
              <p className="text-ink-soft text-lg leading-relaxed font-sans">
                If a girl misses school due to period poverty, a computer lab is useless to her. By combining offline-first voucher loyalty systems with digital makerspaces and civic dialogue networks, we build an ecosystem of support where access, health, and literacy reinforce one another.
              </p>
            </div>

            {/* Floating digital sticky note */}
            <div className="border-2 border-ink bg-butter p-6 shadow-[5px_5px_0_#1F1A17] rotate-[2deg] relative">
              <div className="tape-accent bg-coral-deep" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-ink font-bold mb-3">Our Theory of Success</h3>
              <p className="font-hand text-xl text-ink leading-snug">
                "We don't build tech to replace communities. We build tech to serve them, making aid accountable, restoring dignity, and leaving a lasting legacy."
              </p>
            </div>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Vision, Mission, Values Grid */}
      <section className="py-16 md:py-24 bg-paper border-y-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Our Core Pillars</h2>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">How we stay grounded as we scale nationally</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className={`border-2 border-ink p-8 shadow-[4px_4px_0_#1F1A17] ${val.color} flex flex-col justify-between`}>
                <div>
                  <div className="w-12 h-12 bg-bg border border-ink rounded-full flex items-center justify-center mb-6">
                    {val.icon}
                  </div>
                  <h3 className="font-serif font-bold text-2xl mb-3 text-ink">
                    {val.title}
                  </h3>
                  <p className="text-ink-soft text-sm leading-relaxed mb-6 font-sans">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Vision and Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="border-2 border-ink bg-bg p-8 shadow-[4px_4px_0_#1F1A17]">
              <div className="w-12 h-12 bg-coral/20 border border-ink rounded-full flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">Our Vision</h3>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                A future where every youth in Kenya—regardless of geographical constraints, economic barriers, or gender—has the resources, technical skills, and democratic agency to shape their own destiny.
              </p>
            </div>
            <div className="border-2 border-ink bg-bg p-8 shadow-[4px_4px_0_#1F1A17]">
              <div className="w-12 h-12 bg-mint/20 border border-ink rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">Our Mission</h3>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                Co-designing digital and social infrastructures that eliminate period poverty, bridge the digital divide through AI and STEM learning, and turn civic energy into structured participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Founder's Vision Section */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border-2 border-ink bg-lavender p-8 md:p-12 shadow-[6px_6px_0_#1F1A17] relative">
            <div className="tape-accent bg-butter" />
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              {/* Profile Image placeholder frame */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-ink overflow-hidden bg-paper shrink-0">
                <img
                  src="/images/sharly-avatar.jpg"
                  alt="Sharly Moraa, Founder"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23FFE3A8" stroke="%231F1A17" stroke-width="4"/><text x="50" y="60" font-size="28" font-family="serif" text-anchor="middle" fill="%231F1A17">SM</text></svg>';
                  }}
                />
              </div>

              <div className="space-y-4">
                <blockquote className="font-serif text-xl md:text-2xl italic text-ink leading-relaxed">
                  "We founded this initiative to bridge the gap between technical innovation and grassroots advocacy. Code is powerful, but only when it is written alongside the communities using it to live with dignity."
                </blockquote>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-ink">Sharly Moraa</h4>
                  <p className="text-xs text-ink-soft">Founder, The Uwezo Network Initiative</p>
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

export default AboutUs;
