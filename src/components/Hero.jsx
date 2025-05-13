import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './Hero.css'; // Create this file for specific Hero styles

const Hero = () => {
  const businessData = {
    name: "Fama Barber Shop and Beauty Salon",
    location: "500 N Bell Ave #109, Denton, TX 76209",
    tagline: "Classic Cuts, Modern Style",
    subTagline: "Premium Barber Shop & Beauty Salon",
    description: "At Fama Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere."
  };

  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 text-center text-lg-start">
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-uppercase accent-text mb-2"
            >
              Premium Barber Services in Denton
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="display-3 fw-bold"
            >
              {businessData.tagline}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="display-5 fw-normal accent-text mb-4"
            >
              {businessData.subTagline}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="lead mb-4" style={{color: "var(--text-muted-light)"}}
            >
              {businessData.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="d-flex align-items-center justify-content-center justify-content-lg-start mb-4"
            >
              <i className="bi bi-geo-alt-fill accent-text me-2 fs-5"></i>
              <span style={{color: "var(--text-muted-light)"}}>{businessData.location}</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="d-grid gap-2 d-md-flex justify-content-md-start"
            >
              <ScrollLink to="services" smooth={true} duration={500} offset={-80} className="btn btn-custom-outline btn-lg px-4 me-md-2">
                Our Services
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="btn btn-custom-gold btn-lg px-4">
                Book Now
              </ScrollLink>
            </motion.div>
          </div>
          <div className="col-lg-5 d-none d-lg-block mt-5 mt-lg-0">
            <motion.img
              src="https://via.placeholder.com/500x600/333333/DAA520?text=Fama+Team" // Replace with actual image
              alt="Fama Barber Shop Team"
              className="img-fluid rounded shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 100 }}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)'
              }}
              whileHover={{
                scale: 1.03,
                rotateY: -2,
                rotateX: 1,
                boxShadow: "0px 20px 30px rgba(0,0,0,0.3)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;