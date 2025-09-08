import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Brain, TrendingUp, Github, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface FloatingButtonProps {
  icon: React.ComponentType<any>;
  label: string;
  color: string;
  onClick: () => void;
}

// Optimized FloatingButton with minimal animations
const FloatingButton = ({ icon: Icon, label, color, onClick }: FloatingButtonProps) => (
  <motion.button
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0, opacity: 0 }}
    transition={{ duration: 0.2 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`group relative w-12 h-12 rounded-lg bg-gradient-to-br ${color} text-white shadow-lg hover:shadow-xl transition-shadow duration-200 flex items-center justify-center`}
    title={label}
  >
    <Icon className="w-5 h-5" />
    
    {/* Simple Tooltip */}
    <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-black/80 rounded px-2 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
      {label}
    </div>
  </motion.button>
);

const FloatingFeatureButtons = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const features = [
    {
      id: 'ai-assistant',
      icon: Brain,
      label: 'AI Assistant',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      id: 'github-activity',
      icon: Github,
      label: 'GitHub Activity',
      color: 'from-gray-700 to-gray-900',
    },
    {
      id: 'code-playground',
      icon: Terminal,
      label: 'Code Playground',
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 'data-analytics',
      icon: TrendingUp,
      label: 'Data Analytics',
      color: 'from-blue-500 to-cyan-600',
    },
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = (featureId: string) => {
    setActiveModal(featureId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const activeFeature = features.find(f => f.id === activeModal);

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col items-end space-y-3">
        {/* Feature Buttons */}
        <AnimatePresence>
          {isExpanded && features.map((feature) => (
            <FloatingButton
              key={feature.id}
              icon={feature.icon}
              label={feature.label}
              color={feature.color}
              onClick={() => openModal(feature.id)}
            />
          ))}
        </AnimatePresence>

        {/* Main Toggle Button - Simplified */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleExpand}
          className={`w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
            isExpanded ? 'rotate-45' : ''
          }`}
          title={isExpanded ? 'Close Features' : 'Open Features'}
        >
          {isExpanded ? (
            <X className="w-5 h-5" />
          ) : (
            <Terminal className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Modals */}
      <Dialog open={!!activeModal} onOpenChange={closeModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white">
              {activeFeature?.label}
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-4">
            {activeModal === 'ai-assistant' && (
              <div className="text-white text-center py-8">
                <Brain className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
                <p className="text-gray-300">AI-powered portfolio assistant coming soon!</p>
              </div>
            )}
            {activeModal === 'github-activity' && (
              <div className="text-white text-center py-8">
                <Github className="w-16 h-16 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-bold mb-2">GitHub Integration</h3>
                <p className="text-gray-300">Real-time GitHub activity dashboard coming soon!</p>
              </div>
            )}
            {activeModal === 'code-playground' && (
              <div className="text-white text-center py-8">
                <Terminal className="w-16 h-16 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold mb-2">Code Playground</h3>
                <p className="text-gray-300">Interactive code playground coming soon!</p>
              </div>
            )}
            {activeModal === 'data-analytics' && (
              <div className="text-white text-center py-8">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
                <p className="text-gray-300">Interactive data visualization coming soon!</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingFeatureButtons;
