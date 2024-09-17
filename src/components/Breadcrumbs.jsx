// Breadcrumbs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="md:block hidden bg-gray-900/70 dark:bg-gray-700 py-1 md:py-2 px-6 rounded-b-md fixed mb-4 z-20 top-14 left-6 shadow-lg backdrop-blur-md">
      <ol className="list-reset flex text-gray-100 dark:text-gray-100">
        <li>
          <Link to="/" className="text-orange-500 hover:text-orange-700 font-semibold ">Inicio</Link>
          <span className="mx-2">/</span>
        </li>
        {pathnames.map((pathname, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={to} className={`flex font-semibold ${!last ? 'text-teal-500 hover:text-blue-700' : 'text-gray-200 dark:text-gray-200'}`}>
              {!last ? (
                <>
                  <Link to={to}>{pathname.replace(/-/g, ' ')}</Link>
                  <span className="mx-2">/</span>
                </>
              ) : (
                <span>{pathname.replace(/-/g, ' ')}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
