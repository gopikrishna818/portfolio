import { motion } from 'framer-motion';
import { Code, Database, Wrench, Brain } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript/TypeScript', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'C/C++', level: 78 },
        { name: 'HTML/CSS', level: 80 }
      ],
      gradient: 'from-blue-400 to-purple-600',
      headerColor: 'text-blue-400'
    },
    {
      title: 'Libraries & Frameworks',
      icon: Database,
      skills: [
        { name: 'FastAPI', level: 92 },
        { name: 'Pandas', level: 90 },
        { name: 'NumPy', level: 88 },
        { name: 'Scikit-learn', level: 85 },
        { name: 'TensorFlow', level: 75 }
      ],
      gradient: 'from-green-400 to-blue-600',
      headerColor: 'text-purple-400'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'Docker', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'AWS', level: 75 },
        { name: 'VS Code', level: 95 }
      ],
      gradient: 'from-orange-400 to-red-600',
      headerColor: 'text-blue-400'
    },
    {
      title: 'Soft Skills',
      icon: Brain,
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Collaboration', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Project Management', level: 80 },
        { name: 'Analytical Thinking', level: 92 }
      ],
      gradient: 'from-purple-400 to-pink-600',
      headerColor: 'text-purple-400'
    }
  ];

  const SkillBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 py-6">
      <div className="container-width">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3 mb-8"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            AI/ML, development, and data engineering expertise for scalable solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300 hover:bg-black/60"
              >
                {/* Category Header */}
                <div className="mb-5">
                  <h3 className={`text-lg font-semibold ${category.headerColor} mb-4`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-xs text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                        >
                          <div className="absolute right-0 top-0 w-3 h-2 bg-white rounded-full opacity-80" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Dashboard Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center hover:border-blue-500/50 transition-all duration-300 hover:bg-black/60"
          >
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
              <Brain size={28} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">Machine Learning</h4>
            <p className="text-gray-400 text-sm">
              Advanced algorithms for predictive analytics and pattern recognition
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-black/60"
          >
            <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/25">
              <Code size={28} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">API Development</h4>
            <p className="text-gray-400 text-sm">
              RESTful APIs and microservices architecture with FastAPI
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center hover:border-green-500/50 transition-all duration-300 hover:bg-black/60"
          >
            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/25">
              <Database size={28} className="text-white" />
            </div>
            <h4 className="text-lg font-semibold mb-2 text-white">Data Engineering</h4>
            <p className="text-gray-400 text-sm">
              Robust data pipelines and analytics infrastructure
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;