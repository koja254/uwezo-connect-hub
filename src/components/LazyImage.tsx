import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = '/images/programs.jpg',
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <div className={`relative overflow-hidden bg-paper/50 ${className}`}>
      {/* Skeleton/Placeholder overlay */}
      {!loaded && (
        <div className="absolute inset-0 bg-paper animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-ink/20 border-t-ink animate-spin" />
        </div>
      )}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (currentSrc !== fallbackSrc) {
            setCurrentSrc(fallbackSrc);
          }
        }}
        className={`w-full h-full object-cover transition-all duration-500 ease-out ${
          loaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-95 blur-sm'
        }`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
