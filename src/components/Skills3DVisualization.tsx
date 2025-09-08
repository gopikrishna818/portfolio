import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Database, Cloud, Brain, Wrench, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  experience: string;
  projects: string[];
  color: string;
  icon: any; // Changed from React.ElementType to any for flexibility
}

interface SkillCategory {
  name: string;
  icon: any; // Changed from React.ElementType to any for flexibility
  color: string;
  skills: Skill[];
}

const Skills3DVisualization = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('programming');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'sphere' | 'timeline'>('sphere');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  const skillCategories: SkillCategory[] = [
    {
      name: 'programming',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        {
          name: 'Python',
          level: 95,
          category: 'programming',
          experience: '4+ years',
          projects: ['AI Content Engine', 'Financial Analysis AI', 'Data Warehouse'],
          color: '#3776ab',
          icon: Code
        },
        {
          name: 'JavaScript/TypeScript',
          level: 90,
          category: 'programming',
          experience: '3+ years',
          projects: ['Portfolio Website', 'React Applications', 'API Development'],
          color: '#f7df1e',
          icon: Code
        },
        {
          name: 'React',
          level: 88,
          category: 'programming',
          experience: '3+ years',
          projects: ['Modern Web Apps', 'Component Libraries', 'State Management'],
          color: '#61dafb',
          icon: Code
        },
        {
          name: 'FastAPI',
          level: 85,
          category: 'programming',
          experience: '2+ years',
          projects: ['REST APIs', 'Microservices', 'Authentication Systems'],
          color: '#009688',
          icon: Code
        }
      ]
    },
    {
      name: 'data',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        {
          name: 'SQL',
          level: 92,
          category: 'data',
          experience: '4+ years',
          projects: ['Snowflake Warehouse', 'PostgreSQL Systems', 'Data Analytics'],
          color: '#336791',
          icon: Database
        },
        {
          name: 'Snowflake',
          level: 88,
          category: 'data',
          experience: '2+ years',
          projects: ['Real-time Analytics', 'Data Pipelines', 'Business Intelligence'],
          color: '#29b5e8',
          icon: Database
        },
        {
          name: 'MongoDB',
          level: 80,
          category: 'data',
          experience: '2+ years',
          projects: ['Document Storage', 'NoSQL Applications', 'Aggregation Pipelines'],
          color: '#47a248',
          icon: Database
        },
        {
          name: 'PostgreSQL',
          level: 85,
          category: 'data',
          experience: '3+ years',
          projects: ['Relational Design', 'Performance Optimization', 'Data Integrity'],
          color: '#336791',
          icon: Database
        }
      ]
    },
    {
      name: 'cloud',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        {
          name: 'AWS',
          level: 82,
          category: 'cloud',
          experience: '2+ years',
          projects: ['Lambda Functions', 'S3 Storage', 'EC2 Deployment'],
          color: '#ff9900',
          icon: Cloud
        },
        {
          name: 'Docker',
          level: 78,
          category: 'cloud',
          experience: '2+ years',
          projects: ['Containerization', 'Microservices', 'Development Environment'],
          color: '#2496ed',
          icon: Cloud
        },
        {
          name: 'API Integration',
          level: 90,
          category: 'cloud',
          experience: '3+ years',
          projects: ['Google APIs', 'Third-party Services', 'Webhook Systems'],
          color: '#4285f4',
          icon: Cloud
        }
      ]
    },
    {
      name: 'ai',
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      skills: [
        {
          name: 'Machine Learning',
          level: 87,
          category: 'ai',
          experience: '3+ years',
          projects: ['Fraud Detection', 'Content Analysis', 'Predictive Models'],
          color: '#ff6b35',
          icon: Brain
        },
        {
          name: 'OpenAI API',
          level: 85,
          category: 'ai',
          experience: '2+ years',
          projects: ['Content Generation', 'AI Automation', 'Natural Language Processing'],
          color: '#10a37f',
          icon: Brain
        },
        {
          name: 'Data Analysis',
          level: 90,
          category: 'ai',
          experience: '4+ years',
          projects: ['Business Intelligence', 'Statistical Modeling', 'Visualization'],
          color: '#e97627',
          icon: Brain
        }
      ]
    },
    {
      name: 'tools',
      icon: Wrench,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        {
          name: 'Git/GitHub',
          level: 88,
          category: 'tools',
          experience: '4+ years',
          projects: ['Version Control', 'Collaboration', 'CI/CD Pipelines'],
          color: '#f05032',
          icon: Wrench
        },
        {
          name: 'VS Code',
          level: 92,
          category: 'tools',
          experience: '4+ years',
          projects: ['Development Environment', 'Extensions', 'Debugging'],
          color: '#007acc',
          icon: Wrench
        },
        {
          name: 'Postman',
          level: 85,
          category: 'tools',
          experience: '3+ years',
          projects: ['API Testing', 'Documentation', 'Automation'],
          color: '#ff6c37',
          icon: Wrench
        }
      ]
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const getCurrentSkills = () => {
    return skillCategories.find(cat => cat.name === selectedCategory)?.skills || [];
  };

  const renderSphereView = () => {
    const skills = getCurrentSkills();
    const radius = 120;
    
    return (
      <div className="relative w-80 h-80 mx-auto">
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = Math.sin(angle * 2) * 30;
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: x + 160,
                y: y + 160,
                z: z
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.3, 
                z: z + 50,
                rotateY: 15,
                rotateX: 10
              }}
              className="absolute cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg transform hover:shadow-xl transition-all duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)`,
                  boxShadow: `0 10px 25px ${skill.color}40`
                }}
              >
                {skill.level}%
              </div>
              
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-20 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 w-48 z-10 shadow-xl"
                >
                  <h4 className="font-bold text-sm mb-1">{skill.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{skill.experience}</p>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <p className="text-xs">Projects: {skill.projects.slice(0, 2).join(', ')}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        
        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl"
        >
          {(() => {
            const categoryData = skillCategories.find(cat => cat.name === selectedCategory);
            const IconComponent = categoryData?.icon;
            return IconComponent ? <IconComponent size={32} className="text-white" /> : null;
          })()}
        </motion.div>
      </div>
    );
  };

  const renderGridView = () => {
    const skills = getCurrentSkills();
    
    return (
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 10,
              rotateX: 5
            }}
            className="bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px'
            }}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">{skill.name}</h3>
              <span 
                className="text-2xl font-bold"
                style={{ color: skill.color }}
              >
                {skill.level}%
              </span>
            </div>
            
            <div className="w-full bg-muted rounded-full h-3 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                className="h-3 rounded-full"
                style={{ backgroundColor: skill.color }}
              />
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{skill.experience}</p>
            
            <AnimatePresence>
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-border pt-2 mt-2"
                >
                  <p className="text-xs font-medium mb-1">Key Projects:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {skill.projects.map((project, i) => (
                      <li key={i}>• {project}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderTimelineView = () => {
    const skills = getCurrentSkills();
    
    return (
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/30 rounded-full" />
          
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background z-10"
                   style={{ backgroundColor: skill.color }} />
              
              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5 }}
                className={`w-5/12 bg-gradient-to-br from-background to-muted/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg ${
                  index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{skill.name}</h3>
                  <span 
                    className="text-xl font-bold"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{skill.experience}</p>
                
                <div className="w-full bg-muted rounded-full h-2 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                
                <div>
                  <p className="text-xs font-medium mb-2">Notable Projects:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {skill.projects.slice(0, 3).map((project, i) => (
                      <li key={i}>• {project}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            3D Skills Visualization
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my technical expertise through interactive 3D visualizations. 
            Each skill represents years of hands-on experience and real-world project implementation.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.name
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              <category.icon size={20} />
              <span className="capitalize">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* View Mode Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-2 mb-12"
        >
          {[
            { mode: 'sphere' as const, label: 'Sphere View', icon: Globe },
            { mode: 'grid' as const, label: 'Grid View', icon: Wrench },
            { mode: 'timeline' as const, label: 'Timeline View', icon: Database }
          ].map(({ mode, label, icon: Icon }) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                viewMode === mode
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 1, delay: 0.4 }}
          className="min-h-[500px] flex items-center justify-center"
        >
          {viewMode === 'sphere' && renderSphereView()}
          {viewMode === 'grid' && renderGridView()}
          {viewMode === 'timeline' && renderTimelineView()}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-background via-muted/50 to-background backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Skills Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skillCategories.map((category) => (
                <div key={category.name} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h4 className="font-medium capitalize mb-1">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">{category.skills.length} skills</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills3DVisualization;
