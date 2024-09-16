import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación interna
import video from '../assets/videos/puntanegravideo.mp4'; // Importa el video

function PresentationScreen() {
  useEffect(() => {
    // Cargar el script del widget de clima
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpieza: elimina el script cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] ">
      {/* Video de fondo */}
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Contenido superpuesto */}
      <section className="bg-black bg-opacity-30 dark:bg-opacity-80 backdrop-blur-sm h-[85vh] md:h-[90vh] flex flex-col items-center justify-center relative ">
        <div className="text-left text-white  relative z-10 pl-4 md:w-8/12">
        <p
            className="text-lg md:text-xl mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Descubre un lugar único en San Juan, Argentina.
          </p>
          <h1
            className="text-5xl md:text-6xl md:pb-6 text-shadow"
            data-aos="fade-up"
          >
          Dique Punta Negra
          </h1>
          </div>

          
          {/* Box para explorar actividades */}
          <div
            className="md:mt-10 mt-2 text-left flex flex-row md:items-center items-end md:w-8/12 justify-around pl-4 "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div>
            <h3 className="md:text-2xl text-xl font-bold text-white mb-2">¿Qué te gustaría hacer?</h3>
            <p className="text-lg text-gray-200 mb-6">
              Explora todas las Actividades
            </p>
            <Link
              to="/Actividades"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Ver Actividades
            </Link>
            </div>
            {/* Widget del clima */}
          <div
            className=" text-center relative z-10 w-20  mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              className="weatherwidget-io"
              href="https://forecast7.com/es/n31d56n68d73/zonda/"
              data-font="Fira Sans"
              data-icons="Climacons"
              data-mode="Current"
              data-theme="gray"
              data-basecolor="rgba(255, 255, 255, 0)"
              data-shadow="rgba(0, 0, 0, 0.6)"
              data-suncolor="#ffffff"
            >
              ZONDA WEATHER
            </a>
          </div>

          </div>
        
      </section>
    </section>
  );
}

export default PresentationScreen;
