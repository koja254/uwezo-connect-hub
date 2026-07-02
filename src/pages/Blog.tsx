import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import LazyImage from '@/components/LazyImage';

const blogPosts = [
  {
    title: 'From the Grassroots to the UNGA: Translating Local Data into Global Policy',
    date: 'July 2, 2026',
    author: 'Sharly Moraa',
    excerpt: 'How we coordinate grassroots research from Nairobi counties to advocate for national menstrual hygiene policies at the United Nations General Assembly levels.',
    category: 'NGO Advocacy',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=600'
  },
  {
    title: 'Why Offline-First Tech Matters for Marginalized Communities',
    date: 'June 14, 2026',
    author: 'Tevin Omondi',
    excerpt: 'Why standard cloud systems fail in rural environments, and how our offline QR-code card loop bridges the gap to ensure zero-barrier student resource redemptions.',
    category: 'Tech for Good',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600'
  },
  {
    title: 'Dignity is a Right, Not a Luxury: Breaking Period Poverty Stigma',
    date: 'May 28, 2026',
    author: 'Peris Makworo',
    excerpt: 'Sharing insights from our school workshops where we combine biology discussions with digital vouchers to keep school attendance high.',
    category: 'Days for Dignity',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600'
  },
  {
    title: 'Empowerment Over Handouts: Rebuilding Local Economies',
    date: 'April 19, 2026',
    author: 'Ali Raqiba',
    excerpt: 'How our mobile payouts feed local shopkeepers directly, ensuring aid funds stay within the community to build sustainable local ecosystems.',
    category: 'Sustain Capacity',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-bg text-ink">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[50vh] flex items-center justify-center bg-paper">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-lavender font-bold bg-lavender/30 px-3 py-1 rounded-full border border-ink/20">
            OUR JOURNAL
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Stories & Insights
          </h1>
          <p className="font-serif text-xl italic text-ink-soft max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "Warm, human-first narratives bridging grassroots realities with national tech solutions."
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="border-2 border-ink bg-paper shadow-[4px_4px_0_#1F1A17] hover:shadow-[6px_6px_0_#1F1A17] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image banner */}
                  <div className="h-56 overflow-hidden border-b-2 border-ink relative">
                    <div className="tape-accent bg-mint" />
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-2 text-xs font-mono">
                      <span className="px-2 py-0.5 bg-coral/25 text-ink border border-ink/20 rounded font-bold">{post.category}</span>
                      <span className="text-ink-soft">•</span>
                      <span className="text-ink-soft">{post.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-ink leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-ink-soft text-sm leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-ink/10 flex items-center justify-between mt-auto">
                  <span className="text-xs text-ink-soft inline-flex items-center font-mono font-bold">
                    <User className="w-3.5 h-3.5 mr-1.5" /> By {post.author}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-ink hover:text-coral-deep inline-flex items-center cursor-pointer font-bold">
                    Read Post <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
