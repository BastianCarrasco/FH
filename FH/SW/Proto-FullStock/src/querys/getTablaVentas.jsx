import { useEffect, useState } from 'react';
import axios from 'axios';

function TablaVentas() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/getVentas')
      .then(response => {
        setVentas(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Función para formatear la fecha y hora en el formato deseado
  const formatDateTime = (dateTimeStr) => {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return new Date(dateTimeStr).toLocaleString('es-ES', options);
  };

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Tabla de Ventas</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Nombre</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Cantidad</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Total</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Número de Orden</th>
            <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Fecha de Creación</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map(item => (
            <tr key={item.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.nombre}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.cantidad}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.total}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{item.numero_orden}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{formatDateTime(item.fecha_creacion)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaVentas;
