import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
      // Add your form submission logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state using the callback function
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Log the updated state after the state has been updated
    console.log('Handle Form', { ...formState, [name]: value });
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="contact-wrapper row d-flex justify-content-center main-content" >
      <h1 className="page-title">Contact</h1>

      
      <div className="card col-md-5">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={handleChange}
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
      <div className="card contact-card" >
        <div className="card-body">
          <span className="contact-span">
            <img src="images/gmailicon.png" alt="gmail icon" className="contact-icon" />
            <a href="mailto:joanapquental@gmail.com">joanapquental@gmail.com</a>
          </span>
          <span className="contact-span">
            <img src="images/cvicon.png" alt="cv icon" className="contact-icon" />
            <a href="https://drive.google.com/file/d/16zIhyyGNWJulZ2MSxDCr4lp75qQEHJ_i/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
          </span>
          <span className="contact-span">
            <img src="images/githubicon.png" alt="github icon" className="contact-icon" />
            <a href="https://github.com/jpquental90" target="_blank" rel="noopener noreferrer">GitHub</a>
          </span>
          <span className="contact-span">
            <img src="images/linkedinicon.png" alt="linkedin icon" className="contact-icon" />
            <a href="https://www.linkedin.com/in/joana-quental-31611a293/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;