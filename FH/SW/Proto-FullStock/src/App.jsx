import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';
import Caja from '../src/Vistas/Caja/Caja.jsx';
import Stock from '../src/Vistas/Stock/Stock.jsx';
import Ventas from './Vistas/Ventas/Ventas.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={
            <>

            <h1>Full$tock</h1>


            </>
          } />
          <Route path="/caja" element={<Caja />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/ventas" element={<Ventas />} />
          {/* Añade más rutas aquí según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
