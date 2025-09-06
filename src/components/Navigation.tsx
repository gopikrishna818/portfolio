import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight; // Hero section is h-screen (100vh)
      const pastHeroThreshold = heroHeight * 0.5; // Changed to 50% for earlier detection
      
      // Show navbar after scrolling 50px (but always visible)
      setScrolled(scrollPosition > 50);
      
      // Different styling after passing hero section (50% of viewport)
      const isPastHero = scrollPosition > pastHeroThreshold;
      setPastHero(isPastHero);
      
      // Debug logging
      console.log('Scroll:', scrollPosition, 'Hero Height:', heroHeight, 'Past Hero:', isPastHero);
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
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform-gpu w-full ${
        pastHero
          ? 'navbar-solid'
          : 'bg-transparent'
      }`}
      style={{
        background: pastHero ? '#0f172a' : 'transparent',
        borderBottom: pastHero ? '1px solid rgba(59, 130, 246, 0.3)' : 'none',
        boxShadow: pastHero ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none',
        minHeight: '64px',
      }}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Professional Logo with 3D Effects */}
          <motion.div 
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => handleNavClick('#home')}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* Logo Container with 3D Transform */}
            <motion.div 
              className="relative"
              whileHover={{
                rotateY: 10,
                z: 20,
              }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main Logo with Depth */}
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:shadow-purple-500/50 transition-all duration-500 border border-white/10"
                whileHover={{
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  rotateX: 5,
                }}
                style={{
                  transform: "translateZ(10px)",
                  background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #4338ca 100%)",
                }}
              >
                <motion.span 
                  className="text-white font-bold text-xl tracking-wider"
                  whileHover={{ scale: 1.1, rotateZ: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    transform: "translateZ(5px)",
                  }}
                >
                  GK
                </motion.span>
              </motion.div>
              
              {/* Animated Ring with 3D Effect */}
              <motion.div 
                className="absolute inset-0 rounded-xl border-2 border-blue-500/30 group-hover:border-purple-500/60"
                animate={{
                  rotate: [0, 360],
                  borderColor: ["rgba(59, 130, 246, 0.3)", "rgba(139, 92, 246, 0.5)", "rgba(59, 130, 246, 0.3)"],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{ transform: "translateZ(15px)" }}
              />
              
              {/* Floating Particles */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  y: [-2, -8, -2],
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{
                  y: [2, 6, 2],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
            
            {/* Enhanced Brand Text with 3D Typography */}
            <motion.div 
              className="hidden sm:block"
              whileHover={{
                x: 5,
                rotateY: -5,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div 
                className="text-xl font-bold font-poppins bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-400 group-hover:to-indigo-500"
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: "translateZ(8px)",
                  textShadow: "0 4px 8px rgba(59, 130, 246, 0.2)",
                }}
              >
                Gopikrishna
              </motion.div>
              <motion.div 
                className="text-sm text-muted-foreground group-hover:text-blue-400 transition-all duration-300"
                whileHover={{
                  x: 2,
                  color: "#60a5fa",
                }}
                style={{
                  transform: "translateZ(4px)",
                }}
              >
                Data Engineer
              </motion.div>
            </motion.div>
            
            {/* Enhanced Status Indicator with Pulse Animation */}
            <motion.div 
              className="hidden md:block"
              whileHover={{
                scale: 1.05,
                rotateY: 10,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center space-x-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 backdrop-blur-sm"
                animate={{
                  borderColor: ["rgba(34, 197, 94, 0.3)", "rgba(34, 197, 94, 0.6)", "rgba(34, 197, 94, 0.3)"],
                  backgroundColor: ["rgba(34, 197, 94, 0.1)", "rgba(34, 197, 94, 0.15)", "rgba(34, 197, 94, 0.1)"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  borderColor: "rgba(34, 197, 94, 0.8)",
                  backgroundColor: "rgba(34, 197, 94, 0.2)",
                }}
              >
                <motion.div 
                  className="w-3 h-3 bg-green-500 rounded-full relative"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      "0 0 0 8px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span 
                  className="text-sm text-green-400 font-medium tracking-wide"
                  whileHover={{
                    color: "#4ade80",
                    textShadow: "0 0 8px rgba(74, 222, 128, 0.5)",
                  }}
                >
                  Available
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Desktop Navigation with 3D Effects */}
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                {/* 3D Hover Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.1,
                    rotateY: 5,
                    z: 10,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                />
                
                {/* Main Navigation Button */}
                <motion.button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 z-10 ${
                    pastHero 
                      ? 'text-foreground/80 hover:text-foreground' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    color: pastHero ? "#3b82f6" : "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    transformStyle: "preserve-3d",
                    textShadow: pastHero ? "0 2px 4px rgba(0,0,0,0.1)" : "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Animated Underline */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 ${
                      pastHero 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                        : 'bg-gradient-to-r from-white to-blue-200'
                    }`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Glowing Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-lg blur-lg ${
                      pastHero ? 'bg-blue-500/20' : 'bg-white/20'
                    }`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
                
                {/* Floating Icon Animation */}
                <motion.div
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    y: -5, 
                    scale: 1,
                    rotateY: 360,
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(139, 92, 246, 0.5)",
                        "0 0 10px rgba(59, 130, 246, 0.5)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Mobile Menu Button with 3D Morphing */}
          <motion.button
            className={`md:hidden relative p-2 rounded-lg border backdrop-blur-sm transition-all duration-300 ${
              pastHero 
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20' 
                : 'bg-transparent border-white/30 hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
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
                  <X size={24} className={pastHero ? "text-blue-500" : "text-white"} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} className={pastHero ? "text-blue-500" : "text-white"} />
                </motion.div>
              )}
            </motion.div>
            
            {/* Animated Ring - only show past hero */}
            {pastHero && (
              <motion.div
                className="absolute inset-0 border-2 rounded-lg"
                animate={{
                  borderColor: isOpen 
                    ? ["rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 0.6)", "rgba(239, 68, 68, 0.3)"]
                    : ["rgba(59, 130, 246, 0.3)", "rgba(139, 92, 246, 0.5)", "rgba(59, 130, 246, 0.3)"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation with Slide Animation */}
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
            duration: 0.4, 
            ease: "easeInOut",
            height: { duration: 0.3 },
          }}
          className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-xl border-b shadow-2xl overflow-hidden"
          style={{
            backdropFilter: pastHero ? 'blur(20px) saturate(180%)' : 'blur(10px)',
            background: pastHero 
              ? '#0f172a'  // Solid slate-900 color
              : '#000000',  // Solid black for hero section mobile menu
            borderColor: pastHero ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          }}
        >
          <motion.div 
            className="px-6 py-8 space-y-6"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: isOpen ? 0.2 : 0, duration: 0.3 }}
          >
            {navItems.map((item, idx) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left p-4 rounded-lg border transition-all duration-300 group ${
                  pastHero
                    ? 'bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-500/10 hover:border-blue-500/30'
                    : 'bg-white/5 border-white/10 hover:border-white/30'
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
                  backgroundColor: pastHero ? "rgba(59, 130, 246, 0.1)" : "rgba(255, 255, 255, 0.1)",
                  borderColor: pastHero ? "rgba(59, 130, 246, 0.3)" : "rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span 
                  className={`font-medium transition-colors duration-300 ${
                    pastHero 
                      ? 'text-foreground group-hover:text-blue-400' 
                      : 'text-white group-hover:text-blue-200'
                  }`}
                  whileHover={{
                    x: 5,
                    textShadow: pastHero 
                      ? "0 0 10px rgba(59, 130, 246, 0.5)" 
                      : "0 0 10px rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {item.label}
                </motion.span>
                
                {/* Animated Arrow */}
                <motion.span
                  className={`float-right transition-colors duration-300 ${
                    pastHero 
                      ? 'text-blue-500/50 group-hover:text-blue-400' 
                      : 'text-white/50 group-hover:text-white'
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