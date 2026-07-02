import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Sparkles, X } from 'lucide-react';

export const NewsletterPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user already dismissed or subscribed
    const isSubscribed = localStorage.getItem('uwezo_newsletter_subscribed');
    if (isSubscribed) return;
    const isDismissed = localStorage.getItem('uwezo_newsletter_dismissed');
    if (isDismissed) return;

    // Trigger on scroll (>35% of page)
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;

      if (scrollPercent > 35) {
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Trigger on exit intent (mouse leaving window top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 5) {
        setIsOpen(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('uwezo_newsletter_dismissed', 'true');
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Client-side rate limiting to prevent spam / DDoS
    const now = Date.now();
    const lastSubmit = localStorage.getItem('last_submit_newsletter');
    if (lastSubmit) {
      const elapsed = now - parseInt(lastSubmit, 10);
      if (elapsed < 15000) {
        toast({
          title: "Too Many Requests",
          description: "Please wait 15 seconds before subscribing again.",
          variant: "destructive",
        });
        return;
      }
    }
    localStorage.setItem('last_submit_newsletter', now.toString());

    setIsSubmitting(true);
    try {
      const response = await fetch('https://uwezo-backend.onrender.com/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'form-name': 'newsletter',
          email,
        }),
      });

      if (response.ok) {
        toast({
          title: "Thank You!",
          description: "You've successfully subscribed to our newsletter.",
        });
        localStorage.setItem('uwezo_newsletter_subscribed', 'true');
        setIsOpen(false);
      } else {
        throw new Error();
      }
    } catch (err) {
      toast({
        title: "Submission Error",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleDismiss(); }}>
      <DialogContent className="sm:max-w-[420px] bg-paper border-2 border-ink p-0 overflow-hidden shadow-[8px_8px_0_#1F1A17] rounded-none">
        
        {/* Colorful top border strip */}
        <div className="h-3 bg-gradient-to-r from-coral via-lavender to-mint border-b-2 border-ink" />

        {/* Content */}
        <div className="p-8 relative">
          {/* Custom close button */}
          <button 
            onClick={handleDismiss} 
            className="absolute top-4 right-4 p-1 hover:bg-ink/5 border border-transparent hover:border-ink rounded-full transition-all"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4 text-ink" />
          </button>

          <div className="w-14 h-14 bg-coral border-2 border-ink rounded-full flex items-center justify-center mb-6 shadow-[3px_3px_0_#1F1A17] rotate-[-6deg]">
            <Mail className="w-6 h-6 text-ink" />
          </div>

          <DialogTitle className="font-serif text-3xl font-bold leading-tight mb-3 text-ink">
            Let's build together!
          </DialogTitle>
          
          <DialogDescription className="text-ink-soft text-sm leading-relaxed mb-6 font-sans">
            Join the Uwezo community list. Receive updates on STEM labs, Menstrual Health updates, and open career opportunities. No spam, only human-first technology.
          </DialogDescription>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="you@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-bg border-2 border-ink px-4 py-3 rounded-none placeholder:text-ink-soft/60 text-ink focus-visible:ring-0 focus-visible:border-ink focus-visible:outline-none"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full btn-neo bg-ink text-bg border-ink rounded-none hover:shadow-[4px_4px_0_#FFE3A8] font-mono text-xs uppercase tracking-wider h-12"
            >
              {isSubmitting ? 'Submitting...' : 'Join the Movement'}
            </Button>
          </form>

          {/* Small footer stamp */}
          <p className="text-[10px] text-ink-soft/70 font-mono mt-4 text-center">
            * We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;
