import { motion } from 'framer-motion';

// Generic Skeleton Component
const Skeleton = ({ 
  width = '100%', 
  height = '20px', 
  className = '',
  variant = 'rectangular' 
}: {
  width?: string;
  height?: string;
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}) => {
  const baseClass = `bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 animate-pulse`;
  
  const variantClasses = {
    rectangular: 'rounded-md',
    circular: 'rounded-full',
    text: 'rounded-sm'
  };

  return (
    <div 
      className={`${baseClass} ${variantClasses[variant]} ${className}`}
      style={{ width, height }}
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5, 
          ease: 'easeInOut' 
        }}
      />
    </div>
  );
};

// Hero Section Skeleton
export const HeroSectionSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="container-width text-center space-y-8">
        <div className="space-y-4">
          <Skeleton width="80%" height="80px" className="mx-auto" />
          <Skeleton width="60%" height="60px" className="mx-auto" />
        </div>
        
        <div className="space-y-4">
          <Skeleton width="70%" height="24px" className="mx-auto" />
          <Skeleton width="50%" height="24px" className="mx-auto" />
        </div>
        
        <div className="flex justify-center space-x-4">
          <Skeleton width="150px" height="50px" />
          <Skeleton width="150px" height="50px" />
        </div>
      </div>
    </div>
  );
};

// Skills Section Skeleton
export const SkillsSectionSkeleton = () => {
  return (
    <div className="py-20">
      <div className="container-width">
        <div className="text-center mb-16 space-y-4">
          <Skeleton width="40%" height="48px" className="mx-auto" />
          <Skeleton width="60%" height="24px" className="mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card/50 rounded-xl p-6 border space-y-4">
              <div className="flex items-center space-x-3">
                <Skeleton width="40px" height="40px" variant="circular" />
                <Skeleton width="60%" height="24px" />
              </div>
              
              <div className="space-y-3">
                {Array.from({ length: 4 }).map((_, j) => (
                  <div key={j} className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton width="40%" height="16px" />
                      <Skeleton width="20%" height="16px" />
                    </div>
                    <Skeleton width="100%" height="8px" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Portfolio Section Skeleton
export const PortfolioSectionSkeleton = () => {
  return (
    <div className="py-20">
      <div className="container-width">
        <div className="text-center mb-16 space-y-4">
          <Skeleton width="50%" height="48px" className="mx-auto" />
          <Skeleton width="70%" height="24px" className="mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border">
              <Skeleton width="100%" height="200px" />
              <div className="p-6 space-y-4">
                <Skeleton width="80%" height="24px" />
                <div className="space-y-2">
                  <Skeleton width="100%" height="16px" />
                  <Skeleton width="90%" height="16px" />
                  <Skeleton width="70%" height="16px" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <Skeleton key={j} width="60px" height="24px" />
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Skeleton width="100px" height="36px" />
                  <Skeleton width="80px" height="36px" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Experience Section Skeleton
export const ExperienceSectionSkeleton = () => {
  return (
    <div className="py-20">
      <div className="container-width">
        <div className="text-center mb-16 space-y-4">
          <Skeleton width="45%" height="48px" className="mx-auto" />
          <Skeleton width="65%" height="24px" className="mx-auto" />
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-muted h-full" />
          
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`flex items-center mb-12 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 ${i % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-card rounded-xl p-6 border space-y-4">
                  <div className="flex items-center space-x-3">
                    <Skeleton width="50px" height="50px" variant="circular" />
                    <div className="space-y-2 flex-1">
                      <Skeleton width="70%" height="20px" />
                      <Skeleton width="50%" height="16px" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Skeleton width="100%" height="16px" />
                    <Skeleton width="90%" height="16px" />
                    <Skeleton width="80%" height="16px" />
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <Skeleton key={j} width="50px" height="20px" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Data Visualization Skeleton
export const DataVisualizationSkeleton = () => {
  return (
    <div className="py-20">
      <div className="container-width">
        <div className="text-center mb-16 space-y-4">
          <Skeleton width="40%" height="48px" className="mx-auto" />
          <Skeleton width="60%" height="24px" className="mx-auto" />
        </div>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-card/50 rounded-xl p-6 border text-center space-y-4">
              <Skeleton width="64px" height="64px" variant="circular" className="mx-auto" />
              <Skeleton width="60%" height="36px" className="mx-auto" />
              <Skeleton width="80%" height="20px" className="mx-auto" />
              <Skeleton width="90%" height="16px" className="mx-auto" />
            </div>
          ))}
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-card/50 rounded-xl p-6 border space-y-4">
              <Skeleton width="60%" height="24px" />
              <Skeleton width="100%" height="300px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Contact Section Skeleton
export const ContactSectionSkeleton = () => {
  return (
    <div className="py-20">
      <div className="container-width">
        <div className="text-center mb-16 space-y-4">
          <Skeleton width="35%" height="48px" className="mx-auto" />
          <Skeleton width="55%" height="24px" className="mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-card rounded-lg border">
                  <Skeleton width="40px" height="40px" variant="circular" />
                  <div className="space-y-2 flex-1">
                    <Skeleton width="70%" height="20px" />
                    <Skeleton width="50%" height="16px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 border space-y-6">
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <Skeleton width="30%" height="16px" />
                  <Skeleton width="100%" height="40px" />
                </div>
              ))}
            </div>
            <Skeleton width="120px" height="48px" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Full Page Loading Skeleton
export const FullPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSectionSkeleton />
      <SkillsSectionSkeleton />
      <PortfolioSectionSkeleton />
      <ExperienceSectionSkeleton />
      <DataVisualizationSkeleton />
      <ContactSectionSkeleton />
    </div>
  );
};

export default Skeleton;
