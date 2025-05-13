import React from 'react';
import { motion } from 'framer-motion';
import './Services.css'; // Create this file

const servicesData = [
  {
    icon: "bi bi-scissors",
    title: "Precision Haircuts",
    description: "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades.",
    items: ["Classic Cuts", "Modern Styles", "Fades & Tapers", "Kids Cuts"]
  },
  {
    icon: "bi bi-person-hearts", // Example for beauty
    title: "Beard Grooming",
    description: "Maintain your facial hair with our premium beard services. We specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves.",
    items: ["Beard Trims", "Beard Shaping", "Hot Towel Shave", "Mustache Styling"]
  },
  {
    icon: "bi bi-gem",
    title: "Beauty Salon Services",
    description: "Enhance your look with our expert salon treatments, including hair coloring, styling, and revitalizing scalp treatments.",
    items: ["Hair Coloring", "Scalp Treatments", "Styling for Occasions", "Waxing (Eyebrows, etc.)"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0px 15px 25px rgba(0,0,0,0.3)",
    borderColor: "var(--accent-gold)",
    transition: { duration: 0.3 }
  }
};


const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="section-title">
          <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-uppercase accent-text">Premium Grooming & Beauty</motion.h5>
          <motion.h2 initial={{ opacity: 0, y:20 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>Our Barber & Salon Services</motion.h2>
        </div>
        <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center lead mb-5 mx-auto" style={{maxWidth: "700px", color: "var(--text-muted-light)"}}>
            Professional barbering and beauty services to keep you looking sharp for everyday confidence or special occasions.
        </motion.p>
        <div className="row gy-4">
          {servicesData.map((service, index) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="service-card">
                <div className="service-icon mb-3">
                  <i className={`${service.icon} accent-text`}></i>
                </div>
                <h4 className="mb-3">{service.title}</h4>
                <p style={{color: "var(--text-muted-light)"}}>{service.description}</p>
                <ul className="list-unstyled service-items">
                  {service.items.map((item, idx) => (
                    <li key={idx}><i className="bi bi-check-circle-fill me-2 accent-text"></i>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;