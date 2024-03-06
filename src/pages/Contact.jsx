import React from 'react';

// Contact page:

// Must include contact information:

// Email address
// Link to a PDF version of your CV
// Link to your GitHub profile
// Link to your LinkedIn page
// Must have a contact form for handling events

import { useState } from 'react';

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
    }
  };
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };
  return (
    <div className="contact-wrapper row justify-content-center main-content" >
    <h1>Contact</h1>
    <div className="card card-about col-md-5" >
        <div className="card-body">
          <p>Email: <a href="mailto:joanapquental@gmail.com">joanapquental@gmail.com</a></p>
          <p>CV: <a href="https://drive.google.com/file/d/16zIhyyGNWJulZ2MSxDCr4lp75qQEHJ_i/view?usp=sharing" target="_blank" rel="noopener noreferrer">PDF</a></p>
          <p>GitHub: <a href="https://github.com/jpquental90" target="_blank" rel="noopener noreferrer">https://github.com/jpquental90</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/joana-quental-31611a293/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/joana-quental-31611a293/</a></p>
        </div>
      </div>
      <div className="card card-about col-md-5" >
      <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
    </div>
    </div>
  );
}

export default Contact;