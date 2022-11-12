import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from "../../Images/Group.svg";
import "./navbar.styles.scss";

import { NavLinks } from './NavLinks';

const NavBar = () => {

  
  return (
    <nav>
      <div className='nav-logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='navLinks'>
        {
          NavLinks.map((link) => {
            return(
              <NavLink> {link.linkTitle} </NavLink>
            )
          })
        }
      </div>
      <div>
        <Link className="connect-btn" >Connect Wallet</Link>
      </div>
    </nav>
  )
};

export default NavBar;