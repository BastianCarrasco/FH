import React from 'react';
import { Link } from 'react-router-dom';
import '../src/App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">FullStock</Link>
      </div>
      <ul className="navbar-links" style={{fontSize:"10px"}}>
        <li><Link to="/caja">Caja</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li style={{marginRight:'100px'}}><Link to="/ventas">Ventas</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
