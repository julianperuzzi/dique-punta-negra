import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import prestadoresData from '../data/prestadores.json'; // Asegúrate de que la ruta es correcta

function Prestador() {
  const { id } = useParams(); // Obtiene el id del prestador desde la URL
  const [prestador, setPrestador] = useState(null);
  const navigate = useNavigate(); // Hook para la navegación

  useEffect(() => {
    console.log('Buscando prestador con id:', id); // Verifica que el id es el esperado

    // Convierte el id de la URL a número
    const idNumber = parseInt(id, 10);

    // Busca el prestador con el id correspondiente en el archivo JSON
    const foundPrestador = prestadoresData.find(p => p.id === idNumber);

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
        <div className="bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-orange-700 dark:text-white">
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
          <a
            href={`https://wa.me/${prestador.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-orange-700"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Prestador;
