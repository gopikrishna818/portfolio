import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Bot, TrendingUp, Github, X, Grid } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import InteractiveCodePlayground from './InteractiveCodePlayground';
interface FloatingButtonProps {
  icon: React.ComponentType<any>;
  label: string;
  color: string;
  onClick: () => void;
}

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


// MAIN COMPONENT
const FloatingFeatureButtons = () => {
  // State for feature expansion
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState<any>(null);

  // AI Assistant state
  const [aiInput, setAiInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: string; message: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const suggestedQuestions = [
    "Tell me about yourself",
    "What are your top skills?",
    "What is your education background?",
    "Describe your experience",
    "Show me your projects",
    "How can I contact you?"
  ];

  // Handlers
  const toggleExpand = () => setIsExpanded((v) => !v);
  const openModal = (feature: any) => {
    setActiveModal(feature.key);
    setActiveFeature(feature);
  };
  const closeModal = () => {
    setActiveModal(null);
    setActiveFeature(null);
  };
  const handleAISubmit = async (input: string) => {
    if (!input.trim()) return;
    setChatHistory((h) => [...h, { sender: 'user', message: input }]);
    setAiInput('');
    setIsTyping(true);

    // Expanded FAQ logic for about, skills, education, experience, projects, contact
    let answer = "Sorry, I couldn't find an answer. Please try another question!";
    const lower = input.toLowerCase();
    if (lower.includes('about') || lower.includes('yourself') || lower.includes('bio')) {
      answer = `I'm Gopikrishna Chegoni, a Computer Science & Engineering graduate (Data Science specialization) with a passion for AI, automation, and full-stack development. I love building impactful solutions and have experience in both industry and personal projects.`;
    } else if (lower.includes('top skills') || lower.includes('your skills') || lower.includes('what skills')) {
      answer = `My top skills are:\n- Python (Advanced data science & web dev)\n- JavaScript (Modern ES6+ & frontend)\n- TypeScript (Type-safe dev)\n- SQL (Complex queries & optimization)\n- React, Node.js, FastAPI, Machine Learning, Data Analysis, Docker, AWS, Git/GitHub.`;
    } else if (lower.includes('education') || lower.includes('study') || lower.includes('degree')) {
      answer = `Education:\n- B.Tech in Computer Science & Engineering (Data Science), Guru Nanak Institutions, Hyderabad, 2020-2024, CGPA: 8.42/10\n- Intermediate (12th), Narayana Junior College, Hyderabad, 2018-2020, 980/1000 marks`;
    } else if (lower.includes('experience') || lower.includes('work') || lower.includes('intern')) {
      answer = `Experience:\n- Machine Learning Intern at KreativeTimebox (May-Aug 2025): Built document intelligence systems, 95%+ accuracy, FastAPI, ML, Agile.\n- Data Analyst Intern at IBM Skill Build (Jun-Jul 2023): Data analysis, dashboards, SQL, Python.`;
    } else if (lower.includes('project')) {
  answer = `Key Projects:\n1. SmartDoc Parser: OCR & LLM-powered parser, 90%+ accuracy, DocTr, PaddleOCR, LangChain.\n2. AI Lead-Gen Automation: End-to-end AI-driven prospecting, n8n, Supabase, Retell AI, Google Gemini.\n3. AI Content Strategy Engine: Trend discovery, OpenAI GPT, real-time data, content plans.\nSee more at: https://github.com/gopikrishna818`;
    } else if (lower.includes('certification')) {
      answer = `Certifications:\n- Python for Data Science (NPTEL IIT Madras, 2024)\n- Java Full Stack (Wipro, 2024)\n- Java Full Stack Development (MERN, Pregrad, 2024)`;
    } else if (lower.includes('contact') || lower.includes('email') || lower.includes('linkedin')) {
  answer = `You can contact me at gopikrishna818@gmail.com or via LinkedIn: http://www.linkedin.com/in/gopikrishnachegoni`;
    }

    setTimeout(() => {
      setChatHistory((h) => [...h, { sender: 'ai', message: answer }]);
      setIsTyping(false);
    }, 1200);
  };
  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isTyping]);

  // Features
  const features = [
    { key: 'ai-assistant', icon: Bot, label: 'AI Assistant', color: 'from-purple-600 to-indigo-600' },
    { key: 'github-activity', icon: Github, label: 'GitHub', color: 'from-blue-600 to-cyan-600' },
    { key: 'code-playground', icon: Terminal, label: 'Code Playground', color: 'from-green-600 to-lime-600' },
    { key: 'data-analytics', icon: TrendingUp, label: 'Data Analytics', color: 'from-orange-500 to-yellow-400' },
  ];

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        <AnimatePresence>
          {isExpanded && features.map((feature, idx) => (
            <div key={feature.key} className="mb-2">
              <FloatingButton
                icon={feature.icon}
                label={feature.label}
                color={feature.color}
                onClick={() => openModal(feature)}
              />
            </div>
          ))}
        </AnimatePresence>
        {/* Main Toggle Button - Simplified */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleExpand}
          className={`w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${isExpanded ? 'rotate-45' : ''}`}
          title={isExpanded ? 'Close Features' : 'Open Features'}
        >
          {isExpanded ? (
            <X className="w-5 h-5" />
          ) : (
            <Grid className="w-5 h-5" />
          )}
        </motion.button>
      </div>

      {/* Modals */}
      <Dialog open={!!activeModal} onOpenChange={closeModal}>
  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700 mt-20">
          <DialogHeader>
            <DialogTitle className="text-white">
              {activeFeature?.label}
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            {activeModal === 'ai-assistant' && (
              <div className="text-white text-center py-8">
                <Bot className="w-16 h-16 mx-auto mb-4 text-purple-400 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">Jarvis - Your AI Assistant</h3>
                <p className="text-gray-300 mb-4">Hi! I'm Jarvis. Ask me anything about Gopikrishna's portfolio, skills, projects, or career. Try a suggested question below or type your own!</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {suggestedQuestions.map((q) => (
                    <button
                      key={q}
                      className="px-3 py-1 bg-purple-700/80 rounded text-xs hover:bg-purple-600 transition shadow"
                      onClick={() => handleAISubmit(q)}
                      disabled={isTyping}
                    >
                      {q}
                    </button>
                  ))}
                </div>
                <div className="bg-gray-900/80 rounded-lg p-3 mb-3 max-h-64 overflow-y-auto text-left border border-purple-700/30 shadow-inner scrollbar-thin scrollbar-thumb-purple-700/40 scrollbar-track-gray-900" style={{ minHeight: '120px' }}>
                  {chatHistory.length === 0 && (
                    <div className="text-gray-500 text-sm text-center">👋 Hello! How can I assist you today?</div>
                  )}
                  {chatHistory.map((msg, idx) => (
                    <div key={idx} className={`flex mb-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`px-4 py-2 rounded-2xl max-w-xs text-sm whitespace-pre-line shadow ${msg.sender === 'user' ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white ml-auto' : 'bg-gray-800 text-purple-200 mr-auto border border-purple-700/40'}`}>
                        {msg.sender === 'user' ? <span className="font-semibold">You:</span> : <span className="font-semibold">Jarvis:</span>} {msg.message}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start mb-2">
                      <div className="px-4 py-2 rounded-2xl max-w-xs text-sm bg-gray-800 text-purple-200 border border-purple-700/40 animate-pulse">
                        <span className="italic text-gray-400">Jarvis is typing...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
                <div className="flex gap-2 mt-2">
                  <input
                    className="flex-1 p-2 rounded bg-gray-800 text-white border border-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Type your question for Jarvis and press Enter..."
                    value={aiInput}
                    onChange={e => setAiInput(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleAISubmit(aiInput); }}
                    disabled={isTyping}
                    autoFocus
                  />
                  <button
                    className="px-4 py-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded text-white font-semibold shadow hover:from-purple-700 hover:to-indigo-700 transition"
                    onClick={() => handleAISubmit(aiInput)}
                    disabled={isTyping}
                  >
                    {isTyping ? 'Thinking...' : 'Send'}
                  </button>
                </div>
              </div>
            )}
            {activeModal === 'github-activity' && (
              <div className="text-white text-center py-8">
                <Github className="w-16 h-16 mx-auto mb-4 text-blue-400 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">GitHub Activity & Profile</h3>
                <div className="flex flex-col items-center justify-center gap-4 mb-4">
                  <div className="bg-gray-800/80 rounded-xl p-4 border border-blue-700/30 shadow-lg max-w-xs w-full">
                    <img src="https://avatars.githubusercontent.com/u/10298297?v=4" alt="Gopikrishna's Avatar" className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-blue-400 shadow" />
                    <div className="font-bold text-lg">Gopikrishna Chegoni</div>
                    <div className="text-blue-400 text-sm mb-1">@gopikrishna818</div>
                    <a href="https://github.com/gopikrishna818" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-3 py-1 bg-blue-600/80 rounded text-white font-semibold hover:bg-blue-700 transition">View Full GitHub Profile</a>
                  </div>
                  <img src="https://github-readme-stats.vercel.app/api?username=gopikrishna818&show_icons=true&theme=github_dark&hide_border=true" alt="GitHub Stats" className="rounded shadow-lg max-w-xs w-full" />
                </div>
                <div className="bg-gray-900/80 rounded-lg p-4 border border-blue-700/20 shadow-inner max-w-xl mx-auto mt-4">
                  <h4 className="text-blue-300 font-semibold mb-2 text-lg">Recent Activity</h4>
                  <p className="text-gray-400 text-sm mb-2">(Live activity feed coming soon!)</p>
                  <ul className="text-left text-sm text-gray-300 list-disc list-inside">
                    <li>Pushed code to <span className="text-blue-400">portfolio</span> repository</li>
                    <li>Reviewed a pull request on <span className="text-blue-400">open-source-ai</span></li>
                    <li>Starred <span className="text-blue-400">awesome-react</span> project</li>
                  </ul>
                </div>
              </div>
            )}
            {activeModal === 'code-playground' && (
              <InteractiveCodePlayground />
            )}
            {activeModal === 'data-analytics' && (
              <div className="text-white text-center py-8">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-orange-400 animate-bounce" />
                <h3 className="text-2xl font-bold mb-2">Data Analytics & Insights</h3>
                <p className="text-gray-300 mb-4 max-w-xl mx-auto">
                  <b>Key Analytics Achievements:</b><br />
                  • Achieved 95%+ ML accuracy in fraud/document detection<br />
                  • Delivered 8+ production-ready analytics/data projects<br />
                  • Automated data pipelines, boosting efficiency by 60%<br />
                  • Built dashboards and reports for business insights<br />
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-orange-700/30 shadow-lg">
                    <div className="font-bold text-lg mb-2 text-orange-300">Technologies Used</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">Python</span>
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">Pandas</span>
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">SQL</span>
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">FastAPI</span>
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">Machine Learning</span>
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">Data Visualization</span>
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">Matplotlib</span>
                      <span className="px-3 py-1 bg-orange-700/20 text-orange-200 rounded-full text-xs font-medium">Streamlit</span>
                    </div>
                  </div>
                  <div className="bg-slate-800/80 rounded-xl p-4 border border-orange-700/30 shadow-lg">
                    <div className="font-bold text-lg mb-2 text-orange-300">Analytics Summary</div>
                    <p className="text-sm text-orange-100">
                      I specialize in building data-driven solutions, from ML-powered fraud/document detection to business dashboards and automation. My analytics work has enabled smarter decisions, improved efficiency, and delivered measurable business value.
                    </p>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-4">
                  For project demos and code, see the Projects section or my{' '}
                  <a href="https://github.com/gopikrishna818" className="underline text-orange-300" target="_blank" rel="noopener noreferrer">GitHub</a>.
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingFeatureButtons;
