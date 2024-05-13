import React from 'react';
import ipad_img from '../assets/iPad Pro 2020.png';
import { goToCaracteristicas,changePage } from '../navbar'; // Importa la función goToCaracteristicas

function Home({ changePage }) { // Asegúrate de recibir la prop changePage
  return (
    <div>
      <section>
        <div className="flex h-screen w-full bg-fondo">
          <div className="w-1/2 flex flex-col justify-center items-start p-12 text-white">
            <h1 className="text-6xl mb-6 font-montserrat">Tu negocio en buenas manos</h1>
            <p className="text-2xl font-poppins mb-4">Soluciones tecnológicas para pequeñas empresas</p>
            {/* Usa la función goToCaracteristicas al hacer clic en "Más información" */}
            <a onClick={() => goToCaracteristicas(changePage)} className="text-orange-400 font-montserrat text-xl hover:text-orange-600" style={{ cursor: 'pointer' }}>Más información →</a>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <img src={ipad_img} alt="Imagen de ipad" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
