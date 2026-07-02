import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Program } from '@/types';
import LazyImage from './LazyImage';
import { motion } from 'framer-motion';

interface ProgramCardProps {
  program: Program;
  variant?: 'default' | 'featured' | 'compact';
  showCTA?: boolean;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  program, 
  variant = 'default',
  showCTA = true,
  className
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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`border-[1.5px] border-ink bg-bg rounded-lg overflow-hidden flex flex-col relative transition-all duration-200 hover:shadow-[4px_4px_0_#1F1A17] ${variantClasses[variant]} ${className}`}
    >
      {/* Program Image */}
      <div className={`relative overflow-hidden ${imageHeightClasses[variant]}`}>
        <LazyImage
          src={program.heroImage}
          alt={program.heroImageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <Link
          to={`/programs/${program.slug}`}
          className="absolute inset-0 bg-coral/90 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20"
          aria-label={`Learn more about ${program.title}`}
        >
          <div className="text-center text-ink">
            <h4 className="font-serif font-bold text-xl mb-2">Learn More</h4>
            <ArrowRight className="w-6 h-6 mx-auto" />
          </div>
        </Link>
      </div>

      {/* Program Content */}
      <div className="p-6 flex-1 flex flex-col relative z-10">
        {/* Program Title */}
        <h3 className="font-serif font-bold text-2xl text-ink mb-3 hover:text-coral-deep transition-colors">
          <Link to={`/programs/${program.slug}`} onClick={() => window.scrollTo(0, 0)}>
            {program.title}
          </Link>
        </h3>

        {/* Program Summary */}
        <p className="text-ink-soft text-sm leading-relaxed mb-4 flex-1">
          {program.summary}
        </p>

        {/* Key Features (for featured variant) */}
        {variant === 'featured' && program.keyFeatures.length > 0 && (
          <div className="mb-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-2">Key Features:</h4>
            <div className="flex flex-wrap gap-2">
              {program.keyFeatures.slice(0, 3).map((feature, index) => (
                <Badge key={index} className="text-xs bg-mint text-ink border-ink border font-sans">
                  {feature}
                </Badge>
              ))}
              {program.keyFeatures.length > 3 && (
                <Badge className="text-xs bg-bg text-ink-soft border-ink border font-sans">
                  +{program.keyFeatures.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Impact Stats (for featured variant) */}
        {variant === 'featured' && program.impact.length > 0 && (
          <div className="mb-6 border-t border-dashed border-ink/20 pt-4">
            <div className="grid grid-cols-3 gap-4">
              {program.impact.slice(0, 3).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-serif text-3xl font-bold text-ink">{stat.value}</div>
                  <div className="text-[10px] uppercase font-mono tracking-wider text-ink-soft">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        {showCTA && (
          <div className="mt-auto pt-4 relative z-20">
            {program.downloadUrl ? (
              <a
                href={program.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center space-x-2 rounded-full border-[1.5px] border-ink bg-bg px-4 py-2.5 text-xs font-mono uppercase tracking-wider text-ink hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all hover:shadow-[3px_3px_0_#1F1A17]"
              >
                <Download className="w-4 h-4 mr-2" />
                {program.ctaText}
              </a>
            ) : (
              <Button 
                asChild 
                className="btn-neo w-full bg-ink text-bg border-ink hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all text-xs font-mono uppercase tracking-wider"
              >
                <Link 
                  to={`/programs/${program.slug}`}
                  className="inline-flex items-center justify-center space-x-2"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <span>{program.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform" />
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProgramCard;
