import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'; // Importa AOS
import 'aos/dist/aos.css'; // Importa los estilos de AOS

import imgNautica from '../assets/imgSeguridadNautica/imgNautica.jpg';

function SafetySection() {
  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // Hace que la animación ocurra solo una vez al desplazarse
    });
  }, []);

  return (
    <section className="relative min-h-screen py-20 flex items-center">
      {/* Contenedor de la imagen de fondo */}
      <div className="absolute hidden md:block md:left-0 md:w-1/2">
        <img
          src={imgNautica}
          alt="Seguridad Náutica"
          className="h-[80vh] w-full object-cover brightness-75 ml-8"
          data-aos="fade-left" // Añade la animación de AOS
        />
      </div>

      {/* Contenedor de contenido con espacio en el lado derecho en modo escritorio */}
      <div
        className="relative z-10 container mx-auto px-6 md:pl-12 md:pr-24 flex flex-col md:flex-row-reverse items-center justify-center md:justify-start"
        data-aos="fade-left" // Añade la animación de AOS
      >
        <img
          src={imgNautica}
          alt="Seguridad Náutica"
          className="absolute md:hidden block h-96 w-full object-cover brightness-75 mb-8 top-0"
          data-aos="fade-down" // Añade la animación de AOS
        />

        <div
          className="w-full md:w-3/5 p-4 bg-white dark:bg-slate-800 bg-opacity-80 dark:bg-opacity-80 shadow-lg backdrop-blur-lg rounded-lg mt-80 md:mt-auto"
          data-aos="fade-up" // Añade la animación de AOS
        >
          <h2 className="text-4xl font-bold mb-6 text-black/90 dark:text-white uppercase text-center md:text-left">
            Seguridad en el Dique
          </h2>

          <p className="text-lg text-black dark:text-white/90 mb-6">
            El Dique Punta Negra cuenta con un equipo de{' '}
            <span className="font-semibold text-orange-500 uppercase">Seguridad Náutica</span> dedicado a resguardar la seguridad de las personas tanto dentro como fuera del agua para el disfrute de todos.
          </p>

          <p className="text-lg text-black dark:text-white/90 mb-6">
            Este equipo está preparado para situaciones de emergencia acuática y terrestre, incluyendo primeros auxilios. Además, disponen de un{' '}
            <span className="font-semibold text-orange-500">DEA (Desfibrilador Externo Automático)</span> y todo un entrenamiento especializado para que el área del Dique Punta Negra sea un lugar cardioasistido.
          </p>

          <p className="text-lg text-black dark:text-white/90 mb-6">
            También hay presencia de personal policial y de rescate en montaña siempre a disposición para garantizar tu seguridad en cualquier situación.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link to="/embarcaciones" className="text-orange-500 hover:underline text-lg font-semibold">
              Más información sobre embarcaciones
            </Link>
            <Link to="/SeguridadNautica" className="text-orange-500 hover:underline text-lg font-semibold">
              Información sobre Seguridad Náutica
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SafetySection;
