import React, { useState} from "react";
import "./Navbar.css"; // Import your styles
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };



  return (
  
    <nav className="nav container">

        <div  className="logo-img" >
            <Link to="/" className='logoarea'>
            <img src={'/cglogo.jpg'} alt="Brand Logo"  width="70" height="68"/>
            </Link>
        </div>
          

        <div
          className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
          <li className="nav__item">
          <Link className="nav__link" to="/">Home</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/about">About us</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/services">Services</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/featured">Featured</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/contact">Contact me</Link>
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
