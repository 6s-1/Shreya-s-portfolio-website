import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Make base path available globally
window.BASE_PATH = import.meta.env.DEV ? '/' : '/Shreya-s-portfolio-website/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={import.meta.env.DEV ? '/' : '/Shreya-s-portfolio-website'}>
      <App />
    </Router>
  </StrictMode>,
);