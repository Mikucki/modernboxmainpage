import React, { useState } from "react";
import "./styles.css"; // Make sure to import your CSS file

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-header">
        <span className="logo">Logo</span>
        <label htmlFor="toggle" className="menu-btn" onClick={toggleMenu}>
          &#9776;
        </label>
      </div>
      <input type="checkbox" id="toggle" />
      <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
