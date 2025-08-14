import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Program } from '@/types';

interface ProgramCardProps {
  program: Program;
  variant?: 'default' | 'featured' | 'compact';
  showCTA?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  program, 
  variant = 'default',
  showCTA = true 
}) => {
  const variantClasses = {
    default: 'col-span-1',
    featured: 'md:col-span-2 lg:col-span-3',
    compact: 'col-span-1'
  };

  const imageHeightClasses = {
    default: 'h-48',
    featured: 'h-64 md:h-80',
    compact: 'h-40'
  };

  return (
    <div className={`program-card group ${variantClasses[variant]}`}>
      {/* Program Image */}
      <div className={`relative overflow-hidden ${imageHeightClasses[variant]}`}>
        <img
          src={program.heroImage}
          alt={program.heroImageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlay on hover */}
        <Link
          to={`/programs/${program.slug}`}
          className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          aria-label={`Learn more about ${program.title}`}
        >
          <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h4 className="font-poppins font-semibold text-lg mb-2">Learn More</h4>
            <ArrowRight className="w-6 h-6 mx-auto" />
          </div>
        </Link>
      </div>

      {/* Program Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Program Title */}
        <h3 className="font-poppins font-bold text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
          {program.title}
        </h3>

        {/* Program Summary */}
        <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
          {program.summary}
        </p>

        {/* Key Features (for featured variant) */}
        {variant === 'featured' && program.keyFeatures.length > 0 && (
          <div className="mb-4">
            <h4 className="font-medium text-sm text-foreground mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-2">
              {program.keyFeatures.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {program.keyFeatures.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{program.keyFeatures.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Impact Stats (for featured variant) */}
        {variant === 'featured' && program.impact.length > 0 && (
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-4">
              {program.impact.slice(0, 3).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="stat-number text-2xl mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {showCTA && (
          <div className="mt-auto pt-4">
            {program.downloadUrl ? (
              <a
                href={program.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center space-x-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                onClick={() => console.log('Opening PDF:', program.downloadUrl)}
              >
                <Download className="w-4 h-4 mr-2" />
                {program.ctaText}
              </a>
            ) : (
              <Button 
                asChild 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                variant="outline"
              >
                <Link 
                  to={`/programs/${program.slug}`}
                  className="inline-flex items-center justify-center space-x-2"
                >
                  <span>{program.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Link Overlay (only for non-download cases) */}
      {!program.downloadUrl && (
        <Link 
          to={`/programs/${program.slug}`}
          className="absolute inset-0 z-10"
          aria-label={`Learn more about ${program.title}`}
        />
      )}
    </div>
  );
};

export default ProgramCard;