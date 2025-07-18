import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const servicesData = [
  {
    title: 'Artisan Haircut & Style',
    description: 'A bespoke haircut and style tailored to your unique features and lifestyle.',
    icon: '✂️',
  },
  {
    title: 'Color & Balayage Artistry',
    description: 'From subtle highlights to vibrant transformations, masterfully applied.',
    icon: '🎨',
  },
  {
    title: 'Luxury Manicure & Pedicure',
    description: 'Indulgent nail care that leaves you polished and pristine.',
    icon: '💅',
  },
  {
    title: 'Revitalizing Facials',
    description: 'Customized skin therapies to rejuvenate and restore your natural glow.',
    icon: '🌿',
  },
  {
    title: 'Bridal & Event Styling',
    description: 'Elegant, timeless looks for your most memorable occasions.',
    icon: '💍',
  },
  {
    title: 'Signature Spa Treatments',
    description: 'Holistic therapies designed to relax the mind and soothe the soul.',
    icon: '✨',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Signature Services</h2>
          <p className="section-subtitle">Indulge in treatments designed to perfection.</p>
        </div>
        <motion.div
          className="row gy-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div className="col-lg-4 col-md-6" key={index} variants={cardVariants}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
