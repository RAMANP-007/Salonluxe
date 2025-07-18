import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <motion.h2 className="section-title" variants={itemVariants}>Get in Touch</motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            We're here to help you on your journey to beauty and relaxation.
          </motion.p>
        </div>
        <div className="row justify-content-center">
          <motion.div className="col-lg-8" variants={itemVariants}>
            <form className="contact-form">
              <div className="row g-3">
                <div className="col-md-6 form-floating mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="col-md-6 form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                  <label htmlFor="email">Your Email</label>
                </div>
                <div className="col-12 form-floating mb-3">
                  <textarea className="form-control" id="message" placeholder="Your Message" style={{ height: '150px' }} required></textarea>
                  <label htmlFor="message">Your Message</label>
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary contact-submit-btn">Send Message</button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
