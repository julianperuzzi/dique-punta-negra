import React, { useState } from "react";

function Directorio() {
  // Datos de ejemplo para los prestadores y paradores
  const prestadores = [
    {
      name: "San Juan Bajo el Mar",
      services: ["Buceo"],
      contact: "-",
      phone: "0264 548-3335",
    },
    {
      name: "Parador Punta Negra",
      services: ["Kayak", "Hidropedales", "Confiteria"],
      contact: "-",
      phone: "+34 900 842 269",
    },
    {
      name: "Del Parque Aventura Punta Negra",
      services: ["Catamaran", "Confiteria", "Kayak", "Hidropedales"],
      contact: "-",
      phone: "264 414 8998",
    },
    {
      name: "La Paz",
      services: ["Hidropedales", "Kayak", "Stand Up Paddle"],
      contact: "pedalpower@example.com",
      phone: "264 12345678",
    },
    {
      name: "San Juan SUP",
      services: ["Stand Up Paddle"],
      contact: "pedalpower@example.com",
      phone: "264 12345678",
    },
    {
      name: "Pesca King",
      services: ["Pesca Embarcado"],
      contact: "pescador@example.com",
      phone: "264 12345678",
    },
    {
      name: "Pesca Cano",
      services: ["Pesca Embarcado"],
      contact: "pescador@example.com",
      phone: "264 12345678",
    },
    {
      name: "Pesca Bueno",
      services: ["Pesca Embarcado"],
      contact: "pescador@example.com",
      phone: "264 12345678",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  // Función para filtrar los prestadores basados en el término de búsqueda y el filtro
  const filteredPrestadores = prestadores.filter((prestador) => {
    const matchesSearch = prestador.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "All" || prestador.services.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Directorio de Prestadores y Paradores
        </h1>

        {/* Buscador */}
        <div className="flex flex-col md:flex-row items-center justify-around mb-8">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white mb-4 md:mb-0 md:mr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filtros */}
          <div className="flex flex-row justify-center items-center gap-4">
            <p className="text-black font-semibold dark:text-white">
              Buscar Actividad
            </p>
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
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
            filteredPrestadores.map((prestador, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow-md p-6 flex flex-col justify-between hover:scale-105 transition duration-200"
              >
                <h3 className="text-2xl font-semibold mb-2 text-orange-700 dark:text-white">
                  {prestador.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Servicios:{" "}
                  {prestador.services.map((service, i) => (
                    <span
                      key={i}
                      className="inline-block bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                    >
                      {service}
                    </span>
                  ))}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  Email: {prestador.contact}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Teléfono:{" "}
                  <a
                    href={`tel:${prestador.phone}`}
                    className="text-orange-500 hover:text-orange-700"
                  >
                    {prestador.phone}
                  </a>
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Directorio;
