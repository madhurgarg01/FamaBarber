import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const businessData = {
    name: "Fama Barber Shop and Beauty Salon",
    addressShort: "500 N Bell Ave #109, Denton, TX",
    phone: "+1 940-612-9127",
  };
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer-section section-padding pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-brand accent-text">{businessData.name}</h5>
            <p className="mt-3" style={{color: "var(--text-muted-light)"}}>
              Classic cuts with modern style. Your premier destination for grooming and beauty in Denton.
            </p>
            <div className="social-icons mt-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><ScrollLink to="hero" smooth={true} duration={500} offset={-80}>Home</ScrollLink></li>
              <li><ScrollLink to="about" smooth={true} duration={500} offset={-80}>About Us</ScrollLink></li>
              <li><ScrollLink to="services" smooth={true} duration={500} offset={-80}>Services</ScrollLink></li>
              <li><ScrollLink to="gallery" smooth={true} duration={500} offset={-80}>Gallery</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} offset={-80}>Contact</ScrollLink></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Contact Us</h5>
            <ul className="list-unstyled contact-info">
              <li><i className="bi bi-geo-alt-fill me-2 accent-text"></i>{businessData.addressShort}</li>
              <li><i className="bi bi-telephone-fill me-2 accent-text"></i><a href={`tel:${businessData.phone}`}>{businessData.phone}</a></li>
              <li><i className="bi bi-envelope-fill me-2 accent-text"></i><a href="mailto:contact@famabarbershop.com">contact@famabarbershop.com</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Newsletter</h5>
            <p style={{color: "var(--text-muted-light)"}}>Subscribe to our newsletter for updates and special offers.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" className="form-control custom-form-control mb-2" />
              <button type="submit" className="btn btn-custom-gold w-100">Subscribe</button>
            </form>
          </div>
        </div>

        <hr style={{borderColor: "var(--border-color)", margin: "40px 0 20px"}}/>

        <div className="text-center" style={{color: "var(--text-muted-light)"}}>
          <p className="mb-0">© {currentYear} {businessData.name}. All rights reserved.
            {/* Optional: Designed by YourName/Devfrend */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;