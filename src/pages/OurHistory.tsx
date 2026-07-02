import React from 'react';
import { ArrowLeft, Clock, Award, Landmark, BookOpen, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

const timelineEvents = [
  {
    year: '2024',
    title: 'The Spark & CBO Foundation',
    description: 'Born during the historic youth civic movements in Kenya, a group of technology builders, educators, and health advocates co-founded the grassroots "Uwezo Link Initiative." Our goal was simple: use tech to remove barriers to education and hygiene.',
    icon: Clock,
    color: 'bg-coral text-ink',
  },
  {
    year: '2025',
    title: 'Digital Vouchers & Maker Labs',
    description: 'We launched our offline-first Learn-to-Earn loyalty system and e-waste smart farm kits. Within 12 months, we grew to serve over 300+ students and local shopkeepers in Nairobi.',
    icon: Award,
    color: 'bg-butter text-ink',
  },
  {
    year: '2026',
    title: 'Transition to National NGO',
    description: 'To support systemic scaling, we officially registered as a national non-governmental organization (NGO) under the name "The Uwezo Network Initiative." We expanded our sectors to encompass education, environmental conservation, health, ICT, and poverty relief.',
    icon: Landmark,
    color: 'bg-mint text-ink',
  }
];

const OurHistory = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="/images/programs.jpg"
            alt="The Uwezo Network Initiative timeline"
            className="w-full h-full object-cover grayscale"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070';
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-mint font-bold bg-mint/35 px-3 py-1 rounded-full border border-ink/20">
            OUR JOURNEY
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            The Uwezo NGO Story
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "True transformation happens when we turn protest energy into structured, localized civic and digital capacity."
          </p>
        </div>
      </section>

      {/* The CBO Evolution Story */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">From CBO to National NGO</h2>
              <p className="text-ink-soft text-lg max-w-2xl mx-auto leading-relaxed">
                The **Uwezo Link Initiative** started as a community-based organization, and is now **The Uwezo Network Initiative**, a fully registered national NGO in Kenya. We address period poverty, civic isolation, and the digital divide as interconnected national crises.
              </p>
            </div>

            {/* Custom Vertical Timeline */}
            <div className="relative border-l-2 border-ink ml-4 md:ml-8 space-y-12 py-4">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={index} className="relative pl-8 md:pl-12 group">
                    {/* Circle marker */}
                    <div className="absolute -left-6 top-1.5 w-12 h-12 rounded-full border-2 border-ink bg-bg flex items-center justify-center shadow-[3px_3px_0_#1F1A17] group-hover:scale-105 transition-transform z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${event.color} border border-ink/20`}>
                        <IconComponent className="w-4 h-4 text-ink" />
                      </div>
                    </div>

                    <div className="p-6 bg-paper rounded-lg border-2 border-ink shadow-[4px_4px_0_#1F1A17] hover:shadow-[6px_6px_0_#1F1A17] transition-all duration-300">
                      <span className="font-mono text-sm font-bold text-coral-deep block mb-1">{event.year}</span>
                      <h3 className="font-serif font-bold text-2xl mb-2 text-ink">{event.title}</h3>
                      <p className="text-ink-soft text-sm leading-relaxed font-sans">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Note from the Founder */}
      <section className="py-16 bg-paper border-t-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="border-2 border-ink bg-bg p-8 shadow-[6px_6px_0_#1F1A17] relative">
            <div className="tape-accent bg-mint" />
            <h3 className="font-serif text-2xl font-bold text-ink mb-4">A Note from Sharly Moraa</h3>
            <p className="text-ink-soft text-sm leading-relaxed font-sans italic mb-4">
              "When we started as a Community-Based Organization, our focus was strictly local. But seeing the immense gaps in digital resource equity, female attendance barriers, and voter education across different counties in Kenya, we knew we had to expand our scope."
            </p>
            <p className="text-ink-soft text-sm leading-relaxed font-sans">
              As a registered National NGO, we are committed to scaling our offline-first Learn-to-Earn matrices, IoT e-waste makerspaces, and civic workshops to reaches youth in every county. We are coding the future, together.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* UN SDG Integration Grid */}
      <section className="py-16 md:py-24 bg-mint border-y-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">UN SDG Commitments</h2>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">Our programs are built around three core UN SDGs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SDG 4 */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 bg-coral/20 border border-ink rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">SDG 4: Quality Education</h3>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                Providing Python coding, AI certification, Tinkercad modeling, and Arduino programming kits directly to underprivileged public school children and community workshops.
              </p>
            </div>

            {/* SDG 5 */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 bg-butter/25 border border-ink rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">SDG 5: Gender Equality</h3>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                Keeping schoolgirls in class through our Days for Dignity digital voucher platform, removing biological barriers that lead to high absenteeism.
              </p>
            </div>

            {/* SDG 9 */}
            <div className="border-2 border-ink p-8 bg-bg shadow-[4px_4px_0_#1F1A17] hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 bg-lavender/30 border border-ink rounded-full flex items-center justify-center mb-6">
                <Landmark className="w-6 h-6 text-ink" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">SDG 9: Industry & Innovation</h3>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                Building offline-first digital infrastructures and mobile maker labs that empower young Kenyans to construct localized technology and climate solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-coral border-b-[1.5px] border-ink text-center">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink">We Need Your Support</h2>
          <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            Your donations directly fund sanitary towel voucher balances and smart classroom electronics. Help us empower the next generation of African tech leaders.
          </p>
          <div className="pt-4">
            <Button asChild className="btn-neo bg-ink text-bg border-ink px-10 py-6 font-mono text-sm uppercase tracking-wider">
              <Link to="/donate" onClick={() => window.scrollTo(0, 0)}>
                Support Our NGO
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurHistory;
