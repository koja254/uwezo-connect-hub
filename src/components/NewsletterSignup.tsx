import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal' | 'sidebar';
  title?: string;
  description?: string;
  showInterests?: boolean;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'inline',
  title = 'Our Partners',
  description = 'Together, we share a vision — building connections that inspire, empower, and create lasting impact in every step we take.',
  showInterests = false
}) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    interests: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Partner logos
  const partners = [
    {
      id: 'partner-1',
      image: '/images/partner1.png',
      imageAlt: 'Youth coding on laptops in a rural lab',
      name: 'Partner One'
    },
   
  ];

  const interestOptions = [
    { id: 'programs', label: 'Program Updates' },
    { id: 'impact', label: 'Impact Stories' },
    { id: 'volunteer', label: 'Volunteer Opportunities' },
    { id: 'events', label: 'Events & Workshops' },
    { id: 'research', label: 'Research & Reports' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
    }));
  };

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
        console.log('Newsletter signup:', formData);
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem subscribing you. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'modal':
        return 'p-6 bg-background rounded-lg shadow-card';
      case 'sidebar':
        return 'p-4 bg-card rounded-lg border';
      default:
        return '';
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${getVariantClasses()}`}>
        <div className="w-16 h-16 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="font-poppins text-xl font-semibold mb-2">Welcome to our community!</h3>
        <p className="text-muted-foreground">
          Thank you for subscribing. You'll receive our latest updates and stories.
        </p>
      </div>
    );
  }

  return (
    <div className={getVariantClasses()}>
      {/* Partners Header */}
      <div className={`${variant === 'inline' ? 'text-center mb-12' : 'mb-8'}`}>
        <h3 className="font-poppins text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Partners Grid */}
      <div className="relative mb-12">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 rounded-2xl -m-4"></div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl -m-4"></div>
        
        {/* Partners container */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="group flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative p-4 bg-white rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                
                <img
                  src={partner.image}
                  alt={partner.imageAlt}
                  className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Partner name tooltip */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {partner.name}
                  </div>
                  <div className="w-2 h-2 bg-gray-900 transform rotate-45 absolute -top-1 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add more partner placeholder spots with subtle animation */}
          {[...Array(3)].map((_, index) => (
            <div 
              key={`placeholder-${index}`} 
              className="flex items-center justify-center opacity-30"
            >
              <div className="w-full h-16 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm font-medium">Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/2 -left-3 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-3 left-1/3 w-5 h-5 bg-pink-400 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Hidden Form */}
      <form 
        method="POST" 
        data-netlify="true" 
        name="newsletter" 
        onSubmit={handleSubmit} 
        className="hidden"
      >
        <input type="hidden" name="form-name" value="newsletter" />
        {variant !== 'inline' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Your first name"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Your last name"
              />
            </div>
          </div>
        )}

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
          />
        </div>

        {showInterests && (
          <div>
            <Label className="text-base font-medium mb-3 block">
              I'm interested in (optional):
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {interestOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    name={`interests[${option.id}]`}
                    checked={formData.interests.includes(option.id)}
                    onCheckedChange={(checked) => 
                      handleInterestChange(option.id, checked as boolean)
                    }
                  />
                  <Label 
                    htmlFor={option.id} 
                    className="text-sm font-normal cursor-pointer"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          By subscribing, you agree to receive updates from Uwezo Link Initiative. 
          We respect your privacy and you can unsubscribe at any time.
        </p>

        <Button 
          type="submit" 
          className="w-full cta-primary" 
          disabled={isSubmitting || !formData.email}
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" />
              Subscribe to Updates
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;