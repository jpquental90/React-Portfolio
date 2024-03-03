import React from 'react';
import './home.css'

// This should be a welcome landing page that contains:

// Your Name

// A headshot of you (or an avatar)

// Your brand statement

// Some indication that this is your portfolio site

function Home() {
  return (
    <div className="home-wrapper">
      <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Front-End Developer</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
      <div className="card card-picture" style={{width: '18rem'}}>
        <div className="card-body">
          <img src="images/profilepic.jpg" alt="profile picture" className="profile-pic"/>
        </div>
      </div>
    </div>
  );
}

export default Home;