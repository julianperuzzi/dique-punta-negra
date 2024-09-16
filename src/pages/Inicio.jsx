import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ActivitiesScreen from '../components/ActivitiesScreen';
import ParadoresScreen from '../components/ParadoresScreen';
import ResourcesScreen from '../components/ResourcesScreen';
import SafetySection from '../components/SafetySection';
import PresentationScreen from '../components/PresentationScreen';
import MiniBanner from '../components/MiniBanner';
import FeaturedActivities from '../components/FeaturedActivities';


function Inicio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-300 via-gray-100/50 to-gray-200 dark:bg-gradient-to-tr dark:from-gray-800 dark:via-gray-700 dark:to-gray-900">
      {/* Pantalla de Presentación */}
      <PresentationScreen/>
      <MiniBanner/>
      <FeaturedActivities/>
      <span className='border-t border-gray-400/60 mx-8'></span>
      {/* Información de Actividades */}
      <ActivitiesScreen />
      


      <span className='border-t border-gray-400/60 mx-8'></span>




      {/* Información de Paradores */}
      <ParadoresScreen />
      <span className='border-t border-gray-400/60 mx-8'></span>


       {/* Recursos */}
       <ResourcesScreen />
      <span className='border-t border-gray-400/60 mx-8'></span>

      

      {/* Directorio de Contactos */}
      <SafetySection />
      <span className='border-t border-gray-400/60 mx-8'></span>


      <h3 className='text-center text-2xl font-bold md:pt-16 pb-2 mx-2  pt-10 dark:text-white'>Para más información visita los portales oficiales de Turismo, Cultura y Deporte</h3>
      <a
                href="https://sanjuan.tur.ar/"
                className="text-orange-600 hover:underline font-semibold pb-20 text-xl text-center mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >Página Oficial de Turismo</a>
    </div>
  );
}

export default Inicio;
