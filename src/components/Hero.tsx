import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    external?: boolean;
  };
  backgroundImage: string;
  imageAlt: string;
  overlay?: 'dark' | 'light' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  textAlign?: 'left' | 'center';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  imageAlt,
  overlay = 'gradient',
  size = 'large',
  textAlign = 'center'
}) => {
  const sizeClasses = {
    small: 'min-h-[400px] py-16',
    medium: 'min-h-[500px] py-20',
    large: 'min-h-[100vh] min-h-[600px] py-24'
  };

  const overlayClasses = {
    dark: 'bg-neutral-dark/60',
    light: 'bg-white/60',
    gradient: 'hero-overlay'
  };

  const textAlignClasses = {
    left: 'text-left',
    center: 'text-center'
  };

  const renderCTA = (cta: typeof primaryCTA, variant: 'primary' | 'secondary') => {
    if (!cta) return null;

    const ctaClasses = variant === 'primary' ? 'cta-primary' : 'cta-secondary';
    
    if (cta.external) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaClasses} inline-flex items-center space-x-2`}
        >
          <span>{cta.text}</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      );
    }

    return (
      <Button asChild className={ctaClasses}>
        <Link to={cta.href} className="inline-flex items-center space-x-2">
          <span>{cta.text}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </Button>
    );
  };

  return (
    <section className={`relative overflow-hidden ${sizeClasses[size]}`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className={`w-full max-w-4xl ${textAlign === 'center' ? 'mx-auto' : ''}`}>
          <div className={`space-y-6 ${textAlignClasses[textAlign]}`}>
            {/* Subtitle */}
            {subtitle && (
              <div className="animate-fade-in">
                <span className="inline-block px-4 py-2 bg-accent/20 text-accent text-sm font-medium rounded-full border border-accent/30">
                  {subtitle}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-slide-up">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl animate-fade-in [animation-delay:0.2s]">
              {description}
            </p>

            {/* CTAs */}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-bounce-in [animation-delay:0.4s]">
                {renderCTA(primaryCTA, 'primary')}
                {renderCTA(secondaryCTA, 'secondary')}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator (only for large heroes) */}
      {size === 'large' && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;