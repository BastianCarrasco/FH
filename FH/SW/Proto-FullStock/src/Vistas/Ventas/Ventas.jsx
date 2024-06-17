import React from 'react';
import TablaVentas from '../../querys/getTablaVentas';
function Ventas() {
  return (
    <div>
      <h1>Página de Ventas</h1>
      <TablaVentas></TablaVentas>
    </div>
  );
}

export default Ventas;