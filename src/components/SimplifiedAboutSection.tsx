import { motion } from 'framer-motion';
import { Code, Database, Brain, TrendingUp, Award, MapPin } from 'lucide-react';

const SimplifiedAboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Data Engineering",
      description: "3+ years building intelligent systems that transform raw data into business value",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "$950K+ ROI Generated",
      description: "Delivered measurable business impact through data-driven solutions and automation",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "99.9% System Uptime",
      description: "Built and maintained production-grade systems with enterprise-level reliability",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "15+ Successful Projects",
      description: "From fraud detection to content automation, consistently delivering results",
      color: "from-orange-500 to-red-500"
    }
  ];

  const quickStats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Client Satisfaction", value: "100%" }
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-gradient-to-br from-background to-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-width relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate <span className="text-primary font-semibold">AI & Data Engineer</span> who transforms complex business challenges into elegant, 
            data-driven solutions. With a proven track record of delivering <span className="text-green-400 font-semibold">$950K+ in ROI</span>, 
            I specialize in building intelligent systems that not only work flawlessly but drive real business growth.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {quickStats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-enhanced rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus & Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl px-6 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Currently Available</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin size={16} />
              <span>Open to Relocation & Remote Work</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground mb-6">
            Ready to discuss how I can help transform your business with data-driven solutions?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
            <motion.button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume-gopikrishna-chegoni.pdf';
                link.download = 'Gopikrishna-Chegoni-Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="bg-transparent border-2 border-primary/50 hover:border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SimplifiedAboutSection;
