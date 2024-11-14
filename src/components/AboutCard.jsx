import React from 'react';
import './aboutcard.css'

const AboutCard = () => {
  return (
    <div className="card card-about col-md-5 d-flex justify-content-center">
      <div className="card-body">
        <h5 className="card-title intro-title">Hello, I'm Joana</h5>
        <p>Welcome to my front-end development portfolio</p>
      </div>
    </div>
  );
};

export default AboutCard;