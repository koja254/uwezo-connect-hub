import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Users, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { teamMembers, TeamMember } from '@/data/team';
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
    if (!formData.name || !formData.email) {
      toast({
        title: "Error",
        description: "Name and email are required.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    const maxRetries = 2;
    let attempts = 0;

    while (attempts < maxRetries) {
      try {
        const response = await fetch('https://uwezo-backend.onrender.com/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'form-name': 'volunteer',
            ...formData
          }),
        });

        if (response.ok) {
          console.log('Volunteer form submitted:', formData);
          toast({
            title: "Success!",
            description: "Your volunteer application has been submitted.",
          });
          setFormData({ name: '', email: '', phone: '', skills: '', experience: '', motivation: '' });
          return;
        } else {
          const errorText = await response.text();
          throw new Error(`Submission failed: ${response.status} ${errorText}`);
        }
      } catch (error) {
        attempts++;
        console.error(`Attempt ${attempts} failed:`, error);
        if (attempts === maxRetries) {
          toast({
            title: "Error",
            description: "There was a problem submitting your application. Please try again later.",
            variant: "destructive",
          });
        }
      }
    }
    setIsSubmitting(false);
  };

  return (
    <form method="POST" name="volunteer" onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
          required
        />
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value.trim() })}
        />
      </div>
      <div>
        <Label htmlFor="skills">Skills & Expertise</Label>
        <Input
          id="skills"
          name="skills"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          placeholder="e.g., Programming, Teaching, Design"
        />
      </div>
      <div>
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
          placeholder="Tell us about your background..."
        />
      </div>
      <div>
        <Label htmlFor="motivation">Why do you want to volunteer?</Label>
        <Textarea
          id="motivation"
          name="motivation"
          value={formData.motivation}
          onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          placeholder="Share your motivation..."
        />
      </div>
      <Button type="submit" className="w-full cta-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
};

// Helper for initials
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
};

const MemberTags = ({ tags }: { tags?: string[] }) => {
  if (!tags || tags.length === 0) return null;

  // Custom colors for tags to make them pop
  const tagColors = [
    'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
  ];

  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-3">
      {tags.map((tag, i) => (
        <span
          key={i}
          className={`text-xs font-semibold px-2 py-1 rounded-full ${tagColors[i % tagColors.length]}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

const AvatarPlaceholder = ({ name }: { name: string }) => (
  <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl rounded-xl">
    {getInitials(name)}
  </div>
);

const LeadershipCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col md:flex-row bg-card rounded-2xl border border-border overflow-hidden flex-shrink-0 snap-center w-[90vw] sm:w-[80vw] md:w-auto min-w-[90vw] sm:min-w-[80vw] md:min-w-0 lg:w-full lg:max-w-4xl hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-smooth group">
      {/* Photo side */}
      <div className="w-full md:w-[280px] h-64 md:h-auto overflow-hidden shrink-0 bg-muted/5 relative">
        <img
          src={member.image}
          alt={member.imageAlt || `Portrait of ${member.name}`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-smooth group-hover:scale-105"
          onError={(e) => {
            // Fallback to placeholder if image not found
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden w-full h-full flex items-center justify-center">
          <AvatarPlaceholder name={member.name} />
        </div>
      </div>

      {/* Content side */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-poppins font-bold text-2xl mb-1">{member.name}</h3>
          <p className="text-secondary font-medium text-[15px] mb-4">{member.role}</p>

          <MemberTags tags={member.tags} />

          <p className="text-muted-foreground text-[15px] leading-relaxed mb-5">
            {member.bio}
          </p>

          {member.quote && (
            <blockquote className="border-l-4 border-teal-500 pl-4 py-2 my-4 bg-muted/20 rounded-r-lg">
              <p className="text-primary italic font-medium">
                {member.quote}
              </p>
            </blockquote>
          )}
        </div>

        <div className="flex items-center space-x-3 mt-4">
          {member.email && (
            <Button variant="outline" size="sm" asChild className="rounded-full shadow-sm">
              <a href={`mailto:${member.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
          )}
          {member.linkedin && (
            <Button variant="outline" size="sm" asChild className="rounded-full shadow-sm text-blue-600 border-blue-200 hover:bg-blue-50 dark:border-blue-900 dark:hover:bg-blue-900/20">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const BoardCard = ({ member, featured = false }: { member: TeamMember, featured?: boolean }) => {
  const isPlaceholder = !member.image || member.image.includes('placeholder');

  return (
    <div className={`flex flex-col bg-card rounded-2xl border ${featured ? 'border-primary/30 shadow-md' : 'border-border'} flex-shrink-0 snap-center w-[85vw] sm:w-[45vw] md:w-auto min-w-[85vw] sm:min-w-[45vw] md:min-w-0 h-full overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-smooth group ${featured ? 'md:col-span-3 lg:w-2/3 lg:mx-auto lg:!min-w-full lg:w-full' : ''}`}>
      {/* Avatar (Top) */}
      <div className={`w-full ${featured ? 'h-72' : 'h-56'} overflow-hidden shrink-0 pt-4 px-4 bg-muted/5`}>
        {!isPlaceholder ? (
          <img
            src={member.image}
            alt={member.imageAlt || `Portrait of ${member.name}`}
            loading="lazy"
            className="w-full h-full object-contain object-bottom transition-transform duration-500 ease-smooth group-hover:scale-105 group-hover:brightness-105"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }}
          />
        ) : null}
        <div className={!isPlaceholder ? "hidden w-full h-full pb-4" : "w-full h-full pb-4"}>
          <AvatarPlaceholder name={member.name} />
        </div>
      </div>

      {/* Info (Bottom) */}
      <div className="p-6 flex-1 flex flex-col min-w-0">
        <h3 className={`font-poppins font-bold ${featured ? 'text-2xl' : 'text-xl'} mb-1`}>{member.name}</h3>
        <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>

        <MemberTags tags={member.tags} />

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
          {member.bio}
        </p>

        <div className="flex items-center space-x-2 mt-auto pt-2">
          {member.email && (
            <a href={`mailto:${member.email}`} className="p-2 text-muted-foreground hover:text-primary bg-muted/50 hover:bg-muted rounded-md transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          )}
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-blue-600 bg-muted/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const leadershipTeam = teamMembers.filter(m => m.category === 'leadership');
  const boardMembers = teamMembers.filter(m => m.category === 'board');
  const kpaReps = teamMembers.filter(m => m.category === 'kpa');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-poppins text-4xl md:text-6xl font-extrabold mb-6 text-neutral-dark dark:text-neutral-light tracking-tight">
              Our Team & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Community</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
              Behind every program, every innovation, and every impact story, there is a dedicated team of passionate individuals who believe systemic change is possible, and are working tirelessly to make it happen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="cta-primary h-12 px-8 text-base">
                    <Heart className="w-5 h-5 mr-2" />
                    Volunteer With Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-poppins text-2xl">Join Our Volunteer Team</DialogTitle>
                  </DialogHeader>
                  <VolunteerForm />
                </DialogContent>
              </Dialog>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base border-2 hover:bg-muted/50">
                <Link
                  to="/contact"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our leadership unites tech innovators, educators, and community advocates driven by one mission: employing technology and education to break cycles of inequality.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar lg:flex-col lg:items-center gap-6 md:gap-8 w-full mx-auto pb-4">
            {leadershipTeam.map(member => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 md:py-24 bg-muted/40 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Advisory Board & Secretariat
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              The strategic visionaries and operational champions steering Uwezo Link's grassroots impact and continuous growth.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-4">
            {boardMembers.map(member => (
              <BoardCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* KPA Representative */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Kenya Poverty Action Representative
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our anchor in developmental policy advocacy and robust resource mobilization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            {kpaReps.map(member => (
              <BoardCard key={member.id} member={member} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Extended Family Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-t border-border/50 mt-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6">
              Our Extended Family
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl mx-auto">
              Beyond our core team, we're supported by an incredible network of volunteers, mentors, partners, and community champions. Together, we're building a movement that connects grassroot communities with the resources of the digital age.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                  <Heart className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Volunteers</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate individuals sharing their skills, time, and empathy to uplift our daily programs.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center transform hover:-rotate-6 transition-transform">
                  <Users className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Partners</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Organizations, institutions, and donors collaborating to scale our solutions and expand our reach.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center transform hover:rotate-6 transition-transform">
                  <Mail className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Community</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The bold students, resilient families, and communities we serve who inspire everything we do.
                </p>
              </div>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="cta-primary h-14 px-10 text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-shadow">
                  <Heart className="w-5 h-5 mr-2" />
                  Join the Movement
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="font-poppins text-2xl">Join Our Community</DialogTitle>
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
