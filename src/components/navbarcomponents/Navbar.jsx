import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const location = useLocation();
  return (
    <>
      <section className='Navbar-section'>
        <nav className='main'>
        <ul className={click ? "mobile-nav" : "main-nav"} onClick={() => setClick(false)}>
          <li><Link to= '/' className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to='/blogs' className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
          <li><Link to='/work'  className={location.pathname === '/work' ? 'active' : ''}>Works</Link></li>
          <li><Link to='/contact'  className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <button className='toggle' onClick={() => setClick(!click)}>           
          {click ?  <FaTimes /> :  <FaBars />}
           </button>
        </nav>
      </section>
    </>
  )
}

export default Navbar
