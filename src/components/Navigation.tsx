import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code, Zap, User, Mail, Home, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home size={16} /> },
    { href: '#about', label: 'About', icon: <User size={16} /> },
    { href: '#skills', label: 'Skills', icon: <Zap size={16} /> },
    { href: '#portfolio', label: 'Portfolio', icon: <Code size={16} /> },
    { href: '#experience', label: 'Experience', icon: <Sparkles size={16} /> },
    { href: '#contact', label: 'Contact', icon: <Mail size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      const pastHeroThreshold = heroHeight * 0.5;
      
      setScrolled(scrollPosition > 50);
      const isPastHero = scrollPosition > pastHeroThreshold;
      setPastHero(isPastHero);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume-gopikrishna-chegoni.pdf';
    link.download = 'Gopikrishna-Chegoni-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        pastHero 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: pastHero ? 'blur(20px) saturate(180%)' : 'none',
        boxShadow: pastHero ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
        pointerEvents: 'auto',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex items-center justify-between h-16">
          {/* Clean Brand Logo */}
          <motion.div 
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ 
              scale: 1.02,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            {/* Simple Logo */}
            <motion.div 
              className="relative w-10 h-10 rounded-lg flex items-center justify-center"
              whileHover={{
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
              style={{
                background: pastHero
                  ? 'linear-gradient(135deg, #0891b2, #06b6d4)'
                  : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                boxShadow: pastHero
                  ? '0 0 20px rgba(6, 182, 212, 0.3)'
                  : '0 0 20px rgba(59, 130, 246, 0.3)',
              }}
            >
              <div className="text-white font-black text-lg">
                GK
              </div>
            </motion.div>
            
            {/* Brand Text */}
            <motion.div 
              className="hidden sm:block"
              whileHover={{
                x: 5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                style={{
                  textShadow: pastHero 
                    ? "0 0 10px rgba(6, 182, 212, 0.3)" 
                    : "0 0 10px rgba(59, 130, 246, 0.3)",
                }}
              >
                Gopikrishna
              </motion.div>
            </motion.div>
            
            {/* Available Status Indicator */}
            <motion.div 
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-4 py-2 backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(34, 197, 94, 0.6)",
                backgroundColor: "rgba(34, 197, 94, 0.25)",
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-sm text-green-300 font-medium tracking-wide">
                Available
              </span>
            </motion.div>
          </motion.div>

          {/* Navigation and Resume Section */}
          <div className="flex items-center space-x-6">
            {/* Clean Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  className="relative group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                >
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center space-x-2 px-4 py-2 text-base font-medium transition-all duration-200 rounded-lg ${
                      pastHero 
                        ? 'text-cyan-100 hover:text-white hover:bg-cyan-500/10' 
                        : 'text-blue-100 hover:text-white hover:bg-blue-500/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={pastHero ? 'text-cyan-400' : 'text-blue-400'}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                    
                    {/* Simple Underline */}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 ${
                        pastHero 
                          ? 'bg-cyan-400' 
                          : 'bg-blue-400'
                      }`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>

            {/* Resume Download Button */}
            <motion.button
              onClick={handleResumeDownload}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                pastHero
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: pastHero
                  ? '0 10px 25px rgba(6, 182, 212, 0.4)'
                  : '0 10px 25px rgba(59, 130, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <Download size={16} />
              <span className="hidden sm:inline">Resume</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden relative p-2 rounded-lg transition-all duration-300 ${
                pastHero 
                  ? 'text-cyan-400 hover:bg-cyan-500/10' 
                  : 'text-blue-400 hover:bg-blue-500/10'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ 
                scale: 1.1,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ rotateZ: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { 
            opacity: 1, 
            height: "auto", 
          } : { 
            opacity: 0, 
            height: 0, 
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
          }}
          className="md:hidden overflow-hidden"
          style={{
            background: pastHero 
              ? 'rgba(15, 23, 42, 0.95)'
              : 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: pastHero ? '1px solid rgba(6, 182, 212, 0.2)' : '1px solid rgba(59, 130, 246, 0.2)',
          }}
        >
          <motion.div 
            className="px-6 py-4 space-y-2"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: isOpen ? 0.1 : 0, duration: 0.2 }}
          >
            {navItems.map((item, idx) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg transition-all duration-300 ${
                  pastHero
                    ? 'text-cyan-100 hover:text-white hover:bg-cyan-500/10'
                    : 'text-blue-100 hover:text-white hover:bg-blue-500/10'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  delay: isOpen ? 0.1 * idx : 0, 
                  duration: 0.3,
                }}
                whileHover={{
                  x: 8,
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={`${pastHero ? 'text-cyan-400' : 'text-blue-400'}`}
                >
                  {item.icon}
                </motion.div>
                <span className="font-medium text-base">{item.label}</span>
              </motion.button>
            ))}
            
            {/* Mobile Resume Button */}
            <motion.button
              onClick={handleResumeDownload}
              className={`flex items-center space-x-3 w-full text-left p-3 rounded-lg font-medium transition-all duration-300 mt-4 ${
                pastHero
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ 
                delay: isOpen ? 0.4 : 0, 
                duration: 0.3,
              }}
              whileHover={{
                x: 8,
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} />
              <span>Download Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
