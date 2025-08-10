import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
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
  title = 'Stay Connected',
  description = 'Get the latest updates on our programs and impact.',
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
      // TODO: Implement actual newsletter signup API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      console.log('Newsletter signup:', formData);
      
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
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
      {/* Header */}
      <div className={`${variant === 'inline' ? 'text-center mb-8' : 'mb-6'}`}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <Mail className="w-6 h-6 text-primary" />
          </div>
        </div>
        <h3 className="font-poppins text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields (for modal and sidebar variants) */}
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

        {/* Email */}
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

        {/* Interests (conditional) */}
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

        {/* Privacy Notice */}
        <p className="text-xs text-muted-foreground">
          By subscribing, you agree to receive updates from Uwezo Link Initiative. 
          We respect your privacy and you can unsubscribe at any time.
        </p>

        {/* Submit Button */}
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