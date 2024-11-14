import React from 'react';
import './picturecard.css'

const PictureCard = () => {
  return (
    <div className="card card-picture col-md-5">
        <img src="images/profilepic.jpg" alt="profile picture" className="profile-pic"/>
    </div>
  );
};

export default PictureCard;