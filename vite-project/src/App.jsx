import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import ServicesSection from './components/ServicesSection';

const AnimatedRoutes = () => {
  const location = useLocation(); // Get current route

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/services" element={<ServicesSection />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
