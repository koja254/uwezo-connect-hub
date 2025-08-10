import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter, Users, Heart, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { teamMembers } from '@/data/team';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Volunteer form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>
      <div>
        <Label htmlFor="skills">Skills & Expertise</Label>
        <Input
          id="skills"
          value={formData.skills}
          onChange={(e) => setFormData({...formData, skills: e.target.value})}
          placeholder="e.g., Programming, Teaching, Design"
        />
      </div>
      <div>
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          value={formData.experience}
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
          placeholder="Tell us about your background..."
        />
      </div>
      <div>
        <Label htmlFor="motivation">Why do you want to volunteer?</Label>
        <Textarea
          id="motivation"
          value={formData.motivation}
          onChange={(e) => setFormData({...formData, motivation: e.target.value})}
          placeholder="Share your motivation..."
        />
      </div>
      <Button type="submit" className="w-full cta-primary">
        Submit Application
      </Button>
    </form>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Team & Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Meet the passionate individuals driving change in STEM education across Kenya. 
              Our diverse team combines expertise in technology, education, and community development.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="cta-primary">
                    <Heart className="w-4 h-4 mr-2" />
                    Volunteer With Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Join Our Volunteer Team</DialogTitle>
                  </DialogHeader>
                  <VolunteerForm />
                </DialogContent>
              </Dialog>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Users className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership team brings together diverse expertise in technology, education, 
              and social impact to drive our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => member.category === 'leadership').map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="font-poppins font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  {member.email && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={`mailto:${member.email}`}>
                        <Mail className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {member.linkedin && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {member.twitter && (
                    <Button variant="outline" size="icon" asChild>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Advisory Board
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our advisory board provides strategic guidance and expertise to help us 
              maximize our impact in STEM education and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.filter(member => member.category === 'advisory').map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Family */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Our Extended Family
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Beyond our core team, we're supported by an incredible network of volunteers, 
              mentors, partners, and community champions who share our vision for accessible 
              STEM education. Together, we're building a movement that extends far beyond 
              any single organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Volunteers</h3>
                <p className="text-muted-foreground text-sm">
                  Passionate individuals sharing their skills and time to support our programs.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Partners</h3>
                <p className="text-muted-foreground text-sm">
                  Organizations and institutions collaborating to expand our reach and impact.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">Community</h3>
                <p className="text-muted-foreground text-sm">
                  Students, families, and communities we serve who inspire and guide our work.
                </p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="cta-primary">
                  <Heart className="w-4 h-4 mr-2" />
                  Join the Movement
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Join Our Community</DialogTitle>
                </DialogHeader>
                <VolunteerForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;