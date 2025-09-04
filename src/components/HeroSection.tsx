import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import profileImg from '@/assets/profile-placeholder.jpg';

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-pulse-glow" />
      </div>

      <div className="container-width relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
            <img
              src={profileImg}
              alt="Gopikrishna Chegoni"
              className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse-glow" />
          </div>

          {/* Hero Text */}
          <div className="space-y-4">
            <h1 className="text-hero text-gradient animate-slide-up">
              GOPIKRISHNA CHEGONI
            </h1>
            <p className="text-subheading text-muted-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
              AI & Data-Driven Software Engineer
            </p>
            <p className="text-body max-w-2xl mx-auto text-foreground/80 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Transforming complex data into scalable solutions that drive innovation and business growth
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              View Portfolio
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/gopikrishna-chegoni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/gopikrishna-chegoni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border transition-all duration-300 hover:scale-110 hover:bg-secondary/20 hover:border-secondary/50"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gopikrishna.chegoni@email.com"
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border transition-all duration-300 hover:scale-110 hover:bg-accent/20 hover:border-accent/50"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
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