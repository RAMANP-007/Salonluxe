import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const portfolioData = [
  { img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop', title: 'Vibrant Color', category: 'Color & Balayage' },
  { img: 'https://images.unsplash.com/photo-1600965962362-94232d78eb05?q=80&w=800&auto=format&fit=crop', title: 'Elegant Updo', category: 'Event Styling' },
  { img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop', title: 'Pristine Manicure', category: 'Nail Artistry' },
  { img: 'https://images.unsplash.com/photo-1632345031435-8727f6897f53?q=80&w=800&auto=format&fit=crop', title: 'Sun-kissed Highlights', category: 'Color & Balayage' },
  { img: 'https://images.unsplash.com/photo-1556760544-4421763def42?q=80&w=800&auto=format&fit=crop', title: 'Chic Bob', category: 'Haircut & Style' },
  { img: 'https://images.unsplash.com/photo-1622288394299-a831de57373f?q=80&w=800&auto=format&fit=crop', title: 'Bridal Beauty', category: 'Event Styling' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const overlayVariants = {
  hidden: { opacity: 0, y: '100%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Gallery of Artistry</h2>
          <p className="section-subtitle">A glimpse into our world of beauty and craftsmanship.</p>
        </div>
        <motion.div
          className="row gy-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolioData.map((item, index) => (
            <motion.div className="col-lg-4 col-md-6" key={index} variants={itemVariants}>
              <motion.div className="portfolio-item" whileHover="visible" initial="hidden">
                <img src={item.img} alt={item.title} className="img-fluid" />
                <motion.div className="portfolio-overlay" variants={overlayVariants}>
                  <h4 className="portfolio-title">{item.title}</h4>
                  <p className="portfolio-category">{item.category}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
