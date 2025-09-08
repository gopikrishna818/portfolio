import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Brain, TrendingUp, Github, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import InteractiveCodePlayground from '@/components/InteractiveCodePlayground';
import ModalAIAssistant from '@/components/ModalAIAssistant';
import InteractiveDataVisualization from '@/components/InteractiveDataVisualization';
import GitHubIntegration from '@/components/GitHubIntegration';

interface FloatingButtonProps {
  icon: React.ComponentType<any>;
  label: string;
  color: string;
  onClick: () => void;
  delay?: number;
}

// Lightweight FloatingButton without heavy animations
const FloatingButton = ({ icon: Icon, label, color, onClick, delay = 0 }: FloatingButtonProps) => (
  <motion.button
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, type: "spring", stiffness: 300, damping: 25 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`group relative w-12 h-12 rounded-xl bg-gradient-to-br ${color} text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center backdrop-blur-sm border border-white/10`}
    title={label}
  >
    <Icon className="w-5 h-5" />
    
    {/* Simple Tooltip */}
    <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/80 rounded-lg px-3 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
      {label}
      <div className="absolute left-full top-1/2 -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-y-4 border-y-transparent"></div>
    </div>
  </motion.button>
);
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.div>
  </motion.button>
);

const FloatingFeatureButtons = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    {
      id: 'code',
      icon: Code,
      label: 'Code Playground',
      color: 'from-emerald-500 via-teal-500 to-cyan-500',
      component: InteractiveCodePlayground
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub Activity',
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      component: () => (
        <div className="p-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Live GitHub Activity
            </h3>
            <p className="text-muted-foreground">
              Real-time insights into my development journey and coding patterns
            </p>
          </div>
          <GitHubIntegration />
        </div>
      )
    },
    {
      id: 'ai',
      icon: Bot,
      label: 'AI Assistant',
      color: 'from-pink-500 via-rose-500 to-orange-500',
      component: ModalAIAssistant
    },
    {
      id: 'analytics',
      icon: BarChart3,
      label: 'Data Analytics',
      color: 'from-blue-600 via-indigo-600 to-purple-600',
      component: InteractiveDataVisualization
    }
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
      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end space-y-4">
        {/* Feature Buttons */}
        <AnimatePresence>
          {isExpanded && features.map((feature, index) => (
            <FloatingButton
              key={feature.id}
              icon={feature.icon}
              label={feature.label}
              color={feature.color}
              onClick={() => openModal(feature.id)}
              delay={index * 0.1}
            />
          ))}
        </AnimatePresence>

        {/* Main Toggle Button - Enhanced AI/Tech Design */}
        <motion.button
          whileHover={{ 
            boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
          }}
          whileTap={{}}
          onClick={toggleExpand}
          className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/40 overflow-hidden group ${
            isExpanded ? 'rotate-45' : ''
          }`}
          title={isExpanded ? 'Close Advanced Features' : 'Open Advanced Features'}
        >
          {/* Animated Background Pattern */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'linear-gradient(0deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.3) 100%)',
                'linear-gradient(180deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.3) 100%)',
                'linear-gradient(0deg, rgba(139,92,246,0.3) 0%, rgba(59,130,246,0.3) 100%)',
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* CPU-like Grid Pattern */}
          <div className="absolute inset-1 border border-white/20 rounded-xl">
            <div className="absolute inset-1 grid grid-cols-3 grid-rows-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 rounded-sm"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Main Icon */}
          <motion.div
            animate={{ 
              rotate: isExpanded ? 45 : 0,
              scale: isExpanded ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {isExpanded ? (
              <X className="w-3 h-3" />
            ) : (
              <Cpu className="w-3 h-3" />
            )}
          </motion.div>
          
          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-white/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.button>

        {/* Ripple Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: isExpanded ? 2 : 1, opacity: isExpanded ? 0.3 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ pointerEvents: 'none' }}
        />
      </div>

      {/* Modal Dialogs */}
      <Dialog open={!!activeModal} onOpenChange={() => closeModal()}>
        <DialogContent className={`max-w-6xl max-h-[85vh] p-0 overflow-hidden ${
          activeModal === 'ai' ? 'max-w-4xl' : activeModal === 'github' ? 'max-w-5xl' : 'max-w-6xl'
        }`}>
          <DialogHeader className="p-4 pb-0 border-b border-border">
            <DialogTitle className="text-xl font-bold text-foreground flex items-center gap-3">
              {activeFeature && (
                <>
                  <activeFeature.icon className="w-6 h-6 text-primary" />
                  {activeFeature.label}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className={`overflow-auto ${
            activeModal === 'ai' ? 'max-h-[calc(85vh-60px)]' : 'max-h-[calc(85vh-80px)]'
          } ${
            activeModal === 'github' ? 'p-0' : activeModal === 'ai' ? '' : 'p-4'
          }`}>
            {activeFeature && (
              activeModal === 'ai' ? (
                <activeFeature.component />
              ) : (
                <div className={activeModal === 'github' ? '' : 'pt-0'}>
                  <activeFeature.component />
                </div>
              )
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingFeatureButtons;
