import React, { useState, useRef, useEffect } from 'react';
import 'pannellum/build/pannellum.css';
import 'pannellum/build/pannellum.js';
import image1 from '../assets/imgDown/imagen360rampapuntanegra.jpg';
import image2 from '../assets/imgDown/PXL_20240919_161731480.PHOTOSPHERE.jpg';
import image3 from '../assets/imgDown/PXL_20240919_162237035.PHOTOSPHERE.jpg';

const images360 = [
  { id: '1', src: image1, title: 'Vista 1' },
  { id: '2', src: image2, title: 'Vista 2' },
  { id: '3', src: image3, title: 'Vista 3' },
];

const PuntaNegra360 = () => {
  const [selectedImage, setSelectedImage] = useState(images360[0].src);
  const pannellumRef = useRef(null);
  const viewerInstance = useRef(null); // Para almacenar la instancia del visor

  useEffect(() => {
    if (pannellumRef.current) {
      viewerInstance.current = window.pannellum.viewer(pannellumRef.current, {
        type: 'equirectangular',
        panorama: selectedImage,
        autoLoad: true,
        pitch: 10,
        yaw: 0,
        hfov: 110,
      });
    }

    // Limpieza del efecto cuando el componente se desmonta
    return () => {
      if (viewerInstance.current) {
        viewerInstance.current.destroy(); // Destruye la instancia de Pannellum
        viewerInstance.current = null; // Limpia la referencia
      }
    };
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-center pt-24 mb-10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4 text-center">Selecciona una vista</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4 px-6">
          {images360.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className={`relative cursor-pointer rounded-lg m-2 transition-transform duration-300 ease-in-out  ${
                selectedImage === image.src ? 'border-blue-500 transform scale-105' : 'border-gray-300'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-40 h-32 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-1 rounded-b-lg">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-center text-teal-700">Navega los Paisajes de Punta Negra</h3>
      <div className="w-full md:h-[60vh] h-96 border-y-4 border-teal-600" ref={pannellumRef}></div>
    </div>
  );
};

export default PuntaNegra360;
