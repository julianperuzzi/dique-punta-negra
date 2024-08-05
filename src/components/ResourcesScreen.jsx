import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS

function ResourcesScreen() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white py-12 px-6 text-black dark:bg-slate-800 dark:text-white min-h-screen content-center">
      <div className=" container  mx-auto " data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-10 text-center text-pink-600 w-full p-2 uppercase dark:text-white">Conoce Más</h2>

        {/* Contenedor del mapa y la información */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="md:w-2/3 text-left">
          
            {/* Nueva sección: Cómo llegar al dique */}
            <h3 className=" text-xl font-semibold mb-4 bg-pink-600 px-3 py-1 text-white ">
              Cómo Llegar al Dique Punta Negra
            </h3>
            <p className="mb-4">
              El Dique Punta Negra está ubicado a unos pocos kilómetros de San
              Juan, Argentina. Puedes llegar tomando la Ruta Provincial
              12 o 60. Tambien hay opciones de transporte público.
            </p>
            <p className="mb-4">
              Para más información precisa sobre rutas y horarios, te
              recomendamos visitar la{' '}
              <a
                href="https://sanjuan.tur.ar/"
                className="text-rose-600 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                página de Turismo Oficial
              </a>
              
            </p>

            {/* Nueva sección: Información sobre embarcaciones */}
            <h3 className=" text-xl font-semibold mt-8 mb-4 bg-pink-600 px-3 py-1 text-white">
              Información sobre Embarcaciones
            </h3>
            <p className="mb-4">
              Si planeas ingresar al dique con tu embarcación, asegúrate de
              cumplir con los requisitos de seguridad y permisos necesarios.
              Visita nuestra sección dedicada a embarcaciones:
            </p>
            <Link
              to="/embarcaciones"
              className="text-rose-600 hover:underline font-semibold"
            >
              Requisitos Embarcaciones en Punta Negra
            </Link>
            


            <h3 className=" text-xl font-semibold mt-8 bg-pink-600 px-3 py-1 text-white">
              Área de Primeros Auxilios
            </h3>
            <p className="my-4">
              Hay un área designada para primeros auxilios. También hay un DEA (Desfibrilador Externo
              Automático) en las cercanías de los paradores.
            </p>
            <p className="">
              Si deseas aprender más sobre primeros auxilios, ingresa al siguiente enlace:
            </p>
            <a
              href="https://www.grcp-arg.website"
              className="text-rose-600 hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aprende Primeros Auxilios
            </a>

            <p className="mt-4">
              Para más información sobre los paradores, visita el directorio:
            </p>
            <Link to="/directorio" className="text-rose-600 hover:underline font-semibold">
              Directorio de Paradores
            </Link>
          </div>

          {/* Mapa de Google */}
          <div className="md:w-1/3 flex justify-center mb-8 md:mb-0">
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
  );
}

export default ResourcesScreen;
