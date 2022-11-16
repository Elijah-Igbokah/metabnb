import React from "react";
import Facebook from "../../Images/facebook-263-721950.svg";
import Instagram from "../../Images/instagram-216-721958.svg";
import Twitter from "../../Images/twitter-241-721979.svg";
import Metabnb from "../../Images/logo-black.svg";

import Copyright from "../../Images/Group 1355.svg";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer">
        <div className="first-row">
            <div className="footer-logo">
                <img src={Metabnb} className='' alt=''/>
            </div>
            <div className="socials">
                <img src={Facebook} alt=''/>
                <img src={Instagram} alt=''/>
                <img src={Twitter} alt='' />
            </div>
            <img src={Copyright} alt='copyright' id="copyright"/>
        </div>
        <div className="second-row">
            <div className="column-heading">Community</div>
            <ul className="list-items">
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
            </ul>
        </div>
        <div className="third-row">
            <div className="column-heading">Places</div>
            <ul className="list-items">
                <li>Castle</li>
                <li>Farms</li>
                <li>Beach</li>
                <li>Learn more</li>
            </ul>
        </div>
        <div className="fourth-row">
            <div className="column-heading">About us</div>
            <ul className="list-items">
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
        </div>







      {/* <div className="">
        
        <div className="">
          
          <div className="" >
            
          </div>
          <div className="">
            
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;