import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceEducationSection from '@/components/ExperienceEducationSection';
import InteractiveDataVisualization from '@/components/InteractiveDataVisualization';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import InteractiveResumeTimeline from '@/components/InteractiveResumeTimeline';
import Footer from '@/components/Footer';
import ErrorBoundary, { SectionErrorBoundary } from '@/components/ErrorBoundary';
import { FullPageSkeleton } from '@/components/LoadingSkeleton';
import { useState, useEffect } from 'react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for components initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <FullPageSkeleton />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background relative">
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="scrollbar-custom relative z-10">
          <SectionErrorBoundary sectionName="Hero Section">
            <HeroSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="About Section">
            <AboutSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Portfolio">
            <PortfolioSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Interactive Skills">
            <SkillsSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Services">
            <ServicesSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Experience & Education">
            <ExperienceEducationSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Career Timeline">
            <InteractiveResumeTimeline />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Data Visualization">
            <InteractiveDataVisualization />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Certifications">
            <CertificationsSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Testimonials">
            <TestimonialsSection />
          </SectionErrorBoundary>
          
          <SectionErrorBoundary sectionName="Contact">
            <ContactSection />
          </SectionErrorBoundary>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default Index;
