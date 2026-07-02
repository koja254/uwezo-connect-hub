import React, { useEffect, useRef } from 'react';

export const PixelTrail: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastX = 0;
    let lastY = 0;
    const trailLimit = 15;
    let trailCount = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle trail creation by distance
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist < 15) return;

      lastX = e.clientX;
      lastY = e.clientY;

      const pixel = document.createElement('div');
      pixel.className = 'fixed pointer-events-none z-[9999] w-2 h-2 bg-coral border border-ink text-[6px] font-mono flex items-center justify-center select-none';
      pixel.style.left = `${e.clientX - 4}px`;
      pixel.style.top = `${e.clientY - 4}px`;
      
      // Random characters/stars sometimes
      const chars = ['+', '*', 'x', 'o', ''];
      pixel.innerText = chars[Math.floor(Math.random() * chars.length)];
      
      container.appendChild(pixel);
      trailCount++;

      // Fade out and remove
      setTimeout(() => {
        pixel.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
        pixel.style.transform = 'scale(0.2) rotate(45deg)';
        pixel.style.opacity = '0';
        setTimeout(() => {
          pixel.remove();
          trailCount--;
        }, 400);
      }, 300);

      // Clean up overflow
      if (container.children.length > trailLimit) {
        container.children[0].remove();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const colors = ['#FFB4A2', '#F38C7C', '#D7C7EC', '#BEE3C8', '#FFE3A8', '#C4DEEC'];
      const count = 12;

      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'fixed pointer-events-none z-[10000] w-2.5 h-2.5 border border-ink';
        particle.style.left = `${e.clientX - 5}px`;
        particle.style.top = `${e.clientY - 5}px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random drift direction
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        
        container.appendChild(particle);

        let x = e.clientX - 5;
        let y = e.clientY - 5;
        let opacity = 1;
        let scale = 1.0;

        const animate = () => {
          x += vx;
          y += vy;
          opacity -= 0.03;
          scale -= 0.02;

          particle.style.left = `${x}px`;
          particle.style.top = `${y}px`;
          particle.style.opacity = opacity.toString();
          particle.style.transform = `scale(${scale}) rotate(${x * 2}deg)`;

          if (opacity > 0 && scale > 0) {
            requestAnimationFrame(animate);
          } else {
            particle.remove();
          }
        };

        requestAnimationFrame(animate);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
};

export default PixelTrail;
