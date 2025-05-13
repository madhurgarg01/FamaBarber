import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // Import the CSS
import famaShopExteriorImage from '../assets/Screenshot 2025-05-13 215407.png';
;
 // Make sure image is imported

const About = () => {
  const businessData = {
    established: 2018,
    mission: "Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.",
  };
  const ourCommitment = "While we strive for premium quality, we're always working to ensure our value matches the exceptional experience and results we provide, aiming to be the best in Denton.";

  return (
    <section id="about" className="section-padding about-section"> {/* Added .about-section class for specific styling */}
      <div className="container">
        <div className="section-title">
          <motion.h5 /* ... */ className="text-uppercase accent-text">Our Story</motion.h5>
          <motion.h2 /* ... */>About Fama Barbershop</motion.h2>
        </div>
        <div className="row align-items-center">
          <motion.div
            className="col-lg-6 mb-4 mb-lg-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src={famaShopExteriorImage}
              alt="Fama Barbershop Exterior"
              className="img-fluid rounded shadow-lg"
            />
          </motion.div>
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            {/* Apply text color class or style here */}
            <p className="lead about-text"> {/* Added .about-text */}
              Established in {businessData.established}, Fama Barbershop has been providing premium grooming services to the men (and women for beauty services) of Denton, TX. {businessData.mission}
            </p>
            <div className="mt-4 p-4 rounded about-quote-block"> {/* Added .about-quote-block */}
              <p className="fst-italic mb-0"> {/* This will inherit from .about-quote-block */}
                <i className="bi bi-quote me-2 accent-text fs-4"></i>
                {ourCommitment} We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best.
              </p>
            </div>
            <p className="mt-3 about-text"> {/* Added .about-text */}
                Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;