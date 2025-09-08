import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Clock } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Manager",
      company: "Marketing Automation Startup",
      image: "/testimonial-1.jpg",
      rating: 5,
      text: "Gopikrishna transformed our lead generation process completely. His AI automation system eliminated manual workflows and achieved 99.9% uptime for our critical operations.",
      project: "AI Lead Generation Automation",
      metric: "60% cost reduction",
      businessImpact: "$180K annual savings",
      timeline: "4 months",
      color: "from-blue-500/20 to-cyan-500/20",
      accentColor: "blue"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "CTO",
      company: "Financial Services Company",
      image: "/testimonial-2.jpg",
      rating: 5,
      text: "The financial document analysis system revolutionized our operations. Processing time went from 3 days to 3 hours, and fraud detection improved by 40%.",
      project: "AI Document Intelligence Platform",
      metric: "2400% faster processing",
      businessImpact: "$320K operational savings",
      timeline: "8 months",
      color: "from-purple-500/20 to-pink-500/20",
      accentColor: "purple"
    },
    {
      id: 3,
      name: "Dr. Anita Verma",
      role: "VP of Engineering",
      company: "EdTech Platform",
      image: "/testimonial-3.jpg",
      rating: 5,
      text: "Gopikrishna's Snowflake implementation gave us real-time insights that were impossible before. Dashboard generation improved by 95%.",
      project: "Real-time Data Warehouse & Analytics",
      metric: "95% faster dashboards",
      businessImpact: "60% infrastructure cost reduction",
      timeline: "5 months",
      color: "from-green-500/20 to-emerald-500/20",
      accentColor: "green"
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Digital Marketing Agency",
      image: "/testimonial-4.jpg",
      rating: 5,
      text: "The AI content strategy platform changed how we approach content creation. Research time dropped by 85%, client engagement improved by 65%.",
      project: "AI Content Strategy Engine",
      metric: "85% research time reduction",
      businessImpact: "$180K additional revenue",
      timeline: "6 months",
      color: "from-orange-500/20 to-red-500/20",
      accentColor: "orange"
    }
  ];

  const getAccentColors = (color: string) => {
    const colors = {
      blue: {
        primary: 'text-blue-400',
        border: 'border-blue-500/30',
        bg: 'bg-blue-500/10',
        shadow: 'hover:shadow-blue-500/25'
      },
      purple: {
        primary: 'text-purple-400',
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        shadow: 'hover:shadow-purple-500/25'
      },
      green: {
        primary: 'text-green-400',
        border: 'border-green-500/30',
        bg: 'bg-green-500/10',
        shadow: 'hover:shadow-green-500/25'
      },
      orange: {
        primary: 'text-orange-400',
        border: 'border-orange-500/30',
        bg: 'bg-orange-500/10',
        shadow: 'hover:shadow-orange-500/25'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-gentle" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-float-gentle" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const colors = getAccentColors(testimonial.accentColor);
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`relative h-full glass-enhanced rounded-xl p-4 border border-border/50 hover:border-primary/50 backdrop-blur-xl transition-all duration-300 ${colors.shadow} hover:shadow-lg`}>
                  {/* Simple Quote Icon */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}>
                    <Quote size={12} className={colors.primary} />
                  </div>

                  {/* Rating Stars - Compact */}
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-current mr-1" />
                    ))}
                  </div>

                  {/* Testimonial Text - Shortened */}
                  <p className="text-foreground/80 mb-4 leading-relaxed text-sm line-clamp-3">
                    "{testimonial.text}"
                  </p>

                  {/* Single Key Metric */}
                  <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border} mb-4`}>
                    <div className="text-center">
                      <div className={`text-sm font-bold ${colors.primary}`}>{testimonial.metric}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.businessImpact}</div>
                    </div>
                  </div>

                  {/* Client Info - Compact */}
                  <div className="flex items-center">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${testimonial.color} flex items-center justify-center mr-3`}>
                      <span className={`font-bold text-xs ${colors.primary}`}>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className={`text-xs font-medium ${colors.primary}`}>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to work together? Let's discuss your project.
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
