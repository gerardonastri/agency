import React from 'react'
import './Map.css'

const Map = () => {
  return (
    <div className='map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6029.8798572012865!2d-74.171956!3d40.917063!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a4808bcc9b2d715!2sPaterson%20City%20Council!5e0!3m2!1sen!2sph!4v1657990670234!5m2!1sen!2sph" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map