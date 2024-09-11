// src/components/PrestadorCard.js
import React from "react";
import { FaWhatsapp, FaPhone, FaEnvelope, FaInfoCircle } from "react-icons/fa";

function PrestadorCard({ prestador, onOpenModal }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 duration-200 relative border-l-4 border-teal-600">
      <h3 className="text-2xl font-bold md:mb-2 text-orange-500 dark:text-white uppercase">
        {prestador.name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 font-light">
        Servicios:
        <div className="flex flex-wrap gap-2 mt-2">
          {prestador.services.map((service, i) => (
            <span
              key={i}
              className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs font-medium uppercase"
            >
              {service}
            </span>
          ))}
        </div>
      </p>

      {/* Mostrar contacto solo si existe */}
      {prestador.contact && (
        <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center">
          <FaEnvelope className="mr-2 text-orange-500" />
          {prestador.contact}
        </p>
      )}

      <p className="text-gray-600 dark:text-gray-300 mb-2 flex items-center">
        <FaPhone className="mr-2 text-orange-500" />
        <a
          href={`tel:${prestador.phone}`}
          className="hover:text-orange-600 transition-colors"
        >
          {prestador.phone}
        </a>
      </p>

      <div className="flex flex-col gap-2 md:mt-4">
        <button
          onClick={() => onOpenModal(prestador)}
          className="flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700 px-4 py-2 font-medium tracking-wider border-0 transition duration-200"
        >
          <FaInfoCircle className="mr-2" />
          Más Información
        </button>

        <a
          href={`https://wa.me/${prestador.phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center text-white bg-green-500 hover:bg-green-600 px-4 py-2 font-medium tracking-wider border-0 transition duration-200"
        >
          <FaWhatsapp className="mr-2" />
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
}

export default PrestadorCard;
