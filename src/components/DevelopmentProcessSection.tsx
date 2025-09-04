import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description: "Understanding client needs, goals, and target audience.",
    icon: "🔍",
  },
  {
    title: "Design",
    description: "Wireframing, prototyping, and visual design with motion graphics.",
    icon: "🎨",
  },
  {
    title: "Development",
    description: "Building responsive, animated interfaces using React, Tailwind, and Framer Motion.",
    icon: "💻",
  },
  {
    title: "Testing",
    description: "Ensuring quality, performance, and accessibility across devices.",
    icon: "🧪",
  },
  {
    title: "Launch",
    description: "Deploying the final product and monitoring user experience.",
    icon: "🚀",
  },
];

export default function DevelopmentProcessSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-transparent">
      <div className="relative text-center mb-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg relative"
          initial={{ opacity: 0, rotateX: -90, z: -140 }}
          whileInView={{ 
            opacity: 1, 
            rotateX: 0, 
            z: 0,
            textShadow: [
              "0 0 30px rgba(168, 85, 247, 0.4)",
              "0 0 60px rgba(168, 85, 247, 0.6)",
              "0 0 30px rgba(168, 85, 247, 0.4)"
            ]
          }}
          transition={{ 
            duration: 1.3, 
            ease: "easeOutBack",
            textShadow: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          viewport={{ once: true }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          whileHover={{
            rotateY: [0, 12, -12, 0],
            scale: 1.05,
            transition: { duration: 0.8 }
          }}
        >
          My Development Process
        </motion.h2>
        
        {/* 3D floating development icons */}
        <motion.div
          className="absolute -top-6 -left-12 w-4 h-4 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, -180, -360],
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        
        <motion.div
          className="absolute -bottom-4 -right-16 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={{
            rotateY: [0, 360],
            rotateZ: [0, -180],
            x: [0, 12, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
        
        <motion.div
          className="absolute top-2 left-20 text-xl"
          animate={{
            rotateZ: [0, 360],
            scale: [0.8, 1.4, 0.8],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          ⚙️
        </motion.div>
        
        <motion.div
          className="absolute -top-2 right-24 text-lg"
          animate={{
            rotateX: [0, 180, 360],
            scale: [0.9, 1.2, 0.9],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          💻
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-8">
        {steps.map((step, idx) => (
          <React.Fragment key={step.title}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl p-6 w-72 flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <span className="text-4xl mb-3">{step.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">
                {step.title}
              </h3>
              <p className="text-sm text-white/80 mb-2">{step.description}</p>
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full blur-xl opacity-40" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full blur-xl opacity-40" />
            </motion.div>
            {/* Simple arrow between cards, except after last card */}
            {idx < steps.length - 1 && (
              <div className="flex items-center">
                <svg width="48" height="32" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="4" y1="16" x2="44" y2="16" stroke="#a259f7" strokeWidth="3" strokeLinecap="round" />
                  <polyline points="38,10 44,16 38,22" stroke="#a259f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
