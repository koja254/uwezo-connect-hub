import React from 'react';
import { ArrowLeft, Clock, Award, Landmark, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const timelineEvents = [
  {
    year: '2024',
    title: 'The Spark & Foundation',
    description: 'Triggered by the historic Gen Z accountability movement in Nairobi, a group of tech innovators, advocates, and educators came together to address the glaring civic literacy gaps, period poverty, and barriers in digital education. Founded initially as the grassroots "Uwezo Link Initiative".',
    icon: Clock,
    color: 'bg-primary/20 text-primary',
  },
  {
    year: '2025',
    title: 'Days for Dignity & Lab Pilots',
    description: 'Launched the first pilot of the Days for Dignity program in rural schools, combining SRHR workshops with smart voucher tracking. Simultaneously deployed our first mobile fabrication labs, teaching youth to transform e-waste into IoT soil moisture sensors.',
    icon: Award,
    color: 'bg-secondary/20 text-secondary',
  },
  {
    year: '2026',
    title: 'Transition to National NGO',
    description: 'Recognized for significant regional impact, the organization officially registered as a national non-governmental organization (NGO) under the name "The Uwezo Network Initiative." We expanded our sectors to encompass education, environmental conservation, health, ICT, and poverty relief.',
    icon: Landmark,
    color: 'bg-accent/20 text-accent',
  },
  {
    year: 'Beyond',
    title: 'Scale & Sustainable Impact',
    description: 'Deepening our footprint across Kenya, establishing permanent digital community hubs, and deploying our automated voter activation systems to empower Gen Z voices at national policymaking levels.',
    icon: Globe2,
    color: 'bg-muted/50 text-foreground',
  }
];

const OurHistory = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="Our History"
        subtitle="From Grassroots to National Impact"
        description="The story of how a passionate group of community advocates and tech innovators built a network that is transforming civic, digital, and health equity across Kenya."
        primaryCTA={{
          text: "Who We Are",
          href: "/who-we-are"
        }}
        secondaryCTA={{
          text: "Our Programs",
          href: "/programs"
        }}
        backgroundImage="/images/programs.jpg"
        imageAlt="History Timeline illustration"
        size="medium"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-12">
              <Link to="/who-we-are" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Who We Are
              </Link>
            </nav>

            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore the milestones that shaped the evolution of The Uwezo Network Initiative.
              </p>
            </div>

            <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12">
              {timelineEvents.map((event, index) => {
                const IconComponent = event.icon;
                return (
                  <div key={index} className="relative pl-8 md:pl-12 group">
                    {/* Circle marker */}
                    <div className={`absolute -left-6 top-1.5 w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${event.color}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-6 bg-card rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300">
                      <span className="font-mono text-sm font-bold text-primary block mb-2">{event.year}</span>
                      <h3 className="font-poppins font-semibold text-xl mb-3">{event.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurHistory;
