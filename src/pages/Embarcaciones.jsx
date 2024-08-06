import React, { useState } from 'react';

import kayakImage from '../assets/imgDown/49455928437_fbfbacfcdd_o.jpg';
import boatImage from '../assets/imgDown/40432437944_2b02a622e5_o.jpg';
import safetyImage from '../assets/imgDown/26272110537_a0a223b2c7_o.jpg';

import { Parallax } from 'react-parallax';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import AOS from 'aos'; // Importa AOS

function Embarcaciones() {
  const sections = [
    {
      title: 'Kayak Simple Particular',
      description:
        'Para kayaks simples particulares, es necesario traer los siguientes requisitos:',
      requirements: [
        'Chaleco salvavidas',
        'Cuerda de 3 metros',
        'Silbato',
        'Remo',
        'Handie (frecuencia 156.800 hertz)',
        'Elemento reflectante (espejo, etc.)',
      ],
      image: kayakImage,
    },
    {
      title: 'Kayak Doble o Más',
      description:
        'Para kayaks dobles o más, es necesario contar con los siguientes requisitos:',
      requirements: [
        'Chaleco por cada persona embarcada',
        'Matrícula de embarcación',
        'Anual pago',
        'Cuerda de 3 metros',
        'Silbato',
        'Remos',
        'Handie (frecuencia 156.800 hertz)',
        'Elemento reflectante (espejo, etc.)',
      ],
      image: kayakImage,
    },
    {
      title: 'Lancha / Semirrígido / Tracker a Motor',
      description:
        'Para lanchas, semirrígidos y trackers a motor, se requiere lo siguiente:',
      requirements: [
        'Chaleco por cada persona embarcada',
        'Matrícula de embarcación',
        'Anual pago',
        'Carnet de conductor náutico',
        'Cuerda de más de 3 metros',
        'Silbato',
        'Remos (minimo 2)',
        'Handie (frecuencia 156.800 hertz)',
        'Elemento reflectante (espejo, etc.)',
        'Balde de achique',
        'Elementos de flotación (circular)',
      ],
      image: boatImage,
    },
    {
        title: 'Kayak y Embarcaciones de Alquiler',
        description:
          'Los kayaks y las embarcaciones de alquiler que pertencen a los prestadores, son inspeccionadas por Seguridad Náutica periódicamente para asegurarse de que estén en óptimas condiciones.',
        image: kayakImage,
      },
  ];



  React.useEffect(() => {
    AOS.init({ duration: 1000 });
    
  }, []);


  return (
    <section className='bg-white dark:bg-slate-900'>
      {/* Sección de Parallax */}
      <Parallax
        bgImage={safetyImage}
        strength={300}
        bgImageStyle={{ objectFit: "cover", width: "100%" }}
      >
        <div className="h-96 flex flex-col justify-center items-center bg-black bg-opacity-50 dark:bg-opacity-80 backdrop-blur-sm min-h-screen " >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 md:text-center text-left border-b-2 border-white pb-10 md:w-8/12 mx-4">
            Embarcaciones en el Dique Punta Negra
          </h2>
          <h2 className="text-2xl text-white mx-4 md:mx-0  mt-10 border-l-2 pl-4 border-orange-600  md:border-none md:pl-0 text-left " >
            Conoce los requisitos para disfrutar de la navegación
          </h2>
          <h2 className="text-3xl text-white border-l-2 pl-4 border-orange-600  md:border-none md:pl-0 text-left  mt-16 font-bold uppercase" >
            Seguridad Náutica 
          </h2>
        </div>
      </Parallax>

      <div className="container mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold my-10 text-center text-gray-900 dark:text-white mx-2">
          Requisitos para Ingreso de Embarcaciones al Dique Punta Negra
        </h2>

        {/* Sección de advertencias y recomendaciones */}
        <div className="mb-8">
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-4 px-8">
            Antes de venir al dique a navegar, se recomienda verificar el clima
            y el viento para evitar inconvenientes. Siempre deben acatar las
            instrucciones de Seguridad Náutica ante todo.
          </p>
        </div>

        {/* Secciones de requisitos para diferentes embarcaciones */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-xl mb-10 overflow-hidden mx-1 md:mx-0"
          >
            <div className="md:flex" data-aos="fade-right" >
              <div className="md:w-1/2 md:h-80" >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {section.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {section.description}
                </p>
                {section.requirements && (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {section.requirements.map((requirement, i) => (
                      <li key={i}>{requirement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Información de contacto */}
        <div className="text-center py-10 mx-4">
          <p className="text-2xl text-gray-700 dark:text-gray-300 font-bold">
            Para comunicarte con Seguridad Náutica, puedes llamar o enviar un
            WhatsApp al número: <a href="tel:2646703953" className="text-orange-500 hover:text-orange-700">2646703953</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Embarcaciones;
