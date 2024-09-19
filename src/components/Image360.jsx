import React, { useEffect, useRef } from 'react';
import 'pannellum/build/pannellum.css';
import 'pannellum/build/pannellum.js';
import img360 from "../assets/imgDown/imagen360rampapuntanegra.jpg";

const Image360 = () => {
  const pannellumRef = useRef(null);

  useEffect(() => {
    window.pannellum.viewer(pannellumRef.current, {
      type: "equirectangular",
      panorama: img360, // URL de tu imagen 360
      autoLoad: true,
      pitch: 10,
      yaw: 180,
      hfov: 110,
      showZoomCtrl: false,   // Desactiva los controles de zoom visibles
      disableZoom: true,     // Desactiva completamente el zoom
    });
  }, []);

  return <div ref={pannellumRef} className="w-full md:h-72 h-64"></div>;
};

export default Image360;
