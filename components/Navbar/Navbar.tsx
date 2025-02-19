import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     console.log("ScrollY:", window.scrollY); // Debugging
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
    
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const [color, setColor] = useState(false)
  const ChangeColor = () => {
    if (window.scrollY >= 80){
      setColor(true)
    } else {
      setColor(false)
    }}
    window.addEventListener("scroll", ChangeColor)

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
          <li className="nav__item"><Link className="nav__link" to="/">Home</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/about">About Us</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/services">Services</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/featured">Give</Link></li>
          <li className="nav__item"><Link className="nav__link" to="/contact">Contact Us</Link></li>
        </ul>
        <button className="nav__close" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">×</button>
      </div>

      <button className="nav__toggle" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">☰</button>
    </nav>
  );
};

export default Navbar;

