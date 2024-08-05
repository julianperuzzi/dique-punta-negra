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
    name: "Desarollado por Julian Peruzzi",
    description:
      "Developer apasionado por crear experiencias web innovadoras y funcionales. Con experiencia en React y otras tecnologías modernas de desarrollo web.",
    contactTitle: "Contacto",
    location: "San Juan, Argentina",
    phone: "Teléfono: +54 9 2645 636968",
    email: "Email: dev.julianperuzzi@gmail.com",
    followTitle: "Sígueme",
    copyright: "Todos los derechos reservados.",
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Logo o Nombre */}
          <div className="mb-8 lg:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">{texts.name}</h3>
            <p className="text-gray-400 text-md max-w-md">{texts.description}</p>
          </div>

          {/* Información de contacto */}
          <div className="mb-8 lg:mb-0 lg:ml-12">
            <h4 className="text-lg font-semibold mb-4">{texts.contactTitle}</h4>
            <ul className="text-gray-300 space-y-2">
              <li>{texts.location}</li>
              <li>{texts.phone}</li>
              <li>{texts.email}</li>
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
                href="https://www.instagram.com/julianperuzzi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="mailto: dev.julianperuzzi@gmail.com"
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
