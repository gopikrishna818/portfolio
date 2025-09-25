import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Code, Zap, User, Mail, Home, Download, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home size={16} />, id: 'home' },
    { href: '#about', label: 'About', icon: <User size={16} />, id: 'about' },
    { href: '#portfolio', label: 'Portfolio', icon: <Code size={16} />, id: 'portfolio' },
    { href: '#skills', label: 'Skills', icon: <Zap size={16} />, id: 'skills' },
  { href: '#experience', label: 'Experience', icon: <Briefcase size={16} />, id: 'experience' },
    { href: '#contact', label: 'Contact', icon: <Mail size={16} />, id: 'contact' },
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

  // Fixed smart section detection with scroll-based fallback
  useEffect(() => {
    // Method 1: Enhanced Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -40% 0px', // Optimized for About section
      threshold: [0.1, 0.3, 0.5]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries[0];
        const sectionId = mostVisible.target.id;
        if (sectionId) {
          setActiveSection(sectionId);
          console.log('🎯 Observer detected:', sectionId, `${Math.round(mostVisible.intersectionRatio * 100)}% visible`);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Method 2: Scroll-based detection as backup
    const scrollHandler = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = [
        { id: 'home', element: document.querySelector('section[id="home"], #home') },
        { id: 'about', element: document.querySelector('section[id="about"], #about') },
        { id: 'portfolio', element: document.querySelector('section[id="portfolio"], #portfolio') },
        { id: 'skills', element: document.querySelector('section[id="skills"], #skills') },
        { id: 'experience', element: document.querySelector('section[id="experience"], #experience') },
        { id: 'contact', element: document.querySelector('section[id="contact"], #contact') }
      ].filter(section => section.element);

      let currentSection = 'home';
      
      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = scrollTop + rect.top;
          const elementBottom = elementTop + rect.height;
          
          // Check if section is in the middle 50% of viewport
          const viewportMiddle = scrollTop + windowHeight / 2;
          if (viewportMiddle >= elementTop && viewportMiddle <= elementBottom) {
            currentSection = section.id;
            break;
          }
        }
      }

      // Only update if different from current
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        console.log('📍 Scroll detected:', currentSection, 'at scroll:', scrollTop);
      }
    };

    // Setup observers
    const sections = [
      { id: 'home', selectors: ['section[id="home"]', '#home', '.hero-section'] },
      { id: 'about', selectors: ['section[id="about"]', '#about', '.about-section'] },
      { id: 'portfolio', selectors: ['section[id="portfolio"]', '#portfolio', '.portfolio-section'] },
      { id: 'skills', selectors: ['section[id="skills"]', '#skills', '.skills-section'] },
      { id: 'experience', selectors: ['section[id="experience"]', '#experience', '.experience-section'] },
      { id: 'contact', selectors: ['section[id="contact"]', '#contact', '.contact-section'] }
    ];

    sections.forEach(({ id, selectors }) => {
      let element = null;
      for (const selector of selectors) {
        element = document.querySelector(selector);
        if (element) break;
      }
      
      if (element) {
        observer.observe(element);
        console.log('✅ Observing:', id, element.tagName, element.className);
      } else {
        console.warn('❌ Section not found:', id);
      }
    });

    // Add scroll listener with throttling
    let ticking = false;
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          scrollHandler();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Initial check
    setTimeout(scrollHandler, 100);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [activeSection]);

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
    <>
      {/* Force navigation to be on top with CSS */}
      <style>{`
        nav[data-navigation="true"] {
          z-index: 2147483647 !important;
          pointer-events: auto !important;
          position: fixed !important;
        }
        nav[data-navigation="true"] * {
          pointer-events: auto !important;
          z-index: inherit !important;
        }
        nav[data-navigation="true"] button {
          cursor: pointer !important;
          pointer-events: auto !important;
        }
      `}</style>
      
      <motion.nav
        data-navigation="true"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 transition-all duration-500`}
        style={{
          zIndex: 2147483647, // Maximum possible z-index value
          background: '#0f172a', // Completely solid background - no transparency
          borderBottom: '1px solid rgba(6, 182, 212, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
          pointerEvents: 'auto',
          isolation: 'isolate', // Create a new stacking context
          position: 'fixed',
          width: '100%',
          top: 0,
          left: 0,
          right: 0,
          backdropFilter: 'none', // Remove any backdrop filter
          WebkitBackdropFilter: 'none', // Remove webkit backdrop filter
        }}
      >
      <div 
        className="max-w-7xl mx-auto px-6 relative" 
        style={{ 
          zIndex: 2147483647, 
          pointerEvents: 'auto',
          position: 'relative',
        }}
      >
        <div 
          className="flex items-center justify-between h-16" 
          style={{ 
            zIndex: 2147483647, 
            pointerEvents: 'auto',
            position: 'relative',
          }}
        >
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
              className="hidden md:flex items-center space-x-2 bg-green-800/80 border border-green-400/50 rounded-full px-4 py-2"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(34, 197, 94, 0.6)",
                backgroundColor: "rgba(34, 197, 94, 0.4)",
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
            {/* Modern 3D Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-2 rounded-2xl p-2 border border-gray-600/50"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(31, 41, 55, 1)', // Completely solid background - no transparency
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                zIndex: 2147483647,
                position: 'relative',
                pointerEvents: 'auto',
                isolation: 'isolate',
                backdropFilter: 'none',
                WebkitBackdropFilter: 'none',
              }}
            >
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * idx }}
                >
                  <motion.button
                    onClick={() => handleNavClick(item.href)}
                    className={`relative flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{
                      background: activeSection === item.id
                        ? pastHero 
                          ? 'linear-gradient(135deg, #0891b2, #06b6d4)'
                          : 'linear-gradient(135deg, #3b82f6, #6366f1)'
                        : 'transparent',
                      boxShadow: activeSection === item.id
                        ? pastHero
                          ? '0 4px 20px rgba(6, 182, 212, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                          : '0 4px 20px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                        : 'none',
                      transform: activeSection === item.id ? 'translateY(-1px)' : 'translateY(0)',
                      zIndex: 2147483647,
                      position: 'relative',
                      pointerEvents: 'auto',
                      cursor: 'pointer',
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* 3D Icon */}
                    <motion.div 
                      className={`transition-colors duration-300 ${
                        activeSection === item.id 
                          ? 'text-white drop-shadow-sm' 
                          : pastHero ? 'text-cyan-400' : 'text-blue-400'
                      }`}
                      whileHover={{ rotateY: 10 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* 3D Text */}
                    <motion.span 
                      className="drop-shadow-sm"
                      whileHover={{ x: 2 }}
                    >
                      {item.label}
                    </motion.span>

                    {/* Active Indicator */}
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, type: "spring" }}
                      />
                    )}
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
              ? '#0f172a'
              : '#000000',
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
                  activeSection === item.id
                    ? pastHero
                      ? 'text-white bg-cyan-500/20 border border-cyan-400/50'
                      : 'text-white bg-blue-500/20 border border-blue-400/50'
                    : pastHero
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
                  className={
                    activeSection === item.id 
                      ? pastHero ? 'text-cyan-300' : 'text-blue-300'
                      : pastHero ? 'text-cyan-400' : 'text-blue-400'
                  }
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
    </>
  );
};

export default Navigation;
