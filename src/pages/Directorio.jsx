// src/components/Directorio.js
import React, { useState, useEffect } from "react";
import PrestadoresData from "../data/prestadores.json";
import Modal from "../components/Modal";
import PrestadorCard from "../components/PrestadorCard";

function Directorio() {
  const [prestadores, setPrestadores] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedPrestador, setSelectedPrestador] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setPrestadores(PrestadoresData);
  }, []);

  const filteredPrestadores = prestadores.filter((prestador) => {
    const matchesSearch = prestador.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || prestador.services.includes(filter);
    return matchesSearch && matchesFilter;
  });

  const handleOpenModal = (prestador) => {
    setSelectedPrestador(prestador);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPrestador(null);
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-900 py-24 px-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-8 text-center text-gray-900 dark:text-white">
          Directorio de Actividades
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-around mb-8">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white mb-4 md:mb-0 md:mr-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

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
              <option value="Pesca Embarcado">Trekking</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredPrestadores.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No se encontraron resultados.
            </p>
          ) : (
            filteredPrestadores.map((prestador) => (
              <PrestadorCard key={prestador.id} prestador={prestador} onOpenModal={handleOpenModal} />
            ))
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} prestador={selectedPrestador} />
    </div>
  );
}

export default Directorio;
