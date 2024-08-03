import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ActivitiesScreen from '../components/ActivitiesScreen';
import ParadoresScreen from '../components/ParadoresScreen';
import ResourcesScreen from '../components/ResourcesScreen';
import ContactDirectoryScreen from '../components/ContactDirectoryScreen';
import PresentationScreen from '../components/PresentationScreen';

function Inicio() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col bg-white">
      {/* Pantalla de Presentación */}
      <PresentationScreen/>

      {/* Información de Actividades */}
      <ActivitiesScreen />

      {/* Información de Paradores */}
      <ParadoresScreen />

      {/* Recursos */}
      <ResourcesScreen />

      {/* Directorio de Contactos */}
      <ContactDirectoryScreen />
    </div>
  );
}

export default Inicio;
