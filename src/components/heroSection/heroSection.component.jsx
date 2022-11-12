import React from 'react';
import "./heroSection.styles.scss";
import heroImage from "../../Images/Group 4028.svg"

const HeroSection = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
          <h1>Rent a <span id='color-text'>Place</span> away from <span id='color-text'>Home</span> in the <span id='color-text'>Metaverse</span></h1>
          <h2>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</h2>
          <div className='search-bar'>
            <input type="text" placeholder='Search for location' />
            <button >Search</button>
          </div>
          
        </div>
        <div className='hero-image'>
          <img src={heroImage} alt="" />
        </div>
    </div>
  );
};

export default HeroSection;