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
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Our Programs"
        subtitle="Innovation in Action"
        description="Three interconnected programs working together to democratize STEM education, foster innovation, and build sustainable communities through technology and hands-on learning."
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
              of STEM education that addresses multiple aspects of learning, from motivation and 
              engagement to hands-on skill development and community outreach.
            </p>
          </div>

          {/* Featured Program */}
          <div className="mb-16">
            <ProgramCard 
              program={programs[0]} 
              variant="featured"
            />
          </div>

          {/* Other Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.slice(1).map((program) => (
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
                and comprehensive pathways for skill development and community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Student Journey Flow */}
              <div className="relative">
                <div className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Motivation & Engagement</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Students start with the Uwezo Token program, earning rewards for academic achievements 
                    and building digital literacy skills through blockchain-based incentives.
                  </p>
                  <Link 
                    to={`/programs/${programs[0].slug}`} 
                    className="text-primary text-sm font-medium hover:text-primary/80 transition-colors inline-flex items-center"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
                
                {/* Connector Arrow (hidden on mobile) */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>

              <div className="relative">
                <div className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="font-bold text-secondary">2</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Hands-on Creation</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Motivated students advance to the Fab Lab, where they transform e-waste into 
                    innovative solutions while learning electronics, programming, and sustainable design.
                  </p>
                  <Link 
                    to={`/programs/${programs[1].slug}`} 
                    className="text-secondary text-sm font-medium hover:text-secondary/80 transition-colors inline-flex items-center"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
                
                {/* Connector Arrow (hidden on mobile) */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>

              <div>
                <div className="p-6 bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="font-bold text-accent">3</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">Community Impact</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Skilled students become mentors and teachers, joining our mobile education teams 
                    to share knowledge and expand our reach to new communities.
                  </p>
                  <Link 
                    to={`/programs/${programs[2].slug}`} 
                    className="text-accent text-sm font-medium hover:text-accent/80 transition-colors inline-flex items-center"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
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
                  Started in our Token program, Grace now leads a team in the Fab Lab building 
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