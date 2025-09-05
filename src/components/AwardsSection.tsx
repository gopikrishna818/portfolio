import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      id: 4,
      title: "Best Innovation Award",
      issuer: "TechCorp Solutions",
      date: "2024",
      type: "award",
      status: "Received",
      description: "Recognized for developing an AI-powered customer analytics platform that increased business efficiency by 40%",
      skills: ["Innovation", "AI/ML", "Business Impact"]
    },
    {
      id: 6,
      title: "Excellence in Data Science",
      issuer: "DataFlow Inc",
      date: "2023",
      type: "award",
      status: "Received",
      description: "Outstanding performance in developing real-time data pipelines and predictive analytics solutions",
      skills: ["Data Science", "Analytics", "Performance"]
    },
    {
      id: 7,
      title: "Top Performer Award",
      issuer: "KreativeTimebox",
      date: "2024",
      type: "award",
      status: "Received",
      description: "Consistently delivered high-quality solutions and exceeded performance targets",
      skills: ["Performance", "Leadership", "Quality"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="awards" className="py-4 bg-gradient-to-b from-background to-card/30 relative z-10 clear-both">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-heading text-gradient">
            Awards & Recognition
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence and outstanding achievements in technology and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Award Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>

                {/* Award Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {award.date}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-xs text-muted-foreground">{award.status}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {award.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {award.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {award.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-lg text-xs font-medium border border-secondary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Awards Received</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Recognition Rate</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
