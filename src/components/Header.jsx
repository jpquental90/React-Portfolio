import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div className="navbar-wrapper d-flex align-items-center justify-content-between">
      <div className="logo-container d-flex align-items-center">
        <img src="images/JQlogo.png" alt="name logo" className="logo-pic" />
        <h3 className="name-title">Joana Quental</h3>
      </div>
      <ul className="nav navbar d-flex">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active-link"
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            end
            className="nav-link"
            activeClassName="active-link"
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;