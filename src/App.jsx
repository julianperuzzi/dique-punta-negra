// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';

import Inicio from './pages/Inicio';
import Embarcaciones from './pages/Embarcaciones';
import Directorio from './pages/Directorio';
import CondicionesClimaticas from './pages/CondicionesClimaticas';
import NotFound from './pages/NotFound';
import Prestador from './pages/Prestador';
import SeguridadNautica from './pages/SeguridadNautica';



function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={ darkMode ? 'dark' : ''}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <ScrollToTop />
        <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path='/Embarcaciones' element={<Embarcaciones />} />
            <Route path='/directorio' element={<Directorio />} />
            <Route path='/Clima' element={<CondicionesClimaticas />} />
            <Route path='/SeguridadNautica' element={<SeguridadNautica />} />
            <Route path="/Prestador/:id" element={<Prestador />} />
            <Route path='/*' element={<NotFound/>} />
          </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
