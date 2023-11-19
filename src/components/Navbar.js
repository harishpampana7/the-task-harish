import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/login" className="nav-item">Login</Link>
      <Link to="/registration" className="nav-item">Registration</Link>
      <Link to="/products" className="nav-item">Product Listing</Link>
      <Link to="/cart" className="nav-item">Shopping Cart</Link>
    </div>
  );
};

export default Navbar;
