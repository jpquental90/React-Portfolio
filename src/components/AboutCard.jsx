import React from 'react';
import './aboutcard.css'

const AboutCard = () => {
  return (
    <div className="card card-about col-md-6 d-flex justify-content-center">
      <div className="card-body">
        <h5 className="card-title intro-title">Front-End Developer</h5>
        <ul>
          <li>Junior Front-End Developer with a Front-End Development Certificate from edX</li>
          <li>Always eager to learn more and open to working with other languages and tools</li>
          <li>Extensive background in supporting people, working collaboratively, and liaising effectively with other agencies, in positions of high responsibility</li>
          <li>Known for determination, curiosity, attention to detail and problem-solving skills</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCard;