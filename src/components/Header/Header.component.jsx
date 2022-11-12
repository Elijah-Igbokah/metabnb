import React from 'react'
import HeroSection from '../heroSection/heroSection.component';
import NavBar from '../NavBar/navbar.component';
import "./Header.styles.scss";

import icon1 from "../../Images/Group 59537.svg";
import icon2 from "../../Images/Group 4040.svg";
import icon3 from "../../Images/Frame 4041.svg";

const Header= () => {
  return (
    <div>
        <div className='header'>
            <NavBar />
            <HeroSection />
            
        </div>
        <div className='icon-banner'>
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
        </div>
    </div>
  )
};

export default Header;