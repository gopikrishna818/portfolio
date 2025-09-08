import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, Maximize2, X } from 'lucide-react';

interface ProjectDemoViewerProps {
  demoUrl?: string;
  staticImage: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDemoViewer: React.FC<ProjectDemoViewerProps> = ({
  demoUrl,
  staticImage,
  title,
  isOpen,
  onClose
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  const handlePlayDemo = () => {
    if (demoUrl) {
      setShowDemo(true);
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleRestart = () => {
    setShowDemo(false);
    setTimeout(() => {
      setShowDemo(true);
      setIsPlaying(true);
    }, 100);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title} - Live Demo
              </h3>
              <div className="flex items-center gap-2">
                {demoUrl && (
                  <>
                    {!showDemo ? (
                      <button
                        onClick={handlePlayDemo}
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                      >
                        <Play size={14} />
                        Play Demo
                      </button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handlePause}
                          className="flex items-center gap-2 px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm transition-colors"
                        >
                          <Pause size={14} />
                          Pause
                        </button>
                        <button
                          onClick={handleRestart}
                          className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm transition-colors"
                        >
                          <RotateCcw size={14} />
                          Restart
                        </button>
                      </div>
                    )}
                  </>
                )}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Demo Content */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {showDemo && demoUrl ? (
                  <motion.div
                    key="demo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative"
                  >
                    <img
                      src={demoUrl}
                      alt={`${title} Demo`}
                      className="w-full h-auto max-h-[60vh] object-cover"
                    />
                    {isPlaying && (
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                          Live Demo
                        </div>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="static"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative group"
                  >
                    <img
                      src={staticImage}
                      alt={title}
                      className="w-full h-auto max-h-[60vh] object-cover"
                    />
                    {demoUrl && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={handlePlayDemo}
                          className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all transform hover:scale-105"
                        >
                          <Play size={20} />
                          Watch Demo
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Demo Info */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {demoUrl ? 
                  "Interactive demo showing key features and functionality" : 
                  "Demo coming soon - static preview available"
                }
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDemoViewer;
