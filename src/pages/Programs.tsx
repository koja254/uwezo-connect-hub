import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import ProgramCard from '@/components/ProgramCard';
import { Button } from '@/components/ui/button';
import { programs } from '@/data/programs';

const Programs = () => {
  const featuredProgram = programs.find((program) => program.id === 'days-for-dignity') ?? programs[0];
  const otherPrograms = programs.filter((program) => program.id !== featuredProgram?.id);

  const daysForDignity = programs.find((program) => program.id === 'days-for-dignity');
  const techForTomorrow = programs.find((program) => program.id === 'tech-for-tomorrow');
  const civicPower = programs.find((program) => program.id === 'civic-power-in-motion');

  const integrationSteps = [
    {
      id: 'civic-power-in-motion',
      order: 1,
      title: 'Civic Literacy & Advocacy',
      description: 'Empowering youth with structured civic literacy and dialogue workshops to enhance community participation.',
      program: civicPower,
      accentClass: 'text-lavender',
    },
    {
      id: 'days-for-dignity',
      order: 2,
      title: 'Dignity & School Retention',
      description: 'Securing menstrual equity and school retention through accountable, tracked local distribution networks.',
      program: daysForDignity,
      accentClass: 'text-coral-deep',
    },
    {
      id: 'tech-for-tomorrow',
      order: 3,
      title: 'Digital & Tech Education',
      description: 'Delivering foundational digital training, programming basics, and hands-on hardware literacy.',
      program: techForTomorrow,
      accentClass: 'text-mint',
    }
  ].filter((step) => step.program);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[50vh] flex items-center justify-center bg-paper">
        <div className="container mx-auto px-4 z-10 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-coral-deep font-bold bg-coral/20 px-3 py-1 rounded-full border border-ink/20">
            SECTORS OF OPERATION
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Our Programs
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "Three co-designed initiatives combining education, health equity, environmental conservation, and civic tech."
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Co-Designed Solutions
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto font-sans">
              We deploy three distinct, independent initiatives addressing core needs in health equity, digital education, and inclusive civic participation.
            </p>
          </div>

          {/* Featured Program */}
          <div className="mb-16">
            {featuredProgram && (
              <div className="border-2 border-ink bg-paper p-8 shadow-[5px_5px_0_#1F1A17] rounded-none">
                <span className="font-mono text-xs uppercase tracking-wider text-coral-deep font-bold mb-2 block">Featured Program</span>
                <ProgramCard 
                  program={featuredProgram} 
                  variant="featured"
                />
              </div>
            )}
          </div>

          {/* Other Programs Grid */}
          <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 gap-8 md:overflow-x-visible md:pb-0">
            {otherPrograms.map((program) => (
              <div key={program.id} className="border-2 border-ink bg-paper p-6 shadow-[4px_4px_0_#1F1A17] hover:shadow-[6px_6px_0_#1F1A17] transition-all rounded-none snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto md:shrink md:snap-none">
                <ProgramCard 
                  program={program}
                  variant="default"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Loop Framework */}
      <section className="py-16 md:py-24 bg-paper border-b-[1.5px] border-ink">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold">Our Program Architecture</h2>
            <p className="text-ink-soft text-sm font-mono uppercase tracking-wider mt-1">Independent pillars of community capacity building</p>
          </div>

          <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:overflow-x-visible md:pb-0">
            {integrationSteps.map((step) => (
              <div key={step.id} className="border-2 border-ink p-6 bg-bg shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between snap-start shrink-0 w-[80vw] sm:w-[280px] md:w-auto md:shrink md:snap-none">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center font-mono font-bold text-lg bg-bg shadow-[2px_2px_0_#1F1A17]">
                    {step.order}
                  </div>
                  <h3 className="font-serif font-bold text-xl">{step.title}</h3>
                  <p className="text-ink-soft text-xs leading-relaxed font-sans">{step.description}</p>
                </div>
                
                {step.program && (
                  <div className="pt-6">
                    <Button asChild className="w-full btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 py-2 text-xs font-mono uppercase tracking-wider font-bold">
                      <Link to={`/programs/${step.program.slug}`}>
                        Explore details
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
