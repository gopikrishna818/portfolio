import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Custom cursor hook
export const useCursorFollow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Much more responsive spring configuration for smoother movement
  const springConfig = { damping: 15, stiffness: 1000, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother updates
      requestAnimationFrame(() => {
        cursorX.set(e.clientX - 12);
        cursorY.set(e.clientY - 12);
      });
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return { cursorXSpring, cursorYSpring };
};

// Custom cursor component
export const CustomCursor = () => {
  const { cursorXSpring, cursorYSpring } = useCursorFollow();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer control
    const mediaQuery = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)');
    setShouldShow(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldShow(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseMove = () => setIsVisible(true);
    const handleMouseOut = () => setIsVisible(false);

    const interactiveElements = document.querySelectorAll('button, a, [data-cursor="pointer"]');
    const inputElements = document.querySelectorAll('input, textarea, select, [contenteditable]');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide cursor over input elements
    inputElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsVisible(false));
      el.addEventListener('mouseleave', () => setIsVisible(true));
    });

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      inputElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsVisible(false));
        el.removeEventListener('mouseleave', () => setIsVisible(true));
      });
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[100] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        willChange: 'transform', // Optimize for smooth transforms
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        opacity: { duration: 0.1, ease: "easeOut" }
      }}
    >
      <motion.div
        className="w-full h-full bg-white rounded-full"
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.9 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
          mass: 0.1,
        }}
      />
    </motion.div>
  );
};

// Magnetic button component
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magneticStrength?: number;
}

export const MagneticButton = ({ 
  children, 
  className = '', 
  onClick, 
  magneticStrength = 0.3 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // More responsive spring for magnetic effect
  const springConfig = { damping: 20, stiffness: 300, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;
    
    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      x.set(deltaX);
      y.set(deltaY);
    });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      data-cursor="pointer"
      className={`relative overflow-hidden ${className}`}
    >
      {children}
    </motion.button>
  );
};

// Flip card component for projects
interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
}

export const FlipCard = ({ frontContent, backContent, className = '' }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={`relative perspective-1000 cursor-pointer ${className}`}
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      data-cursor="pointer"
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          {frontContent}
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          {backContent}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Parallax section component
interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export const ParallaxSection = ({ children, offset = 20, className = '' }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </div>
  );
};

// Hover reveal component
interface HoverRevealProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  className?: string;
}

export const HoverReveal = ({ children, revealContent, className = '' }: HoverRevealProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      data-cursor="pointer"
    >
      {children}
      
      <motion.div
        className="absolute inset-0 bg-primary/95 flex items-center justify-center"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {revealContent}
      </motion.div>
    </motion.div>
  );
};

// Stagger children animation
interface StaggerChildrenProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export const StaggerChildren = ({ children, className = '', staggerDelay = 0.1 }: StaggerChildrenProps) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
