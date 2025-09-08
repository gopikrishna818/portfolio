import { Code, Database, Brain, TrendingUp, BookOpen, Users, Lightbulb, Trophy, Calendar, Award, Zap, Target, Heart, Coffee, Gamepad2, Music, Camera, MapPin, Globe, Shield, DollarSign, TrendingDown, ArrowUpRight, ChevronDown, Star, Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { MagneticButton, ParallaxSection } from '@/components/InteractiveElements';
import { useRef, useState } from 'react';

// Simple StatsCard component
const StatsCard = ({ title, value, suffix, prefix = '', description, icon, delay }: {
  title: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center"
    >
      <div className="text-purple-400 mb-3 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold text-white mb-2">
        {prefix}{value}{suffix}
      </div>
      <div className="text-lg font-medium text-white mb-2">{title}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </motion.div>
  );
};

// Timeline Item Component
const TimelineItem = ({ item, index, isLast }: { item: any; index: number; isLast: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  const contentCard = (
    <motion.div
      className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
            <item.icon size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
            <p className="text-sm text-primary">{item.subtitle}</p>
            <p className="text-xs text-muted-foreground">{item.location}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-primary">{item.year}</div>
          <div className="text-xs text-muted-foreground">{item.period}</div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-6">
        <div className="grid gap-3">
          {item.achievements.map((achievement: any, achIndex: number) => (
            <motion.div
              key={achIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
              className="group relative"
            >
              <div className="flex items-start space-x-3 p-3 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon size={16} className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground leading-relaxed">
                    {achievement.text}
                  </p>
                </div>
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.skills.slice(0, isExpanded ? item.skills.length : 4).map((skill: string, skillIndex: number) => (
          <motion.span
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: (index * 0.2) + (skillIndex * 0.05) }}
            className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
          >
            {skill}
          </motion.span>
        ))}
        {!isExpanded && item.skills.length > 4 && (
          <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
            +{item.skills.length - 4} more
          </span>
        )}
      </div>

      {/* Expand/Collapse indicator */}
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <ChevronDown size={16} />
        </motion.div>
      </div>

      {/* Expandable Content */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
          
          {item.projects && (
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Key Projects:</h4>
              <div className="flex flex-wrap gap-2">
                {item.projects.map((project: string, projIndex: number) => (
                  <span
                    key={projIndex}
                    className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative flex items-center w-full mb-12"
    >
      {/* Left Content (for even indexes) */}
      {isLeft ? (
        <div className="w-5/12 pr-8">
          {contentCard}
        </div>
      ) : (
        <div className="w-5/12"></div>
      )}

      {/* Center Timeline */}
      <div className="w-2/12 flex justify-center">
        <div className="relative flex flex-col items-center">
          <div className="w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full border-4 border-background z-10"></div>
        </div>
      </div>

      {/* Right Content (for odd indexes) */}
      {!isLeft ? (
        <div className="w-5/12 pl-8">
          {contentCard}
        </div>
      ) : (
        <div className="w-5/12"></div>
      )}
    </motion.div>
  );
};

const AboutSection = () => {
  // Work Authorization & Location Info
  const workAuthInfo = {
    status: "Indian Citizen",
    visaStatus: "Available for H1-B sponsorship",
    locationPrefs: ["Remote-First", "Hybrid", "On-site (willing to relocate)"],
    remoteCapability: "Fully equipped for remote work with proven track record",
    timeZones: "Flexible across US/Europe/Asia Pacific time zones"
  };

  // Career Progression Story
  const careerProgression = [
    {
      year: "2022",
      role: "Software Engineering Student",
      growth: "Built foundation in programming and data structures",
      achievement: "Completed multiple projects in Python, Java, and web development"
    },
    {
      year: "2023",
      role: "Junior Software Engineer",
      growth: "Started professional career, learned industry practices",
      achievement: "Contributed to data processing workflows and automated reporting"
    },
    {
      year: "2024",
      role: "Software Engineer",
      growth: "Expanded to full-stack development and data engineering",
      achievement: "Led feature development and improved system performance by 30%"
    },
    {
      year: "2025",
      role: "Ready for Next Challenge",
      growth: "Seeking senior role to apply ML and leadership skills",
  achievement: "Portfolio demonstrates 1+ years of growth and technical expertise"
    }
  ];

  // Skills progression data
  const skillsEvolution = {
    2022: ['HTML/CSS', 'JavaScript', 'Python Basics', 'SQL'],
    2023: ['React', 'Node.js', 'MongoDB', 'Git', 'Python (Advanced)', 'Machine Learning'],
    2024: ['FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'Deep Learning', 'Data Engineering'],
    2025: ['AI/ML Production', 'Cloud Architecture', 'Team Leadership', 'System Design']
  };

  // Timeline data with achievements (comprehensive version)
  const timelineData = [
    {
      id: 1,
      year: '2024',
      period: 'Aug 2020 - May 2024',
      type: 'education',
      title: 'Computer Science & Engineering',
      subtitle: 'Final Year Student',
      location: 'Hyderabad, India',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        { text: 'Data Science Specialization', icon: Award },
        { text: 'Final Year Project: Snowflake', icon: Code },
        { text: 'CGPA: 8.5/10', icon: Star }
      ],
      skills: skillsEvolution[2022],
      description: 'Built foundation in computer science with focus on AI and machine learning. Completed multiple projects in web development and data analysis.',
      projects: ['Student Management System', 'ML Prediction Model', 'Web Portfolio']
    },
    {
      id: 2,
      year: '2024',
      period: 'Jan 2024 - Aug 2024',
      type: 'work',
      title: 'Software Engineer Intern',
      subtitle: 'KreativeTimebox / Startup',
      location: 'Hyderabad, India',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        { text: 'Delivered 2+ ML projects', icon: Code },
        { text: 'Improved system performance by 30%', icon: TrendingUp },
        { text: 'Mentored 2 junior developers', icon: Users }
      ],
      skills: skillsEvolution[2023],
      description: 'Started professional career focused on AI, ML, and data processing. Quickly adapted to modern technologies and agile methodologies.',
      projects: ['E-commerce Platform', 'Data Analytics Dashboard', 'API Integration System']
    },
    {
      id: 3,
      year: '2024',
      period: 'Aug 2024 - Present',
      type: 'work',
      title: 'Software Engineer',
      subtitle: 'KreativeTimebox / Startup',
      location: 'Remote/Hybrid',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        { text: 'Led ML implementation projects', icon: Award },
        { text: 'Architected scalable data pipelines', icon: Code },
        { text: 'Contributed to 3 open-source projects', icon: BookOpen }
      ],
      skills: skillsEvolution[2024],
      description: 'Expanded expertise to ML engineering and cloud technologies. Led multiple high-impact projects and contributed to team technical decisions.',
      projects: ['ML Recommendation Engine', 'Cloud Data Platform', 'Real-time Analytics']
    },
    {
      id: 4,
      year: '2025',
      period: 'Present',
      type: 'growth',
      title: 'Seeking Senior Opportunities',
      subtitle: 'Ready for Leadership Roles',
      location: 'Open to Global Remote',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500',
      achievements: [
        { text: 'AI/ML Production Experience', icon: Award },
        { text: 'Full-Stack + Data Engineering', icon: Code },
        { text: 'Leadership & Mentoring Ready', icon: Users }
      ],
      skills: skillsEvolution[2025],
      description: 'Prepared for senior engineering roles with proven track record. Combining technical expertise with growing leadership experience.',
      projects: ['Portfolio Showcase', 'Open Source Contributions', 'Technical Blog']
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications with modern technologies',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Designing robust data pipelines and analytics systems',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Implementing intelligent solutions for complex problems',
    },
    {
      icon: TrendingUp,
      title: 'Business Impact',
      description: 'Delivering measurable results that drive growth',
    },
  ];

  // Personal story and journey
  const personalStory = {
    title: "My Journey in Technology",
    story: "My passion for technology began during my engineering studies, where I discovered the power of data to solve real-world problems. What started as curiosity about algorithms evolved into a career dedicated to transforming complex data into actionable business insights. I've had the privilege of working across diverse industries, from healthcare to e-commerce, each presenting unique challenges that have shaped my problem-solving approach.",
    motivation: "I believe technology should serve people, not the other way around. This philosophy drives me to create solutions that are not only technically robust but also user-friendly and impactful."
  };

  const stats = [
    {
      value: '7+',
      label: 'Tech Stack',
      icon: Code,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10',
      percentage: 100
    },
    {
      value: '20+',
      label: 'Core Skills',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      percentage: 90
    },
    {
  value: '1+',
      label: 'Industries',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      percentage: 85
    },
    {
      value: '5+',
      label: 'Open Source',
      icon: Trophy,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/10',
      percentage: 75
    }
  ];

  return (
    <section id="about" className="py-8 bg-gradient-surface pb-4">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <h2 className="text-heading text-gradient">About Me</h2>
                <motion.div
                  animate={{
                    x: [0, 10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-2xl"
                >
                  ⚡
                </motion.div>
              </div>
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>

            <div className="space-y-4 text-body">
              <p className="leading-relaxed">
                AI/ML Engineer with 1+ years building intelligent systems and deploying advanced ML models. Specialized in Ollama servers, Gemma models, and Python-based frameworks.
              </p>

              <p className="leading-relaxed">
                Delivered 4+ AI projects at KreativeTimebox focusing on computer vision, NLP, and predictive analytics. Expert in model optimization and scalable deployment pipelines.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-4 mt-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-elevated group cursor-pointer py-4 px-5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={20} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard-Style Stats */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className={`
                  relative overflow-hidden rounded-2xl border border-border/50 backdrop-blur-sm
                  bg-gradient-to-br from-card/50 via-card/30 to-card/10
                  hover:border-primary/30 transition-all duration-500 group cursor-pointer
                  ${stat.bgColor}
                `}
              >
                <div className="relative p-4 text-center space-y-3">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.3 + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className={`
                      inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} 
                      group-hover:scale-110 transition-transform duration-300
                      shadow-lg
                    `}
                  >
                    <stat.icon size={20} className="text-white" />
                  </motion.div>

                  <div className="space-y-2">
                    <motion.div 
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.3 + 0.5, 
                        duration: 0.6,
                        type: "spring", 
                        stiffness: 200 
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>
                    <motion.div 
                      className="text-sm text-muted-foreground font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.3 + 0.7,
                        duration: 0.4
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 mb-8"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gradient mb-8">{personalStory.title}</h3>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {personalStory.story}
            </p>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20">
              <p className="text-foreground/90 italic leading-relaxed">
                "{personalStory.motivation}"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Work Authorization & Remote Capability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-6 text-gradient">
              <Shield className="inline w-6 h-6 mr-2" />
              Work Authorization & Location Flexibility
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card/30 rounded-xl">
                <Globe className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Status</h4>
                <p className="text-sm text-muted-foreground">{workAuthInfo.status}</p>
                <p className="text-xs text-blue-400 mt-1">{workAuthInfo.visaStatus}</p>
              </div>
              
              <div className="text-center p-4 bg-card/30 rounded-xl">
                <MapPin className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <div className="space-y-1">
                  {workAuthInfo.locationPrefs.map((pref, i) => (
                    <p key={i} className="text-xs text-muted-foreground">{pref}</p>
                  ))}
                </div>
              </div>
              
              <div className="text-center p-4 bg-card/30 rounded-xl">
                <Zap className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Remote Ready</h4>
                <p className="text-sm text-muted-foreground">{workAuthInfo.remoteCapability}</p>
                <p className="text-xs text-purple-400 mt-1">{workAuthInfo.timeZones}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient">
              <Calendar className="inline w-8 h-8 mr-3" />
              Career Journey
            </h3>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              From foundational learning to advanced AI projects - tracking my growth in data science and machine learning
            </p>
            
            <div className="max-w-6xl mx-auto relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-indigo-500 top-0 bottom-0"></div>
              
              {/* Timeline Items */}
              <div className="space-y-0">
                {timelineData.map((item, index) => (
                  <TimelineItem 
                    key={index} 
                    item={item} 
                    index={index} 
                    isLast={index === timelineData.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
