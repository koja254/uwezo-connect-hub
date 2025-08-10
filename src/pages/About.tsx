import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Target, Heart, Zap, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { organizationContent } from '@/data/static';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="About Uwezo Link Initiative"
        subtitle="Our Story"
        description="Building bridges between technology and community, we're creating pathways for young people to access world-class STEM education regardless of geographic or economic barriers."
        primaryCTA={{
          text: "Meet Our Team",
          href: "/team"
        }}
        secondaryCTA={{
          text: "View Our Programs",
          href: "/programs"
        }}
        backgroundImage="/images/image-15.jpg"
        imageAlt="Team group photo"
        size="medium"
      />

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {organizationContent.mission}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-poppins text-2xl font-bold mb-6">Why We Exist</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  In a world increasingly driven by technology, millions of young people in marginalized 
                  communities lack access to quality STEM education. This digital divide perpetuates 
                  inequality and limits opportunities for innovation and economic growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We believe that talent is universally distributed, but opportunity is not. Our mission 
                  is to change that by bringing innovative, hands-on STEM education directly to the 
                  communities that need it most.
                </p>
                
                <div className="space-y-4">
                  {[
                    'Democratize access to quality STEM education',
                    'Bridge the digital divide in underserved communities',
                    'Foster innovation through hands-on learning',
                    'Build sustainable local capacity for continued growth'
                  ].map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src="/images/image-02.jpg"
                  alt="Students in a school corridor receiving assistance"
                  className="rounded-2xl shadow-card-hover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20 rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
              {organizationContent.vision}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Global Impact</h3>
                <p className="text-muted-foreground text-sm">
                  Creating models that can be replicated worldwide to address educational inequality
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-2xl flex items-center justify-center group-hover:bg-secondary/30 transition-all duration-300">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Community-Centered</h3>
                <p className="text-muted-foreground text-sm">
                  Building solutions with and for communities, respecting local knowledge and needs
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Sustainable Innovation</h3>
                <p className="text-muted-foreground text-sm">
                  Developing technologies and approaches that serve both people and planet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every program we implement, 
                ensuring our work remains authentic, effective, and aligned with our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizationContent.coreValues.map((value, index) => {
                const icons = [Zap, Target, Heart, Users, CheckCircle];
                const IconComponent = icons[index % icons.length];
                
                return (
                  <div key={index} className="p-6 rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 group bg-card">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-8">
                How We Work
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Our methodology is built on collaboration, iteration, and sustainable impact. 
                We don't just implement programs—we build lasting partnerships and local capacity.
              </p>
            </div>

            <div className="space-y-8">
              {organizationContent.howWeWork.map((phase, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-xl text-white mb-2">{phase.phase}</h3>
                    <p className="text-white/90 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
              Join Our Mission
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Whether you're an educator, technologist, community leader, or simply someone who 
              believes in the power of education to transform lives, there's a place for you in our work.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="cta-primary">
                <Link to="/team">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/programs">
                  Explore Our Programs
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

export default About;