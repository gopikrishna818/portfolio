import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Professional Logo */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => handleNavClick('#home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Logo Container */}
            <div className="relative">
              {/* Main Logo */}
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-purple-500/30 transition-all duration-300">
                <span className="text-white font-bold text-lg">GC</span>
              </div>
              
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-lg border-2 border-blue-500/30 group-hover:border-purple-500/50 transition-colors duration-300 animate-pulse-glow"></div>
            </div>
            
            {/* Brand Text */}
            <div className="hidden sm:block">
              <div className="text-lg font-bold font-poppins text-gradient group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                Gopikrishna
              </div>
              <div className="text-xs text-muted-foreground group-hover:text-blue-400 transition-colors duration-300">
                Data Engineer
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-medium">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, idx) => {
              const [hovered, setHovered] = useState(false);
              return (
                <div key={item.href} className="relative flex flex-col items-center">
                  {hovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -24 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="absolute top-[-32px] left-1/2 -translate-x-1/2"
                      style={{ pointerEvents: 'none' }}
                    >
                      {/* Simple walking man SVG animation */}
                      <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.circle cx="12" cy="5" r="3" fill="#3a8ef9" />
                        <motion.rect x="11" y="8" width="2" height="6" rx="1" fill="#3a8ef9"
                          animate={{ y: [8, 10, 8] }}
                          transition={{ repeat: Infinity, duration: 0.6 }}
                        />
                        <motion.line x1="12" y1="14" x2="9" y2="19" stroke="#3a8ef9" strokeWidth="2"
                          animate={{ x2: [9, 10, 9] }}
                          transition={{ repeat: Infinity, duration: 0.6 }}
                        />
                        <motion.line x1="12" y1="14" x2="15" y2="19" stroke="#3a8ef9" strokeWidth="2"
                          animate={{ x2: [15, 14, 15] }}
                          transition={{ repeat: Infinity, duration: 0.6 }}
                        />
                      </motion.svg>
                    </motion.div>
                  )}
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className="btn-ghost text-sm"
                    whileHover={{ scale: 1.15, color: '#3a8ef9' }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    {item.label}
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn-ghost"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left btn-ghost"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;