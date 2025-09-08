import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code, Zap, User, Mail, Home, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home size={16} /> },
    { href: '#portfolio', label: 'Portfolio', icon: <Code size={16} /> },
    { href: '#skills', label: 'Skills', icon: <Zap size={16} /> },
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
    // Create a link element and trigger download
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        pastHero 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20' 
          : 'bg-transparent'
      }`}
      style={{
        backdropFilter: pastHero ? 'blur(20px) saturate(180%)' : 'none',
        boxShadow: pastHero ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
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
                scale: 1.1,
              }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                background: pastHero
                  ? 'linear-gradient(135deg, #0891b2, #06b6d4)'
                  : 'linear-gradient(135deg, #3b82f6, #6366f1)',
                boxShadow: pastHero
                  ? '0 0 20px rgba(6, 182, 212, 0.3)'
                  : '0 0 20px rgba(59, 130, 246, 0.3)',
              }}
            >
              <motion.div 
                className="text-white font-black text-lg"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(255, 255, 255, 0.5)",
                    "0 0 15px rgba(255, 255, 255, 0.8)",
                    "0 0 5px rgba(255, 255, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                GK
              </motion.div>
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
              <motion.div 
                className={`text-sm font-medium ${
                  pastHero ? 'text-cyan-300' : 'text-blue-300'
                } transition-all duration-300`}
              >
                Data Engineer
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation and Resume Section */}
          <div className="flex items-center space-x-6">
            {/* Clean Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.1 * idx,
                    type: "spring",
                    stiffness: 300
                  }}
                >
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center space-x-2 px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      pastHero 
                        ? 'text-cyan-100 hover:text-white hover:bg-cyan-500/10' 
                        : 'text-blue-100 hover:text-white hover:bg-blue-500/10'
                    }`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <motion.div
                      className={pastHero ? 'text-cyan-400' : 'text-blue-400'}
                      whileHover={{
                        scale: 1.2,
                      }}
                    >
                      {item.icon}
                    </motion.div>
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
          </div>
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * idx,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {/* Futuristic Hover Background */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    background: pastHero
                      ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(6, 182, 212, 0.2))'
                      : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2))',
                    boxShadow: pastHero
                      ? '0 0 20px rgba(6, 182, 212, 0.3)'
                      : '0 0 20px rgba(59, 130, 246, 0.3)',
                  }}
                />
                
                {/* Navigation Button */}
                <motion.button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-300 z-10 rounded-xl ${
                    pastHero 
                      ? 'text-cyan-100 hover:text-white' 
                      : 'text-blue-100 hover:text-white'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  {/* Icon with Glow */}
                  <motion.div
                    className={pastHero ? 'text-cyan-400' : 'text-blue-400'}
                    whileHover={{
                      scale: 1.2,
                      filter: pastHero 
                        ? 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' 
                        : 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))',
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Label */}
                  <span className="relative">
                    {item.label}
                    
                    {/* Animated Underline */}
                    <motion.div
                      className={`absolute -bottom-1 left-0 h-0.5 ${
                        pastHero 
                          ? 'bg-gradient-to-r from-cyan-400 to-blue-500' 
                          : 'bg-gradient-to-r from-blue-400 to-purple-500'
                      }`}
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </span>
                </motion.button>
                
                {/* Floating Orb Effect */}
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    y: -5, 
                    scale: 1,
                  }}
                  transition={{ 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <motion.div
                    className={`w-4 h-4 rounded-full flex items-center justify-center shadow-lg ${
                      pastHero
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500'
                        : 'bg-gradient-to-r from-blue-400 to-purple-500'
                    }`}
                    animate={{
                      boxShadow: pastHero
                        ? [
                            "0 0 10px rgba(6, 182, 212, 0.5)",
                            "0 0 20px rgba(6, 182, 212, 0.8)",
                            "0 0 10px rgba(6, 182, 212, 0.5)",
                          ]
                        : [
                            "0 0 10px rgba(59, 130, 246, 0.5)",
                            "0 0 20px rgba(59, 130, 246, 0.8)",
                            "0 0 10px rgba(59, 130, 246, 0.5)",
                          ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ultra Futuristic Mobile Menu Button */}
          <motion.button
            className={`md:hidden relative p-3 rounded-xl backdrop-blur-sm transition-all duration-300 ${
              pastHero 
                ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20' 
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ 
              scale: 1.1,
              rotateY: 15,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* Animated Ring */}
            <motion.div
              className="absolute inset-0 border-2 rounded-xl"
              animate={{
                borderColor: isOpen 
                  ? pastHero
                    ? ["rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 0.8)", "rgba(239, 68, 68, 0.3)"]
                    : ["rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 0.8)", "rgba(239, 68, 68, 0.3)"]
                  : pastHero
                    ? ["rgba(6, 182, 212, 0.3)", "rgba(6, 182, 212, 0.8)", "rgba(6, 182, 212, 0.3)"]
                    : ["rgba(59, 130, 246, 0.3)", "rgba(59, 130, 246, 0.8)", "rgba(59, 130, 246, 0.3)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              animate={{ rotateZ: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isOpen ? (
                <motion.div
                  initial={{ rotate: 0, scale: 0 }}
                  animate={{ rotate: 90, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} className={pastHero ? "text-cyan-400" : "text-blue-400"} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} className={pastHero ? "text-cyan-400" : "text-blue-400"} />
                </motion.div>
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Ultra Modern Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={isOpen ? { 
            opacity: 1, 
            height: "auto", 
            y: 0,
          } : { 
            opacity: 0, 
            height: 0, 
            y: -20,
          }}
          transition={{ 
            duration: 0.5, 
            ease: "easeInOut",
            height: { duration: 0.4 },
          }}
          className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-2xl border-b border-t shadow-2xl overflow-hidden rounded-b-2xl"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            background: pastHero 
              ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)'
              : 'linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
            borderColor: pastHero ? 'rgba(6, 182, 212, 0.3)' : 'rgba(59, 130, 246, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          }}
        >
          <motion.div 
            className="px-6 py-8 space-y-4"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
          >
            {navItems.map((item, idx) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`flex items-center space-x-4 w-full text-left p-4 rounded-xl border transition-all duration-300 group ${
                  pastHero
                    ? 'bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border-cyan-500/10 hover:border-cyan-500/30 hover:bg-cyan-500/10'
                    : 'bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/10'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ 
                  delay: isOpen ? 0.1 * idx : 0, 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{
                  scale: 1.02,
                  x: 8,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Icon */}
                <motion.div
                  className={`${pastHero ? 'text-cyan-400' : 'text-blue-400'} transition-colors duration-300`}
                  whileHover={{
                    scale: 1.2,
                    filter: pastHero 
                      ? 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))' 
                      : 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.8))',
                  }}
                >
                  {item.icon}
                </motion.div>
                
                {/* Label */}
                <motion.span 
                  className={`font-medium transition-colors duration-300 ${
                    pastHero 
                      ? 'text-cyan-100 group-hover:text-white' 
                      : 'text-blue-100 group-hover:text-white'
                  }`}
                  whileHover={{
                    textShadow: pastHero 
                      ? "0 0 10px rgba(6, 182, 212, 0.5)" 
                      : "0 0 10px rgba(59, 130, 246, 0.5)",
                  }}
                >
                  {item.label}
                </motion.span>
                
                {/* Animated Arrow */}
                <motion.span
                  className={`ml-auto transition-colors duration-300 ${
                    pastHero 
                      ? 'text-cyan-500/50 group-hover:text-cyan-300' 
                      : 'text-blue-500/50 group-hover:text-blue-300'
                  }`}
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
