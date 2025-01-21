import React, { useState } from "react";
import "./Navbar.css"; // Import your styles

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
  
      <nav className="nav container">
        <a className="nav__logo" href="#">
          Logo
        </a>

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                About us
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Featured
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Contact me
              </a>
            </li>
          </ul>
          <button
            className="nav__close"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <button
          className="nav__toggle"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          ☰
        </button>
      </nav>
   
  );
};

export default Navbar;
