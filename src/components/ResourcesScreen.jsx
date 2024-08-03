import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS

function ResourcesScreen() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-pink-600 py-12 px-6 text-white h-screen content-center" >
      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-10 text-center">Conoce Más</h2>

        
        {/* Contenedor del mapa y la información */}
        <div className="flex flex-col lg:flex-row gap-8">    
          

          {/* Información sobre primeros auxilios */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-3xl font-semibold mb-4 text-center">Área de Primeros Auxilios</h3>
            <p className=" mb-4">
              Hay un área designada para primeros auxilios cerca del dique para atender emergencias. También hay un DEA (Desfibrilador Externo Automático) en las cercanías de los paradores.
            </p>
            <p className="">
              Si deseas aprender más sobre primeros auxilios, puedes consultar el siguiente enlace:             
            </p>
            <a href="https://www.grcp-arg.website" className="text-blue-500 hover:underline " target="_blank" rel="noopener noreferrer"> Aprende Primeros Auxilios</a>


            <p className="mt-4">
              Para más información sobre los paradores, visita el directorio: 
            </p>
            <Link to="/prestadores" className="text-blue-500 hover:underline"> Directorio de Paradores</Link>.

          </div>
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8906.267574453095!2d-68.83570083227434!3d-31.525902604021393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96814c6d428e14e5%3A0x6625f10804493022!2sEmbarcadero%20Punta%20Negra!5e0!3m2!1ses!2sar!4v1722642197572!5m2!1ses!2sar"
              width="600"
              height="450"
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
