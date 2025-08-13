import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Zap, Target, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProgramCard from '@/components/ProgramCard';
import ImpactStats from '@/components/ImpactStats';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';
import { programs } from '@/data/programs';
import { organizationContent } from '@/data/static';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <Hero
        title="Empowering Communities. Transforming Futures. Building Resilience."
        subtitle="Building the Future Today"
        description="Meet Amina, who misses school every month due to lack of sanitary products. Daniel, who has never accessed a coding lab. Mary, who's unsure how to contribute to climate solutions. Uwezo Link Initiative was founded to bridge these gaps, connecting communities to opportunity through technology, education, and innovation."
        primaryCTA={{
          text: "See Our Programs",
          href: "/programs"
        }}
        secondaryCTA={{
          text: "Donate Today",
          href: "/donate"
        }}
        backgroundImage="/images/image-01.jpg"
        imageAlt="Young girl studying in a rural classroom"
        size="large"
      />

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Who We Are
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Uwezo Link Initiative is a Community-Based Organization in Nairobi,Kenya dedicated to transforming lives through innovative, technology-driven solutions.
            <br></br>
            We address period poverty, champion climate resilience, and equip young people with 21st-century IT skills.
            Our work is rooted in empathy, fueled by innovation, and guided by a vision of equitable progress.
            </p>
            <div className="max-w-2xl mx-auto mb-12">
              <blockquote className="text-xl md:text-2xl font-light italic text-primary text-center">
                "We are not just solving problems , we are creating possibilities."
              </blockquote>
            </div>
            
            {/* Core Values Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {organizationContent.coreValues.slice(0, 3).map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                    {index === 0 && <Zap className="w-8 h-8 text-primary" />}
                    {index === 1 && <Target className="w-8 h-8 text-primary" />}
                    {index === 2 && <Heart className="w-8 h-8 text-primary" />}
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>

            <Button asChild className="cta-primary">
              <Link to="/about">
                Learn More About Our Mission
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Programs
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Three innovative programs working together to create lasting change in STEM education, 
              community empowerment, and sustainable development.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <ProgramCard 
                key={program.id} 
                program={program}
                variant={index === 0 ? 'featured' : 'default'}
              />
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="cta-secondary">
              <Link to="/programs">
                Explore All Programs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <ImpactStats />

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Join thousands of supporters, volunteers, and partners who are helping us build 
              a more inclusive and innovative future through STEM education.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Volunteer */}
              <div className="p-6 rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Volunteer</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Share your skills and passion with students who need mentorship and guidance.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/team#volunteer">Join as Volunteer</Link>
                </Button>
              </div>

              {/* Partner */}
              <div className="p-6 rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 group">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Partner</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Collaborate with us to expand STEM education reach and impact.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link to="/contact">Explore Partnership</Link>
                </Button>
              </div>

              {/* Donate */}
              <div className="p-6 rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 group bg-gradient-to-br from-accent/5 to-accent/10">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Donate</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Fuel our mission with financial support that directly impacts students.
                </p>
                <Button asChild size="sm" className="w-full cta-accent">
                  <Link to="/donate">Make a Donation</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="cta-primary">
                <Link to="/programs">
                  Get Started Today
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
  <Link
    to="/contact"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    Contact Us
    <ExternalLink className="w-4 h-4 ml-2" />
  </Link>
</Button>

            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup
            title="Our Partners"
            description="Join us in celebrating the hearts and hands that make our journey possible. Together, we nurture dreams, inspire growth, and create lasting impact in every life we touch."            
              showInterests={true}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
