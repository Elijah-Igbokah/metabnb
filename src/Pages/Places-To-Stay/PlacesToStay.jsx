import React from 'react';
import { SecondaryNav } from '../../components/NavBar/NavLinks';
import { Link } from 'react-router-dom';
import {PlacesFullList} from "../../components/Utilities/placesList";
import stars from "../../Images/Frame 59528.svg";
import "./placesToStay.styles.scss";

const PlacesToStay = () => {
  return (
    <div className="places-to-stay">
        <div className="secondary-nav" >
          {
            SecondaryNav.map((link) => {
              return(
                <Link to={link.href}> {link.linkTitle} </Link>
              )
            })
          }
        </div>
        <div>
          <div className='places-full-list'>
              {
                  PlacesFullList.map(({image, title, rate, distance, availability}) => {
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
    </div>
  )
}

export default PlacesToStay;