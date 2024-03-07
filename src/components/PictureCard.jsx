import React from 'react';
import './picturecard.css'

const PictureCard = () => {
  return (
    <div className="card card-picture col-md-3">
      <div className="card-body">
        <img src="images/profilepic.jpg" alt="profile picture" className="profile-pic"/>
        <p className="card-text personal-name">Joana Quental</p>
      </div>
    </div>
  );
};

export default PictureCard;