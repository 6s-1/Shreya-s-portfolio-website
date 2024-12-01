import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './App'; // Main page
import ProjectsPage from './ProjectsPage'; // Projects page

function AppRouter() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
    >
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
     </BrowserRouter>
  );
}

export default AppRouter;
