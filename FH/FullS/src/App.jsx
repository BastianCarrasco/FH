import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Paquetes from './paginas/paquetes'; // Importa el componente Paquetes
import Home from './paginas/Home';
import Hardware from './paginas/hardware';
import Compania from './paginas/compañia';
import Features from './paginas/features';

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
      case 'caracteristicas':
        return <Features />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar changePage={changePage} currentPage={currentPage} />
      <div>
        {renderContent()}
      </div>
      <footer>
        <div className="flex w-full bg-slate-800 flex-col">
          <div className="flex justify-center mt-10">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="my-6 mx-4 px-6 text-3xl text-white font-bold">Contáctanos</h2>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <form action="#" className="space-y-6 p-10 w-1/2 mb-5">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white font-montserrat">Tu email</label>
                <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-black text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 block w-full p-2.5" placeholder="correo@mail.com" required/>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white font-montserrat">Asunto</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-black bg-white rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Sobre qué quieres hablar" required/>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white font-montserrat">Tu mensaje</label>
                <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-black bg-white rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Dinos qué necesitas"></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="py-3 px-5 text-sm font-medium text-white rounded-lg bg-orange-400 sm:w-fit hover:bg-orange-600 focus:outline-none font-montserrat focus:ring-4 focus:ring-orange-300">Enviar mensaje</button>
              </div>
            </form>

            <div className="flex space-x-10 justify-center mb-6">
              <p className="font-poppins text-white">Teléfono: +123 456 789</p>
              <p className="font-poppins text-white">Email: info@fullstock.com</p>
              <p className="font-poppins text-white">Horario de atención: Lunes a Viernes de 9am a 5pm</p>
            </div>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default App;