import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaRegMoon, FaRegSun } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);

  // Función para manejar clics fuera del menú desplegable
  useEffect(() => {
    function handleClickOutside(event) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleResourcesClick = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-950 shadow-lg fixed w-full z-30 mx-auto ">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="dark:text-gray-200 hover:text-orange-500 text-gray-700 dark:hover:text-orange-300 transition duration-300 text-2xl font-bold flex flex-row"
        >
          <span className='hidden md:block pr-2'>Dique</span>Punta Negra
        </Link>

        <div className="hidden md:flex space-x-10 font-semibold">
          <Link
            to="/"
            className="text-orange-500 dark:text-gray-200 hover:text-white dark:hover:text-white transition duration-300 px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
          >
            Inicio
          </Link>

          <Link
            to="/Directorio"
            className="text-orange-500 dark:text-gray-200 hover:text-white dark:hover:text-white transition duration-300 px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
          >
            Directorio
          </Link>

          {/* Enlace de Recursos con submenú desplegable */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={handleResourcesClick}
              className="text-orange-500 dark:text-gray-200 hover:text-white dark:hover:text-white transition duration-300 px-4 py-2 hover:bg-orange-500 dark:hover:bg-gray-700"
            >
              Recursos ▾
            </button>
            {isResourcesOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg  transition-all duration-300"
              >
                <Link
                  to="/Embarcaciones"
                  className="block text-orange-500 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 transition duration-300"
                >
                  Embarcaciones
                </Link>
                <Link
                  to="/Clima"
                  className="block text-orange-500 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 transition duration-300"
                >
                  Clima
                </Link>
                {/* Agrega más enlaces aquí */}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-400 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-400 text-white dark:text-white p-2 transition duration-300 rounded-full"
          >
            {darkMode ? <FaRegSun size={20} /> : <FaRegMoon size={20} />}
          </button>

          <button onClick={handleToggle} className="md:hidden focus:outline-none">
            {isOpen ? <FaTimes size={24} className="text-orange-400 dark:text-white" /> : <FaBars size={24} className="text-orange-400 dark:text-white" />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-orange-500 dark:bg-gray-800 shadow-lg md:hidden transition-all duration-300">
            <div className="flex flex-col space-y-4 py-4">
              <Link
                to="/"
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-orange-300 transition duration-300 px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/Directorio"
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-orange-300 transition duration-300 px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Directorio
              </Link>
              <Link
                to="/Embarcaciones"
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-orange-300 transition duration-300 px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Embarcaciones
              </Link>
              <Link
                to="/Clima"
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-orange-300 transition duration-300 px-4 py-2 hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Clima
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
