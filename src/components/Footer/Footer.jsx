import React from 'react'
import './Footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {SiGooglemaps} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__wrapper">
        <div className="footer__sections">
          <div className="footer__section">
            <h4 className="footer__section-title">About</h4>
            <p className="footer__section-desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-title">Pages</h4>
            <div className="footer__section-links">
              <a href="#home">Blog</a>
              <a href="#home">About</a>
              <a href="#home">Contact</a>
            </div>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-title">Resources</h4>
            <div className="footer__section-links">
              <a href="#home">Blog</a>
              <a href="#home">About</a>
              <a href="#home">Contact</a>
            </div>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-title">Pages</h4>
            <div className="footer__section-info">
              <span>
                <SiGooglemaps />
                <a href="mailto:info@gmail.com">info@gmail.com</a>
              </span>
              <span>
                <BsFillTelephoneFill />
                <a href="#home">+1 222 212 3819</a>
              </span>
              <span>
                <SiGooglemaps />
                <a href="#home">43 Raymouth Rd. Baltemoer, London 3910</a>
              </span>
            </div>
          </div>
        </div>
        <div className="footer__down">
          <span>Copyright ©2022 All rights reserved</span>
          <div className="footer__down-links">
            <a href="#home">Terms</a>
            <a href="#home">Privacy</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer