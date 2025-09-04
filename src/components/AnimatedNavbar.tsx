import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Folder, MapPin, Plus } from 'lucide-react';

const NAV_BUTTONS = [
  { icon: <MapPin /> },
  { icon: <Folder /> },
  { icon: <Plus /> },
];


export default function AnimatedNavbar() {
  const [active, setActive] = useState(0);

  // Staggered entrance animation for buttons
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <nav className="relative bg-white w-[220px] h-[72px] px-2 pb-1 rounded-lg flex items-center justify-around shadow-lg">
      {/* Marker */}
      {/* Nav Buttons with staggered animation, icons only, no box/ripple */}
      <motion.div
        className="flex w-full justify-around items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {NAV_BUTTONS.map((btn, idx) => (
          <motion.button
            key={idx}
            className={`relative z-20 bg-transparent border-0 cursor-pointer grid place-items-center w-[60px] h-[48px] transition-all duration-300 ${active === idx ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setActive(idx)}
            variants={item}
            whileHover={{ scale: 1.15, y: -6 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`text-gray-900 transition-colors duration-300 ${active === idx ? 'text-blue-500' : ''}`}>{btn.icon}</span>
          </motion.button>
        ))}
      </motion.div>
    </nav>
  );
}
