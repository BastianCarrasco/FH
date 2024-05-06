import React from 'react';

function Home() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div>
        <p>Contenido de la primera columna</p>
      </div>
      <div>
        <p>Contenido de la segunda columna</p>
      </div>
    </div>
  );
}

export default Home;
