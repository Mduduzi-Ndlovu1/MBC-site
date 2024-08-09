import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import data from '../utils';
import Button from './Button';
import ScrollReveal from 'scrollreveal';

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      origin: 'top',
      interval: 100,
      reset: false,
    });
  }, []);

  return (
    <nav className="navbar_container reveal">
      <div className="nav_logo reveal">
        <Link to="/" aria-label="Home">
          <img 
            src="src/assets/logo/Logo_Black-removebg-preview.png" 
            alt="Company Logo" 
            width="160" 
            height="100" 
            loading="lazy" 
          />
        </Link>
      </div>
      <div className={`nav_links ${isOpen ? 'open' : ''} reveal`}>
        {data.navLinks.map((link) => (
          <Link key={link.name} to={link.path} className="link" onClick={toggleMenu}>
            {link.name}
          </Link>
        ))}
      </div>
      <div className="reveal hidden md:block">
        <Button name="Request Quote" path="/contact" classname={"btn"} />
      </div>
      <button 
        className="mobile_menu_button md:hidden px-5 reveal" 
        onClick={toggleMenu} 
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes className="menu_icon" /> : <FaBars className="menu_icon" />}
      </button>
    </nav>
  );
});

export default Navbar;
