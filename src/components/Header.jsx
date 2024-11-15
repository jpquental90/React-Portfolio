import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.querySelector('.navbar-collapse').classList.remove('show');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Logo */}
        <div className="logo-container d-flex align-items-center">
          <img src="images/JQlogo.png" alt="name logo" className="logo-pic" />
          <h3 className="name-title">Joana Quental</h3>
        </div>

        {/* Toggler Button with Dynamic Icon */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✖' : <span className="navbar-toggler-icon"></span>}
        </button>

        {/* Collapsible Menu */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                onClick={closeMenu}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
