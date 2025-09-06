import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import profileImage from '../assets/profile-placeholder.jpg';

const HeroSection = () => {
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

  // Force scroll to top on load to prevent navbar offset issues
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="home"
      className="h-screen w-full flex items-center justify-center relative overflow-hidden m-0 p-0 scroll-mt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        top: 0,
        left: 0,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Enhanced Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Floating Orbs with Parallax */}
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-gentle transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` 
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float-gentle transition-transform duration-700 ease-out" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` 
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse-glow transition-transform duration-300 ease-out"
          style={{ 
            transform: `translate(calc(-50% + ${mousePosition.x * 10}px), calc(-50% + ${mousePosition.y * 10}px))` 
          }}
        />
        
        {/* Additional Micro-interaction Elements with Parallax */}
        <div 
          className="absolute top-20 right-20 w-4 h-4 bg-blue-500/30 rounded-full animate-ping transition-transform duration-1000 ease-out" 
          style={{ 
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)` 
          }}
        />
        <div 
          className="absolute bottom-32 left-20 w-2 h-2 bg-purple-500/40 rounded-full animate-ping transition-transform duration-800 ease-out" 
          style={{ 
            animationDelay: '3s',
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` 
          }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-cyan-500/20 rounded-full animate-pulse transition-transform duration-600 ease-out" 
          style={{ 
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` 
          }}
        />
        
        {/* Geometric Shapes for Tech Branding with Parallax */}
        <div 
          className="absolute top-40 left-40 w-8 h-8 border border-blue-500/20 rotate-45 animate-spin-slow transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px) rotate(45deg)` 
          }}
        />
        <div 
          className="absolute bottom-40 right-40 w-6 h-6 border border-purple-500/20 rotate-12 animate-float-gentle transition-transform duration-700 ease-out" 
          style={{ 
            animationDelay: '1.5s',
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px) rotate(12deg)` 
          }}
        />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="container-width relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Profile Image with Enhanced Design */}
          <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 group">
            {/* Profile Image Container */}
            <div className="relative w-full h-full">
              {/* Immediate Fallback for Testing */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-4xl">GC</span>
              </div>
              
              {/* Actual Profile Image - will overlay on successful load */}
              <img
                src="/profile-placeholder.jpg"
                alt="Gopikrishna Chegoni - AI & Data Engineer"
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-105"
                style={{ opacity: 0, zIndex: 10 }}
                onLoad={(e) => {
                  console.log('Profile image loaded successfully');
                  (e.target as HTMLImageElement).style.opacity = '1';
                }}
                onError={(e) => {
                  console.log('JPG failed, trying PNG...');
                  (e.target as HTMLImageElement).src = '/profile-placeholder.png';
                  (e.target as HTMLImageElement).onerror = () => {
                    console.log('Both image formats failed');
                    (e.target as HTMLImageElement).style.display = 'none';
                  };
                }}
              />
            </div>
            
            {/* Animated Border Ring */}
            <div className="absolute inset-0 rounded-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-spin-slow opacity-75"></div>
              <div className="absolute inset-1 rounded-full bg-background"></div>
            </div>
              
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 animate-pulse-glow blur-xl"></div>
              
            {/* Professional Status Badge */}
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-background flex items-center justify-center animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            {/* Personal Logo/Monogram */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">GC</span>
            </div>
            
            {/* Floating Skills Icons */}
            <div className="absolute -top-2 -right-8 w-8 h-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center group-hover:translate-y-1 transition-transform duration-300">
              <span className="text-blue-400 text-xs font-bold">AI</span>
            </div>
            
            <div className="absolute top-1/2 -left-8 w-8 h-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
              <span className="text-purple-400 text-xs font-bold">ML</span>
            </div>
            
            <div className="absolute bottom-4 -right-8 w-8 h-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
              <span className="text-cyan-400 text-xs font-bold">DS</span>
            </div>
          </div>

          {/* Enhanced Hero Text with Branding */}
          <div className="space-y-6">
            {/* Main Name with Animated Typing Effect */}
            <div className="space-y-2">
              <h1 className="text-hero text-gradient animate-slide-up relative">
                GOPIKRISHNA CHEGONI
                {/* Professional Title Badge */}
                <div className="absolute -top-4 right-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 backdrop-blur-xl border border-green-400/30 px-4 py-2 rounded-full text-sm text-green-400 font-medium animate-pulse-glow">
                  🟢 Available for Full-time Opportunities
                </div>
              </h1>
              
              {/* Enhanced Tagline */}
              <div className="space-y-2">
                <p className="text-subheading text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  AI & Data-Driven Software Engineer
                </p>
                <p className="text-lg font-medium bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  Transforming Data into Business Solutions
                </p>
              </div>
            </div>
            
            {/* Professional Summary */}
            <p className="text-body max-w-3xl mx-auto text-foreground/80 animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Experienced software engineer specializing in AI, machine learning, and data analytics. 
              Proven track record of delivering scalable solutions that drive innovation and measurable business impact.
            </p>
            
            {/* Key Metrics */}
            <div className="flex flex-wrap justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">95%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons with Resume Download */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-8 md:mb-12" style={{ animationDelay: '0.6s' }}>
            {/* Primary CTAs */}
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            {/* Resume Download Button - CRITICAL for HR */}
            <button
              onClick={() => {
                // Replace with your actual resume URL
                const resumeUrl = '/resume-gopikrishna-chegoni.pdf';
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Gopikrishna_Chegoni_Resume.pdf';
                link.click();
              }}
              className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </span>
            </button>
            
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-transparent border-2 border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500/20"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </div>
      </div>

      {/* Left Side Social Icons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col space-y-4">
        <div className="group">
          <a
            href="https://github.com/gopikrishna818"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card/30 backdrop-blur-md border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/25"
          >
            <Github size={20} className="text-foreground/80 group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>
        
        <div className="group">
          <a
            href="https://linkedin.com/in/gopikrishna-chegoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card/30 backdrop-blur-md border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-secondary/20 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/25"
          >
            <Linkedin size={20} className="text-foreground/80 group-hover:text-secondary transition-colors duration-300" />
          </a>
        </div>
        
        <div className="group">
          <a
            href="mailto:gopikrishna.chegoni@email.com"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card/30 backdrop-blur-md border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/25"
          >
            <Mail size={20} className="text-foreground/80 group-hover:text-accent transition-colors duration-300" />
          </a>
        </div>
        
        {/* Connecting Line */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-border/50 to-transparent mx-auto"></div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;