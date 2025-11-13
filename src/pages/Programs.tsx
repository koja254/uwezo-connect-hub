import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import { Button } from '@/components/ui/button';
import { programs } from '@/data/programs';

const Programs = () => {
  const featuredProgram = programs.find((program) => program.id === 'uwezo-kwa-youth') ?? programs[0];
  const otherPrograms = programs.filter((program) => program.id !== featuredProgram?.id);
  const youthProgram = programs.find((program) => program.id === 'uwezo-kwa-youth');
  const voucherProgram = programs.find((program) => program.id === 'uwezo-voucher');
  const fabLabProgram = programs.find((program) => program.id === 'uwezo-fab-lab');
  const teachingProgram = programs.find((program) => program.id === 'uwezo-teaching');

  const integrationSteps = [
    {
      id: 'uwezo-kwa-youth',
      order: 1,
      title: 'Civic Energy & Literacy',
      description: 'Uwezo kwa Youth channels protest momentum into civic literacy, voter registration, and inclusive dialogue spaces.',
      program: youthProgram,
      accentClass: 'text-primary',
      badgeClass: 'bg-primary/20',
    },
    {
      id: 'uwezo-voucher',
      order: 2,
      title: 'Motivation & Dignity',
      description: 'Uwezo Voucher keeps learners in school through blockchain-powered incentives and SRHR support.',
      program: voucherProgram,
      accentClass: 'text-secondary',
      badgeClass: 'bg-secondary/20',
    },
    {
      id: 'uwezo-fab-lab',
      order: 3,
      title: 'Hands-on Creation',
      description: 'Fab Lab transforms e-waste into climate tech, letting students prototype tangible solutions.',
      program: fabLabProgram,
      accentClass: 'text-accent',
      badgeClass: 'bg-accent/20',
    },
    {
      id: 'uwezo-teaching',
      order: 4,
      title: 'Scaling Knowledge',
      description: 'Uwezo Teaching deploys mobile educators and alumni mentors to spread STEM and civic leadership.',
      program: teachingProgram,
      accentClass: 'text-foreground',
      badgeClass: 'bg-muted/50',
    },
  ].filter((step) => step.program);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Our Programs"
        subtitle="Innovation in Action"
        description="Four interconnected programs working together to democratize civic participation, STEM education, and sustainable community innovation."
        primaryCTA={{
          text: "Contact Us",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "Support Our Work",
          href: "/donate"
        }}
        backgroundImage="/images/programs.jpg"
        imageAlt="Youth coding on laptops in a rural lab"
        size="medium"
      />

      {/* Programs Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
              Transforming Education Through Innovation
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Our programs are designed to work synergistically, creating a comprehensive ecosystem 
              that moves from civic literacy to hands-on innovation and long-term leadership.
            </p>
          </div>

          {/* Featured Program */}
          <div className="mb-16">
            {featuredProgram && (
              <ProgramCard 
                program={featuredProgram} 
                variant="featured"
              />
            )}
          </div>

          {/* Other Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
                How Our Programs Work Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Each program complements the others, creating multiple entry points for students 
                and comprehensive pathways for civic engagement, skill development, and community impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                    <div className={`w-12 h-12 ${step.badgeClass} rounded-xl flex items-center justify-center mb-4`}>
                      <span className={`font-bold ${step.accentClass}`}>{step.order}</span>
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {step.description}
                    </p>
                    <Link 
                      to={step.program ? `/programs/${step.program.slug}` : '/programs'} 
                      className={`text-sm font-medium hover:opacity-80 transition-colors inline-flex items-center ${step.accentClass}`}
                    >
                      Learn More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                  
                  {/* Connector Arrow */}
                  {index < integrationSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
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
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
              Real Impact, Real Stories
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Our programs have transformed thousands of lives, created innovative solutions to 
              community challenges, and built a network of young leaders across Kenya.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <img
                  src="/images/image-10.jpg"
                  alt="Classroom robotics workshop for girls"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-poppins font-semibold text-lg mb-2">Grace's Solar Innovation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Started in our Voucher program, Grace now leads a team in the Fab Lab building 
                  solar-powered water purification systems for her community.
                </p>
              </div>

              <div className="p-6 bg-card rounded-2xl border border-border">
                <img
                  src="/images/image-07.jpg"
                  alt="Students testing an IoT soil moisture sensor"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-poppins font-semibold text-lg mb-2">Smart Farming Project</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Students created IoT sensors to help local farmers optimize water usage, 
                  combining technology with traditional agricultural knowledge.
                </p>
              </div>
            </div>

            <Button asChild size="lg" className="cta-primary">
              <Link
                to="/resources"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Read More Success Stories
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

export default Programs;
