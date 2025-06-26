/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Manrope', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2E7D32',
        'primary-dark': '#276A2B', // 10% darker version of primary for hover state
        accent: '#FF7043',
        surface: '#F9FAFB',
        info: '#2DD4BF',
        'text-primary': '#1F2937',
        'text-secondary': '#6B7280',
        'wellness-coral': '#FF7043',
        'herbal-green': '#2E7D32',
        'aloe-teal': '#2DD4BF',
        // New semantic colors for consistency
        'action-blue': '#3B82F6',
        'action-blue-dark': '#1D4ED8',
        'action-blue-light': '#60A5FA',
        'action-blue-border': '#3B82F6',
        'action-blue-text': '#1E40AF',
        'success-green': '#10B981',
        'success-green-dark': '#059669',
        'success-green-light': '#34D399',
        'success-green-border': '#10B981',
        'success-green-text': '#047857',
        'error-red': '#EF4444',
        'error-red-dark': '#DC2626',
        'error-red-light': '#F87171',
        'error-red-border': '#EF4444',
        'error-red-text': '#B91C1C',
      },
      spacing: {
        '13': '3.25rem', // 52px - golden ratio spacing
        '21': '5.25rem', // 84px - golden ratio spacing
        '34': '8.5rem',  // 136px - golden ratio spacing
        '55': '13.75rem', // 220px - golden ratio spacing
      },
      backgroundImage: {
        'gradient-wellness': 'linear-gradient(135deg, #F9FAFB 0%, #E5F5EC 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.8) 100%)',
      },
      animation: {
        'gentle-pulse': 'gentlePulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gentlePulse: {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.1',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  plugins: [],
};