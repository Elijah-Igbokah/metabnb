import React from 'react'
import { PlacesPreview } from "../Utilities/placesList.jsx"
import "./placesSection.styles.scss";

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
                            <div>
                                <p>{title}</p>
                                <p>{rate}</p>
                            </div>
                            <div>
                                <p>{distance}</p>
                                <p>{availability}</p>
                            </div>
                            <div></div>
                        </div>
                    )
                })
            }
        </div>

    </div>

  )
}

export default PlacesSection;