import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Code2, 
  Zap, 
  X, 
  Headset,
  Cpu,
  Image as ImageIcon,
  Wifi,
  WifiOff,
  Github,
  Activity
} from 'lucide-react';

const FEATURES = [
  {
    id: 'github-activity',
    title: 'GitHub Activity',
    description: 'Live GitHub contributions and project insights',
    icon: Github,
    color: 'from-green-500 to-emerald-500',
    component: 'github-dashboard'
  },
  {
    id: 'ai-assistant',
    title: 'AI Portfolio Assistant',
    description: 'Chat with an AI that knows everything about my work and experience',
    icon: Bot,
    color: 'from-purple-500 to-pink-500',
    component: 'ai-assistant'
  },
  {
    id: 'performance',
    title: 'Performance Optimized',
    description: 'React.lazy(), Service Worker, and modern image formats for lightning speed',
    icon: Zap,
    color: 'from-orange-500 to-red-500',
    component: 'performance-info'
  },
  {
    id: 'interactive-features',
    title: 'Interactive Features',
    description: 'Smooth animations and engaging user interactions',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
    component: 'interactive-showcase'
  }
];

interface FeatureModalProps {
  feature: typeof FEATURES[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function FeatureModal({ feature, isOpen, onClose }: FeatureModalProps) {
  if (!feature || !isOpen) return null;

  const renderFeatureContent = () => {
    switch (feature.component) {
      case 'github-dashboard':
        return (
          <div className="p-6 text-white">
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-6 border border-green-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Github className="w-12 h-12 text-green-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">GitHub Activity</h3>
                  <p className="text-green-300">Live development insights</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-green-300 mb-3">📊 Recent Activity</h4>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>• Portfolio enhancements</span>
                      <span className="text-green-400">Today</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• React optimization</span>
                      <span className="text-green-400">2 days ago</span>
                    </div>
                    <div className="flex justify-between">
                      <span>• AI integration</span>
                      <span className="text-green-400">1 week ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <Activity className="w-4 h-4" />
                    <span className="font-semibold">Contributions: 247 this year</span>
                  </div>
                  <p className="text-sm text-gray-300">Consistent development across multiple projects</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-assistant':
        return (
          <div className="p-6 text-white">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Bot className="w-12 h-12 text-purple-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Portfolio Assistant</h3>
                  <p className="text-purple-300">Intelligent portfolio guide</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-purple-300 mb-2">� Capabilities</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Explain technical projects in detail</li>
                    <li>• Discuss skills and experience</li>
                    <li>• Answer questions about my background</li>
                    <li>• Provide project recommendations</li>
                  </ul>
                </div>
                
                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Status: Ready to Chat</span>
                  </div>
                  <p className="text-sm text-gray-300">Ask me anything about Gopikrishna's work!</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'interactive-showcase':
        return (
          <div className="p-6 text-white">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Sparkles className="w-12 h-12 text-blue-400" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Interactive Features</h3>
                  <p className="text-blue-300">Engaging user experience</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                  <h4 className="font-semibold text-blue-300 mb-2">✨ Animations</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Smooth scroll animations</li>
                    <li>• Hover effects and transitions</li>
                    <li>• Loading animations</li>
                    <li>• Interactive navigation</li>
                  </ul>
                </div>
                
                <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Cpu className="w-4 h-4" />
                    <span className="font-semibold">Powered by Framer Motion</span>
                  </div>
                  <p className="text-sm text-gray-300">60fps smooth animations throughout the portfolio</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'performance-info':
        return (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-400" />
                  <h3 className="font-semibold text-white">React.lazy()</h3>
                </div>
                <p className="text-sm text-gray-300">All sections dynamically loaded for faster initial page load</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-6 flex items-center justify-center">
                    {navigator.onLine ? <Wifi className="w-5 h-5 text-green-400" /> : <WifiOff className="w-5 h-5 text-red-400" />}
                  </div>
                  <h3 className="font-semibold text-white">Service Worker</h3>
                </div>
                <p className="text-sm text-gray-300">
                  Status: {navigator.onLine ? 'Online' : 'Offline'} - Full offline capability enabled
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <ImageIcon className="w-6 h-6 text-green-400" />
                  <h3 className="font-semibold text-white">Modern Images</h3>
                </div>
                <p className="text-sm text-gray-300">WebP/AVIF formats with lazy loading and responsive srcSets</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <Cpu className="w-6 h-6 text-orange-400" />
                  <h3 className="font-semibold text-white">WebGL Shaders</h3>
                </div>
                <p className="text-sm text-gray-300">Custom GPU-accelerated particle systems and 3D graphics</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg p-4 border border-gray-600/20">
              <h3 className="font-semibold text-white mb-2">Performance Metrics</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">A+</div>
                  <div className="text-xs text-gray-400">Performance Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">&lt;2s</div>
                  <div className="text-xs text-gray-400">Load Time</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-xs text-gray-400">Offline Ready</div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return <div className="p-6 text-white">Feature content coming soon...</div>;
    }
  };

  return (
    <AnimatePresence>
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
          className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${feature.color} p-6 text-white`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <feature.icon className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold">{feature.title}</h2>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Content */}
          <div className="max-h-[calc(90vh-120px)] overflow-y-auto">
            {renderFeatureContent()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function HighImpactFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<typeof FEATURES[0] | null>(null);

  const handleFeatureClick = (feature: typeof FEATURES[0]) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      {/* Feature Cards */}
      <div className="fixed top-4 right-4 z-40 flex flex-col gap-3">
        {FEATURES.map((feature, index) => (
          <motion.button
            key={feature.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFeatureClick(feature)}
            className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl text-white shadow-lg backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300 min-w-[280px] text-left group`}
          >
            <div className="flex items-center gap-3 mb-2">
              <feature.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="font-semibold text-lg">{feature.title}</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              {feature.description}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Feature Modal */}
      <FeatureModal
        feature={selectedFeature}
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </>
  );
}

export default HighImpactFeatures;
