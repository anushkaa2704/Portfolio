import React, { useState } from 'react';
import './Navbar.css';
import "boxicons/css/boxicons.min.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuActive(false); // close menu on mobile after click
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h2><i className='bx bxs-home'></i>Portfolio</h2>
      </div>

      <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
        <li onClick={() => handleScroll('home')}>Home</li>
        <li onClick={() => handleScroll('skills')}>Skills</li>
        <li onClick={() => handleScroll('projects')}>Projects</li>
        <li onClick={() => handleScroll('certifications')}>Certifications</li>
        <li onClick={() => handleScroll('contact')}>Contact</li>
      </ul>

      <div id="menu" className="menu-icon" onClick={toggleMenu}>
        <i className='bx bx-menu'></i>
      </div>
    </div>
  );
}

export default Navbar;
