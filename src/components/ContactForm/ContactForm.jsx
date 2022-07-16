import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contactForm'>
        <div className="flex">
            <div className="inputGroup">
                <label htmlFor="first">First Name</label>
                <input type="text" name="first" id="first" />
            </div>
            <div className="inputGroup">
                <label htmlFor="last">Last Name</label>
                <input type="text" name="last" id="last" />
            </div>
        </div>
        <div className="inputGroup">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="email" />
        </div>
        <div className="inputGroup">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button className="custom-button">SEND MESSAGE</button>
    </div>
  )
}

export default ContactForm