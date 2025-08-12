import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, BookOpen, FileText, Video } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { resources } from '@/data/resources';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Resources & Learning
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Access our research, reports, guides, and educational materials to learn more about 
              STEM education, blockchain technology, and community development in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    {resource.type === 'report' && <FileText className="w-6 h-6 text-primary" />}
                    {(resource.type === 'download' || resource.type === 'blog') && <BookOpen className="w-6 h-6 text-primary" />}
                    {resource.type === 'video' && <Video className="w-6 h-6 text-primary" />}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full text-muted-foreground capitalize">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="font-poppins font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{resource.date}</span>
                  <span>{resource.category}</span>
                </div>
                
                <Button asChild className="w-full" variant="outline">
                  <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Access Resource
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-poppins text-3xl font-bold mb-4">
              Stay Updated with New Resources
            </h2>
            <p className="text-muted-foreground mb-8">
              Be the first to access our latest research, guides, and educational materials.
            </p>
            <Button asChild size="lg" className="cta-primary">
  <Link
    to="/contact"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    Subscribe to Updates
    <ExternalLink className="w-4 h-4 ml-2" />
  </Link>
</Button>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;