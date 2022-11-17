import React from 'react';
import ReactDOM from 'react-dom';
import cancel from "../../Images/second-page/more/x.svg";
import { Link } from 'react-router-dom';
import "./modal.styles.scss";
import metamask from "../../Images/second-page/more/Frame 195.png";
import walletconnect from "../../Images/second-page/more/Frame 195 (1).png";
import pointer from "../../Images/second-page/more/Down Chevron.png";

const Modal = (Props) => {

  return ReactDOM.createPortal (
    <div className='modal-wrapper'>
        <div className='modal'>
            <div className='first-line'>
                <h2>Connect Wallet</h2>
                <img src={cancel} alt="" onClick={Props.closeModal} />
            </div>
            <div className="second-line">
                <p>Choose your preferred wallet:</p>
                <Link className='modal-link'>
                    <img src={metamask} alt="" />
                    <img className='pointer' src={pointer} alt="" />
                </Link>
                <Link className='modal-link'>
                    <img src={walletconnect} alt="" />
                    <img className='pointer' src={pointer} alt="" />
                </Link>
            </div>
        </div>
    </div>,
    document.getElementById("modal-root")
    
  )
}

export default Modal;