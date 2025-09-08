import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Target, Code, Zap, Database, Brain } from 'lucide-react';

const KeyAchievementsSection = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "95% ML Accuracy",
      description: "Fraud Detection System",
      detail: "Achieved 95% accuracy in ML-powered fraud detection algorithms, reducing false positives by 40%",
      gradient: "from-green-500 to-emerald-600",
      impact: "Business Impact"
    },
    {
      icon: Zap,
      title: "60% Efficiency Boost",
      description: "Process Automation",
      detail: "Reduced manual reconciliation time by 60% through automated data processing pipelines",
      gradient: "from-blue-500 to-cyan-600",
      impact: "Process Improvement"
    },
    {
      icon: Code,
      title: "8+ Projects Delivered",
      description: "Full-Stack Solutions",
      detail: "Successfully delivered 8+ production-ready applications using modern tech stack",
      gradient: "from-purple-500 to-indigo-600",
      impact: "Technical Excellence"
    },
    {
      icon: Users,
      title: "Cross-Functional Leadership",
      description: "Team Collaboration",
      detail: "Led cross-functional teams and mentored junior developers in best practices",
      gradient: "from-orange-500 to-red-600",
      impact: "Leadership"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "1+", icon: Target },
    { label: "Technologies Mastered", value: "30+", icon: Database },
    { label: "Projects Completed", value: "10+", icon: Code },
    { label: "Client Satisfaction", value: "98%", icon: Award }
  ];

  return (
    <section id="achievements" className="py-4 bg-gradient-to-br from-background via-card/10 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-heading text-gradient mb-4">Key Achievements</h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Quantifiable results that demonstrate impact, innovation, and technical excellence
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card/80 backdrop-blur-sm rounded-xl p-4 text-center border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievements Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Icon and Impact Badge */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center group-hover:shadow-lg group-hover:shadow-${achievement.gradient.split('-')[1]}-500/25 transition-all duration-300`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                    {achievement.impact}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {achievement.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {achievement.detail}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground mb-4">
            Ready to create similar impact for your organization?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Let's Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyAchievementsSection;
