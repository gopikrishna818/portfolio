import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Minimize2, Maximize2, Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
}

interface QuickAction {
  id: string;
  label: string;
  question: string;
  icon: string;
}

const AIPortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    {
      id: 'experience',
      label: 'Experience',
      question: 'Tell me about Gopikrishna\'s work experience',
      icon: '💼'
    },
    {
      id: 'skills',
      label: 'Technical Skills',
      question: 'What are his main technical skills?',
      icon: '🛠️'
    },
    {
      id: 'projects',
      label: 'Key Projects',
      question: 'Show me his most impressive projects',
      icon: '🚀'
    },
    {
      id: 'contact',
      label: 'Contact Info',
      question: 'How can I get in touch with him?',
      icon: '📞'
    }
  ];

  // Knowledge base about the portfolio
  const knowledgeBase = {
    experience: {
      keywords: ['experience', 'work', 'job', 'career', 'professional'],
      response: "Gopikrishna has 3+ years of experience as an AI & Data-Driven Software Engineer. He's currently working as a Software Engineer at KreativeTimebox, where he has delivered 15+ projects with 95% client satisfaction. His experience includes developing AI automation systems, financial document analysis platforms, and real-time data warehouses. He has achieved impressive results like $950K+ total ROI generated across projects and 60% cost reduction in operational processes."
    },
    skills: {
      keywords: ['skills', 'technologies', 'tech', 'programming', 'languages', 'tools'],
      response: "His core technical skills include Python, JavaScript/TypeScript, React, FastAPI, Machine Learning, SQL, and cloud technologies. He specializes in AI/ML development, data engineering, full-stack development, and automation. He's proficient with tools like Snowflake, Docker, MongoDB, PostgreSQL, and various APIs. His expertise spans from building ML models to creating scalable web applications and data pipelines."
    },
    projects: {
      keywords: ['projects', 'portfolio', 'work', 'built', 'developed', 'created'],
      response: "His standout projects include: 1) AI Content Strategy Engine - automated content research saving 80% time and generating $180K additional revenue. 2) Financial Document Analysis AI - achieved 95% accuracy in fraud detection and 2400% faster processing. 3) Google Gemini API Rotator - enterprise automation system with 99.9% uptime. 4) Snowflake Data Warehouse - real-time analytics with 95% faster dashboard generation. All projects focus on delivering measurable business value."
    },
    contact: {
      keywords: ['contact', 'reach', 'email', 'phone', 'hire', 'available', 'connect'],
      response: "Certainly! You can reach Gopikrishna through multiple channels: Email at gopikrishna.chegoni@email.com (responds within 6 hours), LinkedIn for professional networking, or schedule a 30-minute consultation via his calendar link. He's currently available for full-time opportunities and is open to relocation. He guarantees response to all messages within 24 hours and is ready for remote work worldwide."
    },
    achievements: {
      keywords: ['achievements', 'accomplishments', 'results', 'impact', 'roi'],
      response: "His key achievements include: $950K+ total ROI generated across projects, 60% average cost reduction for clients, 95% client satisfaction rate, 99.9% system uptime for critical applications, and 15+ successfully delivered projects. He has improved fraud detection accuracy by 40%, reduced data processing time by 2400%, and automated manual workflows saving significant operational costs."
    },
    education: {
      keywords: ['education', 'degree', 'university', 'college', 'study'],
      response: "He holds a Bachelor's degree in Computer Science with a focus on AI and machine learning. During his studies, he completed multiple projects in web development and data analysis, building a strong foundation in computer science principles. He continues learning through certifications and stays current with the latest AI/ML trends and technologies."
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting
      const greeting: Message = {
        id: '1',
        type: 'assistant',
        content: "👋 Hello! I'm JARVIS, Gopikrishna's AI assistant. I can answer questions about his experience, skills, projects, and more. How can I help you today?",
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  }, [isOpen]);

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Check each category in knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => message.includes(keyword))) {
        return data.response;
      }
    }

    // Specific question patterns
    if (message.includes('hire') || message.includes('available')) {
      return "Absolutely! Gopikrishna is actively seeking new opportunities and is available for full-time positions. He's open to relocation and remote work. His current availability status shows he's ready for new projects and you can contact him directly through his portfolio contact form or email.";
    }

    if (message.includes('salary') || message.includes('rate')) {
      return "For salary expectations and rates, I'd recommend discussing this directly with Gopikrishna during a consultation. You can schedule a call or send him an email to discuss compensation based on the specific role and requirements.";
    }

    if (message.includes('location') || message.includes('where')) {
      return "Gopikrishna is based in Hyderabad, India, but is open to relocation worldwide and prefers remote-friendly opportunities. He's available for full-time work in any timezone and has experience working with international teams.";
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello there! JARVIS at your service. I'm here to help you learn about Gopikrishna's professional background. Feel free to ask about his experience, projects, skills, or anything else you'd like to know!";
    }

    // Default response
    return "I'm JARVIS, and I'd be happy to help! You can ask me about Gopikrishna's work experience, technical skills, key projects, achievements, education, or contact information. Try asking something like 'What are his main skills?' or 'Tell me about his projects'. You can also use the quick action buttons below for common questions!";
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(currentMessage);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);

      // Text-to-speech if enabled
      if (voiceEnabled && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(response);
        utterance.rate = 0.8;
        utterance.pitch = 0.9;
        speechSynthesis.speak(utterance);
      }
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickAction = (action: QuickAction) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: action.question,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(action.question);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);

      // Text-to-speech if enabled
      if (voiceEnabled && 'speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(response);
        utterance.rate = 0.8;
        utterance.pitch = 0.9;
        speechSynthesis.speak(utterance);
      }
    }, 1000 + Math.random() * 1000);
  };

  const clearConversation = () => {
    setMessages([{
      id: '1',
      type: 'assistant',
      content: "👋 Hello! I'm JARVIS, Gopikrishna's AI assistant. I can answer questions about his experience, skills, projects, and more. How can I help you today?",
      timestamp: new Date()
    }]);
  };

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      >
        <Bot size={24} className="text-white" />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-full"
        />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        width: isMinimized ? '320px' : '400px',
        height: isMinimized ? '60px' : '600px'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-6 right-6 bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl z-50 flex flex-col"
      style={{ maxHeight: '600px' }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot size={16} className="text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">JARVIS</h3>
            <p className="text-white/80 text-xs">Ask about Gopikrishna</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            title={voiceEnabled ? 'Disable voice' : 'Enable voice'}
          >
            {voiceEnabled ? (
              <Volume2 size={16} className="text-white" />
            ) : (
              <VolumeX size={16} className="text-white/60" />
            )}
          </button>
          <button
            onClick={clearConversation}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            title="Clear conversation"
          >
            <RotateCcw size={16} className="text-white" />
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            title={isMinimized ? 'Maximize' : 'Minimize'}
          >
            {isMinimized ? (
              <Maximize2 size={16} className="text-white" />
            ) : (
              <Minimize2 size={16} className="text-white" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded transition-colors text-white font-bold text-lg leading-none"
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Chat Content */}
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col flex-1 min-h-0"
          >
            {/* Messages */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent"
              style={{ 
                maxHeight: '400px'
              }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-muted p-3 rounded-lg flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">Thinking...</span>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-border flex-shrink-0">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {quickActions.map((action) => (
                  <button
                    key={action.id}
                    onClick={() => handleQuickAction(action)}
                    className="flex items-center space-x-2 p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-xs"
                  >
                    <span>{action.icon}</span>
                    <span>{action.label}</span>
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about experience, skills, projects..."
                  className="flex-1 px-3 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim() || isTyping}
                  className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sparkle Animation */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute top-2 right-12 text-yellow-400"
      >
        <Sparkles size={12} />
      </motion.div>
    </motion.div>
  );
};

export default AIPortfolioAssistant;
