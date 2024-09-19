import React, { useState, useRef, useEffect } from 'react';
import 'pannellum/build/pannellum.css';
import 'pannellum/build/pannellum.js';
import image1 from '../assets/imgDown/imagen360rampapuntanegra.jpg';
import image2 from '../assets/imgDown/gabor-papp-i4bxGPMwfPI-unsplash.jpg';
import image3 from '../assets/imgDown/imagen360rampapuntanegra.jpg';

const images360 = [
  { id: '1', src: image1, title: 'Vista 1' },
  { id: '2', src: image2, title: 'Vista 2' },
  { id: '3', src: image3, title: 'Vista 3' },
];

const PuntaNegra360 = () => {
  const [selectedImage, setSelectedImage] = useState(images360[0].src);
  const pannellumRef = useRef(null);

  useEffect(() => {
    window.pannellum.viewer(pannellumRef.current, {
      type: "equirectangular",
      panorama: selectedImage,
      autoLoad: true,
      pitch: 10,
      yaw: 180,
      hfov: 110,
    });
  }, [selectedImage]);

  return (
    <div className="flex flex-col items-center pt-24 mb-10">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-4">Selecciona una vista</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {images360.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className={`relative cursor-pointer rounded-lg border-2 p-1 transition-transform duration-300 ease-in-out ${
                selectedImage === image.src ? 'border-blue-500 transform scale-105' : 'border-gray-300'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-1 rounded-b-lg">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:h-[50vh] h-96" ref={pannellumRef}></div>
    </div>
  );
};

export default PuntaNegra360;
