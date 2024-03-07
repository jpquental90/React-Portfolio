import React from 'react';
import AboutCard from '../components/AboutCard';
import PictureCard from '../components/PictureCard';

// This function displays the home information by rendering the two relevant components
function Home() {
  return (
    <div className="home-wrapper row justify-content-center main-content">
      <h1 className="page-title">Portfolio Home</h1>
      <AboutCard />
      <PictureCard />
    </div>
  );
}

export default Home;