import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';

// Export case studies data for use in Portfolio section
export const caseStudiesData = [
  {
    id: 1,
    portfolioId: 2, // Maps to "AI Content Strategy Engine"
    title: "AI Content Strategy Engine: From Concept to Market Leader",
    client: "Content Marketing Agency",
    category: "AI & Data Platform",
    duration: "6 months",
    team: "3 developers",
    image: "/case-study-1.jpg", // Replace with actual image
    description: "Transformed content marketing workflows with an AI-powered platform that discovers trends, analyzes competitors, and generates strategic content plans.",
    challenge: "Content teams were struggling to keep up with rapidly changing trends across multiple platforms. Manual research was time-consuming and often missed emerging opportunities. Competitors were gaining market share through more timely, relevant content.",
    solution: "Built a comprehensive AI platform using React.js frontend and FastAPI backend. Integrated with Twitter, YouTube, Reddit APIs and Google Trends for real-time data collection. Implemented NLP models for content analysis and strategy generation.",
    results: [
      { metric: "Content Engagement", value: "+250%", icon: TrendingUp },
      { metric: "Research Time", value: "-80%", icon: Zap },
      { metric: "Client Retention", value: "+40%", icon: Users }
    ],
    technologies: ["React.js", "FastAPI", "OpenAI GPT", "MongoDB", "D3.js", "Twitter API", "YouTube API", "Google Trends"],
    liveUrl: "#", // Replace with actual URL
    githubUrl: "https://github.com/gopikrishna818/ai-content-strategy-engine",
    featured: true
  },
  {
    id: 2,
    portfolioId: 3, // Maps to "AI-powered Financial Document Analysis"
    title: "Financial Document Intelligence: Fraud Detection Revolution",
    client: "FinTech Solutions Ltd",
    category: "AI Document Intelligence",
    duration: "8 months",
    team: "4 developers",
    image: "/case-study-2.jpg", // Replace with actual image
    description: "Revolutionized financial document processing with AI-powered OCR, field extraction, and fraud detection system achieving 92% accuracy.",
    challenge: "Manual document processing was causing bottlenecks in financial operations. High error rates in data entry and difficulty detecting fraudulent documents were costing significant time and money. Existing solutions lacked the precision needed for financial compliance.",
    solution: "Developed a modular system using FastAPI, advanced OCR (EasyOCR), and transformer models (LayoutLMv3, spaCy). Implemented machine learning pipeline with fraud detection using Isolation Forest algorithm and automated supplier tagging.",
    results: [
      { metric: "Processing Accuracy", value: "92%", icon: TrendingUp },
      { metric: "Fraud Detection", value: "+40%", icon: Users },
      { metric: "Processing Speed", value: "10x faster", icon: Zap }
    ],
    technologies: ["Python", "FastAPI", "LayoutLMv3", "spaCy", "Docker", "EasyOCR", "Streamlit", "JWT"],
    liveUrl: "#", // Replace with actual URL
    githubUrl: "https://github.com/gopikrishna818/ai-financial-doc-analysis",
    featured: true
  },
  {
    id: 3,
    portfolioId: 1, // Maps to "Google Gemini Key-Rotating Prompt Server"
    title: "Enterprise AI Infrastructure: Scaling Gemini API Operations",
    client: "Marketing Automation Startup",
    category: "Full-Stack Automation",
    duration: "4 months",
    team: "2 developers",
    image: "/case-study-3.jpg", // Replace with actual image
    description: "Built enterprise-grade AI infrastructure with automated key rotation, n8n workflows, and comprehensive automation for lead generation and outreach.",
    challenge: "Startup needed to scale their AI-powered lead generation but faced API rate limits, manual processes, and lack of integration between different tools. Manual outreach was limiting growth potential.",
    solution: "Architected a Node.js server with intelligent API key rotation, integrated n8n for workflow automation, connected Supabase for data management, and implemented Retell AI for voice calls. Created seamless automation from lead discovery to conversion.",
    results: [
      { metric: "API Uptime", value: "99.9%", icon: TrendingUp },
      { metric: "Lead Processing", value: "Automated", icon: Zap },
      { metric: "Operational Costs", value: "-60%", icon: Users }
    ],
    technologies: ["Node.js", "n8n", "Supabase", "Retell AI", "cal.com", "Vercel", "Python", "Web Scraping"],
    liveUrl: "#", // Replace with actual URL
    githubUrl: "https://github.com/gopikrishna818/gemini-key-rotator-n8n",
    featured: false
  }
];

// Function to scroll to specific case study
export const scrollToCaseStudy = (caseStudyId: number) => {
  const caseStudySection = document.querySelector('#case-studies');
  if (caseStudySection) {
    caseStudySection.scrollIntoView({ behavior: 'smooth' });
    // Add a slight delay then highlight the specific case study
    setTimeout(() => {
      const caseStudyElement = document.querySelector(`[data-case-study-id="${caseStudyId}"]`);
      if (caseStudyElement) {
        caseStudyElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Add a temporary highlight effect
        caseStudyElement.classList.add('highlight-case-study');
        setTimeout(() => {
          caseStudyElement.classList.remove('highlight-case-study');
        }, 3000);
      }
    }, 500);
  }
};

const CaseStudiesSection = () => {
  const caseStudies = caseStudiesData;

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading text-gradient mb-4">
            Case Studies
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Detailed breakdowns of successful projects and their business impact
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              data-case-study-id={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative ${study.featured ? 'lg:mx-0' : 'lg:mx-8'}`}
            >
              {/* Featured Badge */}
              {study.featured && (
                <div className="absolute -top-4 left-8 z-10">
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    ⭐ Featured Project
                  </span>
                </div>
              )}

              <div className={`relative rounded-3xl overflow-hidden ${
                study.featured 
                  ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 border-2 border-blue-500/20' 
                  : 'bg-card/50 border border-border/50'
              } backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10`}>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content Side */}
                  <div className="p-8 lg:p-12 order-2 lg:order-1">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">
                          {study.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{study.duration}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {study.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{study.client}</p>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-red-400 mb-2">CHALLENGE</h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-2">SOLUTION</h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      {study.results.map((result, i) => {
                        const IconComponent = result.icon;
                        return (
                          <div key={i} className="text-center p-3 rounded-xl bg-card/50 border border-border/30">
                            <IconComponent size={20} className="text-primary mx-auto mb-2" />
                            <div className="text-lg font-bold text-foreground">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.metric}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">TECHNOLOGIES USED</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-muted/50 border border-border/30 rounded-lg text-sm text-foreground/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                      >
                        View Live Demo
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                      <a
                        href={study.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-border hover:border-primary/50 text-foreground hover:text-primary rounded-full font-medium transition-all duration-300 hover:scale-105"
                      >
                        View Code
                        <Github size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="relative order-1 lg:order-2 h-64 lg:h-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 flex items-center justify-center">
                      {/* Placeholder for project image */}
                      <div className="text-center text-white">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center">
                          <TrendingUp size={48} />
                        </div>
                        <p className="text-lg font-medium">Project Screenshot</p>
                        <p className="text-sm opacity-75">Replace with actual image</p>
                      </div>
                    </div>
                    {/* Overlay for hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in discussing a similar project?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Let's Discuss Your Project
            <ArrowRight size={20} className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
