// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><img src="/logo.png" alt="Logo" /></Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/billing">Billing Page</Link>
      </div>
    </nav>
  );
};

export default Navbar;
