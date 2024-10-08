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
      yaw: 0,
      hfov: 110,
      showZoomCtrl: false, // Desactiva los controles de zoom visibles
    });

    // Limpieza del viewer al desmontar el componente
    return () => {
      if (viewer) {
        viewer.destroy(); // destruye la instancia de Pannellum al desmontar el componente
      }
    };
  }, []);

  return <div ref={pannellumRef} className="w-full md:h-72 h-64 border-y-4  border-teal-600"></div>;
};

export default Image360;
