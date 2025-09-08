import { Palette, Brain, BarChart3, Cog, Search, Sparkles, Code2, Rocket, Clock, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const EnhancedServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Development',
      description: 'Modern, responsive web applications with cutting-edge technologies.',
      features: [
        'Responsive Design',
        'Performance Optimization',
        'Modern UI/UX',
        'Cross-browser Compatibility'
      ],
      gradient: 'from-purple-500 to-pink-500',
      pricing: {
        startingAt: '$2,500',
        range: '$2,500 - $15,000',
        timeline: '2-8 weeks'
      }
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced AI research and implementation for intelligent automation.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Research & Development'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      pricing: {
        startingAt: '$5,000',
        range: '$5,000 - $50,000',
        timeline: '4-16 weeks'
      }
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights and visualizations.',
      features: [
        'Statistical Analysis',
        'Data Visualization',
        'Business Intelligence',
        'Predictive Analytics'
      ],
      gradient: 'from-green-500 to-emerald-500',
      pricing: {
        startingAt: '$1,500',
        range: '$1,500 - $10,000',
        timeline: '1-6 weeks'
      }
    },
    {
      icon: Cog,
      title: 'ML Training',
      description: 'Custom machine learning models for your specific business needs.',
      features: [
        'Custom Model Development',
        'Model Optimization',
        'Performance Tuning',
        'Deployment & Monitoring'
      ],
      gradient: 'from-orange-500 to-red-500',
      pricing: {
        startingAt: '$3,000',
        range: '$3,000 - $25,000',
        timeline: '3-12 weeks'
      }
    }
  ];

  const engagementModels = [
    {
      title: 'Project-Based',
      description: 'Fixed scope, timeline, and budget for well-defined projects',
      benefits: ['Predictable costs', 'Clear deliverables', 'Defined timeline'],
      bestFor: 'MVP development, specific features, one-time projects',
      icon: CheckCircle,
      color: 'purple'
    },
    {
      title: 'Hourly Consulting',
      description: 'Flexible engagement for ongoing support and consultations',
      benefits: ['$75-150/hour', 'Flexible scheduling', 'Pay as you go'],
      bestFor: 'Code reviews, technical advice, troubleshooting',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'Retainer Model',
      description: 'Dedicated monthly allocation for continuous development',
      benefits: ['Priority support', '20% cost savings', 'Guaranteed availability'],
      bestFor: 'Long-term partnerships, ongoing maintenance',
      icon: Star,
      color: 'emerald'
    }
  ];

  return (
    <>
      {/* Services Section */}
      <section id="services" className="flex items-center bg-gradient-to-br from-background to-muted/30 py-20">
        <div className="container-width">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading text-gradient">Services & Solutions</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive solutions with transparent pricing to transform your ideas into powerful applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:bg-black/60 cursor-pointer relative overflow-hidden min-h-[480px] flex flex-col"
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
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-purple-300 transition-colors" />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Info */}
                  <div className="bg-white/5 rounded-lg p-4 group-hover:bg-white/10 transition-all duration-300 mt-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Starting at</span>
                        <span className="text-white font-bold text-lg">{service.pricing.startingAt}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500 text-sm">Timeline</span>
                        <span className="text-purple-300 text-sm font-medium">{service.pricing.timeline}</span>
                      </div>
                      <div className="text-xs text-gray-600 pt-1">
                        Range: {service.pricing.range}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4">
                    <button
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/40 hover:to-blue-600/40 border border-purple-500/30 hover:border-purple-500/50 text-purple-300 hover:text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                    >
                      <span>Get Quote</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Engagement Models */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Engagement Models</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the collaboration approach that best fits your project needs and budget
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {engagementModels.map((model, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-black/60 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-${model.color}-500 rounded-xl flex items-center justify-center mb-4`}>
                    <model.icon size={24} className="text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{model.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{model.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {model.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-3">
                    <span className="text-gray-500 text-sm">Best for: </span>
                    <span className="text-white text-sm">{model.bestFor}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section id="development-process" className="flex items-center bg-gradient-to-br from-muted/30 to-background py-20">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-heading text-gradient">Development Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mt-4" />
            <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">From concept to deployment - A comprehensive approach to building exceptional solutions</p>
          </div>

          {/* Process Timeline */}
          <div className="grid md:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
            {[
              { 
                num: 1, 
                title: 'Discovery', 
                desc: 'Requirements analysis, challenge identification, and strategic planning', 
                icon: Search, 
                color: 'purple', 
                duration: '1-2 weeks', 
                details: ['Stakeholder interviews', 'Technical assessment', 'Risk analysis'],
                deliverables: ['Project scope', 'Technical roadmap', 'Cost estimate']
              },
              { 
                num: 2, 
                title: 'Design', 
                desc: 'System architecture, user experience design, and technical specifications', 
                icon: Sparkles, 
                color: 'blue', 
                duration: '2-3 weeks', 
                details: ['UI/UX mockups', 'Database design', 'API planning'],
                deliverables: ['Design mockups', 'Technical specs', 'Architecture diagram']
              },
              { 
                num: 3, 
                title: 'Development', 
                desc: 'Implementation, testing, and iterative development cycles', 
                icon: Code2, 
                color: 'cyan', 
                duration: '4-8 weeks', 
                details: ['Agile development', 'Code reviews', 'Testing cycles'],
                deliverables: ['Working software', 'Test results', 'Documentation']
              },
              { 
                num: 4, 
                title: 'Delivery', 
                desc: 'Deployment, monitoring, and ongoing support services', 
                icon: Rocket, 
                color: 'emerald', 
                duration: '1-2 weeks', 
                details: ['Production deployment', 'Performance monitoring', 'User training'],
                deliverables: ['Live application', 'Monitoring setup', 'Support documentation']
              }
            ].map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-black/60 transition-all duration-300 cursor-pointer overflow-hidden min-h-[320px] flex flex-col"
              >
                {/* Number Badge */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  <span className="text-sm font-bold text-white">{step.num}</span>
                </div>

                {/* Icon and Title */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-${step.color}-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">{step.title}</h4>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">{step.desc}</p>

                {/* Details */}
                <div className="space-y-2 mb-4 flex-1">
                  <h5 className="text-white text-sm font-medium">Activities:</h5>
                  {step.details.map((detail, detailIdx) => (
                    <div key={detailIdx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span className="text-xs text-gray-500">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Deliverables */}
                <div className="bg-white/5 rounded-lg p-3 group-hover:bg-white/10 transition-all duration-300 mt-auto">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">Duration</span>
                      <span className="text-white text-sm font-medium">{step.duration}</span>
                    </div>
                    <div className="text-xs text-gray-600">
                      Key deliverables: {step.deliverables.join(', ')}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">Let's discuss your requirements and create a custom solution that drives results.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Start a Project
              </button>
              <button
                onClick={() => window.open('https://calendly.com/your-calendar', '_blank')}
                className="bg-transparent border border-white/20 hover:border-white/40 text-white hover:bg-white/10 px-8 py-3 rounded-xl font-medium transition-all duration-300"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnhancedServicesSection;
