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
import { useToast } from '@/hooks/use-toast';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    experience: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formElement = e.target as HTMLFormElement;
      const response = await fetch('/', {
        method: 'POST',
        body: new FormData(formElement),
      });

      if (response.ok) {
        console.log('Volunteer form submitted:', formData);
        toast({
          title: "Success!",
          description: "Your volunteer application has been submitted.",
        });
        setFormData({ name: '', email: '', phone: '', skills: '', experience: '', motivation: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form method="POST" data-netlify="true" name="volunteer" onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="form-name" value="volunteer" />
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
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
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>
      <div>
        <Label htmlFor="skills">Skills & Expertise</Label>
        <Input
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={(e) => setFormData({...formData, skills: e.target.value})}
          placeholder="e.g., Programming, Teaching, Design"
        />
      </div>
      <div>
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
          placeholder="Tell us about your background..."
        />
      </div>
      <div>
        <Label htmlFor="motivation">Why do you want to volunteer?</Label>
        <Textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={(e) => setFormData({...formData, motivation: e.target.value})}
          placeholder="Share your motivation..."
        />
      </div>
      <Button type="submit" className="w-full cta-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
            Behind every program, every innovation, and every impact story, there is a team of passionate individuals who believe change is possible, and are working tirelessly to make it happen
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
                <Link
                  to="/contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
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
            The Uwezo Link Initiative Leadership team, is a blend of tech innovators, educators, climate champions, and community advocates. We are united by one mission: to use technology and education to break cycles of inequality, create sustainable opportunities, and give young people the tools to shape their futures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.filter(member => member.category === 'leadership').map((member) => (
              <div
                key={member.id}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <img
                    src={member.image}
                    alt={member.imageAlt || ''}
                    className="w-full h-full object-cover rounded-full"
                  />
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

      {/* Tech Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Tech Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our tech team drives innovation and develops cutting-edge solutions to enhance STEM education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 'kevin',
                name: 'Kevin Ojwang',
                role: 'Data & AI Specialist',
                bio: 'Passionate about technology, data analytics, and AI, with a strong commitment to advancing STEM education for youth.',
              },
              {
                id: 'bob',
                name: 'Bob Kimani',
                role: 'AI & Mobile Developer',
                bio: 'IT enthusiast focused on AI and iOS mobile development, dedicated to empowering youth and promoting inclusivity in tech.',
              },
            ].map((member) => (
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

      {/* Advocacy & SRHR Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Advocacy & SRHR Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our advocacy and SRHR team champions equal opportunities and empowerment through education and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 'muna',
                name: 'Christine Muna',
                role: 'Communications Specialist',
                bio: 'With 15+ years in non-profits and humanitarian work, Christine creates impactful communication strategies that boost fundraising, donor engagement, and brand visibility.',
              },
              {
                id: 'sharon',
                name: 'Sharon Kemunto',
                role: 'Admin & Data Specialist',
                bio: 'Established ICT professional and data analytics enthusiast with expertise in machine learning, leveraging tech for impactful business growth.',
              },
              {
                id: 'raqiba',
                name: 'Ali Raqiba',
                role: 'Technology Advocate',
                bio: 'Technology advocate passionate about girls’ empowerment and creating equal opportunities in education and tech.',
              },
            ].map((member) => (
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

      {/* Kenya Poverty Action Representative (KPA) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Kenya Poverty Action Representative (KPA)
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our KPA representative drives sustainable, community-driven change through strategic partnerships and policy advocacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                id: 'evans',
                name: 'Evans James',
                role: 'Executive Director, KPA',
                bio: 'Development expert with 20+ years in water, health, and sanitation. Executive Director of KPA and advisor to multiple organizations. Skilled in strategic partnerships, resource mobilization, and policy advocacy. Dedicated to fostering sustainable, community-driven change.',
              },
            ].map((member) => (
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