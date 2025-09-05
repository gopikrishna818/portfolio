import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// Smooth section transitions component - Fixed for no overlapping
export const SectionTransition = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full"
    >
      {children}
    </motion.section>
  );
};

// Page transition wrapper
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Scroll progress indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

// Enhanced navigation with smooth scroll
export const useSmootherScroll = () => {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);
};

// Intersection observer for section highlighting
export const useSectionInView = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
};

// Staggered reveal for sections
export const StaggeredReveal = ({ children, delay = 0.1 }: { children: React.ReactNode[]; delay?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay
          }
        }
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: [0.25, 0.25, 0, 1]
              }
            }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Floating navigation dots
export const FloatingNavDots = () => {
  const activeSection = useSectionInView();
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-3 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full p-3 shadow-lg"
    >
      {sections.map((section) => (
        <motion.a
          key={section.id}
          href={`#${section.id}`}
          className="group relative"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          data-cursor="pointer"
        >
          <div
            className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-primary border-primary scale-125'
                : 'bg-transparent border-muted-foreground/50 hover:border-primary'
            }`}
          />
          <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-card border border-border rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
            {section.label}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};
