import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTelegramPlane, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src="" alt="" />
        <p>Abyssinia Jewelry</p>
        </div>
        <ul className="footer-links">
    <li>Company</li>
    <li>Product</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
       </ul>
       <div className="footer-social-icon">
       <div className="footer-icons-container">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} size="2x" />
        </a>

    </div>
    <div className="footer-icons-container">
    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegramPlane} size="2x" />
        </a>
    </div>
    <div className="footer-icons-container">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>

       </div>
       <div className="footer-copy-right">
        <hr />
        <p>&copy; {new Date().getFullYear()} AAIT Electrical and Computer Engineering Section 3B Group 1 Students. All Rights Reserved.</p>
    
      </div>







<div/>


    

    </div>
  )
}

export default Footer
