import React from 'react';
import video from '../assets/videos/5104156-hd_1280_720_30fps.mp4'; // Importa el video

function PresentationScreen() {
  return (
    <section className="relative">
      {/* Video de fondo */}
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      {/* Contenido superpuesto */}
      <section className="bg-black bg-opacity-30 dark:bg-opacity-80 backdrop-blur-sm h-screen flex flex-col items-center justify-center relative">
        <div className="text-left md:text-center text-white p-10 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 md:pb-6 text-shadow" data-aos="fade-up">
            Bienvenidos al Dique<span className="text-orange-500"> Punta Negra</span>
          </h1>
          <p className="text-lg md:text-2xl border-l-4 border-orange-500 pl-4 md:pl-0 md:border-l-0 md:border-t-2 md:pt-4" data-aos="fade-up" data-aos-delay="200">
            Descubre un lugar único en San Juan, Argentina. Explora sus actividades y servicios.
          </p>
        </div>
      </section>
    </section>
  );
}

export default PresentationScreen;
