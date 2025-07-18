import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';

const socialVariants = {
  hover: {
    scale: 1.2,
    color: '#fff',
    textShadow: '0 0 10px #fff, 0 0 20px var(--glow-color)',
    transition: { duration: 0.3 },
  },
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-12 footer-about">
            <h4 className="footer-widget-title">SalonLuxe</h4>
            <p>Your sanctuary for beauty and relaxation. We combine artistry with luxury to create an unforgettable experience.</p>
          </div>

          <div className="col-lg-2 col-md-4 col-6">
            <h4 className="footer-widget-title">Explore</h4>
            <ul className="list-unstyled footer-links">
              <li><ScrollLink to="hero" smooth={true} duration={500}>Home</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <h4 className="footer-widget-title">Contact</h4>
            <ul className="list-unstyled footer-contact">
              <li>123 Luxury Lane, Glamour City</li>
              <li>(123) 456-7890</li>
              <li>contact@salonluxe.com</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4">
            <h4 className="footer-widget-title">Newsletter</h4>
            <p>Stay updated with our latest offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">&#x27A4;</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} SalonLuxe. All Rights Reserved.</p>
          </div>
          <div className="footer-socials">
            <motion.a href="#" style={{'--glow-color': '#1877F2'}} variants={socialVariants} whileHover="hover">FB</motion.a>
            <motion.a href="#" style={{'--glow-color': '#E4405F'}} variants={socialVariants} whileHover="hover">IG</motion.a>
            <motion.a href="#" style={{'--glow-color': '#1DA1F2'}} variants={socialVariants} whileHover="hover">TW</motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
