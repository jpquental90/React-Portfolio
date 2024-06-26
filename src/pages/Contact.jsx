import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactLinks from '../components/ContactLinks';

// The Contact page renders two components which were created separately
const Contact = () => {
  return (
    <div className="contact-wrapper row d-flex justify-content-center main-content">
      <h1 className="page-title">Contact</h1>
      {/* <ContactForm /> */}
      <ContactLinks />
    </div>
  );
}

export default Contact;