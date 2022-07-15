import React, { useState } from 'react'
import './Navbar.css'
import {RiArrowDownSLine} from 'react-icons/ri'

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <h1 className="navbar__logo">PageOne.</h1>
        <div className={isActive ? 'navbar__links active' : 'navbar__links'}>
          
          <a href="#home" className="navbar__link">
            Home
          </a>
          <div className="dropdown-container" onMouseEnter={() => setShowDropdown(true)} onClick={() => setShowDropdown(prev => !prev)}>
            <span className="navbar__link" style={{display: 'flex', alignItems: 'center'}}>
              Services
              <RiArrowDownSLine style={{marginLeft: '5px', color: 'rgba(0, 0, 0, 0.7)'}} />
            </span>
              <div className={showDropdown ? 'dropdown active' : 'dropdown'}  onMouseLeave={() => setShowDropdown(false)}>
                <a href="#services" className="dropdown-el">
                  <span>Sub Menu One</span>
                </a>
                <a href="#services" className="dropdown-el">
                  <span>Sub Menu Two</span>
                </a>
                <a href="#services"  className="dropdown-el">
                  <span>Sub Menu Three</span>
                </a>
            </div>
          </div>
          <a href="#process" className="navbar__link">
            Process
          </a>
          <a href="#clients" className="navbar__link">
            Clients
          </a>
          <a href="#about" className="navbar__link">
            About
          </a>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </div>
          <div className='hamburger' onClick={() => {
              setIsActive(prev => !prev);
               setShowDropdown(false)
            }}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
      </div>
    </div>
  )
}

export default Navbar