import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Heart, Lightbulb, Globe, CheckCircle, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { organizationContent } from '@/data/static';

const GetInvolvedForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Get Involved form submitted:', formData);
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
        <Label htmlFor="interest">How would you like to get involved?</Label>
        <Select onValueChange={(value) => setFormData({...formData, interest: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select your interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="volunteer">Volunteer</SelectItem>
            <SelectItem value="mentor">Mentor Students</SelectItem>
            <SelectItem value="teach">Teach/Workshop Leader</SelectItem>
            <SelectItem value="fundraising">Fundraising</SelectItem>
            <SelectItem value="marketing">Marketing & Outreach</SelectItem>
            <SelectItem value="tech">Technical Support</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          value={formData.experience}
          onChange={(e) => setFormData({...formData, experience: e.target.value})}
          placeholder="Tell us about your background and skills..."
        />
      </div>
      <div>
        <Label htmlFor="message">Additional Message</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Anything else you'd like us to know?"
        />
      </div>
      <Button type="submit" className="w-full cta-primary">
        <Send className="w-4 h-4 mr-2" />
        Submit Application
      </Button>
    </form>
  );
};

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    description: '',
    resources: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Partnership form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="organizationName">Organization Name</Label>
        <Input
          id="organizationName"
          value={formData.organizationName}
          onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
          required
        />
      </div>
      <div>
        <Label htmlFor="contactName">Contact Person</Label>
        <Input
          id="contactName"
          value={formData.contactName}
          onChange={(e) => setFormData({...formData, contactName: e.target.value})}
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
        <Label htmlFor="partnershipType">Partnership Type</Label>
        <Select onValueChange={(value) => setFormData({...formData, partnershipType: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select partnership type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="funding">Funding Partnership</SelectItem>
            <SelectItem value="program">Program Collaboration</SelectItem>
            <SelectItem value="corporate">Corporate Partnership</SelectItem>
            <SelectItem value="academic">Academic Institution</SelectItem>
            <SelectItem value="government">Government Agency</SelectItem>
            <SelectItem value="ngo">NGO Partnership</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="description">Partnership Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          placeholder="Describe the partnership opportunity..."
          required
        />
      </div>
      <div>
        <Label htmlFor="resources">Resources Available</Label>
        <Textarea
          id="resources"
          value={formData.resources}
          onChange={(e) => setFormData({...formData, resources: e.target.value})}
          placeholder="What resources can your organization contribute?"
        />
      </div>
      <Button type="submit" className="w-full cta-primary">
        <Send className="w-4 h-4 mr-2" />
        Submit Partnership Proposal
      </Button>
    </form>
  );
};

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Behind every program, every innovation, and every impact story, there is a team of passionate individuals who believe change is possible — and are working tirelessly to make it happen.
            </p>
            <img 
              src="/images/image-02.jpg" 
              alt="Students in a school corridor receiving assistance"
              className="rounded-2xl shadow-card mx-auto max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-8">
                Our Mission
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Empower marginalized communities through technology, education, and innovation to promote equity, sustainability, and opportunity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="font-poppins text-2xl font-bold mb-6">Our Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Uwezo Link Initiative emerged from witnessing the daily challenges faced by young people in marginalized communities — girls missing school due to lack of sanitary products, communities struggling with climate change impacts, and youth excluded from the digital economy despite their natural innovation abilities.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Uwezo Link Initiative team blends tech innovators, educators, climate champions, and community advocates. Founded by passionate individuals who believe that technology should serve humanity's most pressing needs, we create bridges between cutting-edge innovation and grassroots community development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach is rooted in the belief that sustainable change happens when communities are empowered with tools, knowledge, and opportunities. We don't impose solutions — we co-create them with the people we serve, ensuring programs are culturally relevant, environmentally sustainable, and economically viable.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Targeted Impact</h4>
                    <p className="text-muted-foreground text-sm">
                      We focus on underserved communities where our programs can make the greatest difference.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Innovation First</h4>
                    <p className="text-muted-foreground text-sm">
                      We embrace new technologies and methodologies to maximize learning outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Global Perspective</h4>
                    <p className="text-muted-foreground text-sm">
                      Our local solutions are designed with global challenges and opportunities in mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-poppins text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A future where every young person — regardless of gender, background, or location — has the resources, knowledge, and opportunities to thrive in a changing world.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-poppins text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empower marginalized communities through technology, education, and innovation to promote equity, sustainability, and opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These principles guide every decision we make and every program we implement, 
                ensuring our work remains aligned with our mission and values.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {organizationContent.coreValues.map((value, index) => (
                <div key={index} className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
                How We Work
              </h2>
              <p className="text-lg text-muted-foreground">
                Our approach combines research-backed methodologies with grassroots community engagement 
                to create sustainable, scalable impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {organizationContent.coreValues.slice(0, 4).map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
              Whether you're an individual looking to volunteer, an organization interested in partnership, 
              or a supporter wanting to contribute, there are many ways to get involved with our work.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="cta-primary">
                    Get Involved
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Get Involved with Uwezo Link</DialogTitle>
                  </DialogHeader>
                  <GetInvolvedForm />
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg">
                    Explore Partnership
                    <Users className="w-4 h-4 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Partnership Opportunities</DialogTitle>
                  </DialogHeader>
                  <PartnershipForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;