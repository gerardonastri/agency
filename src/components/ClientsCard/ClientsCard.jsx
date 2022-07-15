import React from 'react'
import './ClientsCard.css'

const ClientsCard = ({title, img}) => {
  return (
    <div className='clientsCard'>
      <img src={img} className="clientsCard__logo" alt="clients card logo" />
      <h3 className="clientsCard__title">{title}</h3>
      <div className="clientsCard__desc">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
    </div>
  )
}

export default ClientsCard