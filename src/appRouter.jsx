import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './App'; // Main page
import ProjectsPage from './ProjectsPage'; // Projects page

function AppRouter() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
  );
}

export default AppRouter;
