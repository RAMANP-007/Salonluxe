import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { motion, useScroll } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top main-navbar glassmorphism">
        <div className="container-fluid">
          <RouterLink className="navbar-brand" to="/">
            <div className="brand-container">
              <div className="brand-logo">
                <img src="/images/logo.png" alt="SalonLuxe Logo" className="logo-img" />
              </div>
              <div className="brand-text">
                <span className="brand-name">SalonLuxe</span>
                <span className="brand-tagline">Luxury Hair & Beauty</span>
              </div>
            </div>
          </RouterLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <ScrollLink className="nav-link" to="services" smooth={true} duration={500}>Services</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="about" smooth={true} duration={500}>About</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="contact" smooth={true} duration={500}>Contact</ScrollLink>
              </li>
              <li className="nav-item ms-lg-3">
                <RouterLink className="btn btn-outline-light btn-book-now" to="/booking">Book Now</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
