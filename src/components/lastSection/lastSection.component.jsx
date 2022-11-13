import React from 'react'
import { Link } from 'react-router-dom';

import sectionImage from "../../Images/Frame 59546.svg";

import "./lastSection.styles.scss";

const LastSection = () => {
  return (
    <div className='last-section'>
        <div className='text'>
            <h1>Metabnb NFTs</h1>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <Link>Learn More</Link>
        </div>
        <div className='image'>
          <img src={ sectionImage } alt="" />
        </div>
    </div>
  )
}

export default LastSection