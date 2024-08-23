import React, { useState, useEffect } from 'react';
import paradoresData from '../data/paradores.json'; // Importa el JSON directamente

const Paradores = () => {
  const [paradores, setParadores] = useState([]);
  const [selectedParador, setSelectedParador] = useState(null);

  useEffect(() => {
    // Usar el JSON importado directamente
    setParadores(paradoresData);
  }, []);

  const handleSelect = (id) => {
    const parador = paradores.find(p => p.id === id);
    setSelectedParador(parador);
  };

  return (
    <div className="container mx-auto p-4 pt-32">
      <h1 className="text-3xl font-bold mb-6 text-center">Paradores</h1>
      
      <div className="flex flex-col md:flex-row md:justify-between mb-6">
        {/* Menú de selección de paradores */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Selecciona un parador:</h2>
          <ul className="space-y-2">
            {paradores.map(parador => (
              <li key={parador.id}>
                <button
                  className="block w-full text-left bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                  onClick={() => handleSelect(parador.id)}
                >
                  {parador.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Información del parador seleccionado */}
        <div className="md:w-2/3">
          {!selectedParador ? (
            <div className="p-4 mx-4 mt-8 bg-white shadow-lg rounded-lg">
              <p className="text-md font-semibold text-orange-400">Por favor, selecciona un parador para ver su información.</p>
            </div>
          ) : (
            <div className="mt-6 md:mt-0 p-4 md:mx-4 bg-white shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">{selectedParador.name}</h2>
              <img
                src={selectedParador.image}
                alt={selectedParador.name}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <p className="mb-4">{selectedParador.description}</p>
              <p className="text-lg font-semibold mb-2">Dirección:</p>
              <p className="mb-4">{selectedParador.address}</p>
              <h3 className="text-lg font-semibold mb-2">Actividades:</h3>
              <ul className="list-disc pl-5">
                {selectedParador.activities.map(activity => (
                  <li key={activity.name} className="mb-2">
                    <strong>{activity.name}:</strong> {activity.price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Paradores;
