import React from 'react'
import './ProcessCard.css'

const ProcessCard = ({title, num}) => {
  return (
    <div className='processCard'>
        <span className="processCard_counter">{num}</span>
        <h3 className="processCard_title">{title}</h3>
        <p className="processCard_desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
    </div>
  )
}

export default ProcessCard