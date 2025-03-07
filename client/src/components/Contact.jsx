import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>CONTACT</h2>
        <div className="contact-info">
          <p>I-5 Shweingyin Housing Place, Watrayantar Rd., Thingangyun Tsp. Yangon</p>
          <p>+95 996634128</p>
          <p>pyiheinaung92@gmail.com</p>
          <div className="social-links">
            <a href="https://github.com/Chen-Daniel04" className="social-link">GitHub</a>
            <a href="www.linkedin.com/in/oyi-hein-oung-68a41724+" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;