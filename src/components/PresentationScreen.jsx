import { Parallax } from 'react-parallax';
import imgPuntaNegra from '../assets/imgDown/51804382835_2a0e82870b_o.jpg';


function PresentationScreen() {
  return (
    <section className=''>
    <Parallax 
      bgImage={imgPuntaNegra} 
      strength={500}
      bgImageStyle={{  objectFit: "cover", width: "100%", height: "100%"  }}
    >
      <section className='bg-black bg-opacity-60 dark:bg-opacity-80 backdrop-blur-sm h-screen flex items-center justify-center'>
      <div className="text-left md:text-center text-white p-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 md:pb-6 " data-aos="fade-up">Bienvenidos al Dique<span className='text-orange-400'> Punta Negra</span></h1>
        <p className="text-lg md:text-2xl border-l-4 border-orange-500 pl-4 md:pl-0 md:border-l-0 md:border-t-2 md:pt-4" data-aos="fade-up" data-aos-delay="200">
          Descubre un lugar único en San Juan, Argentina. Explora sus actividades y servicios.
        </p>
      </div>
      </section>
    </Parallax>
    </section>
  );
}

export default PresentationScreen;
