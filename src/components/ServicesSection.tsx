import { Palette, Brain, BarChart3, Cog, Search, Sparkles, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design & Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and user-centric design principles.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'Modern UI/UX',
        'Cross-browser Compatibility'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI & Research Solutions',
      description: 'Advanced AI research and implementation services to solve complex business challenges with intelligent automation.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Research & Development'
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Insights',
      description: 'Transform raw data into actionable insights through comprehensive analysis and interactive visualizations.',
      features: [
        'Statistical Analysis',
        'Data Visualization',
        'Business Intelligence',
        'Predictive Analytics'
      ],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Cog,
      title: 'ML Model Training',
      description: 'Custom machine learning models designed and trained for your specific business needs and objectives.',
      features: [
        'Custom Model Development',
        'Model Optimization',
        'Performance Tuning',
        'Deployment & Monitoring'
      ],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 py-12">
        <div className="container-width">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive solutions tailored to transform your ideas into powerful, data-driven applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:bg-black/60 cursor-pointer relative overflow-hidden min-h-[420px] flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon size={28} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features - Show all features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors" />
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4 mt-auto">
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                  >
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="development-process" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30 py-12">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Development Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4" />
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">From concept to deployment - A comprehensive approach to building exceptional solutions</p>
          </div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
            {[
              { num: 1, title: 'Discovery', desc: 'Requirements analysis, challenge identification, and strategic planning', icon: Search, color: 'purple', duration: '1-2 weeks', details: ['Stakeholder interviews', 'Technical assessment', 'Risk analysis'] },
              { num: 2, title: 'Design', desc: 'System architecture, user experience design, and technical specifications', icon: Sparkles, color: 'blue', duration: '2-3 weeks', details: ['UI/UX mockups', 'Database design', 'API planning'] },
              { num: 3, title: 'Development', desc: 'Implementation, testing, and iterative development cycles', icon: Code2, color: 'cyan', duration: '4-8 weeks', details: ['Agile development', 'Code reviews', 'Testing cycles'] },
              { num: 4, title: 'Delivery', desc: 'Deployment, monitoring, and ongoing support services', icon: Rocket, color: 'emerald', duration: '1-2 weeks', details: ['Production deployment', 'Performance monitoring', 'User training'] }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-black/60 transition-all duration-300 cursor-pointer overflow-hidden min-h-[300px] flex flex-col"
              >
                {/* Number Badge */}
                <motion.div 
                  className={`absolute -top-2 -left-2 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-${step.color}-500/20 group-hover:border-${step.color}-500/50 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <span className="text-sm font-bold text-white">{step.num}</span>
                </motion.div>

                {/* Icon and Title */}
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div 
                    className={`w-12 h-12 bg-${step.color}-500 rounded-xl flex items-center justify-center group-hover:bg-${step.color}-400 transition-all duration-300 shadow-lg`}
                    whileHover={{ 
                      rotate: 15,
                      scale: 1.1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <step.icon size={20} className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className={`font-bold text-white text-lg group-hover:text-${step.color}-300 transition-colors duration-300`}>{step.title}</h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300 flex-1">{step.desc}</p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  {step.details.map((detail, detailIdx) => (
                    <div key={detailIdx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Duration */}
                <div className="bg-white/5 rounded-lg p-3 group-hover:bg-white/10 transition-all duration-300 mt-auto">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Duration</span>
                    <span className={`text-white text-sm font-medium group-hover:text-${step.color}-300 transition-colors duration-300`}>{step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Project Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 min-h-[200px]"
            >
              <h4 className="text-lg font-bold text-white mb-6 text-center">Project Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Completed Projects</span>
                  <span className="text-xl font-bold text-green-400">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Client Satisfaction</span>
                  <span className="text-xl font-bold text-blue-400">98%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Code Coverage</span>
                  <span className="text-xl font-bold text-purple-400">95%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">On-Time Delivery</span>
                  <span className="text-xl font-bold text-cyan-400">100%</span>
                </div>
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 min-h-[200px]"
            >
              <h4 className="text-lg font-bold text-white mb-6 text-center">Tech Stack</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { 
                    name: 'Python', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                  },
                  { 
                    name: 'Node.js', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                  },
                  { 
                    name: 'ML', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
                  },
                  { 
                    name: 'JavaScript', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                  },
                  { 
                    name: 'MongoDB', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                  },
                  { 
                    name: 'AWS', 
                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
                  }
                ].map((tech, idx) => (
                  <div key={idx} className="text-center group">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mx-auto mb-2 flex items-center justify-center p-2 hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-600 rounded-lg items-center justify-center text-white font-bold text-xs hidden">
                        {tech.name.slice(0, 2)}
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quality Standards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 min-h-[200px]"
            >
              <h4 className="text-lg font-bold text-white mb-6 text-center">Quality Standards</h4>
              <div className="space-y-3">
                {[
                  'Code Reviews',
                  'Unit Testing', 
                  'Security Audits',
                  'Performance Optimization',
                  'Documentation',
                  'Continuous Integration'
                ].map((standard, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm">{standard}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;