// src/App.jsx

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Inicio from './pages/Inicio';
import Prestadores from './pages/Prestadores';
// import PrimerosAuxilios from './pages/PrimerosAuxilios';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />
        
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Prestadores" element={<Prestadores />} />
            {/* <Route path="/PrimerosAuxilios" element={<PrimerosAuxilios />} /> */}
          </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
