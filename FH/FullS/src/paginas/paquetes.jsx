import React from 'react';

function Paquetes() {

  const handleDownload = (nombreZip) => {
    // Crear un Blob vacío
    const blob = new Blob([''], { type: 'application/zip' });
    // Crear una URL para el Blob
    const url = URL.createObjectURL(blob);
    // Crear un enlace temporal y hacer clic en él para descargar
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreZip + '.zip'; // Agregar la extensión .zip al nombre del archivo
    link.click();
    // Liberar la URL del Blob
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex h-screen w-full bg-fondo mt-10 justify-center items-center space-x-5">

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <span className="block text-gray-700 text-xl mb-2 font-montserrat">Paquete de Prueba</span>
          <span className="block text-gray-500 text-xl mb-2 font-poppins">$0</span>
        </div>
        <ul className="mb-4 text-sm text-gray-600 font-poppins">
          <li className="mb-2">Descarga la versión de prueba de la aplicación.</li>
          <li className="mb-2">Utiliza el software durante <strong>7 días</strong>. </li>
          <li className="mb-2">Solo para una tienda.</li>
        </ul>
        <button onClick={() => handleDownload('Paquete_de_Prueba')} className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Obtener
        </button>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <span className="block text-gray-700 text-xl mb-2 font-montserrat">Aplicación de Escritorio</span>
          <span className="block text-gray-500 text-xl mb-2 font-poppins">$29.990/mes</span>
        </div>
        <ul className="mb-4 text-sm text-gray-600 font-poppins">
          <li className="mb-2">Descarga la aplicación completa del software.</li>
          <li className="mb-2">Tiendas ilimitadas.</li>
          <li className="mb-2">Usuarios ilimitados.</li>
        </ul>
        <button onClick={() => handleDownload('Aplicacion_de_Escritorio')} className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Comprar paquete
        </button>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <span className="block text-gray-700 text-xl mb-2 font-montserrat">Aplicación de Escritorio <br/>+ Instalación de Hardware</span>
          <span className="block text-gray-500 text-xl mb-2 font-poppins">$39.000/primer mes y luego 29.990/mes</span>
        </div>
        <ul className="mb-4 text-sm text-gray-600 font-poppins">
          <li className="mb-2">Descarga la aplicación completa del software.</li>
          <li className="mb-2">Tiendas ilimitadas.</li>
          <li className="mb-2">Usuarios ilimitados.</li>
          <li className="mb-2">Con instalación de hardware y conexión a dispositivos remotos.</li>

        </ul>
        <button onClick={() => handleDownload('Aplicacion_de_Escritorio_con_Hardware')} className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
          Comprar paquete
        </button>
        <p className="text-gray-700 text-sm pt-4 font-poppins">Importante: No nos hacemos cargo de la compra de hardware <br/> solo de la instalación.</p>
      </div>


    </div>


    </div>
  );
}

export default Paquetes;