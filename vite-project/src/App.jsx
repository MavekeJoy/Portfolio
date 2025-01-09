// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandPage from './components/LandingPage';
import AboutMe from './components/AboutMe';  // Import AboutMe component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/about" element={<AboutMe />} /> {/* Add route for AboutMe */}
      </Routes>
    </Router>
  );
};

export default App;
