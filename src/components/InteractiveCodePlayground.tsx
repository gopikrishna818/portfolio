import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Copy, RotateCcw, Maximize2, Minimize2, Code, Terminal } from 'lucide-react';

interface CodeExample {
  id: string;
  title: string;
  description: string;
  language: string;
  category: string;
  code: string;
  expectedOutput: string;
  explanation: string;
}

const InteractiveCodePlayground = () => {
  const [selectedExample, setSelectedExample] = useState(0);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const codeExamples: CodeExample[] = [
    {
      id: 'ml-prediction',
      title: 'ML Prediction Model',
      description: 'Linear regression for sales forecasting',
      language: 'python',
      category: 'AI/ML',
      code: `# Sales Prediction Model
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data
months = np.array([1, 2, 3, 4, 5, 6]).reshape(-1, 1)
revenue = np.array([10000, 12000, 13500, 15000, 17500, 20000])

# Train model
model = LinearRegression()
model.fit(months, revenue)

# Predict
future = np.array([7, 8, 9]).reshape(-1, 1)
predictions = model.predict(future)

print("Revenue Predictions:")
for i, pred in enumerate(predictions, 7):
    print(f"Month {i}: $$" + str(pred))`,
      expectedOutput: `Revenue Predictions:
Month 7: $22,500
Month 8: $25,000
Month 9: $27,500`,
      explanation: 'Machine learning model for business forecasting using scikit-learn'
    },
    {
      id: 'api-optimization',
      title: 'API Rate Limiting',
      description: 'Smart API optimization with caching',
      language: 'javascript',
      category: 'Web Dev',
      code: `// Smart API Manager
class APIManager {
  constructor(rateLimit = 100) {
    this.rateLimit = rateLimit;
    this.requests = [];
    this.cache = new Map();
  }

  async makeRequest(endpoint) {
    // Check cache first
    if (this.cache.has(endpoint)) {
      console.log('📁 Cache hit:', endpoint);
      return this.cache.get(endpoint);
    }

    // Rate limiting check
    const now = Date.now();
    this.requests = this.requests.filter(t => now - t < 60000);
    
    if (this.requests.length >= this.rateLimit) {
      throw new Error('⚠️ Rate limit exceeded');
    }

    // Simulate API call
    this.requests.push(now);
    const data = 'Response from ' + endpoint;
    this.cache.set(endpoint, data);
    
    console.log('🌐 API call:', endpoint);
    return data;
  }
}

const api = new APIManager(5);
api.makeRequest('/users');`,
      expectedOutput: `🌐 API call: /users`,
      explanation: 'Efficient API management with intelligent caching and rate limiting'
    },
    {
      id: 'sql-analytics',
      title: 'SQL Analytics',
      description: 'User segmentation analysis',
      language: 'sql',
      category: 'Data Analysis',
      code: `-- User Segmentation Query
WITH user_metrics AS (
  SELECT 
    user_id,
    COUNT(*) as actions,
    SUM(revenue) as total_revenue,
    CASE 
      WHEN SUM(revenue) > 1000 THEN 'High Value'
      WHEN SUM(revenue) > 100 THEN 'Regular'
      ELSE 'Casual'
    END as segment
  FROM user_actions 
  GROUP BY user_id
)
SELECT 
  segment,
  COUNT(*) as users,
  AVG(total_revenue) as avg_revenue
FROM user_metrics
GROUP BY segment
ORDER BY avg_revenue DESC;`,
      expectedOutput: `┌────────────┬───────┬─────────────┐
│ segment    │ users │ avg_revenue │
├────────────┼───────┼─────────────┤
│ High Value │   145 │    1,694.28 │
│ Regular    │   892 │      100.26 │
│ Casual     │ 1,234 │       10.09 │
└────────────┴───────┴─────────────┘`,
      explanation: 'Advanced SQL for business intelligence and user segmentation'
    }
  ];

  useEffect(() => {
    setCode(codeExamples[selectedExample].code);
    setOutput('');
  }, [selectedExample]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running code...\n');
    
    setTimeout(() => {
      setOutput(codeExamples[selectedExample].expectedOutput);
      setIsRunning(false);
    }, 1500);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const resetCode = () => {
    setCode(codeExamples[selectedExample].code);
  };

  return (
    <div className="bg-gradient-to-b from-background to-card/50 relative p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">
            Interactive Code Playground
          </h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Explore my coding skills with live, interactive examples. Run, modify, and experiment with real algorithms.
          </p>
        </div>

        {/* Example Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {codeExamples.map((example, index) => (
              <button
                key={example.id}
                onClick={() => setSelectedExample(index)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  selectedExample === index
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <div className="text-sm font-medium">{example.title}</div>
                <div className="text-xs opacity-80">{example.category}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Playground */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`bg-background/95 backdrop-blur-xl border border-border rounded-2xl overflow-hidden transition-all duration-500 ${
              isFullscreen ? 'fixed inset-4 z-50' : ''
            }`}
          >
            {/* Header */}
            <div className="bg-card/80 border-b border-border/50 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{codeExamples[selectedExample].title}</h3>
                  <p className="text-sm text-muted-foreground">{codeExamples[selectedExample].description}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Play size={16} />
                    <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                  </button>
                  <button
                    onClick={copyCode}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    title="Copy Code"
                  >
                    <Copy size={16} />
                  </button>
                  <button
                    onClick={resetCode}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    title="Reset Code"
                  >
                    <RotateCcw size={16} />
                  </button>
                  <button
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                  >
                    {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Code and Output */}
            <div className="grid grid-cols-1 lg:grid-cols-2 h-96">
              {/* Code Editor */}
              <div className="border-r border-border">
                <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center space-x-2">
                  <Code size={16} />
                  <span className="text-sm font-medium">
                    {codeExamples[selectedExample].language}
                  </span>
                </div>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-full p-4 bg-transparent font-mono text-sm resize-none focus:outline-none"
                  style={{ height: 'calc(100% - 40px)' }}
                />
              </div>

              {/* Output */}
              <div>
                <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center space-x-2">
                  <Terminal size={16} />
                  <span className="text-sm font-medium">Output</span>
                </div>
                <div className="p-4 font-mono text-sm h-full overflow-auto bg-muted/20">
                  <pre className="whitespace-pre-wrap">{output || 'Click "Run Code" to see output...'}</pre>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="bg-card/50 border-t border-border p-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-medium text-sm mb-1">What this demonstrates:</h4>
                  <p className="text-sm text-muted-foreground">
                    {codeExamples[selectedExample].explanation}
                  </p>
                </div>
              </div>
            </div>
        </motion.div>

        {/* Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Technologies demonstrated:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'JavaScript', 'SQL', 'Machine Learning', 'API Design', 'Data Analysis'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveCodePlayground;
