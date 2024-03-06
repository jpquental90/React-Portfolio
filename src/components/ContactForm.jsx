import React, { useState } from 'react';

// Some handling event logic was included below. Not quite working yet, but I have been told it's not strictly required. To be continued going forward.
const ContactForm = () => {
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
    const { name, value } = e.target;
  
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    if (name === 'email') {
      const isValid = validateEmail(value);
      setErrorMessage(isValid ? '' : 'Your email is invalid.');
    } else {
      setErrorMessage('');
    }
  
    console.log('Handle Form', { ...formState, [name]: value });
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // This returns form HTML elements and a submit button
  return (
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
  );
};

export default ContactForm;