import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Image, ArrowLeft, FileArchive } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const brandAssets = [
  {
    title: 'NGO Logo Package',
    description: 'Vector and high-resolution raster files of the new The Uwezo Network Initiative logo (vertical, horizontal, light, dark, and icon formats).',
    size: '4.2 MB',
    type: 'zip',
    downloadUrl: '#'
  },
  {
    title: 'Brand Guidelines Manual',
    description: 'Detailed instructions on our typography, color palette, logo usage rules, and tone of voice guidelines.',
    size: '2.8 MB',
    type: 'pdf',
    downloadUrl: '#'
  },
  {
    title: 'Press Kit & Fact Sheet',
    description: 'A summary sheet containing organizational history, key program statistics, leadership bios, and press contact details.',
    size: '1.1 MB',
    type: 'pdf',
    downloadUrl: '#'
  }
];

const Assets = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              Brand Assets & Media Kit
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Official logos, style guidelines, and media resources for partner organizations, journalists, and event hosts.
            </p>
          </div>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="mb-8">
              <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center text-sm">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Link>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandAssets.map((asset, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                      {asset.type === 'zip' ? (
                        <FileArchive className="w-6 h-6 text-primary" />
                      ) : (
                        <Image className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{asset.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>Format: {asset.type.toUpperCase()}</span>
                      <span>Size: {asset.size}</span>
                    </div>
                    <Button asChild className="w-full" variant="outline">
                      <a href={asset.downloadUrl}>
                        <Download className="w-4 h-4 mr-2" />
                        Download Asset
                      </a>
                    </Button>
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

export default Assets;
