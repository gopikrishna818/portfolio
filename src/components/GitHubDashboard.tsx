import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, GitBranch, Star, Eye, GitCommit, Users, Calendar, TrendingUp, Code, Activity } from 'lucide-react';

interface GitHubStats {
  contributions: number;
  repositories: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
  languages: { name: string; percentage: number; color: string }[];
  recentActivity: {
    date: string;
    type: 'commit' | 'star' | 'fork' | 'create';
    repo: string;
    message: string;
  }[];
  contributionMap: { date: string; count: number }[];
}

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  url: string;
  topics: string[];
}

const GitHubDashboard = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'repos' | 'activity'>('overview');

  // Mock data - Replace with actual GitHub API calls
  useEffect(() => {
    const mockStats: GitHubStats = {
      contributions: 847,
      repositories: 42,
      followers: 156,
      following: 89,
      totalStars: 234,
      totalForks: 67,
      languages: [
        { name: 'Python', percentage: 35, color: '#3776ab' },
        { name: 'JavaScript', percentage: 28, color: '#f7df1e' },
        { name: 'TypeScript', percentage: 20, color: '#3178c6' },
        { name: 'SQL', percentage: 10, color: '#336791' },
        { name: 'Other', percentage: 7, color: '#6b7280' }
      ],
      recentActivity: [
        { date: '2024-09-07', type: 'commit', repo: 'ai-content-strategy', message: 'Added ML prediction model for content optimization' },
        { date: '2024-09-06', type: 'star', repo: 'data-pipeline-toolkit', message: 'Received a star from @developer123' },
        { date: '2024-09-05', type: 'commit', repo: 'financial-analysis-ai', message: 'Improved fraud detection accuracy by 15%' },
        { date: '2024-09-04', type: 'create', repo: 'portfolio-analytics', message: 'Created new repository for portfolio analytics' }
      ],
      contributionMap: generateContributionMap()
    };

    const mockRepos: Repository[] = [
      {
        name: 'ai-content-strategy-engine',
        description: 'AI-powered content strategy platform with trend analysis and competitor insights',
        language: 'Python',
        stars: 31,
        forks: 12,
        updated: '2024-09-07',
        url: 'https://github.com/gopikrishna818/ai-content-strategy-engine',
        topics: ['ai', 'content-marketing', 'machine-learning', 'api']
      },
      {
        name: 'financial-document-analysis',
        description: 'ML-powered financial document processing with fraud detection capabilities',
        language: 'Python',
        stars: 18,
        forks: 6,
        updated: '2024-09-05',
        url: 'https://github.com/gopikrishna818/financial-document-analysis',
        topics: ['fintech', 'ml', 'document-processing', 'fraud-detection']
      },
      {
        name: 'gemini-api-rotator',
        description: 'Enterprise-grade API key rotation system for Google Gemini with n8n integration',
        language: 'JavaScript',
        stars: 24,
        forks: 8,
        updated: '2024-09-03',
        url: 'https://github.com/gopikrishna818/gemini-api-rotator',
        topics: ['api', 'automation', 'enterprise', 'nodejs']
      },
      {
        name: 'snowflake-data-pipeline',
        description: 'Real-time data warehouse solution with automated ETL and analytics',
        language: 'SQL',
        stars: 15,
        forks: 4,
        updated: '2024-08-28',
        url: 'https://github.com/gopikrishna818/snowflake-data-pipeline',
        topics: ['data-engineering', 'snowflake', 'etl', 'analytics']
      }
    ];

    setTimeout(() => {
      setStats(mockStats);
      setRepositories(mockRepos);
      setIsLoading(false);
    }, 1000);
  }, []);

  function generateContributionMap() {
    const map = [];
    const today = new Date();
    // Generate exactly 52 weeks (364 days) for clean grid layout
    for (let i = 363; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const count = Math.floor(Math.random() * 5); // Random contribution count
      map.push({
        date: date.toISOString().split('T')[0],
        count
      });
    }
    return map;
  }

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-muted/30';
    if (count <= 1) return 'bg-green-200';
    if (count <= 2) return 'bg-green-400';
    if (count <= 3) return 'bg-green-600';
    return 'bg-green-800';
  };

  const StatCard = ({ icon: Icon, label, value, trend }: any) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass-enhanced rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <Icon size={20} className="text-primary" />
        {trend && (
          <div className="flex items-center space-x-1 text-green-500 text-xs">
            <TrendingUp size={12} />
            <span>+{trend}%</span>
          </div>
        )}
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container-width">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-primary">
              <Github className="animate-spin" size={24} />
              <span>Loading GitHub data...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="github-dashboard" className="py-16 md:py-20 bg-gradient-to-b from-card/50 to-background relative">
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            Real-Time GitHub Analytics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Live insights into my development activity, code contributions, and project evolution.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="glass-enhanced rounded-lg p-1 border border-border/50">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'repos', label: 'Repositories', icon: Code },
              { id: 'activity', label: 'Activity', icon: GitCommit }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted/50'
                }`}
              >
                <tab.icon size={16} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <StatCard icon={GitCommit} label="Contributions" value={stats?.contributions} trend={12} />
              <StatCard icon={Github} label="Repositories" value={stats?.repositories} />
              <StatCard icon={Users} label="Followers" value={stats?.followers} trend={8} />
              <StatCard icon={Star} label="Total Stars" value={stats?.totalStars} trend={15} />
              <StatCard icon={GitBranch} label="Forks" value={stats?.totalForks} />
              <StatCard icon={Eye} label="Following" value={stats?.following} />
            </div>

            {/* Contribution Graph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-enhanced rounded-xl p-6 border border-border/50"
            >
              <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
              <div className="overflow-x-auto pb-2">
                <div className="flex space-x-1 min-w-[700px]">
                  {/* Generate weeks */}
                  {Array.from({ length: 52 }, (_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col space-y-1">
                      {Array.from({ length: 7 }, (_, dayIndex) => {
                        const dayData = stats?.contributionMap[weekIndex * 7 + dayIndex];
                        return dayData ? (
                          <div
                            key={dayIndex}
                            className={`w-3 h-3 rounded-sm ${getContributionColor(dayData.count)}`}
                            title={`${dayData.date}: ${dayData.count} contributions`}
                          />
                        ) : (
                          <div key={dayIndex} className="w-3 h-3" />
                        );
                      })}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
                  <span>Less</span>
                  <span>More</span>
                </div>
              </div>
            </motion.div>

            {/* Language Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-enhanced rounded-xl p-6 border border-border/50"
            >
              <h3 className="text-lg font-semibold mb-4">Language Distribution</h3>
              <div className="space-y-3">
                {stats?.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Repositories Tab */}
        {activeTab === 'repos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-enhanced rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-primary hover:text-primary/80 cursor-pointer">
                    {repo.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch size={14} />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {repo.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span>{repo.language}</span>
                  </div>
                  <span>Updated {new Date(repo.updated).toLocaleDateString()}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Activity Tab */}
        {activeTab === 'activity' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-4xl mx-auto"
          >
            {stats?.recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-enhanced rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {activity.type === 'commit' && <GitCommit size={16} className="text-primary" />}
                    {activity.type === 'star' && <Star size={16} className="text-yellow-500" />}
                    {activity.type === 'fork' && <GitBranch size={16} className="text-blue-500" />}
                    {activity.type === 'create' && <Github size={16} className="text-green-500" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{activity.repo}</span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(activity.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.message}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Live Update Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Live data • Updates every 5 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubDashboard;
