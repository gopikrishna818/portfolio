import React from 'react';
import { motion } from 'framer-motion';

// Skeleton loading animation
const SkeletonLine = ({ width = "100%", height = "1rem" }: { width?: string; height?: string }) => (
  <motion.div
    className="bg-gradient-to-r from-muted via-muted-foreground/20 to-muted rounded"
    style={{ width, height }}
    animate={{
      backgroundPosition: ['200% 0', '-200% 0'],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

// Portfolio card skeleton
export const PortfolioCardSkeleton = () => (
  <div className="bg-card border border-border rounded-xl p-6 space-y-4">
    <SkeletonLine width="60%" height="1.5rem" />
    <SkeletonLine width="40%" height="1rem" />
    <div className="space-y-2">
      <SkeletonLine width="100%" height="0.75rem" />
      <SkeletonLine width="80%" height="0.75rem" />
      <SkeletonLine width="90%" height="0.75rem" />
    </div>
    <div className="flex space-x-2">
      <SkeletonLine width="3rem" height="1.5rem" />
      <SkeletonLine width="4rem" height="1.5rem" />
      <SkeletonLine width="3.5rem" height="1.5rem" />
    </div>
  </div>
);

// Skills section skeleton
export const SkillsSectionSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="bg-card border border-border rounded-xl p-6 space-y-4">
        <SkeletonLine width="50%" height="1.25rem" />
        <div className="space-y-3">
          {[...Array(5)].map((_, skillIndex) => (
            <div key={skillIndex} className="space-y-2">
              <div className="flex justify-between">
                <SkeletonLine width="30%" height="0.875rem" />
                <SkeletonLine width="10%" height="0.875rem" />
              </div>
              <SkeletonLine width="100%" height="0.5rem" />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Experience section skeleton
export const ExperienceSectionSkeleton = () => (
  <div className="space-y-8">
    {[...Array(2)].map((_, index) => (
      <div key={index} className="flex items-start space-x-6">
        <SkeletonLine width="1.5rem" height="1.5rem" />
        <div className="flex-1 bg-card border border-border rounded-xl p-6 space-y-4">
          <div className="flex justify-between">
            <div className="space-y-2">
              <SkeletonLine width="60%" height="1.25rem" />
              <SkeletonLine width="40%" height="1rem" />
            </div>
            <SkeletonLine width="20%" height="1rem" />
          </div>
          <SkeletonLine width="100%" height="0.875rem" />
          <SkeletonLine width="80%" height="0.875rem" />
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, metricIndex) => (
              <div key={metricIndex} className="text-center space-y-2">
                <SkeletonLine width="100%" height="1.5rem" />
                <SkeletonLine width="60%" height="0.75rem" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Main page skeleton
export const PageSkeleton = () => (
  <div className="min-h-screen bg-background">
    {/* Header skeleton */}
    <div className="p-6 border-b border-border">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <SkeletonLine width="8rem" height="2rem" />
        <div className="flex space-x-6">
          {[...Array(5)].map((_, index) => (
            <SkeletonLine key={index} width="4rem" height="1rem" />
          ))}
        </div>
      </div>
    </div>

    {/* Hero skeleton */}
    <div className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <SkeletonLine width="80%" height="3rem" />
        <SkeletonLine width="60%" height="1.5rem" />
        <div className="flex justify-center space-x-4">
          <SkeletonLine width="8rem" height="3rem" />
          <SkeletonLine width="8rem" height="3rem" />
        </div>
      </div>
    </div>

    {/* Content sections skeleton */}
    <div className="px-6 space-y-20 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SkeletonLine width="30%" height="2.5rem" />
        </div>
        <PortfolioCardSkeleton />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SkeletonLine width="25%" height="2.5rem" />
        </div>
        <SkillsSectionSkeleton />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <SkeletonLine width="35%" height="2.5rem" />
        </div>
        <ExperienceSectionSkeleton />
      </div>
    </div>
  </div>
);

// Loading component with progress
export const LoadingScreen = ({ progress = 0 }: { progress?: number }) => (
  <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
    <div className="text-center space-y-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full mx-auto"
      />
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">Loading Portfolio</h3>
        <p className="text-muted-foreground">Preparing the experience...</p>
      </div>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <p className="text-sm text-muted-foreground">{progress}% Complete</p>
    </div>
  </div>
);

export default PageSkeleton;
