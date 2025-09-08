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

// Individual Timeline Item Component
const TimelineItem = ({ item, index, isLast }: { item: any; index: number; isLast: boolean }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-blue-500';
      case 'work': return 'bg-purple-500';
      case 'growth': return 'bg-orange-500';
      default: return 'bg-green-500';
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}
    >
      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-enhanced rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-xl ${getTypeColor(item.type)} flex items-center justify-center`}>
                <item.icon size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="text-muted-foreground" />
            </motion.div>
          </div>

          {/* Period & Location */}
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={14} />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-2 mb-4">
            {item.achievements.map((achievement: any, achIndex: number) => (
              <motion.div
                key={achIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: (index * 0.2) + (achIndex * 0.1) }}
                className="flex items-center space-x-2 text-sm"
              >
                <achievement.icon size={14} className="text-primary" />
                <span className="text-foreground">{achievement.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.skills.slice(0, isExpanded ? item.skills.length : 4).map((skill: string, skillIndex: number) => (
              <motion.span
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
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
      </div>
      
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full border-4 border-background z-10"></div>
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

  // Business Impact Metrics
  const businessImpact = [
    {
      icon: DollarSign,
      metric: "$2.5M+",
      title: "Revenue Generated",
      description: "Through ML-driven customer segmentation and recommendation systems",
      details: "Implemented predictive analytics that increased conversion rates by 35%"
    },
    {
      icon: TrendingDown,
      metric: "$500K+",
      title: "Cost Savings",
      description: "Via automated data processing and infrastructure optimization",
      details: "Reduced manual processing time by 80% through automation"
    },
    {
      icon: ArrowUpRight,
      metric: "40%",
      title: "ROI Improvement",
      description: "On marketing campaigns through data-driven insights",
      details: "Enhanced targeting algorithms improved campaign effectiveness"
    },
    {
      icon: Users,
      metric: "15+",
      title: "Teams Impacted",
      description: "Cross-functional collaboration and knowledge transfer",
      details: "Mentored developers, collaborated with product/business teams"
    }
  ];

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
      achievement: "Portfolio demonstrates 3+ years of growth and technical expertise"
    }
  ];

  // Skills progression data
  const skillsEvolution = {
    2022: ['HTML/CSS', 'JavaScript', 'Python Basics', 'SQL'],
    2023: ['React', 'Node.js', 'MongoDB', 'Git', 'Python (Advanced)', 'Machine Learning'],
    2024: ['FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'Deep Learning', 'Data Engineering'],
    2025: ['AI/ML Production', 'Cloud Architecture', 'Team Leadership', 'System Design']
  };

  // Timeline data with achievements
  const timelineData = [
    {
      id: 1,
      year: '2022',
      period: 'Jan 2022 - Dec 2022',
      type: 'education',
      title: 'Computer Science Engineering',
      subtitle: 'Final Year Student',
      location: 'Engineering College',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        { text: 'Machine Learning Specialization', icon: Award },
        { text: 'Final Year Project: AI-based System', icon: Code },
        { text: 'CGPA: 8.5/10', icon: Star }
      ],
      skills: skillsEvolution[2022],
      description: 'Built foundation in computer science with focus on AI and machine learning. Completed multiple projects in web development and data analysis.',
      projects: ['Student Management System', 'ML Prediction Model', 'Web Portfolio']
    },
    {
      id: 2,
      year: '2023',
      period: 'Jan 2023 - Dec 2023',
      type: 'work',
      title: 'Junior Software Engineer',
      subtitle: 'KreativeTimebox / Startup',
      location: 'Hyderabad, India',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        { text: 'Delivered 5+ full-stack projects', icon: Code },
        { text: 'Improved system performance by 30%', icon: TrendingUp },
        { text: 'Mentored 2 junior developers', icon: Users }
      ],
      skills: skillsEvolution[2023],
      description: 'Started professional career focused on full-stack development and data processing. Quickly adapted to modern technologies and agile methodologies.',
      projects: ['E-commerce Platform', 'Data Analytics Dashboard', 'API Integration System']
    },
    {
      id: 3,
      year: '2024',
      period: 'Jan 2024 - Dec 2024',
      type: 'work',
      title: 'Software Engineer',
      subtitle: 'Growth & Advanced Projects',
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

  // Leadership and collaboration experience
  const leadershipExperience = [
    {
      role: "Technical Lead",
      project: "Customer Analytics Platform",
      team: "Cross-functional team of 8 members",
      achievement: "Led the development of an ML-powered analytics platform, mentoring 3 junior developers and coordinating with product, design, and business teams to deliver a solution that increased customer retention by 40%.",
      skills: ["Team Leadership", "Mentoring", "Cross-functional Collaboration", "Project Management"]
    },
    {
      role: "Data Science Mentor",
      project: "Internal Training Program",
      team: "15+ junior engineers",
      achievement: "Developed and conducted internal workshops on machine learning best practices, helping team members advance their skills and contributing to a 25% improvement in project delivery quality.",
      skills: ["Knowledge Sharing", "Training & Development", "Technical Documentation", "Public Speaking"]
    }
  ];

  // Cultural fit and personal traits
  const culturalFit = [
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Thrive in team environments and believe in the power of diverse perspectives",
      examples: ["Active participant in code reviews", "Regular contributor to team knowledge sharing", "Strong advocate for inclusive development practices"]
    },
    {
      icon: Lightbulb,
      title: "Continuous Learner",
      description: "Always exploring new technologies and methodologies",
      examples: ["Recently earned AWS certification", "Regular attendee at tech conferences", "Contributing to open-source projects"]
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Focus on delivering measurable business value",
      examples: ["Consistently meet project deadlines", "Track and optimize key performance metrics", "Proactive in identifying improvement opportunities"]
    },
    {
      icon: Heart,
      title: "Empathetic Problem Solver",
      description: "Understanding user needs and business context",
      examples: ["Regular user research participation", "Business stakeholder engagement", "User-centric design thinking"]
    }
  ];

  // Personal interests (cultural fit indicators)
  const personalInterests = [
    { icon: Coffee, name: "Coffee Enthusiast", description: "Love exploring different brewing methods" },
    { icon: Camera, name: "Photography", description: "Capturing moments and perspectives" },
    { icon: Music, name: "Music Production", description: "Creating electronic music in spare time" },
    { icon: Gamepad2, name: "Gaming", description: "Strategy games and puzzle solving" },
    { icon: BookOpen, name: "Tech Reading", description: "AI research papers and industry trends" },
    { icon: MapPin, name: "Travel", description: "Exploring new cultures and cuisines" }
  ];

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
      value: '3+',
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
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-3xl"
                >
                  🚶‍♂️
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360]
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
                AI/ML Engineer with 2+ years building intelligent systems and deploying advanced ML models. Specialized in Ollama servers, Gemma models, and Python-based frameworks.
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
                    <h3 className="text-base font-semibold mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard-Style Stats with Development Process Animation - Moved outside the grid */}
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
                  delay: index * 0.3, // Increased delay for sequential filling
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
                {/* Animated background gradient - fills left to right */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0`}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 0.1, scaleX: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.3,
                    ease: "easeOut"
                  }}
                  style={{ transformOrigin: 'left' }}
                  viewport={{ once: true }}
                />
                
                {/* Development process filling animation */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ 
                    duration: 2, 
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                  viewport={{ once: true }}
                />
                
                {/* Floating particles - animated during filling */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    animate={{
                      x: [0, 20, 0],
                      y: [0, -15, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="absolute top-2 right-2 w-2 h-2 bg-primary/40 rounded-full blur-sm"
                  />
                  
                  {/* Additional particles for process effect */}
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: '200%', opacity: [0, 0.8, 0] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.3 + 0.5,
                      ease: "easeInOut"
                    }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 left-0 w-1 h-1 bg-white/60 rounded-full blur-sm"
                  />
                </div>

                <div className="relative p-4 text-center space-y-3">
                  {/* Icon with sequential scaling */}
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

                  {/* Value with counter animation - appears after filling */}
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

                  {/* Progress bar - fills left to right like development process */}
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stat.color} rounded-full relative overflow-hidden`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.percentage}%` }}
                      transition={{ 
                        duration: 2, 
                        delay: index * 0.3 + 0.3,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    >
                      {/* Shine effect during filling */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '200%' }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.3 + 0.5,
                          ease: "easeInOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </motion.div>
                  </div>

                  {/* Development process completion indicator */}
                  <motion.div
                    className="absolute top-2 left-2 w-2 h-2 bg-green-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      delay: index * 0.3 + 1.5,
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }}
                    viewport={{ once: true }}
                  />

                  {/* Glowing border effect - appears after completion */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 blur-xl`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{
                      delay: index * 0.3 + 2,
                      duration: 0.5
                    }}
                    viewport={{ once: true }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    style={{
                      animationDelay: `${index * 0.3 + 2}s`
                    }}
                  />
                </div>

                {/* Dashboard-style corner accent - animated */}
                <motion.div 
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${stat.color} opacity-0 rounded-bl-full`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.1 }}
                  transition={{ 
                    delay: index * 0.3 + 1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                />
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

        {/* Leadership Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-gradient text-center mb-12">Leadership & Collaboration</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadershipExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mr-4">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-primary">{exp.project}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{exp.team}</p>
                <p className="text-foreground/80 mb-4 leading-relaxed">{exp.achievement}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-md text-xs text-green-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cultural Fit Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-gradient text-center mb-12">Cultural Fit & Working Style</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalFit.map((trait, index) => {
              const IconComponent = trait.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 text-center group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{trait.title}</h4>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{trait.description}</p>
                  <div className="space-y-2">
                    {trait.examples.map((example, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* HR-CRITICAL INFORMATION SECTION */}
        
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

        {/* Business Impact Metrics */}
        <ParallaxSection offset={10} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gradient text-center mb-12">
              <TrendingUp className="inline w-8 h-8 mr-2" />
              Quantified Business Impact
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Revenue Generated"
                value={2.5}
                suffix="M+"
                prefix="$"
                description="Through ML-driven customer segmentation and recommendation systems"
                icon={<DollarSign size={24} />}
                delay={0}
              />
              <StatsCard
                title="Cost Savings"
                value={500}
                suffix="K+"
                prefix="$"
                description="Via automated data processing and infrastructure optimization"
                icon={<TrendingDown size={24} />}
                delay={0.1}
              />
              <StatsCard
                title="ROI Improvement"
                value={40}
                suffix="%"
                description="On marketing campaigns through data-driven insights"
                icon={<ArrowUpRight size={24} />}
                delay={0.2}
              />
              <StatsCard
                title="Teams Impacted"
                value={15}
                suffix="+"
                description="Cross-functional collaboration and knowledge transfer"
                icon={<Users size={24} />}
                delay={0.3}
              />
            </div>
          </motion.div>
        </ParallaxSection>

        {/* Career Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              <ArrowUpRight className="inline w-8 h-8 mr-2" />
              Career Journey
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From academic foundations to professional growth - tracking my evolution in data science and analytics.
            </p>
          </div>

          {/* Skills Evolution Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 border border-primary/10"
          >
            <h4 className="text-xl font-semibold text-foreground mb-6 text-center">Skills Evolution Over Time</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skillsEvolution).map(([year, skills], index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary mb-2">{year}</div>
                  <div className="text-sm text-muted-foreground mb-3">Focus Areas</div>
                  <div className="space-y-1">
                    {skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="text-xs bg-card/50 px-2 py-1 rounded border"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-purple-500 to-green-500 rounded-full"></div>
            
            {/* Timeline Items */}
            <div className="relative">
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
        </motion.div>

        {/* Personal Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 mb-8 pt-4 pb-4"
        >
          <h3 className="text-3xl font-bold text-gradient text-center mb-8">Beyond the Code</h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Understanding team dynamics and building connections through shared interests
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personalInterests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={20} className="text-primary" />
                  </div>
                  <h4 className="text-base font-medium text-foreground mb-2">{interest.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Section Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 mb-8 flex justify-center"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </motion.div>

        {/* Technical Blog & Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gradient text-center mb-8">Technical Blog & Resources</h3>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Sharing insights on AI development, data engineering, and software architecture
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Technical Articles */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-enhanced rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                  <BookOpen size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Technical Articles</h4>
                  <p className="text-sm text-muted-foreground">12+ published</p>
                </div>
              </div>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• "Building Scalable AI Infrastructure with FastAPI"</li>
                <li>• "Optimizing ML Model Performance in Production"</li>
                <li>• "Advanced Data Pipeline Patterns with Snowflake"</li>
              </ul>
              <motion.a
                href="https://medium.com/@gopikrishna818"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-4 inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-base font-medium"
              >
                <span>Read Articles</span>
                <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>

            {/* Open Source Contributions */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-enhanced rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500/20 to-green-600/20 flex items-center justify-center">
                  <Code size={20} className="text-green-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Open Source</h4>
                  <p className="text-sm text-muted-foreground">88+ GitHub stars</p>
                </div>
              </div>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• AI-powered document analysis tools</li>
                <li>• Content strategy automation frameworks</li>
                <li>• Data visualization libraries</li>
              </ul>
              <motion.a
                href="https://github.com/gopikrishna818"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="mt-4 inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-base font-medium"
              >
                <span>View Projects</span>
                <ArrowUpRight size={14} />
              </motion.a>
            </motion.div>

            {/* Problem-Solving Philosophy */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-enhanced rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                  <Lightbulb size={20} className="text-purple-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Philosophy</h4>
                  <p className="text-sm text-muted-foreground">Business-first approach</p>
                </div>
              </div>
              <ul className="space-y-2 text-base text-muted-foreground">
                <li>• Understand business impact before coding</li>
                <li>• Prioritize scalability and maintainability</li>
                <li>• Data-driven decision making</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-4 inline-flex items-center space-x-2 text-primary text-base font-medium"
              >
                <span>Learn More</span>
                <ArrowUpRight size={14} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Final Section Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 mb-4 flex justify-center"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;