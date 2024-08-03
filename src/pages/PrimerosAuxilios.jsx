// src/pages/Prestadores.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Prestadores() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center" data-aos="fade-up">
          Directorio de Contacto
        </h1>
        <ul className="space-y-6" data-aos="fade-up" data-aos-delay="100">
          <li className="bg-rose-500 dark:bg-rose-600 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Restaurante La Costa</h2>
            <p>Tel: (123) 456-7890</p>
          </li>
          <li className="bg-rose-500 dark:bg-rose-600 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Alquiler de Kayaks Punta Negra</h2>
            <p>Tel: (098) 765-4321</p>
          </li>
          <li className="bg-rose-500 dark:bg-rose-600 text-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold">Camping Los Pinos</h2>
            <p>Tel: (987) 654-3210</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Prestadores;
