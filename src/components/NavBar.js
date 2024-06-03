import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import './Responsive.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isSmallScreen = () => {
    return window.innerWidth <= 600; // Adjust the threshold as needed
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (isSmallScreen()) {
      if (!isOpen) {
        document.querySelector(".fa-chess-king").style.display = "block";
        document.querySelector(".fa-chess-board").style.display = "none";
        document.body.classList.add("noscroll");
      } else {
        document.querySelector(".fa-chess-king").style.display = "none";
        document.querySelector(".fa-chess-board").style.display = "block";
        document.body.classList.remove("noscroll");
      }
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (isSmallScreen()) {
      document.querySelector(".fa-chess-king").style.display = "none";
      document.querySelector(".fa-chess-board").style.display = "block";
      document.body.classList.remove("noscroll");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isSmallScreen()) {
        setIsOpen(false);
        document.querySelector(".fa-chess-king").style.display = "none";
        document.querySelector(".fa-chess-board").style.display = "none";
        document.body.classList.remove("noscroll");
      } else {
        document.querySelector(".fa-chess-board").style.display = "block";
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <img src="images/logo.png" className="logo" alt="Logo" />
      <ul className={isOpen ? 'open' : ''}>
        <li>
          <NavLink to="/" activeClassName="active" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/endeavors" activeClassName="active" onClick={closeMenu}>Endeavors</NavLink>
        </li>
        <li>
          <NavLink to="/catalogue" activeClassName="active" onClick={closeMenu}>Catalogue</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>Contact</NavLink>
        </li>
        <i className="fa-solid fa-chess-king" onClick={handleToggle}></i>
      </ul>
      <i className="fa-solid fa-chess-board" onClick={handleToggle}></i>
    </nav>
  );
}

export default NavBar;

