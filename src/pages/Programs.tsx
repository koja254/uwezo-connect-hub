import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, BookOpen, Layers } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import { Button } from '@/components/ui/button';
import { programs } from '@/data/programs';

const Programs = () => {
  const featuredProgram = programs.find((program) => program.id === 'civic-power-in-motion') ?? programs[0];
  const otherPrograms = programs.filter((program) => program.id !== featuredProgram?.id);

  const daysForDignity = programs.find((program) => program.id === 'days-for-dignity');
  const techForTomorrow = programs.find((program) => program.id === 'tech-for-tomorrow');
  const civicPower = programs.find((program) => program.id === 'civic-power-in-motion');

  const integrationSteps = [
    {
      id: 'civic-power-in-motion',
      order: 1,
      title: 'Civic Energy & Literacy',
      description: 'Civic Power in Motion channels protest momentum into daily civic engagement and inclusive dialog labs.',
      program: civicPower,
      accentClass: 'text-coral-deep',
      badgeClass: 'bg-coral/20',
    },
    {
      id: 'days-for-dignity',
      order: 2,
      title: 'Motivation & Dignity',
      description: 'Days for Dignity keeps girls in school through attendance-linked reward matrices and hygiene workshops.',
      program: daysForDignity,
      accentClass: 'text-lavender',
      badgeClass: 'bg-lavender/25',
    },
    {
      id: 'tech-for-tomorrow',
      order: 3,
      title: 'Skills & Maker Labs',
      description: 'Tech for Tomorrow bridges the digital divide through code hubs and advanced IoT hardware prototypes.',
      program: techForTomorrow,
      accentClass: 'text-mint',
      badgeClass: 'bg-mint/30',
    }
  ].filter((step) => step.program);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Our Programs"
        subtitle="Sectors of Operation"
        description="Three interconnected programs combining education, environmental conservation, health equity, and inclusive civic tech across Kenya."
        primaryCTA={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Support Our NGO",
          href: "/donate"
        }}
        backgroundImage="/images/programs.jpg"
        imageAlt="Youth in a classroom collaborating"
        size="medium"
      />

      {/* Programs Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Empowering Through Co-Designed Solutions
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed">
              Our initiatives build on one another, moving from inclusive civic literacy to health equity and hands-on technological capability.
            </p>
          </div>

          {/* Featured Program */}
          <div className="mb-16 max-w-5xl mx-auto">
            {featuredProgram && (
              <ProgramCard 
                program={featuredProgram} 
                variant="featured"
              />
            )}
          </div>

          {/* Other Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {otherPrograms.map((program) => (
              <ProgramCard 
                key={program.id} 
                program={program}
                variant="default"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Program Integration */}
      <section className="py-16 md:py-24 bg-paper border-y border-ink/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold mb-6">
                How Our Programs Integrate
              </h2>
              <p className="text-base text-ink-soft max-w-2xl mx-auto leading-relaxed">
                By nesting civic education, menstrual hygiene support, and tech makerspaces together, we provide multiple pathways of growth for school children and youth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {integrationSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="p-8 bg-bg rounded-xl border-[1.5px] border-ink hover:shadow-[4px_4px_0_#1F1A17] transition-all duration-200 h-full flex flex-col justify-between">
                    <div>
                      <div className={`w-12 h-12 ${step.badgeClass} rounded-xl flex items-center justify-center border border-ink mb-6`}>
                        <span className="font-mono font-bold text-ink">{step.order}</span>
                      </div>
                      <h3 className="font-serif font-bold text-2xl mb-3 text-ink">{step.title}</h3>
                      <p className="text-ink-soft text-sm mb-6 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <Link 
                      to={step.program ? `/programs/${step.program.slug}` : '/programs'} 
                      className="text-xs font-mono uppercase tracking-wider text-ink hover:text-coral-deep inline-flex items-center"
                    >
                      Learn More <ArrowRight className="w-3 h-3 ml-1.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Real Impact, Real Stories
            </h2>
            <p className="text-base text-ink-soft leading-relaxed mb-12">
              Our initiatives have transformed thousands of lives, co-created sustainable climate tools, and built a network of young civic leaders across Kenya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-card border-[1.5px] border-ink rounded-lg shadow-sm">
                <img
                  src="/images/image-10.jpg"
                  alt="Classroom robotics workshop for girls"
                  className="w-full h-44 object-cover rounded border border-ink mb-4"
                  loading="lazy"
                />
                <h3 className="font-serif font-bold text-xl mb-2 text-ink">Grace's Solar Innovation</h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Starting with our Days for Dignity voucher project, Grace now co-creates solar-powered water pumps under our Tech for Tomorrow modules.
                </p>
              </div>

              <div className="p-6 bg-card border-[1.5px] border-ink rounded-lg shadow-sm">
                <img
                  src="/images/image-07.jpeg"
                  alt="Students in a farm"
                  className="w-full h-44 object-cover rounded border border-ink mb-4"
                  loading="lazy"
                />
                <h3 className="font-serif font-bold text-xl mb-2 text-ink">Smart Agriculture Project</h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Students assembled IoT soil sensors to help community farmers optimize irrigation, combining tech literacy with climate resilience.
                </p>
              </div>
            </div>

            <Button asChild className="btn-neo bg-ink text-bg border-ink">
              <Link
                to="/resources"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Read Success Publications
                <BookOpen className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
