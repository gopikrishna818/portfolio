import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import KeyAchievementsSection from '@/components/KeyAchievementsSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceEducationSection from '@/components/ExperienceEducationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import CustomLoadingAnimation from '@/components/CustomLoadingAnimation';
import { CustomCursor } from '@/components/InteractiveElements';
import { FloatingNavDots, PageTransition, SectionTransition, useSmootherScroll } from '@/components/SmoothTransitions';
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
        <div className="min-h-screen bg-background relative m-0 p-0">
          {/* Particle Background */}
          <ParticleBackground />
          
          {/* Enhanced UI Elements */}
          <CustomCursor />
          <FloatingNavDots />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content with Clean Section Separation */}
          <main className="scrollbar-custom relative z-content m-0 p-0">
            <SectionErrorBoundary sectionName="Hero Section">
              <HeroSection />
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="About Section">
              <div className="section-spacing">
                <AboutSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Key Achievements">
              <div className="section-spacing">
                <KeyAchievementsSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Portfolio">
              <div className="section-spacing">
                <PortfolioSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Interactive Skills">
              <div className="section-spacing">
                <SkillsSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Services">
              <div className="section-spacing">
                <ServicesSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Experience & Education">
              <div className="section-spacing">
                <ExperienceEducationSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Certifications & Awards">
              <div className="section-spacing">
                <CertificationsSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Testimonials">
              <div className="section-spacing">
                <TestimonialsSection />
              </div>
            </SectionErrorBoundary>
            
            <SectionErrorBoundary sectionName="Contact">
              <ContactSection />
            </SectionErrorBoundary>
            
            {/* Footer - Inside main background container */}
            <SectionErrorBoundary sectionName="Footer">
              <Footer />
            </SectionErrorBoundary>
          </main>
        </div>
      </PageTransition>
    </ErrorBoundary>
  );
};

export default Index;
