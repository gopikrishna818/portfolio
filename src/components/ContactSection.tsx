import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, MessageCircle, Sparkles, Calendar, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  // Enhanced contact methods with calendar integration
  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute consultation",
      action: "Schedule Now",
      href: "https://calendly.com/gopikrishna-chegoni", // Replace with your actual Calendly link
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      responseTime: "Choose your time"
    },
    {
      icon: Mail,
      title: "Send Email",
      description: "For detailed inquiries",
      action: "Send Email",
      href: "mailto:gopikrishna.chegoni@email.com",
      color: "bg-primary",
      hoverColor: "hover:bg-primary/80",
      responseTime: "Within 6 hours"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions & chat",
      action: "Message",
      href: "https://wa.me/919876543210", // Replace with your WhatsApp number
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      responseTime: "Within 2 hours"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Professional networking",
      action: "Connect",
  href: "http://www.linkedin.com/in/gopikrishnachegoni",
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      responseTime: "Within 24 hours"
    }
  ];

  const availabilityStatus = {
    status: "Available",
    message: "Ready for new opportunities",
    timezone: "IST (UTC+5:30)",
    workingHours: "9 AM - 6 PM IST, Mon-Fri",
    responseCommitment: "All messages answered within 24 hours"
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
  href: 'https://github.com/gopikrishna818',
      color: 'hover:text-foreground',
      bgColor: 'hover:bg-muted'
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+919876543210',
      color: 'hover:text-secondary',
      bgColor: 'hover:bg-secondary/10'
    }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      description: 'Available for remote work worldwide'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 6-24 hours',
      description: 'Quick and professional communication'
    }
  ];

  const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, 0, -2, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );

  return (
  <section id="contact" className="py-4 pb-8 bg-gradient-to-br from-background via-card/10 to-background relative z-10 clear-both">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl" />
      </div>
      
      <div className="container-width relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-6"
        >
          <h2 className="text-heading text-gradient">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Multiple ways to reach me with guaranteed response times.
          </p>
        </motion.div>

        {/* Availability Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-4 mb-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">{availabilityStatus.status}</span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-foreground">{availabilityStatus.message}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {availabilityStatus.workingHours} ({availabilityStatus.timezone})
            </div>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : '_self'}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 text-center cursor-pointer"
            >
              <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon size={28} className="text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{method.description}</p>
              
              <div className="flex items-center justify-center space-x-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                <span className="text-sm font-medium">{method.action}</span>
                <ExternalLink size={14} />
              </div>
              
              <div className="mt-3 text-xs text-gray-500">
                <Clock size={12} className="inline mr-1" />
                {method.responseTime}
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-white">Let's Connect</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I'm passionate about creating innovative solutions that drive business growth. 
              Whether you're looking for AI implementation, data analytics, or full-stack development.
            </p>

            {/* Social Media Icons Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group bg-white/5 border border-white/10 rounded-xl p-3 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <social.icon size={18} className="text-purple-400 group-hover:text-purple-300" />
                    <span className="text-sm font-medium text-white group-hover:text-purple-300">
                      {social.label}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <info.icon size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{info.value}</div>
                    <div className="text-xs text-gray-400">{info.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Available for Projects</span>
              </div>
              <p className="text-gray-400 text-xs">
                Currently accepting new opportunities and exciting collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="mb-5">
              <h3 className="text-xl font-bold mb-2 text-white">Send a Message</h3>
              <p className="text-gray-400 text-sm">Ready to start your project? Drop me a line!</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-white placeholder-gray-500 text-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-white placeholder-gray-500 text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-white placeholder-gray-500 text-sm"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-white placeholder-gray-500 resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span className="text-sm">Send Message</span>
                    </>
                  )}
                </div>
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center space-x-2 p-3 bg-white/5 rounded-xl border border-white/10">
                <div className="text-lg">🔒</div>
                <div className="text-center">
                  <p className="text-xs font-medium text-white">Secure & Private</p>
                  <p className="text-xs text-gray-400">Your data is protected</p>
                </div>
              </div>
            </form>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <p className="text-xs text-gray-400">
                Prefer a quick chat?{' '}
                <a
                  href="mailto:gopikrishna.chegoni@email.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-medium"
                >
                  Send a direct email
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;