import React from 'react';

interface SectionDividerProps {
  className?: string;
  color?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = '',
  color = 'text-ink'
}) => {
  return (
    <div className={`w-full overflow-hidden py-4 select-none pointer-events-none flex items-center ${className}`}>
      <svg 
        className={`w-full h-5 ${color} opacity-80`} 
        viewBox="0 0 1000 16" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="african-chevron-pattern" width="32" height="16" patternUnits="userSpaceOnUse">
            {/* Outer Diamond */}
            <path 
              d="M16 0 L32 8 L16 16 L0 8 Z" 
              fill="currentColor" 
            />
            {/* Inner Diamond (Hollow cut) */}
            <path 
              d="M16 3 L26 8 L16 13 L6 8 Z" 
              fill="none" 
              stroke="var(--bg, #FBF7F2)" 
              strokeWidth="2" 
            />
            {/* Small center dot */}
            <circle cx="16" cy="8" r="1.5" fill="var(--bg, #FBF7F2)" />
          </pattern>
        </defs>
        <rect width="100%" height="16" fill="url(#african-chevron-pattern)" />
      </svg>
    </div>
  );
};

export default SectionDivider;
