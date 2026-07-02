import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, ArrowRight, Heart, Users2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/data/team';

const getMemberTheme = (id: string) => {
  const feminine = ['sharly-moraa', 'peris-makworo', 'sharon-kemunto', 'teresia-wanjohi', 'christine-muna', 'hellen-koros'];
  const isFem = feminine.includes(id);
  
  if (isFem) {
    const themes = [
      { border: 'border-coral', shadow: 'hover:shadow-[5px_5px_0_#FFB4A2]', bg: 'hover:bg-coral/5', accent: 'bg-coral/20' },
      { border: 'border-butter', shadow: 'hover:shadow-[5px_5px_0_#FFE3A8]', bg: 'hover:bg-butter/5', accent: 'bg-butter/25' },
      { border: 'border-lavender', shadow: 'hover:shadow-[5px_5px_0_#D7C7EC]', bg: 'hover:bg-lavender/5', accent: 'bg-lavender/30' }
    ];
    return themes[id.length % themes.length];
  } else {
    const themes = [
      { border: 'border-mint', shadow: 'hover:shadow-[5px_5px_0_#BEE3C8]', bg: 'hover:bg-mint/5', accent: 'bg-mint/20' },
      { border: 'border-sky', shadow: 'hover:shadow-[5px_5px_0_#C4DEEC]', bg: 'hover:bg-sky/5', accent: 'bg-sky/25' },
      { border: 'border-lavender', shadow: 'hover:shadow-[5px_5px_0_#D7C7EC]', bg: 'hover:bg-lavender/5', accent: 'bg-lavender/30' }
    ];
    return themes[id.length % themes.length];
  }
};

const OurTeam = () => {
  // Combine board and kpa categories into the governance board as requested
  const leadership = teamMembers.filter(m => m.category === 'leadership');
  const board = teamMembers.filter(m => m.category === 'board' || m.category === 'kpa');

  return (
    <div className="min-h-screen bg-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="/images/programs.jpg"
            alt="The Uwezo Network Initiative team"
            className="w-full h-full object-cover grayscale"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074';
            }}
          />
        </div>

        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-lavender font-bold bg-lavender/30 px-3 py-1 rounded-full border border-ink/20">
            OUR TEAM
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Meet the Builders
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "We exist because young people can and do lead. We shape solutions alongside the communities we serve."
          </p>
        </div>
      </section>

      {/* Leadership Core */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold">Leadership Core</h2>
            <p className="text-ink-soft text-sm font-mono uppercase tracking-wider mt-1">Driving structural change and digital dignity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member) => {
              const theme = getMemberTheme(member.id);
              return (
                <div 
                  key={member.id} 
                  className={`border-2 border-ink bg-paper p-6 transition-all duration-300 shadow-[4px_4px_0_#1F1A17] ${theme.border} ${theme.shadow} ${theme.bg} flex flex-col justify-between`}
                >
                  <div>
                    {/* Portrait */}
                    <div className="w-full h-64 border border-ink overflow-hidden mb-6 relative">
                      <div className="tape-accent bg-butter" />
                      <LazyImage
                        src={member.image || '/images/team/placeholder.jpeg'}
                        alt={member.imageAlt || member.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-ink">{member.name}</h3>
                    <p className="text-coral-deep font-mono text-xs uppercase tracking-wide mb-3">{member.role}</p>
                    <p className="text-ink-soft text-sm leading-relaxed mb-6 font-sans">{member.bio}</p>
                    
                    {/* Tags */}
                    {member.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.tags.map((t, idx) => (
                          <span key={idx} className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-ink/20 ${theme.accent}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-3 border-t border-ink/10 pt-4 mt-auto">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="p-2 text-ink-soft hover:text-ink hover:bg-ink/5 border border-transparent hover:border-ink rounded-full transition-all">
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-ink-soft hover:text-ink hover:bg-ink/5 border border-transparent hover:border-ink rounded-full transition-all">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Advisory Board */}
      <section className="py-16 md:py-24 bg-paper border-y-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold">Advisory Board & Secretariat</h2>
            <p className="text-ink-soft text-sm font-mono uppercase tracking-wider mt-1">Guiding governance, partnerships, and operations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {board.map((member) => {
              const theme = getMemberTheme(member.id);
              return (
                <div 
                  key={member.id} 
                  className={`border-2 border-ink bg-bg p-6 transition-all duration-300 shadow-[3px_3px_0_#1F1A17] ${theme.border} ${theme.shadow} ${theme.bg} flex flex-col justify-between`}
                >
                  <div>
                    {/* Portrait */}
                    <div className="w-full h-48 border border-ink overflow-hidden mb-4 relative">
                      <LazyImage
                        src={member.image || '/images/team/placeholder.jpeg'}
                        alt={member.imageAlt || member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-ink">{member.name}</h3>
                    <p className="text-coral-deep font-mono text-[10px] uppercase tracking-wide mb-2">{member.role}</p>
                    <p className="text-ink-soft text-xs leading-relaxed mb-4 font-sans line-clamp-4 hover:line-clamp-none transition-all">{member.bio}</p>
                  </div>

                  <div className="flex items-center space-x-2 border-t border-ink/10 pt-3 mt-auto">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="p-1.5 text-ink-soft hover:text-ink hover:bg-ink/5 border border-transparent hover:border-ink rounded-full transition-all">
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 text-ink-soft hover:text-ink hover:bg-ink/5 border border-transparent hover:border-ink rounded-full transition-all">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Leadership Quote & Careers Link */}
      <section className="py-16 md:py-24 bg-bg text-center">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="max-w-2xl mx-auto border-2 border-ink bg-butter p-6 shadow-[5px_5px_0_#1F1A17]">
            <p className="font-serif text-xl italic text-ink">
              "Leadership is not about titles. It is about taking responsibility for building tools that restore dignity."
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-4xl font-bold">Want to Join Us?</h2>
            <p className="text-ink-soft max-w-md mx-auto leading-relaxed text-sm">
              We are always looking for passionate technology builders, program organizers, facilitators, and logistics drivers.
            </p>
            <div className="pt-4">
              <Button asChild className="btn-neo bg-ink text-bg border-ink px-8 py-5 font-mono text-xs uppercase tracking-wider">
                <Link to="/careers">
                  View Open Opportunities
                  <ArrowRight className="w-4 h-4 ml-2" />
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

export default OurTeam;
