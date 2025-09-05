import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users, Trophy, Star, ChevronRight, ExternalLink, Target } from 'lucide-react';
import { useState } from 'react';

const education = [
	{
		id: 1,
		degree: 'Bachelor of Technology',
		field: 'Computer Science & Engineering',
		institution: 'Guru Nanak Institutions Technical Campus',
		location: 'Hyderabad, India',
		period: '2020 – 2024',
		grade: 'First Class',
		icon: '🎓',
		gradient: 'from-emerald-500 to-teal-600',
		glowColor: 'emerald-500',
		level: 'Undergraduate',
		gpa: '8.2/10',
		achievements: ['Dean\'s List', 'Top 10%', 'Research Project'],
		description: 'Comprehensive Computer Science program with specialization in Software Engineering and Data Analytics',
		highlights: [
			'Specialized in Software Engineering and Data Analytics',
			'Completed projects in Machine Learning and Web Development',
			'Active participation in coding competitions and hackathons',
			'Member of Computer Science Society',
			'Led final year capstone project on AI-powered solutions',
			'Mentored junior students in programming fundamentals'
		],
		relevantCourses: [
			'Data Structures & Algorithms',
			'Database Management Systems',
			'Machine Learning',
			'Software Engineering',
			'Web Technologies',
			'Computer Networks'
		],
		metrics: {
			projects: 12,
			gpa: 8.2,
			rank: 10
		}
	},
	{
		id: 2,
		degree: 'Intermediate (12th Grade)',
		field: 'Mathematics, Physics, Chemistry',
		institution: 'Narayana Junior College',
		location: 'Hyderabad, India',
		period: '2018 – 2020',
		grade: 'Merit',
		icon: '📚',
		gradient: 'from-blue-500 to-indigo-600',
		glowColor: 'blue-500',
		level: 'Higher Secondary',
		gpa: '92%',
		achievements: ['Merit Scholar', 'Science Olympiad', 'Mathematics Excellence'],
		description: 'Strong foundation in Mathematics and Sciences, preparing for engineering excellence',
		highlights: [
			'Strong foundation in Mathematics and Science',
			'Developed analytical and problem-solving skills',
			'Participated in science exhibitions and competitions',
			'Mathematics Olympiad participant',
			'Achieved excellent scores in competitive entrance exams',
			'Consistent academic performer with merit recognition'
		],
		relevantCourses: [
			'Advanced Mathematics',
			'Physics',
			'Chemistry',
			'English',
			'Computer Science Basics'
		],
		metrics: {
			projects: 6,
			gpa: 92,
			rank: 5
		}
	}
];

const EducationSection = () => {
	const [expandedCard, setExpandedCard] = useState<number | null>(null);
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	return (
		<section id="education" className="py-4 bg-gradient-to-br from-background via-card/10 to-background relative overflow-hidden">
			{/* Floating Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<motion.div
					animate={{
						rotate: 360,
						scale: [1, 1.3, 1],
						opacity: [0.1, 0.2, 0.1]
					}}
					transition={{
						duration: 30,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						rotate: -360,
						scale: [1.3, 1, 1.3],
						opacity: [0.2, 0.1, 0.2]
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "linear"
					}}
					className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
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
							Education
						</h2>
						<motion.div 
							initial={{ width: 0 }}
							whileInView={{ width: 100 }}
							transition={{ delay: 0.3, duration: 1 }}
							viewport={{ once: true }}
							className="h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500 rounded-full mx-auto mb-6"
						/>
						<p className="text-muted-foreground text-lg max-w-3xl mx-auto">
							Academic foundation that shaped my journey in technology and innovation, building the knowledge base for professional excellence
						</p>
					</motion.div>
				</div>

				<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
					{education.map((edu, index) => (
						<motion.div
							key={edu.id}
							initial={{ opacity: 0, y: 50, rotateY: 15 }}
							whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
							transition={{ 
								duration: 0.9, 
								delay: index * 0.3,
								type: "spring",
								stiffness: 80
							}}
							viewport={{ once: true }}
							onHoverStart={() => setHoveredCard(edu.id)}
							onHoverEnd={() => setHoveredCard(null)}
							className="group perspective-1000"
						>
							<div className={`
								relative bg-gradient-to-br from-card/70 to-card-hover/50 backdrop-blur-xl 
								border border-white/20 rounded-2xl overflow-hidden cursor-pointer
								transition-all duration-700 transform-gpu
								${hoveredCard === edu.id ? 'scale-105 shadow-2xl shadow-' + edu.glowColor + '/25' : 'hover:scale-[1.02]'}
								${expandedCard === edu.id ? 'scale-105' : ''}
							`}>
								{/* Animated Background Glow */}
								<motion.div
									animate={hoveredCard === edu.id ? {
										opacity: [0.05, 0.2, 0.05],
										scale: [1, 1.15, 1]
									} : {}}
									transition={{ duration: 2.5, repeat: Infinity }}
									className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
								/>

								{/* Shimmer Effect */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
									<motion.div
										animate={hoveredCard === edu.id ? { x: "-100%" } : { x: "-200%" }}
										transition={{ 
											duration: 1.8, 
											ease: "easeInOut",
											delay: hoveredCard === edu.id ? 0.3 : 0
										}}
										className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12 transform"
									/>
								</div>

								{/* Header Section */}
								<div className="relative p-6 pb-4">
									<div className="flex items-start justify-between mb-4">
										<div className="flex items-center space-x-4">
											<motion.div
												whileHover={{ scale: 1.15, rotate: 10 }}
												className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
											>
												<span className="text-2xl">{edu.icon}</span>
											</motion.div>
											<div>
												<h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
													{edu.degree}
												</h3>
												<div className="flex items-center space-x-2 mt-1">
													<BookOpen size={16} className={`text-${edu.glowColor} group-hover:text-white transition-colors duration-300`} />
													<span className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300 font-medium">
														{edu.institution}
													</span>
												</div>
												<p className="text-sm text-muted-foreground group-hover:text-white/70 transition-colors duration-300 mt-1">
													{edu.field}
												</p>
											</div>
										</div>
										
										<div className="flex flex-col items-end">
											<motion.div
												whileHover={{ scale: 1.05 }}
												className={`px-3 py-1 bg-gradient-to-r ${edu.gradient} rounded-full text-white text-xs font-medium shadow-lg`}
											>
												{edu.level}
											</motion.div>
											<div className="flex items-center mt-2 text-xs text-muted-foreground">
												<MapPin size={12} className="mr-1" />
												{edu.location}
											</div>
										</div>
									</div>

									{/* Academic Metrics Dashboard */}
									<div className="grid grid-cols-3 gap-3 mb-4">
										<motion.div
											whileHover={{ y: -3, scale: 1.05 }}
											className="bg-background/50 rounded-lg p-3 border border-white/10 backdrop-blur-sm"
										>
											<div className="flex items-center justify-between">
												<Target size={16} className={`text-${edu.glowColor}`} />
												<span className="text-xs text-muted-foreground">Projects</span>
											</div>
											<div className="text-lg font-bold text-foreground mt-1">
												{edu.metrics.projects}
											</div>
										</motion.div>
										<motion.div
											whileHover={{ y: -3, scale: 1.05 }}
											className="bg-background/50 rounded-lg p-3 border border-white/10 backdrop-blur-sm"
										>
											<div className="flex items-center justify-between">
												<Star size={16} className="text-yellow-500" />
												<span className="text-xs text-muted-foreground">Score</span>
											</div>
											<div className="text-lg font-bold text-foreground mt-1">
												{edu.metrics.gpa}{edu.id === 1 ? '/10' : '%'}
											</div>
										</motion.div>
										<motion.div
											whileHover={{ y: -3, scale: 1.05 }}
											className="bg-background/50 rounded-lg p-3 border border-white/10 backdrop-blur-sm"
										>
											<div className="flex items-center justify-between">
												<Trophy size={16} className="text-amber-500" />
												<span className="text-xs text-muted-foreground">Rank</span>
											</div>
											<div className="text-lg font-bold text-foreground mt-1">
												Top {edu.metrics.rank}%
											</div>
										</motion.div>
									</div>

									{/* Period & Grade */}
									<div className="flex items-center space-x-4 mb-4">
										<div className="flex items-center space-x-2 text-sm">
											<Calendar size={16} className={`text-${edu.glowColor}`} />
											<span className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
												{edu.period}
											</span>
										</div>
										<div className="flex items-center space-x-2 text-sm">
											<Award size={16} className="text-amber-500" />
											<span className="text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
												{edu.grade}
											</span>
										</div>
									</div>

									{/* Achievements Pills */}
									<div className="flex flex-wrap gap-2 mb-4">
										{edu.achievements.map((achievement, idx) => (
											<motion.div
												key={idx}
												whileHover={{ scale: 1.05, y: -1 }}
												className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-full text-xs"
											>
												<Star size={12} className="text-amber-400" />
												<span className="text-amber-100">{achievement}</span>
											</motion.div>
										))}
									</div>
								</div>

								{/* Content Section */}
								<div className="px-6 pb-6">
									<p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300 mb-4 leading-relaxed">
										{edu.description}
									</p>

									{/* Highlights */}
									<div className="space-y-2 mb-4">
										<AnimatePresence>
											{(expandedCard === edu.id ? edu.highlights : edu.highlights.slice(0, 3)).map((highlight, idx) => (
												<motion.div
													key={idx}
													initial={{ opacity: 0, x: -20 }}
													animate={{ opacity: 1, x: 0 }}
													exit={{ opacity: 0, x: -20 }}
													transition={{ delay: idx * 0.1 }}
													className="flex items-start space-x-3"
												>
													<motion.div
														whileHover={{ scale: 1.3, rotate: 180 }}
														className={`w-2 h-2 bg-gradient-to-r ${edu.gradient} rounded-full mt-2 shadow-lg flex-shrink-0`}
													/>
													<span className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
														{highlight}
													</span>
												</motion.div>
											))}
										</AnimatePresence>
									</div>

									{/* Relevant Courses */}
									<div className="mb-4">
										<h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
											<Users size={14} className="mr-2" />
											Key Courses
										</h4>
										<div className="flex flex-wrap gap-2">
											{edu.relevantCourses.slice(0, 4).map((course, idx) => (
												<motion.span
													key={idx}
													whileHover={{ scale: 1.05, y: -2 }}
													className={`px-3 py-1 bg-gradient-to-r ${edu.gradient} bg-opacity-20 text-foreground border border-white/20 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300`}
												>
													{course}
												</motion.span>
											))}
											{edu.relevantCourses.length > 4 && (
												<span className="px-3 py-1 bg-muted/30 text-muted-foreground rounded-full text-xs">
													+{edu.relevantCourses.length - 4} more
												</span>
											)}
										</div>
									</div>

									{/* Actions */}
									<div className="flex items-center justify-between">
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => setExpandedCard(expandedCard === edu.id ? null : edu.id)}
											className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
										>
											<span>{expandedCard === edu.id ? 'Show Less' : 'Show More'}</span>
											<motion.div
												animate={{ rotate: expandedCard === edu.id ? 90 : 0 }}
												transition={{ duration: 0.3 }}
											>
												<ChevronRight size={16} />
											</motion.div>
										</motion.button>

										<motion.button
											whileHover={{ scale: 1.05, x: 5 }}
											className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${edu.gradient} text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
										>
											<span>View Transcript</span>
											<ExternalLink size={14} />
										</motion.button>
									</div>
								</div>

								{/* GPA Indicator */}
								<div className="absolute top-4 right-4">
									<motion.div
										animate={{ 
											scale: [1, 1.2, 1],
											opacity: [0.8, 1, 0.8]
										}}
										transition={{ duration: 3, repeat: Infinity }}
										className={`w-3 h-3 bg-gradient-to-r ${edu.gradient} rounded-full shadow-lg`}
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Academic Timeline */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-12 text-center"
				>
					<div className="bg-gradient-to-br from-card/30 to-card-hover/20 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
						<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
							Academic Journey
						</h3>
						<div className="flex items-center justify-center space-x-6">
							<motion.div
								whileHover={{ scale: 1.1 }}
								className="flex items-center space-x-2"
							>
								<div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
								<span className="text-sm text-muted-foreground">2018-2020 Foundation</span>
							</motion.div>
							<div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-emerald-500 opacity-30" />
							<motion.div
								whileHover={{ scale: 1.1 }}
								className="flex items-center space-x-2"
							>
								<div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
								<span className="text-sm text-muted-foreground">2020-2024 Specialization</span>
							</div>
						</div>
						<p className="text-muted-foreground text-sm mt-4">
							<span className="font-semibold text-foreground">6 years</span> of dedicated academic pursuit, building expertise in Computer Science and Engineering
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default EducationSection;