import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceEducationSection from '@/components/ExperienceEducationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import StunningLoadingAnimation from '@/components/StunningLoadingAnimation';
import { CustomCursor } from '@/components/InteractiveElements';
import { FloatingNavDots, PageTransition, SectionTransition, useSmootherScroll } from '@/components/SmoothTransitions';
import ParticleBackgroundOptimized from '@/components/ParticleBackgroundOptimized';
import Footer from '@/components/Footer';
import ErrorBoundary, { SectionErrorBoundary } from '@/components/ErrorBoundary';
import { FullPageSkeleton } from '@/components/LoadingSkeleton';
import FloatingFeatureButtons from '@/components/FloatingFeatureButtons';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showCustomLoader, setShowCustomLoader] = useState(true);

  // Enable smooth scrolling
  useSmootherScroll();

  useEffect(() => {
    // Failsafe: Allow 4-second animation experience before forcing load
    const failsafeTimer = setTimeout(() => {
      console.log('Failsafe: Force loading complete');
      setIsLoading(false);
      setShowCustomLoader(false);
    }, 6000); // 6 seconds failsafe for 4-second target experience

    return () => {
      clearTimeout(failsafeTimer);
    };
  }, []);

  const handleLoadingComplete = () => {
    setShowCustomLoader(false);
    setIsLoading(false);
  };

  if (showCustomLoader) {
    return <StunningLoadingAnimation onComplete={handleLoadingComplete} />;
  }

  if (isLoading) {
    return <FullPageSkeleton />;
  }

  return (
    <ErrorBoundary>
      <PageTransition>
        <div className="min-h-screen bg-background relative m-0 p-0">
          {/* Particle Background */}
          <ParticleBackgroundOptimized />
          
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
        
        {/* Floating Feature Buttons - Advanced Interactive Features */}
        <FloatingFeatureButtons />
      </PageTransition>
    </ErrorBoundary>
  );
};

export default Index;
