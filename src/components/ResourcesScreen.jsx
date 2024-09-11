import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS

function ResourcesScreen() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Hace que la animación ocurra solo una vez
    });
  }, []);

  return (
    <div className="py-12 px-2 text-black dark:text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-5xl font-bold mb-10 text-center text-gray-900 dark:text-white">
          Conoce Más
        </h2>

        {/* Contenedor del mapa y la información */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="md:w-2/3 text-left">
            {/* Nueva sección: Cómo llegar al dique */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow-xl  mb-8" data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-white">
                Cómo Llegar al Dique Punta Negra
              </h3>
              <p className="mb-4">
                El Dique Punta Negra está ubicado a unos pocos kilómetros de San
                Juan, Argentina. Puedes llegar tomando la Ruta Provincial
                12 o 60. También hay opciones de transporte público.
              </p>
              <p className="mb-4">
                Para más información precisa sobre rutas y horarios, te
                recomendamos visitar la{' '}
                <a
                  href="https://sanjuan.tur.ar/"
                  className="text-orange-500 hover:underline font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  página de Turismo Oficial
                </a>
              </p>
            </div>

            {/* Nueva sección: Transporte Público */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow-xl  mb-8" data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-white">
                Transporte Público al Dique Punta Negra
              </h3>
              <p className="mb-4">
                A través de la línea 162 de la RedTulum se puede conectar el Dique de Ullum con Punta Negra. La misma tiene salida desde Plaza Laprida en diferentes horarios:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Lunes a viernes: 8:45 y 16:00 horas</li>
                <li>Sábados y domingos: 9:00, 13:00 y 17:30 horas</li>
              </ul>
              <p className="mb-4">
                El regreso desde el embarcadero de Punta Negra es en los siguientes horarios:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Lunes a viernes: 10:50 y 18:30 horas</li>
                <li>Sábados y domingos: 11:05, 15:03 y 19:35 horas</li>
              </ul>
            </div>

            {/* Nueva sección: Información sobre embarcaciones */}
            <div className="bg-white dark:bg-gray-800 p-6 shadow-xl  mb-8" data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-white">
                Información sobre Embarcaciones
              </h3>
              <p className="mb-4">
                Si planeas ingresar al dique con tu embarcación, asegúrate de
                cumplir con los requisitos de seguridad y permisos necesarios.
                Visita nuestra sección dedicada a embarcaciones:
              </p>
              <Link
                to="/embarcaciones"
                className="text-orange-500 hover:underline font-semibold"
              >
                Requisitos Embarcaciones en Punta Negra
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 shadow-xl " data-aos="fade-up">
              <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-white">
                Área de Primeros Auxilios
              </h3>
              <p className="mb-4">
                Hay un área designada para primeros auxilios. También hay un DEA (Desfibrilador Externo
                Automático) en las cercanías de los paradores.
              </p>
              <p>
                Si deseas aprender más sobre primeros auxilios, ingresa al siguiente enlace:
              </p>
              <a
                href="https://www.grcp-arg.website"
                className="text-orange-500 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aprende Primeros Auxilios
              </a>
              <p className="mt-4">
                Para más información sobre los paradores, visita el directorio:
              </p>
              <Link to="/directorio" className="text-orange-500 hover:underline font-semibold">
                Directorio de Paradores
              </Link>
            </div>
          </div>

          {/* Mapa de Google */}
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
            <div className="relative w-full shadow-xl  overflow-hidden" data-aos="zoom-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8906.267574453095!2d-68.83570083227434!3d-31.525902604021393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96814c6d428e14e5%3A0x6625f10804493022!2sEmbarcadero%20Punta%20Negra!5e0!3m2!1ses!2sar!4v1722642197572!5m2!1ses!2sar"
                width="600"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Punta Negra"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResourcesScreen;
