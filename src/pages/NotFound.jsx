import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">
        Error 404!
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
        La página que buscas no se encuentra o esta en Desarollo. 
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
