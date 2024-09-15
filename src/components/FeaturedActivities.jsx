import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Importa el módulo Autoplay
import prestadores from "../data/prestadores"; // Asegúrate de que la ruta sea correcta

const PrestadoresCarousel = ({ swiperConfig }) => {
  const defaultConfig = {
    spaceBetween: 10,
    slidesPerView: 1, // Configuración predeterminada para móviles
    breakpoints: {
      768: {
        slidesPerView: 3, // Configuración predeterminada para pantallas medianas
        spaceBetween: 20,
      },
    },
    loop: true,
    autoplay: {
      delay: 5000, // Desplazamiento automático cada 5 segundos (5000 ms)
      disableOnInteraction: false, // El autoplay no se desactiva al interactuar con el carrusel
    },
  };

  // Fusionar la configuración por defecto con la que se pasa por props
  const mergedConfig = { ...defaultConfig, ...swiperConfig };

  return (
    <div className="w-full py-10 md:py-20 relative justify-center bg-gradient-to-tr from-teal-400 via-teal-600 to-teal-300">
      <h3 className="text-4xl text-center md:mb-10 mb-4 text-white">Destacados ✨</h3>
      <div className="container mx-auto px-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]} // Agrega el módulo Autoplay
          {...mergedConfig} // Usar la configuración fusionada
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
        >
          {prestadores.map((prestador) => (
            <SwiperSlide key={prestador.id}>
              <div className="flex flex-col bg-white shadow-lg overflow-hidden transition-transform transform rounded-lg ">
                <div className="h-48">
                  <img
                    src={prestador.images[0]} // Muestra la primera imagen del prestador
                    alt={prestador.name}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="p-6 grid grid-cols-1">
                  <h3 className="text-2xl font-bold mb-2 text-teal-600">{prestador.name}</h3>

                  <p className="text-gray-600">
                    <span className="font-semibold">Teléfono: </span>
                    {prestador.phone}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Servicios: </span>
                    {prestador.services.join(", ")}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href={prestador.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:underline"
                    >
                      Instagram
                    </a>

                    {/* Botón de contacto por WhatsApp */}
                    <a
                      href={`https://wa.me/${prestador.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación personalizados */}
        <div className="swiper-button-prev absolute left-1 top-1/2 transform -translate-y-20 z-10 cursor-pointer text-white text-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next absolute right-3 top-1/2 transform -translate-y-20 z-10 cursor-pointer text-white text-shadow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PrestadoresCarousel;
