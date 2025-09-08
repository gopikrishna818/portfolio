import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CustomLoadingAnimationProps {
  onComplete: () => void;
}

const CustomLoadingAnimation = ({ onComplete }: CustomLoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [showInitials, setShowInitials] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start showing initials after a brief delay
    setTimeout(() => setShowInitials(true), 300);

    // Progress animation - optimized for 3 second experience
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 400);
          }, 300);
          return 100;
        }
        return prev + 4; // Optimized for ~2.5 seconds progress
      });
    }, 100); // 25 steps × 100ms = 2.5 seconds + delays = ~3 seconds total

    // Failsafe timer - set to 4 seconds to allow full 3-second experience
    const failsafeTimer = setTimeout(() => {
      clearInterval(interval);
      setIsComplete(true);
      onComplete();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(failsafeTimer);
    };
  }, [onComplete]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.5,
      rotate: -180 
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.8 + i * 0.3, // Adjusted for 3-second experience
        duration: 1.0, // Slightly shorter duration
        type: "spring" as const,
        stiffness: 80,
        damping: 12
      }
    }),
    pulse: {
      scale: [1, 1.15, 1], // More dramatic scaling
      transition: {
        duration: 3, // Slower pulse (was 2)
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${progress}%`,
      transition: { duration: 0.1, ease: "easeOut" as const }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] as const }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          variants={backgroundVariants}
          initial="hidden"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 70%),
              radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
              linear-gradient(135deg, 
                hsl(var(--background)) 0%, 
                hsl(var(--background)) 40%,
                rgba(139, 92, 246, 0.05) 60%,
                rgba(59, 130, 246, 0.05) 100%
              )
            `
          }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full"
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  scale: [0, 1, 0],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`shape-${i}`}
                className={`absolute ${
                  i % 3 === 0 ? 'w-8 h-8 rounded-full' : 
                  i % 3 === 1 ? 'w-6 h-6 rotate-45' : 'w-4 h-12 rounded-full'
                } bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm`}
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  rotate: 0,
                  scale: 0
                }}
                animate={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  rotate: 360,
                  scale: [0, 1, 0.5, 1, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Central Glow Effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            {/* Initials Animation */}
            <div className="mb-12">
              <AnimatePresence>
                {showInitials && (
                  <div className="flex items-center justify-center space-x-4">
                    {['G', 'K'].map((letter, index) => (
                      <motion.div
                        key={letter}
                        custom={index}
                        variants={letterVariants}
                        initial="hidden"
                        animate={["visible", "pulse"]}
                        className="relative"
                      >
                        <div className="text-8xl md:text-9xl font-bold text-white font-serif relative z-10">
                          {letter}
                        </div>
                        {/* Glowing effect */}
                        <motion.div
                          className="absolute inset-0 text-8xl md:text-9xl font-bold text-white font-serif blur-sm opacity-50"
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                        >
                          {letter}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-2">
                Gopi Krishna
              </h2>
              <p className="text-lg text-white/70">
                Data Whisperer & Full-Stack Engineer
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="w-64 mx-auto"
            >
              <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  variants={progressVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-full bg-gradient-to-r from-white to-yellow-300 rounded-full relative"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                    animate={{
                      x: [-100, 300],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
              <motion.p
                className="text-white/80 text-sm mt-3 font-medium"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {progress}% Loading Experience...
              </motion.p>
            </motion.div>

            {/* Spinning Elements */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-white/20 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomLoadingAnimation;
