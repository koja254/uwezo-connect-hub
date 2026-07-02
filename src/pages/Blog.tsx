import React from 'react';
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: 'Transitioning to a National NGO: A New Chapter for Uwezo',
    date: 'July 2, 2026',
    author: 'Sharly Moraa',
    excerpt: 'How our growth from a local community-based organization in Nairobi to a registered national NGO enables us to scale our tech, environment, and dignity initiatives across Kenya.',
    category: 'NGO Update',
    image: '/images/image-02.jpg'
  },
  {
    title: 'Days for Dignity: Breaking Menstrual Barriers in Rural Schools',
    date: 'June 18, 2026',
    author: 'Peris Makworo',
    excerpt: 'An inside look at our data-driven approach to addressing period poverty and keeping girls in classrooms using attendance-linked incentive matrices.',
    category: 'Health & Education',
    image: '/images/image-03.jpg'
  },
  {
    title: 'Making Green Futures: Turning E-waste into Soil Sensors',
    date: 'May 24, 2026',
    author: 'Tevin Omondi',
    excerpt: 'How local youth are recycling outdated technology into smart IoT sensors to help farmers adapt to changing climate realities.',
    category: 'Tech & Environment',
    image: '/images/image-05.jpg'
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
              Our Blog & Stories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insights, announcements, and on-the-ground impact stories from The Uwezo Network Initiative team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card-hover transition-all duration-300 flex flex-col h-full"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover border-b border-border"
                  />
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
                        <span className="px-2 py-1 bg-muted rounded-full font-medium text-foreground">{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <h3 className="font-poppins font-semibold text-lg mb-3 leading-snug hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/55">
                      <span className="text-xs text-muted-foreground inline-flex items-center">
                        <User className="w-3.5 h-3.5 mr-1" /> By {post.author}
                      </span>
                      <span className="text-xs font-semibold text-primary inline-flex items-center cursor-pointer hover:underline">
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
