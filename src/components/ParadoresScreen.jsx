import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS

const paradores = [
  {
    title: 'Del Parque Punta Negra',
    description: 'Ofrece una gastronomía avanzada con una diversificación de menús y vistas espectaculares.',
  },
  {
    title: 'Parador Punta Negra',
    description: 'Disfruta de comida casera y bebidas con vistas al dique.',
  },
  {
    title: 'La Paz',
    description: 'Un lugar acogedor que ofrece bebidas y cafetería con un ambiente relajado.',
  },
  {
    title: 'Pier',
    description: 'Ofrece una variedad de bebidas y opciones de cafetería con una vista al dique.',
  },
];

function ParadoresScreen() {
  // Inicializa AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Hace que la animación ocurra solo una vez
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center py-10">
      {/* Fondo */}
      <div className="absolute inset-0  dark:to-black"></div>

      <div className="container mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-6 text-center text-gray-900 dark:text-white" data-aos="fade-up">
          Paradores
        </h2>
        <div className="flex flex-wrap md:grid md:grid-cols-2 md:flex-none md:gap-12 gap-4 justify-center mx-4 md:mx-0 my-8">
          {paradores.map((parador, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-gray-800 p-6 shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
              data-aos="zoom-in"
              data-aos-delay={index * 50}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-gray-50 dark:to-gray-800 opacity-0 hover:opacity-20 transition-opacity duration-300 ease-in-out rounded-xl"></div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{parador.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{parador.description}</p>
            </div>
          ))}
        </div>
        {/* Botón para ir a la página de Paradores */}
        <div className="mt-8 text-center">
          <Link
            to="/paradores"
            className="inline-block bg-gray-700 text-white px-6 py-3 shadow-md hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            Ver Información Completa
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ParadoresScreen;
