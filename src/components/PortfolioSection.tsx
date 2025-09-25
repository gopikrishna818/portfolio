import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { KeenSliderPlugin } from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import { ExternalLink, Github, X, Play } from 'lucide-react';
import { FlipCard, MagneticButton } from '@/components/InteractiveElements';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [demoViewerOpen, setDemoViewerOpen] = useState<number | null>(null);

  const projects = [
  {
      id: 1,
      title: 'SmartDoc Parser – Invoice & Bank Statement Extraction',
      subtitle: 'ML Intern Project at KreativeTimebox',
      description: 'OCR and LLM-powered parser using DocTr, PaddleOCR, and LangChain for high-accuracy field extraction.',
      fullDescription: `Built an OCR and LLM-powered parser using DocTr, PaddleOCR, and LangChain to extract structured fields from invoices and bank statements with over 90% accuracy, eliminating reliance on third-party APIs.`,
      achievements: [
        'Achieved 90%+ extraction accuracy on real-world documents',
        'Integrated DocTr, PaddleOCR, and LangChain for robust parsing',
        'Eliminated third-party API costs',
        'Productionized for business use at KreativeTimebox'
      ],
      techStack: ['Python', 'DocTr', 'PaddleOCR', 'LangChain', 'Streamlit'],
      category: 'AI Document Intelligence',
      githubUrl: 'https://github.com/gopikrishna818/smartdoc-parser',
  featured: true,
  image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1000&q=80' // OCR/AI document parsing
    },
    {
      id: 2,
      title: 'AI Lead-Gen & Outreach Automation Engine',
      subtitle: 'Personal Project',
      description: 'Production-grade multi-layered automation system for AI-driven prospecting and appointment booking.',
      fullDescription: `Developed a production-grade multi-layered automation system using n8n, Supabase, Retell AI, and Google Gemini with key-rotation, advanced prompt engineering, real-time call analysis, and fully automated lead outreach, enabling end-to-end AI-driven prospecting and appointment booking.`,
      achievements: [
        'Automated lead discovery, outreach, and appointment booking',
        'Integrated n8n, Supabase, Retell AI, and Google Gemini',
        'Advanced prompt engineering and real-time call analysis',
        'End-to-end AI-driven workflow'
      ],
      techStack: ['n8n', 'Supabase', 'Retell AI', 'Google Gemini', 'Node.js'],
      category: 'AI Automation',
      githubUrl: 'https://github.com/gopikrishna818/ai-leadgen-automation',
      featured: true,
  image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80' // AI automation, digital transformation
    },
  {
      id: 3,
      title: 'AI Content Strategy Engine',
      subtitle: 'AI Hackathon Project',
      description: 'AI-powered platform for trend discovery, competitor analysis, and auto-generated content strategies.',
      fullDescription: `Built an AI-powered platform to discover trends, analyze high-performing content, track competitors, and auto-generate full content strategies. Integrated real-time data from Twitter, YouTube, Reddit, and Google Trends with OpenAI GPT for tone/format detection, delivering a unified dashboard for marketers to create data-driven content plans and 30-day calendars.`,
      achievements: [
        'Real-time trend discovery and competitor analysis',
        'Auto-generated content strategies and calendars',
        'Unified dashboard for marketers',
        'Integrated OpenAI GPT for tone/format detection'
      ],
      techStack: ['React.js', 'FastAPI', 'OpenAI GPT', 'MongoDB', 'Twitter API', 'YouTube API', 'Reddit API', 'Google Trends'],
      category: 'AI & Data Platform',
      githubUrl: 'https://github.com/gopikrishna818/ai-content-strategy-engine',
  featured: true,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80' // Content strategy/AI dashboard
    },
    {
      id: 4,
      title: 'Visualization in Snowflake Snowsight',
      subtitle: 'BTech Major Project',
      description: 'Transformative data visualization project using Snowflake Snowsight.',
      fullDescription: `Led a transformative data visualization project using Snowflake Snowsight, seamlessly integrating with organizational data infrastructure. Improved analysis of large datasets, driving innovation and enabling stronger data-driven strategies.`,
      achievements: [
        'Integrated Snowflake Snowsight with organizational data',
        'Improved analysis of large datasets',
        'Enabled stronger data-driven strategies',
        'Major project for BTech degree'
      ],
      techStack: ['Snowflake', 'SQL', 'Snowsight'],
      category: 'Data Visualization',
      featured: false,
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80' // Data visualization dashboard
    },
    {
      id: 6,
      title: 'Custom Owned Projects',
      subtitle: 'Personal & Open Source',
      description: 'A collection of custom projects showcasing ownership, coding, and developer skills.',
      fullDescription: `A curated set of personal and open source projects demonstrating end-to-end ownership, problem-solving, and modern development practices. Includes web apps, automation tools, and open source contributions.`,
      achievements: [
        'Full project lifecycle ownership',
        'Modern web and backend stacks',
        'Open source contributions',
        'Continuous learning and innovation'
      ],
      techStack: ['React', 'Node.js', 'Python', 'Cloud', 'Open Source'],
      category: 'Custom Projects',
      featured: false,
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80' // Developer/coding (kept for custom owned projects)
    },
    {
      id: 5,
      title: 'Custom File Formats for Data Loading and Processing in Snowflake',
      subtitle: 'BTech Minor Project',
      description: 'Designed and implemented custom file formats in Snowflake to enhance data loading and processing efficiency.',
      fullDescription: `Designed and implemented custom file formats in Snowflake to enhance data loading and processing efficiency. Streamlined handling of large datasets and improved system scalability.`,
      achievements: [
        'Designed custom file formats in Snowflake',
        'Enhanced data loading and processing efficiency',
        'Improved system scalability',
        'Minor project for BTech degree'
      ],
      techStack: ['Snowflake', 'SQL'],
      category: 'Data Engineering',
  featured: false,
  image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1000&q=80' // Data engineering/file formats
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
          {/* Project Image Card with Demo */}
          <div className="flex justify-center">
            <div className="w-80 h-48 bg-gradient-to-br from-card to-muted border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {project.demoGif && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setDemoViewerOpen(project.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                  >
                    <Play size={16} />
                    Watch Demo
                  </button>
                </div>
              )}
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

          {/* Enhanced Action Buttons with GitHub Stats */}
          <div className="bg-gradient-to-r from-card via-card to-muted/20 border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
              <h4 className="text-lg font-bold text-foreground">Project Links & Repository</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* GitHub Repository Card */}
              <div className="bg-gradient-to-br from-background to-muted/30 border border-border rounded-lg p-5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                      <Github size={16} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Source Code</h5>
                      <p className="text-xs text-muted-foreground">Open Source Repository</p>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* GitHub Stats */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>{project.stars || 0} stars</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M5 3.25a.75.75 0 01.75-.75h8.5a.75.75 0 01.75.75v8.5a.75.75 0 01-.75.75h-8.5a.75.75 0 01-.75-.75v-8.5z"/>
                      <path d="M1.75 2.5a.75.75 0 000 1.5h.5v9h9v.5a.75.75 0 001.5 0v-10.25a.75.75 0 00-.75-.75H1.75z"/>
                    </svg>
                    <span>{project.forks || 0} forks</span>
                  </div>
                </div>
                
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-secondary flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
                >
                  <Github size={18} />
                  <span>View Repository</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Live Demo Card */}
              <div className="bg-gradient-to-br from-background to-primary/10 border border-primary/20 rounded-lg p-5 hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                      <ExternalLink size={16} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Live Demo</h5>
                      <p className="text-xs text-muted-foreground">Interactive Application</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600 font-medium">Live</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Experience the full functionality of this project with real-time data and interactive features.
                </p>
                
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center space-x-2 hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Launch Demo</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7"/>
                    <path d="M7 7h10v10"/>
                  </svg>
                </a>
              </div>
            </div>
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

        {/* Featured Projects Stats Bar */}
        <div className="mb-8 bg-gradient-to-r from-card via-card to-primary/10 border border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-xs text-muted-foreground">Featured Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">88</div>
                <div className="text-xs text-muted-foreground">GitHub Stars</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All demos live & accessible</span>
            </div>
          </div>
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
                  <div className="card-elevated h-full flex flex-col justify-between relative overflow-hidden rounded-xl p-4 group">
                    {/* Project Image with Enhanced Hover Effects */}
                    <div className="aspect-video rounded-xl mb-3 overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 px-2 py-1 bg-yellow-500/90 text-yellow-900 rounded-full text-xs font-bold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            ⭐ FEATURED
                          </div>
                        )}
                        
                        {/* Demo Button */}
                        {project.demoGif && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setDemoViewerOpen(project.id);
                              }}
                              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105"
                            >
                              <Play size={16} />
                              Demo
                            </button>
                          </div>
                        )}
                        
                        {/* GitHub Stats */}
                        {(project.stars || project.forks) && (
                          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs flex items-center space-x-2 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {project.stars && (
                              <span className="flex items-center space-x-1">
                                <span>⭐</span>
                                <span>{project.stars}</span>
                              </span>
                            )}
                            {project.forks && (
                              <span className="flex items-center space-x-1">
                                <span>🔀</span>
                                <span>{project.forks}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      
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

                      {/* Enhanced Tech Stack Preview with Icons */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-600/10 text-primary border border-primary/20 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 border border-orange-500/20 rounded-full text-xs font-medium">
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
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="px-4 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors flex items-center space-x-1"
                        >
                          <Github size={16} />
                          <span className="text-xs">⭐{project.stars || 0}</span>
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

        {/* Demo Viewer */}
        {demoViewerOpen !== null && (
          <ProjectDemoViewer
            demoUrl={projects.find(p => p.id === demoViewerOpen)?.demoGif}
            staticImage={projects.find(p => p.id === demoViewerOpen)?.image || ''}
            title={projects.find(p => p.id === demoViewerOpen)?.title || ''}
            isOpen={demoViewerOpen !== null}
            onClose={() => setDemoViewerOpen(null)}
          />
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;