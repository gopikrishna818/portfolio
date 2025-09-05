import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Calendar, MapPin, Building, Briefcase, TrendingUp, Clock, ChevronRight, ExternalLink, Star, Award, Play, Pause } from 'lucide-react';

const EnhancedExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [isTimelineAnimating, setIsTimelineAnimating] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const experiences = [
	{
		id: 1,
		title: 'Software Engineer',
		company: 'KreativeTimebox',
		location: 'Remote',
		period: 'Jan 2024 – Present',
		duration: '10+ months',
		type: 'Full-time',
		logo: '🚀',
		gradient: 'from-purple-500 to-indigo-600',
		glowColor: 'purple-500',
		status: 'Current',
		achievement: '95% ML Accuracy',
		impact: '60% Efficiency Boost',
		startDate: '2024-01',
		endDate: 'Present',
		color: '#8B5CF6',
		description:
			'Leading development of scalable web applications and data analytics solutions with focus on fraud detection and automation.',
		highlights: [
			'Developed a comprehensive financial analytics platform for fraud and duplicate detection',
			'Achieved 95% accuracy in ML-powered fraud detection algorithms',
			'Reduced manual reconciliation time by 60% through automated processes',
			'Built responsive web interfaces using React and modern frontend technologies',
			'Designed and implemented RESTful APIs using FastAPI and Python',
			'Collaborated with cross-functional teams to deliver high-quality solutions',
		],
		techStack: [
			'Python',
			'FastAPI',
			'React',
			'PostgreSQL',
			'Machine Learning',
			'Docker',
		],
		metrics: {
			projects: 8,
			accuracy: 95,
			efficiency: 60
		}
	},
	{
		id: 2,
		title: 'Data Analyst Intern',
		company: 'IBM Skill Build',
		location: 'Remote',
		period: 'Jun 2023 – Jul 2023',
		duration: '2 months',
		type: 'Internship',
		logo: '🔍',
		gradient: 'from-blue-500 to-cyan-600',
		glowColor: 'blue-500',
		status: 'Completed',
		achievement: 'Strategic Impact',
		impact: 'Client Solutions',
		startDate: '2023-06',
		endDate: '2023-07',
		color: '#3B82F6',
		description:
			'Focused on data analysis, visualization, and business intelligence solutions with emphasis on retail analytics.',
		highlights: [
			'Created interactive retail sales analysis dashboards using Python and visualization libraries',
			'Improved data processing efficiency by implementing automated analysis pipelines',
			'Developed comprehensive reports that influenced strategic business decisions',
			'Gained expertise in data cleaning, transformation, and statistical analysis',
			'Collaborated with senior analysts to deliver client-facing analytics solutions',
		],
		techStack: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'SQL', 'Excel'],
		metrics: {
			projects: 5,
			accuracy: 88,
			efficiency: 40
		}
	},
];

  // Interactive Timeline Component
  const InteractiveTimeline = () => (
    <div className="relative py-8">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-500 rounded-full">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full bg-gradient-to-b from-purple-600 via-blue-500 to-cyan-500 rounded-full origin-top"
        />
      </div>

      {/* Timeline items */}
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
          className="relative flex items-start mb-12 group cursor-pointer"
          onClick={() => setSelectedExperience(index)}
          onMouseEnter={() => setHoveredMetric(exp.id.toString())}
          onMouseLeave={() => setHoveredMetric(null)}
        >
          {/* Timeline dot */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`relative z-10 w-6 h-6 rounded-full border-4 border-background shadow-lg`}
            style={{ backgroundColor: exp.color }}
          >
            <motion.div
              animate={selectedExperience === index ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: exp.color, opacity: 0.3 }}
            />
          </motion.div>

          {/* Timeline content */}
          <motion.div
            whileHover={{ x: 10 }}
            className={`ml-8 flex-1 p-6 rounded-2xl border transition-all duration-300 ${
              selectedExperience === index 
                ? 'bg-card/80 border-primary shadow-2xl shadow-primary/20' 
                : 'bg-card/40 border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <p className="text-primary font-semibold">{exp.company}</p>
              </div>
              <div className="text-right">
                <span className="text-sm text-muted-foreground">{exp.period}</span>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                  exp.status === 'Current' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {exp.status}
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">{exp.description}</p>

            {/* Interactive metrics */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {Object.entries(exp.metrics).map(([key, value]) => (
                <motion.div
                  key={key}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center p-3 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <motion.p
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                    className="text-xl font-bold text-primary"
                  >
                    {value}{key === 'projects' ? '+' : '%'}
                  </motion.p>
                  <p className="text-xs text-muted-foreground capitalize">{key}</p>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.3 + techIndex * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );

	return (
		<section ref={ref} id="experience" className="py-4 bg-gradient-to-br from-background via-background/95 to-card/20 relative overflow-hidden">
			{/* Floating Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					animate={{
						rotate: 360,
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						rotate: -360,
						scale: [1.2, 1, 1.2],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"
				/>
			</div>

			<div className="container-width relative z-10">
				<div className="text-center space-y-6 mb-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-heading text-gradient">
							Work Experience
						</h2>
						<motion.div 
							initial={{ width: 0 }}
							whileInView={{ width: 120 }}
							transition={{ delay: 0.3, duration: 1 }}
							viewport={{ once: true }}
							className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full mx-auto mb-6"
						/>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Professional journey in software engineering and data analytics, driving innovation through code
						</p>
					</motion.div>
				</div>

				{/* Interactive Timeline */}
				<InteractiveTimeline />

				{/* Enhanced Experience Details */}
				{selectedExperience !== null && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="mt-12 p-8 bg-card/60 backdrop-blur-sm border border-border rounded-2xl"
					>
						<div className="grid md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-2xl font-bold text-foreground mb-4">Key Highlights</h3>
								<div className="space-y-3">
									{experiences[selectedExperience].highlights.map((highlight, index) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3, delay: index * 0.1 }}
											className="flex items-start space-x-3"
										>
											<div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
											<p className="text-muted-foreground">{highlight}</p>
										</motion.div>
									))}
								</div>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-foreground mb-4">Impact Metrics</h3>
								<div className="grid grid-cols-2 gap-4">
									<motion.div
										whileHover={{ scale: 1.05 }}
										className="p-4 bg-background/50 rounded-xl border border-border"
									>
										<p className="text-3xl font-bold text-green-400">
											{experiences[selectedExperience].metrics.projects}+
										</p>
										<p className="text-sm text-muted-foreground">Projects Delivered</p>
									</motion.div>
									<motion.div
										whileHover={{ scale: 1.05 }}
										className="p-4 bg-background/50 rounded-xl border border-border"
									>
										<p className="text-3xl font-bold text-blue-400">
											{experiences[selectedExperience].metrics.accuracy}%
										</p>
										<p className="text-sm text-muted-foreground">Success Rate</p>
									</motion.div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</div>
		</section>
	);
};

export default EnhancedExperienceSection;
