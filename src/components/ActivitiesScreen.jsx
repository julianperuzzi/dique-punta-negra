import React, { useState } from 'react';
import { Parallax } from 'react-parallax';
import backgroundImage from '../assets/imgHome/imgRemandoPN.avif'; // Ajusta la ruta según la ubicación de tu imagen
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS

const activities = [
  {
    title: 'Kayak',
    description: 'Disfruta de un paseo en kayak por el dique, ideal para aventureros y familias.',
  },
  {
    title: 'Pesca',
    description: 'Un lugar perfecto para los amantes de la pesca con distintas especies para capturar. Nota: Las actividades de pesca requieren un permiso de medio ambiente.',
  },
  {
    title: 'Viaje en Catamarán',
    description: 'Relájate y disfruta de un paseo en catamarán por el dique con guías que te acompañaran.',
  },
  {
    title: 'Pesca Embarcado',
    description: 'Disfruta de la pesca en la totalidad del dique con guías especializados.',
  },
  {
    title: 'Trekking',
    description: 'Explora los senderos naturales con rutas de diferentes niveles de dificultad.',
  },
  {
    title: 'Standup Paddle',
    description: 'Navega por el dique mientras te mantienes de pie sobre una tabla.',
  },
  
  {
    title: 'Hidropedales',
    description: 'Diviértete con un paseo en hidropedales sobre el agua.',
  },
  {
    title: 'Gastronomía',
    description: 'Descubre la oferta gastronómica local en los diversos paradores del dique.',
  }
];

function ActivitiesScreen() {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
  };

  // Muestra solo los primeros 3 elementos en la vista móvil, o todos si showAll es true
  const displayedActivities = showAll ? activities : activities.slice(0, 4);

  // Inicializa AOS
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Parallax
      bgImage={backgroundImage}
      strength={200}
      bgImageStyle={{ objectFit: "cover", width: "100%" }}
    >
      <div className="bg-black bg-opacity-50 dark:bg-opacity-70 backdrop-blur-sm min-h-screen flex items-center ">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold my-6 text-center text-white bg-black/30 p-2 uppercase">Actividades</h2>
          <div className="flex flex-wrap md:grid md:grid-cols-4 md:flex-none gap-6 mx-4 md:mx-0 my-8 ">
            {displayedActivities.map((activity, index) => (
              <div
                key={index}
                className="flex-1 min-w-[300px] bg-white p-6 shadow-lg flex flex-col justify-between backdrop-blur-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-pink-500">{activity.title}</h3>
                  <p className='text-gray-700 mb-4'>{activity.description}</p>
                </div>
                <div>
                  <Link to="/directorio" className="text-rose-500 font-semibold hover:underline">Ir a Directorio de Prestadores</Link>
                </div>
              </div>
            ))}
          </div>
          {!showAll && (
            <div className="text-center mt-4">
              <button 
                onClick={handleShowMore} 
                className="bg-pink-700 text-white py-2 px-4 hover:bg-pink-500 my-8"
              >
                Mostrar más
              </button>
            </div>
          )}
        </div>
      </div>
    </Parallax>
  );
}

export default ActivitiesScreen;
