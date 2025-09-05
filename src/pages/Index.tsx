import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceEducationSection from '@/components/ExperienceEducationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificationsSection from '@/components/CertificationsSection';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';
import CustomLoadingAnimation from '@/components/CustomLoadingAnimation';
import { CustomCursor } from '@/components/InteractiveElements';
import { ScrollProgress, FloatingNavDots, PageTransition, SectionTransition, useSmootherScroll } from '@/components/SmoothTransitions';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';
import ErrorBoundary, { SectionErrorBoundary } from '@/components/ErrorBoundary';
import { FullPageSkeleton } from '@/components/LoadingSkeleton';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCustomLoader, setShowCustomLoader] = useState(true);

  // Enable smooth scrolling
  useSmootherScroll();

  useEffect(() => {
    // Simulate loading for components initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setShowCustomLoader(false);
  };

  if (showCustomLoader) {
    return <CustomLoadingAnimation onComplete={handleLoadingComplete} />;
  }

  if (isLoading) {
    return <FullPageSkeleton />;
  }

  return (
    <ErrorBoundary>
      <PageTransition>
        <div className="min-h-screen bg-background relative">
          {/* Particle Background */}
          <ParticleBackground />
          
          {/* Enhanced UI Elements */}
          <CustomCursor />
          <ScrollProgress />
          <FloatingNavDots />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content with Clean Section Separation */}
          <main className="scrollbar-custom relative z-content">
            <SectionErrorBoundary sectionName="Hero Section">
              <SectionTransition id="hero">
                <HeroSection />
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="About Section">
              <SectionTransition id="about">
                <div className="section-spacing">
                  <AboutSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Portfolio">
              <SectionTransition id="portfolio">
                <div className="section-spacing">
                  <PortfolioSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Interactive Skills">
              <SectionTransition id="skills">
                <div className="section-spacing">
                  <SkillsSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Services">
              <SectionTransition id="services">
                <div className="section-spacing">
                  <ServicesSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Experience & Education">
              <SectionTransition id="experience">
                <div className="section-spacing">
                  <ExperienceEducationSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Certifications">
              <SectionTransition id="certifications">
                <div className="section-spacing">
                  <CertificationsSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Awards & Recognition">
              <SectionTransition id="awards">
                <div className="section-spacing">
                  <AwardsSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Testimonials">
              <SectionTransition id="testimonials">
                <div className="section-spacing">
                  <TestimonialsSection />
                </div>
              </SectionTransition>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Contact">
              <SectionTransition id="contact">
                <ContactSection />
              </SectionTransition>
            </SectionErrorBoundary>
          </main>
        
        {/* Footer - Fully separated */}
        <SectionErrorBoundary sectionName="Footer">
          <SectionTransition id="footer">
            <Footer />
          </SectionTransition>
        </SectionErrorBoundary>
      </div>
      </PageTransition>
    </ErrorBoundary>
  );
};

export default Index;
