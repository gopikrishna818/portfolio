import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Minimize2, Volume2, VolumeX, Brain, Cpu, Zap } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

// AI Portfolio Knowledge Base with Neural Network-like responses
const PORTFOLIO_KNOWLEDGE = {
  personal: {
    name: "Gopikrishna Chegoni",
    role: "Senior Full-Stack Developer & AI Engineer",
    location: "Available for Remote/Hybrid roles globally",
    experience: "5+ years in enterprise software development",
    specialties: ["React/TypeScript", "AI/ML", "Cloud Architecture", "System Design", "Performance Optimization"]
  },
  projects: [
    {
      name: "AI Data Pipeline System",
      tech: ["Python", "TensorFlow", "AWS Lambda", "Docker", "Kubernetes"],
      impact: "Reduced data processing time by 85%, handling 500K+ records daily",
      metrics: "99.9% uptime, <2s response time",
      description: "Enterprise-grade AI pipeline with real-time processing and intelligent caching"
    },
    {
      name: "Real-time Analytics Dashboard",
      tech: ["React", "TypeScript", "WebSocket", "D3.js", "Redis"],
      impact: "Improved decision-making speed by 60%",
      metrics: "50+ concurrent users, real-time updates",
      description: "Interactive dashboard with live data visualization and predictive analytics"
    },
    {
      name: "Microservices Architecture",
      tech: ["Node.js", "Docker", "Kubernetes", "PostgreSQL", "GraphQL"],
      impact: "Increased system scalability by 300%",
      metrics: "1M+ requests/day, auto-scaling enabled",
      description: "Containerized microservices with intelligent load balancing"
    }
  ],
  skills: {
    frontend: ["React 18", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Three.js", "Framer Motion"],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
    ai_ml: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Computer Vision", "NLP"],
    cloud: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    tools: ["Git", "Webpack", "Vite", "Jest", "Cypress", "Figma"]
  },
  achievements: [
    "Led team of 8 developers in enterprise application modernization",
    "Reduced application load time by 70% through performance optimization",
    "Implemented AI-driven recommendation system increasing user engagement by 45%",
    "Designed scalable architecture serving 1M+ daily active users"
  ]
};

// Advanced AI Response Engine with contextual understanding
class AdvancedAIAssistant {
  private knowledge = PORTFOLIO_KNOWLEDGE;
  private conversationContext: string[] = [];

  analyzeQuery(query: string): string {
    const lowerQuery = query.toLowerCase();
    this.conversationContext.push(lowerQuery);
    
    // Greeting responses with personality
    if (this.matchesPattern(lowerQuery, ['hello', 'hi', 'hey', 'greetings', 'sup'])) {
      return `🚀 Hello! I'm Gopikrishna's AI-powered portfolio assistant. I have deep knowledge about his technical expertise, project achievements, and professional background.

I can help you explore:
• 💻 Technical skills & architecture expertise
• 🤖 AI/ML projects & innovations  
• 📊 Performance metrics & business impact
• 🎯 Specific technologies & frameworks

What aspects interest you most?`;
    }

    // Experience & background queries
    if (this.matchesPattern(lowerQuery, ['experience', 'background', 'career', 'journey', 'work history'])) {
      return `🎯 **Professional Overview:**

Gopikrishna brings **${this.knowledge.personal.experience}** with a focus on high-impact solutions:

**🏆 Key Achievements:**
${this.knowledge.achievements.map(achievement => `• ${achievement}`).join('\n')}

**🎨 Core Expertise:** ${this.knowledge.personal.specialties.join(' • ')}

His track record shows consistent delivery of scalable, performance-optimized solutions. Want details about specific projects or technologies?`;
    }

    // Technical skills deep dive
    if (this.matchesPattern(lowerQuery, ['skills', 'technologies', 'tech stack', 'technical', 'programming'])) {
      return `⚡ **Technical Arsenal:**

**🎨 Frontend Excellence:**
${this.knowledge.skills.frontend.slice(0, 4).join(' • ')} + ${this.knowledge.skills.frontend.length - 4} more

**⚙️ Backend Mastery:**
${this.knowledge.skills.backend.slice(0, 4).join(' • ')} + ${this.knowledge.skills.backend.length - 4} more

**🤖 AI/ML Innovation:**
${this.knowledge.skills.ai_ml.slice(0, 4).join(' • ')} + ${this.knowledge.skills.ai_ml.length - 4} more

**☁️ Cloud & DevOps:**
${this.knowledge.skills.cloud.slice(0, 4).join(' • ')} + ${this.knowledge.skills.cloud.length - 4} more

💡 **Unique Strength:** Full-stack + AI expertise - rare combination for building intelligent applications.

Which technology area would you like to explore deeper?`;
    }

    // Project portfolio queries
    if (this.matchesPattern(lowerQuery, ['projects', 'portfolio', 'work', 'examples', 'achievements', 'built'])) {
      const projectSummary = this.knowledge.projects.map(p => 
        `**${p.name}**\n📊 ${p.impact}\n🔧 ${p.tech.slice(0, 3).join(', ')}\n⚡ ${p.metrics}`
      ).join('\n\n');
      
      return `🚀 **Featured Projects:**

${projectSummary}

Each project demonstrates expertise in different domains while maintaining focus on measurable business outcomes. Which project interests you most?`;
    }

    // Specific project deep dives
    const project = this.findProject(lowerQuery);
    if (project) {
      return `🎯 **${project.name} - Deep Dive:**

**📋 Overview:** ${project.description}

**💥 Business Impact:** ${project.impact}

**📊 Key Metrics:** ${project.metrics}

**🛠️ Tech Stack:** ${project.tech.join(' • ')}

**🎨 Technical Highlights:**
• Scalable architecture design
• Performance optimization focus  
• Enterprise-grade security
• Real-time processing capabilities

This showcases expertise in ${project.tech[0]} and demonstrates ability to deliver production-ready solutions with measurable business value.`;
    }

    // Contact & hiring queries
    if (this.matchesPattern(lowerQuery, ['hire', 'contact', 'available', 'email', 'reach', 'interview', 'opportunity'])) {
      return `💼 **Ready for New Opportunities!**

📍 **Availability:** ${this.knowledge.personal.location}
🎯 **Ideal Roles:** Senior Full-Stack, Tech Lead, AI Engineer positions

**🤝 Get in Touch:**
• 📧 Use the contact form below for detailed inquiries
• 💼 Connect on LinkedIn for professional networking
• 📅 Schedule technical discussion through contact section
• 📄 Download resume for comprehensive background

**🔥 Particularly interested in:**
• Large-scale system architecture
• AI-driven product development  
• Performance-critical applications
• Technical leadership roles

Ready to discuss how his expertise can drive your team's success!`;
    }

    // AI/ML specific deep dive
    if (this.matchesPattern(lowerQuery, ['ai', 'machine learning', 'artificial intelligence', 'ml', 'neural', 'deep learning'])) {
      return `🤖 **AI/ML Expertise Portfolio:**

**🛠️ Technologies:** ${this.knowledge.skills.ai_ml.join(' • ')}

**🚀 Real-world Applications:**
• **Predictive Analytics:** Built models increasing accuracy by 40%
• **Computer Vision:** Real-time object detection with <100ms latency  
• **NLP Processing:** Intelligent text analysis for enterprise applications
• **Recommendation Systems:** ML-driven personalization boosting engagement 45%

**📊 Business Impact Examples:**
• AI pipeline processing 500K+ records daily (85% time reduction)
• Intelligent caching reducing infrastructure costs by 30%
• Automated decision-making improving operational efficiency 60%

**🎯 Unique Value:** Combines deep ML knowledge with production engineering - can build AND deploy AI solutions at scale.

Want specifics about any AI project or methodology?`;
    }

    // React/Frontend specific queries  
    if (this.matchesPattern(lowerQuery, ['react', 'frontend', 'ui', 'typescript', 'next.js', 'javascript'])) {
      return `⚡ **Frontend Excellence Showcase:**

**🎨 This Portfolio Demonstrates:**
• **React 18** with advanced TypeScript patterns
• **Performance:** Lazy loading, code splitting, optimized bundles
• **Animations:** Framer Motion with 60fps smooth interactions
• **3D Integration:** Three.js for immersive experiences  
• **Modern Tooling:** Vite, Tailwind CSS, Radix UI

**🏆 Production Achievements:**
• 70% load time reduction through optimization
• 99.9% accessibility compliance
• Mobile-first responsive design
• SEO-optimized with perfect Lighthouse scores

**💡 Advanced Patterns:**
• Custom hooks for complex state management
• Higher-order components for reusability
• Micro-frontend architecture
• Progressive web app capabilities

The technical implementation here demonstrates senior-level frontend architecture and performance optimization skills.`;
    }

    // Backend/Architecture queries
    if (this.matchesPattern(lowerQuery, ['backend', 'api', 'database', 'architecture', 'scalability', 'node.js'])) {
      return `⚙️ **Backend & Architecture Mastery:**

**🏗️ System Design Expertise:**
• **Microservices:** Containerized architecture handling 1M+ requests/day
• **Database Design:** Optimized PostgreSQL/MongoDB for high-performance
• **API Development:** RESTful & GraphQL with intelligent caching
• **Real-time Systems:** WebSocket implementation for live features

**📊 Scalability Achievements:**  
• 300% system scalability improvement
• Auto-scaling Kubernetes clusters
• Redis caching reducing response times to <50ms
• Load balancing across multiple regions

**🛡️ Enterprise Features:**
• JWT authentication with refresh token rotation
• Rate limiting and DDoS protection
• Comprehensive logging and monitoring
• Automated backup and disaster recovery

**💡 Architecture Philosophy:** Build for scale from day one, optimize for performance, maintain clean code standards.

Want to dive deeper into any specific backend technology or pattern?`;
    }

    // Performance & optimization queries
    if (this.matchesPattern(lowerQuery, ['performance', 'optimization', 'speed', 'fast', 'efficient'])) {
      return `⚡ **Performance Optimization Expertise:**

**🚀 Proven Results:**
• **70% load time reduction** in enterprise applications
• **85% data processing efficiency** improvement  
• **<2s response times** for complex operations
• **99.9% uptime** for production systems

**🔧 Optimization Techniques:**
• **Frontend:** Code splitting, lazy loading, image optimization, CDN
• **Backend:** Database indexing, query optimization, intelligent caching
• **Infrastructure:** Auto-scaling, load balancing, edge computing
• **Monitoring:** Real-time performance tracking and alerting

**📊 Tools & Methodologies:**
• Lighthouse audits achieving perfect scores
• Bundle analysis and optimization
• Database query profiling
• Memory leak detection and resolution

**💡 Philosophy:** Performance is a feature, not an afterthought. Every optimization should have measurable business impact.

Which performance area interests you most?`;
    }

    // Leadership & team queries
    if (this.matchesPattern(lowerQuery, ['team', 'leadership', 'management', 'mentor', 'lead'])) {
      return `👥 **Technical Leadership Experience:**

**🎯 Team Achievements:**
• Led team of **8 developers** in enterprise modernization
• Mentored junior developers advancing 3 to senior roles
• Established coding standards improving code quality 40%
• Implemented agile practices reducing delivery time 30%

**🛠️ Technical Mentorship:**
• Code review processes ensuring quality standards
• Knowledge sharing sessions on advanced patterns
• Architecture decision documentation
• Performance optimization workshops

**📊 Process Improvements:**
• CI/CD pipeline reducing deployment time 80%
• Testing strategies achieving 95% code coverage
• Documentation standards for maintainable code
• Cross-team collaboration protocols

**💡 Leadership Style:** Lead by example, empower team members, focus on continuous learning and measurable outcomes.

Interested in leadership methodologies or team building strategies?`;
    }

    // Context-aware follow-up responses
    if (this.conversationContext.length > 1) {
      const previousContext = this.conversationContext[this.conversationContext.length - 2];
      
      if (previousContext.includes('project') && lowerQuery.includes('more')) {
        return `Want even more project details? Here's additional context:

**🔧 Technical Challenges Solved:**
• Designed fault-tolerant systems with 99.9% uptime
• Implemented real-time data synchronization across regions  
• Built intelligent monitoring with predictive alerts
• Created automated deployment pipelines

**📈 Business Metrics:**
• Reduced infrastructure costs by 35%
• Improved user satisfaction scores by 50%
• Decreased bug reports by 60%
• Accelerated feature delivery by 40%

Each project demonstrates full-stack thinking with business impact focus.`;
      }
    }

    // Default response with intelligent suggestions
    return `🤖 **I'm here to help you explore Gopikrishna's expertise!**

Based on your query, you might be interested in:

**🎯 Popular Topics:**
• "What are his AI/ML achievements?" 
• "Tell me about his scalability experience"
• "Show me his React expertise"
• "How can we discuss opportunities?"

**💡 Pro Tip:** I can provide detailed technical information, project metrics, and specific examples. Try asking about particular technologies or business outcomes!

What specific aspect of his background interests you most?`;
  }

  private matchesPattern(query: string, patterns: string[]): boolean {
    return patterns.some(pattern => query.includes(pattern));
  }

  private findProject(query: string): typeof PORTFOLIO_KNOWLEDGE.projects[0] | null {
    return this.knowledge.projects.find(project => 
      project.name.toLowerCase().includes(query) ||
      project.tech.some(tech => query.includes(tech.toLowerCase())) ||
      query.includes(project.name.toLowerCase().replace(/\s+/g, ''))
    ) || null;
  }
}

interface EnhancedAIAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function EnhancedAIAssistant({ isOpen, onToggle }: EnhancedAIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "🚀 Hello! I'm Gopikrishna's advanced AI assistant powered by neural networks. I have comprehensive knowledge about his technical expertise, project achievements, and professional background.\n\nI can provide detailed insights about his skills, projects, and experience. What would you like to explore?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const aiAssistant = useRef(new AdvancedAIAssistant());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const speakMessage = (text: string) => {
    if (isSpeechEnabled && 'speechSynthesis' in window) {
      // Remove markdown formatting for speech
      const cleanText = text.replace(/[*_`#]/g, '').replace(/•/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.7;
      speechSynthesis.speak(utterance);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate neural network processing time
    setTimeout(() => {
      const aiResponse = aiAssistant.current.analyzeQuery(inputValue);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      
      speakMessage(aiResponse);
    }, 800 + Math.random() * 1500); // Realistic AI processing time
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "🚀 What are his main skills?",
    "🤖 Tell me about AI projects",
    "📊 Show performance metrics", 
    "💼 How to contact him?"
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        className="fixed inset-4 md:right-4 md:bottom-4 md:top-auto md:left-auto md:w-[420px] md:h-[650px] bg-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 z-50 flex flex-col overflow-hidden"
      >
        {/* Advanced Header with Neural Network Styling */}
        <div className="relative flex items-center justify-between p-4 border-b border-purple-500/20 bg-gradient-to-r from-purple-900/40 via-blue-900/40 to-purple-900/40">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative p-2 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full"
            >
              <Brain className="w-5 h-5 text-purple-300" />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 bg-purple-400/20 rounded-full blur-sm"
              />
            </motion.div>
            <div>
              <h3 className="font-bold text-white flex items-center gap-2">
                Neural AI Assistant
                <Cpu className="w-4 h-4 text-blue-400" />
              </h3>
              <p className="text-xs text-purple-300 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Advanced Portfolio Intelligence
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsSpeechEnabled(!isSpeechEnabled)}
              className="p-2 hover:bg-purple-500/20 rounded-full transition-all duration-300 group"
            >
              {isSpeechEnabled ? (
                <Volume2 className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
              ) : (
                <VolumeX className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
              )}
            </button>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-purple-500/20 rounded-full transition-all duration-300 group"
            >
              <Minimize2 className="w-4 h-4 text-gray-400 group-hover:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Messages with Better Typography */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/90 text-gray-100 border border-purple-500/20 shadow-lg backdrop-blur-sm'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line font-medium">
                  {message.content}
                </p>
                <p className="text-xs opacity-60 mt-2 flex items-center gap-1">
                  <span>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  {message.type === 'assistant' && (
                    <Brain className="w-3 h-3" />
                  )}
                </p>
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-start"
            >
              <div className="bg-gray-800/90 border border-purple-500/20 p-4 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-purple-300">Neural processing...</span>
                </div>
                <div className="flex space-x-1 mt-2">
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{ 
                        duration: 1.2, 
                        repeat: Infinity, 
                        delay: i * 0.2 
                      }}
                      className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Enhanced Quick Questions */}
        <div className="px-4 py-3 border-t border-purple-500/20 bg-gray-900/50">
          <div className="flex flex-wrap gap-2">
            {quickQuestions.map((question, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setInputValue(question.replace(/[🚀🤖📊💼]/g, '').trim())}
                className="text-xs px-3 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-purple-300 rounded-xl transition-all duration-300 border border-purple-500/20"
              >
                {question}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Advanced Input with Neural Styling */}
        <div className="p-4 border-t border-purple-500/20 bg-gray-900/30">
          <div className="flex space-x-3">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about technical expertise, projects, or experience..."
                className="w-full bg-gray-800/70 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 backdrop-blur-sm"
              />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Bot className="w-4 h-4 text-purple-400" />
              </motion.div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed rounded-xl transition-all duration-300 shadow-lg"
            >
              <Send className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
