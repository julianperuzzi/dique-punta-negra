// src/components/PrestadorCard.js
import React from "react";
import { FaWhatsapp, FaPhone, FaInfoCircle } from "react-icons/fa";

function PrestadorCard({ prestador, onOpenModal }) {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 relative border-l-4 border-teal-600">

      {/* Imagen del prestador */}
      <div className="relative md:h-40 h-32">
        <img
          src={prestador.images[0]}
          alt={prestador.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="md:p-6 p-3">
        <h3 className="md:text-2xl texl-xl font-bold text-teal-600 dark:text-teal-300 uppercase md:mb-2">
          {prestador.name}
        </h3>
        <p className="text-gray-800 dark:text-gray-300 mb-4 font-light">
          Servicios:
          <div className="flex flex-wrap gap-2 mt-2">
            {prestador.services.map((service, i) => (
              <span
                key={i}
                className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 text-xs font-medium rounded-full"
              >
                {service}
              </span>
            ))}
          </div>
        </p>

        <p className="text-gray-800 dark:text-gray-300 mb-4 flex items-center">
          <FaPhone className="mr-2 text-teal-600 dark:text-teal-300" />
          <a
            href={`tel:${prestador.phone}`}
            className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          >
            {prestador.phone}
          </a>
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={() => onOpenModal(prestador)}
            className="flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 px-4 md:py-2 py-1 font-medium tracking-wider rounded-lg shadow-md transition duration-200"
          >
            <FaInfoCircle className="mr-2" />
            Más Información
          </button>

          <a
            href={`https://wa.me/${prestador.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white bg-green-500 hover:bg-green-600 px-4 md:py-2 py-1 font-medium tracking-wider rounded-lg shadow-md transition duration-200"
          >
            <FaWhatsapp className="mr-2" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrestadorCard;
