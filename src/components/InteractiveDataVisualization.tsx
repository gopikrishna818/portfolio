import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { TrendingUp, Users, Award, Code, Database, Brain } from 'lucide-react';

// Sample data for visualizations
const experienceData = [
  { year: '2019', projects: 5, clients: 3, satisfaction: 85 },
  { year: '2020', projects: 12, clients: 8, satisfaction: 92 },
  { year: '2021', projects: 18, clients: 15, satisfaction: 94 },
  { year: '2022', projects: 25, clients: 22, satisfaction: 96 },
  { year: '2023', projects: 32, clients: 28, satisfaction: 98 },
  { year: '2024', projects: 45, clients: 35, satisfaction: 99 }
];

const skillsRadarData = [
  { skill: 'Python', proficiency: 95 },
  { skill: 'Machine Learning', proficiency: 90 },
  { skill: 'Data Visualization', proficiency: 88 },
  { skill: 'SQL', proficiency: 92 },
  { skill: 'Cloud Computing', proficiency: 85 },
  { skill: 'Deep Learning', proficiency: 87 }
];

const projectTypesData = [
  { name: 'ML Models', value: 35, color: '#8B5CF6' },
  { name: 'Data Analytics', value: 25, color: '#06B6D4' },
  { name: 'AI Solutions', value: 20, color: '#10B981' },
  { name: 'Automation', value: 15, color: '#F59E0B' },
  { name: 'Research', value: 5, color: '#EF4444' }
];

const impactMetrics = [
  { 
    icon: TrendingUp, 
    title: 'Revenue Increase', 
    value: '+$2.5M', 
    description: 'Generated through data-driven insights',
    color: '#10B981'
  },
  { 
    icon: Users, 
    title: 'Clients Served', 
    value: '50+', 
    description: 'Across various industries',
    color: '#06B6D4'
  },
  { 
    icon: Award, 
    title: 'Success Rate', 
    value: '98%', 
    description: 'Project completion satisfaction',
    color: '#8B5CF6'
  },
  { 
    icon: Code, 
    title: 'Models Deployed', 
    value: '150+', 
    description: 'Production ML models',
    color: '#F59E0B'
  }
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-4 shadow-xl">
        <p className="font-semibold text-foreground">{`Year: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="capitalize">
            {`${entry.dataKey}: ${entry.value}${entry.dataKey === 'satisfaction' ? '%' : ''}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * value));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-bold text-3xl">
      {count}{suffix}
    </span>
  );
};

// Interactive Chart Components
const InteractiveBarChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border"
    >
      <h3 className="text-xl font-semibold mb-4 text-foreground">Project Growth Over Time</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={experienceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="year" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="projects" 
            fill="url(#projectGradient)" 
            radius={[4, 4, 0, 0]}
          />
          <defs>
            <linearGradient id="projectGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

const InteractiveLineChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border"
    >
      <h3 className="text-xl font-semibold mb-4 text-foreground">Client Satisfaction Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={experienceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="year" stroke="#9CA3AF" />
          <YAxis domain={[80, 100]} stroke="#9CA3AF" />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="satisfaction" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

const InteractiveRadarChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border"
    >
      <h3 className="text-xl font-semibold mb-4 text-foreground">Skills Proficiency</h3>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={skillsRadarData}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12, fill: '#9CA3AF' }} />
          <PolarRadiusAxis angle={0} domain={[0, 100]} tick={false} />
          <Radar
            name="Proficiency"
            dataKey="proficiency"
            stroke="#8B5CF6"
            fill="#8B5CF6"
            fillOpacity={0.3}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

const InteractivePieChart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border"
    >
      <h3 className="text-xl font-semibold mb-4 text-foreground">Project Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={projectTypesData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            onMouseLeave={onPieLeave}
          >
            {projectTypesData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color}
                stroke={activeIndex === index ? '#fff' : 'none'}
                strokeWidth={activeIndex === index ? 2 : 0}
              />
            ))}
          </Pie>
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background/95 backdrop-blur-sm border rounded-lg p-3 shadow-xl">
                    <p className="font-semibold">{payload[0].name}</p>
                    <p style={{ color: payload[0].payload.color }}>
                      {payload[0].value}% of projects
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {projectTypesData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Interactive Data Visualization Component
const InteractiveDataVisualization = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/50">
      <div className="container-width">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6">
            Data-Driven Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visualizing my journey through interactive charts and metrics
          </p>
        </motion.div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border text-center hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${metric.color}20` }}
              >
                <metric.icon size={32} color={metric.color} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2" style={{ color: metric.color }}>
                <AnimatedCounter value={parseInt(metric.value.replace(/[^\d]/g, ''))} suffix={metric.value.replace(/[\d]/g, '')} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{metric.title}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InteractiveBarChart />
          <InteractiveLineChart />
          <InteractiveRadarChart />
          <InteractivePieChart />
        </div>
      </div>
    </section>
  );
};

export default InteractiveDataVisualization;
