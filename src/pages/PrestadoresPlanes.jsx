// src/pages/PrestadoresPlanes.jsx
import React from "react";
import { FaStar, FaBullhorn, FaChartLine, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { MdSupport, MdLocalOffer } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { GiCardboardBox } from "react-icons/gi";

const PrestadoresPlanes = () => {
  return (
    <div className="w-full py-12 bg-gray-100 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-8">
          Maximiza tu Alcance con Nuestros Planes Exclusivos
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          En nuestra plataforma, ofrecemos cuatro planes diseñados para adaptarse a diferentes necesidades y objetivos. Cada plan está diseñado para ofrecerte una ventaja competitiva y conectar con una red amplia de clientes potenciales. A continuación, te presentamos nuestros planes y los beneficios adicionales de unirte a nosotros.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Plan Básico */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <GiCardboardBox className="text-teal-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-teal-600">Plan Básico</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Ideal para prestadores que están comenzando y desean una presencia inicial en nuestra plataforma. Este plan ofrece una base sólida para construir tu presencia online.
            </p>
            <div className="mb-4">
              <p className="text-xl font-semibold text-teal-600">$49 USD/mes</p>
              <p className="text-gray-600">Incluye:</p>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Perfil básico con información de contacto</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Publicación de hasta 3 servicios</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Acceso a herramientas de promoción básicas</li>
              </ul>
            </div>
            <a
              href="#"
              className="block text-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
            >
              Adquirir Plan
            </a>
          </div>

          {/* Plan Intermedio */}
          <div className="bg-gradient-to-tr from-orange-400 via-emerald-400 to-teal-700 p-6 rounded-lg shadow-lg text-white">
            <div className="flex items-center mb-4">
              <MdLocalOffer className="text-teal-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-white">Plan Intermedio</h2>
            </div>
            <p className="text-lg mb-4">
              Perfecto para prestadores que buscan una mayor visibilidad y herramientas avanzadas para destacar en nuestra plataforma. Ideal para negocios que desean hacer un impacto significativo.
            </p>
            <div className="mb-4">
              <p className="text-xl font-semibold text-white">$79 USD/mes</p>
              <p className="">Incluye:</p>
              <ul className="list-disc list-inside ml-4 ">
                <li><FaStar className="inline-block text-white mr-2" /> Perfil avanzado con opciones de personalización</li>
                <li><FaStar className="inline-block text-white mr-2" /> Publicación de hasta 5 servicios</li>
                <li><FaStar className="inline-block text-white mr-2" /> Acceso a herramientas de promoción avanzadas</li>
                <li><FaStar className="inline-block text-white mr-2" /> Soporte prioritario</li>
              </ul>
            </div>
            <a
              href="#"
              className="block text-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
            >
              Adquirir Plan
            </a>
          </div>

          {/* Plan Avanzado */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <FaBullhorn className="text-teal-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-teal-600">Plan Avanzado</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Para prestadores que buscan una visibilidad destacada y campañas publicitarias exclusivas. Este plan está diseñado para negocios que quieren alcanzar el máximo potencial.
            </p>
            <div className="mb-4">
              <p className="text-xl font-semibold text-teal-600">$149 USD/mes</p>
              <p className="text-gray-600">Incluye:</p>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Perfil premium con todas las funcionalidades</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Publicación ilimitada de servicios</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Herramientas de promoción avanzadas</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Campañas publicitarias exclusivas</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Acceso a analíticas detalladas</li>
              </ul>
            </div>
            <a
              href="#"
              className="block text-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
            >
              Adquirir Plan
            </a>
          </div>

          {/* Plan Personalizado
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <IoIosPeople className="text-teal-600 text-3xl mr-3" />
              <h2 className="text-2xl font-bold text-teal-600">Plan Personalizado</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Diseñado para paradores con una amplia gama de servicios. Este plan ofrece soluciones a medida para cubrir todas las necesidades específicas y maximizar tu impacto en nuestra plataforma.
            </p>
            <div className="mb-4">
              <p className="text-xl font-semibold text-teal-600">Desde $500/mes</p>
              <p className="text-gray-600">Incluye:</p>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Perfil totalmente personalizado</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Publicación ilimitada de servicios</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Herramientas de promoción personalizadas</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Soporte dedicado y gestión de cuenta</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Opciones de visibilidad premium</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Campañas publicitarias a medida</li>
                <li><FaStar className="inline-block text-teal-600 mr-2" /> Visibilidad en múltiples puntos de San Juan</li>
              </ul>
            </div>
            <a
              href="#"
              className="block text-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition"
            >
              Solicitar Información
            </a>
          </div> */}
        </div>

        {/* Beneficios Adicionales */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Beneficios Adicionales</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaUsers className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-teal-600 mb-2">Red de Contactos Amplia</h3>
              <p className="text-gray-700">
                Conéctate con una extensa red de clientes y prestadores, aprovechando oportunidades que van más allá del alcance local.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaBullhorn className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-teal-600 mb-2">Campañas Publicitarias</h3>
              <p className="text-gray-700">
                Participa en campañas publicitarias personalizadas que aumentan tu visibilidad y atraen más clientes en un mercado competitivo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaMapMarkerAlt className="text-teal-600 text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold text-teal-600 mb-2">Visibilidad Local</h3>
              <p className="text-gray-700">
                Tu negocio será visible en múltiples puntos estratégicos y eventos locales en San Juan, garantizando atención en áreas clave.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Comparación con el Boca a Boca</h2>
            <p className="text-lg text-gray-700 mb-4">
              El boca a boca tiene sus limitaciones. Aunque es una forma tradicional de promocionar tu negocio, puede restringir tu alcance y reducir las oportunidades de crecimiento. Al formar parte de nuestra plataforma, te beneficias de:
            </p>
            <ul className="list-disc list-inside text-gray-700 container text-left md:w-1/2 mx-auto md:pl-8">
              <li><FaChartLine className="inline-block text-teal-600 mr-2" /> Un alcance mucho mayor a nivel local y regional.</li>
              <li><FaChartLine className="inline-block text-teal-600 mr-2" /> Herramientas analíticas que permiten ajustar tus estrategias de marketing.</li>
              <li><FaChartLine className="inline-block text-teal-600 mr-2" /> Soporte dedicado que garantiza una experiencia fluida.</li>
            </ul>
            <p className="text-lg text-gray-700 mt-4">
              No te quedes atrás. Aprovecha la oportunidad de estar en una plataforma que amplifica tu alcance y te proporciona los recursos necesarios para destacar en el mercado.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4">Próximo Lanzamiento Oficial</h2>
            <p className="text-lg text-gray-700 mb-4">
              Nuestro evento de lanzamiento oficial atraerá la atención de medios locales y clientes potenciales. Este es el momento perfecto para captar el interés y generar una gran visibilidad para tu negocio. Además, tendrás acceso a campañas publicitarias exclusivas y a un amplio rango de beneficios que garantizarán tu éxito en nuestra plataforma.
            </p>
            <p className="text-lg text-gray-700">
              ¡Contáctanos hoy mismo para más información y aprovecha nuestras ofertas especiales para transformar tu visibilidad y conectar con nuevos clientes!
            </p>
            <a
              href="#"
              className="mt-4 block text-center bg-teal-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-teal-700 transition"
            >
              Contáctanos para Más Información
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrestadoresPlanes;
