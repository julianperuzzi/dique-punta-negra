import React, { useEffect, useRef } from 'react';
import 'pannellum/build/pannellum.css';
import 'pannellum/build/pannellum.js';
import img360 from "../assets/imgDown/imagen360rampapuntanegra.jpg";

const Image360 = () => {
  const pannellumRef = useRef(null);

  useEffect(() => {
    // Inicializa Pannellum
    const viewer = window.pannellum.viewer(pannellumRef.current, {
      type: "equirectangular",
      panorama: img360, // URL de tu imagen 360
      autoLoad: true,
      pitch: 10,
      yaw: 180,
      hfov: 110,
      showZoomCtrl: false, // Desactiva los controles de zoom visibles
      disableZoom: true,  // Desactiva el zoom por los controles
    });

    // Añade un manejador de eventos para deshabilitar el zoom con el scroll del mouse
    const handleMouseWheel = (event) => {
      event.preventDefault(); // Evita el zoom con el scroll
    };

    // Añade el manejador al contenedor del visor
    pannellumRef.current.addEventListener('wheel', handleMouseWheel, { passive: false });

    // Limpieza del efecto
    return () => {
      pannellumRef.current.removeEventListener('wheel', handleMouseWheel);
    };
  }, []);

  return <div ref={pannellumRef} className="w-full md:h-72 h-64"></div>;
};

export default Image360;
