import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// Importación de imágenes
import imagen1 from '../assets/imgSeguridadNautica/rescatepractica.jpg';
import imagen2 from '../assets/imgSeguridadNautica/rescatecamilla.jpg';
import imagen3 from '../assets/imgSeguridadNautica/revalida.jpg';

function SeguridadNautica() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const zigzagStyle = (reverse) => ({
    display: 'flex',
    flexDirection: reverse ? 'row-reverse' : 'row',
    alignItems: 'center',
    gap: '2rem',
  });

  const Section = ({ reverse, title, text, image }) => (
    <div
      className="bg-white dark:bg-gray-800 p-8 shadow-xl rounded-xl mb-8"
      data-aos="fade-up"
      style={zigzagStyle(reverse)}
    >
      <img
        src={image}
        alt={title}
        className="md:w-1/2 hidden md:block h-full object-cover rounded-xl shadow-lg"
      />
      <div className="md:w-1/2 w-full">
        <h3 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );

  return (
    <div className="relative text-black dark:text-white min-h-screen">
      {/* Carrusel de imágenes */}
      <div className="absolute inset-0 z-0">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-full h-[60vh] md:h-[70vh] bg-gradient-to-tr from-neutral-800 via-black to-neutral-900"
        >
          <SwiperSlide>
            <img
              src={imagen1}
              alt="Guardavidas en acción"
              className="w-full h-full object-cover opacity-50"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imagen2}
              alt="Equipo de seguridad náutica"
              className="w-full h-full object-cover opacity-50"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={imagen3}
              alt="Capacitación en primeros auxilios"
              className="w-full h-full object-cover opacity-50"
            />
          </SwiperSlide>
        </Swiper>
        {/* Capa de opacidad oscura */}
        <div className="absolute inset-0 z-10"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-[60vh] md:h-[70vh]">
        <h2 className="text-5xl font-bold mb-4 text-center text-white uppercase border-b-2 border-white/40 pb-8">
          Seguridad Náutica
        </h2>
        <p className="text-xl text-center text-gray-200 mb-12 uppercase">San Juan, Argentina</p>
      </div>

      {/* Secciones en zigzag */}
      <div className="relative z-20 py-16 px-6">
        <div className="container mx-auto" data-aos="fade-up">
          <Section
            reverse={false}
            title="Personal Certificado"
            text="El equipo de seguridad está conformado por guardavidas certificados 
                  por la provincia, quienes revalidan sus certificaciones anualmente. 
                  Estos profesionales están capacitados en diversas áreas de seguridad acuática 
                  y están presentes en el Dique Punta Negra, así como en otros lugares 
                  importantes como el Dique de Ullum, San Agustín y Cuesta del Viento."
            image={imagen1}
          />
          <Section
            reverse={true}
            title="Disponibilidad Completa"
            text="Los guardavidas están disponibles los 365 días del año, sin importar 
                  si es feriado o día festivo, ni las condiciones climáticas. La seguridad 
                  de los visitantes es la prioridad."
            image={imagen2}
          />
          <Section
            reverse={false}
            title="Capacitación en Rescate y Primeros Auxilios"
            text="El equipo está altamente capacitado en técnicas de rescate en 
                  múltiples ambientes, incluyendo aguas abiertas, piscinas y ríos. 
                  Además, están entrenados en primeros auxilios avanzados y en el uso 
                  de Desfibriladores Externos Automáticos (DEA)."
            image={imagen3}
          />
          <Section
            reverse={true}
            title="Colaboración con Fuerzas Provinciales"
            text="El equipo de seguridad náutica colabora de manera interdisciplinaria 
                  con diversas fuerzas de la provincia, incluyendo la policía, bomberos 
                  y equipos de rescate. Esta colaboración permite ofrecer una respuesta 
                  rápida y efectiva en situaciones de emergencia."
            image={imagen1}
          />
          <Section
            reverse={false}
            title="Agenda Anual de Seguridad"
            text="La seguridad en el Dique incluye una agenda anual que abarca la revalidación 
                  de conocimientos y prácticas, la temporada fuerte de turismo en verano 
                  con refuerzos en los espejos de agua, un simposio de técnicas de rescate, 
                  y capacitaciones tanto internas como externas."
            image={imagen2}
          />
        </div>
      </div>
    </div>
  );
}

export default SeguridadNautica;
