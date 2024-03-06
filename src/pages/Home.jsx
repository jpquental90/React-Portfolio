import React from 'react';
import './home.css'

// Returning the relevant HTML code for this section; as it was a small section I decided not to create separate components
function Home() {
  return (
    <div className="home-wrapper row justify-content-center main-content">
      <h1 className="page-title">Portfolio Home</h1>
      <div className="card card-about col-md-6" >
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
      <div className="card card-picture col-md-3">
        <div className="card-body">
          <img src="images/profilepic.jpg" alt="profile picture" className="profile-pic"/>
          <p className="card-text personal-name">Joana Quental</p>
        </div>
      </div>
    </div>
  );
}

export default Home;