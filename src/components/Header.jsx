import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

function Header() {
  return (
    <div className='d-flex navbar-wrapper'>
      <ul className="nav navbar header fixed-top justify-content-center">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className="nav-link"
            activeClassName="active-link" 
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            className="nav-link"
            activeClassName="active-link" 
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            end
            className="nav-link"
            activeClassName="active-link" 
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;