import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ActivitiesScreen from '../components/ActivitiesScreen';
import ParadoresScreen from '../components/ParadoresScreen';
import ResourcesScreen from '../components/ResourcesScreen';
import SafetySection from '../components/SafetySection';
import PresentationScreen from '../components/PresentationScreen';

function Inicio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col bg-neutral-50">
      {/* Pantalla de Presentación */}
      <PresentationScreen/>

      {/* Información de Actividades */}
      <ActivitiesScreen />

      
      {/* Recursos */}
      <ResourcesScreen />


      {/* Información de Paradores */}
      <ParadoresScreen />

      

      {/* Directorio de Contactos */}
      <SafetySection />


      <h3 className='text-center text-2xl font-bold md:pt-16 pb-2 mx-2 border-t-2 border-orange-600/30 pt-10'>Para más información visita los portales oficiales de Turismo, Cultura y Deporte</h3>
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
