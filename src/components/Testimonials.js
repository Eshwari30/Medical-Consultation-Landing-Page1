// components/Testimonials.js

import React from 'react';
// import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonial-card">
        <p>
          "I had a great experience with the medical team. They were caring,
          attentive, and provided top-notch service."
        </p>
        <span>- John Doe, Patient</span>
      </div>
      <div className="testimonial-card">
        <p>
          "The consultation process was smooth, and the doctors were
          knowledgeable. I highly recommend this medical center."
        </p>
        <span>- Jane Smith, Patient</span>
      </div>
    </section>
  );
}

export default Testimonials;