import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Senior Manager",
      company: "KreativeTimebox",
      image: "/testimonial-1.jpg", // Replace with actual image
      rating: 5,
      text: "Gopikrishna delivered exceptional results on our data automation project. His technical skills and dedication to quality made him a standout team member. He consistently exceeded expectations and showed great potential for leadership roles.",
      project: "Data Automation System",
      metric: "Reduced processing time by 60%"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Team Lead",
      company: "Tech Solutions",
      image: "/testimonial-2.jpg", // Replace with actual image
      rating: 5,
      text: "Working with Gopikrishna was a pleasure. His eagerness to learn, combined with solid technical fundamentals, made him an invaluable contributor. He quickly adapted to new technologies and delivered clean, maintainable code.",
      project: "Web Application Development",
      metric: "100% on-time delivery"
    },
    {
      id: 3,
      name: "Dr. Anita Verma",
      role: "Professor & Mentor",
      company: "University Engineering Dept",
      image: "/testimonial-3.jpg", // Replace with actual image
      rating: 5,
      text: "Gopikrishna demonstrated exceptional problem-solving abilities during his academic projects. His final year project on machine learning applications showed both technical depth and practical business understanding.",
      project: "ML Research Project",
      metric: "Published research paper"
    },
    {
      id: 4,
      name: "Amit Patel",
      role: "Senior Developer",
      company: "StartupTech",
      image: "/testimonial-4.jpg", // Replace with actual image
      rating: 5,
      text: "As a mentor to Gopikrishna, I've seen his growth from a curious student to a competent developer. His ability to grasp complex concepts quickly and apply them effectively makes him ready for senior challenges.",
      project: "Internship Program",
      metric: "Promoted after 6 months"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-card/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading text-gradient mb-4">
            Client Testimonials
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                {/* Project Tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-medium">
                    {testimonial.project}
                  </span>
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
          className="text-center mt-12"
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
