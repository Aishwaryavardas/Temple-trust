// Navbar.js (or wherever the navigation is defined)
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HomePage</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/daily-rituals">Daily Rituals</Link></li>
        <li><Link to="/community-programs">Community Programs</Link></li>
        <li><Link to="/pooja-services">Pooja Services</Link></li>
        <li><Link to="/donate">Donate</Link></li> {/* Link to Donate page */}
      </ul>
    </nav>
  );
};

export default Navbar;
