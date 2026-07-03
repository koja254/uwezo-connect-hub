import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import LazyImage from '@/components/LazyImage';

const blogPosts = [
  {
    title: 'Democracy, Civic Voice, and the Power of Local Reality in Kenya',
    date: 'July 2, 2026',
    author: 'Sharly Moraa',
    excerpt: 'Exploring how local communities translate constitutional rights and democratic energy into accountable governance and civic action.',
    category: 'NGO Advocacy',
    image: '/images/protest.jpeg',
    avatar: '/images/sharlyquote.jpeg',
    readTime: '4 min read',
    content: [
      'In recent years, Kenya has witnessed a historic surge in civic awareness. The youth-led movements calling for accountability are not passing trends; they represent a fundamental shifts in how citizens view their relationship with governance. Understanding constitutional rights is no longer restricted to boardrooms—it is happening at the grassroots level.',
      'Our civic dialogues focus on converting this energy into structured public participation. By helping citizens understand county budget processes, local legislative paths, and peaceful advocacy, we ensure that every community voice is backed by civic knowledge. True democratic growth begins when everyday citizens realize they have both the right and the tools to shape policy.',
      'We work directly with county representatives and local youth leaders to establish open dialogue labs. Through these workshops, we demystify public benefit laws and the PBO Act, enabling community groups to operate transparently and constructively. The goal is clear: to ensure that the constitutional promise of public participation becomes a daily reality.'
    ]
  },
  {
    title: 'Why Offline-First IT Infrastructure Bridges the Digital Divide',
    date: 'June 14, 2026',
    author: 'Tevin Omondi',
    excerpt: 'Standard cloud solutions fail in low-connectivity areas. Here is how we design offline-first architectures to keep digital education accessible.',
    category: 'Tech for Good',
    image: '/images/offline.jpg',
    avatar: '/images/team/Tevin0.jpeg',
    readTime: '3 min read',
    content: [
      'The modern tech industry assumes constant, high-speed internet connectivity. But in many parts of rural Kenya, data costs are prohibitive and network signals are highly unstable. When educational platforms depend strictly on the cloud, they inadvertently lock out the very students who need them most.',
      'To build a truly inclusive digital ecosystem, we must prioritize offline-first architecture. This means building systems that store data locally, perform computations without an internet connection, and sync seamlessly once connectivity is available. Our IT education modules and digital voucher systems are designed with these realities in mind.',
      'By utilizing lightweight local servers, offline database syncing, and simple QR-coded identification, we allow public school students to learn coding and manage resources without needing active cellular data. Technology must adapt to the constraints of our communities, not the other way around.'
    ]
  },
  {
    title: 'Dignity in the Classroom: Restoring Menstrual Health Equity',
    date: 'May 28, 2026',
    author: 'Peris Makworo',
    excerpt: 'A deep dive into how our sanitary towel voucher platform removes biological barriers to keep girls in school and restore confidence.',
    category: 'Days for Dignity',
    image: '/images/programs.jpg',
    avatar: '/images/team/Peris.jpeg',
    readTime: '3 min read',
    content: [
      'Period poverty is one of the most silent yet devastating barriers to girls\' education in developing nations. When hygiene products are unaffordable, girls are forced to skip classes for several days each month, leading to high absenteeism and increased dropout rates.',
      'Our Days for Dignity program tackles this systemic barrier directly. Instead of distributing irregular, bulk handouts that lack tracking, we provide private, QR-coded digital vouchers. These vouchers allow girls to redeem high-quality sanitary products from local partner shops whenever they need them.',
      'By coupling digital vouchers with comprehensive reproductive health education, we create a safe space for girls to learn, stay in school, and thrive. Removing biological barriers is not just a healthcare victory; it is a fundamental step toward educational equality.'
    ]
  },
  {
    title: 'Technology and Local Economies: Moving Beyond Handouts',
    date: 'April 19, 2026',
    author: 'Ali Raqiba',
    excerpt: 'How local vendor payouts sustain grassroots commerce, build trust, and ensure that developmental aid remains within communities.',
    category: 'Sustain Capacity',
    image: '/images/empower.jpg',
    avatar: '/images/team/Ali.jpeg',
    readTime: '2 min read',
    content: [
      'Traditional aid programs often bring external resources, distribute them, and leave. This model can disrupt local markets and fail to build sustainable local capabilities. For long-term impact, aid must support and enrich local commercial ecosystems.',
      'Our digital payout system routes voucher redemptions directly to local shopkeepers. When a student redeems hygiene supplies, the system registers the transaction and settles it directly via mobile money, including a fair commission for the vendor. This keeps donor capital circulating inside the local community.',
      'By empowering local partner vendors, we foster economic resilience and trust. The local kiosk owners become active stakeholders in our programs. This approach shows that technology, when applied thoughtfully, can elevate local businesses while solving critical social challenges.'
    ]
  }
];

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-bg text-ink animate-fadeIn">
        <Header />
        
        {/* Blog Post Detail View */}
        <article className="pt-28 pb-16 max-w-3xl mx-auto px-4 space-y-8">
          <button 
            onClick={() => {
              setSelectedPost(null);
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink-soft hover:text-ink transition-colors pb-4 font-bold"
          >
            ← Back to Journal
          </button>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-2 py-0.5 bg-coral/25 text-ink border border-ink/20 rounded font-bold">{selectedPost.category}</span>
              <span className="text-ink-soft">•</span>
              <span className="text-ink-soft">{selectedPost.date}</span>
              <span className="text-ink-soft">•</span>
              <span className="text-coral-deep font-bold">{selectedPost.readTime}</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight">
              {selectedPost.title}
            </h1>

            {/* Author info */}
            <div className="flex items-center gap-3 py-4 border-y border-ink/10">
              <img 
                src={selectedPost.avatar} 
                alt={selectedPost.author} 
                className="w-10 h-10 rounded-full object-cover border border-ink/30"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150';
                }}
              />
              <div>
                <div className="font-serif font-bold text-sm text-ink">{selectedPost.author}</div>
                <div className="text-[10px] font-mono text-ink-soft uppercase">Contributor / Team Member</div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="border-2 border-ink shadow-[6px_6px_0_#1F1A17] overflow-hidden max-h-[450px]">
            <img 
              src={selectedPost.image} 
              alt={selectedPost.title} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1200';
              }}
            />
          </div>

          {/* Article Content */}
          <div className="font-sans text-base text-ink-soft leading-relaxed space-y-6 pt-4">
            {selectedPost.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-8 border-t border-ink/10 flex justify-between items-center">
            <button 
              onClick={() => {
                setSelectedPost(null);
                window.scrollTo(0, 0);
              }}
              className="px-6 py-3 border-2 border-ink bg-paper font-mono text-xs uppercase tracking-wider shadow-[3px_3px_0_#1F1A17] hover:shadow-[5px_5px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 font-bold"
            >
              Back to Journal
            </button>
          </div>
        </article>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-ink animate-fadeIn">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 border-b-[1.5px] border-ink overflow-hidden min-h-[50vh] flex items-center justify-center bg-paper">
        <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-ink font-bold bg-lavender/30 px-3 py-1 rounded-full border border-ink/20 animate-pulse">
            OUR JOURNAL
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink">
            Community Voices
          </h1>
          <p className="font-serif text-xl italic text-ink max-w-2xl mx-auto leading-relaxed border-l-2 border-ink/30 pl-4">
            "Discover the personal stories, field lessons, and strategic perspectives behind our community-driven solutions in Kenya."
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 gap-8 md:overflow-x-visible md:pb-0">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="border-2 border-ink bg-paper shadow-[4px_4px_0_#1F1A17] hover:shadow-[6px_6px_0_#1F1A17] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between overflow-hidden snap-start shrink-0 w-[85vw] sm:w-[320px] md:w-auto md:shrink md:snap-none"
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
                      <span className="text-ink-soft">•</span>
                      <span className="text-coral-deep font-bold">{post.readTime}</span>
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-ink leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-ink-soft text-sm leading-relaxed font-sans line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-ink/10 flex items-center justify-between mt-auto bg-paper">
                  <span className="text-xs text-ink-soft inline-flex items-center font-mono font-bold">
                    <img 
                      src={post.avatar} 
                      alt={post.author} 
                      className="w-6 h-6 rounded-full object-cover border border-ink/20 mr-2"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150';
                      }}
                    />
                    By {post.author}
                  </span>
                  <button 
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo(0, 0);
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-ink hover:text-coral-deep inline-flex items-center cursor-pointer font-bold transition-colors"
                  >
                    Read Post <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
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
