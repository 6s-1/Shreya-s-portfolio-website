import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App.jsx';



//main.jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename="/Shreya-s-portfolio-website"> {/* Replace <repository-name> with your actual repository name */}
      <App />
    </Router>
  </StrictMode>,
  
);
//