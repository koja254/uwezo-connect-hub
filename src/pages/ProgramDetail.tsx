import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { programs } from '@/data/programs';

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find(p => p.slug === slug);

  if (!program) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
          <Link to="/programs" className="text-primary hover:underline">
            ← Back to Programs
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                to="/programs" 
                className="text-white/80 hover:text-white transition-colors inline-flex items-center text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Programs
              </Link>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
                  {program.title}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  {program.summary}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {program.downloadUrl ? (
                    <Button
                      asChild
                      size="lg"
                      className="cta-accent inline-flex items-center justify-center space-x-2"
                    >
                      <a
                        href={program.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => console.log('Opening PDF:', program.downloadUrl)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        View Concept Note
                      </a>
                    </Button>
                  ) : (
                    <Button size="lg" className="cta-accent">
                      <Link to="/contact" className="inline-flex items-center">
                        Contact Us
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={program.heroImage}
                  alt={program.heroImageAlt}
                  className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Description */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="font-poppins text-3xl font-bold mb-6">About This Program</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  {program.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              <div>
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <h3 className="font-poppins font-semibold text-lg mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {program.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our structured approach ensures maximum impact and sustainable growth for all participants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {program.howItWorks.map((step, index) => (
                <div key={step.step} className="relative">
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="font-bold text-2xl text-primary">{step.step}</span>
                      </div>
                      <h3 className="font-poppins font-semibold text-lg mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Connector Arrow (hidden on mobile and last item) */}
                  {index < program.howItWorks.length - 1 && (
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

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Program Impact</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real numbers, real impact. See how this program is making a difference in communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {program.impact.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{stat.metric}</h3>
                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">Program Gallery</h2>
              <p className="text-lg text-muted-foreground">
                See our program in action and the impact we're making together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.gallery.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm leading-relaxed">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;