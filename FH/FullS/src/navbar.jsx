import React from 'react';

function Navbar({ changePage, currentPage }) {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white text-white p-4">
      <div className="flex items-center">
        <span className="text-4xl font-bold text-black font-viga">FULL$TOCK</span>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={() => changePage('home')} className="hover:bg-gray-200 px-3 py-2 rounded text-black font-montserrat text-lg">Inicio</button>
        <button onClick={() => changePage('features')} className="hover:bg-gray-200 px-3 py-2 rounded text-black font-montserrat text-lg">Características</button>
        <button onClick={() => changePage('paquetes')} className="hover:bg-gray-200 px-3 py-2 rounded text-black font-montserrat text-lg">Paquetes</button>
        <button onClick={() => changePage('hardware')} className="hover:bg-gray-200 px-3 py-2 rounded text-black font-montserrat text-lg">Hardware</button>
        <button onClick={() => changePage('compania')} className="hover:bg-gray-200 px-3 py-2 rounded text-black font-montserrat text-lg">Nosotros</button>
    </div>
    </nav>
  );
}

export default Navbar;


