import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const businessData = {
    address: "500 N Bell Ave #109, Denton, TX 76209, United States",
    phone: "+1 940-612-9127",
    email: "contact@famabarbershop.com", // Example email
    hours: [
      "Mon-Fri: 9:00 AM - 7:00 PM",
      "Sat: 9:00 AM - 5:00 PM",
      "Sun: Closed"
    ],
    googleMapsLink: "https://www.google.com/maps/dir//Fama+Barber+Shop+and+Beauty+Salon,+500+N+Bell+Ave+%23109,+Denton,+TX+76209,+United+States/@33.2207488,-97.1348966,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x864dcb6999175791:0x40b78717a8e9f459!2m2!1d-97.1327026!2d33.2207488"
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual submission logic (e.g., API call, emailjs)
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', service: '', date: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5s
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="section-title">
          <motion.h5 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="text-uppercase accent-text text-white">Get In Touch</motion.h5>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-white">Book Your Appointment</motion.h2>
        </div>
        <div className="row gy-5">
          <motion.div className="col-lg-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="contact-info-box p-4 rounded h-100" style={{backgroundColor: "var(--secondary-dark)"}}>
              <h4 className="mb-4 accent-text text-white">Contact Information</h4>
              <div className="info-item d-flex align-items-start mb-3">
                <i className="bi bi-geo-alt-fill fs-4 me-3 accent-text"></i>
                <div>
                  <strong className="text-white">Address:</strong><br />
                  <span className="text-white">{businessData.address}</span><br/>
                  <a href={businessData.googleMapsLink} target="_blank" rel="noopener noreferrer" className="accent-text">Get Directions</a>
                </div>
              </div>
              <div className="info-item d-flex align-items-start mb-3">
                <i className="bi bi-telephone-fill fs-4 me-3 accent-text"></i>
                <div>
                  <strong className="text-white">Phone:</strong><br />
                  <a href={`tel:${businessData.phone}`} className="text-light">{businessData.phone}</a>
                </div>
              </div>
               <div className="info-item d-flex align-items-start mb-3">
                <i className="bi bi-envelope-fill fs-4 me-3 accent-text"></i>
                <div>
                  <strong className="text-white">Email:</strong><br />
                  <a href={`mailto:${businessData.email}`} className="text-light">{businessData.email}</a>
                </div>
              </div>
              <div className="info-item d-flex align-items-start">
                <i className="bi bi-clock-fill fs-4 me-3 accent-text"></i>
                <div>
                  <strong className="text-white">Business Hours:</strong><br />
                  {businessData.hours.map((line, i) => <span key={i} className="text-white">{line}<br/></span>)}
                </div>
              </div>
              <div className="mt-4">
                <strong className="text-white">Rating:</strong> 4.6 stars (116+ reviews) <i className="bi bi-star-fill accent-text"></i><br/>
                <strong className="text-white">Status:</strong> Open ⋅ Closes 7 PM
              </div>
            </div>
          </motion.div>
          <motion.div className="col-lg-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <div className="contact-form p-4 p-md-5 rounded" style={{backgroundColor: "var(--secondary-dark)"}}>
              <h4 className="mb-4 text-white">Send Us a Message or Book</h4>
              {isSubmitted && <div className="alert alert-success">Thank you! Your message has been sent. We'll contact you shortly.</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-white">Your Name</label>
                  <input type="text" className="form-control custom-form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label text-white">Phone Number</label>
                  <input type="tel" className="form-control custom-form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="service" className="form-label text-white">Service Interested In</label>
                  <select className="form-select custom-form-control" id="service" name="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option value="haircut">Haircut</option>
                    <option value="beard_grooming">Beard Grooming</option>
                    <option value="beauty_service">Beauty Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label text-white">Preferred Date</label>
                  <input type="date" className="form-control custom-form-control" id="date" name="date" value={formData.date} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label text-white">Message</label>
                  <textarea className="form-control custom-form-control" id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit" className="btn btn-custom-gold w-100">Submit Request</button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
