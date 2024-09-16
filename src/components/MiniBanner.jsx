import React from 'react';
import { FaCalendarAlt, FaSwimmer, FaUmbrellaBeach, FaUtensils } from 'react-icons/fa'; // Importamos los iconos

const MiniBanner = () => {
  return (
    <div className="bg-teal-600 text-white py-4 flex md:justify-around items-start md:items-center md:h-[10vh] h-[15vh] text-center space-x-4 px-2 pt-6 md:space-x-0" >
      {/* Días del año */}
      <div className="flex flex-col items-center">
        <FaCalendarAlt  className="mb-2 text-2xl md:text-3xl" />
        <p className="text-sm ">365 días del año</p>
      </div>

      {/* Deportes acuáticos */}
      <div className="flex flex-col items-center">
        <FaSwimmer  className="mb-2 text-2xl md:text-3xl " />
        <p className="text-sm ">Deportes acuáticos</p>
      </div>

      {/* Turismo */}
      <div className="flex flex-col items-center">
        <FaUmbrellaBeach  className="mb-2 text-2xl md:text-3xl" />
        <p className="text-sm ">Turismo</p>
      </div>

      {/* Gastronomía */}
      <div className="flex flex-col items-center">
        <FaUtensils  className="mb-2 text-2xl md:text-3xl" />
        <p className="text-sm ">Gastronomía</p>
      </div>
    </div>
  );
};

export default MiniBanner;
