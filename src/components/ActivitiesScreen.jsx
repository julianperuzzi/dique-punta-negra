import React, { useState } from 'react';
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
    title: 'Buceo',
    description: 'Explora Punta Negra aprendiendo o practicando buceo debajo del el agua.',
  },
  {
    title: 'Juegos de Playa',
    description: 'Disfruta de Juegos para todas las edades.',
  },
  {
    title: 'Ferias y Música',
    description: 'Entre montañas, feriantes y música llenan este hermoso lugar.',
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

  // Muestra solo los primeros 4 elementos en la vista móvil, o todos si showAll es true
  const displayedActivities = showAll ? activities : activities.slice(0, 4);

  // Inicializa AOS
  React.useEffect(() => {
    AOS.init({
      duration: 700,
      once: true, // Hace que la animación ocurra solo una vez
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center relative ">

      
      <div className="container mx-auto relative z-10">
      <h2 className="text-5xl font-bold my-10 text-center text-gray-900 dark:text-white" data-aos="fade-up">
          Actividades
        </h2>
        
        <div className="flex flex-wrap md:grid md:grid-cols-4 md:flex-none gap-4 mx-2 md:mx-0 my-8">
          {displayedActivities.map((activity, index) => (
            <div
              key={index}
              className="flex-1 min-w-[300px] bg-white p-4 shadow-lg flex flex-col justify-between backdrop-blur-md rounded-tl-xl"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-500">{activity.title}</h3>
                <p className="text-gray-700 mb-3 text-sm">{activity.description}</p>
              </div>
              <div>
                <Link to="/directorio" className="text-teal-600 font-semibold text-sm hover:underline">
                  Ir a Directorio de Prestadores
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {!showAll && (
          <div className="text-center mt-4">
            <button 
              onClick={handleShowMore} 
              className="bg-orange-600 text-white py-2 px-4 hover:bg-orange-500 my-8"
            >
              Mostrar más
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivitiesScreen;
