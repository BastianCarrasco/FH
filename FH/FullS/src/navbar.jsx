import React from 'react';

function Navbar({ changePage, currentPage }) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <button onClick={() => changePage('home')} className={`titulo ${currentPage === 'home' ? 'active' : ''}`}>Home</button>
        <button onClick={() => changePage('paquetes')} className={`titulo ${currentPage === 'paquetes' ? 'active' : ''}`}>Paquetes</button>
        <button onClick={() => changePage('compania')} className={`titulo ${currentPage === 'compania' ? 'active' : ''}`}>Compañía</button>
        <button onClick={() => changePage('hardware')} className={`titulo ${currentPage === 'hardware' ? 'active' : ''}`}>Hardware</button>
      </nav>
    </div>
  );
}

export default Navbar;
