import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { KeenSliderPlugin } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import './portfolio-animations.css';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Google Gemini Key-Rotating Prompt Server & n8n Automation Workflow',
      subtitle: 'Multi-layered AI Lead-Gen & Outreach Engine',
      description: 'A Node.js server with key-rotation, email alerts, and a robust n8n workflow for personalized outreach, call analysis, and automation.',
      fullDescription: `Built a Node.js server that rotates Google Gemini API keys, handles rate limits, and sends automated email alerts. Integrated with n8n for a full automation workflow: personalized LinkedIn messaging, Supabase logging, Retell AI voice calls, web scraping, and call analysis. Demonstrates backend, frontend, devops, and automation ownership.`,
      achievements: [
        'Automated Gemini API key rotation and alerting',
        'n8n workflow with webhook, Supabase, Retell AI, cal.com integration',
        'Advanced call analysis and multi-step fallback logic',
        'Full documentation and live demo'
      ],
      techStack: ['Node.js', 'n8n', 'Supabase', 'Retell AI', 'cal.com', 'Vercel', 'SMTP', 'Python', 'Web Scraping'],
      category: 'Full-Stack Automation',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/gemini-key-rotator-n8n',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'AI Content Strategy Engine',
      subtitle: 'Trend Discovery & Content Planning Platform',
      description: 'AI-powered dashboard for real-time trend discovery, competitor analysis, and auto-generated content strategies across platforms.',
      fullDescription: `Developed a unified dashboard for content strategists and marketers. Sources trends from Twitter, YouTube, Reddit, and Google Trends. Analyzes high-performing content, benchmarks competitors, and generates editorial calendars and strategy plans. Built with React, FastAPI, and advanced NLP models.`,
      achievements: [
        'Real-time cross-platform trend discovery',
        'Content analyzer and strategy generator',
        'Competitor tracker and benchmarking',
        'Auto-generated 30-day content calendar'
      ],
      techStack: ['React.js', 'FastAPI', 'OpenAI GPT', 'MongoDB', 'D3.js', 'Chart.js', 'Twitter API', 'YouTube API', 'Reddit API', 'Google Trends'],
      category: 'AI & Data Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/ai-content-strategy-engine',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'Modular AI-powered Financial Document Analysis System',
      subtitle: 'Intelligent Document Processing & Fraud Detection',
      description: 'FastAPI backend with OCR, transformer models, and rule-based logic for high-accuracy field extraction and fraud detection.',
      fullDescription: `Built a modular system using FastAPI, OCR, and transformer models (LayoutLMv3, spaCy, fuzzy matching) for financial document analysis. Achieved 92% field extraction accuracy, automated supplier tagging, and improved fraud detection recall by 40%. Includes Streamlit dashboards and Dockerized microservices.`,
      achievements: [
        '92% field extraction accuracy on receipts/invoices',
        'Automated supplier tagging with 85% precision',
        'Fraud/anomaly detection with Isolation Forest',
        'Interactive dashboards and secure API'
      ],
      techStack: ['Python', 'FastAPI', 'LayoutLMv3', 'spaCy', 'Streamlit', 'Docker', 'Swagger', 'JWT', 'Label Studio', 'EasyOCR', 'Gemma'],
      category: 'AI Document Intelligence',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/ai-financial-doc-analysis',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'Data Visualization with Snowflake',
      subtitle: 'SQL Dashboards & Custom File Formats',
      description: 'Designed Snowflake databases and dashboards for sales and student data, optimized analysis and data loading.',
      fullDescription: `Created structured Snowflake databases for sales and student data, built SQL dashboards for trends and revenue insights, and optimized analysis using advanced Snowflake functions. Integrated multiple source files and custom formats for efficient data loading and analysis.`,
      achievements: [
        'Optimized Snowflake database design',
        'Advanced SQL dashboards for business insights',
        'Custom file format integration and staging',
        'Efficient data loading and analysis'
      ],
      techStack: ['Python', 'SQL', 'Snowflake', 'GitHub'],
      category: 'Data Engineering & Visualization',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      githubUrl: 'https://github.com/gopikrishna818/snowflake-visualization',
      liveUrl: '#'
    }
  ];

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground">{project.subtitle}</p>
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Project Image */}
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Overview</h4>
            <p className="text-body">{project.fullDescription}</p>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Key Achievements</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center space-x-2"
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  // Mouse wheel plugin for horizontal scrolling through slides
  const WheelControls: KeenSliderPlugin = (slider) => {
    let touchTimeout: ReturnType<typeof setTimeout>
    let wheelActive: boolean

    function eventWheel(e: WheelEvent) {
      // Only prevent default for horizontal scrolling or when shift is pressed
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      const isShiftPressed = e.shiftKey
      
      if (isHorizontal || isShiftPressed) {
        e.preventDefault()
        
        const delta = isHorizontal ? e.deltaX : e.deltaY
        
        if (!wheelActive) {
          wheelActive = true
        }
        
        // Move to next/previous slide based on scroll direction
        if (delta > 0) {
          slider.next()
        } else if (delta < 0) {
          slider.prev()
        }
        
        clearTimeout(touchTimeout)
        touchTimeout = setTimeout(() => {
          wheelActive = false
        }, 300) // Longer timeout to prevent too rapid sliding
      }
    }

    slider.on("created", () => {
      slider.container.addEventListener("wheel", eventWheel, {
        passive: false,
      })
    })

    slider.on("destroyed", () => {
      slider.container.removeEventListener("wheel", eventWheel)
    })
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: { 
      perView: 1, 
      spacing: 16,
      origin: "center"
    },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2, spacing: 24 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 32 } },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    // Smooth slide transitions without flipping
    defaultAnimation: {
      duration: 600,
      easing: (t: number) => 1 - Math.pow(1 - t, 2) // Quadratic ease-out for smoother feel
    },
    // Improved drag configuration
    drag: true,
    dragSpeed: 0.5,
    rubberband: false, // Disable rubberband to prevent flipping
    selector: ".keen-slider__slide"
  }, [WheelControls]);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-width">
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-heading text-gradient">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            AI-powered solutions bridging data challenges and business objectives
          </p>
        </div>

        {/* Projects Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="keen-slider__slide card-elevated group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between min-h-[360px] relative overflow-hidden"
              onClick={() => setSelectedProject(index)}
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300 rounded-xl pointer-events-none" />
              
              {/* Project Image */}
              <div className="aspect-video rounded-xl mb-3 overflow-hidden relative group-hover:shadow-lg transition-all duration-300">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="text-sm font-medium mb-1">{project.category}</div>
                  <div className="text-xs opacity-90">Click to view details</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-2 flex-1 relative z-10">
                <div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm line-clamp-2 group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.techStack.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-3 relative z-10">
                <div className="flex space-x-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300 hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300 hover:scale-110"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                <span className="text-xs text-primary font-medium transform group-hover:translate-x-1 transition-transform duration-300 opacity-70 group-hover:opacity-100">
                  View Details →
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Slider Control */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Previous project"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="flex items-center space-x-2 bg-card border border-border rounded-full px-4 py-2">
            <span className="text-sm font-medium text-muted-foreground">
              {currentSlide + 1} of {projects.length}
            </span>
            <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
              />
            </div>
          </div>
          
          <button
            onClick={() => instanceRef.current?.next()}
            className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label="Next project"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <ProjectModal project={projects[selectedProject]} />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;