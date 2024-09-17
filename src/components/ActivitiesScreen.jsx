import React from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS

// Imágenes de Pexels
const activities = [
  { title: 'Kayak', image: 'https://images.pexels.com/photos/1655037/pexels-photo-1655037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Pesca', image: 'https://images.pexels.com/photos/3690705/pexels-photo-3690705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Catamarán', image: 'https://images.pexels.com/photos/19418950/pexels-photo-19418950/free-photo-of-mar-agua-barca-viaje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Trekking', image: 'https://images.pexels.com/photos/667236/pexels-photo-667236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Standup Paddle', image: 'https://images.pexels.com/photos/19197444/pexels-photo-19197444/free-photo-of-equipo-recreacion-reconstruccion-recreo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { title: 'Gastronomía', image: 'https://images.pexels.com/photos/1089930/pexels-photo-1089930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

function ActivitiesScreen() {
  // Inicializa AOS
  React.useEffect(() => {
    AOS.init({
      duration: 700,
      once: true, // Hace que la animación ocurra solo una vez
    });
  }, []);

  return (
    <div className="md:min-h-[20vh] min-h-screen flex items-center relative mb-10 md:mb-24 md:mt-10">
      <div className="container mx-auto relative md:px-4 px-2">
        <h2 className="text-4xl  my-10 text-center text-gray-900" data-aos="fade-up">
          Actividades
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 md:gap-4 gap-2">
          {activities.map((activity, index) => (
            <Link 
              key={index} 
              to="/Actividades" 
              className="relative block bg-white overflow-hidden rounded-lg shadow-lg group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img 
                src={activity.image} 
                alt={activity.title} 
                className="w-full md:h-[50vh] h-[40vh]  object-cover transition-transform transform group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black md:bg-opacity-40 bg-opacity-30 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                  <p className="text-sm">¡Descubre y disfruta al máximo!</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivitiesScreen;
