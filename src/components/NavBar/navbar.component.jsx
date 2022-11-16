import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from "../../Images/Group.svg";
import Modal from '../modal/modal.component';
import "./navbar.styles.scss";

import { NavLinks } from './NavLinks';

const NavBar = () => {

  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal);
  };
  
  return (

    <div>
      <nav>
        <div className='nav-logo'>
          <img src={Logo} alt="" />
        </div>
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
      </nav>

      <div className={ modal ? "modal-display" : "modal-hidden"}>
        <Modal />
      </div>
    </div>
    
    
    
  )
};

export default NavBar;