import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, MessageCircle, Calendar, Clock, CheckCircle, ExternalLink, Video, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EnhancedContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For demonstration - replace with actual form submission
      // You can integrate with services like Formspree, Netlify Forms, or your own backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      // Fallback to email
      const emailSubject = `Project Inquiry from ${formData.name}`;
      const emailBody = `Name: ${formData.name}%0AEmail: ${formData.email}%0ACompany: ${formData.company}%0AProject Type: ${formData.projectType}%0ABudget: ${formData.budget}%0ATimeline: ${formData.timeline}%0A%0AMessage:%0A${formData.message}`;
      window.location.href = `mailto:gpkrishna.ch23@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      
      toast({
        title: "Opening Email Client",
        description: "Your email client will open with the message pre-filled.",
      });
    }
    
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "30-min free consultation",
      action: "Book Meeting",
      href: "https://calendly.com/gopikrishna-chegoni/30min",
      color: "from-blue-500 to-blue-600",
      responseTime: "Choose your time",
      available: true
    },
    {
      icon: Mail,
      title: "Email Me",
      description: "Direct email communication",
      action: "Send Email",
      href: "mailto:gpkrishna.ch23@gmail.com",
      color: "from-purple-500 to-purple-600",
      responseTime: "Within 24 hours",
      available: true
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Google Meet or Zoom",
      action: "Schedule Video",
      href: "https://calendly.com/gopikrishna-chegoni/video-call",
      color: "from-green-500 to-green-600",
      responseTime: "Same day",
      available: true
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat and updates",
      action: "Chat Now",
      href: "https://wa.me/+919876543210", // Replace with your actual WhatsApp number
      color: "from-emerald-500 to-emerald-600",
      responseTime: "Within 4 hours",
      available: true
    }
  ];

  const projectTypes = [
    'Web Development',
    'AI/ML Solutions',
    'Data Analytics',
    'Mobile App',
    'E-commerce',
    'API Development',
    'Database Design',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000+',
    'Hourly Rate',
    'Not Sure'
  ];

  const timelines = [
    'ASAP',
    '1-2 weeks',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-heading text-gradient mb-4"
          >
            Let's Work Together
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Ready to transform your ideas into powerful solutions? Let's discuss your project and create something amazing together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Send size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Start Your Project</h3>
                <p className="text-gray-400 text-sm">Fill out the form and I'll get back to you soon</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type} className="bg-gray-800">{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range} className="bg-gray-800">{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline} className="bg-gray-800">{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  placeholder="Describe your project, goals, and any specific requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Other Ways to Connect</h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{method.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock size={12} className="text-gray-500" />
                          <span className="text-xs text-gray-500">{method.responseTime}</span>
                          {method.available && (
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-green-400">Available</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info & Resume */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quick Info</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-purple-400" />
                  <span className="text-gray-300">Available for remote work worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-purple-400" />
                  <span className="text-gray-300">Typically responds within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-400" />
                  <span className="text-gray-300">Currently accepting new projects</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-medium mb-4">Professional Links</h4>
                <div className="flex space-x-4">
                  <a
                    href="http://www.linkedin.com/in/gopikrishnachegoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                  <a
                    href="https://github.com/gopikrishna818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-xl flex items-center justify-center transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1rBJOCfMSB0yoa61KGqFbpuppXe2ntFCr/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl transition-colors"
                  >
                    <Download size={16} className="text-white" />
                    <span className="text-white text-sm font-medium">Resume</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Quick FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">What's your typical response time?</h4>
                  <p className="text-gray-400 text-sm">I respond to all inquiries within 24 hours, usually much sooner.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Do you work with international clients?</h4>
                  <p className="text-gray-400 text-sm">Yes! I work with clients worldwide and adapt to different time zones.</p>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">What's your minimum project size?</h4>
                  <p className="text-gray-400 text-sm">I accept projects starting from $1,500, with no upper limit.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactSection;
