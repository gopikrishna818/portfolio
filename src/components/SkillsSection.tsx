import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Database, Brain, Cloud, BarChart, Zap, Layers, Github, Linkedin, Mail } from 'lucide-react';
import { StaggerChildren, ParallaxSection } from '@/components/InteractiveElements';

// Custom CSS for 3D flip effect
const flipCardStyles = `
  .preserve-3d {
    transform-style: preserve-3d;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.innerText = flipCardStyles;
  document.head.appendChild(styleSheet);
}

// Bento Box Skills Data with different card sizes and flip content
const skillsData = {
  'Programming Languages': {
    icon: Code,
    gradient: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-500/10 to-purple-600/10',
    size: 'large', // Different sizes for bento layout
    skills: [
  { name: 'Python', level: 95, experience: '', projects: 7, description: 'Advanced data science & web development' },
  { name: 'JavaScript', level: 90, experience: '', projects: 6, description: 'Modern ES6+ & frontend frameworks' },
  { name: 'TypeScript', level: 88, experience: '', projects: 5, description: 'Type-safe development' },
  { name: 'SQL', level: 92, experience: '', projects: 6, description: 'Complex queries & optimization' }
    ]
  },
  'Libraries & Frameworks': {
    icon: Zap,
    gradient: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-500/10 to-emerald-600/10',
    size: 'medium',
    skills: [
  { name: 'React', level: 92, experience: '', projects: 4, description: 'Modern hooks & state management' },
  { name: 'FastAPI', level: 95, experience: '', projects: 3, description: 'High-performance APIs' },
  { name: 'TensorFlow', level: 85, experience: '', projects: 2, description: 'Deep learning models' }
    ]
  },
  'Databases': {
    icon: Database,
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-500/10 to-pink-600/10',
    size: 'small',
    skills: [
  { name: 'PostgreSQL', level: 89, experience: '', projects: 3, description: 'Advanced database design' },
  { name: 'MongoDB', level: 82, experience: '', projects: 2, description: 'NoSQL & aggregation' }
    ]
  },
  'Tools & Technologies': {
    icon: Cloud,
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-500/10 to-red-600/10',
    size: 'medium',
    skills: [
  { name: 'Git/GitHub', level: 92, experience: '', projects: 5, description: 'Version control mastery' },
  { name: 'Docker', level: 85, experience: '', projects: 2, description: 'Containerization expert' },
  { name: 'AWS', level: 87, experience: '', projects: 3, description: 'Cloud infrastructure' }
    ]
  },
  'Data Science & AI': {
    icon: Brain,
    gradient: 'from-indigo-500 to-cyan-600',
    bgGradient: 'from-indigo-500/10 to-cyan-600/10',
    size: 'large',
    skills: [
  { name: 'Machine Learning', level: 90, experience: '', projects: 4, description: 'Supervised & unsupervised learning' },
  { name: 'Deep Learning', level: 85, experience: '', projects: 2, description: 'Neural networks & AI models' },
  { name: 'Computer Vision', level: 80, experience: '', projects: 3, description: 'Image processing & recognition' },
  { name: 'Data Analysis', level: 93, experience: '', projects: 4, description: 'Statistical analysis & insights' }
    ]
  },
  'Web Technologies': {
    icon: BarChart,
    gradient: 'from-rose-500 to-pink-600',
    bgGradient: 'from-rose-500/10 to-pink-600/10',
    size: 'small',
    skills: [
  { name: 'HTML/CSS', level: 94, experience: '', projects: 5, description: 'Modern web standards' },
  { name: 'REST APIs', level: 90, experience: '', projects: 3, description: 'API design & integration' }
    ]
  }
};

// Bento Box Skill Card with Flip Animation
const BentoSkillCard = ({ categoryName, categoryData, index }: { 
  categoryName: string; 
  categoryData: any; 
  index: number; 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = categoryData.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        {/* Front of Card */}
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full flex flex-col justify-between">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/20 to-transparent"></div>
            </div>

            {/* Header */}
            <div className="relative z-10">
              <motion.div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${categoryData.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 10, scale: 1.15 }}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-2">{categoryName}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
            </div>

            {/* Skill Count Preview */}
            <div className="relative z-10">
              <div className="text-3xl font-bold text-primary mb-2">
                {categoryData.skills.length}
              </div>
              <div className="text-sm text-muted-foreground">
                {categoryData.skills.length === 1 ? 'Skill' : 'Skills'}
              </div>
              <div className="text-xs text-muted-foreground/70 mt-2">
                Hover to see details
              </div>
            </div>
          </div>
        </motion.div>

        {/* Back of Card */}
        <motion.div
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-primary/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/20 to-transparent"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${categoryData.gradient} flex items-center justify-center`}>
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{categoryName}</h3>
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
            </div>

            {/* Skills List */}
            <div className="relative z-10 flex-1 overflow-y-auto space-y-3">
              {categoryData.skills.map((skill: any, skillIndex: number) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFlipped ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                  className="bg-card/30 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-muted/30 rounded-full overflow-hidden mb-1">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${categoryData.gradient} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isFlipped ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">{skill.description}</div>
                  <div className="text-xs text-primary/70 mt-1">{skill.projects} projects • {skill.experience}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gradient-to-br from-background via-card/10 to-background relative overflow-hidden" id="skills">
      {/* Left Side Social Icons (original Lucide icons) */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col space-y-4">
        <div className="group">
          <a
            href="https://github.com/gopikrishna818"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card/30 backdrop-blur-md border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/25"
          >
            <Github size={20} className="text-foreground/80 group-hover:text-primary transition-colors duration-300" />
          </a>
        </div>
        <div className="group">
          <a
            href="https://linkedin.com/in/gopikrishna-chegoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card/30 backdrop-blur-md border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-secondary/20 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/25"
          >
            <Linkedin size={20} className="text-foreground/80 group-hover:text-secondary transition-colors duration-300" />
          </a>
        </div>
        <div className="group">
          <a
            href="mailto:gkchegoni@gmail.com"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-card/30 backdrop-blur-md border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-accent/20 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/25"
          >
            <Mail size={20} className="text-foreground/80 group-hover:text-accent transition-colors duration-300" />
          </a>
        </div>
        {/* Connecting Line */}
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-border/50 to-transparent mx-auto"></div>
      </div>
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
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my technical capabilities, from frontend development to AI/ML implementation, 
            backed by real-world project experience and continuous learning.
          </p>
        </motion.div>

        {/* Simplified Bento Box Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([categoryName, categoryData], index) => (
            <BentoSkillCard
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
              <Zap className="w-4 h-4" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
