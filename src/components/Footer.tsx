import { Github, Linkedin, Mail, ArrowUp, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Scrolls the nearest scrollable parent, or window as fallback
  const scrollToTop = () => {
    console.log('Back to Top button clicked');
    function getScrollableParent(node) {
      if (!node) return null;
      if (node.scrollHeight > node.clientHeight) return node;
      return getScrollableParent(node.parentElement);
    }
    if (typeof window !== 'undefined') {
      // Try to find the main scrollable parent
      const main = document.querySelector('main, .main-content, #root, #app');
      const scrollParent = getScrollableParent(main) || window;
      if (scrollParent === window) {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        scrollParent.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 overflow-hidden">
      {/* 3D Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
              delay: i * 2,
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full shadow-lg"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              filter: 'drop-shadow(0 0 4px rgba(139, 92, 246, 0.6))',
            }}
          />
        ))}
      </div>

      <div className="container-width py-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
  {/* Left: Brand and Socials */}
          {/* Brand Section with Enhanced 3D */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
              className="relative perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                Gopikrishna Chegoni
              </motion.div>

        {/* Absolutely positioned Robo/AI Logo on the far right */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
          <svg width="54" height="54" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="14" width="32" height="20" rx="8" fill="#6366F1"/>
            <rect x="14" y="20" width="20" height="8" rx="4" fill="#A5B4FC"/>
            <circle cx="16.5" cy="24" r="2.5" fill="#fff"/>
            <circle cx="31.5" cy="24" r="2.5" fill="#fff"/>
            <rect x="22" y="10" width="4" height="6" rx="2" fill="#6366F1"/>
            <rect x="12" y="36" width="4" height="6" rx="2" fill="#6366F1"/>
            <rect x="32" y="36" width="4" height="6" rx="2" fill="#6366F1"/>
            <rect x="2" y="22" width="6" height="4" rx="2" fill="#6366F1"/>
            <rect x="40" y="22" width="6" height="4" rx="2" fill="#6366F1"/>
          </svg>
        </div>
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
              AI & Data-Driven Software Engineer passionate about creating scalable solutions that transform data into actionable insights.
            </motion.p>

            {/* Enhanced 3D Social Links with Tooltips and Effects */}
            <div className="flex space-x-3">
              {[
                { icon: Github, href: 'https://github.com/gopikrishna818', color: 'from-gray-600 to-gray-800', label: 'GitHub' },
                { icon: Linkedin, href: 'http://www.linkedin.com/in/gopikrishnachegoni', color: 'from-blue-500 to-blue-700', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:gopikrishna.chegoni@email.com', color: 'from-red-500 to-pink-600', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, scale: 0, rotateY: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  whileHover={{ y: -12, scale: 1.15, boxShadow: '0 8px 32px 0 rgba(80,0,200,0.25)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className={`relative p-3 rounded-full bg-gradient-to-br ${social.color} text-white shadow-xl hover:shadow-2xl group transition-all duration-500 overflow-visible border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400`}
                  style={{ transformStyle: 'preserve-3d', filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))' }}
                  aria-label={social.label}
                >
                  {/* 3D Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />
                  <social.icon size={16} className="relative z-10 group-hover:scale-125 transition-transform duration-300 drop-shadow-lg" />
                  {/* Tooltip */}
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap z-20 shadow-lg">
                    {social.label}
                  </span>
                  {/* 3D Back Face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-full transform rotateY-180 backface-hidden pointer-events-none" />
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
            <motion.h3 className="text-lg font-bold flex items-center space-x-2 text-white">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <Code className="w-5 h-5 text-blue-400" />
              </motion.div>
              <span>Quick Links</span>
            </motion.h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {[
                { href: '#about', label: 'About Me' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#skills', label: 'Skills' },
                { href: '#experience', label: 'Experience' },
                { href: '#contact', label: 'Contact' },
              ].map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8, color: '#a855f7' }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="block text-left text-gray-400 hover:text-purple-400 transition-all duration-300 text-sm"
                >
                  {link.label}
                </motion.button>
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
          <motion.div className="text-sm text-gray-400">
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
            whileHover={{ y: -8, rotateX: 15, rotateY: 5 }}
            whileTap={{}}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/40 hover:to-blue-500/40 border border-purple-500/30 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 backdrop-blur-sm cursor-pointer"
            style={{ transformStyle: 'preserve-3d', filter: 'drop-shadow(0 4px 12px rgba(139, 92, 246, 0.3))' }}
            aria-label="Back to top"
            type="button"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            <div className="relative flex items-center space-x-2 text-white">
              <span>Back to Top</span>
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
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
        style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))' }}
      />
    </footer>
  );
};

export default Footer;
