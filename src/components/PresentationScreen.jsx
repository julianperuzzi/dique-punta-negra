import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import video from '../assets/videos/puntanegravideo.mp4';
import prestadores from '../data/prestadores.json';
import Modal from './Modal';

function PresentationScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPrestadores, setFilteredPrestadores] = useState([]);
  const [selectedPrestador, setSelectedPrestador] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredPrestadores([]);
      return;
    }

    const lowercasedSearchTerm = searchTerm.toLowerCase();

    // Filtrar prestadores por nombre o por los servicios ofrecidos
    const filtered = prestadores.filter((prestador) => {
      const name = prestador.name ? prestador.name.toLowerCase() : '';
      const services = prestador.services
        ? prestador.services.map((service) => service.toLowerCase())
        : [];

      // Buscar en el nombre o en los servicios
      return (
        name.includes(lowercasedSearchTerm) ||
        services.some((service) => service.includes(lowercasedSearchTerm))
      );
    });

    // Limitar a un máximo de 3 resultados
    const limitedResults = filtered.slice(0, 3);

    setFilteredPrestadores(limitedResults);
  }, [searchTerm]);

  const handlePrestadorClick = (prestador) => {
    setSelectedPrestador(prestador);
    setIsModalOpen(true);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      <section className="bg-black bg-opacity-30 dark:bg-opacity-80 backdrop-blur-sm h-full w-full flex flex-col items-center justify-center relative">
        <div className="text-center text-white relative z-10 px-4 md:w-8/12">
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

        <div
          className="md:mt-10 mt-4 text-center flex flex-col items-center justify-center w-full px-4 md:w-8/12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h3 className="md:text-2xl text-xl font-bold text-white mb-2">
            ¿Qué te gustaría hacer?
          </h3>
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

        <div className="mt-10 w-full flex flex-row items-center justify-center ">
        <input
           type="text"
             placeholder="Buscar Prestadores o Actividades..."
             value={searchTerm}
             onChange={handleInputChange}
            className="p-2 rounded-lg md:w-1/2 w-10/12 text-center border-gray-300 focus:outline-none focus:border-teal-500 transition-colors border-4"
          />

        </div>

        <div className="mt-1 w-full flex flex-col items-center ">
          {filteredPrestadores.length === 0 && searchTerm.trim() !== '' && (
            <p className="text-gray-100">
              No se encontraron resultados para "{searchTerm}"
            </p>
          )}
          {filteredPrestadores.map((prestador) => (
            <div
              key={prestador.id}
              className="bg-slate-100 p-1 mb-1 shadow-md w-10/12 md:w-1/2 cursor-pointer text-left font-extralight text-xs z-30 md:text-center"
              onClick={() => handlePrestadorClick(prestador)}
            >
              <h3 className="text-lg font-normal text-teal-700">{prestador.name}</h3>
              <p className='font-bold text-gray-600'>{prestador.services.join(" - ")}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedPrestador && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          prestador={selectedPrestador}
        />
      )}
    </section>
  );
}

export default PresentationScreen;
