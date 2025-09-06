import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Manager",
      company: "Marketing Automation Startup",
      image: "/testimonial-1.jpg",
      rating: 5,
      text: "Gopikrishna transformed our lead generation process completely. His AI automation system eliminated manual workflows and achieved 99.9% uptime for our critical operations. The ROI was immediate - we reduced operational costs by 60% while scaling our outreach capacity.",
      project: "AI Lead Generation Automation",
      metric: "60% cost reduction, 99.9% uptime",
      businessImpact: "$180K annual savings",
      timeline: "4 months"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "CTO",
      company: "Financial Services Company",
      image: "/testimonial-2.jpg",
      rating: 5,
      text: "The financial document analysis system Gopikrishna built revolutionized our operations. Processing time went from 3 days to 3 hours, and fraud detection improved by 40%. His technical expertise in ML and attention to business needs made this project a massive success.",
      project: "AI Document Intelligence Platform",
      metric: "2400% faster processing, 40% better fraud detection",
      businessImpact: "$320K operational savings",
      timeline: "8 months"
    },
    {
      id: 3,
      name: "Dr. Anita Verma",
      role: "VP of Engineering",
      company: "EdTech Platform",
      image: "/testimonial-3.jpg",
      rating: 5,
      text: "Gopikrishna's Snowflake implementation gave us real-time insights that were impossible before. Dashboard generation improved by 95%, and our executives finally have 24/7 access to business metrics. His solution directly contributed to faster, data-driven decision making.",
      project: "Real-time Data Warehouse & Analytics",
      metric: "95% faster dashboards, 24/7 real-time insights",
      businessImpact: "60% infrastructure cost reduction",
      timeline: "5 months"
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "Product Manager",
      company: "Digital Marketing Agency",
      image: "/testimonial-4.jpg",
      rating: 5,
      text: "The AI content strategy platform Gopikrishna developed changed how we approach content creation. Research time dropped by 85%, client engagement improved by 65%, and we generated $180K in additional revenue from improved retention and new client acquisitions.",
      project: "AI Content Strategy Engine",
      metric: "85% research time reduction, 65% engagement boost",
      businessImpact: "$180K additional revenue",
      timeline: "6 months"
    }
  ];

  return (
    <section id="testimonials" className="py-2 bg-gradient-to-b from-background to-card/50 relative z-10 clear-both">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-heading text-gradient">
            Client Testimonials
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Quote Icon */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={16} className="text-white" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Business Impact Metrics */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50/50 to-blue-50/50 border border-green-200/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Key Results</div>
                      <div className="text-sm font-semibold text-foreground">{testimonial.metric}</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Business Impact</div>
                      <div className="text-sm font-semibold text-green-600">{testimonial.businessImpact}</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Project: {testimonial.project}</span>
                      <span>Timeline: {testimonial.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-muted-foreground mb-6">
            Ready to work together? Let's discuss your project.
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
