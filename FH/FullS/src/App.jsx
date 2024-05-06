import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Paquetes from './paginas/paquetes'; // Importa el componente Paquetes

function App() {
  // Estado para la página actual
  const [currentPage, setCurrentPage] = useState('home');

  // Función para cambiar la página
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Renderiza el contenido de la página actual
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <div>Contenido de la página de Inicio</div>;
      case 'paquetes':
        return <Paquetes />; // Renderiza el componente Paquetes
      case 'compania':
        return <div>Contenido de la página de Compañía</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar changePage={changePage} currentPage={currentPage} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;



