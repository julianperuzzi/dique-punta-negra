import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos principales de Swiper
import "swiper/css/navigation"; // Importa los estilos de la navegación
import "swiper/css/pagination"; // Importa los estilos de la paginación
import { Navigation, Pagination } from "swiper/modules";
import {
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

function Modal({ isOpen, onClose, prestador }) {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Asegúrate de tener un enlace embebible para Google Maps.
  const embedLocation = prestador.location.replace(
    "https://maps.app.goo.gl/",
    "https://www.google.com/maps/embed?pb="
  );

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-md shadow-xl overflow-y-auto py-2"
    >
      <div
        ref={modalRef}
        className="bg-white shadow-lg relative w-11/12 md:w-10/12 md:max-h-[95vh] h-full overflow-y-auto rounded-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-teal-600 hover:text-red-500 z-10 backdrop-blur-xl p-2"
        >
          <FaTimes size={24} />
        </button>

        {/* Carrusel de Imágenes */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={2}
          pagination={{ clickable: true }}
          className="mb-4"
        >
          {prestador.images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Imagen ${index + 1}`}
                className="w-full h-64 md:h-96 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="px-4 py-6">
          <h3 className="text-2xl font-bold text-gray-600 mb-4">
            {prestador.name}
          </h3>

          {/* Información del Prestador */}
          <div className="space-y-2 grid md:grid-cols-2 grid-cols-1 w-full my-6">
            <div className="text-gray-600 space-y-4">
              <p>
                <strong>Descripción:</strong> {prestador.description}
              </p>
              <p>
                <strong>Servicios:</strong> {prestador.services.join(", ")}
              </p>
              <p>
                <strong>Horario de Operación:</strong> {prestador.operationHours}
              </p>
              <p>
                <strong>Precios:</strong> {prestador.prices}
              </p>
              <p>
                <strong>Duración:</strong> {prestador.duration}
              </p>
              <p>
                <strong>Capacidad Máxima:</strong> {prestador.maxCapacity}
              </p>
              <p>
                <strong>Idiomas:</strong> {prestador.languages.join(", ")}
              </p>
              <p>
                <strong>Certificación:</strong> {prestador.certifications}
              </p>
              <p>
                <strong>Política de Cancelación:</strong> {prestador.cancellationPolicy}
              </p>
            </div>

            {/* Mapa de Ubicación con Google Maps */}
            <div className="h-64 md:h-full w-full">
              <iframe
                title="Ubicación del Prestador"
                src={embedLocation}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-wrap gap-4 justify-around border-t-2 border-gray-100 pt-8">
            <a
              href={prestador.location}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white px-4 py-2  shadow-md space-x-2"
            >
              <FaMapMarkerAlt />
              <span>Ver Ubicación</span>
            </a>
            <a
              href={prestador.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2  shadow-md space-x-2"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a
              href={prestador.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-800 text-white px-4 py-2  shadow-md space-x-2"
            >
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a
              href={`tel:${prestador.phone}`}
              className="flex items-center justify-center bg-gray-500 hover:bg-gray-700 text-white px-4 py-2  shadow-md space-x-2"
            >
              <FaPhone />
              <span>Llamar</span>
            </a>

            <a
              href={`https://wa.me/${prestador.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                " *Hola buenos días!* Me contacto para más información"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-600 hover:bg-green-800 text-white px-4 py-2 shadow-md space-x-2"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mensaje Adicional */}
          <div className="mt-8 text-center text-gray-600">
            <p>
              Para más información, comunícate por los canales oficiales de Turismo San Juan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
