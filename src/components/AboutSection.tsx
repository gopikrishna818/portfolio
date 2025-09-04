import { Code, Database, Brain, TrendingUp, BookOpen, Users, Lightbulb, Trophy, Calendar, Award, Zap, Target, Heart, Coffee, Gamepad2, Music, Camera, MapPin, Globe, Shield, DollarSign, TrendingDown, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Soft Skills with Evidence
  const softSkillsEvidence = [
    {
      skill: "Leadership",
      evidence: "Led cross-functional team of 8 members for customer analytics platform",
      outcome: "40% increase in customer retention, on-time delivery",
      icon: Users
    },
    {
      skill: "Communication",
      evidence: "Presented technical solutions to C-level executives and non-technical stakeholders",
      outcome: "Secured $500K budget approval for data infrastructure modernization",
      icon: Lightbulb
    },
    {
      skill: "Problem Solving",
      evidence: "Diagnosed and resolved critical data pipeline failures within 2-hour SLA",
      outcome: "Maintained 99.9% system uptime, prevented $100K potential revenue loss",
      icon: Target
    },
    {
      skill: "Mentoring",
      evidence: "Mentored 15+ junior engineers through internal training programs",
      outcome: "25% improvement in code quality, 3 mentees promoted within 6 months",
      icon: BookOpen
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
    <section id="about" className="section-padding bg-gradient-surface">
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
          <div className="grid gap-4 mt-24">
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
          className="mt-20 mb-16"
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
          className="mb-16"
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
          className="mb-16"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gradient text-center mb-8">
            <TrendingUp className="inline w-8 h-8 mr-2" />
            Quantified Business Impact
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessImpact.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/20 text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  <impact.icon size={24} />
                </div>
                
                <div className="text-3xl font-bold text-green-400 mb-2">{impact.metric}</div>
                <h4 className="font-semibold text-foreground mb-2">{impact.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{impact.description}</p>
                <p className="text-xs text-green-300/80 italic">{impact.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills with Evidence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gradient text-center mb-8">
            <Users className="inline w-8 h-8 mr-2" />
            Leadership & Communication Evidence
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {softSkillsEvidence.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <skill.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">{skill.skill}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Evidence:</strong> {skill.evidence}
                    </p>
                    <p className="text-sm text-purple-300">
                      <strong>Outcome:</strong> {skill.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Progression Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gradient text-center mb-8">
            <ArrowUpRight className="inline w-8 h-8 mr-2" />
            Career Growth Trajectory
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-8">
              {careerProgression.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                      <div className="text-blue-400 font-semibold text-lg mb-2">{stage.year}</div>
                      <h4 className="text-xl font-bold text-foreground mb-3">{stage.role}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{stage.growth}</p>
                      <p className="text-sm text-blue-300 font-medium">{stage.achievement}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background"></div>
                </motion.div>
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
          className="mb-8"
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
                  <h4 className="text-sm font-medium text-foreground mb-1">{interest.name}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{interest.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;