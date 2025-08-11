import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Instagram } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to join our mission? Have questions about our programs? 
              We'd love to hear from you and explore how we can work together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="font-poppins text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+254..."
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Select onValueChange={(value) => setFormData({...formData, interest: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="donation">Donation</SelectItem>
                      <SelectItem value="programs">Program Information</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell us about your interest, questions, or how you'd like to get involved..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full cta-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="font-poppins text-3xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Office Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">Office Location</h3>
                    <p className="text-muted-foreground">
                      Nairobi, Kenya<br />
                       Wu Yi Plaza 
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      General: info@uwezolinkinitiative.org<br />
                      Partnerships: partnerships@uwezolinkinitiative.org
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      +254 (0) 789 914 719<br />
                    </p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM EAT<br />
                      Weekend: By appointment only
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">Follow Us</h3>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://x.com/uwezofoundation?s=21&t=37kvQaGNhrmEbI6X267VvQ" target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.linkedin.com/in/uwezo-link-initiative-2a7b23379" target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.instagram.com/uwezo_link?igsh=d2prZ2FzaXBweDFs" target="_blank" rel="noopener noreferrer">
                          <Instagram className="w-4 h-4 mr-2" />
                          Instagram
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-muted/30 rounded-2xl">
                <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <a href="/programs">View Programs</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <a href="/donate">Make a Donation</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <a href="/team">Join Our Team</a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <a href="/resources">View Resources</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
