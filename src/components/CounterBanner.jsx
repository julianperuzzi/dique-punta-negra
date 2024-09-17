import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const CounterBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);  // Cuando el contador es visible, se actualiza el estado
          observer.unobserve(counterRef.current);  // Dejar de observar una vez que sea visible
        }
      },
      { threshold: 0.3 } // El porcentaje de visibilidad requerido para que se active
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);  // Empieza a observar el elemento del contador
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);  // Limpieza del observer
      }
    };
  }, []);

  return (
    <section ref={counterRef} className="mt-12 md:mt-24">
      <div className="container mx-auto flex items-start justify-around md:space-x-16 flex-row">
        
        {/* Primer contador */}
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-bold text-orange-500">
            +{isVisible && <CountUp end={40} duration={4} />}
          </h2>
          <p className="md:text-xl text-l text-gray-700 mt-2">Prestadores de servicio</p>
        </div>
        
        {/* Segundo contador */}
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-bold text-orange-500">
            +{isVisible && <CountUp end={3000} duration={4} />}
          </h2>
          <p className="md:text-xl text-l text-gray-700 mt-2">Personas al día*</p>
          <p className="text-sm text-gray-400 mt-2">*días de temporada</p>
        </div>

        {/* Tercer contador */}
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-bold text-orange-500">
            +{isVisible && <CountUp end={10} duration={4} />}
          </h2>
          <p className="md:text-xl text-l text-gray-700 mt-2">Actividades diferentes</p>
        </div>

      </div>
    </section>
  );
};

export default CounterBanner;
