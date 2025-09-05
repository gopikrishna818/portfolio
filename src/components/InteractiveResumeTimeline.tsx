import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Award, 
  Code, 
  TrendingUp, 
  Users, 
  ChevronDown, 
  Star,
  BookOpen,
  Briefcase,
  GraduationCap,
  Rocket
} from 'lucide-react';

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
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
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
              
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Projects:</h4>
                <ul className="space-y-1">
                  {item.projects.map((project: string, projIndex: number) => (
                    <li key={projIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-background shadow-lg z-10`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
          className="text-xs font-bold text-primary mt-2"
        >
          {item.year}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Main Interactive Resume Timeline Component
const InteractiveResumeTimeline = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="pt-8 pb-6 bg-gradient-to-br from-background to-background/50">
      <div className="container-width">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Career Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An interactive timeline showcasing my growth, achievements, and evolving expertise
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-purple-500 to-orange-500 opacity-30"></div>
          
          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        {/* Skills Evolution Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Skills Evolution Over Time</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillsEvolution).map(([year, skills], index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="text-center"
              >
                <div className="text-lg font-bold text-primary mb-3">{year}</div>
                <div className="space-y-2">
                  {skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) + (skillIndex * 0.05) }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveResumeTimeline;
