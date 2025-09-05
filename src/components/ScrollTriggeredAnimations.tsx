import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = ({ value, duration = 2, suffix = '', prefix = '' }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Math.floor(latest).toLocaleString() + suffix;
      }
    });

    return unsubscribe;
  }, [springValue, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

interface StatsCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export const StatsCard = ({ title, value, suffix, prefix, description, icon, delay = 0 }: StatsCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="text-primary"
          >
            {icon}
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: delay + 0.3, duration: 0.3 }}
            className="w-2 h-2 bg-primary rounded-full"
          />
        </div>
        
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-foreground mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.2 }}
        >
          <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
        </motion.h3>
        
        <motion.p 
          className="text-lg font-semibold text-primary mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: delay + 0.4 }}
        >
          {title}
        </motion.p>
        
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.6 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

interface ProgressiveSkillRevealProps {
  skills: Array<{
    name: string;
    level: number;
    category: string;
    icon?: React.ReactNode;
  }>;
}

export const ProgressiveSkillReveal = ({ skills }: ProgressiveSkillRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          className="group"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              {skill.icon && (
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  {skill.icon}
                </motion.div>
              )}
              <span className="font-medium text-foreground">{skill.name}</span>
            </div>
            <motion.span 
              className="text-sm font-semibold text-primary"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {skill.level}%
            </motion.span>
          </div>
          
          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/60 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.1 + 0.2,
                ease: "easeOut"
              }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                animate={{
                  x: [-100, 200],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1 + 0.5,
                }}
              />
            </motion.div>
          </div>
          
          <motion.p 
            className="text-xs text-muted-foreground mt-1"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {skill.category}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
};
