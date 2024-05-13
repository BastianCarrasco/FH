import React from 'react';
import pymeimg from '../assets/pyme.png'

function Compania() {
  return (
    <div>
      <section>
      <div className="flex h-screen w-full items-center justify-center flex-col bg-fondo">
      <h1 className="text-6xl mb-6 font-montserrat text-white">Tu negocio en buenas manos</h1>
          <p className="text-2xl text-white font-poppins mb-4">Soluciones tecnológicas para pequeñas empresas</p>
      </div>
      </section>

      <section>
      <div className="flex h-screen w-full bg-fondo-light">
        <div className="w-1/2 flex items-center justify-center">
            <img src={pymeimg} />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-start p-12 text-white">
          <h1 className="text-xl font-montserrat text-white mb-5">Fundada en 2024, FULL$STOCK se dedica a resolver los desafíos de gestión de inventarios y facturación de las pequeñas empresas. Nacida de la experiencia de sus fundadores, la empresa se esfuerza por ofrecer soluciones accesibles y eficientes, con un enfoque en la accesibilidad, colaboración, adaptabilidad y fiabilidad.</h1>
          <p className="text-m mb-5 font-poppins text-white">
          Nuestra misión es ayudar a nuestros clientes a optimizar sus operaciones comerciales mediante soluciones de punto de venta innovadoras y confiables.</p>
          <p className="text-m font-poppins text-white">
          Nos esforzamos por ser líderes en la industria de sistemas de punto de venta, ofreciendo productos y servicios de la más alta calidad que superen las expectativas de nuestros clientes.
          </p>
        </div> 
      </div>
      </section>
      
    </div>
  );
}


export default Compania;
