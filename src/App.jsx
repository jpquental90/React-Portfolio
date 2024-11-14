import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Projects from './pages/Projects';
import About from './pages/About';

// This function brings up the key pages of the app
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="about/*" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
