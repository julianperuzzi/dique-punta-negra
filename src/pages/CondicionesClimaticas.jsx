import React, { useEffect } from "react";

function CondicionesClimaticas() {
  useEffect(() => {
    // Añadir el script de Windy cuando el componente se monta
    const windyScript = document.createElement("script");
    windyScript.src = "https://windy.app/widgets-code/forecast/windy_forecast_async.js?v1.4.6";
    windyScript.async = true;
    windyScript.setAttribute("data-cfasync", "false");
    document.body.appendChild(windyScript);

    // Añadir el script del clima
    const weatherScript = document.createElement("script");
    weatherScript.src = "https://weatherwidget.io/js/widget.min.js";
    weatherScript.async = true;
    document.body.appendChild(weatherScript);

    // Añadir el script del widget de mapa de viento
    const windyMapScript = document.createElement("script");
    windyMapScript.src = "https://windy.app/widget3/windy_map_async.js";
    windyMapScript.async = true;
    windyMapScript.setAttribute("data-cfasync", "false");
    document.body.appendChild(windyMapScript);

    // Limpiar los scripts cuando el componente se desmonta
    return () => {
      document.body.removeChild(windyScript);
      document.body.removeChild(weatherScript);
      document.body.removeChild(windyMapScript);
    };
  }, []);

  return (
    <div className="bg-neutral-200/80 dark:bg-gray-900  py-24 px-2 min-h-screen" >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white px-2">
          Condiciones Climáticas de Punta Negra
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Widget del Clima */}
          <div className="bg-white dark:bg-gray-800 shadow-md  p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Clima Actual - Zonda, San Juan
            </h2>
            <a  class="weatherwidget-io" href="https://forecast7.com/es/n31d56n68d73/zonda/" data-label_1="ZONDA, SJ , ARG" data-label_2="CLIMA" data-icons="Climacons Animated" data-days="3" data-theme="original" >ZONDA CLIMA</a>
          </div>

          {/* Widget del Viento */}
          <div className="bg-white dark:bg-gray-800 shadow-md  p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Condiciones del Viento
            </h2>
            <div
              data-windywidget="forecast"
              data-thememode="white"
              data-spotid="451747"
              data-appid="fb6536a18e3ed0e13e61b44e807fff4c"
              className="w-full h-64"
            ></div>
          </div>

          {/* * Widget del Mapa de Viento */}
          <div className="hidden  bg-white dark:bg-gray-800 shadow-md p-6 h-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Mapa de Viento
            </h2>
            <div
              data-windywidget="map"
              data-spotid="451747"
              data-appid="fb6536a18e3ed0e13e61b44e807fff4c"
              data-spots="true"
              className="w-full h-auto"
            ></div>
          </div> 

          {/* Mapa de Punta Negra */}
          <div className="bg-white dark:bg-gray-800 shadow-md  p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
              Mapa de Punta Negra
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26669.274658580067!2d-68.85080295092706!3d-31.521020339015816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spunta%20negra%20san%20juan%20dique!5e1!3m2!1ses!2sar!4v1722875725367!5m2!1ses!2sar"
              title="Mapa de Punta Negra"
              className="w-full h-64 border-none rounded-md"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CondicionesClimaticas;
