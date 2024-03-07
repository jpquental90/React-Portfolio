import React, { useState } from 'react';
import './contactform.css'

// Form handling events logic
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === 'password') {
      value = value.substring(0, 15);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email) {
      setErrorMessage('Fill out your name and email, please!');
      return;
    }

    // Form submission logic here - we have not covered how to do this

    // Reseting form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Clearing error message
    setErrorMessage('');
  };

  // Returning the HTML form content
  return (
    <div className="card col-md-5">
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <div className="form-element">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            autoComplete="name"
          />
        </div>
        <div className="form-element">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>
        <div className="form-element">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            autoComplete="off"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" disabled={!!errorMessage} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;