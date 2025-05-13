// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Hook for simple fade-in on scroll (alternative to Framer Motion for some elements)
const useScrollFadeIn = () => {
  useEffect(() => {
    const targets = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    targets.forEach(target => observer.observe(target));

    return () => targets.forEach(target => observer.unobserve(target));
  }, []);
};


function App() {
  useScrollFadeIn(); // Initialize the simple fade-in observer

  // Initialize Bootstrap JS components if needed (e.g., dropdowns, collapse)
  useEffect(() => {
    // If you install 'bootstrap' JS bundle (npm install bootstrap)
    // and import it in main.jsx (import 'bootstrap/dist/js/bootstrap.bundle.min.js';)
    // then Bootstrap components like the navbar toggler will work automatically.
    // For Vite, dynamic import can be safer for tree-shaking if not all JS is needed:
    // async function loadBootstrapJS() {
    //   const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    //   // You can then initialize components manually if needed, e.g.:
    //   // var myCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), { toggle: false });
    // }
    // loadBootstrapJS();

    // For the navbar toggler specifically, data-bs-toggle and data-bs-target attributes
    // usually work out of the box if Bootstrap's CSS is loaded, but for full JS functionality
    // ensure the JS bundle is imported.
  }, []);


  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;