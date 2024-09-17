import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import prestadores from "../data/prestadores"; // Asegúrate de que la ruta sea correcta
import Modal from "./Modal"; // Importa el componente Modal

const RecommendedActivities = ({ swiperConfig }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrestador, setSelectedPrestador] = useState(null);

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

  const mergedConfig = { ...defaultConfig, ...swiperConfig };

  const prestadoresFiltrados = prestadores.filter(prestador => prestador.recommendationLevel === 1 ||prestador.recommendationLevel === 2 );

  const handleOpenModal = (prestador) => {
    setSelectedPrestador(prestador);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPrestador(null);
  };

  return (
    <div className="w-full py-10 md:py-20 relative justify-center">
      <h3 className="text-2xl text-center md:mb-10 mb-4 text-gray-600 ">Nuestros Recomendamos </h3>
      <div className="container mx-auto px-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          {...mergedConfig}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
        >
          {prestadoresFiltrados.map((prestador) => (
            <SwiperSlide key={prestador.id}>
              <div 
                className="flex flex-col bg-white shadow-lg overflow-hidden transition-transform transform rounded-lg cursor-pointer mb-4"
                onClick={() => handleOpenModal(prestador)}
              >
                <div className="h-36">
                  <img
                    src={prestador.images[0]}
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

      {/* Renderizar el Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        prestador={selectedPrestador}
      />
    </div>
  );
};

export default RecommendedActivities;
