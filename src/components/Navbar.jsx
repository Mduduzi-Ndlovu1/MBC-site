import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import data from '../utils';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar_container">
      <div className="nav_logo">
        <Link to="/">
          <img src="src/assets/logo/Logo_Black-removebg-preview.png" alt="Logo" />
        </Link>
      </div>
      <div className={`nav_links ${isOpen ? 'open' : ''}`}>
        {data.navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="link" onClick={toggleMenu}>
            {link.name}
          </Link>
        ))}
      </div>
      <Button name="Request Quote" path="/contact" classname={"btn"}/>
      <button className="mobile_menu_button px-5" onClick={toggleMenu}>
        {isOpen ? <FaTimes className="menu_icon" /> : <FaBars className="menu_icon" />}
      </button>
    </nav>
  );
};

export default Navbar;
