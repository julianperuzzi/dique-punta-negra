import React from 'react';
import { Parallax } from 'react-parallax';
import imgParadores from '../assets/imgDown/fotocatamaranmuelle.jpg'; // Ajusta la ruta según la ubicación de tu imagen
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
    <Parallax
      bgImage={imgParadores}
      bgImageAlt="Paradores"
      strength={300}
      bgImageStyle={{ objectFit: "cover", width: "100%" }}
    >
      <div className="bg-black bg-opacity-50 dark:bg-opacity-70 backdrop-blur-sm min-h-screen flex items-center justify-center py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center text-white bg-black/30 p-2 uppercase" data-aos="fade-up">
            Paradores
          </h2>
          <div className="flex flex-wrap md:grid md:grid-cols-2 md:flex-none gap-6 justify-center mx-4 md:mx-0 my-8">
            {paradores.map((parador, index) => (
              <div
                key={index}
                className="flex-1 min-w-[300px] bg-gray-100 p-4 shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100} 
              >
                <h3 className="text-xl font-semibold mb-3 text-orange-500">{parador.title}</h3>
                <p className='text-neutral-600 text-sm'>{parador.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Parallax>
  );
}

export default ParadoresScreen;
