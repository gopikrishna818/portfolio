import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Eye, Activity, TrendingUp, Calendar, Users } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  updated_at: string;
  created_at: string;
  topics: string[];
}

interface GitHubUser {
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  avatar_url: string;
}

interface GitHubActivity {
  totalCommits: number;
  streakDays: number;
  languageStats: { [key: string]: number };
  weeklyCommits: number[];
}

const GitHubIntegration: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [activity, setActivity] = useState<GitHubActivity | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = 'gopikrishna818'; // Replace with actual GitHub username

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      setLoading(true);
      
      // Fetch user data
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) throw new Error('Failed to fetch user data');
      const userData = await userResponse.json();
      setUser(userData);

      // Fetch repositories
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
      const reposData = await reposResponse.json();
      setRepos(reposData);

      // Simulate activity data (in production, you'd fetch from GitHub API or a backend)
      const mockActivity: GitHubActivity = {
        totalCommits: 847,
        streakDays: 23,
        languageStats: {
          'TypeScript': 35,
          'Python': 28,
          'JavaScript': 22,
          'Java': 10,
          'CSS': 5
        },
        weeklyCommits: [12, 8, 15, 10, 18, 14, 9]
      };
      setActivity(mockActivity);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch GitHub data');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      'TypeScript': '#3178c6',
      'JavaScript': '#f1e05a',
      'Python': '#3572A5',
      'Java': '#b07219',
      'CSS': '#563d7c',
      'HTML': '#e34c26',
      'React': '#61dafb'
    };
    return colors[language] || '#666';
  };

  if (loading) {
    return (
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-32 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 text-center">
        <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">{error}</p>
        <button 
          onClick={fetchGitHubData}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* GitHub Profile Overview */}
      {user && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-xl p-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={user.avatar_url} 
              alt={user.name}
              className="w-16 h-16 rounded-full border-2 border-border"
            />
            <div>
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Github className="w-5 h-5" />
                {user.name}
              </h3>
              <p className="text-muted-foreground">@{user.login}</p>
              {user.bio && <p className="text-sm text-muted-foreground mt-1">{user.bio}</p>}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-background/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{user.public_repos}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Repositories</div>
            </div>
            <div className="text-center p-3 bg-background/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{user.followers}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Followers</div>
            </div>
            <div className="text-center p-3 bg-background/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{activity?.totalCommits || 0}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Total Commits</div>
            </div>
            <div className="text-center p-3 bg-background/50 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{activity?.streakDays || 0}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Day Streak</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Activity Visualization */}
      {activity && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6"
        >
          <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-500" />
            Coding Activity
          </h4>
          
          {/* Language Distribution */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Language Distribution</span>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="space-y-2">
              {Object.entries(activity.languageStats).map(([language, percentage]) => (
                <div key={language} className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getLanguageColor(language) }}
                  ></div>
                  <span className="text-sm text-muted-foreground min-w-[80px]">{language}</span>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${percentage}%`,
                        backgroundColor: getLanguageColor(language)
                      }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium min-w-[40px] text-right">{percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Commits Chart */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Weekly Activity</span>
              <Calendar className="w-4 h-4 text-purple-500" />
            </div>
            <div className="flex items-end justify-between h-16 gap-1">
              {activity.weeklyCommits.map((commits, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(commits / Math.max(...activity.weeklyCommits)) * 100}%` }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t w-full min-h-[4px]"
                  ></motion.div>
                  <span className="text-xs text-muted-foreground mt-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Recent Repositories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card border border-border rounded-xl p-6"
      >
        <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Github className="w-5 h-5 text-gray-700" />
          Recent Repositories
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.slice(0, 6).map((repo, index) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="block p-4 bg-background border border-border rounded-lg hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-2">
                <h5 className="font-medium text-foreground group-hover:text-blue-600 transition-colors truncate">
                  {repo.name}
                </h5>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="w-3 h-3" />
                  {repo.stargazers_count}
                </div>
              </div>
              
              {repo.description && (
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {repo.description}
                </p>
              )}
              
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  {repo.language && (
                    <div className="flex items-center gap-1">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      ></div>
                      <span className="text-muted-foreground">{repo.language}</span>
                    </div>
                  )}
                </div>
                <span className="text-muted-foreground">
                  Updated {formatDate(repo.updated_at)}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GitHubIntegration;
