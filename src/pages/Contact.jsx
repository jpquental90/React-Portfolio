import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactLinks from '../components/ContactLinks';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper row d-flex justify-content-center main-content">
      <h1 className="page-title">Contact</h1>
      <ContactForm />
      <ContactLinks />
    </div>
  );
}

export default Contact;