import React from 'react';
import AboutCard from '../components/AboutCard';
import PictureCard from '../components/PictureCard';
import ContactLinks from '../components/ContactLinks';

const About = () => {
  return (
    <div className="contact-wrapper row d-flex justify-content-center main-content">
      <PictureCard />
      <AboutCard />
      <ContactLinks />
    </div>
  );
}

export default About;