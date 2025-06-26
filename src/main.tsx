import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary, { ErrorInfo } from './components/ErrorBoundary';
import './index.css';

// Log errors to an error reporting service
const logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
  console.error('Error caught by error boundary:', error, errorInfo);
  // In a real app, you would send this to an error reporting service
  // like Sentry, LogRocket, etc.
};

// Render the app
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary onError={logErrorToService}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

// Log any unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);
  // In a real app, you would log this to an error reporting service
});
