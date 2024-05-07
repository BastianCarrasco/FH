import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Paquetes from './paginas/paquetes'; // Importa el componente Paquetes
import Home from './paginas/Home';
import Hardware from './paginas/hardware';
import Compania from './paginas/compañia';

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
        return <Home />;
      case 'paquetes':
        return <Paquetes />; // Renderiza el componente Paquetes
      case 'compania':
        return <Compania />;
      case 'hardware':
        return <Hardware />;
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
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-info" style={{maxWidth:"100%"}}>

            <p style={{marginRight:"30px", fontSize:"25px"}}><strong>Teléfono:</strong> +123 456 789</p>
            <p style={{marginRight:"30px", fontSize:"25px"}}><strong>Email:</strong> info@fullstock.com</p>
            <p style={{marginRight:"30px", fontSize:"25px"}}><strong>Horario de atención:</strong> Lunes a Viernes: 9am - 5pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
