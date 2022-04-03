import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Storm from './components/pages/Storm';
import Lake from './components/pages/Lake';
import Aurora from './components/pages/Aurora';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Oslo from './components/pages/Oslo';
import Maldives from './components/pages/Maldives';
import Tenerife from './components/pages/Tenerife';
import Switzerland from './components/pages/Switzerland';
import Madagascar from './components/pages/Madagascar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storm" element={<Storm />} />
          <Route path="/aurora" element={<Aurora />} />
          <Route path="/lake" element={<Lake />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/oslo" element={<Oslo />} />
          <Route path="/maldives" element={<Maldives />} />
          <Route path="/tenerife" element={<Tenerife />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/madagascar" element={<Madagascar />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
