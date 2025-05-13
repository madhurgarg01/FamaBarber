import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  { src: "https://via.placeholder.com/400x300/555555/DAA520?text=Fresh+Cut", alt: "Fresh Haircut" },
  { src: "https://via.placeholder.com/400x300/555555/DAA520?text=Shop+Vibes", alt: "Barbershop Atmosphere" },
  { src: "https://via.placeholder.com/400x300/555555/DAA520?text=Happy+Client", alt: "Happy Client" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding" style={{backgroundColor: "var(--secondary-dark)"}}>
      <div className="container">
        <div className="section-title">
          <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-uppercase accent-text">Our Work & Shop</motion.h5>
          <motion.h2 
  className="gallery-heading"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  Our Barbershop Gallery
</motion.h2>

        </div>
        <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center lead mb-5 mx-auto" style={{maxWidth: "700px", color: "var(--text-muted-light)"}}>
            Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </motion.p>
        <div className="row gy-4">
          {galleryImages.map((image, index) => (
            <motion.div
              className="col-lg-4 col-md-6"
              key={index}
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(5px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.05, zIndex: 10, boxShadow: "0 10px 20px rgba(0,0,0,0.3)"}}
            >
              <div className="gallery-item">
                <img src={image.src} alt={image.alt} className="img-fluid rounded" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;