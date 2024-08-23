import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Chatbot() {
  const [currentMenu, setCurrentMenu] = useState('main'); // Estado para controlar el menú
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del chatbot

  // Función para cambiar al submenú
  const handleMenuChange = (menu) => {
    setCurrentMenu(menu);
  };

  // Función para alternar la visibilidad del chatbot
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Función para cerrar el chatbot
  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Botón para abrir/cerrar el chatbot */}
      <button
        className={`fixed bottom-4 right-4 p-3 bg-orange-500 text-white rounded-full shadow-lg z-20 ${isOpen ? 'hidden' : 'block'}`}
        onClick={toggleChatbot}
      >
        InfoBox 🏔️
      </button>

      {isOpen && (
        <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-200 drop-shadow-xl rounded-lg w-64 z-10">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={toggleChatbot}
          >
            ×
          </button>

          <h3 className="text-xl font-semibold mb-4">InfoBox</h3>

          {currentMenu === 'main' && (
            <div>
              <button
                className="text-left w-full py-2 px-4 mb-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700"
                onClick={() => handleMenuChange('activities')}
              >
                Actividades
              </button>
              <button
                className="text-left w-full py-2 px-4 mb-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700"
                onClick={() => handleMenuChange('howToReach')}
              >
                Cómo llegar
              </button>
              <button
                className="text-left w-full py-2 px-4 mb-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700"
                onClick={() => handleMenuChange('paradores')}
              >
                Paradores
              </button>
              <button
                className="text-left w-full py-2 px-4 mb-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700"
                onClick={() => handleMenuChange('recommendations')}
              >
                Recomendaciones
              </button>
            </div>
          )}

          {currentMenu === 'activities' && (
            <div className='text-sm'>
               <p className="text-left w-full py-1 px-2 mb-2  text-gray-800 font-semibold underline">Actividades</p>

              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Pesca</p>
              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Trekking</p>
              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Catamaran</p>
              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Buceo</p>
              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Kayak</p>
              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Standup Paddle</p>
              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Hidropedales</p>
              <p className="text-left w-full py-1 px-2 mb-2 text-gray-600">Gastronomía</p>

              <Link to="/directorio" onClick={closeChatbot}>
                <button
                  className="text-left w-full py-2 px-4 mb-2 bg-orange-500 text-white rounded-lg hover:bg-orange-700"
                >
                  Ir a Directorio
                </button>
              </Link>

              <button
                className="text-left w-full py-2 px-4 mb-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                onClick={() => handleMenuChange('main')}
              >
                ← Volver al Menu
              </button>
            </div>
          )}

          {currentMenu === 'howToReach' && (
            <div className='text-sm'>
                <p className="text-left w-full py-1 px-4 mb-2  text-gray-800 font-semibold underline">Como llegar</p>
              <p className="text-left w-full py-2 px-4 mb-2 text-gray-600">
                Puedes llegar al dique tomando la Ruta Provincial 12 o 60. 
                O a través de la línea 162 de la RedTulum se puede conectar la Cuidad de San Juan con Punta Negra.
                Consulta más en nuestra sección de recursos.
              </p>
              <button
                className="text-left w-full py-2 px-4 mb-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                onClick={() => window.open('https://www.google.com/maps?q=dique+punta+negra', '_blank')}
              >
                Mostrar mapa
              </button>
              <button
                className="text-left w-full py-2 px-4 mb-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                onClick={() => handleMenuChange('main')}
              >
                ← Volver al Menu
              </button>
            </div>
          )}

          {currentMenu === 'paradores' && (
            <div className='text-sm'>
            <p className="text-left w-full py-2 px-4 mb-2  text-gray-800 font-semibold underline">Paradores</p>

              <p className="text-left w-full py-1 px-4 mb-2 text-gray-600 rounded-lg">Del Parque Punta Negra</p>
              <p className="text-left w-full py-1 px-4 mb-2 text-gray-600 rounded-lg">Parador Punta Negra</p>
              <p className="text-left w-full py-1 px-4 mb-2  text-gray-600 rounded-lg">La Paz</p>
              <p className="text-left w-full py-1 px-4 mb-2  text-gray-600 rounded-lg">Pier</p>
              <button
                className="text-left w-full py-2 px-4 mb-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                onClick={() => handleMenuChange('main')}
              >
                ← Volver al Menu
              </button>
            </div>
          )}

          {currentMenu === 'recommendations' && (
            <div className='text-sm'>
                <p className="text-left w-full  px-4   text-gray-800 font-semibold underline">Recomendaciones</p>
              <p className="text-left w-full py-2 px-4 mb-2 text-gray-600">
                Aquí tienes algunas recomendaciones para disfrutar de tu visita:
              </p>
              <ul className="list-disc pl-6 mb-2  text-gray-600 py-2 ">
                <li>Lleva una gorra o sombrero para protegerte del sol.</li>
                <li>Aplica protector solar con regularidad.</li>
                <li>Hidrátate llevando suficiente agua.</li>
                <li>Escucha y sigue las instrucciones del personal de seguridad del lugar.</li>
                <li>Visita el centro de información turístico para obtener mapas y detalles adicionales.</li>
                <li>Usa ropa cómoda y calzado adecuado para actividades al aire libre.</li>
                <li>No olvides llevar mate 🧉.</li>
                <li>Consulta el pronóstico del tiempo antes de tu visita.</li>
              </ul>

              <button
                className="text-left w-full py-2 px-4 mb-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                onClick={() => handleMenuChange('main')}
              >
                ← Volver al Menu
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Chatbot;
