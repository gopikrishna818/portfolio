import { Heart, Github, Linkedin, Mail, ArrowUp, Sparkles, Code, Zap, Brain, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    // Ensure smooth scrolling works across all browsers
    if (window.scrollTo) {
      window.scrollTo({ 
        top: 0, 
        left: 0,
        behavior: 'smooth' 
      });
    } else {
      // Fallback for older browsers
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  };

  const services = [
    { 
      name: 'Web Development', 
      icon: Globe, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Modern web applications'
    },
    { 
      name: 'AI Research & Implementation', 
      icon: Brain, 
      color: 'from-purple-500 to-pink-500',
      description: 'Intelligent solutions'
    },
    { 
      name: 'Data Engineering', 
      icon: Database, 
      color: 'from-green-500 to-emerald-500',
      description: 'Scalable data pipelines'
    }
  ];

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
        />
      </div>

      {/* Floating 3D Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 50, 0, -30, 0],
              y: [0, -60, -20, -80, 0],
              rotateZ: [0, 180, 360],
              scale: [1, 1.5, 0.8, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.6))'
            }}
          />
        ))}
      </div>

      <div className="container-width py-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Brand Section with Enhanced 3D */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="relative perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                Gopikrishna Chegoni
              </motion.div>
              {/* 3D Shadow Effect */}
              <div className="absolute inset-0 text-2xl font-bold text-white/5 transform translate-x-1 translate-y-1 -z-10">
                Gopikrishna Chegoni
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              AI & Data-Driven Software Engineer passionate about creating 
              scalable solutions that transform data into actionable insights.
            </motion.p>
            
            {/* Enhanced 3D Social Links */}
            <div className="flex space-x-3">
              {[
                { icon: Github, href: 'https://github.com/gopikrishna-chegoni', color: 'from-gray-600 to-gray-800' },
                { icon: Linkedin, href: 'https://linkedin.com/in/gopikrishna-chegoni', color: 'from-blue-500 to-blue-700' },
                { icon: Mail, href: 'mailto:gopikrishna.chegoni@email.com', color: 'from-red-500 to-pink-600' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  whileHover={{ 
                    y: -8, 
                    rotateY: 360,
                    rotateX: 15,
                  }}
                  whileTap={{}}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className={`
                    relative p-3 rounded-xl bg-gradient-to-br ${social.color} 
                    text-white shadow-xl hover:shadow-2xl
                    group transition-all duration-500 overflow-hidden
                    border border-white/10
                  `}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))'
                  }}
                >
                  {/* 3D Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <social.icon size={18} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  {/* 3D Back Face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl transform rotateY-180 backface-hidden" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links with Simple Text */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <motion.h3 
              whileHover={{}}
              className="text-lg font-bold flex items-center space-x-2 text-white"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Code className="w-5 h-5 text-blue-400" />
              </motion.div>
              <span>Quick Links</span>
            </motion.h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#skills', label: 'Skills' },
                { href: '#services', label: 'Services' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8, color: '#a855f7' }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="block text-left text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services with Simple Text */}
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <motion.h3 
              whileHover={{}}
              className="text-lg font-bold flex items-center space-x-2 text-white"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="w-5 h-5 text-purple-400" />
              </motion.div>
              <span>Services</span>
            </motion.h3>
            <div className="space-y-1">
              {[
                'Web Development',
                'AI Research & Implementation', 
                'Data Engineering'
              ].map((service, index) => (
                <motion.div 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8, color: '#a855f7' }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="text-sm text-gray-400 hover:text-purple-400 transition-colors cursor-default"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0"
        >
          <motion.div 
            className="text-sm text-gray-400"
            whileHover={{}}
          >
            <span>© {currentYear} Gopikrishna Chegoni.</span>
          </motion.div>

          {/* Enhanced 3D Back to Top Button */}
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollToTop();
            }}
            initial={{ opacity: 0, rotateX: 90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            whileHover={{ 
              y: -8,
              rotateX: 15,
              rotateY: 5,
            }}
            whileTap={{}}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 border border-purple-500/30 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 backdrop-blur-sm cursor-pointer"
            style={{ 
              transformStyle: 'preserve-3d',
              filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3))'
            }}
            aria-label="Back to top"
            type="button"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="relative flex items-center space-x-2 text-white">
              <span>Back to Top</span>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={16} />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced 3D Animated Border */}
      <motion.div 
        initial={{ scaleX: 0, rotateX: 90 }}
        whileInView={{ scaleX: 1, rotateX: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"
        style={{
          filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))'
        }}
      />
    </footer>
  );
};

export default Footer;