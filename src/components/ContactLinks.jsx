import React from 'react';
import './contactlinks.css'

// Separate component for all the contact links, allowing it to be resuable as needed
const ContactLinks = () => {
  return (
    <div className="card contact-card">
      <div className="card-body contacts-body">
        <span className="contact-span">
          <img src="images/gmailicon.png" alt="gmail icon" className="contact-icon" />
          <a href="mailto:joanapquental@gmail.com">joanapquental@gmail.com</a>
        </span>
        <span className="contact-span">
          <img src="images/cvicon.png" alt="cv icon" className="contact-icon" />
          <a href="https://drive.google.com/file/d/1KWGlrNoWmbLU2K-ggDfMr5BBDWJbD75T/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
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
  );
};

export default ContactLinks;