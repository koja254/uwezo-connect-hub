import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Recycle, Users } from 'lucide-react';
import { impactStats } from '@/data/static';

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    GraduationCap,
    MapPin,
    Recycle,
    Users,
  };

  const extractNumber = (value: string): number => {
    const match = value.match(/[\d,]+/);
    return match ? parseInt(match[0].replace(/,/g, ''), 10) : 0;
  };

  const formatNumber = (num: number, originalValue: string): string => {
    if (originalValue.includes('+')) {
      return num >= 1000 ? `${(num / 1000).toFixed(1)}K+` : `${num.toLocaleString()}+`;
    }
    if (originalValue.includes('Tons')) {
      return `${num}+ Tons`;
    }
    return num.toLocaleString();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          const initialValues: { [key: string]: number } = {};
          impactStats.forEach((stat) => {
            initialValues[stat.label] = 0;
          });
          setAnimatedValues(initialValues);

          impactStats.forEach((stat) => {
            const targetValue = extractNumber(stat.value);
            const duration = 2000;
            const steps = 60;
            const increment = targetValue / steps;
            let currentValue = 0;
            let step = 0;

            const timer = setInterval(() => {
              step++;
              currentValue = Math.min(currentValue + increment, targetValue);

              setAnimatedValues((prev) => ({
                ...prev,
                [stat.label]: Math.round(currentValue),
              }));

              if (step >= steps || currentValue >= targetValue) {
                clearInterval(timer);
                setAnimatedValues((prev) => ({
                  ...prev,
                  [stat.label]: targetValue,
                }));
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ...")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Impact by the Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Every statistic represents lives changed, communities empowered, and a sustainable future being built through education and innovation.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {impactStats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Users; // fallback icon
            const animatedValue = animatedValues[stat.label] || 0;

            return (
              <div key={stat.label} className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Animated Number */}
                <div className="stat-number text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-black/60 rounded-lg px-4 py-2 mb-2" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}>
                  {isVisible ? formatNumber(animatedValue, stat.value) : '0'}
                </div>

                {/* Label */}
                <h3 className="font-poppins text-xl font-semibold text-white mb-3">{stat.label}</h3>

                {/* Description */}
                <p className="text-white/80 leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-white/90 mb-6">
            These numbers are growing every day. Join us in creating even greater impact.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/donate" className="cta-accent inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Support Our Mission
            </a>
            <a href="/programs" className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
              Explore Our Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
