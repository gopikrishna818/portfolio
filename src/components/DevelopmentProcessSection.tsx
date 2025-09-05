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
      <h2 className="text-heading text-gradient text-center mb-10">
        My Development Process
      </h2>
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
