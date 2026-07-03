import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Download, FileText, FolderLock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { Button } from '@/components/ui/button';
import { resources } from '@/data/resources';

const Resources = () => {
  const location = useLocation();
  
  const getInitialTab = () => {
    if (location.pathname.includes('/reports')) return 'reports';
    if (location.pathname.includes('/publications')) return 'publications';
    if (location.pathname.includes('/assets')) return 'assets';
    return 'reports';
  };

  const [activeTab, setActiveTab] = useState<'reports' | 'publications' | 'assets'>(getInitialTab());

  // Sync tab with pathname changes
  useEffect(() => {
    if (location.pathname.includes('/reports')) setActiveTab('reports');
    else if (location.pathname.includes('/publications')) setActiveTab('publications');
    else if (location.pathname.includes('/assets')) setActiveTab('assets');
  }, [location.pathname]);

  // Filter resource items
  const reports = resources.filter(r => r.type === 'report');

  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[50vh] flex items-center justify-center bg-paper">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/resources.jpg"
            alt="Resources"
            className="w-full h-full object-cover grayscale opacity-[0.45]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073';
            }}
          />
        </div>
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold bg-coral/20 px-3 py-1 rounded-full border border-ink/20 animate-pulse">
            RESOURCE DIRECTORY
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Reports & Assets
          </h1>
          <p className="font-serif text-xl italic text-ink max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4 text-left bg-bg/85 p-4 border border-ink">
            "Access vetted publications, research reports, and toolkits curated for our community partners and stakeholders to guide localized social action."
          </p>
        </div>
      </section>

      {/* Tabs Menu */}
      <section className="py-8 bg-bg border-b border-ink/10 sticky top-16 z-30">
        <div className="container mx-auto px-4 max-w-lg flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('reports')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border-[1.5px] border-ink transition-all shadow-[2px_2px_0_#1F1A17] ${activeTab === 'reports' ? 'bg-coral text-ink' : 'bg-paper text-ink-soft'}`}
          >
            Reports
          </button>
          <button
            onClick={() => setActiveTab('publications')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border-[1.5px] border-ink transition-all shadow-[2px_2px_0_#1F1A17] ${activeTab === 'publications' ? 'bg-mint text-ink' : 'bg-paper text-ink-soft'}`}
          >
            Publications
          </button>
          <button
            onClick={() => setActiveTab('assets')}
            className={`px-4 py-2 font-mono text-xs uppercase tracking-wider border-[1.5px] border-ink transition-all shadow-[2px_2px_0_#1F1A17] ${activeTab === 'assets' ? 'bg-lavender text-ink' : 'bg-paper text-ink-soft'}`}
          >
            Assets (Media Kit)
          </button>
        </div>
      </section>

      {/* Content Area */}
      <section className="py-16 md:py-24 bg-bg min-h-[50vh]">
        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Reports Panel */}
          {activeTab === 'reports' && (
            <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 gap-8 md:overflow-x-visible md:pb-0">
              {reports.map((report) => (
                <div key={report.id} className="border-2 border-ink bg-paper p-6 shadow-[4px_4px_0_#1F1A17] hover:shadow-[6px_6px_0_#1F1A17] transition-all flex flex-col justify-between snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto md:shrink md:snap-none">
                  <div>
                    <div className="w-10 h-10 bg-coral/20 border border-ink rounded flex items-center justify-center mb-4">
                      <FileText className="w-5 h-5 text-ink" />
                    </div>
                    <h3 className="font-serif font-bold text-2xl mb-2 text-ink">{report.title}</h3>
                    <p className="text-ink-soft text-sm mb-4 leading-relaxed font-sans">{report.description}</p>
                    <div className="flex items-center justify-between text-xs font-mono text-ink-soft/70 mb-6">
                      <span>{report.date}</span>
                      <span>{report.category}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full btn-neo bg-ink text-bg border-2 border-ink shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 py-2 text-xs font-mono uppercase tracking-wider font-bold">
                    <a href={report.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      View Document (PDF)
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          )}

          {/* Publications & Assets Panel (Coming Soon) */}
          {(activeTab === 'publications' || activeTab === 'assets') && (
            <div className="max-w-md mx-auto border-2 border-ink p-8 bg-paper text-center space-y-6 shadow-[5px_5px_0_#1F1A17] rotate-[-1deg]">
              <div className="w-14 h-14 bg-butter border border-ink rounded-full flex items-center justify-center mx-auto shadow-[3px_3px_0_#1F1A17]">
                <FolderLock className="w-6 h-6 text-ink animate-pulse" />
              </div>
              <h3 className="font-serif text-3xl font-bold">Coming Soon</h3>
              <p className="text-ink-soft text-sm leading-relaxed font-sans">
                Our team is currently preparing these brand resources and outreach guides. Sign up to our newsletter list to receive notice when they go live.
              </p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
