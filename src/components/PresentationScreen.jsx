import { Parallax } from 'react-parallax';
import imgPuntaNegra from '../assets/imgHome/imgPuntaNegra.jpeg';


function PresentationScreen() {
  return (
    <section className=''>
    <Parallax 
      bgImage={imgPuntaNegra} 
      strength={500}
      bgImageStyle={{  objectFit: "cover", width: "100%", height: "100%"  }}
    >
      <section className='bg-black bg-opacity-30 dark:bg-opacity-70 backdrop-blur-sm h-screen flex items-center justify-center'>
      <div className="text-left md:text-center text-white p-10 ">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 " data-aos="fade-up">Bienvenidos al Dique<span className='text-pink-600'> Punta Negra</span></h1>
        <p className="text-lg md:text-2xl border-l-4 border-pink-600 pl-4 md:pl-0 md:border-none" data-aos="fade-up" data-aos-delay="200">
          Descubre un lugar espectacular en San Juan, Argentina. Explora nuestras actividades y servicios.
        </p>
      </div>
      </section>
    </Parallax>
    </section>
  );
}

export default PresentationScreen;
