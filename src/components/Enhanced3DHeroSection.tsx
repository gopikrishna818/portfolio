import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import profileImg from '@/assets/profile-placeholder.jpg';

// Enhanced Hero Section with Professional Branding
const Enhanced3DHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Enhanced Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Floating Orbs with Parallax */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` 
          }}
        />
        
        {/* Additional Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Left Social Icons */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-20 flex flex-col space-y-4">
        <motion.a
          href="https://github.com/gopikrishna818"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-background/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/20 transition-all duration-300 group"
          whileHover={{ x: 5 }}
          whileTap={{}}
        >
          <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
        </motion.a>
        
        <motion.a
          href="https://linkedin.com/in/gopikrishna-chegoni"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-background/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/20 transition-all duration-300 group"
          whileHover={{ x: 5 }}
          whileTap={{}}
        >
          <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
        </motion.a>
        
        <motion.a
          href="mailto:gopikrishna.chegoni@example.com"
          className="p-3 bg-background/20 backdrop-blur-sm rounded-full border border-primary/30 hover:bg-primary/20 transition-all duration-300 group"
          whileHover={{ x: 5 }}
          whileTap={{}}
        >
          <Mail className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
        </motion.a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          
          {/* Professional Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              {/* Circular Border Animation */}
              <motion.div 
                className="absolute inset-0 rounded-full border-4 border-primary/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-2 rounded-full border-2 border-secondary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Profile Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
                <img
                  src={profileImg}
                  alt="Gopikrishna Chegoni - Professional Headshot"
                  className="w-full h-full object-cover"
                />
                {/* Professional Overlay Badge */}
                <div className="absolute bottom-4 right-4 bg-green-500 w-6 h-6 rounded-full border-4 border-background animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Professional Content */}
          <div className="text-left lg:text-left space-y-6">
            
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center space-x-2 text-green-400"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Available for Full-time Opportunities</span>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-2">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Gopikrishna
                </span>
                <br />
                <span className="text-foreground">Chegoni</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary font-semibold mb-2">
                AI & Data-Driven Software Engineer
              </p>
            </motion.div>

            {/* Professional Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              <strong className="text-foreground">Transforming Data into Business Solutions</strong>
              <br />
              Specializing in scalable, data-driven applications with expertise in Python, FastAPI, and machine learning.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex items-center space-x-2 text-muted-foreground"
            >
              <MapPin className="w-4 h-4" />
              <span>Based in India • Open to Remote & Relocation</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{ boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)" }}
                whileTap={{}}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              >
                View Portfolio
              </motion.button>
              
              <motion.button
                whileHover={{}}
                whileTap={{}}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{}}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Enhanced3DHeroSection;
