import { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [selectedType, setSelectedType] = useState(''); // Estado para almacenar el tipo seleccionado

  useEffect(() => {
    axios.get('http://localhost:3000/getMenu')
      .then(response => {
        setMenu(response.data);
        setFilteredMenu(response.data); // Inicialmente muestra todos los elementos del menú
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Función para filtrar el menú por tipo de comida
  const filterMenuByType = (type) => {
    setSelectedType(type); // Actualiza el tipo seleccionado
    if (type === '') {
      setFilteredMenu(menu); // Si no hay tipo seleccionado, muestra todos los elementos del menú
    } else {
      const filtered = menu.filter(item => item.tipo === type);
      setFilteredMenu(filtered); // Filtra el menú por el tipo seleccionado
    }
  };

  return (
    <div>
      {/* Componente de filtro por tipo */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="tipoComida">Filtrar por tipo de comida:</label>{' '}
        <select id="tipoComida" value={selectedType} onChange={(e) => filterMenuByType(e.target.value)}>
          <option value="">Todos</option>
          <option value="Comida">Comida</option>

          <option value="Postre">Postre</option>
          <option value="Bebida">Bebida</option>
        </select>
      </div>

      {/* Tabla para mostrar el menú filtrado */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black', textAlign: 'center' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Nombre</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Precio</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Tipo</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredMenu.map(item => (
            <tr key={item.id} style={{ border: '1px solid black', textAlign: 'left' }}>
              <td style={{ padding: '10px' }}>{item.nombre}</td>
              <td style={{ padding: '10px' }}>${item.precio}</td>
              <td style={{ padding: '10px' }}>{item.tipo}</td>
              <td style={{ padding: '10px' }}>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Menu;
