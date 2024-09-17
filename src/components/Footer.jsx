import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  // Textos en español
  const texts = {
    name: "Desarrollado por Julian Peruzzi .dev",
    description:
      "En JulianPeruzzi.dev  nos centramos en crear experiencias web innovadoras y funcionales.",
    contactTitle: "Contacto",
    location: "San Juan, Argentina",
    phone: "Teléfono: +54 9 2645 636968",
    email: "Email: julianperuzzi.dev@gmail.com",
    followTitle: "Sígueme",
    additionalInfo: "Este proyecto es una iniciativa que busca colaborar con prestadores locales para ofrecer sus servicios, mejorando la experiencia del turismo en San Juan.",
    disclaimer: "La información de este sitio no se contempla como información oficial ni de difusión de organismos competentes. Si necesitas asesoramiento oficial, comunícate a los medios pertinentes.",
    copyright: "Todos los derechos reservados.",
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Logo o Nombre */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-lg font-bold text-white mb-1">{texts.name}</h3>
            <p className="text-gray-300 text-md max-w-md">
              {texts.description}
            </p>
            <p className="text-gray-400 text-sm max-w-md mt-4 font-extralight">
              {texts.additionalInfo}
            </p>
            <p className="text-gray-400 text-sm max-w-md mt-2 font-extralight">
              {texts.disclaimer}
            </p>
          </div>

          {/* Información de contacto */}
          <div className="mb-8 lg:mb-0 lg:ml-12">
            <h4 className="text-lg font-semibold mb-4">{texts.contactTitle}</h4>
            <ul className="text-gray-300 space-y-2">
              <li>{texts.location}</li>
              <li>{texts.phone}</li>
              <li>
                <a
                  href={`mailto:${texts.email}`}
                  className="hover:text-orange-500"
                >
                  {texts.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="lg:ml-12">
            <h4 className="text-lg font-semibold mb-4">{texts.followTitle}</h4>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5492645636968"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/julianperuzzi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/julianperuzzi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.instagram.com/julianperuzzi.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="mailto:julianperuzzi.dev@gmail.com"
                className="text-gray-400 hover:text-red-500 transition duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} {texts.name}.{" "}
                {texts.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
