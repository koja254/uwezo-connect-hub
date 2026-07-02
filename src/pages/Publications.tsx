import React from 'react';
import { Link } from 'react-router-dom';
import { Download, BookOpen, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { resources } from '@/data/resources';

const Publications = () => {
  // general publications or blogs/downloads
  const pubList = resources.filter(r => r.type !== 'report');

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              Publications & Guides
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Browse our guides, handbooks, workshop materials, and general publications designed for communities and educators.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Link>
            </nav>

            <div className="mobile-snap-row no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0">
              {pubList.length > 0 ? (
                pubList.map((resource) => (
                  <div
                    key={resource.id}
                    className="mobile-snap-item bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full text-muted-foreground capitalize">
                        {resource.type}
                      </span>
                    </div>
                    
                    <h3 className="font-poppins font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{resource.date}</span>
                      <span>{resource.category}</span>
                    </div>
                    
                    <Button asChild className="w-full" variant="outline">
                      <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Access Publication
                      </a>
                    </Button>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                  No publications available at the moment. Check back soon!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
