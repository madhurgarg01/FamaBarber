import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './CTA.css';

const CTA = () => {
  return (
    <section id="cta" className="cta-section section-padding text-center">
      <div className="container">
        <motion.h2
          className="display-5 fw-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Ready for a Fresh Look?
        </motion.h2>
        <motion.p
          className="lead mb-5 mx-auto"
          style={{ maxWidth: '600px', color: 'var(--primary-dark)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Visit Fama Barbershop for premium men's grooming and beauty services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="btn btn-dark btn-lg px-5 me-3 mb-2 mb-md-0">
            Book an Appointment
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="btn btn-outline-dark btn-lg px-5">
            View Our Services
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;