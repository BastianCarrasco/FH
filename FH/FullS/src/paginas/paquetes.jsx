

function Paquetes() {
  const paquetes = [
    {
      id: 1,
      nombre: "Free",
      descripcion: "Descarga la versión de prueba de la aplicación. La cual permite ver y manejar limitadamente la aplicación.",
      precio: "Gratis",
      imagen: "paqueteA.jpg"
    },
    {
      id: 2,
      nombre: "Aplicación de Escritorio",
      descripcion: "Descarga la app completa del software. Con control y manejo de la base de datos.",
      precio: "$70",
      imagen: "paqueteB.jpg"
    },
    {
      id: 3,
      nombre: "Aplicación de Escritorio Personalizado + Hardware",
      descripcion: "Descarga la app completa del software personalizado para el cliente. Con control y manejo de la base de datos e instalación de hardware (impresora, tablet y conexión a dispositivos remotos como celulares y tablets).",
      precio: "Personalizado",
      imagen: "paqueteC.jpg"
    }
  ];

  const handleDownload = (nombreZip) => {
    // Crear un Blob vacío
    const blob = new Blob([''], { type: 'application/zip' });
    // Crear una URL para el Blob
    const url = URL.createObjectURL(blob);
    // Crear un enlace temporal y hacer clic en él para descargar
    const link = document.createElement('a');
    link.href = url;
    link.download = nombreZip; // Utiliza el nombre proporcionado para el archivo ZIP
    link.click();
    // Liberar la URL del Blob
    URL.revokeObjectURL(url);
  };

  return (
    <div className="paquetes-container">
      <h2>Catálogo de Paquetes</h2>
      <div className="paquetes-grid">
        {paquetes.map(paquete => (
          <div key={paquete.id} className="paquete-card" onClick={() => handleDownload(paquete.nombre)}>
            <div className="paquete-placeholder">
              <div className="dibujo-placeholder"></div>
            </div>
            <img src={paquete.imagen} alt={paquete.nombre} className="paquete-imagen" />
            <div className="paquete-info">
              <h3 className="paquete-nombre">{paquete.nombre}</h3>
              <p className="paquete-descripcion">{paquete.descripcion}</p>
              <p className="paquete-precio">{paquete.precio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paquetes;
