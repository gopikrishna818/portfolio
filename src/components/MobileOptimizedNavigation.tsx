import { useState, useEffect } from 'react';
import { Menu, X, Download, Home, User, Briefcase, Code, Mail, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileOptimizedNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
    { name: 'Services', href: '#services', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.mobile-nav') && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container-width">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">GC</span>
              </div>
              <span className="text-white font-bold text-xl">Gopikrishna</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-300 hover:text-purple-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-purple-300'
                      : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Resume Download */}
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href="/resume-gopikrishna-chegoni.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Download size={16} />
                <span>Resume</span>
              </motion.a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden mobile-nav">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between h-16 px-4">
            {/* Mobile Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">GC</span>
              </div>
              <span className="text-white font-bold text-lg">Gopikrishna</span>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-black/95 backdrop-blur-xl border-l border-white/10"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <h2 className="text-white font-bold text-xl">Navigation</h2>
                      <button
                        onClick={() => setIsOpen(false)}
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 py-6">
                    {navItems.map((item, index) => {
                      const IconComponent = item.icon;
                      const isActive = activeSection === item.href.substring(1);
                      
                      return (
                        <motion.button
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => scrollToSection(item.href)}
                          className={`w-full flex items-center space-x-4 px-6 py-4 text-left transition-all duration-300 ${
                            isActive
                              ? 'bg-purple-500/20 border-r-2 border-purple-500 text-purple-300'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <IconComponent size={20} />
                          <span className="font-medium">{item.name}</span>
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="w-2 h-2 bg-purple-500 rounded-full ml-auto"
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Footer Actions */}
                  <div className="p-6 border-t border-white/10 space-y-4">
                    <a
                      href="/resume-gopikrishna-chegoni.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Download size={16} />
                      <span>Download Resume</span>
                    </a>
                    
                    <button
                      onClick={() => {
                        scrollToSection('#contact');
                        setIsOpen(false);
                      }}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium transition-all duration-300"
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-xl border-t border-white/10">
          <div className="flex items-center justify-around py-2">
            {navItems.slice(0, 5).map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.href.substring(1);
              
              return (
                <motion.button
                  key={item.name}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-purple-500/20 text-purple-300'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <IconComponent size={18} />
                  <span className="text-xs font-medium">{item.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Spacing */}
      <div className="lg:hidden h-16" />
      <div className="lg:hidden h-16 fixed bottom-0 w-full pointer-events-none" />
    </>
  );
};

export default MobileOptimizedNavigation;
