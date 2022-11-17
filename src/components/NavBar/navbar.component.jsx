import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from "../../Images/Group.svg";
import HamburgerMenu from '../hamburger/hamburger-menu.component';
import "./navbar.styles.scss";
import xIcon from "../../Images/second-page/more/x.svg";
import hamburger from "../../Images/second-page/more/icons8-menu-30.png";

import { NavLinks } from './NavLinks';

const NavBar = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  };

  const [toggleHamburger, setToggleHamburger] = useState(false);
  
  return (
    

    <div>
      <nav>
        <Link to="/" className='nav-logo'>
          <img src={Logo} alt="" />
        </Link>
        <div className='navLinks'>
          {
            NavLinks.map((link) => {
              return(
                <NavLink to={link.href}> {link.linkTitle} </NavLink>
              )
            })
          }
        </div>
        <div>
          <Link className="connect-btn" onClick={toggleModal} >Connect Wallet</Link>
        </div>
        <div className='hamburger-icons'>
          <img className={ toggleHamburger ? 'hamburger-icon-hidden' : 'hamburger-icon'} src={hamburger} alt=""  onClick={()=>setToggleHamburger(!toggleHamburger)}/>
                { toggleHamburger && <img className="x-icon" src={xIcon} alt="" onClick={()=>setToggleHamburger(!toggleHamburger)}/> }
        </div>
        
        
      </nav>
      <div className={ toggleHamburger ? 'hamburger-display' : 'hamburger-icon-hidden'}>
        <HamburgerMenu/>
      </div>
    </div>
    
    
    
  )
};

export default NavBar;