import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, History, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

const WhoWeAreIndex = () => {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[50vh] flex items-center justify-center bg-paper">
        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-coral-deep font-bold bg-coral/20 px-3 py-1 rounded-full border border-ink/20">
            THE UWEZO NETWORK INITIATIVE
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Who We Are
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "A registered National NGO in Kenya bridging high-level tech capability with community empowerment."
          </p>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold">Explore Our Organization</h2>
            <p className="text-ink-soft text-sm font-mono uppercase tracking-wider mt-1">Get to know our leadership, mission, and milestones</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* About Us */}
            <div className="border-2 border-ink p-8 bg-paper shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-mint/20 border border-ink rounded-full flex items-center justify-center mb-6">
                  <Info className="w-6 h-6 text-ink" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 text-ink">About Us</h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-6 font-sans">
                  Learn about our core mission, vision statement, operational values, and SDG commitments.
                </p>
              </div>
              <Link to="/who-we-are/about-us" className="text-xs font-mono uppercase tracking-wider text-ink hover:text-coral-deep inline-flex items-center font-bold">
                Read About Us <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Our History */}
            <div className="border-2 border-ink p-8 bg-paper shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-coral/20 border border-ink rounded-full flex items-center justify-center mb-6">
                  <History className="w-6 h-6 text-ink" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 text-ink">Our History</h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-6 font-sans">
                  Trace our journey from a local Community-Based Organization to a registered National NGO.
                </p>
              </div>
              <Link to="/who-we-are/our-history" className="text-xs font-mono uppercase tracking-wider text-ink hover:text-coral-deep inline-flex items-center font-bold">
                Read Our Story <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

            {/* Our Team */}
            <div className="border-2 border-ink p-8 bg-paper shadow-[4px_4px_0_#1F1A17] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-lavender/35 border border-ink rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-ink" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-3 text-ink">Our Team</h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-6 font-sans">
                  Meet our founders, strategic advisory consultants, field team, and volunteer network.
                </p>
              </div>
              <Link to="/who-we-are/our-team" className="text-xs font-mono uppercase tracking-wider text-ink hover:text-coral-deep inline-flex items-center font-bold">
                Meet the Builders <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAreIndex;
