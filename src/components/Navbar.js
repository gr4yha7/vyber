import React from 'react';
import './navbar.css';

const Navbar = () => (
    <div className="navbar-container">
      <nav className="navbar-main">
        <div className="navbar-left">
          <p className="navbar-brand">Vyber</p>
        </div>
        <div className="spacer"></div>
        <ul>
          <li>
            <p>Account</p>
          </li>
        </ul>
      </nav>
    </div>
);
export default Navbar;
