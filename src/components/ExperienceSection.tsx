import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building, Briefcase, TrendingUp, Clock, ChevronRight, ExternalLink, Star, Award } from 'lucide-react';

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

const ExperienceSection = () => {
	const [expandedCard, setExpandedCard] = useState<number | null>(null);
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	return (
		<section id="experience" className="section-padding bg-gradient-to-br from-background via-background/95 to-card/20 relative overflow-hidden">
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
				<div className="text-center space-y-6 mb-16">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
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

				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
					{experiences.map((exp, index) => (
						<motion.div
							key={exp.id}
							initial={{ opacity: 0, y: 50, rotateX: 15 }}
							whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
							transition={{ 
								duration: 0.8, 
								delay: index * 0.3,
								type: "spring",
								stiffness: 100
							}}
							viewport={{ once: true }}
							onHoverStart={() => setHoveredCard(exp.id)}
							onHoverEnd={() => setHoveredCard(null)}
							className="group perspective-1000"
						>
							<div className={`
								relative bg-gradient-to-br from-card/60 to-card-hover/40 backdrop-blur-xl 
								border border-white/20 rounded-2xl overflow-hidden cursor-pointer
								transition-all duration-700 transform-gpu
								${hoveredCard === exp.id ? 'scale-105 shadow-2xl shadow-' + exp.glowColor + '/25' : 'hover:scale-[1.02]'}
								${expandedCard === exp.id ? 'scale-105' : ''}
							`}>
								{/* Animated Background Glow */}
								<motion.div
									animate={hoveredCard === exp.id ? {
										opacity: [0.05, 0.15, 0.05],
										scale: [1, 1.1, 1]
									} : {}}
									transition={{ duration: 2, repeat: Infinity }}
									className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
								/>

								{/* Shimmer Effect */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
									<motion.div
										animate={hoveredCard === exp.id ? { x: "-100%" } : { x: "-200%" }}
										transition={{ 
											duration: 1.5, 
											ease: "easeInOut",
											delay: hoveredCard === exp.id ? 0.2 : 0
										}}
										className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 transform"
									/>
								</div>

								{/* Header Section */}
								<div className="relative p-6 pb-4">
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center space-x-4">
											<motion.div
												whileHover={{ scale: 1.1, rotate: 5 }}
												className={`w-16 h-16 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
											>
												<span className="text-2xl">{exp.logo}</span>
											</motion.div>
											<div>
												<h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
													{exp.title}
												</h3>
												<div className="flex items-center space-x-2 mt-1">
													<Building size={16} className={`text-${exp.glowColor} group-hover:text-white transition-colors duration-300`} />
													<span className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300 font-medium">
														{exp.company}
													</span>
												</div>
											</div>
										</div>
										
										<div className="flex flex-col items-end">
											<motion.div
												whileHover={{ scale: 1.05 }}
												className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} rounded-full text-white text-xs font-medium shadow-lg`}
											>
												{exp.status}
											</motion.div>
											<div className="flex items-center mt-2 text-xs text-muted-foreground">
												<MapPin size={12} className="mr-1" />
												{exp.location}
											</div>
										</div>
									</div>

									{/* Metrics Dashboard */}
									<div className="grid grid-cols-3 gap-3 mb-4">
										<motion.div
											whileHover={{ y: -2 }}
											className="bg-background/50 rounded-lg p-3 border border-white/10 backdrop-blur-sm"
										>
											<div className="flex items-center justify-between">
												<TrendingUp size={16} className={`text-${exp.glowColor}`} />
												<span className="text-xs text-muted-foreground">Projects</span>
											</div>
											<div className="text-lg font-bold text-foreground mt-1">
												{exp.metrics.projects}
											</div>
										</motion.div>
										<motion.div
											whileHover={{ y: -2 }}
											className="bg-background/50 rounded-lg p-3 border border-white/10 backdrop-blur-sm"
										>
											<div className="flex items-center justify-between">
												<Star size={16} className="text-yellow-500" />
												<span className="text-xs text-muted-foreground">Accuracy</span>
											</div>
											<div className="text-lg font-bold text-foreground mt-1">
												{exp.metrics.accuracy}%
											</div>
										</motion.div>
										<motion.div
											whileHover={{ y: -2 }}
											className="bg-background/50 rounded-lg p-3 border border-white/10 backdrop-blur-sm"
										>
											<div className="flex items-center justify-between">
												<Award size={16} className="text-emerald-500" />
												<span className="text-xs text-muted-foreground">Impact</span>
											</div>
											<div className="text-lg font-bold text-foreground mt-1">
												+{exp.metrics.efficiency}%
											</div>
										</motion.div>
									</div>

									{/* Period & Duration */}
									<div className="flex items-center space-x-4 mb-4">
										<div className="flex items-center space-x-2 text-sm">
											<Calendar size={16} className={`text-${exp.glowColor}`} />
											<span className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
												{exp.period}
											</span>
										</div>
										<div className="flex items-center space-x-2 text-sm">
											<Clock size={16} className="text-muted-foreground" />
											<span className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
												{exp.duration}
											</span>
										</div>
									</div>
								</div>

								{/* Content Section */}
								<div className="px-6 pb-6">
									<p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 mb-4 leading-relaxed">
										{exp.description}
									</p>

									{/* Highlights */}
									<div className="space-y-2 mb-4">
										<AnimatePresence>
											{(expandedCard === exp.id ? exp.highlights : exp.highlights.slice(0, 2)).map((highlight, idx) => (
												<motion.div
													key={idx}
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													exit={{ opacity: 0, x: -20 }}
													transition={{ delay: idx * 0.1 }}
													className="flex items-start space-x-3"
												>
													<motion.div
														whileHover={{ scale: 1.2 }}
														className={`w-2 h-2 bg-gradient-to-r ${exp.gradient} rounded-full mt-2 shadow-lg flex-shrink-0`}
													/>
													<span className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
														{highlight}
													</span>
												</motion.div>
											))}
										</AnimatePresence>
									</div>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2 mb-4">
										{exp.techStack.map((tech, idx) => (
											<motion.span
												key={idx}
												whileHover={{ scale: 1.05, y: -2 }}
												className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-foreground border border-white/20 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300`}
											>
												{tech}
											</motion.span>
										))}
									</div>

									{/* Actions */}
									<div className="flex items-center justify-between">
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => setExpandedCard(expandedCard === exp.id ? null : exp.id)}
											className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
										>
											<span>{expandedCard === exp.id ? 'Show Less' : 'Show More'}</span>
											<motion.div
												animate={{ rotate: expandedCard === exp.id ? 90 : 0 }}
												transition={{ duration: 0.3 }}
											>
												<ChevronRight size={16} />
											</motion.div>
										</motion.button>

										<motion.button
											whileHover={{ scale: 1.05, x: 5 }}
											className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${exp.gradient} text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
										>
											<span>View Details</span>
											<ExternalLink size={14} />
										</motion.button>
									</div>
								</div>

								{/* Status Indicator */}
								<div className="absolute top-4 right-4">
									<motion.div
										animate={{ scale: [1, 1.2, 1] }}
										transition={{ duration: 2, repeat: Infinity }}
										className={`w-3 h-3 ${exp.status === 'Current' ? 'bg-green-500' : 'bg-blue-500'} rounded-full shadow-lg`}
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Timeline Connector */}
				<motion.div
					initial={{ scaleY: 0 }}
					whileInView={{ scaleY: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					viewport={{ once: true }}
					className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-purple-500 to-blue-500 opacity-30"
				/>
			</div>
		</section>
	);
};

export default ExperienceSection;