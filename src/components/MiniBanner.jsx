import React from 'react';
import { FaCalendarAlt, FaSwimmer, FaUmbrellaBeach, FaUtensils } from 'react-icons/fa'; // Importamos los iconos

const MiniBanner = () => {
  return (
    <div className="bg-orange-500 text-white py-4 flex justify-between md:justify-around items-center md:h-[15vh]  text-center space-x-2 px-2" >
      {/* Días del año */}
      <div className="flex flex-col items-center">
        <FaCalendarAlt size={30} className="mb-2" />
        <p className="text-sm font-semibold">365 días del año</p>
      </div>

      {/* Deportes acuáticos */}
      <div className="flex flex-col items-center">
        <FaSwimmer size={30} className="mb-2" />
        <p className="text-sm font-semibold">Deportes acuáticos</p>
      </div>

      {/* Turismo */}
      <div className="flex flex-col items-center">
        <FaUmbrellaBeach size={30} className="mb-2" />
        <p className="text-sm font-semibold">Turismo</p>
      </div>

      {/* Gastronomía */}
      <div className="flex flex-col items-center">
        <FaUtensils size={30} className="mb-2" />
        <p className="text-sm font-semibold">Gastronomía</p>
      </div>
    </div>
  );
};

export default MiniBanner;
