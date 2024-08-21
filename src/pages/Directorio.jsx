import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PrestadoresData from "../data/prestadores.json";

function Directorio() {
  const [prestadores, setPrestadores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    // Asigna los datos importados directamente al estado
    setPrestadores(PrestadoresData);
  }, []);

  const filteredPrestadores = prestadores.filter((prestador) => {
    const matchesSearch = prestador.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || prestador.services.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-200 dark:bg-gray-900 py-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Directorio de Prestadores y Paradores
        </h1>

        {/* Buscador */}
        <div className="flex flex-col md:flex-row items-center justify-around mb-8">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white mb-4 md:mb-0 md:mr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filtros */}
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="text-black font-semibold dark:text-white">
              Buscar Actividad
            </p>
            <select
              className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">Todos</option>
              <option value="Buceo">Buceo</option>
              <option value="Kayak">Kayak</option>
              <option value="Catamaran">Catamarán</option>
              <option value="Hidropedales">Hidropedales</option>
              <option value="Confiteria">Confitería</option>
              <option value="Stand Up Paddle">Stand Up Paddle</option>
              <option value="Pesca Embarcado">Pesca Embarcado</option>
            </select>
          </div>
        </div>

        {/* Lista de Prestadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrestadores.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No se encontraron resultados.
            </p>
          ) : (
            filteredPrestadores.map((prestador) => (
              <div
                key={prestador.id}
                className="bg-white dark:bg-gray-800 shadow-xl p-6 flex flex-col justify-between hover:scale-105 transition duration-200 relative rounded-ss-2xl"
              >
                <h3 className="text-2xl font-semibold mb-2 text-orange-600 dark:text-white">
                  {prestador.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Servicios:{" "}
                  {prestador.services.map((service, i) => (
                    <span
                      key={i}
                      className="inline-block bg-orange-200 dark:bg-slate-600 text-orange-700 dark:text-white rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2"
                    >
                      {service}
                    </span>
                  ))}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Email: {prestador.contact}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2 font-normal">
                  Teléfono:{" "}
                  <a
                    href={`tel:${prestador.phone}`}
                    className="text-slate-800 hover:text-orange-300"
                  >
                    {prestador.phone}
                  </a>
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href={`https://wa.me/${prestador.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-green-500 hover:bg-green-700 px-2 py-1  font-medium rounded-md text-center"
                  >
                    Contactar por WhatsApp
                  </a>
                  <Link
                    to={`/prestador/${prestador.id}`}
                    className="text-blue-500 hover:text-blue-700 bg-gray-100 px-2 py-1  font-medium rounded-md text-center"
                  >
                    Más Información
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Directorio;
