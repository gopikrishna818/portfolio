import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Database, Brain, Cloud, BarChart, Zap } from 'lucide-react';

// Skills data organized by category
const skillsData = {
  'Programming Languages': {
    icon: Code,
    color: '#8B5CF6',
    skills: [
      { name: 'Python', level: 95, description: 'Advanced proficiency in Python for data science, web development, and automation' },
      { name: 'JavaScript/TypeScript', level: 88, description: 'Modern JavaScript and TypeScript for full-stack development' },
      { name: 'SQL', level: 92, description: 'Complex query optimization and database design' },
      { name: 'R', level: 78, description: 'Statistical analysis and data visualization' }
    ]
  },
  'Data Science & ML': {
    icon: Brain,
    color: '#06B6D4',
    skills: [
      { name: 'Machine Learning', level: 90, description: 'Supervised and unsupervised learning algorithms' },
      { name: 'Deep Learning', level: 85, description: 'Neural networks and advanced AI models' },
      { name: 'Data Analysis', level: 93, description: 'Statistical analysis and pattern recognition' },
      { name: 'Computer Vision', level: 80, description: 'Image processing and recognition systems' }
    ]
  },
  'Databases & Cloud': {
    icon: Database,
    color: '#10B981',
    skills: [
      { name: 'PostgreSQL', level: 89, description: 'Advanced database design and optimization' },
      { name: 'MongoDB', level: 82, description: 'NoSQL database design and aggregation' },
      { name: 'AWS', level: 87, description: 'Cloud infrastructure and serverless architecture' },
      { name: 'Docker', level: 85, description: 'Containerization and microservices' }
    ]
  },
  'Frameworks & Tools': {
    icon: Zap,
    color: '#F59E0B',
    skills: [
      { name: 'FastAPI', level: 92, description: 'High-performance API development' },
      { name: 'React', level: 88, description: 'Modern frontend development and state management' },
      { name: 'TensorFlow', level: 83, description: 'Machine learning model development' },
      { name: 'Pandas', level: 94, description: 'Data manipulation and analysis' }
    ]
  },
  'Data Visualization': {
    icon: BarChart,
    color: '#EF4444',
    skills: [
      { name: 'Tableau', level: 86, description: 'Interactive dashboard creation' },
      { name: 'Plotly', level: 91, description: 'Dynamic and interactive visualizations' },
      { name: 'D3.js', level: 79, description: 'Custom web-based visualizations' },
      { name: 'Power BI', level: 84, description: 'Business intelligence dashboards' }
    ]
  },
  'DevOps & Tools': {
    icon: Cloud,
    color: '#8B5CF6',
    skills: [
      { name: 'Git', level: 90, description: 'Version control and collaborative development' },
      { name: 'CI/CD', level: 83, description: 'Automated testing and deployment pipelines' },
      { name: 'Linux', level: 87, description: 'System administration and shell scripting' },
      { name: 'Kubernetes', level: 75, description: 'Container orchestration and scaling' }
    ]
  }
};

// Individual Skill Bar Component
const SkillBar = ({ skill, delay = 0 }: { skill: any; delay?: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-muted/30 rounded-full h-2.5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full relative"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: delay * 0.1, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-background/95 backdrop-blur-sm border rounded-lg shadow-xl text-xs text-center max-w-xs z-10"
          style={{ pointerEvents: 'none' }}
        >
          {skill.description}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-border"></div>
        </motion.div>
      </div>
    </div>
  );
};

// Skills Category Card Component
const SkillsCategoryCard = ({ categoryName, categoryData, index }: { categoryName: string; categoryData: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const IconComponent = categoryData.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-card/50 backdrop-blur-sm rounded-xl p-6 border hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{ 
        background: `linear-gradient(135deg, ${categoryData.color}10 0%, transparent 100%)`,
        borderColor: `${categoryData.color}30`
      }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${categoryData.color}20` }}
        >
          <IconComponent size={24} color={categoryData.color} />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{categoryName}</h3>
      </div>
      
      <div className="space-y-4">
        {categoryData.skills.map((skill: any, skillIndex: number) => (
          <SkillBar key={skill.name} skill={skill} delay={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
};

// Main Skills Section Component
const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/50">
      <div className="container-width">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical proficiencies and areas of expertise in data science and software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([categoryName, categoryData], index) => (
            <SkillsCategoryCard
              key={categoryName}
              categoryName={categoryName}
              categoryData={categoryData}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
