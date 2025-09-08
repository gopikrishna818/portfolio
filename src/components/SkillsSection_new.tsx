import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Database, Brain, Cloud, BarChart, Zap, Star, TrendingUp, Award, CheckCircle } from 'lucide-react';
import { StaggerChildren, ParallaxSection } from '@/components/InteractiveElements';

// Modern Skills Data with enhanced structure
const skillsData = {
  'Frontend Development': {
    icon: Code,
    gradient: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-500/10 to-purple-600/10',
    skills: [
      { name: 'React/Next.js', level: 92, experience: '3+ years', projects: 15 },
      { name: 'TypeScript', level: 88, experience: '2+ years', projects: 12 },
      { name: 'Tailwind CSS', level: 94, experience: '2+ years', projects: 18 },
      { name: 'JavaScript', level: 90, experience: '3+ years', projects: 20 }
    ]
  },
  'Backend & APIs': {
    icon: Database,
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-500/10 to-emerald-600/10',
    skills: [
      { name: 'Python/FastAPI', level: 95, experience: '3+ years', projects: 14 },
      { name: 'PostgreSQL', level: 89, experience: '3+ years', projects: 16 },
      { name: 'MongoDB', level: 82, experience: '2+ years', projects: 10 },
      { name: 'Redis', level: 78, experience: '1+ years', projects: 8 }
    ]
  },
  'Data Science & AI': {
    icon: Brain,
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-500/10 to-pink-600/10',
    skills: [
      { name: 'Machine Learning', level: 90, experience: '2+ years', projects: 12 },
      { name: 'Deep Learning', level: 85, experience: '2+ years', projects: 8 },
      { name: 'Computer Vision', level: 80, experience: '1+ years', projects: 6 },
      { name: 'NLP', level: 83, experience: '1+ years', projects: 7 }
    ]
  },
  'Cloud & DevOps': {
    icon: Cloud,
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-500/10 to-red-600/10',
    skills: [
      { name: 'AWS', level: 87, experience: '2+ years', projects: 11 },
      { name: 'Docker', level: 85, experience: '2+ years', projects: 13 },
      { name: 'Git/GitHub', level: 92, experience: '3+ years', projects: 25 },
      { name: 'CI/CD', level: 80, experience: '1+ years', projects: 9 }
    ]
  }
};

// Professional Stats Component
const ProfessionalStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { label: 'Technologies', value: 25, suffix: '+', icon: Code },
    { label: 'Projects Completed', value: 50, suffix: '+', icon: CheckCircle },
    { label: 'Years Experience', value: 3, suffix: '+', icon: TrendingUp },
    { label: 'Certifications', value: 8, suffix: '', icon: Award }
  ];

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <IconComponent className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: (index * 0.1) + 0.5 }}
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

// Modern Skill Card Component
const ModernSkillCard = ({ categoryName, categoryData, index }: { 
  categoryName: string; 
  categoryData: any; 
  index: number; 
}) => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = categoryData.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className={`relative bg-gradient-to-br ${categoryData.bgGradient} backdrop-blur-sm rounded-3xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/20 to-transparent"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${categoryData.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            whileHover={{ rotate: 10, scale: 1.15 }}
          >
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="text-xl font-bold text-foreground mb-2">{categoryName}</h3>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
        </div>

        {/* Skills List */}
        <div className="relative z-10 space-y-4">
          {categoryData.skills.map((skill: any, skillIndex: number) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.1) }}
              className="group/skill cursor-pointer"
              onMouseEnter={() => setActiveSkill(skillIndex)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500"
                    animate={{ scale: activeSkill === skillIndex ? 1.5 : 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-200">
                    {skill.name}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-primary">{skill.level}%</div>
                  <div className="text-xs text-muted-foreground">{skill.experience}</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${categoryData.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: (index * 0.1) + (skillIndex * 0.1) + 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* Project Count */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeSkill === skillIndex ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-muted-foreground mt-1 flex items-center space-x-1"
              >
                <Star className="w-3 h-3" />
                <span>{skill.projects} projects completed</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="skills">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills & 
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent"> Technologies</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical capabilities, from frontend development to AI/ML implementation, 
            backed by real-world project experience and continuous learning.
          </p>
        </motion.div>

        {/* Professional Stats */}
        <ProfessionalStats />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([categoryName, categoryData], index) => (
            <ModernSkillCard
              key={categoryName}
              categoryName={categoryName}
              categoryData={categoryData}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Let's build something amazing together using these technologies and more.
            </p>
            <motion.div
              className="inline-flex items-center space-x-2 text-primary font-medium cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Projects</span>
              <TrendingUp className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
