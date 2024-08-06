import React from 'react';
import { Link } from 'react-router-dom';

import imgNautica from '../assets/imgSeguridadNautica/imgComunicacion.jpeg';

function SafetySection() {
  return (
    <section className="">
        <div className="bg-white/95 dark:bg-slate-800  dark:bg-opacity-95 backdrop-blur-sm min-h-screen flex items-center justify-center flex-col py-24">
        <h2 className="text-4xl font-bold md:mb-6 text-center text-orange-500 dark:text-white w-full py-6 uppercase">Seguridad en el Dique</h2>

          <div className="flex flex-col md:flex-row-reverse items-center md:mx-8 gap-6 justify-center text-center md:text-left">
            
            <div className="md:w-2/5 md:max-h-[70vh] mx-auto ">
              <img
                src={imgNautica}
                alt="Seguridad Náutica"
                className=" brightness-75 contrast-125 bg-orange-500 md:w-11/12 md:max-h-[70vh]"
              />
            </div>

            <div className="mx-auto md:w-3/5 p-4 ">
              
              <p className="text-lg text-black dark:text-white/90 mb-6 border-l-2 pl-4 border-orange-600  md:border-none md:pl-0 text-left ">
                El Dique Punta Negra cuenta con un equipo de <span className="font-semibold text-orange-500 uppercase">Seguridad Náutica</span> dedicado a resguardar la seguridad de las personas tanto dentro como fuera del agua para el disfrute de todos.
              </p>
              <p className="text-lg text-black dark:text-white/90 mb-6 border-l-2 pl-4 border-orange-600  md:border-none md:pl-0 text-left ">
                Este equipo está preparado para situaciones de emergencia acuática y terrestre, incluyendo primeros auxilios. Además, disponen de un <span className="font-semibold text-orange-500">DEA (Desfibrilador Externo Automático)</span> y todo un entrenamiento especializado para que el área del Dique Punta Negra sea un lugar cardioasistido.
              </p>
              <p className="text-lg text-black dark:text-white/90 mb-6 border-l-2 pl-4 border-orange-600  md:border-none md:pl-0 text-left ">
                También hay presencia de personal policial y de rescate en montaña siempre a disposición para garantizar tu seguridad en cualquier situación.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <Link to="/embarcaciones" className="text-orange-500 hover:underline text-lg font-semibold">
                  Más información sobre embarcaciones
                </Link>
                <Link to="/seguridad-nautica" className="text-orange-500 hover:underline text-lg font-semibold">
                  Información sobre Seguridad Náutica
                </Link>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default SafetySection;
