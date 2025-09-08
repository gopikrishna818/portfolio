import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react';

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

const ModalAIAssistant = () => {
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
    },
    {
      id: 'achievements',
      label: 'Achievements',
      question: 'What are his key achievements and impact?',
      icon: '🏆'
    },
    {
      id: 'education',
      label: 'Education',
      question: 'What is his educational background?',
      icon: '🎓'
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
    if (messages.length === 0) {
      // Initial greeting
      const greeting: Message = {
        id: '1',
        type: 'assistant',
        content: "👋 Hello! I'm JARVIS, Gopikrishna's AI assistant. I can answer questions about his experience, skills, projects, and more. How can I help you today?",
        timestamp: new Date()
      };
      setMessages([greeting]);
    }
  }, []);

  const generateResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowercaseMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Default responses for common queries
    if (lowercaseMessage.includes('hello') || lowercaseMessage.includes('hi')) {
      return "Hello! I'm here to help you learn about Gopikrishna's professional background. You can ask me about his experience, skills, projects, or any other aspect of his portfolio.";
    }

    if (lowercaseMessage.includes('help')) {
      return "I can help you with information about:\n• Work experience and career highlights\n• Technical skills and expertise\n• Project portfolio and achievements\n• Contact information and availability\n• Educational background\n\nJust ask me anything you'd like to know!";
    }

    return "That's an interesting question! While I have extensive knowledge about Gopikrishna's professional background, I might not have specific information about that topic. Feel free to ask me about his experience, skills, projects, achievements, or how to get in touch with him.";
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim() || isTyping) return;

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
    }, 800 + Math.random() * 800);
  };

  const resetConversation = () => {
    setMessages([{
      id: '1',
      type: 'assistant',
      content: "👋 Hello! I'm JARVIS, Gopikrishna's AI assistant. How can I help you today?",
      timestamp: new Date()
    }]);
    setCurrentMessage('');
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col h-full max-h-[600px] bg-background rounded-lg border border-border">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-card/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">JARVIS</h3>
            <p className="text-xs text-muted-foreground">AI Portfolio Assistant</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className={`p-2 rounded-lg transition-colors ${
              voiceEnabled ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button
            onClick={resetConversation}
            className="p-2 bg-muted text-muted-foreground hover:bg-muted/80 rounded-lg transition-colors"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent"
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
              <pre className="whitespace-pre-wrap font-sans">{message.content}</pre>
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
      <div className="p-4 border-t border-border bg-card/25">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {quickActions.map((action) => (
            <button
              key={action.id}
              onClick={() => handleQuickAction(action)}
              className="flex items-center space-x-2 p-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors text-xs"
            >
              <span>{action.icon}</span>
              <span className="truncate">{action.label}</span>
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
            className="flex-1 px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
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
    </div>
  );
};

export default ModalAIAssistant;
