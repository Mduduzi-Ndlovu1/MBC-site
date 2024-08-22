import React, { useState, useEffect, memo } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import data from '../utils';
import Button from './Button';
import ScrollReveal from 'scrollreveal';
import { theLogo } from '../assets/Gas water heaters';

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
        <a href="/" aria-label="Home">
          <img 
            src={theLogo} 
            alt="Company Logo" 
            width="160" 
            height="100" 
            loading="lazy" 
          />
        </a>
      </div>
      <div className={`nav_links ${isOpen ? 'open' : ''} reveal`}>
        {data.navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.path} 
            className="link" 
            onClick={() => setIsOpen(false)} // Close menu on link click
            aria-label={link.name}
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="reveal hidden md:block">
        <Button name="Request Quote" path="/contact" classname="btn" />
      </div>
      <button 
        className="mobile_menu_button md:hidden px-5 reveal" 
        onClick={toggleMenu} 
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <FaTimes className="menu_icon" /> : <FaBars className="menu_icon" />}
      </button>
    </nav>
  );
});

export default Navbar;
