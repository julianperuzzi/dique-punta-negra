import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import prestadoresData from '../data/prestadores.json'; // Asegúrate de que la ruta es correcta
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'; // Importa los íconos de WhatsApp e Instagram

function Prestador() {
  const { id } = useParams(); // Obtiene el id del prestador desde la URL
  const [prestador, setPrestador] = useState(null);
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    console.log('Buscando prestador con id:', id); // Verifica que el id es el esperado

    // Convierte el id de la URL a número
    const idNumber = parseInt(id, 10);

    // Busca el prestador con el id correspondiente en el archivo JSON
    const foundPrestador = prestadoresData.find((p) => p.id === idNumber);

    if (foundPrestador) {
      setPrestador(foundPrestador);
    } else {
      console.log('Prestador no encontrado, redirigiendo...');
      // Redirige a la página de directorio si no se encuentra el prestador
      navigate('/directorio');
    }
  }, [id, navigate]);

  if (!prestador) {
    return <p>Cargando...</p>; // Mensaje mientras se carga la información
  }

  return (
    <div className="bg-neutral-100 dark:bg-gray-900 py-32 px-6 min-h-screen">
      <div className="container mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg flex flex-col md:w-3/4 mx-auto md:px-10 text-center">

        <div className='md:w-3/4 mx-auto text-left pt-6'>
          <h2 className="text-3xl font-bold mb-4 text-gray-700 dark:text-white ">
            {prestador.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Servicios: {prestador.services.join(', ')}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Email: <a href={`mailto:${prestador.contact}`} className="text-orange-500 hover:text-orange-700">{prestador.contact}</a>
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Teléfono: <a href={`tel:${prestador.phone}`} className="text-orange-500 hover:text-orange-700">{prestador.phone}</a>
          </p>
          </div>
          

          <div className='md:w-3/4 mx-auto pb-6'>
          <a
            href={`https://wa.me/${prestador.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-green-600 hover:bg-green-700 hover:scale-105 text-white font-bold py-2 px-4 rounded flex items-center justify-center cursor-pointer transition duration-300"
          >
            <FaWhatsapp className="mr-2" /> Contactar por WhatsApp
          </a>

          <a
            href={prestador.instagram} // Asegúrate de que el campo `instagram` contiene el enlace
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gradient-to-bl from-violet-500 via-red-500 to-yellow-400 hover:scale-105 text-white font-bold py-2 px-4 rounded flex items-center justify-center cursor-pointer transition duration-300"
          >
            <FaInstagram className="mr-2" /> Ir al Instagram
          </a>
          </div>
          {/* Botón para volver al directorio */}
          <button
            onClick={() => navigate('/directorio')}
            className="mt-6 w-fit bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            ← Volver al Directorio
          </button>     
        </div>


      </div>
    </div>
  );
}

export default Prestador;
