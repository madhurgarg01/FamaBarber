// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessData = {
    name: "Fama Barber Shop",
    phone: "+1 940-612-9127",
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`navbar navbar-expand-lg navbar-custom fixed-top ${isScrolled ? 'shadow-sm' : ''}`}
    >
      <div className="container">
        <ScrollLink className="navbar-brand" to="hero" smooth={true} duration={500} spy={true} offset={-80}>
          {businessData.name}
        </ScrollLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="hero" spy={true} smooth={true} duration={500} offset={-80}>Home</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-80}>About</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="services" spy={true} smooth={true} duration={500} offset={-80}>Services</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="gallery" spy={true} smooth={true} duration={500} offset={-80}>Gallery</ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-80}>Contact</ScrollLink>
            </li>

            {/* Phone number - styled to be visible */}
            <li className="nav-item d-none d-lg-flex align-items-center ms-3 me-2"> {/* Added me-2 for spacing */}
              <i className="bi bi-telephone-fill accent-text me-1"></i>
              {/* Make the phone number a link and apply nav-link for styling + explicit color for safety */}
              <a 
                href={`tel:${businessData.phone}`} 
                className="nav-link" 
                style={{ 
                  color: 'var(--text-light)', // Explicitly light
                  paddingTop: '0.5rem', // Standard nav-link padding
                  paddingBottom: '0.5rem',
                  paddingLeft: '0.2rem', // Reduced horizontal padding
                  paddingRight: '0.2rem',
                  margin: '0' // remove default nav-link margin if any
                }}
              >
                {businessData.phone}
              </a>
            </li>

            {/* Book Appointment Button */}
            <li className="nav-item mt-2 mt-lg-0"> {/* Removed ms-lg-X, relies on phone's me-2 */}
              <ScrollLink
  to="contact"
  smooth={true}
  duration={500}
  offset={-80}
  className="btn btn-custom-gold btn-sm" // This should be enough
  role="button"
>
  Book Appointment
</ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;