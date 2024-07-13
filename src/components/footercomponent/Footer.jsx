import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    
    <footer className='footer'>
      <div className='footer-container'>
        <div className='social-icons'>
          <a href="https://facebook.com"><FaFacebook/></a>
          <a href="https://twitter.com"><FaTwitter/></a>
          <a href="https://instagram.com">< FaInstagram/></a>
          <a href="https://linkedin.com">< FaLinkedin /></a>
        </div>
        <p>&copy; 2024. All rights reserved</p>
      </div>
    </footer>

  );
};

export default Footer;


