import React from 'react'
import { PlacesPreview } from "../Utilities/placesList.jsx"
import "./placesSection.styles.scss";
import stars from "../../Images/Frame 59528.svg";

const PlacesSection = () => {
  return (
    
    <div className='places-section'>
        <h1>Inspiration for your next adventure</h1>

        <div className='places-review'>
            {
                PlacesPreview.map(({image, title, rate, distance, availability}) => {
                    return(
                        <div className='places-card'>
                            <img src={image} alt="" />
                            <div className='first-line'>
                                <p>{title}</p>
                                <p style={{fontWeight: 700}}>{rate}</p>
                            </div>
                            <div className='second-line'>
                                <p>{distance}</p>
                                <p>{availability}</p>
                            </div>
                            <div><img src={stars} alt="" /></div>
                        </div>
                    )
                })
            }
        </div>

    </div>

  )
}

export default PlacesSection;