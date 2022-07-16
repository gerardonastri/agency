import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import './Contact.css'
import {FaHome} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import Map from '../../components/Map/Map'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className="service__wrapper">
        <div className="service__info-title">
          <div>
            <div className="service__line" />
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="contact__content">
          <ContactForm />

          <div className="contact__content-infoContainer">
            <div className="contact__content-info">
              <span className="contact__icon"><FaHome /></span>
              <span className="contact__content-info_desc">155 Market St #101, Paterson, NJ 07505, United States</span>
            </div>
            <div className="contact__content-info">
              <span className="contact__icon"><BsFillTelephoneFill /></span>
              <span className="contact__content-info_desc">+1 202 2020 200</span>
            </div>
            <div className="contact__content-info">
              <span className="contact__icon"><GrMail /></span>
              <span className="contact__content-info_desc">@info@mydomain.com</span>
            </div>
          </div>
    
        </div>
        <Map />
      </div>
    </div>
  )
}

export default Contact