import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)',
    transition: { duration: 0.3 },
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="container">
        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Elegance in Every Strand
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial="hidden"
          animate="visible"
          variants={{ ...textVariants, transition: { ...textVariants.transition, delay: 0.3 } }}
        >
          Discover the art of beauty and sophistication.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            animate="float"
          >
            <Link to="/booking" className="btn btn-lg hero-cta-btn">
              Book Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
