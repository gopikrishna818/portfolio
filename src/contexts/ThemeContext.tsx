// SIMPLEST POSSIBLE THEME CONTEXT - NO REACT HOOKS
export interface ThemeContextType {
  theme: 'dark' | 'light' | 'system';
  setTheme: (theme: 'dark' | 'light' | 'system') => void;
  actualTheme: 'dark' | 'light';
}

// Mock implementation - no hooks, no context, no React
const mockThemeValue: ThemeContextType = {
  theme: 'dark',
  setTheme: () => console.log('Theme change (mock)'),
  actualTheme: 'dark'
};

// Simple function - no hooks
export const useTheme = (): ThemeContextType => {
  return mockThemeValue;
};

// Simple wrapper component - no hooks, no state
export const ThemeProvider = ({ children }: { children: any }) => {
  // Set dark theme immediately when this file loads
  if (typeof document !== 'undefined') {
    document.documentElement.className = 'dark';
  }
  
  // Just return children, no context provider
  return children;
};
