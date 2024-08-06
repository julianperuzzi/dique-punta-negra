import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-orange-500 dark:text-gray-200 hover:text-orange-700 dark:hover:text-orange-300 transition duration-300 text-2xl font-bold flex flex-row"
        >
          <span className='hidden md:block pr-2'>Dique</span>Punta Negra
        </Link>

        <div className="hidden md:flex space-x-10 font-semibold">
          <Link
            to="/"
            className="text-orange-500 dark:text-gray-200 hover:text-white dark:hover:text-white transition duration-300 px-4 py-2  hover:bg-orange-500 dark:hover:bg-orange-700"
          >
            Inicio
          </Link>
          <Link
            to="/Directorio"
            className="text-orange-500 dark:text-gray-200 hover:text-white dark:hover:text-white transition duration-300 px-4 py-2  hover:bg-orange-500 dark:hover:bg-orange-700"
          >
            Directorio
          </Link>
          <Link
            to="/embarcaciones"
            className="text-orange-500 dark:text-gray-200 hover:text-white dark:hover:text-white transition duration-300 px-4 py-2  hover:bg-orange-500 dark:hover:bg-orange-700"
          >
            Embarcaciones
          </Link>
          <Link
            to="/clima"
            className="text-orange-500 dark:text-gray-200 hover:text-white dark:hover:text-white transition duration-300 px-4 py-2  hover:bg-orange-500 dark:hover:bg-orange-700"
          >
            Clima
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="bg-orange-600 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-400 text-white dark:text-white  p-2 transition duration-300 rounded-full"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
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
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-blue-300 transition duration-300 px-4 py-2  hover:bg-orange-700"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/Directorio"
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-blue-300 transition duration-300 px-4 py-2  hover:bg-orange-700"
                onClick={() => setIsOpen(false)}
              >
                Directorio
              </Link>
              <Link
                to="/Embarcaciones"
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-blue-300 transition duration-300 px-4 py-2  hover:bg-orange-700"
                onClick={() => setIsOpen(false)}
              >
                Embarcaciones
              </Link>
              <Link
                to="/clima"
                className="text-white dark:text-orange-200 hover:text-orange-100 dark:hover:text-blue-300 transition duration-300 px-4 py-2  hover:bg-orange-700"
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
