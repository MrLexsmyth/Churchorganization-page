import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (!prev) {
        document.body.classList.add("no-scroll"); // Disable scrolling
      } else {
        document.body.classList.remove("no-scroll"); // Enable scrolling
      }
      return !prev;
    });
  };

 
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("no-scroll"); // Enable scrolling
  };
 
  const [color, setColor] = useState(false)
  useEffect(() => {
    const ChangeColor = () => {
      if (window.scrollY >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
  
    window.addEventListener("scroll", ChangeColor);
    return () => window.removeEventListener("scroll", ChangeColor); // Cleanup event
  }, []);
  

  return (
    <nav className={color ? "nav navbar-bg container": "nav"}>
      <div className="logo-img">
        <Link to="/" className="logoarea">
          <img
            src={"/cglogo.jpg"}
            alt="Brand Logo"
            className="logo"
            width="70"
            height="68"
          />
        </Link>
      </div>

      <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
        <ul className="nav__list">
        <li className="nav__item">
            <Link className="nav__link" to="/" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/about" onClick={closeMenu}>About Us</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/services" onClick={closeMenu}>Services</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/featured" onClick={closeMenu}>Give</Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
        <button className="nav__close" onClick={toggleMenu} aria-label="Close menu">×</button>
      </div>

      <button className="nav__toggle" onClick={toggleMenu} aria-label="Open menu">☰</button>
    </nav>
  );
};

export default Navbar;

