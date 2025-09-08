import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Monitor } from 'lucide-react';

const TestIndex = () => {
  const [count, setCount] = useState(0);
  const { theme, setTheme, actualTheme } = useTheme();

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: actualTheme === 'dark' ? '#0f172a' : '#ffffff',
      color: actualTheme === 'dark' ? '#ffffff' : '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      cursor: 'default'
    }}>
      <div style={{ textAlign: 'center', maxWidth: '500px', padding: '2rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '2rem',
          background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Portfolio Test ✅
        </h1>
        
        {/* Theme Controls */}
        <div style={{ 
          marginBottom: '2rem', 
          padding: '1rem', 
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          backgroundColor: actualTheme === 'dark' ? '#1e293b' : '#f8fafc'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            Theme Test
          </h2>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <button
              onClick={() => setTheme('light')}
              style={{ 
                padding: '0.5rem', 
                borderRadius: '0.5rem', 
                border: '1px solid #e5e7eb',
                backgroundColor: theme === 'light' ? '#3b82f6' : 'transparent',
                color: theme === 'light' ? 'white' : 'inherit',
                cursor: 'pointer'
              }}
            >
              <Sun size={16} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              style={{ 
                padding: '0.5rem', 
                borderRadius: '0.5rem', 
                border: '1px solid #e5e7eb',
                backgroundColor: theme === 'dark' ? '#3b82f6' : 'transparent',
                color: theme === 'dark' ? 'white' : 'inherit',
                cursor: 'pointer'
              }}
            >
              <Moon size={16} />
            </button>
            <button
              onClick={() => setTheme('system')}
              style={{ 
                padding: '0.5rem', 
                borderRadius: '0.5rem', 
                border: '1px solid #e5e7eb',
                backgroundColor: theme === 'system' ? '#3b82f6' : 'transparent',
                color: theme === 'system' ? 'white' : 'inherit',
                cursor: 'pointer'
              }}
            >
              <Monitor size={16} />
            </button>
          </div>
          <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>
            Current: {theme} → {actualTheme}
          </p>
        </div>
        
        {/* Counter Test */}
        <div style={{ 
          marginBottom: '2rem', 
          padding: '1rem', 
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          backgroundColor: actualTheme === 'dark' ? '#1e293b' : '#f8fafc'
        }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
            React State Test
          </h2>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#3b82f6' }}>
            Count: {count}
          </p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{ 
              backgroundColor: '#3b82f6', 
              color: 'white',
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Increment
          </button>
        </div>
        
        {/* Status */}
        <div style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
          <p style={{ color: '#16a34a', fontWeight: '500' }}>✅ React hooks working</p>
          <p style={{ color: '#16a34a', fontWeight: '500' }}>✅ ThemeProvider working</p>
          <p style={{ color: '#16a34a', fontWeight: '500' }}>✅ Inline styles working</p>
          <p style={{ color: '#16a34a', fontWeight: '500' }}>✅ Lucide icons working</p>
          <p style={{ opacity: 0.7 }}>Cursor should be visible now!</p>
        </div>
      </div>
    </div>
  );
};

export default TestIndex;
