import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'

// This function brings up the key pages of the app
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects/*" element={<Projects />} />
        <Route path="contact/*" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
