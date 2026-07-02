import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, History, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const WhoWeAreIndex = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <Hero
        title="Who We Are"
        subtitle="The Uwezo Network Initiative"
        description="We are a national NGO in Kenya dedicated to transforming lives through technology, education, health equity, environmental conservation, and poverty relief."
        primaryCTA={{
          text: "About Our Mission",
          href: "/who-we-are/about-us"
        }}
        secondaryCTA={{
          text: "Meet Our Team",
          href: "/who-we-are/our-team"
        }}
        backgroundImage="/images/image-02.jpg"
        imageAlt="Uwezo Network Team and Community"
        size="medium"
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Empowering Communities Across Kenya
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover who we are, where we came from, and the passionate team of innovators, educators, and advocates driving our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Us */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <Info className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">About Us</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Learn about our mission, vision, core values, and our direct alignment with the UN Sustainable Development Goals.
                </p>
              </div>
              <Link to="/who-we-are/about-us" className="text-sm font-semibold text-primary hover:underline inline-flex items-center">
                Explore About Us <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Our History */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                  <History className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Our History</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  From a small community group in Nairobi to a registered national NGO, trace our journey of growth and transformation.
                </p>
              </div>
              <Link to="/who-we-are/our-history" className="text-sm font-semibold text-secondary hover:underline inline-flex items-center">
                Explore Our History <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Our Team */}
            <div className="p-8 bg-card rounded-2xl border border-border hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Our Team</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Meet the strategic visionaries, field staff, advisory board, and volunteers steering our grassroots impact.
                </p>
              </div>
              <Link to="/who-we-are/our-team" className="text-sm font-semibold text-accent hover:underline inline-flex items-center">
                Meet Our Team <ArrowRight className="w-4 h-4 ml-1" />
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
