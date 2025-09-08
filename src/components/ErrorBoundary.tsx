import React, { Component, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to analytics service
    console.error('Error caught by boundary:', error, errorInfo);
    
    // In production, you might want to send this to an error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo });
  }

  retry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} retry={this.retry} />;
      }

      return <DefaultErrorFallback error={this.state.error} retry={this.retry} />;
    }

    return this.props.children;
  }
}

// Default error fallback component
const DefaultErrorFallback = ({ error, retry }: { error?: Error; retry: () => void }) => (
  <div className="min-h-screen bg-background flex items-center justify-center p-6">
    <div className="max-w-lg w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-6"
      >
        {/* Error icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center"
        >
          <AlertTriangle className="w-10 h-10 text-red-500" />
        </motion.div>

        {/* Error message */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">Oops! Something went wrong</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We encountered an unexpected error. Don't worry, this has been logged and we're working on fixing it.
          </p>
        </div>

        {/* Error details (only in development) */}
        {process.env.NODE_ENV === 'development' && error && (
          <motion.details
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-left bg-muted/30 rounded-lg p-4 text-sm"
          >
            <summary className="cursor-pointer font-medium text-muted-foreground hover:text-foreground">
              Error Details (Development)
            </summary>
            <pre className="mt-2 text-red-400 overflow-auto">
              {error.name}: {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </motion.details>
        )}

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.button
            whileHover={{}}
            whileTap={{}}
            onClick={retry}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </motion.button>

          <motion.button
            whileHover={{}}
            whileTap={{}}
            onClick={() => window.location.href = '/'}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-muted text-muted-foreground rounded-lg font-medium hover:bg-muted/80 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </motion.button>
        </motion.div>

        {/* Support message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="pt-6 border-t border-border"
        >
          <p className="text-sm text-muted-foreground">
            Still having issues?{' '}
            <a 
              href="mailto:support@yourportfolio.com" 
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <Mail className="w-3 h-3" />
              Contact Support
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

// Section-specific error boundary for smaller components
export const SectionErrorBoundary = ({ 
  children, 
  sectionName 
}: { 
  children: ReactNode; 
  sectionName: string;
}) => (
  <ErrorBoundary
    fallback={({ retry }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 text-center bg-card border border-border rounded-xl"
      >
        <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Error loading {sectionName}
        </h3>
        <p className="text-muted-foreground mb-4">
          Something went wrong while loading this section.
        </p>
        <motion.button
          whileHover={{}}
          whileTap={{}}
          onClick={retry}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retry</span>
        </motion.button>
      </motion.div>
    )}
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundary;
