import React from 'react';
import Header from './components/Header.js';
import NavBar from './components/NavBar.js';
import About from './components/pages/About';
import Endeavors from './components/pages/Endeavors';
import Catalogue from './components/pages/Catalogue';
import Contact from './components/pages/Contact';
import Footer from './components/pages/Footer.js';
import RefreshRedirect from './components/RefreshRedirect.js'; // Import the RefreshRedirect component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/NavBar.css';
import './components/Responsive.css';

function App() {
  return (
    <Router>
      <NavBar />
      <RefreshRedirect /> {/* Add the RefreshRedirect component */}
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' element={<About />} />
        <Route path='/endeavors' element={<Endeavors />} />
        <Route path='/catalogue' element={<Catalogue />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
