import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";

const tabs = [
  { label: "Work Experience", value: "experience" },
  { label: "Education", value: "education" },
];

export default function ExperienceEducationSwitcher() {
  const [active, setActive] = useState("experience");

  return (
    <section className="flex flex-col items-center justify-center py-12">
      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 focus:outline-none border-2 border-primary/40 text-white/80 backdrop-blur-lg shadow-md ${
              active === tab.value
                ? "bg-primary text-white border-primary scale-105"
                : "bg-white/10 hover:bg-primary/20"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full max-w-3xl min-h-[300px]">
        <AnimatePresence mode="wait">
          {active === "experience" ? (
            <motion.div
              key="experience"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="origin-center"
            >
              <ExperienceSection />
            </motion.div>
          ) : (
            <motion.div
              key="education"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="origin-center"
            >
              <EducationSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
