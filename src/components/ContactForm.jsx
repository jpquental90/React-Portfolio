import React, { useState } from 'react';

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
      // Add your form submission logic here
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update the state using the callback function
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  
    // Validate email only if the field being changed is 'email'
    if (name === 'email') {
      const isValid = validateEmail(value);
      setErrorMessage(isValid ? '' : 'Your email is invalid.');
    } else {
      // Clear error message for other fields
      setErrorMessage('');
    }
  
    // Log the updated state after the state has been updated
    console.log('Handle Form', { ...formState, [name]: value });
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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