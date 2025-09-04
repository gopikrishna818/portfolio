import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Award, 
  TrendingUp, 
  Star,
  Users,
  Target,
  Briefcase,
  GraduationCap,
  ChevronRight,
  Code2,
  Zap,
  BookOpen,
  Trophy,
  Medal,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Building2
} from 'lucide-react';

const ExperienceEducationSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // Enhanced Experience Data with 3D metrics
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "KreativeTimebox",
      location: "Remote",
      duration: "Jan 2024 – Present",
      type: "Full-time",
      description: "Leading development of scalable web applications and data analytics solutions with focus on fraud detection and automation.",
      achievements: [
        "Developed a comprehensive financial analytics platform for fraud and duplicate detection",
        "Achieved 95% accuracy in ML-powered fraud detection algorithms", 
        "Reduced manual reconciliation time by 60% through automated processes",
        "Built responsive web interfaces using React and modern frontend technologies"
      ],
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Machine Learning", "Docker"],
      metrics: {
        projects: 4,
        accuracy: 95,
        impact: 60,
        teamSize: 7
      },
      gradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
      glowColor: "shadow-purple-500/25",
      iconBg: "from-purple-500 to-indigo-600",
      status: "current"
    },
    {
      id: 2,
      title: "Data Analyst Intern",
      company: "IBM Skill Build",
      location: "Remote", 
      duration: "Jun 2023 – Jul 2023",
      type: "Internship",
      description: "Focused on data analysis, visualization, and business intelligence solutions with emphasis on retail analytics.",
      achievements: [
        "Created interactive retail sales analysis dashboards using Python",
        "Improved data processing efficiency by implementing automated pipelines",
        "Developed comprehensive reports that influenced strategic business decisions",
        "Gained expertise in data cleaning, transformation, and statistical analysis"
      ],
      technologies: ["Python", "Pandas", "Matplotlib", "Plotly", "SQL", "Excel"],
      metrics: {
        projects: 2,
        accuracy: 88,
        impact: 40,
        teamSize: 5
      },
      gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
      glowColor: "shadow-blue-500/25", 
      iconBg: "from-blue-500 to-cyan-600",
      status: "completed"
    }
  ];

  // Enhanced Education Data with academic metrics
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      institution: "Guru Nanak Institutions Technical Campus",
      location: "Hyderabad, India",
      duration: "2020 - 2024",
      gpa: "Distinction",
      cgpa: "8.42/10",
      description: "Computer Science & Engineering with specialization in Data Science.",
      achievements: [
        "Specialized in Data Science and Machine Learning",
        "Completed projects in Machine Learning and Web Development", 
        "Strong foundation in Mathematics and Statistics",
        "Developed analytical and problem-solving skills"
      ],
      courses: ["Data Structures & Algorithms", "Database Management Systems", "Machine Learning", "Data Science"],
      metrics: {
        gpa: 8.5,
        rank: 3,
        projects: 4,
        publications: 3
      },
      gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
      glowColor: "shadow-emerald-500/25",
      iconBg: "from-emerald-500 to-teal-600",
      status: "completed"
    },
    {
      id: 2,
      degree: "Intermediate (12th Grade)",
      institution: "Narayana Junior College", 
      location: "Hyderabad, India",
      duration: "2018 - 2020",
      gpa: "Merit",
      marks: "980/1000",
      description: "Mathematics, Physics and Chemistry and gain strong foundation in statistics and problem-solving skills.",
      achievements: [
        "State 8th rank achievement",
        "College 2nd rank recognition",
        "Strong foundation in Mathematics and Statistics",
        "Developed analytical and problem-solving skills"
      ],
      courses: ["Advanced Mathematics", "Physics", "Chemistry", "Statistics"],
      metrics: {
        gpa: 8.0,
        rank: 2,
        projects: 0,
        extracurricular: 1
      },
      gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
      glowColor: "shadow-blue-500/25",
      iconBg: "from-blue-500 to-indigo-600", 
      status: "completed"
    }
  ];

  // Floating background elements
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/10 rounded-full"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );

  // Enhanced Experience Card Component
  const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
      className="group card-elevated hover:scale-105 cursor-pointer relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className={`relative p-6 rounded-xl bg-gradient-to-br ${exp.gradient} backdrop-blur-xl border border-border/50`}>
        <div className={`transition-all duration-500 ${expandedCard === exp.id ? 'grid md:grid-cols-2 gap-4' : ''}`}>
          {/* Main Card Content */}
          <div className={expandedCard === exp.id ? 'order-2' : ''}>
            {/* Header with icon */}
            <div className="relative flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                exp.status === 'current' 
                  ? 'bg-success/20 text-success border border-success/30' 
                  : 'bg-muted/50 text-muted-foreground border border-border'
              }`}>
                {exp.status === 'current' ? 'Current' : 'Completed'}
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { icon: Target, label: 'Projects', value: exp.metrics.projects, color: 'text-blue-400' },
                { icon: TrendingUp, label: 'Accuracy', value: `${exp.metrics.accuracy}%`, color: 'text-green-400' },
                { icon: Zap, label: 'Impact', value: `${exp.metrics.impact}%`, color: 'text-yellow-400' },
                { icon: Users, label: 'Team', value: exp.metrics.teamSize, color: 'text-purple-400' }
              ].map((metric, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-card/50 border border-border/30 backdrop-blur-sm">
                  <metric.icon className={`w-4 h-4 mx-auto mb-1 ${metric.color}`} />
                  <div className="text-sm font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Duration and Location */}
            <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{exp.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              {exp.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setExpandedCard(expandedCard === exp.id ? null : exp.id)}
                className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors font-medium group-hover:translate-x-1"
              >
                <span>{expandedCard === exp.id ? 'Hide Details' : 'View Details'}</span>
                <motion.div
                  animate={{ rotate: expandedCard === exp.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </button>

              <a href="#" className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform">
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Detailed Content Panel - Appears on the left */}
          <AnimatePresence>
            {expandedCard === exp.id && (
              <motion.div
                initial={{ opacity: 0, x: -50, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: -50, width: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="order-1 border-r border-border/30 pr-6"
              >
                <div className="space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle2 className="w-3 h-3 text-success mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Code2 className="w-4 h-4 mr-2 text-blue-500" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((tech: string, i: number) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium border border-primary/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Role Details */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2 text-purple-500" />
                      Responsibilities
                    </h4>
                    <div className="bg-card/30 rounded-lg p-3">
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Code development and review</li>
                        <li>• System architecture design</li>
                        <li>• Team collaboration</li>
                        <li>• Client requirement analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );

  // Enhanced Education Card Component  
  const EducationCard = ({ edu, index }: { edu: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
      className="group card-elevated hover:scale-105 cursor-pointer relative overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      <div className={`relative p-6 rounded-xl bg-gradient-to-br ${edu.gradient} backdrop-blur-xl border border-border/50`}>
        <div className={`transition-all duration-500 ${expandedCard === edu.id ? 'grid md:grid-cols-2 gap-4' : ''}`}>
          {/* Main Card Content */}
          <div className={expandedCard === edu.id ? 'order-2' : ''}>
            {/* Header */}
            <div className="relative flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    <span className="text-sm font-medium">{edu.institution}</span>
                  </div>
                </div>
              </div>
              
              {/* GPA Badge */}
              <div className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30">
                <div className="text-sm font-bold text-emerald-400">{edu.gpa}</div>
                <div className="text-xs text-emerald-300">
                  {edu.cgpa && `CGPA: ${edu.cgpa}`}
                  {edu.marks && `Marks: ${edu.marks}`}
                </div>
              </div>
            </div>

            {/* Academic Metrics Dashboard */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { icon: Star, label: 'Grade', value: edu.gpa, color: 'text-emerald-400' },
                { icon: Trophy, label: 'Rank', value: `#${edu.metrics.rank}`, color: 'text-yellow-400' },
                { icon: BookOpen, label: 'Projects', value: edu.metrics.projects, color: 'text-blue-400' },
                { icon: Medal, label: 'Awards', value: edu.metrics.publications || edu.metrics.extracurricular, color: 'text-purple-400' }
              ].map((metric, i) => (
                <div key={i} className="text-center p-2 rounded-lg bg-card/50 border border-border/30 backdrop-blur-sm">
                  <metric.icon className={`w-4 h-4 mx-auto mb-1 ${metric.color}`} />
                  <div className="text-sm font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Duration and Location */}
            <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{edu.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{edu.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {edu.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setExpandedCard(expandedCard === edu.id ? null : edu.id)}
                className="flex items-center space-x-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium group-hover:translate-x-1"
              >
                <span>{expandedCard === edu.id ? 'Hide Details' : 'View Details'}</span>
                <motion.div
                  animate={{ rotate: expandedCard === edu.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.div>
              </button>

              <a href="#" className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium hover:scale-105 transition-transform">
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Detailed Content Panel - Appears on the left */}
          <AnimatePresence>
            {expandedCard === edu.id && (
              <motion.div
                initial={{ opacity: 0, x: -50, width: 0 }}
                animate={{ opacity: 1, x: 0, width: 'auto' }}
                exit={{ opacity: 0, x: -50, width: 0 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="order-1 border-r border-border/30 pr-6"
              >
                <div className="space-y-6">
                  {/* Academic Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-emerald-500" />
                      Achievements
                    </h4>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement: string, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 mt-1 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground leading-relaxed">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Course Curriculum */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-teal-500" />
                      Subjects
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {edu.courses.map((course: string, i: number) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs font-medium border border-emerald-500/20"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Academic Performance */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      Performance
                    </h4>
                    <div className="bg-card/30 rounded-lg p-3">
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Grade: {edu.gpa}</li>
                        {edu.cgpa && <li>• CGPA: {edu.cgpa}</li>}
                        {edu.marks && <li>• Marks: {edu.marks}</li>}
                        <li>• Rank: #{edu.metrics.rank}</li>
                        <li>• Projects: {edu.metrics.projects}</li>
                        <li>• Awards: {edu.metrics.publications || edu.metrics.extracurricular}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="experience" className="py-12 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <FloatingElements />
      </div>

      <div className="container-width relative z-10 w-full">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-6"
        >
          <div className="inline-block relative">
            <motion.h2 
              className="text-heading text-gradient mb-3"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Experience & Education
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-primary rounded-full mx-auto"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background in building innovative solutions.
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="relative p-2 bg-card/50 backdrop-blur-xl rounded-xl border border-border/50 shadow-xl">
            <div className="flex space-x-2">
              {['experience', 'education'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? 'text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative z-10 flex items-center space-x-2">
                    {tab === 'experience' ? (
                      <Briefcase className="w-4 h-4" />
                    ) : (
                      <GraduationCap className="w-4 h-4" />
                    )}
                    <span className="capitalize text-sm">{tab}</span>
                  </div>
                  
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 'experience' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 'experience' ? 50 : -50 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {activeTab === 'experience' ? (
              <div className="grid md:grid-cols-2 gap-3">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={exp.id} exp={exp} index={index} />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-3">
                {education.map((edu, index) => (
                  <EducationCard key={edu.id} edu={edu} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced Statistics Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8"
        >
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { 
                icon: Clock, 
                value: "2+", 
                label: "Years Experience", 
                color: "text-purple-400",
                bg: "from-purple-500/20 to-indigo-500/20"
              },
              { 
                icon: Target, 
                value: "13+", 
                label: "Projects Completed", 
                color: "text-blue-400",
                bg: "from-blue-500/20 to-cyan-500/20"
              },
              { 
                icon: Award, 
                value: "95%", 
                label: "Client Satisfaction", 
                color: "text-emerald-400",
                bg: "from-emerald-500/20 to-teal-500/20"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl bg-gradient-to-br ${stat.bg} backdrop-blur-xl border border-border/50`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.3)"
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <motion.div
                  className={`inline-flex p-2 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 mb-3`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </motion.div>
                <motion.div 
                  className="text-2xl font-bold text-foreground mb-1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
