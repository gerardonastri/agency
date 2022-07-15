import React from 'react'
import './FeaturesCard.css'

const FeaturesCard = ({title, icon}) => {
  return (
    <div className='featuresCard'>
      <div className="featuresCard__icon">{icon}</div>
      <a href="#home" className="featuresCard__title">{title}</a>
      <p className="featuresCard__desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    </div>
  )
}

export default FeaturesCard