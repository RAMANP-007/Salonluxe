import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.5 },
  },
};

const itemVariants = (fromLeft = true) => ({
  hidden: { opacity: 0, x: fromLeft ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
});

const About = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      <div className="container">
        <div className="row align-items-center">
          <motion.div className="col-lg-6" variants={itemVariants(true)}>
            <div className="about-image-container">
              <img src="https://images.unsplash.com/photo-1552693673-1bf95829b51f?q=80&w=1974&auto=format&fit=crop" alt="Salon Interior" className="img-fluid about-image" />
            </div>
          </motion.div>
          <motion.div className="col-lg-6" variants={itemVariants(false)}>
            <div className="about-content">
              <h2 className="about-title">Our Sanctuary of Style</h2>
              <p className="about-text">
                Founded on a passion for transformative beauty, SalonLuxe is a haven where artistry and luxury converge. We are dedicated to providing a bespoke experience, using premium products in a serene environment designed for your ultimate relaxation.
              </p>
              <p className="about-text">
                Our team of master stylists are artisans of their craft, committed to continuous innovation. We believe beauty is a personal journey, and we are here to curate a look that is exquisitely and uniquely yours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
