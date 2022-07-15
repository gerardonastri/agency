import React, { useState } from 'react'
import './ServiceCard.css'

const ServiceCard = ({title, img}) => {

  const [showBorder, setShowBorder] = useState(false)

  return (
    <div className='serviceCard'>
      <div className="serviceCard__img" onMouseOver={() => setShowBorder(true)} onMouseOut={() => setShowBorder(false)}>
        <img src={img} alt="service img"  />
        <div className={showBorder ? "service__img-border active" : "service__img-border" } />
      </div>
      <div className="serviceCard__title">
        <a href="#home">{title} </a>
      </div>
      <p className="serviceCard__desc">
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
    </div>
  )
}

export default ServiceCard