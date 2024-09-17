import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS for animations

// Sample paradores data with image URLs
const paradores = [
  {
    title: 'Del Parque Punta Negra',
    description: 'Ofrece una gastronomía avanzada con una diversificación de menús y vistas espectaculares.',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
  },
  {
    title: 'Parador Punta Negra',
    description: 'Disfruta de comida casera y bebidas con vistas al dique.',
    image: 'https://images.pexels.com/photos/2404667/pexels-photo-2404667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
  },
  {
    title: 'La Paz',
    description: 'Un lugar acogedor que ofrece bebidas y cafetería con un ambiente relajado.',
    image: 'https://images.pexels.com/photos/2562560/pexels-photo-2562560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
  },
  {
    title: 'Pier',
    description: 'Ofrece una variedad de bebidas y opciones de cafetería con una vista al dique.',
    image: 'https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
  },
  {
    title: 'Cactus',
    description: 'Ofrece una variedad de bebidas con una vista al dique.',
    image: 'https://images.pexels.com/photos/583791/pexels-photo-583791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace with actual image URL
  },
];

function ParadoresScreen() {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensure animations only happen once
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-10">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl mb-6 text-center text-gray-900 dark:text-white" data-aos="fade-up">
          Paradores
        </h2>
        <Link
            to="/Paradores"

          >
        <div className="flex flex-col justify-center mx-2 md:mx-0 my-8">
          {paradores.map((parador, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-white dark:bg-gray-800 shadow-xl  hover:shadow-2xl transition-all duration-300 ease-in-out mb-2 md:mb-0`}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <img
                src={parador.image}
                alt={parador.title}
                className="w-full md:w-1/2 md:h-56 h-32 object-cover"
              />
              <div className="w-full md:w-1/2 my-2 md:my-0">
                <h3 className="pl-6 text-2xl font-semibold md:mb-4 text-gray-900 dark:text-white">
                  {parador.title}
                </h3>
                <p className="pl-6 text-gray-700 dark:text-gray-300">{parador.description}</p>
              </div>
            </div>
          ))}
        </div></Link>
        {/* Button to navigate to the Paradores page */}
        <div className="mt-16 text-center">
          <Link
            to="/Paradores"
            className="inline-block bg-teal-600 text-white px-6 py-3 shadow-md hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            Ver Información Completa
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ParadoresScreen;
