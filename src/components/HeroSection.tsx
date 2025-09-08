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
      className="min-h-screen h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: '0',
        padding: '0',
        marginTop: '0',
        paddingTop: '0',
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

  <div className="container-width relative z-10 px-4 py-8 md:py-12 pt-16 md:pt-24">
        <div className="text-center space-y-4 md:space-y-6 lg:space-y-8">
          {/* Profile Image with Enhanced Design */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 group mb-4 md:mb-6 mt-4 md:mt-8">
            {/* Profile Image Container */}
            <div className="relative w-full h-full z-20">
              {/* Immediate Fallback for Testing */}
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">GC</span>
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
            
            {/* Professional Status Badge */}
            <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 bg-green-500 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 md:border-4 border-background flex items-center justify-center animate-bounce">
              <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"></div>
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
          <div className="space-y-4 md:space-y-6">
            {/* Main Name with Animated Typing Effect */}
            <div className="space-y-2 md:space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-gradient animate-slide-up relative">
                GOPIKRISHNA CHEGONI
                {/* Professional Title Badge - Hide on mobile for cleaner look */}
                <div className="hidden md:block absolute -top-4 right-0 bg-gradient-to-r from-green-500/20 to-blue-600/20 backdrop-blur-xl border border-green-400/30 px-4 py-2 rounded-full text-sm text-green-400 font-medium animate-pulse-glow">
                  🟢 Available for Full-time Opportunities
                </div>
              </h1>
              
              {/* Mobile Professional Badge */}
              <div className="md:hidden bg-gradient-to-r from-green-500/20 to-blue-600/20 backdrop-blur-xl border border-green-400/30 px-3 py-2 rounded-full text-xs text-green-400 font-medium animate-pulse-glow inline-block">
                🟢 Available for Full-time Opportunities
              </div>
              
              {/* Enhanced Value Proposition */}
              <div className="space-y-1 md:space-y-2">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  Engineering Scalable Data Pipelines & AI Systems
                </p>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground animate-slide-up" style={{ animationDelay: '0.25s' }}>
                  AI & Data Engineer | Specializing in Real-Time Data Processing, ML Deployment
                </p>
                
                {/* Impact Metrics Row */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <div className="bg-black/30 backdrop-blur-xl border border-green-400/30 px-3 py-2 rounded-lg">
                    <div className="text-green-400 font-bold text-sm md:text-base">100M+</div>
                    <div className="text-xs text-gray-400">Records Processed</div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-xl border border-blue-400/30 px-3 py-2 rounded-lg">
                    <div className="text-blue-400 font-bold text-sm md:text-base">15+</div>
                    <div className="text-xs text-gray-400">AI Models Deployed</div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-xl border border-purple-400/30 px-3 py-2 rounded-lg">
                    <div className="text-purple-400 font-bold text-sm md:text-base">10+</div>
                    <div className="text-xs text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-xl border border-orange-400/30 px-3 py-2 rounded-lg">
                    <div className="text-orange-400 font-bold text-sm md:text-base">1+</div>
                    <div className="text-xs text-gray-400">Years Experience</div>
                  </div>
                </div>
                
                {/* Elevator Pitch */}
                <p className="text-sm md:text-base text-foreground/70 animate-slide-up max-w-2xl mx-auto mt-4" style={{ animationDelay: '0.35s' }}>
                  From data ingestion to model deployment, I engineer end-to-end AI systems that transform raw data into reliable, scalable, and automated solutions.
                </p>
                
                {/* Location & Remote Preference */}
                <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
                    <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Open to Relocation</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Remote Friendly</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
                    <svg className="w-3 h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Full-time Ready</span>
                  </div>
                </div>
              </div>
            </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-slide-up mb-6 md:mb-8 lg:mb-12 px-2" style={{ animationDelay: '0.6s' }}>
            {/* Primary CTAs */}
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto group relative overflow-hidden bg-transparent border-2 border-blue-500/50 hover:border-blue-400 text-blue-400 hover:text-white px-6 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500/20"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
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
            href="mailto:gkchegoni@gmail.com"
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