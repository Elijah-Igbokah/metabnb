import "./hamburger-menu.styles.scss";
import { NavLinks } from '../NavBar/NavLinks';
import { NavLink, Link } from "react-router-dom";


const HamburgerMenu =()=>{
    return(
        <div className="hamburger-link-container">
            <div className="hamburger-links">
                <div className="hamburger-list">
                    <div className="hamburger-link">
                        {
                            NavLinks.map((link) => {
                                return(
                                    <NavLink to={link.href}> {link.linkTitle} </NavLink>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Link className="connect-btn" >Connect Wallet</Link>
                    </div>
                </div>                   
            </div>
        </div>
    )
};

export default HamburgerMenu;