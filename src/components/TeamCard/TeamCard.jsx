import React, {useState} from 'react'
import './TeamCard.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'

const TeamCard = ({title, img, position}) => {

  const [showBorder, setShowBorder] = useState(false)

  return (
    <div className='serviceCard'>
      <div className="serviceCard__img" onMouseOver={() => setShowBorder(true)} onMouseOut={() => setShowBorder(false)} style={{height: '300px'}} >
        <img src={img} alt="service img"  />
        <div className={showBorder ? "service__img-border active" : "service__img-border" } />
      </div>
      <div className="serviceCard__title">
        <a href="#home">{title} </a>
      </div>
      <span className="position">{position}</span>
      <p className="serviceCard__desc">
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <div className="socials">
        <span className="social">
          <AiOutlineInstagram />
        </span>
        <span className="social">
          <AiOutlineTwitter />
        </span>
        <span className="social">
          <FaFacebookF />
        </span>
        <span className="social">
          <FaLinkedinIn />
        </span>
      </div>
    </div>
  )
}

export default TeamCard