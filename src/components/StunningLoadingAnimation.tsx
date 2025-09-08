import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StunningLoadingAnimationProps {
  onComplete: () => void;
}

const StunningLoadingAnimation = ({ onComplete }: StunningLoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [showInitials, setShowInitials] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Start showing initials after a brief delay
    setTimeout(() => setShowInitials(true), 300);

    // Progress animation - optimized for 4 second experience
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 400);
          return 100;
        }
        return prev + 2.5; // Optimized for ~4 seconds progress
      });
    }, 100); // 40 steps × 100ms = 4 seconds + delays = ~4 seconds total

    // Failsafe timer - set to 5 seconds to allow full 4-second experience
    const failsafeTimer = setTimeout(() => {
      clearInterval(interval);
      setIsComplete(true);
      onComplete();
    }, 5000);

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
      rotate: -180,
      filter: "blur(10px)"
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.8 + i * 0.3,
        duration: 1.0,
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }),
    pulse: {
      scale: [1, 1.15, 1],
      filter: [
        "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))",
        "drop-shadow(0 0 30px rgba(59, 130, 246, 1))",
        "drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${progress}%`,
      transition: { duration: 0.1, ease: "easeOut" }
    }
  };

  const backgroundVariants = {
    hidden: { opacity: 1 },
    exit: { 
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8, ease: [0.25, 0.25, 0, 1] }
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
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.4) 0%, transparent 60%),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, 
                hsl(var(--background)) 0%, 
                hsl(var(--background)) 30%,
                rgba(139, 92, 246, 0.1) 50%,
                rgba(59, 130, 246, 0.1) 70%,
                hsl(var(--background)) 100%
              )
            `
          }}
        >
          {/* Dynamic Particle System */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  background: `rgba(${139 + Math.random() * 50}, ${92 + Math.random() * 50}, 246, ${Math.random() * 0.6 + 0.2})`
                }}
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  scale: [0, 1, 0.3, 1, 0],
                  opacity: [0, 1, 0.5, 0.8, 0]
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

          {/* Floating Geometric Elements */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`geometry-${i}`}
                className={`absolute backdrop-blur-sm ${
                  i % 4 === 0 ? 'w-8 h-8 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-500/20' : 
                  i % 4 === 1 ? 'w-6 h-6 rotate-45 bg-gradient-to-br from-pink-400/20 to-purple-500/20' : 
                  i % 4 === 2 ? 'w-4 h-16 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-500/20' :
                  'w-10 h-2 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20'
                }`}
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  rotate: 0,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1920,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1080,
                  rotate: [0, 180, 360],
                  scale: [0, 1, 0.6, 1.2, 0],
                  opacity: [0, 0.8, 0.4, 0.9, 0]
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Central Energy Core */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-[500px] h-[500px] rounded-full"
              style={{
                background: `conic-gradient(from 0deg, 
                  rgba(139, 92, 246, 0.1), 
                  rgba(59, 130, 246, 0.15), 
                  rgba(168, 85, 247, 0.1), 
                  rgba(236, 72, 153, 0.1),
                  rgba(139, 92, 246, 0.1)
                )`,
                filter: 'blur(60px)'
              }}
              animate={{
                scale: [1, 1.3, 0.8, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Enhanced Letter Animation */}
            <div className="mb-16">
              <AnimatePresence>
                {showInitials && (
                  <div className="flex items-center justify-center space-x-6">
                    {['G', 'K'].map((letter, index) => (
                      <motion.div
                        key={letter}
                        custom={index}
                        variants={letterVariants}
                        initial="hidden"
                        animate={["visible", "pulse"]}
                        className="relative"
                      >
                        {/* Main Letter with Stunning Gradient */}
                        <motion.div 
                          className="text-9xl md:text-[10rem] font-bold font-serif relative z-10"
                          style={{
                            background: `linear-gradient(135deg, 
                              #ffffff 0%, 
                              #e0e7ff 25%, 
                              #c7d2fe 50%, 
                              #a5b4fc 75%, 
                              #8b5cf6 100%
                            )`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          {letter}
                        </motion.div>
                        
                        {/* Multi-layered Glow System */}
                        <motion.div
                          className="absolute inset-0 text-9xl md:text-[10rem] font-bold font-serif text-purple-400 blur-sm opacity-80"
                          animate={{
                            opacity: [0.4, 1, 0.4],
                            scale: [1, 1.03, 1]
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.2
                          }}
                        >
                          {letter}
                        </motion.div>
                        
                        <motion.div
                          className="absolute inset-0 text-9xl md:text-[10rem] font-bold font-serif text-blue-400 blur-md opacity-60"
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        >
                          {letter}
                        </motion.div>

                        <motion.div
                          className="absolute inset-0 text-9xl md:text-[10rem] font-bold font-serif text-pink-400 blur-lg opacity-40"
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.08, 1]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.4
                          }}
                        >
                          {letter}
                        </motion.div>

                        {/* Orbital Particles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={`orbit-${index}-${i}`}
                              className="absolute w-3 h-3 rounded-full"
                              style={{
                                background: `radial-gradient(circle, 
                                  rgba(139, 92, 246, 0.8) 0%, 
                                  rgba(59, 130, 246, 0.6) 50%, 
                                  transparent 100%
                                )`
                              }}
                              animate={{
                                x: [0, Math.cos(i * 45 * Math.PI / 180) * 60],
                                y: [0, Math.sin(i * 45 * Math.PI / 180) * 60],
                                scale: [0, 1, 0.5, 1, 0],
                                opacity: [0, 1, 0.7, 1, 0]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: index * 0.5 + i * 0.1,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Enhanced Loading Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mb-12"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-light mb-3"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.9) 0%, 
                    rgba(196, 181, 253, 0.8) 50%, 
                    rgba(255, 255, 255, 0.9) 100%
                  )`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Gopi Krishna Chegoni
              </motion.h2>
              <motion.p 
                className="text-xl text-white/80"
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Data Whisperer & Full-Stack Engineer
              </motion.p>
            </motion.div>

            {/* Stunning Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="w-80 mx-auto"
            >
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
                <motion.div
                  variants={progressVariants}
                  initial="hidden"
                  animate="visible"
                  className="h-full rounded-full relative"
                  style={{
                    background: `linear-gradient(90deg, 
                      rgba(139, 92, 246, 0.8) 0%, 
                      rgba(59, 130, 246, 1) 25%, 
                      rgba(168, 85, 247, 0.9) 50%, 
                      rgba(236, 72, 153, 0.8) 75%, 
                      rgba(139, 92, 246, 1) 100%
                    )`
                  }}
                >
                  {/* Animated Shimmer */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(255, 255, 255, 0.6) 50%, 
                        transparent 100%
                      )`
                    }}
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
                className="text-white/90 text-lg mt-4 font-medium"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {progress}% • Crafting Excellence...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StunningLoadingAnimation;
