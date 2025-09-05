import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { KeenSliderPlugin } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import './portfolio-animations.css';
import { ExternalLink, Github, X } from 'lucide-react';
import { FlipCard, MagneticButton } from '@/components/InteractiveElements';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Google Gemini Key-Rotating Prompt Server & n8n Automation Workflow',
      subtitle: 'Enterprise AI Infrastructure: Scaling Gemini API Operations',
      description: 'Built enterprise-grade AI infrastructure with automated key rotation, n8n workflows, and comprehensive automation for lead generation and outreach.',
      fullDescription: `Built a Node.js server that rotates Google Gemini API keys, handles rate limits, and sends automated email alerts. Integrated with n8n for a full automation workflow: personalized LinkedIn messaging, Supabase logging, Retell AI voice calls, web scraping, and call analysis. Demonstrates backend, frontend, devops, and automation ownership.`,
      // Case Study Details
      client: "Marketing Automation Startup",
      duration: "4 months",
      team: "2 developers",
      challenge: "Startup needed to scale their AI-powered lead generation but faced API rate limits, manual processes, and lack of integration between different tools. Manual outreach was limiting growth potential.",
      solution: "Architected a Node.js server with intelligent API key rotation, integrated n8n for workflow automation, connected Supabase for data management, and implemented Retell AI for voice calls. Created seamless automation from lead discovery to conversion.",
      results: [
        { metric: "API Uptime", value: "99.9%", impact: "Zero downtime for critical operations" },
        { metric: "Lead Processing", value: "Automated", impact: "Eliminated manual data entry and follow-ups" },
        { metric: "Operational Costs", value: "-60%", impact: "Reduced staffing needs and infrastructure costs" }
      ],
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
      liveUrl: '#',
      // Case Study Details
      client: 'Digital Marketing Agency',
      duration: '6 months',
      team: '3 developers',
      challenge: 'Content creators struggled with manual trend research, taking 8+ hours weekly to identify relevant topics and analyze competitor performance. Clients demanded faster content strategy turnaround with data-driven insights.',
      solution: 'Built an AI-powered platform that aggregates trends from multiple social platforms, analyzes competitor content performance, and generates strategic content calendars. Implemented real-time data pipelines with sentiment analysis and engagement prediction.',
      results: [
        {
          metric: 'Research Time Reduction',
          value: '85%',
          impact: 'Reduced weekly content research from 8+ hours to 1.2 hours per strategist'
        },
        {
          metric: 'Client Engagement',
          value: '65%',
          impact: 'Average increase in social media engagement across client campaigns'
        },
        {
          metric: 'Content Planning Speed',
          value: '300%',
          impact: 'Faster 30-day content calendar generation with automated insights'
        },
        {
          metric: 'Revenue Growth',
          value: '$180K',
          impact: 'Additional annual revenue from improved client retention and new acquisitions'
        }
      ]
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
      liveUrl: '#',
      // Case Study Details
      client: 'Financial Services Company',
      duration: '8 months',
      team: '4 developers + 1 ML engineer',
      challenge: 'Manual processing of 10,000+ monthly financial documents caused 3-day delays in expense reporting. Fraud detection relied on random sampling, missing 30% of suspicious transactions. Legacy OCR systems had 68% accuracy.',
      solution: 'Developed modular AI system with advanced OCR, transformer models for layout understanding, and ML-based fraud detection. Implemented secure APIs, real-time processing pipelines, and interactive dashboards for finance teams.',
      results: [
        {
          metric: 'Processing Speed',
          value: '2400%',
          impact: 'Document processing time reduced from 3 days to 3 hours average'
        },
        {
          metric: 'Extraction Accuracy',
          value: '92%',
          impact: 'Improved from 68% legacy OCR to 92% with LayoutLMv3 integration'
        },
        {
          metric: 'Fraud Detection',
          value: '40%',
          impact: 'Improved fraud detection recall, preventing $450K in potential losses'
        },
        {
          metric: 'Operational Savings',
          value: '$320K',
          impact: 'Annual savings from reduced manual processing and improved accuracy'
        }
      ]
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
      liveUrl: '#',
      // Case Study Details
      client: 'Education Technology Platform',
      duration: '5 months',
      team: '2 data engineers',
      challenge: 'Legacy reporting system took 45+ minutes to generate basic dashboards from fragmented student and sales data. Multiple data formats caused integration issues, and executives lacked real-time insights for decision-making.',
      solution: 'Migrated to Snowflake cloud data warehouse with optimized schema design. Built automated ETL pipelines for multiple data formats, created real-time SQL dashboards, and implemented advanced analytics for trend analysis and revenue forecasting.',
      results: [
        {
          metric: 'Query Performance',
          value: '95%',
          impact: 'Dashboard generation time reduced from 45+ minutes to 2.3 minutes'
        },
        {
          metric: 'Data Integration',
          value: '100%',
          impact: 'Successfully unified 12 different data sources and custom formats'
        },
        {
          metric: 'Real-time Insights',
          value: '24/7',
          impact: 'Executives now have continuous access to live business metrics'
        },
        {
          metric: 'Infrastructure Costs',
          value: '60%',
          impact: 'Reduced data infrastructure costs through optimized Snowflake usage'
        }
      ]
    }
  ];

  const ProjectModal = ({ project }: { project: typeof projects[0] }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground">{project.subtitle}</p>
            {project.client && (
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span>Client: {project.client}</span>
                <span>Duration: {project.duration}</span>
                <span>Team: {project.team}</span>
              </div>
            )}
          </div>
          <button
            onClick={() => setSelectedProject(null)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Project Image Card */}
          <div className="flex justify-center">
            <div className="w-80 h-48 bg-gradient-to-br from-card to-muted border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Overview & Challenge Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Project Overview Card */}
            <div className="bg-gradient-to-br from-card via-card to-muted/20 border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-bold text-foreground">Project Overview</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Business Challenge Card */}
            {project.challenge && (
              <div className="bg-gradient-to-br from-card via-card to-red-50/10 border border-red-200/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h4 className="text-lg font-bold text-foreground">Business Challenge</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>
            )}
          </div>

          {/* Technical Solution Card */}
          {project.solution && (
            <div className="bg-gradient-to-br from-card via-card to-green-50/10 border border-green-200/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-bold text-foreground">Technical Solution</h4>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          )}

          {/* Results & Impact Dashboard */}
          {project.results && (
            <div className="bg-gradient-to-br from-card via-card to-purple-50/10 border border-purple-200/30 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <h4 className="text-lg font-bold text-foreground">Results & Business Impact</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-gradient-to-br from-background to-muted/30 border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">{result.metric}</h5>
                      <div className="text-right">
                        <span className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                          {result.value}
                        </span>
                      </div>
                    </div>
                    <div className="border-l-4 border-primary/30 pl-3">
                      <p className="text-sm text-muted-foreground leading-relaxed">{result.impact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Achievements Card */}
          <div className="bg-gradient-to-br from-card via-card to-amber-50/10 border border-amber-200/30 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-5">
              <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
              <h4 className="text-lg font-bold text-foreground">Key Achievements</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-background to-muted/20 rounded-lg border border-border hover:shadow-sm transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed flex-1">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Card */}
          <div className="bg-gradient-to-br from-card via-card to-cyan-50/10 border border-cyan-200/30 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-5">
              <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
              <h4 className="text-lg font-bold text-foreground">Technology Stack</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary border border-primary/20 rounded-full text-sm font-medium hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
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
    <section id="portfolio" className="relative pt-4 pb-4">
      <div className="container-width">
        <div className="text-center space-y-3 mb-12">
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
              className="keen-slider__slide"
            >
              <FlipCard
                className="h-[400px] cursor-pointer"
                frontContent={
                  <div className="card-elevated h-full flex flex-col justify-between relative overflow-hidden rounded-xl p-4">
                    {/* Project Image */}
                    <div className="aspect-video rounded-xl mb-3 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-sm font-medium mb-1">{project.category}</div>
                        <div className="text-xs opacity-90">Hover to flip for details</div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-2 flex-1">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-xs">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-sm line-clamp-2 text-muted-foreground">
                        {project.description}
                      </p>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                }
                backContent={
                  <div className="card-elevated h-full flex flex-col justify-between relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-semibold text-primary">Client:</span>
                          <span className="ml-2 text-muted-foreground">{project.client}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-primary">Duration:</span>
                          <span className="ml-2 text-muted-foreground">{project.duration}</span>
                        </div>
                        
                        {project.results && (
                          <div>
                            <span className="font-semibold text-primary">Key Results:</span>
                            <ul className="ml-2 mt-1 space-y-1">
                              {project.results.slice(0, 2).map((result, idx) => (
                                <li key={idx} className="text-xs text-muted-foreground">
                                  • {result.metric}: {result.value}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <MagneticButton
                        onClick={() => setSelectedProject(index)}
                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        View Case Study
                      </MagneticButton>
                      {project.githubUrl && (
                        <MagneticButton
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                          className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors"
                        >
                          <Github size={16} />
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                }
              />
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