import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const ParticleBackgroundOptimized = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrame = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.current = [];
      // Significantly reduced particle count for performance
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 15 : 25; // Much lower count
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          color: Math.random() > 0.5 ? '#6366f1' : '#8b5cf6'
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const updateParticle = (particle: Particle) => {
      // Simple linear movement
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Simple boundary wrapping (no collision physics)
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });
      
      animationFrame.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    
    window.addEventListener('mousemove', () => {}); // Remove expensive mouse interactions
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', () => {});
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-30"
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default ParticleBackgroundOptimized;
