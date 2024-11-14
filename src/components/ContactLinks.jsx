import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './contactlinks.css'

const ContactLinks = () => {
  return (
    <div className="card contact-card">
      <div className="card-body contacts-body">

        <span className="contact-span">
        <a href="mailto:joanapquental@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={30} className="contact-icon email-icon" /></a>
        </span>

        <span className="contact-span">
          <a href="https://drive.google.com/file/d/1KWGlrNoWmbLU2K-ggDfMr5BBDWJbD75T/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <FaFileAlt size={30} className="contact-icon cv-icon" /></a>
        </span>

        <span className="contact-span">    
        <a href="https://github.com/jpquental90" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30} className="contact-icon github-icon" />
        </a>
        </span>

        <span className="contact-span">
        <a href="https://www.linkedin.com/in/joana-quental-31611a293/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30} className=" contact-icon linkedin-icon" /></a>
        </span>
      </div>
    </div>
  );
};

export default ContactLinks;