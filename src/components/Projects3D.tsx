import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, TrendingUp, Globe, Grid, Clock, Star, GitBranch } from 'lucide-react';
import './projects-3d.css';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  impact: string;
  tech: string[];
  metrics: { [key: string]: string };
  color: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
}

const Projects3D = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'sphere' | 'carousel'>('grid');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();

  const projects: Project[] = [
    {
      id: 'ai-content',
      title: 'AI Content Strategy Engine',
      subtitle: 'Trend Discovery & Content Planning Platform',
      description: 'AI-powered dashboard for real-time trend discovery, competitor analysis, and auto-generated content strategies across platforms.',
      category: 'AI/ML',
      impact: '$180K revenue increase',
      tech: ['Python', 'OpenAI API', 'React', 'FastAPI', 'PostgreSQL'],
      metrics: { roi: '950%', time_saved: '80%', accuracy: '95%' },
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/ai-content-engine',
      liveUrl: 'https://ai-content-demo.vercel.app',
      stars: 42,
      forks: 15,
      featured: true
    },
    {
      id: 'financial-ai',
      title: 'Financial Document Analysis AI',
      subtitle: 'Intelligent Document Processing & Fraud Detection',
      description: 'Advanced ML system for automated financial document analysis, fraud detection, and compliance checking.',
      category: 'FinTech',
      impact: '2400% faster processing',
      tech: ['Machine Learning', 'Python', 'TensorFlow', 'AWS', 'OpenCV'],
      metrics: { accuracy: '95%', speed: '2400%', reduction: '60%' },
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/financial-ai',
      stars: 38,
      forks: 12,
      featured: true
    },
    {
      id: 'api-rotator',
      title: 'Google Gemini API Rotator',
      subtitle: 'Enterprise Automation & Workflow System',
      description: 'Node.js server with intelligent API key rotation, n8n workflows, and comprehensive automation infrastructure.',
      category: 'Enterprise',
      impact: '99.9% uptime achieved',
      tech: ['Node.js', 'n8n', 'Supabase', 'Docker', 'Vercel'],
      metrics: { uptime: '99.9%', requests: '10M+', latency: '50ms' },
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/gemini-key-rotator',
      liveUrl: 'https://gemini-rotator-demo.vercel.app',
      stars: 24,
      forks: 8,
      featured: true
    },
    {
      id: 'data-warehouse',
      title: 'Snowflake Data Warehouse',
      subtitle: 'Real-time Analytics & Business Intelligence',
      description: 'Scalable data warehouse with real-time analytics, automated reporting, and interactive dashboards.',
      category: 'Data Engineering',
      impact: '95% faster dashboards',
      tech: ['Snowflake', 'SQL', 'Python', 'Tableau', 'dbt'],
      metrics: { performance: '95%', volume: '10TB+', queries: '1000+/day' },
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/snowflake-warehouse',
      stars: 31,
      forks: 10,
      featured: false
    }
  ];

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const renderGridView = () => {
    return (
      <div 
        className="grid md:grid-cols-2 gap-8"
        style={{ perspective: '1000px' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, rotateY: -30, z: -100 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, rotateY: 0, z: 0 }
            }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ 
              rotateY: 5, 
              rotateX: 5, 
              scale: 1.02,
              z: 50
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setSelectedProject(project.id)}
            className="relative group cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className={`
              glass-enhanced p-8 rounded-2xl border relative overflow-hidden
              bg-gradient-to-br ${project.color}/10 hover:${project.color}/20
              transition-all duration-500 h-full
            `}>
              {/* 3D Background Effect */}
              <motion.div
                animate={hoveredProject === project.id ? {
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                } : {}}
                transition={{ duration: 3, repeat: Infinity }}
                className={`absolute inset-0 bg-gradient-to-br ${project.color}/5 rounded-2xl opacity-50`}
                style={{ transformStyle: 'preserve-3d' }}
              />

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold"
                >
                  ⭐ FEATURED
                </motion.div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotateY: 180 }}
                        className="p-2 glass-enhanced rounded-lg cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotateY: 180 }}
                        className="p-2 glass-enhanced rounded-lg cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
                <p className="text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Impact Metric */}
                <div className={`bg-gradient-to-r ${project.color}/20 rounded-lg p-3 mb-4`}>
                  <p className="text-sm font-medium">{project.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-muted rounded text-xs">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* GitHub Stats */}
                {(project.stars || project.forks) && (
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    {project.stars && (
                      <div className="flex items-center space-x-1">
                        <Star size={12} />
                        <span>{project.stars}</span>
                      </div>
                    )}
                    {project.forks && (
                      <div className="flex items-center space-x-1">
                        <GitBranch size={12} />
                        <span>{project.forks}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Hover Effect - Detailed Metrics */}
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-border pt-4 mt-4"
                    >
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const renderSphereView = () => {
    const radius = 150;
    
    return (
      <div className="relative w-96 h-96 mx-auto" style={{ perspective: '1000px' }}>
        {projects.map((project, index) => {
          const angle = (index / projects.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const z = Math.sin(angle * 2) * 50;
          
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: x + 192,
                y: y + 192,
                z: z
              }}
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.4, 
                z: z + 100,
                rotateY: 15,
                rotateX: 10
              }}
              className="absolute cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project.id)}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <div 
                className="w-20 h-20 rounded-xl flex flex-col items-center justify-center text-white font-bold text-xs shadow-2xl transition-all duration-300 overflow-hidden"
                style={{ 
                  background: `linear-gradient(135deg, ${project.color.split(' ')[1]}, ${project.color.split(' ')[3]})`,
                  boxShadow: `0 20px 40px ${project.color.split(' ')[1]}40`
                }}
              >
                <div className="text-center p-2">
                  <div className="text-xs font-bold mb-1">{project.category}</div>
                  <div className="text-[10px] leading-tight">{project.title.split(' ').slice(0, 2).join(' ')}</div>
                </div>
              </div>
              
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 w-64 z-10 shadow-xl"
                >
                  <h4 className="font-bold text-sm mb-2">{project.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{project.description}</p>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground">{key.replace('_', ' ')}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        
        {/* Central Hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl"
        >
          <Globe size={36} className="text-white" />
        </motion.div>
      </div>
    );
  };

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Interactive showcase of impactful solutions built with cutting-edge technologies. 
            Each project demonstrates measurable business value and technical excellence.
          </p>
        </motion.div>

        {/* View Mode Selector */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-2 mb-12"
        >
          {[
            { mode: 'grid' as const, label: 'Grid View', icon: Grid },
            { mode: 'sphere' as const, label: 'Sphere View', icon: Globe },
          ].map(({ mode, label, icon: Icon }) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                viewMode === mode
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 1, delay: 0.4 }}
          className="min-h-[500px] flex items-center justify-center"
        >
          {viewMode === 'grid' && renderGridView()}
          {viewMode === 'sphere' && renderSphereView()}
        </motion.div>

        {/* Project Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-background via-muted/50 to-background backdrop-blur-sm border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Project Impact Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                <p className="text-sm text-muted-foreground">Featured Projects</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-500 mb-2">$950K+</div>
                <p className="text-sm text-muted-foreground">Total ROI Generated</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Average Uptime</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">135+</div>
                <p className="text-sm text-muted-foreground">GitHub Stars</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, rotateY: -30 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 30 }}
              className="bg-background border border-border rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground">{project.subtitle}</p>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-muted rounded-lg transition-colors"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <p className="mb-6">{project.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-muted rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Key Metrics</h4>
                        <div className="space-y-2">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-sm text-muted-foreground capitalize">
                                {key.replace('_', ' ')}:
                              </span>
                              <span className="text-sm font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          <Github size={16} />
                          <span>View Code</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects3D;
